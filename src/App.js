import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import KasMasuk from './pages/kasmasuk/KasMasuk';
import Navigation from './components/navigation/Navigation';
import MasterDataCoa from './pages/kasmasuk/MasterDataCoa';
import KasMasukBaru from './pages/kasmasuk/KasMasukBaru';
import Beranda from './pages/kasmasuk/Beranda';
import KasMasukList from './pages/kasmasuk/KasMasukList';
import KasMasukEdit from './pages/kasmasuk/KasMasukEdit';
import KasKeluarBaru from './pages/kasmasuk/KasKeluarBaru';
import KasKeluarList from './pages/kasmasuk/KasKeluarList';
import KasKeluarEdit from './pages/kasmasuk/KasKeluarEdit';
import Login from './pages/kasmasuk/Login';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App(props) {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="logo192.png" style={{height: 30}} className="d-inline-block align-top" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navigation />
        </div>
      </nav>
      <div className="container">
        
          {
            props.token.user_token ? 
              (
                <Switch>
                  <Route path="/" component={Beranda} exact/>
                  <Route path="/login" component={Beranda} exact/>
                  <Route path="/kasmasuk" component={KasMasukList}/>
                  <Route path="/kasmasukadd" component={KasMasukBaru}/>
                  <Route path="/kasmasukedit" component={KasMasukEdit}/>
                  <Route path="/kaskeluar" component={KasKeluarList}/>
                  <Route path="/kaskeluaradd" component={KasKeluarBaru}/>
                  <Route path="/kaskeluaredit" component={KasKeluarEdit}/>
                  <Route path="/masterdatacoa" component={MasterDataCoa}/>
                  <Route component={Error}/>
                </Switch>
              ) : 
              (
                <Switch>
                  <Route path="/" component={Login} exact/>
                  <Route path="/login" component={Login} exact/>
                  <Route path="/kasmasuk" component={Login}/>
                  <Route path="/kasmasukadd" component={Login}/>
                  <Route path="/kasmasukedit" component={Login}/>
                  <Route path="/kaskeluar" component={Login}/>
                  <Route path="/kaskeluaradd" component={Login}/>
                  <Route path="/kaskeluaredit" component={Login}/>
                  <Route path="/masterdatacoa" component={Login}/>
                  <Route component={Error}/>
                </Switch>
              )
          }
      </div>
    </BrowserRouter>
  );
}

const mapState = (state) => {
  return {
    token: state.UserToken
  }
}

export default connect(mapState)(App);
