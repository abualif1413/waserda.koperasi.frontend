import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';

const cookies = new Cookies();

const logOut = (history, props) => {
    // Gunakan redux untuk proses logout
    props.successLogout();

    // Redirect ke login
    history.push("/login");
}

const LoggedIn = (history, props) => {
    return <Fragment>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="app-navbar">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Beranda</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/kasmasuk">Kas Masuk</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/kaskeluar">Kas Keluar</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/memorial">Memorial</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/masterdatacoa">Pengaturan COA</NavLink>
                </li>
            </ul>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav" id="app-navbar">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => logOut(history, props)}>Log out</a>
                </li>
            </ul>
        </div>
    </Fragment>;
}

const Navigation = (props) => {
    let history = useHistory();
    if(!cookies.get("waserdaUserID")) {
        return (
            <React.Fragment></React.Fragment>
        );
    } else {
        return LoggedIn(history, props);
    }
    
}

const mapState = (state) => {
    return {
        token: state.UserToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        successLogout: () => dispatch({type: "DO_LOGOUT"})
    }
}

export default connect(mapState, mapDispatchToProps)(Navigation);