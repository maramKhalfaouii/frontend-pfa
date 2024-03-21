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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("btdU");


/***/ }),

/***/ "GwW/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ users_UserApi; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ auth_AuthApi; });

// EXTERNAL MODULE: external "apisauce"
var external_apisauce_ = __webpack_require__("Y7Wu");

// CONCATENATED MODULE: ./services/api/api-config.ts
/**
 * The options used to configure the API.
 */

/**
 * The default configuration for the app.
 */
const DEFAULT_API_CONFIG = {
  url: process.env.API_URL,
  timeout: 30000
};
// CONCATENATED MODULE: ./services/api/api.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Manages all requests to the API.
 */

class api_Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */

  /**
   * Configurable options.
   */

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config = DEFAULT_API_CONFIG) {
    _defineProperty(this, "apisauce", void 0);

    _defineProperty(this, "config", void 0);

    this.config = config;
  }
  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */


  setup() {
    // construct the apisauce instance
    this.apisauce = Object(external_apisauce_["create"])({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json"
      }
    });
  }

}
// CONCATENATED MODULE: ./services/api/index.ts

// CONCATENATED MODULE: ./services/api/api-problem.ts
/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
function getGeneralApiProblem(response) {
  switch (response.problem) {
    case "CONNECTION_ERROR":
      return {
        kind: "cannot-connect",
        temporary: true
      };

    case "NETWORK_ERROR":
      return {
        kind: "cannot-connect",
        temporary: true
      };

    case "TIMEOUT_ERROR":
      return {
        kind: "timeout",
        temporary: true
      };

    case "SERVER_ERROR":
      return {
        kind: "server"
      };

    case "UNKNOWN_ERROR":
      return {
        kind: "unknown",
        temporary: true
      };

    case "CLIENT_ERROR":
      switch (response.status) {
        case 401:
          return {
            kind: "unauthorized"
          };

        case 403:
          return {
            kind: "forbidden"
          };

        case 404:
          return {
            kind: "not-found"
          };

        default:
          return {
            kind: "rejected"
          };
      }

    case "CANCEL_ERROR":
      return null;
  }

  return null;
}
// CONCATENATED MODULE: ./services/users.ts


class users_UserApi extends api_Api {
  convertUser(raw) {
    return {
      id: raw.id,
      firstName: raw.firstName,
      lastName: raw.lastName,
      email: raw.email,
      admin: raw.admin,
      active: raw.active
    };
  }

  async getUserById(token, id) {
    this.apisauce.setHeader("Authorization", `Bearer ${token}`);
    const response = await this.apisauce.get(`/api/v1/users/${id}`);

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const user = response.data.data;
      return {
        kind: "ok",
        user: user
      };
    } catch {
      return {
        kind: "bad-data"
      };
    }
  }

  async getUsers(token) {
    this.apisauce.setHeader("Authorization", `Bearer ${token}`);
    const response = await this.apisauce.get("/api/v1/users");

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const rawUsers = response.data;
      const resultUsers = rawUsers.map(this.convertUser);
      return {
        kind: "ok",
        users: resultUsers
      };
    } catch {
      return {
        kind: "bad-data"
      };
    }
  }

}
// CONCATENATED MODULE: ./services/auth.ts


class auth_AuthApi extends api_Api {
  async login(email, password) {
    const response = await this.apisauce.post("/api/v1/auth/login", {
      email: email,
      password: password
    });

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const data = response.data;
      return {
        kind: "ok",
        token: data.auth_token,
        user: data.user
      };
    } catch {
      return {
        kind: "bad-data"
      };
    }
  }

  async fetchStatus(token) {
    this.apisauce.setHeader("Authorization", `Bearer ${token}`);
    const response = await this.apisauce.get("/api/v1/auth/status");

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const data = response.data;
      return {
        kind: "ok",
        user: data.user
      };
    } catch {
      return {
        kind: "bad-data"
      };
    }
  }

  async checkToken(token) {
    this.apisauce.setHeader("Authorization", `Bearer ${token}`);
    const response = await this.apisauce.get("/api/v1/auth/ping");

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const data = response.data;
      return {
        kind: "ok",
        message: data.message
      };
    } catch {
      return {
        kind: "bad-data"
      };
    }
  }

}
// CONCATENATED MODULE: ./services/index.ts



/***/ }),

/***/ "Y7Wu":
/***/ (function(module, exports) {

module.exports = require("apisauce");

/***/ }),

/***/ "btdU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q+Fc");
/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GwW/");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Profile = () => {
  const auth = Object(utils_auth__WEBPACK_IMPORTED_MODULE_1__[/* useAuth */ "f"])();
  const {
    0: userData,
    1: setUserData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function loadUserData() {
      try {
        const api = new services__WEBPACK_IMPORTED_MODULE_2__[/* UserApi */ "b"]();
        api.setup();
        const response = await api.getUserById(auth.token, auth.decodedToken.id);

        if (response.kind === "ok") {
          setUserData(response.user);
        }
      } catch (err) {
        console.log(err);
      }
    }

    loadUserData();
  }, []);
  return __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("h1", null, "Profile"), __jsx("div", null, userData ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", null, "Id: ", userData.id), __jsx("div", null, "First Name: ", userData.firstName), __jsx("div", null, "Last Name: ", userData.lastName), __jsx("div", null, "Email: ", userData.email), __jsx("div", null, "Is admin: ", userData.admin ? "Yes" : "No")) : __jsx("div", null, "Loading..."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(utils_auth__WEBPACK_IMPORTED_MODULE_1__[/* withAuth */ "g"])(Profile));

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
const authContext = Object(external_react_["createContext"])(null);
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