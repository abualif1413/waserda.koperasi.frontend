import React, { Component } from 'react';
import CtrlTextBoxWithCol from '../../components/ctrltextbox/CtrlTextBoxWithCol';
import Panel from '../../components/panel/Panel';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {connect} from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginLoading: false,
            username: "",
            password: "",
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginAttempt = this.loginAttempt.bind(this);
    }

    handleUsername = (val) => {
        this.setState({username: val});
    }

    handlePassword = (val) => {
        this.setState({password: val});
    }

    loginAttempt = (e) => {
        e.preventDefault();
        this.setState({loginLoading: true}, () => {

            Axios.post(this.props.APIAddress + "login", {
                email: this.state.username,
                password: this.state.password
            })
            .then((r) => {
                this.setState({loginLoading: false});
                if(r.data.success == 1) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil',
                        text: r.data.message,
                    })
                    .then(() => {
                        // Lakukan penyimpanan informasi user di redux
                        this.props.successLogin(r.data.token);
                        this.props.history.push("/");
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal',
                        text: r.data.message,
                    })
                    .then(() => {
                        
                    });
                }
            })
            .catch((r) => {

            });

        });
    }

    render() {
        // console.log(this.state);
        console.log(this.props);
        let {username, password} = this.state;
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height: "500px"}}>
                <div className="col-sm-3">
                    <form onSubmit={this.loginAttempt}>
                        <div className="row">
                            <CtrlTextBoxWithCol nilai={username} handle={(val) => this.handleUsername(val)} col="12" id="txtUsername" label="Username" />
                        </div>

                        <div className="row">
                            <CtrlTextBoxWithCol nilai={password} handle={(val) => this.handlePassword(val)} col="12" id="txtPassword" label="Password" type="password" />
                        </div>

                        {
                            this.state.loginLoading == true ?
                            <button className="btn btn-primary btn-block disabled"><i className="fa fa-key"></i>&nbsp;loading...</button> :
                                <button className="btn btn-primary btn-block"><i className="fa fa-key"></i>&nbsp;Login ke aplikasi</button>
                        }
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        APIAddress: state.APIAddress,
        token: state.UserToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        successLogin: (token) => dispatch({type: "DO_LOGIN", userToken: token})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);