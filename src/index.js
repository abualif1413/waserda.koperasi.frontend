import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './components/navigation/Navigation'
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


// Reducer
const globalState = {
  APIAddress: "http://localhost/waserda/waserda.koperasi.backend/api/",
  UserToken: {
    user_id: cookies.get('waserdaUserID'),
    user_name: cookies.get('waserdaUserName'),
    foto: cookies.get('waserdaUserFoto'),
    user_token: cookies.get('waserdaUserToken')
  }
}
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case "DO_LOGIN":
      // Simpan userToken ke cookies
      cookies.set('waserdaUserID', action.userToken.user_id, { path: '/' });
      cookies.set('waserdaUserName', action.userToken.user_name, { path: '/' });
      cookies.set('waserdaUserFoto', action.userToken.foto, { path: '/' });
      cookies.set('waserdaUserToken', action.userToken.user_token, { path: '/' });
      
      return {
        ...state,
        UserToken: action.userToken
      }
      break;
    case "DO_LOGOUT":
      // Remove cookie
      cookies.remove("waserdaUserID", {path: "/"});
      cookies.remove("waserdaUserName", {path: "/"});
      cookies.remove("waserdaUserFoto", {path: "/"});
      cookies.remove("waserdaUserToken", {path: "/"});

      return {
        ...state,
        UserToken: {
          user_id: cookies.get('waserdaUserID'),
          user_name: cookies.get('waserdaUserName'),
          foto: cookies.get('waserdaUserFoto'),
          user_token: cookies.get('waserdaUserToken')
        }
      }

      break;
    default:
      return state;
      break;
  }
  return state;
}

// Store
const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
