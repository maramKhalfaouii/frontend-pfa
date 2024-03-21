module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("V3+p");


/***/ }),

/***/ "V3+p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q+Fc");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class SecurePage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-12"
    }, __jsx("h1", null, "You can only access this page if you have login")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(utils_auth__WEBPACK_IMPORTED_MODULE_1__[/* withAuth */ "g"])(SecurePage));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kG9d":
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "q+Fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ TOKEN_STORAGE_NAME; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ auth_login; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ logout; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ withAuth; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ auth_token_AuthToken; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ useAuth; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ ProvideAuth; });

// UNUSED EXPORTS: authContext

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./utils/auth/redirect.tsx

const redirectToLogin = server => {
  const login = "/login?redirected=true";

  if (server) {
    // @see https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60
    // server rendered pages need to do a server redirect
    server.writeHead(302, {
      Location: login
    });
    server.end();
  } else {
    // only client side pages have access to next/router
    router_default.a.push(login);
  }
};
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__("kG9d");
var external_nookies_default = /*#__PURE__*/__webpack_require__.n(external_nookies_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./utils/auth/auth.tsx
var __jsx = external_react_default.a.createElement;





const TOKEN_STORAGE_NAME = "app.authToken";
function auth_login(token) {
  external_nookies_default.a.set(null, TOKEN_STORAGE_NAME, token, {
    maxAge: 7 * 24 * 60 * 60,
    path: "/"
  });
  router_default.a.push("/");
}
function logout() {
  external_js_cookie_default.a.remove(TOKEN_STORAGE_NAME, {
    path: "/"
  }); // to support logging out from all windows

  window.localStorage.setItem("logout", Date.now().toString());
}
function withAuth(WrappedComponent) {
  return class AuthWrapper extends external_react_["Component"] {
    static async getInitialProps(ctx, props) {
      const {
        auth
      } = props;

      if (!auth || auth && auth.isExpired) {
        redirectToLogin(ctx.res);
      }

      const initialProps = {
        auth
      };

      if (WrappedComponent.getInitialProps) {
        return WrappedComponent.getInitialProps(ctx, initialProps);
      }

      return initialProps;
    }

    render() {
      return __jsx(WrappedComponent, this.props);
    }

  };
}
// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__("tlnx");
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./utils/auth/auth-token.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class auth_token_AuthToken {
  constructor(token) {
    this.token = token;

    _defineProperty(this, "decodedToken", void 0);

    // we are going to default to an expired decodedToken
    this.decodedToken = {
      id: 0,
      exp: 0,
      iat: 0
    }; // then try and decode the jwt using jwt-decode

    try {
      if (token) this.decodedToken = external_jwt_decode_default()(token);
    } catch (e) {}
  }

  get authorizationString() {
    return `Bearer ${this.token}`;
  }

  get expiresAt() {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired() {
    return new Date() > this.expiresAt;
  }

  get isValid() {
    return !this.isExpired;
  }

}
// CONCATENATED MODULE: ./utils/auth/auth-hook.tsx
var auth_hook_jsx = external_react_default.a.createElement;

// @ts-ignore
const authContext = Object(external_react_["createContext"])();
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
const useAuth = () => {
  return Object(external_react_["useContext"])(authContext);
}; // Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().

function ProvideAuth(props) {
  return auth_hook_jsx(authContext.Provider, {
    value: props.auth
  }, props.children);
}
// CONCATENATED MODULE: ./utils/auth/index.ts




/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ })

/******/ });