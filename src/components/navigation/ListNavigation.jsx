import React, { Component } from 'react';
import { useHistory } from 'react-router';

class ListNavigation extends Component {
    constructor(props) {
        super(props);
        this.tambahData = this.tambahData.bind(this);
    }

    berpindah = () => {
        
    }

    tambahData = () => {
        // this.props.history.push({
        //     pathname: "/kasmasukadd"
        // });
        this.props.history.push({
            pathname: this.props.add,
            state: {}
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{marginBottom: "5px"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-right" id="app-navbar">
                        <li className="nav-item">
                            {/* <button className="btn btn-outline-primary btn-sm"><strong><i className="fa fa-plus"></i>&nbsp;TAMBAH DATA</strong></button> */}
                            <a className="nav-link active" href="javascript:void(0);" onClick={this.tambahData}><i className="fa fa-plus"></i> Tambah Data</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default ListNavigation;