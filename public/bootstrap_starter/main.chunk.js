(this["webpackJsonpreact-retrieve-api"] = this["webpackJsonpreact-retrieve-api"] || []).push([["main"],{

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
      \**************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
    exports = ___CSS_LOADER_API_IMPORT___(false);
    // Module
    exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
    // Exports
    module.exports = exports;
    
    
    /***/ }),
    
    /***/ "./src/container/main_page/MainPage.jsx":
    /*!**********************************************!*\
      !*** ./src/container/main_page/MainPage.jsx ***!
      \**********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    var _jsxFileName = "C:\\xampp\\htdocs\\react-retrieve-api\\src\\container\\main_page\\MainPage.jsx";
    
    
    class MainPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
      render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6,
            columnNumber: 13
          }
        }, "Assalamualaikum");
      }
    
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (MainPage);
    
    /***/ }),
    
    /***/ "./src/index.css":
    /*!***********************!*\
      !*** ./src/index.css ***!
      \***********************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    
    var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");
    
    if(typeof content === 'string') content = [[module.i, content, '']];
    
    var transform;
    var insertInto;
    
    
    
    var options = {"hmr":true}
    
    options.transform = transform
    options.insertInto = undefined;
    
    var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
    
    if(content.locals) module.exports = content.locals;
    
    if(true) {
        module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
            var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");
    
            if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
    
            var locals = (function(a, b) {
                var key, idx = 0;
    
                for(key in a) {
                    if(!b || a[key] !== b[key]) return false;
                    idx++;
                }
    
                for(key in b) idx--;
    
                return idx === 0;
            }(content.locals, newContent.locals));
    
            if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');
    
            update(newContent);
        });
    
        module.hot.dispose(function() { update(); });
    }
    
    /***/ }),
    
    /***/ "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
    /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
    /* harmony import */ var _container_main_page_MainPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/main_page/MainPage */ "./src/container/main_page/MainPage.jsx");
    var _jsxFileName = "C:\\xampp\\htdocs\\react-retrieve-api\\src\\index.js";
    
    
     //import App from './App';
    
    
    
    /*ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );*/
    
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_main_page_MainPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 3
      }
    }), document.querySelector("#root")); // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    
    _serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();
    
    /***/ }),
    
    /***/ "./src/serviceWorker.js":
    /*!******************************!*\
      !*** ./src/serviceWorker.js ***!
      \******************************/
    /*! exports provided: register, unregister */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
    // This optional code is used to register a service worker.
    // register() is not called by default.
    // This lets the app load faster on subsequent visits in production, and gives
    // it offline capabilities. However, it also means that developers (and users)
    // will only see deployed updates on subsequent visits to a page, after all the
    // existing tabs open on the page have been closed, since previously cached
    // resources are updated in the background.
    // To learn more about the benefits of this model and instructions on how to
    // opt-in, read https://bit.ly/CRA-PWA
    const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    function register(config) {
      if (false) {}
    }
    
    function registerValidSW(swUrl, config) {
      navigator.serviceWorker.register(swUrl).then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
    
          if (installingWorker == null) {
            return;
          }
    
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the updated precached content has been fetched,
                // but the previous service worker will still serve the older
                // content until all client tabs are closed.
                console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback
    
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // "Content is cached for offline use." message.
                console.log('Content is cached for offline use.'); // Execute callback
    
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      }).catch(error => {
        console.error('Error during service worker registration:', error);
      });
    }
    
    function checkValidServiceWorker(swUrl, config) {
      // Check if the service worker can be found. If it can't reload the page.
      fetch(swUrl, {
        headers: {
          'Service-Worker': 'script'
        }
      }).then(response => {
        // Ensure service worker exists, and that we really are getting a JS file.
        const contentType = response.headers.get('content-type');
    
        if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
          // No service worker found. Probably a different app. Reload the page.
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker found. Proceed as normal.
          registerValidSW(swUrl, config);
        }
      }).catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
      });
    }
    
    function unregister() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister();
        }).catch(error => {
          console.error(error.message);
        });
      }
    }
    
    /***/ }),
    
    /***/ 1:
    /*!**************************************************************************************************************!*\
      !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
      \**************************************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(/*! C:\xampp\htdocs\react-retrieve-api\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
    __webpack_require__(/*! C:\xampp\htdocs\react-retrieve-api\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
    module.exports = __webpack_require__(/*! C:\xampp\htdocs\react-retrieve-api\src\index.js */"./src/index.js");
    
    
    /***/ })
    
    },[[1,"runtime-main",0]]]);
    //# sourceMappingURL=main.chunk.js.map