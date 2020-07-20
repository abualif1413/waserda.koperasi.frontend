import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../modules/NavigationHandler';

const LNav = (props) => {
    let history = useHistory();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger" style={{marginBottom: "5px"}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav nav-right" id="app-navbar">
                    <li className="nav-item">
                        {/* <button className="btn btn-outline-primary btn-sm"><strong><i className="fa fa-plus"></i>&nbsp;TAMBAH DATA</strong></button> */}
                        <a className="nav-link" href="javascript:void(0);" onClick={() => history.push(props.add)}><i className="fa fa-plus"></i> Tambah Data</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default LNav;