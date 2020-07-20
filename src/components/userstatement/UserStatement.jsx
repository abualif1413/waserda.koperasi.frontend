import React, { Component } from 'react';
import Axios from 'axios';
import moment from 'moment';
import {connect} from 'react-redux';
import Skeleton from 'react-loading-skeleton';

class UserStatement extends Component {
    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
        this.state = {
            insert_user: "Some user",
            insert_time: "",
            update_user: "Some user",
            update_time: "",
            loading_update: false,
            loading_insert: false
        };
    }

    componentDidMount = () => {
        this.setState({
            insert_time: this.props.insert_time,
            update_time: this.props.update_time,
            insert_user: "-",
            update_user: "-"
        }
        ,() => {
            // Mencari insert user
            this.setState({loading_insert: true});
            this.getUser(this.props.insert_user, (email, nama) => {
                this.setState({insert_user: email, loading_insert: false});
            });

            // Mencari update user
            this.setState({loading_update: true});
            this.getUser(this.props.update_user, (email, nama) => {
                this.setState({update_user: email, loading_update: false});
            });
        }
        );
    }

    getUser = (user_token, callback) => {
        Axios.get(this.props.API + "user/getByToken/" + user_token,
            {
                headers: {
                    Authorization: "Bearer " + this.props.token.user_token
                }
            })
            .then((r) => {
                let email = r.data.data.email;
                let nama = r.data.data.nm_lengkap;
                callback(email, nama);
            })
            .finally((r) => {

            });
    }

    render() {
        console.log(this.state);
        let ins_time = moment(this.state.insert_time).format("DD/MM/YYYY HH:mm");
        let upd_time = moment(this.state.update_time).format("DD/MM/YYYY HH:mm");
        const insert_by = (this.state.loading_insert === true) ? <Skeleton height={10} width={200} /> : ((this.state.insert_user != "-") ? <><i className="fa fa-save">&nbsp;&nbsp;</i>: {this.state.insert_user} at {ins_time}</> : <></>);
        const update_by = (this.state.loading_update === true) ? <Skeleton height={10} width={200} /> : ((this.state.update_user != "-") ? <><i className="fa fa-edit">&nbsp;&nbsp;</i>: {this.state.update_user} at {upd_time}</> : <></>);
        return (
            <div>
                <div style={{fontSize: "60%", fontWeight: "lighter"}}>
                {insert_by}<br />
                {update_by}
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        API: state.APIAddress,
        token: state.UserToken
    }
}

export default connect(mapState)(UserStatement);