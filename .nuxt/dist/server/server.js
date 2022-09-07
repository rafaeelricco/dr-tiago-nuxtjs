module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/ana-paula","2":"components/avatar","3":"components/banners","4":"components/bucofacial","5":"components/bucomaxilofacial","6":"components/button-explorar","7":"components/button-header","8":"components/button-ver","9":"components/chips-group","10":"components/depoimentos","11":"components/ghost-button","12":"components/h-o-f","13":"components/h-o-f-c","14":"components/header","15":"components/hof-card","16":"components/hof-cirurgica-card","17":"components/home","18":"components/implantodontia","19":"components/implantodontia-card","20":"components/julia-cardoso","21":"components/laura-allram","22":"components/logo-tiago","23":"components/procedimentos","24":"components/sobre","25":"components/stael-torres","26":"components/tiago","27":"components/title-home","28":"pages/index","29":"pages/procedimentos/Bucomaxilo","30":"pages/procedimentos/HOF","31":"pages/procedimentos/HOFCirurgica","32":"pages/procedimentos/Implantodontia"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', { value: true });

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (typeof val === "number" || typeof val === "boolean") {
    val = String(val);
  }
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
const PROTOCOL_REGEX = /^\w+:(\/\/)?/;
const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return PROTOCOL_REGEX.test(inputStr) || acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.substring(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function withHttp(input) {
  return withProtocol(input, "http://");
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  const match = input.match(PROTOCOL_REGEX);
  if (!match) {
    return protocol + input;
  }
  return protocol + input.substring(match[0].length);
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, opts = {}) {
  if (!opts.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!opts.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!opts.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isEqual = isEqual;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withHttp = withHttp;
exports.withHttps = withHttps;
exports.withLeadingSlash = withLeadingSlash;
exports.withProtocol = withProtocol;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutProtocol = withoutProtocol;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)["URLSearchParams"]))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createSimpleFunctional */
/* unused harmony export directiveConfig */
/* unused harmony export addOnceEventListener */
/* unused harmony export passiveSupported */
/* unused harmony export addPassiveEventListener */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getNestedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getObjectValueByPath; });
/* unused harmony export getPropertyFromItem */
/* unused harmony export createRange */
/* unused harmony export getZIndex */
/* unused harmony export escapeHTML */
/* unused harmony export filterObjectOnKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return convertToUnit; });
/* unused harmony export kebabCase */
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return remapInternalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* unused harmony export arrayDiff */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return upperFirst; });
/* unused harmony export groupItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return wrapInArray; });
/* unused harmony export sortItems */
/* unused harmony export defaultFilter */
/* unused harmony export searchItems */
/* unused harmony export getSlotType */
/* unused harmony export debounce */
/* unused harmony export throttle */
/* unused harmony export getPrefixedScopedSlots */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return padEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chunk; });
/* unused harmony export humanReadableFileSize */
/* unused harmony export camelizeObjectKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return mergeDeep; });
/* unused harmony export fillArray */
/* unused harmony export composedPath */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function createSimpleFunctional(c, el = 'div', name) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: name || c.replace(/__/g, '-'),
    functional: true,
    props: {
      tag: {
        type: String,
        default: el
      }
    },

    render(h, {
      data,
      props,
      children
    }) {
      data.staticClass = `${c} ${data.staticClass || ''}`.trim();
      return h(props.tag, data, children);
    }

  });
}
function directiveConfig(binding, defaults = {}) {
  return { ...defaults,
    ...binding.modifiers,
    value: binding.arg,
    ...(binding.value || {})
  };
}
function addOnceEventListener(el, eventName, cb, options = false) {
  const once = event => {
    cb(event);
    el.removeEventListener(eventName, once, options);
  };

  el.addEventListener(eventName, once, options);
}
let passiveSupported = false;

try {
  if (typeof window !== 'undefined') {
    const testListenerOpts = Object.defineProperty({}, 'passive', {
      get: () => {
        passiveSupported = true;
      }
    });
    window.addEventListener('testListener', testListenerOpts, testListenerOpts);
    window.removeEventListener('testListener', testListenerOpts, testListenerOpts);
  }
} catch (e) {
  console.warn(e);
}
/* eslint-disable-line no-console */



function addPassiveEventListener(el, event, cb, options) {
  el.addEventListener(event, cb, passiveSupported ? options : false);
}
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0) return obj === undefined ? fallback : obj;

  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }

    obj = obj[path[i]];
  }

  if (obj == null) return fallback;
  return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    // If the values are Date, compare them as timestamps
    return false;
  }

  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false;
  }

  const props = Object.keys(a);

  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false;
  }

  return props.every(p => deepEqual(a[p], b[p]));
}
function getObjectValueByPath(obj, path, fallback) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string') return fallback;
  if (obj[path] !== undefined) return obj[path];
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

  path = path.replace(/^\./, ''); // strip a leading dot

  return getNestedValue(obj, path.split('.'), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property == null) return item === undefined ? fallback : item;
  if (item !== Object(item)) return fallback === undefined ? item : fallback;
  if (typeof property === 'string') return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property)) return getNestedValue(item, property, fallback);
  if (typeof property !== 'function') return fallback;
  const value = property(item, fallback);
  return typeof value === 'undefined' ? fallback : value;
}
function createRange(length) {
  return Array.from({
    length
  }, (v, k) => k);
}
function getZIndex(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
  const index = +window.getComputedStyle(el).getPropertyValue('z-index');
  if (!index) return getZIndex(el.parentNode);
  return index;
}
const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
function escapeHTML(str) {
  return str.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag);
}
function filterObjectOnKeys(obj, keys) {
  const filtered = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key];
    }
  }

  return filtered;
}
function convertToUnit(str, unit = 'px') {
  if (str == null || str === '') {
    return undefined;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}
function kebabCase(str) {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
} // KeyboardEvent.keyCode aliases

const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
/**
 * This remaps internal names like '$cancel' or '$vuetify.icons.cancel'
 * to the current name or component for that icon.
 */

function remapInternalIcon(vm, iconName) {
  // Look for custom component in the configuration
  const component = vm.$vuetify.icons.component; // Look for overrides

  if (iconName.startsWith('$')) {
    // Get the target icon name
    const iconPath = `$vuetify.icons.values.${iconName.split('$').pop().split('.').pop()}`; // Now look up icon indirection name,
    // e.g. '$vuetify.icons.values.cancel'

    const override = getObjectValueByPath(vm, iconPath, iconName);
    if (typeof override === 'string') iconName = override;else return override;
  }

  if (component == null) {
    return iconName;
  }

  return {
    component,
    props: {
      icon: iconName
    }
  };
}
function keys(o) {
  return Object.keys(o);
}
/**
 * Camelize a hyphen-delimited string.
 */

const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
};
/**
 * Returns the set difference of B and A, i.e. the set of elements in B but not in A
 */

function arrayDiff(a, b) {
  const diff = [];

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) < 0) diff.push(b[i]);
  }

  return diff;
}
/**
 * Makes the first character of a string uppercase
 */

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function groupItems(items, groupBy, groupDesc) {
  const key = groupBy[0];
  const groups = [];
  let current;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const val = getObjectValueByPath(item, key, null);

    if (current !== val) {
      current = val;
      groups.push({
        name: val !== null && val !== void 0 ? val : '',
        items: []
      });
    }

    groups[groups.length - 1].items.push(item);
  }

  return groups;
}
function wrapInArray(v) {
  return v != null ? Array.isArray(v) ? v : [v] : [];
}
function sortItems(items, sortBy, sortDesc, locale, customSorters) {
  if (sortBy === null || !sortBy.length) return items;
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: 'accent',
    usage: 'sort'
  });
  return items.sort((a, b) => {
    for (let i = 0; i < sortBy.length; i++) {
      const sortKey = sortBy[i];
      let sortA = getObjectValueByPath(a, sortKey);
      let sortB = getObjectValueByPath(b, sortKey);

      if (sortDesc[i]) {
        [sortA, sortB] = [sortB, sortA];
      }

      if (customSorters && customSorters[sortKey]) {
        const customResult = customSorters[sortKey](sortA, sortB);
        if (!customResult) continue;
        return customResult;
      } // Check if both cannot be evaluated


      if (sortA === null && sortB === null) {
        continue;
      } // Dates should be compared numerically


      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime();
      }

      [sortA, sortB] = [sortA, sortB].map(s => (s || '').toString().toLocaleLowerCase());

      if (sortA !== sortB) {
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }

    return 0;
  });
}
function defaultFilter(value, search, item) {
  return value != null && search != null && typeof value !== 'boolean' && value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
}
function searchItems(items, search) {
  if (!search) return items;
  search = search.toString().toLowerCase();
  if (search.trim() === '') return items;
  return items.filter(item => Object.keys(item).some(key => defaultFilter(getObjectValueByPath(item, key), search, item)));
}
/**
 * Returns:
 *  - 'normal' for old style slots - `<template slot="default">`
 *  - 'scoped' for old style scoped slots (`<template slot="default" slot-scope="data">`) or bound v-slot (`#default="data"`)
 *  - 'v-slot' for unbound v-slot (`#default`) - only if the third param is true, otherwise counts as scoped
 */

function getSlotType(vm, name, split) {
  if (vm.$slots.hasOwnProperty(name) && vm.$scopedSlots.hasOwnProperty(name) && vm.$scopedSlots[name].name) {
    return split ? 'v-slot' : 'scoped';
  }

  if (vm.$slots.hasOwnProperty(name)) return 'normal';
  if (vm.$scopedSlots.hasOwnProperty(name)) return 'scoped';
}
function debounce(fn, delay) {
  let timeoutId = 0;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let throttling = false;
  return (...args) => {
    if (!throttling) {
      throttling = true;
      setTimeout(() => throttling = false, limit);
      return fn(...args);
    }
  };
}
function getPrefixedScopedSlots(prefix, scopedSlots) {
  return Object.keys(scopedSlots).filter(k => k.startsWith(prefix)).reduce((obj, k) => {
    obj[k.replace(prefix, '')] = scopedSlots[k];
    return obj;
  }, {});
}
function getSlot(vm, name = 'default', data, optional = false) {
  if (vm.$scopedSlots.hasOwnProperty(name)) {
    return vm.$scopedSlots[name](data instanceof Function ? data() : data);
  } else if (vm.$slots.hasOwnProperty(name) && (!data || optional)) {
    return vm.$slots[name];
  }

  return undefined;
}
function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}
function padEnd(str, length, char = '0') {
  return str + char.repeat(Math.max(0, length - str.length));
}
function chunk(str, size = 1) {
  const chunked = [];
  let index = 0;

  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }

  return chunked;
}
function humanReadableFileSize(bytes, binary = false) {
  const base = binary ? 1024 : 1000;

  if (bytes < base) {
    return `${bytes} B`;
  }

  const prefix = binary ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G'];
  let unit = -1;

  while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
    bytes /= base;
    ++unit;
  }

  return `${bytes.toFixed(1)} ${prefix[unit]}B`;
}
function camelizeObjectKeys(obj) {
  if (!obj) return {};
  return Object.keys(obj).reduce((o, key) => {
    o[camelize(key)] = obj[key];
    return o;
  }, {});
}
function mergeDeep(source = {}, target = {}) {
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key]; // Only continue deep merging if
    // both properties are objects

    if (isObject(sourceProperty) && isObject(targetProperty)) {
      source[key] = mergeDeep(sourceProperty, targetProperty);
      continue;
    }

    source[key] = targetProperty;
  }

  return source;
}
function fillArray(length, obj) {
  return Array(length).fill(obj);
}
/**  Polyfill for Event.prototype.composedPath */

function composedPath(e) {
  if (e.composedPath) return e.composedPath();
  const path = [];
  let el = e.target;

  while (el) {
    path.push(el);

    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }

    el = el.parentElement;
  }

  return path;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export consoleInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return consoleWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return consoleError; });
/* unused harmony export deprecate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breaking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removed; });
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* eslint-disable no-console */


function createMessage(message, vm, parent) {
  if (_framework__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].config.silent) return;

  if (parent) {
    vm = {
      _isVue: true,
      $parent: parent,
      $options: vm
    };
  }

  if (vm) {
    // Only show each message once per instance
    vm.$_alreadyWarned = vm.$_alreadyWarned || [];
    if (vm.$_alreadyWarned.includes(message)) return;
    vm.$_alreadyWarned.push(message);
  }

  return `[Vuetify] ${message}` + (vm ? generateComponentTrace(vm) : '');
}

function consoleInfo(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.info(newMessage);
}
function consoleWarn(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.warn(newMessage);
}
function consoleError(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.error(newMessage);
}
function deprecate(original, replacement, vm, parent) {
  consoleWarn(`[UPGRADE] '${original}' is deprecated, use '${replacement}' instead.`, vm, parent);
}
function breaking(original, replacement, vm, parent) {
  consoleError(`[BREAKING] '${original}' has been removed, use '${replacement}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`, vm, parent);
}
function removed(original, vm, parent) {
  consoleWarn(`[REMOVED] '${original}' has been removed. You can safely omit it.`, vm, parent);
}
/**
 * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
 */

const classifyRE = /(?:^|[-_])(\w)/g;

const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');

function formatComponentName(vm, includeFile) {
  if (vm.$root === vm) {
    return '<Root>';
  }

  const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
  let name = options.name || options._componentTag;
  const file = options.__file;

  if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }

  return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
}

function generateComponentTrace(vm) {
  if (vm._isVue && vm.$parent) {
    const tree = [];
    let currentRecursiveSequence = 0;

    while (vm) {
      if (tree.length > 0) {
        const last = tree[tree.length - 1];

        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }

      tree.push(vm);
      vm = vm.$parent;
    }

    return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : ' '.repeat(5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
  } else {
    return `\n\n(found in ${formatComponentName(vm)})`;
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isCssColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return colorToInt; });
/* unused harmony export classToHex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return intToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorToHex; });
/* unused harmony export HSVAtoRGBA */
/* unused harmony export RGBAtoHSVA */
/* unused harmony export HSVAtoHSLA */
/* unused harmony export HSLAtoHSVA */
/* unused harmony export RGBAtoCSS */
/* unused harmony export RGBtoCSS */
/* unused harmony export RGBAtoHex */
/* unused harmony export HexToRGBA */
/* unused harmony export HexToHSVA */
/* unused harmony export HSVAtoHex */
/* unused harmony export parseHex */
/* unused harmony export parseGradient */
/* unused harmony export RGBtoInt */
/* unused harmony export contrastRatio */
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
// Utilities



function isCssColor(color) {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/);
}
function colorToInt(color) {
  let rgb;

  if (typeof color === 'number') {
    rgb = color;
  } else if (typeof color === 'string') {
    let c = color[0] === '#' ? color.substring(1) : color;

    if (c.length === 3) {
      c = c.split('').map(char => char + char).join('');
    }

    if (c.length !== 6) {
      Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    }

    rgb = parseInt(c, 16);
  } else {
    throw new TypeError(`Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`);
  }

  if (rgb < 0) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`Colors cannot be negative: '${color}'`);
    rgb = 0;
  } else if (rgb > 0xffffff || isNaN(rgb)) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    rgb = 0xffffff;
  }

  return rgb;
}
function classToHex(color, colors, currentTheme) {
  const [colorName, colorModifier] = color.toString().trim().replace('-', '').split(' ', 2);
  let hexColor = '';

  if (colorName && colorName in colors) {
    if (colorModifier && colorModifier in colors[colorName]) {
      hexColor = colors[colorName][colorModifier];
    } else if ('base' in colors[colorName]) {
      hexColor = colors[colorName].base;
    }
  } else if (colorName && colorName in currentTheme) {
    hexColor = currentTheme[colorName];
  }

  return hexColor;
}
function intToHex(color) {
  let hexColor = color.toString(16);
  if (hexColor.length < 6) hexColor = '0'.repeat(6 - hexColor.length) + hexColor;
  return '#' + hexColor;
}
function colorToHex(color) {
  return intToHex(colorToInt(color));
}
/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */

function HSVAtoRGBA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;

  const f = n => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };

  const rgb = [f(5), f(3), f(1)].map(v => Math.round(v * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}
/**
 * Converts RGBA to HSVA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color RGBA color as an array [0-255, 0-255, 0-255, 0-1]
 */

function RGBAtoHSVA(rgba) {
  if (!rgba) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const r = rgba.r / 255;
  const g = rgba.g / 255;
  const b = rgba.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;

  if (max !== min) {
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }
  }

  if (h < 0) h = h + 360;
  const s = max === 0 ? 0 : (max - min) / max;
  const hsv = [h, s, max];
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
    a: rgba.a
  };
}
function HSVAtoHSLA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;
  const l = v - v * s / 2;
  const sprime = l === 1 || l === 0 ? 0 : (v - l) / Math.min(l, 1 - l);
  return {
    h,
    s: sprime,
    l,
    a
  };
}
function HSLAtoHSVA(hsl) {
  const {
    h,
    s,
    l,
    a
  } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h,
    s: sprime,
    v,
    a
  };
}
function RGBAtoCSS(rgba) {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
}
function RGBtoCSS(rgba) {
  return RGBAtoCSS({ ...rgba,
    a: 1
  });
}
function RGBAtoHex(rgba) {
  const toHex = v => {
    const h = Math.round(v).toString(16);
    return ('00'.substr(0, 2 - h.length) + h).toUpperCase();
  };

  return `#${[toHex(rgba.r), toHex(rgba.g), toHex(rgba.b), toHex(Math.round(rgba.a * 255))].join('')}`;
}
function HexToRGBA(hex) {
  const rgba = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* chunk */ "b"])(hex.slice(1), 2).map(c => parseInt(c, 16));
  return {
    r: rgba[0],
    g: rgba[1],
    b: rgba[2],
    a: Math.round(rgba[3] / 255 * 100) / 100
  };
}
function HexToHSVA(hex) {
  const rgb = HexToRGBA(hex);
  return RGBAtoHSVA(rgb);
}
function HSVAtoHex(hsva) {
  return RGBAtoHex(HSVAtoRGBA(hsva));
}
function parseHex(hex) {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }

  hex = hex.replace(/([^0-9a-f])/gi, 'F');

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(x => x + x).join('');
  }

  if (hex.length === 6) {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "l"])(hex, 8, 'F');
  } else {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "l"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "l"])(hex, 6), 8, 'F');
  }

  return `#${hex}`.toUpperCase().substr(0, 9);
}
function parseGradient(gradient, colors, currentTheme) {
  return gradient.replace(/([a-z]+(\s[a-z]+-[1-5])?)(?=$|,)/gi, x => {
    return classToHex(x, colors, currentTheme) || x;
  }).replace(/(rgba\()#[0-9a-f]+(?=,)/gi, x => {
    return 'rgba(' + Object.values(HexToRGBA(parseHex(x.replace(/rgba\(/, '')))).slice(0, 3).join(',');
  });
}
function RGBtoInt(rgba) {
  return (rgba.r << 16) + (rgba.g << 8) + rgba.b;
}
/**
 * Returns the contrast ratio (1-21) between two colors.
 *
 * @param c1 First color
 * @param c2 Second color
 */

function contrastRatio(c1, c2) {
  const [, y1] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c1));
  const [, y2] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c2));
  return (Math.max(y1, y2) + 0.05) / (Math.min(y1, y2) + 0.05);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromXYZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toXYZ; });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // For converting XYZ to sRGB

const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.2040, 1.0570]]; // Forward gamma adjust

const srgbForwardTransform = C => C <= 0.0031308 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055; // For converting sRGB to XYZ


const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]; // Reverse gamma adjust

const srgbReverseTransform = C => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;

function fromXYZ(xyz) {
  const rgb = Array(3);
  const transform = srgbForwardTransform;
  const matrix = srgbForwardMatrix; // Matrix transform, then gamma adjustment

  for (let i = 0; i < 3; ++i) {
    rgb[i] = Math.round(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* clamp */ "c"])(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  } // Rescale back to [0, 255]


  return (rgb[0] << 16) + (rgb[1] << 8) + (rgb[2] << 0);
}
function toXYZ(rgb) {
  const xyz = [0, 0, 0];
  const transform = srgbReverseTransform;
  const matrix = srgbReverseMatrix; // Rescale from [0, 255] to [0, 1] then adjust sRGB gamma to linear RGB

  const r = transform((rgb >> 16 & 0xff) / 255);
  const g = transform((rgb >> 8 & 0xff) / 255);
  const b = transform((rgb >> 0 & 0xff) / 255); // Matrix color space transform

  for (let i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }

  return xyz;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ framework_Vuetify; });

// NAMESPACE OBJECT: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
var easing_patterns_namespaceObject = {};
__webpack_require__.r(easing_patterns_namespaceObject);
__webpack_require__.d(easing_patterns_namespaceObject, "linear", function() { return linear; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuad", function() { return easeInQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuad", function() { return easeOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuad", function() { return easeInOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInCubic", function() { return easeInCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutCubic", function() { return easeOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutCubic", function() { return easeInOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuart", function() { return easeInQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuart", function() { return easeOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuart", function() { return easeInOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuint", function() { return easeInQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuint", function() { return easeOutQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuint", function() { return easeInOutQuint; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/install.js


function install(Vue, args = {}) {
  if (install.installed) return;
  install.installed = true;

  if (external_vue_default.a !== Vue) {
    Object(console["b" /* consoleError */])(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  }

  const components = args.components || {};
  const directives = args.directives || {};

  for (const name in directives) {
    const directive = directives[name];
    Vue.directive(name, directive);
  }

  (function registerComponents(components) {
    if (components) {
      for (const key in components) {
        const component = components[key];

        if (component && !registerComponents(component.$_vuetify_subcomponents)) {
          Vue.component(key, component);
        }
      }

      return true;
    }

    return false;
  })(components); // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111


  if (Vue.$_vuetify_installed) return;
  Vue.$_vuetify_installed = true;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;

      if (options.vuetify) {
        options.vuetify.init(this, this.$ssrContext);
        this.$vuetify = Vue.observable(options.vuetify.framework);
      } else {
        this.$vuetify = options.parent && options.parent.$vuetify || this;
      }
    },

    beforeMount() {
      // @ts-ignore
      if (this.$options.vuetify && this.$el && this.$el.hasAttribute('data-server-rendered')) {
        // @ts-ignore
        this.$vuetify.isHydrating = true; // @ts-ignore

        this.$vuetify.breakpoint.update(true);
      }
    },

    mounted() {
      // @ts-ignore
      if (this.$options.vuetify && this.$vuetify.isHydrating) {
        // @ts-ignore
        this.$vuetify.isHydrating = false; // @ts-ignore

        this.$vuetify.breakpoint.update();
      }
    }

  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/src/styles/main.sass
var main = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/locale/en.js
/* harmony default export */ var en = ({
  badge: 'Badge',
  close: 'Close',
  dataIterator: {
    noResultsText: 'No matching records found',
    loadingText: 'Loading items...'
  },
  dataTable: {
    itemsPerPageText: 'Rows per page:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Items per page:',
    itemsPerPageAll: 'All',
    nextPage: 'Next page',
    prevPage: 'Previous page',
    firstPage: 'First page',
    lastPage: 'Last page',
    pageText: '{0}-{1} of {2}'
  },
  datePicker: {
    itemsSelected: '{0} selected',
    nextMonthAriaLabel: 'Next month',
    nextYearAriaLabel: 'Next year',
    prevMonthAriaLabel: 'Previous month',
    prevYearAriaLabel: 'Previous year'
  },
  noDataText: 'No data available',
  carousel: {
    prev: 'Previous visual',
    next: 'Next visual',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} more'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: 'Next page',
      previous: 'Previous page',
      page: 'Goto Page {0}',
      currentPage: 'Current Page, Page {0}'
    }
  },
  rating: {
    ariaLabel: {
      icon: 'Rating {0} of {1}'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/presets/default/index.js
// Styles
 // Locale


const default_preset = {
  breakpoint: {
    // TODO: update to MD2 spec in v3 - 1280
    mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    }
  },
  icons: {
    // TODO: remove v3
    iconfont: 'mdi',
    values: {}
  },
  lang: {
    current: 'en',
    locales: {
      en: en
    },
    // Default translator exists in lang service
    t: undefined
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
      variations: true
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      }
    }
  }
};
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/service/index.js
class Service {
  constructor() {
    this.framework = {};
  }

  init(root, ssrContext) {}

}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/presets/index.js
// Preset
 // Utilities




class presets_Presets extends Service {
  constructor(parentPreset, parent) {
    super(); // The default preset

    const defaultPreset = Object(helpers["k" /* mergeDeep */])({}, default_preset); // The user provided preset

    const {
      userPreset
    } = parent; // The user provided global preset

    const {
      preset: globalPreset = {},
      ...preset
    } = userPreset;

    if (globalPreset.preset != null) {
      Object(console["c" /* consoleWarn */])('Global presets do not support the **preset** option, it can be safely omitted');
    }

    parent.preset = Object(helpers["k" /* mergeDeep */])(Object(helpers["k" /* mergeDeep */])(defaultPreset, globalPreset), preset);
  }

}
presets_Presets.property = 'presets';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/application/index.js
// Extensions

class application_Application extends Service {
  constructor() {
    super(...arguments);
    this.bar = 0;
    this.top = 0;
    this.left = 0;
    this.insetFooter = 0;
    this.right = 0;
    this.bottom = 0;
    this.footer = 0;
    this.application = {
      bar: {},
      top: {},
      left: {},
      insetFooter: {},
      right: {},
      bottom: {},
      footer: {}
    };
  }

  register(uid, location, size) {
    this.application[location][uid] = size;
    this.update(location);
  }

  unregister(uid, location) {
    if (this.application[location][uid] == null) return;
    delete this.application[location][uid];
    this.update(location);
  }

  update(location) {
    this[location] = Object.values(this.application[location]).reduce((acc, cur) => acc + cur, 0);
  }

}
application_Application.property = 'application';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/breakpoint/index.js
// Extensions

class breakpoint_Breakpoint extends Service {
  constructor(preset) {
    super(); // Public

    this.xs = false;
    this.sm = false;
    this.md = false;
    this.lg = false;
    this.xl = false;
    this.xsOnly = false;
    this.smOnly = false;
    this.smAndDown = false;
    this.smAndUp = false;
    this.mdOnly = false;
    this.mdAndDown = false;
    this.mdAndUp = false;
    this.lgOnly = false;
    this.lgAndDown = false;
    this.lgAndUp = false;
    this.xlOnly = false; // Value is xs to match v2.x functionality

    this.name = 'xs';
    this.height = 0;
    this.width = 0; // TODO: Add functionality to detect this dynamically in v3
    // Value is true to match v2.x functionality

    this.mobile = true;
    this.resizeTimeout = 0;
    const {
      mobileBreakpoint,
      scrollBarWidth,
      thresholds
    } = preset[breakpoint_Breakpoint.property];
    this.mobileBreakpoint = mobileBreakpoint;
    this.scrollBarWidth = scrollBarWidth;
    this.thresholds = thresholds;
  }

  init() {
    this.update();
    /* istanbul ignore if */

    if (typeof window === 'undefined') return;
    window.addEventListener('resize', this.onResize.bind(this), {
      passive: true
    });
  }
  /* eslint-disable-next-line max-statements */


  update(ssr = false) {
    const height = ssr ? 0 : this.getClientHeight();
    const width = ssr ? 0 : this.getClientWidth();
    const xs = width < this.thresholds.xs;
    const sm = width < this.thresholds.sm && !xs;
    const md = width < this.thresholds.md - this.scrollBarWidth && !(sm || xs);
    const lg = width < this.thresholds.lg - this.scrollBarWidth && !(md || sm || xs);
    const xl = width >= this.thresholds.lg - this.scrollBarWidth;
    this.height = height;
    this.width = width;
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
    this.xsOnly = xs;
    this.smOnly = sm;
    this.smAndDown = (xs || sm) && !(md || lg || xl);
    this.smAndUp = !xs && (sm || md || lg || xl);
    this.mdOnly = md;
    this.mdAndDown = (xs || sm || md) && !(lg || xl);
    this.mdAndUp = !(xs || sm) && (md || lg || xl);
    this.lgOnly = lg;
    this.lgAndDown = (xs || sm || md || lg) && !xl;
    this.lgAndUp = !(xs || sm || md) && (lg || xl);
    this.xlOnly = xl;

    switch (true) {
      case xs:
        this.name = 'xs';
        break;

      case sm:
        this.name = 'sm';
        break;

      case md:
        this.name = 'md';
        break;

      case lg:
        this.name = 'lg';
        break;

      default:
        this.name = 'xl';
        break;
    }

    if (typeof this.mobileBreakpoint === 'number') {
      this.mobile = width < parseInt(this.mobileBreakpoint, 10);
      return;
    }

    const breakpoints = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    };
    const current = breakpoints[this.name];
    const max = breakpoints[this.mobileBreakpoint];
    this.mobile = current <= max;
  }

  onResize() {
    clearTimeout(this.resizeTimeout); // Added debounce to match what
    // v-resize used to do but was
    // removed due to a memory leak
    // https://github.com/vuetifyjs/vuetify/pull/2997

    this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  } // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081


  getClientWidth() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  getClientHeight() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

}
breakpoint_Breakpoint.property = 'breakpoint';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
// linear
const linear = t => t; // accelerating from zero velocity

const easeInQuad = t => t ** 2; // decelerating to zero velocity

const easeOutQuad = t => t * (2 - t); // acceleration until halfway, then deceleration

const easeInOutQuad = t => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t; // accelerating from zero velocity

const easeInCubic = t => t ** 3; // decelerating to zero velocity

const easeOutCubic = t => --t ** 3 + 1; // acceleration until halfway, then deceleration

const easeInOutCubic = t => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // accelerating from zero velocity

const easeInQuart = t => t ** 4; // decelerating to zero velocity

const easeOutQuart = t => 1 - --t ** 4; // acceleration until halfway, then deceleration

const easeInOutQuart = t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t; // accelerating from zero velocity

const easeInQuint = t => t ** 5; // decelerating to zero velocity

const easeOutQuint = t => 1 + --t ** 5; // acceleration until halfway, then deceleration

const easeInOutQuint = t => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5;
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/util.js
// Return target's cumulative offset from the top
function getOffset(target) {
  if (typeof target === 'number') {
    return target;
  }

  let el = $(target);

  if (!el) {
    throw typeof target === 'string' ? new Error(`Target element "${target}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${type(target)} instead.`);
  }

  let totalOffset = 0;

  while (el) {
    totalOffset += el.offsetTop;
    el = el.offsetParent;
  }

  return totalOffset;
}
function getContainer(container) {
  const el = $(container);
  if (el) return el;
  throw typeof container === 'string' ? new Error(`Container element "${container}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${type(container)} instead.`);
}

function type(el) {
  return el == null ? el : el.constructor.name;
}

function $(el) {
  if (typeof el === 'string') {
    return document.querySelector(el);
  } else if (el && el._isVue) {
    return el.$el;
  } else if (el instanceof HTMLElement) {
    return el;
  } else {
    return null;
  }
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/index.js
// Extensions
 // Utilities



function goTo(_target, _settings = {}) {
  const settings = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic',
    appOffset: true,
    ..._settings
  };
  const container = getContainer(settings.container);
  /* istanbul ignore else */

  if (settings.appOffset && goTo.framework.application) {
    const isDrawer = container.classList.contains('v-navigation-drawer');
    const isClipped = container.classList.contains('v-navigation-drawer--clipped');
    const {
      bar,
      top
    } = goTo.framework.application;
    settings.offset += bar;
    /* istanbul ignore else */

    if (!isDrawer || isClipped) settings.offset += top;
  }

  const startTime = performance.now();
  let targetLocation;

  if (typeof _target === 'number') {
    targetLocation = getOffset(_target) - settings.offset;
  } else {
    targetLocation = getOffset(_target) - getOffset(container) - settings.offset;
  }

  const startLocation = container.scrollTop;
  if (targetLocation === startLocation) return Promise.resolve(targetLocation);
  const ease = typeof settings.easing === 'function' ? settings.easing : easing_patterns_namespaceObject[settings.easing];
  /* istanbul ignore else */

  if (!ease) throw new TypeError(`Easing function "${settings.easing}" not found.`); // Cannot be tested properly in jsdom

  /* istanbul ignore next */

  return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.abs(settings.duration ? Math.min(timeElapsed / settings.duration, 1) : 1);
    container.scrollTop = Math.floor(startLocation + (targetLocation - startLocation) * ease(progress));
    const clientHeight = container === document.body ? document.documentElement.clientHeight : container.clientHeight;
    const reachBottom = clientHeight + container.scrollTop >= container.scrollHeight;

    if (progress === 1 || // Need to go lower but reach bottom
    targetLocation > container.scrollTop && reachBottom) {
      return resolve(targetLocation);
    }

    requestAnimationFrame(step);
  }));
}
goTo.framework = {};

goTo.init = () => {};

class goto_Goto extends Service {
  constructor() {
    super();
    return goTo;
  }

}
goto_Goto.property = 'goTo';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi-svg.js
const icons = {
  complete: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
  cancel: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  close: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  delete: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  clear: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  success: 'M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z',
  info: 'M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
  warning: 'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
  error: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  prev: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
  next: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  checkboxOn: 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  checkboxOff: 'M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
  checkboxIndeterminate: 'M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  delimiter: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  sort: 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z',
  expand: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
  menu: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',
  subgroup: 'M7,10L12,15L17,10H7Z',
  dropdown: 'M7,10L12,15L17,10H7Z',
  radioOn: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z',
  radioOff: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  edit: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
  ratingEmpty: 'M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  ratingFull: 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z',
  ratingHalf: 'M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  loading: 'M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12',
  first: 'M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z',
  last: 'M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z',
  unfold: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
  file: 'M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z',
  plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  minus: 'M19,13H5V11H19V13Z'
};
/* harmony default export */ var mdi_svg = (icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/md.js
const md_icons = {
  complete: 'check',
  cancel: 'cancel',
  close: 'close',
  delete: 'cancel',
  clear: 'clear',
  success: 'check_circle',
  info: 'info',
  warning: 'priority_high',
  error: 'warning',
  prev: 'chevron_left',
  next: 'chevron_right',
  checkboxOn: 'check_box',
  checkboxOff: 'check_box_outline_blank',
  checkboxIndeterminate: 'indeterminate_check_box',
  delimiter: 'fiber_manual_record',
  sort: 'arrow_upward',
  expand: 'keyboard_arrow_down',
  menu: 'menu',
  subgroup: 'arrow_drop_down',
  dropdown: 'arrow_drop_down',
  radioOn: 'radio_button_checked',
  radioOff: 'radio_button_unchecked',
  edit: 'edit',
  ratingEmpty: 'star_border',
  ratingFull: 'star',
  ratingHalf: 'star_half',
  loading: 'cached',
  first: 'first_page',
  last: 'last_page',
  unfold: 'unfold_more',
  file: 'attach_file',
  plus: 'add',
  minus: 'remove'
};
/* harmony default export */ var md = (md_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi.js
const mdi_icons = {
  complete: 'mdi-check',
  cancel: 'mdi-close-circle',
  close: 'mdi-close',
  delete: 'mdi-close-circle',
  clear: 'mdi-close',
  success: 'mdi-check-circle',
  info: 'mdi-information',
  warning: 'mdi-exclamation',
  error: 'mdi-alert',
  prev: 'mdi-chevron-left',
  next: 'mdi-chevron-right',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi-minus-box',
  delimiter: 'mdi-circle',
  sort: 'mdi-arrow-up',
  expand: 'mdi-chevron-down',
  menu: 'mdi-menu',
  subgroup: 'mdi-menu-down',
  dropdown: 'mdi-menu-down',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  edit: 'mdi-pencil',
  ratingEmpty: 'mdi-star-outline',
  ratingFull: 'mdi-star',
  ratingHalf: 'mdi-star-half-full',
  loading: 'mdi-cached',
  first: 'mdi-page-first',
  last: 'mdi-page-last',
  unfold: 'mdi-unfold-more-horizontal',
  file: 'mdi-paperclip',
  plus: 'mdi-plus',
  minus: 'mdi-minus'
};
/* harmony default export */ var mdi = (mdi_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa.js
const fa_icons = {
  complete: 'fas fa-check',
  cancel: 'fas fa-times-circle',
  close: 'fas fa-times',
  delete: 'fas fa-times-circle',
  clear: 'fas fa-times-circle',
  success: 'fas fa-check-circle',
  info: 'fas fa-info-circle',
  warning: 'fas fa-exclamation',
  error: 'fas fa-exclamation-triangle',
  prev: 'fas fa-chevron-left',
  next: 'fas fa-chevron-right',
  checkboxOn: 'fas fa-check-square',
  checkboxOff: 'far fa-square',
  checkboxIndeterminate: 'fas fa-minus-square',
  delimiter: 'fas fa-circle',
  sort: 'fas fa-sort-up',
  expand: 'fas fa-chevron-down',
  menu: 'fas fa-bars',
  subgroup: 'fas fa-caret-down',
  dropdown: 'fas fa-caret-down',
  radioOn: 'far fa-dot-circle',
  radioOff: 'far fa-circle',
  edit: 'fas fa-edit',
  ratingEmpty: 'far fa-star',
  ratingFull: 'fas fa-star',
  ratingHalf: 'fas fa-star-half',
  loading: 'fas fa-sync',
  first: 'fas fa-step-backward',
  last: 'fas fa-step-forward',
  unfold: 'fas fa-arrows-alt-v',
  file: 'fas fa-paperclip',
  plus: 'fas fa-plus',
  minus: 'fas fa-minus'
};
/* harmony default export */ var fa = (fa_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa4.js
const fa4_icons = {
  complete: 'fa fa-check',
  cancel: 'fa fa-times-circle',
  close: 'fa fa-times',
  delete: 'fa fa-times-circle',
  clear: 'fa fa-times-circle',
  success: 'fa fa-check-circle',
  info: 'fa fa-info-circle',
  warning: 'fa fa-exclamation',
  error: 'fa fa-exclamation-triangle',
  prev: 'fa fa-chevron-left',
  next: 'fa fa-chevron-right',
  checkboxOn: 'fa fa-check-square',
  checkboxOff: 'fa fa-square-o',
  checkboxIndeterminate: 'fa fa-minus-square',
  delimiter: 'fa fa-circle',
  sort: 'fa fa-sort-up',
  expand: 'fa fa-chevron-down',
  menu: 'fa fa-bars',
  subgroup: 'fa fa-caret-down',
  dropdown: 'fa fa-caret-down',
  radioOn: 'fa fa-dot-circle-o',
  radioOff: 'fa fa-circle-o',
  edit: 'fa fa-pencil',
  ratingEmpty: 'fa fa-star-o',
  ratingFull: 'fa fa-star',
  ratingHalf: 'fa fa-star-half-o',
  loading: 'fa fa-refresh',
  first: 'fa fa-step-backward',
  last: 'fa fa-step-forward',
  unfold: 'fa fa-angle-double-down',
  file: 'fa fa-paperclip',
  plus: 'fa fa-plus',
  minus: 'fa fa-minus'
};
/* harmony default export */ var fa4 = (fa4_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa-svg.js

function convertToComponentDeclarations(component, iconSet) {
  const result = {};

  for (const key in iconSet) {
    result[key] = {
      component,
      props: {
        icon: iconSet[key].split(' fa-')
      }
    };
  }

  return result;
}
/* harmony default export */ var fa_svg = (convertToComponentDeclarations('font-awesome-icon', fa));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/index.js






/* harmony default export */ var presets = (Object.freeze({
  mdiSvg: mdi_svg,
  md: md,
  mdi: mdi,
  fa: fa,
  fa4: fa4,
  faSvg: fa_svg
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/index.js
// Extensions
 // Utilities

 // Presets


class icons_Icons extends Service {
  constructor(preset) {
    super();
    const {
      iconfont,
      values,
      component
    } = preset[icons_Icons.property];
    this.component = component;
    this.iconfont = iconfont;
    this.values = Object(helpers["k" /* mergeDeep */])(presets[iconfont], values);
  }

}
icons_Icons.property = 'icons';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/lang/index.js
// Extensions
 // Utilities



const LANG_PREFIX = '$vuetify.';
const fallback = Symbol('Lang fallback');

function getTranslation(locale, key, usingDefault = false, defaultLocale) {
  const shortKey = key.replace(LANG_PREFIX, '');
  let translation = Object(helpers["g" /* getObjectValueByPath */])(locale, shortKey, fallback);

  if (translation === fallback) {
    if (usingDefault) {
      Object(console["b" /* consoleError */])(`Translation key "${shortKey}" not found in fallback`);
      translation = key;
    } else {
      Object(console["c" /* consoleWarn */])(`Translation key "${shortKey}" not found, falling back to default`);
      translation = getTranslation(defaultLocale, key, true, defaultLocale);
    }
  }

  return translation;
}

class lang_Lang extends Service {
  constructor(preset) {
    super();
    this.defaultLocale = 'en';
    const {
      current,
      locales,
      t
    } = preset[lang_Lang.property];
    this.current = current;
    this.locales = locales;
    this.translator = t || this.defaultTranslator;
  }

  currentLocale(key) {
    const translation = this.locales[this.current];
    const defaultLocale = this.locales[this.defaultLocale];
    return getTranslation(translation, key, false, defaultLocale);
  }

  t(key, ...params) {
    if (!key.startsWith(LANG_PREFIX)) return this.replace(key, params);
    return this.translator(key, ...params);
  }

  defaultTranslator(key, ...params) {
    return this.replace(this.currentLocale(key), params);
  }

  replace(str, params) {
    return str.replace(/\{(\d+)\}/g, (match, index) => {
      /* istanbul ignore next */
      return String(params[+index]);
    });
  }

}
lang_Lang.property = 'lang';
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/colorUtils.js
var colorUtils = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/color/transformSRGB.js
var transformSRGB = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/util/color/transformCIELAB.js
const delta = 0.20689655172413793; // 6÷29

const cielabForwardTransform = t => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;

const cielabReverseTransform = t => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);

function fromXYZ(xyz) {
  const transform = cielabForwardTransform;
  const transformedY = transform(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform(xyz[2] / 1.08883))];
}
function toXYZ(lab) {
  const transform = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform(Ln + lab[1] / 500) * 0.95047, transform(Ln), transform(Ln - lab[2] / 200) * 1.08883];
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/utils.js




function parse(theme, isItem = false, variations = true) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  const parsedTheme = {};

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    if (value == null) continue;

    if (!variations) {
      parsedTheme[name] = {
        base: Object(colorUtils["c" /* intToHex */])(Object(colorUtils["b" /* colorToInt */])(value))
      };
    } else if (isItem) {
      /* istanbul ignore else */
      if (name === 'base' || name.startsWith('lighten') || name.startsWith('darken')) {
        parsedTheme[name] = Object(colorUtils["a" /* colorToHex */])(value);
      }
    } else if (typeof value === 'object') {
      parsedTheme[name] = parse(value, true, variations);
    } else {
      parsedTheme[name] = genVariations(name, Object(colorUtils["b" /* colorToInt */])(value));
    }
  }

  if (!isItem) {
    parsedTheme.anchor = anchor || parsedTheme.base || parsedTheme.primary.base;
  }

  return parsedTheme;
}
/**
 * Generate the CSS for a base color (.primary)
 */

const genBaseColor = (name, value) => {
  return `
.v-application .${name} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};
/**
 * Generate the CSS for a variant color (.primary.darken-2)
 */


const genVariantColor = (name, variant, value) => {
  const [type, n] = variant.split(/(\d)/, 2);
  return `
.v-application .${name}.${type}-${n} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text.text--${type}-${n} {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};

const genColorVariableName = (name, variant = 'base') => `--v-${name}-${variant}`;

const genColorVariable = (name, variant = 'base') => `var(${genColorVariableName(name, variant)})`;

function genStyles(theme, cssVar = false) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  if (!colors.length) return '';
  let variablesCss = '';
  let css = '';
  const aColor = cssVar ? genColorVariable('anchor') : anchor;
  css += `.v-application a { color: ${aColor}; }`;
  cssVar && (variablesCss += `  ${genColorVariableName('anchor')}: ${anchor};\n`);

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    css += genBaseColor(name, cssVar ? genColorVariable(name) : value.base);
    cssVar && (variablesCss += `  ${genColorVariableName(name)}: ${value.base};\n`);
    const variants = Object(helpers["j" /* keys */])(value);

    for (let i = 0; i < variants.length; ++i) {
      const variant = variants[i];
      const variantValue = value[variant];
      if (variant === 'base') continue;
      css += genVariantColor(name, variant, cssVar ? genColorVariable(name, variant) : variantValue);
      cssVar && (variablesCss += `  ${genColorVariableName(name, variant)}: ${variantValue};\n`);
    }
  }

  if (cssVar) {
    variablesCss = `:root {\n${variablesCss}}\n\n`;
  }

  return variablesCss + css;
}
function genVariations(name, value) {
  const values = {
    base: Object(colorUtils["c" /* intToHex */])(value)
  };

  for (let i = 5; i > 0; --i) {
    values[`lighten${i}`] = Object(colorUtils["c" /* intToHex */])(lighten(value, i));
  }

  for (let i = 1; i <= 4; ++i) {
    values[`darken${i}`] = Object(colorUtils["c" /* intToHex */])(darken(value, i));
  }

  return values;
}
function lighten(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] + amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
function darken(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] - amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/index.js
/* eslint-disable no-multi-spaces */
// Extensions
 // Utilities


 // Types


class theme_Theme extends Service {
  constructor(preset) {
    super();
    this.disabled = false;
    this.isDark = null;
    this.unwatch = null;
    this.vueMeta = null;
    const {
      dark,
      disable,
      options,
      themes
    } = preset[theme_Theme.property];
    this.dark = Boolean(dark);
    this.defaults = this.themes = themes;
    this.options = options;

    if (disable) {
      this.disabled = true;
      return;
    }

    this.themes = {
      dark: this.fillVariant(themes.dark, true),
      light: this.fillVariant(themes.light, false)
    };
  } // When setting css, check for element and apply new values

  /* eslint-disable-next-line accessor-pairs */


  set css(val) {
    if (this.vueMeta) {
      if (this.isVueMeta23) {
        this.applyVueMeta23();
      }

      return;
    }

    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = val);
  }

  set dark(val) {
    const oldDark = this.isDark;
    this.isDark = val; // Only apply theme after dark
    // has already been set before

    oldDark != null && this.applyTheme();
  }

  get dark() {
    return Boolean(this.isDark);
  } // Apply current theme default
  // only called on client side


  applyTheme() {
    if (this.disabled) return this.clearCss();
    this.css = this.generatedStyles;
  }

  clearCss() {
    this.css = '';
  } // Initialize theme for SSR and SPA
  // Attach to ssrContext head or
  // apply new theme to document


  init(root, ssrContext) {
    if (this.disabled) return;
    /* istanbul ignore else */

    if (root.$meta) {
      this.initVueMeta(root);
    } else if (ssrContext) {
      this.initSSR(ssrContext);
    }

    this.initTheme(root);
  } // Allows for you to set target theme


  setTheme(theme, value) {
    this.themes[theme] = Object.assign(this.themes[theme], value);
    this.applyTheme();
  } // Reset theme defaults


  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light);
    this.themes.dark = Object.assign({}, this.defaults.dark);
    this.applyTheme();
  } // Check for existence of style element


  checkOrCreateStyleElement() {
    this.styleEl = document.getElementById('vuetify-theme-stylesheet');
    /* istanbul ignore next */

    if (this.styleEl) return true;
    this.genStyleElement(); // If doesn't have it, create it

    return Boolean(this.styleEl);
  }

  fillVariant(theme = {}, dark) {
    const defaultTheme = this.themes[dark ? 'dark' : 'light'];
    return Object.assign({}, defaultTheme, theme);
  } // Generate the style element
  // if applicable


  genStyleElement() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return;
    /* istanbul ignore next */

    this.styleEl = document.createElement('style');
    this.styleEl.type = 'text/css';
    this.styleEl.id = 'vuetify-theme-stylesheet';

    if (this.options.cspNonce) {
      this.styleEl.setAttribute('nonce', this.options.cspNonce);
    }

    document.head.appendChild(this.styleEl);
  }

  initVueMeta(root) {
    this.vueMeta = root.$meta();

    if (this.isVueMeta23) {
      // vue-meta needs to apply after mounted()
      root.$nextTick(() => {
        this.applyVueMeta23();
      });
      return;
    }

    const metaKeyName = typeof this.vueMeta.getOptions === 'function' ? this.vueMeta.getOptions().keyName : 'metaInfo';
    const metaInfo = root.$options[metaKeyName] || {};

    root.$options[metaKeyName] = () => {
      metaInfo.style = metaInfo.style || [];
      const vuetifyStylesheet = metaInfo.style.find(s => s.id === 'vuetify-theme-stylesheet');

      if (!vuetifyStylesheet) {
        metaInfo.style.push({
          cssText: this.generatedStyles,
          type: 'text/css',
          id: 'vuetify-theme-stylesheet',
          nonce: (this.options || {}).cspNonce
        });
      } else {
        vuetifyStylesheet.cssText = this.generatedStyles;
      }

      return metaInfo;
    };
  }

  applyVueMeta23() {
    const {
      set
    } = this.vueMeta.addApp('vuetify');
    set({
      style: [{
        cssText: this.generatedStyles,
        type: 'text/css',
        id: 'vuetify-theme-stylesheet',
        nonce: this.options.cspNonce
      }]
    });
  }

  initSSR(ssrContext) {
    // SSR
    const nonce = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : '';
    ssrContext.head = ssrContext.head || '';
    ssrContext.head += `<style type="text/css" id="vuetify-theme-stylesheet"${nonce}>${this.generatedStyles}</style>`;
  }

  initTheme(root) {
    // Only watch for reactivity on client side
    if (typeof document === 'undefined') return; // If we get here somehow, ensure
    // existing instance is removed

    if (this.unwatch) {
      this.unwatch();
      this.unwatch = null;
    } // TODO: Update to use RFC if merged
    // https://github.com/vuejs/rfcs/blob/advanced-reactivity-api/active-rfcs/0000-advanced-reactivity-api.md


    root.$once('hook:created', () => {
      const obs = external_vue_default.a.observable({
        themes: this.themes
      });
      this.unwatch = root.$watch(() => obs.themes, () => this.applyTheme(), {
        deep: true
      });
    });
    this.applyTheme();
  }

  get currentTheme() {
    const target = this.dark ? 'dark' : 'light';
    return this.themes[target];
  }

  get generatedStyles() {
    const theme = this.parsedTheme;
    /* istanbul ignore next */

    const options = this.options || {};
    let css;

    if (options.themeCache != null) {
      css = options.themeCache.get(theme);
      /* istanbul ignore if */

      if (css != null) return css;
    }

    css = genStyles(theme, options.customProperties);

    if (options.minifyTheme != null) {
      css = options.minifyTheme(css);
    }

    if (options.themeCache != null) {
      options.themeCache.set(theme, css);
    }

    return css;
  }

  get parsedTheme() {
    return parse(this.currentTheme || {}, undefined, Object(helpers["f" /* getNestedValue */])(this.options, ['variations'], true));
  } // Is using v2.3 of vue-meta
  // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0


  get isVueMeta23() {
    return typeof this.vueMeta.addApp === 'function';
  }

}
theme_Theme.property = 'theme';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/framework.js
 // Services


class framework_Vuetify {
  constructor(userPreset = {}) {
    this.framework = {
      isHydrating: false
    };
    this.installed = [];
    this.preset = {};
    this.userPreset = {};
    this.userPreset = userPreset;
    this.use(presets_Presets);
    this.use(application_Application);
    this.use(breakpoint_Breakpoint);
    this.use(goto_Goto);
    this.use(icons_Icons);
    this.use(lang_Lang);
    this.use(theme_Theme);
  } // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available


  init(root, ssrContext) {
    this.installed.forEach(property => {
      const service = this.framework[property];
      service.framework = this.framework;
      service.init(root, ssrContext);
    }); // rtl is not installed and
    // will never be called by
    // the init process

    this.framework.rtl = Boolean(this.preset.rtl);
  } // Instantiate a VuetifyService


  use(Service) {
    const property = Service.property;
    if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

    this.framework[property] = new Service(this.preset, this);
    this.installed.push(property);
  }

}
framework_Vuetify.install = install;
framework_Vuetify.installed = false;
framework_Vuetify.version = "2.6.9";
framework_Vuetify.config = {
  silent: false
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = val.concat(obj[key]);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function createDefu(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const defuFn = createDefu((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
const defuArrayFn = createDefu((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});

exports.createDefu = createDefu;
exports["default"] = defu;
exports.defu = defu;
exports.defuArrayFn = defuArrayFn;
exports.defuFn = defuFn;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bosons/Container.vue?vue&type=template&id=9d0f973c&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._t("default")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/bosons/Container.vue?vue&type=template&id=9d0f973c&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/bosons/Container.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9d0f973c",
  "f0ee98cc"
  
)

/* harmony default export */ var Container = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3d8de15e", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6439d180", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("e8e18342", content, true)

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("eed3c382", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("dd5abd6a", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2cb1d014", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5221d211", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3f20fa63", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("58ebb486", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("8e7b4ef6", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("vuesax");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Footer.vue?vue&type=template&id=0ca54476&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "Footer",
    attrs: {
      "id": "footer"
    }
  }, [_c('Container', [_c('div', {
    staticClass: "TextFooter"
  }, [_c('h1', {
    staticClass: "TitleFooter"
  }, [_vm._v("\n        Entre em contato agora e agende sua avaliação!\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "PaghFooter"
  }, [_c('strong', [_vm._v("Ficou com alguma dúvida?")]), _vm._v(" clique no botão e agende sua\n        avaliação agora mesmo!\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "ButtonsLayout"
  }, [_c('ButtonOla')], 1), _vm._v(" "), _c('div', {
    staticClass: "IconsLayout"
  }, [_c('a', {
    attrs: {
      "href": "https://www.instagram.com/tiagobucomaxilo.odt/?hl=pt-br",
      "target": "_blank"
    }
  }, [_c('Instagram')], 1), _c('a', {
    attrs: {
      "href": "https://api.whatsapp.com/send?phone=555185020228&text=Ol%C3%A1!%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.",
      "target": "_blank"
    }
  }, [_c('WhatsApp')], 1), _c('a', {
    attrs: {
      "href": "https://www.linkedin.com/in/tiago-machado-86659b236/?originalSubdomain=br",
      "target": "_blank"
    }
  }, [_c('Linkdl')], 1), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.facebook.com/tiago.machadodesouza.3",
      "target": "_blank"
    }
  }, [_c('Facebook')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "contactLocation"
  }, [_c('div', {
    staticClass: "contact"
  }, [_c('svg', {
    attrs: {
      "id": "contact",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#FFFF",
      "d": "M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "tel:518502-0228"
    }
  }, [_c('p', {
    staticStyle: {
      "margin": "0"
    }
  }, [_vm._v("(51) 9 8502-0228")])])]), _vm._v(" "), _c('div', {
    staticClass: "location"
  }, [_c('svg', {
    attrs: {
      "id": "location",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 384 512"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#FFFF",
      "d": "M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://goo.gl/maps/Hdvz3XwtLVujdf4MA"
    }
  }, [_c('p', {
    staticClass: "location",
    staticStyle: {
      "margin": "0"
    }
  }, [_vm._v("\n              R. Maj. Ouríques, 2111, Sala 33 - Santo"), _c('br'), _vm._v("\n              Antônio, Cachoeira do Sul - RS\n            ")])])])])]), _vm._v(" "), _c('p', {
    staticClass: "Copy"
  }, [_vm._v("© " + _vm._s(_vm.currentYear) + ", Tiago Machado de Souza.")])])], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/molecules/Footer.vue?vue&type=template&id=0ca54476&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/Footer.vue?vue&type=script&lang=typescript&


/* harmony default export */ var Footervue_type_script_lang_typescript_ = (external_vue_default.a.extend({
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}));

// CONCATENATED MODULE: ./components/molecules/Footer.vue?vue&type=script&lang=typescript&
 /* harmony default export */ var molecules_Footervue_type_script_lang_typescript_ = (Footervue_type_script_lang_typescript_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/molecules/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  molecules_Footervue_type_script_lang_typescript_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ca54476",
  "5773ec12"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ButtonOla: __webpack_require__(78).default,Instagram: __webpack_require__(79).default,WhatsApp: __webpack_require__(80).default,Linkdl: __webpack_require__(81).default,Facebook: __webpack_require__(82).default,Container: __webpack_require__(15).default})


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(77);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("4f857918", content, true)

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("c3ffe710", content, true)

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vs-button--default.vs-button--active,.vs-button--default:hover{box-shadow:0 10px 20px -10px #52adc1!important;transform:translateY(-3px)}.vs-card{background:rgba(var(--vs-background),1);color:rgba(var(--vs-text),1);width:100%;max-width:40rem!important;height:-webkit-max-content;height:-moz-max-content;height:max-content;box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:20px;transition:all .25s ease;cursor:pointer;position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("df88d454", content, true)

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(46);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(47);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:Hellix Normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),local(\"Hellix-Regular\");font-weight:400}@font-face{font-family:Hellix SemiBold;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),local(\"Hellix-SemiBold\")}@font-face{font-family:Hellix Bold;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "),local(\"Hellix-Bold\");font-weight:700}@font-face{font-family:Hellix Medium;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "),local(\"Hellix-Medium\");font-weight:Medium}body{font-family:Hellix;width:100%;overflow-x:hidden;font-size:1rem;font-size:16px}html{position:relative;scroll-behavior:smooth}body,html{min-height:100%}#__layout,#__nuxt{height:100%;width:100%}*{margin:0;padding:0;vertical-align:baseline;border:0;list-style:none;text-decoration:none;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}*,:focus{outline:none}.internal-links{display:grid;grid-auto-flow:column;grid-gap:.618rem;justify-items:start;justify-content:start}@media(max-width:600px){.internal-links{grid-template-columns:1fr;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))!important;grid-auto-flow:dense}}@media(max-width:992px){.internal-links{grid-auto-flow:dense;grid-template-columns:-webkit-min-content -webkit-min-content;grid-template-columns:min-content min-content}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Hellix-Regular.3f6f5c0.ttf";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Hellix-SemiBold.d05eec1.ttf";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Hellix-Bold.6b3b328.ttf";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Hellix-Medium.cc0bf9b.ttf";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("570ee3d2", content, true)

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Hover.css (http://ianlunn.github.io/Hover/)\n * Version: 2.3.2\n * Author: Ian Lunn @IanLunn\n * Author URL: http://ianlunn.co.uk/\n * Github: https://github.com/IanLunn/Hover\n\n * Hover.css Copyright Ian Lunn 2017. Generated with Sass.\n */.hvr-grow{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform}.hvr-grow:active,.hvr-grow:focus,.hvr-grow:hover{transform:scale(1.1)}.hvr-shrink{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform}.hvr-shrink:active,.hvr-shrink:focus,.hvr-shrink:hover{transform:scale(.9)}@-webkit-keyframes hvr-pulse{25%{transform:scale(1.1)}75%{transform:scale(.9)}}@keyframes hvr-pulse{25%{transform:scale(1.1)}75%{transform:scale(.9)}}.hvr-pulse{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-pulse:active,.hvr-pulse:focus,.hvr-pulse:hover{-webkit-animation-name:hvr-pulse;animation-name:hvr-pulse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes hvr-pulse-grow{to{transform:scale(1.1)}}@keyframes hvr-pulse-grow{to{transform:scale(1.1)}}.hvr-pulse-grow{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-pulse-grow:active,.hvr-pulse-grow:focus,.hvr-pulse-grow:hover{-webkit-animation-name:hvr-pulse-grow;animation-name:hvr-pulse-grow;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}@-webkit-keyframes hvr-pulse-shrink{to{transform:scale(.9)}}@keyframes hvr-pulse-shrink{to{transform:scale(.9)}}.hvr-pulse-shrink{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-pulse-shrink:active,.hvr-pulse-shrink:focus,.hvr-pulse-shrink:hover{-webkit-animation-name:hvr-pulse-shrink;animation-name:hvr-pulse-shrink;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}@-webkit-keyframes hvr-push{50%{transform:scale(.8)}to{transform:scale(1)}}@keyframes hvr-push{50%{transform:scale(.8)}to{transform:scale(1)}}.hvr-push{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-push:active,.hvr-push:focus,.hvr-push:hover{-webkit-animation-name:hvr-push;animation-name:hvr-push;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-pop{50%{transform:scale(1.2)}}@keyframes hvr-pop{50%{transform:scale(1.2)}}.hvr-pop{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-pop:active,.hvr-pop:focus,.hvr-pop:hover{-webkit-animation-name:hvr-pop;animation-name:hvr-pop;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}.hvr-bounce-in{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.5s}.hvr-bounce-in:active,.hvr-bounce-in:focus,.hvr-bounce-in:hover{transform:scale(1.2);transition-timing-function:cubic-bezier(.47,2.02,.31,-.36)}.hvr-bounce-out{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.5s}.hvr-bounce-out:active,.hvr-bounce-out:focus,.hvr-bounce-out:hover{transform:scale(.8);transition-timing-function:cubic-bezier(.47,2.02,.31,-.36)}.hvr-rotate{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform}.hvr-rotate:active,.hvr-rotate:focus,.hvr-rotate:hover{transform:rotate(4deg)}.hvr-grow-rotate{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform}.hvr-grow-rotate:active,.hvr-grow-rotate:focus,.hvr-grow-rotate:hover{transform:scale(1.1) rotate(4deg)}.hvr-float{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-float:active,.hvr-float:focus,.hvr-float:hover{transform:translateY(-4px)}.hvr-sink{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-sink:active,.hvr-sink:focus,.hvr-sink:hover{transform:translateY(8px)}@-webkit-keyframes hvr-bob{0%{transform:translateY(-8px)}50%{transform:translateY(-4px)}to{transform:translateY(-8px)}}@keyframes hvr-bob{0%{transform:translateY(-8px)}50%{transform:translateY(-4px)}to{transform:translateY(-8px)}}@-webkit-keyframes hvr-bob-float{to{transform:translateY(-8px)}}@keyframes hvr-bob-float{to{transform:translateY(-8px)}}.hvr-bob{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-bob:active,.hvr-bob:focus,.hvr-bob:hover{-webkit-animation-name:hvr-bob-float,hvr-bob;animation-name:hvr-bob-float,hvr-bob;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate}@-webkit-keyframes hvr-hang{0%{transform:translateY(8px)}50%{transform:translateY(4px)}to{transform:translateY(8px)}}@keyframes hvr-hang{0%{transform:translateY(8px)}50%{transform:translateY(4px)}to{transform:translateY(8px)}}@-webkit-keyframes hvr-hang-sink{to{transform:translateY(8px)}}@keyframes hvr-hang-sink{to{transform:translateY(8px)}}.hvr-hang{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-hang:active,.hvr-hang:focus,.hvr-hang:hover{-webkit-animation-name:hvr-hang-sink,hvr-hang;animation-name:hvr-hang-sink,hvr-hang;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate}.hvr-skew{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform}.hvr-skew:active,.hvr-skew:focus,.hvr-skew:hover{transform:skew(-10deg)}.hvr-skew-forward{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform;transform-origin:0 100%}.hvr-skew-forward:active,.hvr-skew-forward:focus,.hvr-skew-forward:hover{transform:skew(-10deg)}.hvr-skew-backward{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform;transform-origin:0 100%}.hvr-skew-backward:active,.hvr-skew-backward:focus,.hvr-skew-backward:hover{transform:skew(10deg)}@-webkit-keyframes hvr-wobble-vertical{16.65%{transform:translateY(8px)}33.3%{transform:translateY(-6px)}49.95%{transform:translateY(4px)}66.6%{transform:translateY(-2px)}83.25%{transform:translateY(1px)}to{transform:translateY(0)}}@keyframes hvr-wobble-vertical{16.65%{transform:translateY(8px)}33.3%{transform:translateY(-6px)}49.95%{transform:translateY(4px)}66.6%{transform:translateY(-2px)}83.25%{transform:translateY(1px)}to{transform:translateY(0)}}.hvr-wobble-vertical{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-wobble-vertical:active,.hvr-wobble-vertical:focus,.hvr-wobble-vertical:hover{-webkit-animation-name:hvr-wobble-vertical;animation-name:hvr-wobble-vertical;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-wobble-horizontal{16.65%{transform:translateX(8px)}33.3%{transform:translateX(-6px)}49.95%{transform:translateX(4px)}66.6%{transform:translateX(-2px)}83.25%{transform:translateX(1px)}to{transform:translateX(0)}}@keyframes hvr-wobble-horizontal{16.65%{transform:translateX(8px)}33.3%{transform:translateX(-6px)}49.95%{transform:translateX(4px)}66.6%{transform:translateX(-2px)}83.25%{transform:translateX(1px)}to{transform:translateX(0)}}.hvr-wobble-horizontal{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-wobble-horizontal:active,.hvr-wobble-horizontal:focus,.hvr-wobble-horizontal:hover{-webkit-animation-name:hvr-wobble-horizontal;animation-name:hvr-wobble-horizontal;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-wobble-to-bottom-right{16.65%{transform:translate(8px,8px)}33.3%{transform:translate(-6px,-6px)}49.95%{transform:translate(4px,4px)}66.6%{transform:translate(-2px,-2px)}83.25%{transform:translate(1px,1px)}to{transform:translate(0)}}@keyframes hvr-wobble-to-bottom-right{16.65%{transform:translate(8px,8px)}33.3%{transform:translate(-6px,-6px)}49.95%{transform:translate(4px,4px)}66.6%{transform:translate(-2px,-2px)}83.25%{transform:translate(1px,1px)}to{transform:translate(0)}}.hvr-wobble-to-bottom-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-wobble-to-bottom-right:active,.hvr-wobble-to-bottom-right:focus,.hvr-wobble-to-bottom-right:hover{-webkit-animation-name:hvr-wobble-to-bottom-right;animation-name:hvr-wobble-to-bottom-right;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-wobble-to-top-right{16.65%{transform:translate(8px,-8px)}33.3%{transform:translate(-6px,6px)}49.95%{transform:translate(4px,-4px)}66.6%{transform:translate(-2px,2px)}83.25%{transform:translate(1px,-1px)}to{transform:translate(0)}}@keyframes hvr-wobble-to-top-right{16.65%{transform:translate(8px,-8px)}33.3%{transform:translate(-6px,6px)}49.95%{transform:translate(4px,-4px)}66.6%{transform:translate(-2px,2px)}83.25%{transform:translate(1px,-1px)}to{transform:translate(0)}}.hvr-wobble-to-top-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-wobble-to-top-right:active,.hvr-wobble-to-top-right:focus,.hvr-wobble-to-top-right:hover{-webkit-animation-name:hvr-wobble-to-top-right;animation-name:hvr-wobble-to-top-right;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-wobble-top{16.65%{transform:skew(-12deg)}33.3%{transform:skew(10deg)}49.95%{transform:skew(-6deg)}66.6%{transform:skew(4deg)}83.25%{transform:skew(-2deg)}to{transform:skew(0)}}@keyframes hvr-wobble-top{16.65%{transform:skew(-12deg)}33.3%{transform:skew(10deg)}49.95%{transform:skew(-6deg)}66.6%{transform:skew(4deg)}83.25%{transform:skew(-2deg)}to{transform:skew(0)}}.hvr-wobble-top{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transform-origin:0 100%}.hvr-wobble-top:active,.hvr-wobble-top:focus,.hvr-wobble-top:hover{-webkit-animation-name:hvr-wobble-top;animation-name:hvr-wobble-top;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-wobble-bottom{16.65%{transform:skew(-12deg)}33.3%{transform:skew(10deg)}49.95%{transform:skew(-6deg)}66.6%{transform:skew(4deg)}83.25%{transform:skew(-2deg)}to{transform:skew(0)}}@keyframes hvr-wobble-bottom{16.65%{transform:skew(-12deg)}33.3%{transform:skew(10deg)}49.95%{transform:skew(-6deg)}66.6%{transform:skew(4deg)}83.25%{transform:skew(-2deg)}to{transform:skew(0)}}.hvr-wobble-bottom{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transform-origin:100% 0}.hvr-wobble-bottom:active,.hvr-wobble-bottom:focus,.hvr-wobble-bottom:hover{-webkit-animation-name:hvr-wobble-bottom;animation-name:hvr-wobble-bottom;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-wobble-skew{16.65%{transform:skew(-12deg)}33.3%{transform:skew(10deg)}49.95%{transform:skew(-6deg)}66.6%{transform:skew(4deg)}83.25%{transform:skew(-2deg)}to{transform:skew(0)}}@keyframes hvr-wobble-skew{16.65%{transform:skew(-12deg)}33.3%{transform:skew(10deg)}49.95%{transform:skew(-6deg)}66.6%{transform:skew(4deg)}83.25%{transform:skew(-2deg)}to{transform:skew(0)}}.hvr-wobble-skew{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-wobble-skew:active,.hvr-wobble-skew:focus,.hvr-wobble-skew:hover{-webkit-animation-name:hvr-wobble-skew;animation-name:hvr-wobble-skew;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-buzz{50%{transform:translateX(3px) rotate(2deg)}to{transform:translateX(-3px) rotate(-2deg)}}@keyframes hvr-buzz{50%{transform:translateX(3px) rotate(2deg)}to{transform:translateX(-3px) rotate(-2deg)}}.hvr-buzz{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-buzz:active,.hvr-buzz:focus,.hvr-buzz:hover{-webkit-animation-name:hvr-buzz;animation-name:hvr-buzz;-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes hvr-buzz-out{10%{transform:translateX(3px) rotate(2deg)}20%{transform:translateX(-3px) rotate(-2deg)}30%{transform:translateX(3px) rotate(2deg)}40%{transform:translateX(-3px) rotate(-2deg)}50%{transform:translateX(2px) rotate(1deg)}60%{transform:translateX(-2px) rotate(-1deg)}70%{transform:translateX(2px) rotate(1deg)}80%{transform:translateX(-2px) rotate(-1deg)}90%{transform:translateX(1px) rotate(0)}to{transform:translateX(-1px) rotate(0)}}@keyframes hvr-buzz-out{10%{transform:translateX(3px) rotate(2deg)}20%{transform:translateX(-3px) rotate(-2deg)}30%{transform:translateX(3px) rotate(2deg)}40%{transform:translateX(-3px) rotate(-2deg)}50%{transform:translateX(2px) rotate(1deg)}60%{transform:translateX(-2px) rotate(-1deg)}70%{transform:translateX(2px) rotate(1deg)}80%{transform:translateX(-2px) rotate(-1deg)}90%{transform:translateX(1px) rotate(0)}to{transform:translateX(-1px) rotate(0)}}.hvr-buzz-out{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-buzz-out:active,.hvr-buzz-out:focus,.hvr-buzz-out:hover{-webkit-animation-name:hvr-buzz-out;animation-name:hvr-buzz-out;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}.hvr-forward{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform}.hvr-forward:active,.hvr-forward:focus,.hvr-forward:hover{transform:translateX(8px)}.hvr-backward{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:transform}.hvr-backward:active,.hvr-backward:focus,.hvr-backward:hover{transform:translateX(-8px)}.hvr-fade{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;overflow:hidden;transition-duration:.3s;transition-property:color,background-color}.hvr-fade:active,.hvr-fade:focus,.hvr-fade:hover{background-color:#2098d1;color:#fff}@-webkit-keyframes hvr-back-pulse{50%{background-color:rgba(32,152,209,.75)}}@keyframes hvr-back-pulse{50%{background-color:rgba(32,152,209,.75)}}.hvr-back-pulse{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;overflow:hidden;transition-duration:.5s;transition-property:color,background-color}.hvr-back-pulse:active,.hvr-back-pulse:focus,.hvr-back-pulse:hover{-webkit-animation-name:hvr-back-pulse;animation-name:hvr-back-pulse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;background-color:#2098d1;color:#fff}.hvr-sweep-to-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color;transition-duration:.3s}.hvr-sweep-to-right:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;transform:scaleX(0);transform-origin:0 50%;transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-sweep-to-right:active,.hvr-sweep-to-right:focus,.hvr-sweep-to-right:hover{color:#fff}.hvr-sweep-to-right:active:before,.hvr-sweep-to-right:focus:before,.hvr-sweep-to-right:hover:before{transform:scaleX(1)}.hvr-sweep-to-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color;transition-duration:.3s}.hvr-sweep-to-left:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;transform:scaleX(0);transform-origin:100% 50%;transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-sweep-to-left:active,.hvr-sweep-to-left:focus,.hvr-sweep-to-left:hover{color:#fff}.hvr-sweep-to-left:active:before,.hvr-sweep-to-left:focus:before,.hvr-sweep-to-left:hover:before{transform:scaleX(1)}.hvr-sweep-to-bottom{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color;transition-duration:.3s}.hvr-sweep-to-bottom:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;transform:scaleY(0);transform-origin:50% 0;transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-sweep-to-bottom:active,.hvr-sweep-to-bottom:focus,.hvr-sweep-to-bottom:hover{color:#fff}.hvr-sweep-to-bottom:active:before,.hvr-sweep-to-bottom:focus:before,.hvr-sweep-to-bottom:hover:before{transform:scaleY(1)}.hvr-sweep-to-top{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color;transition-duration:.3s}.hvr-sweep-to-top:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;transform:scaleY(0);transform-origin:50% 100%;transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-sweep-to-top:active,.hvr-sweep-to-top:focus,.hvr-sweep-to-top:hover{color:#fff}.hvr-sweep-to-top:active:before,.hvr-sweep-to-top:focus:before,.hvr-sweep-to-top:hover:before{transform:scaleY(1)}.hvr-bounce-to-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color;transition-duration:.5s}.hvr-bounce-to-right:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;transform:scaleX(0);transform-origin:0 50%;transition-property:transform;transition-duration:.5s;transition-timing-function:ease-out}.hvr-bounce-to-right:active,.hvr-bounce-to-right:focus,.hvr-bounce-to-right:hover{color:#fff}.hvr-bounce-to-right:active:before,.hvr-bounce-to-right:focus:before,.hvr-bounce-to-right:hover:before{transform:scaleX(1);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}.hvr-bounce-to-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color;transition-duration:.5s}.hvr-bounce-to-left:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;transform:scaleX(0);transform-origin:100% 50%;transition-property:transform;transition-duration:.5s;transition-timing-function:ease-out}.hvr-bounce-to-left:active,.hvr-bounce-to-left:focus,.hvr-bounce-to-left:hover{color:#fff}.hvr-bounce-to-left:active:before,.hvr-bounce-to-left:focus:before,.hvr-bounce-to-left:hover:before{transform:scaleX(1);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}.hvr-bounce-to-bottom{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color;transition-duration:.5s}.hvr-bounce-to-bottom:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;transform:scaleY(0);transform-origin:50% 0;transition-property:transform;transition-duration:.5s;transition-timing-function:ease-out}.hvr-bounce-to-bottom:active,.hvr-bounce-to-bottom:focus,.hvr-bounce-to-bottom:hover{color:#fff}.hvr-bounce-to-bottom:active:before,.hvr-bounce-to-bottom:focus:before,.hvr-bounce-to-bottom:hover:before{transform:scaleY(1);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}.hvr-bounce-to-top{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color;transition-duration:.5s}.hvr-bounce-to-top:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;transform:scaleY(0);transform-origin:50% 100%;transition-property:transform;transition-duration:.5s;transition-timing-function:ease-out}.hvr-bounce-to-top:active,.hvr-bounce-to-top:focus,.hvr-bounce-to-top:hover{color:#fff}.hvr-bounce-to-top:active:before,.hvr-bounce-to-top:focus:before,.hvr-bounce-to-top:hover:before{transform:scaleY(1);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}.hvr-radial-out{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden;background:#e1e1e1;transition-property:color;transition-duration:.3s}.hvr-radial-out:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;border-radius:100%;transform:scale(0);transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-radial-out:active,.hvr-radial-out:focus,.hvr-radial-out:hover{color:#fff}.hvr-radial-out:active:before,.hvr-radial-out:focus:before,.hvr-radial-out:hover:before{transform:scale(2)}.hvr-radial-in{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden;background:#2098d1;transition-property:color;transition-duration:.3s}.hvr-radial-in:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#e1e1e1;border-radius:100%;transform:scale(2);transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-radial-in:active,.hvr-radial-in:focus,.hvr-radial-in:hover{color:#fff}.hvr-radial-in:active:before,.hvr-radial-in:focus:before,.hvr-radial-in:hover:before{transform:scale(0)}.hvr-rectangle-in{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;background:#2098d1;transition-property:color;transition-duration:.3s}.hvr-rectangle-in:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#e1e1e1;transform:scale(1);transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-rectangle-in:active,.hvr-rectangle-in:focus,.hvr-rectangle-in:hover{color:#fff}.hvr-rectangle-in:active:before,.hvr-rectangle-in:focus:before,.hvr-rectangle-in:hover:before{transform:scale(0)}.hvr-rectangle-out{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;background:#e1e1e1;transition-property:color;transition-duration:.3s}.hvr-rectangle-out:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#2098d1;transform:scale(0);transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-rectangle-out:active,.hvr-rectangle-out:focus,.hvr-rectangle-out:hover{color:#fff}.hvr-rectangle-out:active:before,.hvr-rectangle-out:focus:before,.hvr-rectangle-out:hover:before{transform:scale(1)}.hvr-shutter-in-horizontal{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;background:#2098d1;transition-property:color;transition-duration:.3s}.hvr-shutter-in-horizontal:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#e1e1e1;transform:scaleX(1);transform-origin:50%;transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-shutter-in-horizontal:active,.hvr-shutter-in-horizontal:focus,.hvr-shutter-in-horizontal:hover{color:#fff}.hvr-shutter-in-horizontal:active:before,.hvr-shutter-in-horizontal:focus:before,.hvr-shutter-in-horizontal:hover:before{transform:scaleX(0)}.hvr-shutter-out-horizontal{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;background:#e1e1e1;transition-property:color;transition-duration:.3s}.hvr-shutter-out-horizontal:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#2098d1;transform:scaleX(0);transform-origin:50%;transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-shutter-out-horizontal:active,.hvr-shutter-out-horizontal:focus,.hvr-shutter-out-horizontal:hover{color:#fff}.hvr-shutter-out-horizontal:active:before,.hvr-shutter-out-horizontal:focus:before,.hvr-shutter-out-horizontal:hover:before{transform:scaleX(1)}.hvr-shutter-in-vertical{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;background:#2098d1;transition-property:color;transition-duration:.3s}.hvr-shutter-in-vertical:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#e1e1e1;transform:scaleY(1);transform-origin:50%;transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-shutter-in-vertical:active,.hvr-shutter-in-vertical:focus,.hvr-shutter-in-vertical:hover{color:#fff}.hvr-shutter-in-vertical:active:before,.hvr-shutter-in-vertical:focus:before,.hvr-shutter-in-vertical:hover:before{transform:scaleY(0)}.hvr-shutter-out-vertical{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;background:#e1e1e1;transition-property:color;transition-duration:.3s}.hvr-shutter-out-vertical:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#2098d1;transform:scaleY(0);transform-origin:50%;transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-shutter-out-vertical:active,.hvr-shutter-out-vertical:focus,.hvr-shutter-out-vertical:hover{color:#fff}.hvr-shutter-out-vertical:active:before,.hvr-shutter-out-vertical:focus:before,.hvr-shutter-out-vertical:hover:before{transform:scaleY(1)}.hvr-border-fade{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:box-shadow;box-shadow:inset 0 0 0 4px #e1e1e1,0 0 1px transparent}.hvr-border-fade:active,.hvr-border-fade:focus,.hvr-border-fade:hover{box-shadow:inset 0 0 0 4px #2098d1,0 0 1px transparent}.hvr-hollow{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:background;box-shadow:inset 0 0 0 4px #e1e1e1,0 0 1px transparent}.hvr-hollow:active,.hvr-hollow:focus,.hvr-hollow:hover{background:none}.hvr-trim{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-trim:before{content:\"\";position:absolute;border:4px solid #fff;top:4px;left:4px;right:4px;bottom:4px;opacity:0;transition-duration:.3s;transition-property:opacity}.hvr-trim:active:before,.hvr-trim:focus:before,.hvr-trim:hover:before{opacity:1}@-webkit-keyframes hvr-ripple-out{to{top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0}}@keyframes hvr-ripple-out{to{top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0}}.hvr-ripple-out{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-ripple-out:before{content:\"\";position:absolute;border:6px solid #e1e1e1;top:0;right:0;bottom:0;left:0;-webkit-animation-duration:1s;animation-duration:1s}.hvr-ripple-out:active:before,.hvr-ripple-out:focus:before,.hvr-ripple-out:hover:before{-webkit-animation-name:hvr-ripple-out;animation-name:hvr-ripple-out}@-webkit-keyframes hvr-ripple-in{to{top:0;right:0;bottom:0;left:0;opacity:1}}@keyframes hvr-ripple-in{to{top:0;right:0;bottom:0;left:0;opacity:1}}.hvr-ripple-in{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-ripple-in:before{content:\"\";position:absolute;border:4px solid #e1e1e1;top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0;-webkit-animation-duration:1s;animation-duration:1s}.hvr-ripple-in:active:before,.hvr-ripple-in:focus:before,.hvr-ripple-in:hover:before{-webkit-animation-name:hvr-ripple-in;animation-name:hvr-ripple-in}.hvr-outline-out{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-outline-out:before{content:\"\";position:absolute;border:4px solid #e1e1e1;top:0;right:0;bottom:0;left:0;transition-duration:.3s;transition-property:top,right,bottom,left}.hvr-outline-out:active:before,.hvr-outline-out:focus:before,.hvr-outline-out:hover:before{top:-8px;right:-8px;bottom:-8px;left:-8px}.hvr-outline-in{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-outline-in:before{pointer-events:none;content:\"\";position:absolute;border:4px solid #e1e1e1;top:-16px;right:-16px;bottom:-16px;left:-16px;opacity:0;transition-duration:.3s;transition-property:top,right,bottom,left}.hvr-outline-in:active:before,.hvr-outline-in:focus:before,.hvr-outline-in:hover:before{top:-8px;right:-8px;bottom:-8px;left:-8px;opacity:1}.hvr-round-corners{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:border-radius}.hvr-round-corners:active,.hvr-round-corners:focus,.hvr-round-corners:hover{border-radius:1em}.hvr-underline-from-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-underline-from-left:before{content:\"\";position:absolute;z-index:-1;left:0;right:100%;bottom:0;background:#2098d1;height:4px;transition-property:right;transition-duration:.3s;transition-timing-function:ease-out}.hvr-underline-from-left:active:before,.hvr-underline-from-left:focus:before,.hvr-underline-from-left:hover:before{right:0}.hvr-underline-from-center{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-underline-from-center:before{content:\"\";position:absolute;z-index:-1;left:51%;right:51%;bottom:0;background:#2098d1;height:4px;transition-property:left,right;transition-duration:.3s;transition-timing-function:ease-out}.hvr-underline-from-center:active:before,.hvr-underline-from-center:focus:before,.hvr-underline-from-center:hover:before{left:0;right:0}.hvr-underline-from-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-underline-from-right:before{content:\"\";position:absolute;z-index:-1;left:100%;right:0;bottom:0;background:#2098d1;height:4px;transition-property:left;transition-duration:.3s;transition-timing-function:ease-out}.hvr-underline-from-right:active:before,.hvr-underline-from-right:focus:before,.hvr-underline-from-right:hover:before{left:0}.hvr-overline-from-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-overline-from-left:before{content:\"\";position:absolute;z-index:-1;left:0;right:100%;top:0;background:#2098d1;height:4px;transition-property:right;transition-duration:.3s;transition-timing-function:ease-out}.hvr-overline-from-left:active:before,.hvr-overline-from-left:focus:before,.hvr-overline-from-left:hover:before{right:0}.hvr-overline-from-center{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-overline-from-center:before{content:\"\";position:absolute;z-index:-1;left:51%;right:51%;top:0;background:#2098d1;height:4px;transition-property:left,right;transition-duration:.3s;transition-timing-function:ease-out}.hvr-overline-from-center:active:before,.hvr-overline-from-center:focus:before,.hvr-overline-from-center:hover:before{left:0;right:0}.hvr-overline-from-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-overline-from-right:before{content:\"\";position:absolute;z-index:-1;left:100%;right:0;top:0;background:#2098d1;height:4px;transition-property:left;transition-duration:.3s;transition-timing-function:ease-out}.hvr-overline-from-right:active:before,.hvr-overline-from-right:focus:before,.hvr-overline-from-right:hover:before{left:0}.hvr-reveal{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-reveal:before{content:\"\";position:absolute;z-index:-1;left:0;right:0;top:0;bottom:0;border:0 solid #2098d1;transition-property:border-width;transition-duration:.1s;transition-timing-function:ease-out}.hvr-reveal:active:before,.hvr-reveal:focus:before,.hvr-reveal:hover:before{transform:translateY(0);border-width:4px}.hvr-underline-reveal{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-underline-reveal:before{content:\"\";position:absolute;z-index:-1;left:0;right:0;bottom:0;background:#2098d1;height:4px;transform:translateY(4px);transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-underline-reveal:active:before,.hvr-underline-reveal:focus:before,.hvr-underline-reveal:hover:before{transform:translateY(0)}.hvr-overline-reveal{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-overline-reveal:before{content:\"\";position:absolute;z-index:-1;left:0;right:0;top:0;background:#2098d1;height:4px;transform:translateY(-4px);transition-property:transform;transition-duration:.3s;transition-timing-function:ease-out}.hvr-overline-reveal:active:before,.hvr-overline-reveal:focus:before,.hvr-overline-reveal:hover:before{transform:translateY(0)}.hvr-glow{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:box-shadow}.hvr-glow:active,.hvr-glow:focus,.hvr-glow:hover{box-shadow:0 0 8px rgba(0,0,0,.6)}.hvr-shadow{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:box-shadow}.hvr-shadow:active,.hvr-shadow:focus,.hvr-shadow:hover{box-shadow:0 10px 10px -10px rgba(0,0,0,.5)}.hvr-grow-shadow{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:box-shadow,transform}.hvr-grow-shadow:active,.hvr-grow-shadow:focus,.hvr-grow-shadow:hover{box-shadow:0 10px 10px -10px rgba(0,0,0,.5);transform:scale(1.1)}.hvr-box-shadow-outset{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:box-shadow}.hvr-box-shadow-outset:active,.hvr-box-shadow-outset:focus,.hvr-box-shadow-outset:hover{box-shadow:2px 2px 2px rgba(0,0,0,.6)}.hvr-box-shadow-inset{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s;transition-property:box-shadow;box-shadow:inset 0 0 0 rgba(0,0,0,.6),0 0 1px transparent}.hvr-box-shadow-inset:active,.hvr-box-shadow-inset:focus,.hvr-box-shadow-inset:hover{box-shadow:inset 2px 2px 2px rgba(0,0,0,.6),0 0 1px transparent}.hvr-float-shadow{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-duration:.3s;transition-property:transform}.hvr-float-shadow:before{pointer-events:none;position:absolute;z-index:-1;content:\"\";top:100%;left:5%;height:10px;width:90%;opacity:0;background:radial-gradient(ellipse at center,rgba(0,0,0,.35) 0,transparent 80%);transition-duration:.3s;transition-property:transform,opacity}.hvr-float-shadow:active,.hvr-float-shadow:focus,.hvr-float-shadow:hover{transform:translateY(-5px)}.hvr-float-shadow:active:before,.hvr-float-shadow:focus:before,.hvr-float-shadow:hover:before{opacity:1;transform:translateY(5px)}.hvr-shadow-radial{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-shadow-radial:after,.hvr-shadow-radial:before{pointer-events:none;position:absolute;content:\"\";left:0;width:100%;box-sizing:border-box;background-repeat:no-repeat;height:5px;opacity:0;transition-duration:.3s;transition-property:opacity}.hvr-shadow-radial:before{bottom:100%;background:radial-gradient(ellipse at 50%,at 150%,rgba(0,0,0,.6) 0,transparent 80%);background:radial-gradient(ellipse at 50% 150%,rgba(0,0,0,.6) 0,transparent 80%)}.hvr-shadow-radial:after{top:100%;background:radial-gradient(ellipse at 50%,at -50%,rgba(0,0,0,.6) 0,transparent 80%);background:radial-gradient(ellipse at 50% -50%,rgba(0,0,0,.6) 0,transparent 80%)}.hvr-shadow-radial:active:after,.hvr-shadow-radial:active:before,.hvr-shadow-radial:focus:after,.hvr-shadow-radial:focus:before,.hvr-shadow-radial:hover:after,.hvr-shadow-radial:hover:before{opacity:1}.hvr-bubble-top{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-bubble-top:before{pointer-events:none;position:absolute;z-index:-1;content:\"\";transition-duration:.3s;transition-property:transform;left:calc(50% - 10px);top:0;border-color:transparent transparent #e1e1e1;border-style:solid;border-width:0 10px 10px}.hvr-bubble-top:active:before,.hvr-bubble-top:focus:before,.hvr-bubble-top:hover:before{transform:translateY(-10px)}.hvr-bubble-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-bubble-right:before{pointer-events:none;position:absolute;z-index:-1;content:\"\";transition-duration:.3s;transition-property:transform;top:calc(50% - 10px);right:0;border-color:transparent transparent transparent #e1e1e1;border-style:solid;border-width:10px 0 10px 10px}.hvr-bubble-right:active:before,.hvr-bubble-right:focus:before,.hvr-bubble-right:hover:before{transform:translateX(10px)}.hvr-bubble-bottom{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-bubble-bottom:before{pointer-events:none;position:absolute;z-index:-1;content:\"\";transition-duration:.3s;transition-property:transform;left:calc(50% - 10px);bottom:0;border-color:#e1e1e1 transparent transparent;border-style:solid;border-width:10px 10px 0}.hvr-bubble-bottom:active:before,.hvr-bubble-bottom:focus:before,.hvr-bubble-bottom:hover:before{transform:translateY(10px)}.hvr-bubble-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-bubble-left:before{pointer-events:none;position:absolute;z-index:-1;content:\"\";transition-duration:.3s;transition-property:transform;top:calc(50% - 10px);left:0;border-color:transparent #e1e1e1 transparent transparent;border-style:solid;border-width:10px 10px 10px 0}.hvr-bubble-left:active:before,.hvr-bubble-left:focus:before,.hvr-bubble-left:hover:before{transform:translateX(-10px)}.hvr-bubble-float-top{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-bubble-float-top,.hvr-bubble-float-top:before{transition-duration:.3s;transition-property:transform}.hvr-bubble-float-top:before{position:absolute;z-index:-1;content:\"\";left:calc(50% - 10px);top:0;border-color:transparent transparent #e1e1e1;border-style:solid;border-width:0 10px 10px}.hvr-bubble-float-top:active,.hvr-bubble-float-top:focus,.hvr-bubble-float-top:hover{transform:translateY(10px)}.hvr-bubble-float-top:active:before,.hvr-bubble-float-top:focus:before,.hvr-bubble-float-top:hover:before{transform:translateY(-10px)}.hvr-bubble-float-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-duration:.3s;transition-property:transform}.hvr-bubble-float-right:before{position:absolute;z-index:-1;top:calc(50% - 10px);right:0;content:\"\";border-color:transparent transparent transparent #e1e1e1;border-style:solid;border-width:10px 0 10px 10px;transition-duration:.3s;transition-property:transform}.hvr-bubble-float-right:active,.hvr-bubble-float-right:focus,.hvr-bubble-float-right:hover{transform:translateX(-10px)}.hvr-bubble-float-right:active:before,.hvr-bubble-float-right:focus:before,.hvr-bubble-float-right:hover:before{transform:translateX(10px)}.hvr-bubble-float-bottom{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-duration:.3s;transition-property:transform}.hvr-bubble-float-bottom:before{position:absolute;z-index:-1;content:\"\";left:calc(50% - 10px);bottom:0;border-color:#e1e1e1 transparent transparent;border-style:solid;border-width:10px 10px 0;transition-duration:.3s;transition-property:transform}.hvr-bubble-float-bottom:active,.hvr-bubble-float-bottom:focus,.hvr-bubble-float-bottom:hover{transform:translateY(-10px)}.hvr-bubble-float-bottom:active:before,.hvr-bubble-float-bottom:focus:before,.hvr-bubble-float-bottom:hover:before{transform:translateY(10px)}.hvr-bubble-float-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-bubble-float-left,.hvr-bubble-float-left:before{transition-duration:.3s;transition-property:transform}.hvr-bubble-float-left:before{position:absolute;z-index:-1;content:\"\";top:calc(50% - 10px);left:0;border-color:transparent #e1e1e1 transparent transparent;border-style:solid;border-width:10px 10px 10px 0}.hvr-bubble-float-left:active,.hvr-bubble-float-left:focus,.hvr-bubble-float-left:hover{transform:translateX(10px)}.hvr-bubble-float-left:active:before,.hvr-bubble-float-left:focus:before,.hvr-bubble-float-left:hover:before{transform:translateX(-10px)}.hvr-icon-back{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.1s}.hvr-icon-back .hvr-icon{transform:translateZ(0);transition-duration:.1s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-back:active .hvr-icon,.hvr-icon-back:focus .hvr-icon,.hvr-icon-back:hover .hvr-icon{transform:translateX(-4px)}.hvr-icon-forward{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.1s}.hvr-icon-forward .hvr-icon{transform:translateZ(0);transition-duration:.1s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-forward:active .hvr-icon,.hvr-icon-forward:focus .hvr-icon,.hvr-icon-forward:hover .hvr-icon{transform:translateX(4px)}@-webkit-keyframes hvr-icon-down{0%,50%,to{transform:translateY(0)}25%,75%{transform:translateY(6px)}}@keyframes hvr-icon-down{0%,50%,to{transform:translateY(0)}25%,75%{transform:translateY(6px)}}.hvr-icon-down{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-down .hvr-icon{transform:translateZ(0)}.hvr-icon-down:active .hvr-icon,.hvr-icon-down:focus .hvr-icon,.hvr-icon-down:hover .hvr-icon{-webkit-animation-name:hvr-icon-down;animation-name:hvr-icon-down;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes hvr-icon-up{0%,50%,to{transform:translateY(0)}25%,75%{transform:translateY(-6px)}}@keyframes hvr-icon-up{0%,50%,to{transform:translateY(0)}25%,75%{transform:translateY(-6px)}}.hvr-icon-up{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-up .hvr-icon{transform:translateZ(0)}.hvr-icon-up:active .hvr-icon,.hvr-icon-up:focus .hvr-icon,.hvr-icon-up:hover .hvr-icon{-webkit-animation-name:hvr-icon-up;animation-name:hvr-icon-up;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.hvr-icon-spin{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-spin .hvr-icon{transition-duration:1s;transition-property:transform;transition-timing-function:ease-in-out}.hvr-icon-spin:active .hvr-icon,.hvr-icon-spin:focus .hvr-icon,.hvr-icon-spin:hover .hvr-icon{transform:rotate(1turn)}@-webkit-keyframes hvr-icon-drop{0%{opacity:0}50%{opacity:0;transform:translateY(-100%)}51%,to{opacity:1}}@keyframes hvr-icon-drop{0%{opacity:0}50%{opacity:0;transform:translateY(-100%)}51%,to{opacity:1}}.hvr-icon-drop{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-drop .hvr-icon{transform:translateZ(0)}.hvr-icon-drop:active .hvr-icon,.hvr-icon-drop:focus .hvr-icon,.hvr-icon-drop:hover .hvr-icon{opacity:0;transition-duration:.3s;-webkit-animation-name:hvr-icon-drop;animation-name:hvr-icon-drop;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.3s;animation-delay:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-timing-function:cubic-bezier(.52,1.64,.37,.66);animation-timing-function:cubic-bezier(.52,1.64,.37,.66)}.hvr-icon-fade{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-fade .hvr-icon{transform:translateZ(0);transition-duration:.5s;transition-property:color}.hvr-icon-fade:active .hvr-icon,.hvr-icon-fade:focus .hvr-icon,.hvr-icon-fade:hover .hvr-icon{color:#0f9e5e}@-webkit-keyframes hvr-icon-float-away{0%{opacity:1}to{opacity:0;transform:translateY(-1em)}}@keyframes hvr-icon-float-away{0%{opacity:1}to{opacity:0;transform:translateY(-1em)}}.hvr-icon-float-away{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-float-away .hvr-icon{transform:translateZ(0);-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.hvr-icon-float-away:active .hvr-icon,.hvr-icon-float-away:focus .hvr-icon,.hvr-icon-float-away:hover .hvr-icon{-webkit-animation-name:hvr-icon-float-away;animation-name:hvr-icon-float-away;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes hvr-icon-sink-away{0%{opacity:1}to{opacity:0;transform:translateY(1em)}}@keyframes hvr-icon-sink-away{0%{opacity:1}to{opacity:0;transform:translateY(1em)}}.hvr-icon-sink-away{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-sink-away .hvr-icon{transform:translateZ(0);-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.hvr-icon-sink-away:active .hvr-icon,.hvr-icon-sink-away:focus .hvr-icon,.hvr-icon-sink-away:hover .hvr-icon{-webkit-animation-name:hvr-icon-sink-away;animation-name:hvr-icon-sink-away;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.hvr-icon-grow{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-grow .hvr-icon{transform:translateZ(0);transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-grow:active .hvr-icon,.hvr-icon-grow:focus .hvr-icon,.hvr-icon-grow:hover .hvr-icon{transform:scale(1.3) translateZ(0)}.hvr-icon-shrink{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-shrink .hvr-icon{transform:translateZ(0);transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-shrink:active .hvr-icon,.hvr-icon-shrink:focus .hvr-icon,.hvr-icon-shrink:hover .hvr-icon{transform:scale(.8)}@-webkit-keyframes hvr-icon-pulse{25%{transform:scale(1.3)}75%{transform:scale(.8)}}@keyframes hvr-icon-pulse{25%{transform:scale(1.3)}75%{transform:scale(.8)}}.hvr-icon-pulse{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-pulse .hvr-icon{transform:translateZ(0);transition-timing-function:ease-out}.hvr-icon-pulse:active .hvr-icon,.hvr-icon-pulse:focus .hvr-icon,.hvr-icon-pulse:hover .hvr-icon{-webkit-animation-name:hvr-icon-pulse;animation-name:hvr-icon-pulse;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes hvr-icon-pulse-grow{to{transform:scale(1.3)}}@keyframes hvr-icon-pulse-grow{to{transform:scale(1.3)}}.hvr-icon-pulse-grow{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-pulse-grow .hvr-icon{transform:translateZ(0);transition-timing-function:ease-out}.hvr-icon-pulse-grow:active .hvr-icon,.hvr-icon-pulse-grow:focus .hvr-icon,.hvr-icon-pulse-grow:hover .hvr-icon{-webkit-animation-name:hvr-icon-pulse-grow;animation-name:hvr-icon-pulse-grow;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}@-webkit-keyframes hvr-icon-pulse-shrink{to{transform:scale(.8)}}@keyframes hvr-icon-pulse-shrink{to{transform:scale(.8)}}.hvr-icon-pulse-shrink{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent}.hvr-icon-pulse-shrink .hvr-icon{transform:translateZ(0);transition-timing-function:ease-out}.hvr-icon-pulse-shrink:active .hvr-icon,.hvr-icon-pulse-shrink:focus .hvr-icon,.hvr-icon-pulse-shrink:hover .hvr-icon{-webkit-animation-name:hvr-icon-pulse-shrink;animation-name:hvr-icon-pulse-shrink;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}@-webkit-keyframes hvr-icon-push{50%{transform:scale(.5)}}@keyframes hvr-icon-push{50%{transform:scale(.5)}}.hvr-icon-push{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-push .hvr-icon{transform:translateZ(0);transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-push:active .hvr-icon,.hvr-icon-push:focus .hvr-icon,.hvr-icon-push:hover .hvr-icon{-webkit-animation-name:hvr-icon-push;animation-name:hvr-icon-push;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-icon-pop{50%{transform:scale(1.5)}}@keyframes hvr-icon-pop{50%{transform:scale(1.5)}}.hvr-icon-pop{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-pop .hvr-icon{transform:translateZ(0);transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-pop:active .hvr-icon,.hvr-icon-pop:focus .hvr-icon,.hvr-icon-pop:hover .hvr-icon{-webkit-animation-name:hvr-icon-pop;animation-name:hvr-icon-pop;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}.hvr-icon-bounce{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-bounce .hvr-icon{transform:translateZ(0);transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-bounce:active .hvr-icon,.hvr-icon-bounce:focus .hvr-icon,.hvr-icon-bounce:hover .hvr-icon{transform:scale(1.5);transition-timing-function:cubic-bezier(.47,2.02,.31,-.36)}.hvr-icon-rotate{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-rotate .hvr-icon{transform:translateZ(0);transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-rotate:active .hvr-icon,.hvr-icon-rotate:focus .hvr-icon,.hvr-icon-rotate:hover .hvr-icon{transform:rotate(20deg)}.hvr-icon-grow-rotate{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-grow-rotate .hvr-icon{transform:translateZ(0);transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-grow-rotate:active .hvr-icon,.hvr-icon-grow-rotate:focus .hvr-icon,.hvr-icon-grow-rotate:hover .hvr-icon{transform:scale(1.5) rotate(12deg)}.hvr-icon-float{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-float .hvr-icon{transform:translateZ(0);transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-float:active .hvr-icon,.hvr-icon-float:focus .hvr-icon,.hvr-icon-float:hover .hvr-icon{transform:translateY(-4px)}.hvr-icon-sink{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-sink .hvr-icon{transform:translateZ(0);transition-duration:.3s;transition-property:transform;transition-timing-function:ease-out}.hvr-icon-sink:active .hvr-icon,.hvr-icon-sink:focus .hvr-icon,.hvr-icon-sink:hover .hvr-icon{transform:translateY(4px)}@-webkit-keyframes hvr-icon-bob{0%{transform:translateY(-6px)}50%{transform:translateY(-2px)}to{transform:translateY(-6px)}}@keyframes hvr-icon-bob{0%{transform:translateY(-6px)}50%{transform:translateY(-2px)}to{transform:translateY(-6px)}}@-webkit-keyframes hvr-icon-bob-float{to{transform:translateY(-6px)}}@keyframes hvr-icon-bob-float{to{transform:translateY(-6px)}}.hvr-icon-bob{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-bob .hvr-icon{transform:translateZ(0)}.hvr-icon-bob:active .hvr-icon,.hvr-icon-bob:focus .hvr-icon,.hvr-icon-bob:hover .hvr-icon{-webkit-animation-name:hvr-icon-bob-float,hvr-icon-bob;animation-name:hvr-icon-bob-float,hvr-icon-bob;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate}@-webkit-keyframes hvr-icon-hang{0%{transform:translateY(6px)}50%{transform:translateY(2px)}to{transform:translateY(6px)}}@keyframes hvr-icon-hang{0%{transform:translateY(6px)}50%{transform:translateY(2px)}to{transform:translateY(6px)}}@-webkit-keyframes hvr-icon-hang-sink{to{transform:translateY(6px)}}@keyframes hvr-icon-hang-sink{to{transform:translateY(6px)}}.hvr-icon-hang{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-hang .hvr-icon{transform:translateZ(0)}.hvr-icon-hang:active .hvr-icon,.hvr-icon-hang:focus .hvr-icon,.hvr-icon-hang:hover .hvr-icon{-webkit-animation-name:hvr-icon-hang-sink,hvr-icon-hang;animation-name:hvr-icon-hang-sink,hvr-icon-hang;-webkit-animation-duration:.3s,1.5s;animation-duration:.3s,1.5s;-webkit-animation-delay:0s,.3s;animation-delay:0s,.3s;-webkit-animation-timing-function:ease-out,ease-in-out;animation-timing-function:ease-out,ease-in-out;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-direction:normal,alternate;animation-direction:normal,alternate}@-webkit-keyframes hvr-icon-wobble-horizontal{16.65%{transform:translateX(6px)}33.3%{transform:translateX(-5px)}49.95%{transform:translateX(4px)}66.6%{transform:translateX(-2px)}83.25%{transform:translateX(1px)}to{transform:translateX(0)}}@keyframes hvr-icon-wobble-horizontal{16.65%{transform:translateX(6px)}33.3%{transform:translateX(-5px)}49.95%{transform:translateX(4px)}66.6%{transform:translateX(-2px)}83.25%{transform:translateX(1px)}to{transform:translateX(0)}}.hvr-icon-wobble-horizontal{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-wobble-horizontal .hvr-icon{transform:translateZ(0)}.hvr-icon-wobble-horizontal:active .hvr-icon,.hvr-icon-wobble-horizontal:focus .hvr-icon,.hvr-icon-wobble-horizontal:hover .hvr-icon{-webkit-animation-name:hvr-icon-wobble-horizontal;animation-name:hvr-icon-wobble-horizontal;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-icon-wobble-vertical{16.65%{transform:translateY(6px)}33.3%{transform:translateY(-5px)}49.95%{transform:translateY(4px)}66.6%{transform:translateY(-2px)}83.25%{transform:translateY(1px)}to{transform:translateY(0)}}@keyframes hvr-icon-wobble-vertical{16.65%{transform:translateY(6px)}33.3%{transform:translateY(-5px)}49.95%{transform:translateY(4px)}66.6%{transform:translateY(-2px)}83.25%{transform:translateY(1px)}to{transform:translateY(0)}}.hvr-icon-wobble-vertical{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-wobble-vertical .hvr-icon{transform:translateZ(0)}.hvr-icon-wobble-vertical:active .hvr-icon,.hvr-icon-wobble-vertical:focus .hvr-icon,.hvr-icon-wobble-vertical:hover .hvr-icon{-webkit-animation-name:hvr-icon-wobble-vertical;animation-name:hvr-icon-wobble-vertical;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hvr-icon-buzz{50%{transform:translateX(3px) rotate(2deg)}to{transform:translateX(-3px) rotate(-2deg)}}@keyframes hvr-icon-buzz{50%{transform:translateX(3px) rotate(2deg)}to{transform:translateX(-3px) rotate(-2deg)}}.hvr-icon-buzz{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-buzz .hvr-icon{transform:translateZ(0)}.hvr-icon-buzz:active .hvr-icon,.hvr-icon-buzz:focus .hvr-icon,.hvr-icon-buzz:hover .hvr-icon{-webkit-animation-name:hvr-icon-buzz;animation-name:hvr-icon-buzz;-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes hvr-icon-buzz-out{10%{transform:translateX(3px) rotate(2deg)}20%{transform:translateX(-3px) rotate(-2deg)}30%{transform:translateX(3px) rotate(2deg)}40%{transform:translateX(-3px) rotate(-2deg)}50%{transform:translateX(2px) rotate(1deg)}60%{transform:translateX(-2px) rotate(-1deg)}70%{transform:translateX(2px) rotate(1deg)}80%{transform:translateX(-2px) rotate(-1deg)}90%{transform:translateX(1px) rotate(0)}to{transform:translateX(-1px) rotate(0)}}@keyframes hvr-icon-buzz-out{10%{transform:translateX(3px) rotate(2deg)}20%{transform:translateX(-3px) rotate(-2deg)}30%{transform:translateX(3px) rotate(2deg)}40%{transform:translateX(-3px) rotate(-2deg)}50%{transform:translateX(2px) rotate(1deg)}60%{transform:translateX(-2px) rotate(-1deg)}70%{transform:translateX(2px) rotate(1deg)}80%{transform:translateX(-2px) rotate(-1deg)}90%{transform:translateX(1px) rotate(0)}to{transform:translateX(-1px) rotate(0)}}.hvr-icon-buzz-out{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;transition-duration:.3s}.hvr-icon-buzz-out .hvr-icon{transform:translateZ(0)}.hvr-icon-buzz-out:active .hvr-icon,.hvr-icon-buzz-out:focus .hvr-icon,.hvr-icon-buzz-out:hover .hvr-icon{-webkit-animation-name:hvr-icon-buzz-out;animation-name:hvr-icon-buzz-out;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}.hvr-curl-top-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-curl-top-left:before{pointer-events:none;position:absolute;content:\"\";height:0;width:0;top:0;left:0;background:#fff;background:linear-gradient(135deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=\"#ffffff\",endColorstr=\"#000000\");z-index:1000;box-shadow:1px 1px 1px rgba(0,0,0,.4);transition-duration:.3s;transition-property:width,height}.hvr-curl-top-left:active:before,.hvr-curl-top-left:focus:before,.hvr-curl-top-left:hover:before{width:25px;height:25px}.hvr-curl-top-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-curl-top-right:before{pointer-events:none;position:absolute;content:\"\";height:0;width:0;top:0;right:0;background:#fff;background:linear-gradient(225deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);box-shadow:-1px 1px 1px rgba(0,0,0,.4);transition-duration:.3s;transition-property:width,height}.hvr-curl-top-right:active:before,.hvr-curl-top-right:focus:before,.hvr-curl-top-right:hover:before{width:25px;height:25px}.hvr-curl-bottom-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-curl-bottom-right:before{pointer-events:none;position:absolute;content:\"\";height:0;width:0;bottom:0;right:0;background:#fff;background:linear-gradient(315deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);box-shadow:-1px -1px 1px rgba(0,0,0,.4);transition-duration:.3s;transition-property:width,height}.hvr-curl-bottom-right:active:before,.hvr-curl-bottom-right:focus:before,.hvr-curl-bottom-right:hover:before{width:25px;height:25px}.hvr-curl-bottom-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative}.hvr-curl-bottom-left:before{pointer-events:none;position:absolute;content:\"\";height:0;width:0;bottom:0;left:0;background:#fff;background:linear-gradient(45deg,#fff 45%,#aaa 50%,#ccc 56%,#fff 80%);box-shadow:1px -1px 1px rgba(0,0,0,.4);transition-duration:.3s;transition-property:width,height}.hvr-curl-bottom-left:active:before,.hvr-curl-bottom-left:focus:before,.hvr-curl-bottom-left:hover:before{width:25px;height:25px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("22308e46", content, true)

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#Buco,#Harm,#Hof,#Impl,a{color:#1e1e1e}li{font-family:Hellix Normal}.procedimentoPage{display:grid;grid-template-columns:1fr 1fr;grid-auto-flow:column}@media(max-width:600px){.procedimentoPage{display:unset}}.procedimento{margin:2.618rem 0}.btn-header{margin:1rem 0}.cardVideo{display:grid;margin:0 2rem 0 0;border-radius:1.618rem;align-content:space-between}@media(max-width:600px){.cardVideo{margin:0}}#video{width:100%;height:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("18904a26", content, true)

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a{color:#fff}.titleCard{font-family:Hellix Bold}.textCard{font-family:Hellix Normal}p{font-family:Hellix}#vs-card{margin:1rem 0}#vs-button,#vs-card,.span{font-family:Hellix Normal}#vs-button{margin:1rem 0;padding:.1rem;background:linear-gradient(90deg,#3b8d9f,#52adc1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("85526bb4", content, true)

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Paciente{display:grid;justify-items:center}.NomePasciente{font-family:Hellix Bold;font-size:1.2rem;margin:.618rem}.Relato{font-size:1rem;margin:0 1.618rem;font-family:Hellix Normal;line-height:1.3rem;color:#a2a2a2;text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n  * Vuesax v4.0.1-alpha.24 🖖 (https://lusaxweb.github.io/vuesax/)\n  * Forged by Luis Daniel Rovira\n  * Released under the MIT License.\n  * Donate: https://www.patreon.com/bePatron?c=1567892\n  * © 2019, Lusaxweb. (https://lusaxweb.net)\n  */.vs-button{--vs-color:\"\";--vs-color-rotate:var(--vs-primary);--vs-color-darken:var(--vs-primary);--vs-button-padding:8px 12px;--vs-button-margin:5px;--vs-button-border-radius:12px;--vs-button-text-color:#fff;border:0;margin:var(--vs-button-margin);border-radius:var(--vs-button-border-radius);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0;outline:none;font-size:.8rem;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}.vs-button--fff:focus{color:#1e1e1e!important}.vs-button__content{padding:var(--vs-button-padding);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--active-disabled{pointer-events:none;opacity:.6}.vs-button:disabled{pointer-events:none;opacity:.35}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content i{font-size:1.15rem}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__content{-webkit-transform:translate(-100%);transform:translate(-100%)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__animate{-webkit-transform:translate(0);transform:translate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__content{-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__animate{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__content{-webkit-transform:scale(1.4)!important;transform:scale(1.4)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__animate{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__content{-webkit-transform:rotate(180deg)!important;transform:rotate(180deg)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__animate{opacity:1;-webkit-transform:rotate(0);transform:rotate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content,.vs-button__animate{-webkit-transition:-webkit-transform .25s ease;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease}.vs-button__animate{position:absolute;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;top:0;left:0;-webkit-transform:translate(100%);transform:translate(100%);pointer-events:none}.vs-button__animate--vertical{-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-button__animate--scale{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}.vs-button__animate--rotate{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);opacity:0}.vs-button--block{width:100%;display:block}.vs-button--upload:after{content:\"\";position:absolute;width:100%;height:100%;background:rgba(17,18,20,.4);background:rgba(var(--vs-color),.4);top:0;left:0;z-index:1200;-webkit-animation:btnupload .7s ease infinite;animation:btnupload .7s ease infinite;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-button .vs-button__loading{width:100%;height:100%;position:absolute;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(17,18,20,.8);background:rgba(var(--vs-color),.8);border-radius:inherit}.vs-button .vs-button__loading:after{border:2px solid hsla(0,0%,100%,0);border-left:2px dotted hsla(0,0%,100%,.6);border-radius:50%;-webkit-animation:btnload .6s linear infinite;animation:btnload .6s linear infinite}.vs-button .vs-button__loading:after,.vs-button .vs-button__loading:before{content:\"\";width:17px;height:17px;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button .vs-button__loading:before{border:2px solid hsla(0,0%,100%,0);border-left-color:#fff;border-radius:50%;-webkit-animation:btnload .6s ease infinite;animation:btnload .6s ease infinite}.vs-button--size-xl{border-radius:20px}.vs-button--size-xl .vs-button__content{padding:15px 20px;font-size:1.1rem}.vs-button--size-large{font-size:1rem;border-radius:15px}.vs-button--size-large .vs-button__content{padding:10px 15px}.vs-button--size-small{font-size:.75rem;border-radius:9px}.vs-button--size-small .vs-button__content{padding:5px 10px}.vs-button--size-mini{font-size:.6rem;border-radius:7px}.vs-button--size-mini .vs-button__content{padding:3px 8px}.vs-button--circle{border-radius:25px}.vs-button--square{border-radius:0}.vs-button--icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--icon .vs-button__content{padding:8px}.vs-button--icon i{font-size:1.15rem}.vs-button--default{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-button--default.vs-button--active,.vs-button--default:hover{-webkit-box-shadow:0 10px 20px -10px #111214;-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);box-shadow:0 10px 20px -10px #111214;box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--flat{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--flat.vs-button--dark{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-button--flat:hover{background:rgba(17,18,20,.25);background:rgba(var(--vs-color),.25)}.vs-button--flat:focus{-webkit-transition:all .25s ease,background .25s ease .25s;transition:all .25s ease,background .25s ease .25s}.vs-button--flat.vs-button--active,.vs-button--flat:focus{color:#fff;background:#111214;background:rgba(var(--vs-color),1)}.vs-button--floating{background:#111214;background:rgba(var(--vs-color),1);color:#fff;-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--floating,.vs-button--floating:hover{-webkit-box-shadow:0 8px 20px -6px #111214;-webkit-box-shadow:0 8px 20px -6px rgba(var(--vs-color),1);box-shadow:0 8px 20px -6px #111214;box-shadow:0 8px 20px -6px rgba(var(--vs-color),1)}.vs-button--floating:hover{-webkit-transform:translateY(-6px);transform:translateY(-6px)}.vs-button--floating.vs-button--active,.vs-button--floating:focus{-webkit-transform:translate(0);transform:translate(0);-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-button--border{background:rgba(17,18,20,0);background:rgba(var(--vs-color),0);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--border:before{content:\"\";border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background:transparent;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--border:hover:before{border:2px solid rgba(17,18,20,.5);border:2px solid rgba(var(--vs-color),.5)}.vs-button--border.vs-button--active,.vs-button--border:focus,.vs-button--gradient{color:#fff;background:#111214;background:rgba(var(--vs-color),1)}.vs-button--gradient{overflow:hidden}.vs-button--gradient.vs-button--primary:before,.vs-button--gradient.vs-button--success:before{-webkit-filter:hue-rotate(40deg);filter:hue-rotate(40deg)}.vs-button--gradient:before{content:\"\";background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:hue-rotate(-40deg);filter:hue-rotate(-40deg);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--gradient:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(17,18,20,.7);-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7);box-shadow:0 10px 20px -10px rgba(17,18,20,.7);box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7)}.vs-button--gradient:hover:before{opacity:0}.vs-button--gradient.vs-button--active{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(0,0,0,.35);box-shadow:0 10px 20px -10px rgba(0,0,0,.35)}.vs-button--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}.vs-button--relief .vs-button__content{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-button--relief.vs-button--icon.vs-button--active{height:auto}.vs-button--relief:before{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:calc(100% - 3px);border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:contrast(2) grayscale(.4);filter:contrast(2) grayscale(.4);border-bottom:3px solid #111214;border-bottom:3px solid rgba(var(--vs-color),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--relief:active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief:active .vs-button__content{padding-bottom:6px}.vs-button--relief:active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--relief.vs-button--active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief.vs-button--active .vs-button__content{padding-bottom:6px}.vs-button--relief.vs-button--active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--transparent{background:transparent;color:#111214;color:rgba(var(--vs-color),1);overflow:hidden}.vs-button--transparent:before{content:\"\";background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);position:absolute;bottom:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:-1;-webkit-transform:scale(.5);transform:scale(.5);opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--transparent:active:not(.vs-button--active):before{-webkit-transform:scale(.9)!important;transform:scale(.9)!important}.vs-button--transparent.vs-button--active:before,.vs-button--transparent:hover:before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-button--shadow{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);overflow:hidden;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-button--shadow:active:not(.vs-button--active){-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-button--shadow.vs-button--active,.vs-button--shadow:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 8px 25px 0 rgba(0,0,0,.05);box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}@keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}.vs-button-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button-group .vs-button{margin:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type){border-radius:0;border:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border:before{border-left:0;width:100%}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border+.vs-button--border:not(:last-of-type):before{border-right:0;width:100%}.vs-button-group .vs-button:last-of-type{border-radius:0 12px 12px 0}.vs-button-group .vs-button:first-of-type{border-radius:12px 0 0 12px}.vs-alert{--vs-color:var(--vs-primary);background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);color:#111214;color:rgba(var(--vs-color),1);width:100%;padding:0 20px;border-radius:0 12px 12px 0;position:relative;font-size:.9rem;z-index:10;-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert b{font-weight:600}.vs-alert a{color:inherit!important;text-decoration:underline}.vs-alert a:hover{opacity:.6}.vs-alert:after{content:\"\";left:0;top:0;width:2px;height:100%;position:absolute}.vs-alert--solid,.vs-alert:after{background:#111214;background:rgba(var(--vs-color),1)}.vs-alert--solid,.vs-alert--solid .vs-alert__icon i{color:#fff}.vs-alert--solid .vs-alert__icon svg{fill:#fff}.vs-alert--solid .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close svg{fill:#fff}.vs-alert--solid:after{background:hsla(0,0%,100%,.4)}.vs-alert--border{background:transparent}.vs-alert--border:before{border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-left:0;width:calc(100% - 2px);content:\"\";position:absolute;height:calc(100% - 2px);top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--shadow{background:transparent;-webkit-box-shadow:0 4px 15px 0 rgba(17,18,20,.12);-webkit-box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12);box-shadow:0 4px 15px 0 rgba(17,18,20,.12);box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12)}.vs-alert--gradient{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px}.vs-alert--gradient .vs-alert__icon i{color:#fff}.vs-alert--gradient .vs-alert__icon svg{fill:#fff}.vs-alert--gradient .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close svg{fill:#fff}.vs-alert--gradient:after{display:none}.vs-alert--gradient:before{background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));-webkit-filter:hue-rotate(-50deg);filter:hue-rotate(-50deg);width:100%;content:\"\";position:absolute;height:100%;top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--flat{background:rgba(0,0,0,.03)}.vs-alert--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px;-webkit-box-shadow:6px 6px 0 0 rgba(17,18,20,.3);-webkit-box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3);box-shadow:6px 6px 0 0 rgba(17,18,20,.3);box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3)}.vs-alert--relief .vs-alert__icon i{color:#fff}.vs-alert--relief .vs-alert__icon svg{fill:#fff}.vs-alert--relief .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);background:rgba(0,0,0,.2);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close svg{fill:#fff}.vs-alert--relief:after{display:none}.vs-alert__title{font-weight:600;font-size:1rem;padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vs-alert__title--clickHidden{cursor:pointer;padding-right:0}.vs-alert__title~.vs-alert__content .vs-alert__content__text{padding-top:0}.vs-alert__content{-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert__content__text{padding:20px 15px}.vs-alert__close{position:absolute;top:9px;right:6px;background:transparent;border:0;color:#111214;color:rgba(var(--vs-color),1);width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.3);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.3);box-shadow:0 0 0 0 rgba(17,18,20,.3);box-shadow:0 0 0 0 rgba(var(--vs-color),.3);border-radius:10px;padding:0}.vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 18px 0 rgba(17,18,20,.3);box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3)}.vs-alert__close svg{fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__footer{position:relative;width:100%;padding:0 15px 10px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-alert__footer,.vs-alert__icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-alert__icon{position:absolute;width:50px;height:100%;left:0;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:2px}.vs-alert__icon i{font-size:1.3rem;color:#111214;color:rgba(var(--vs-color),1)}.vs-alert__icon svg{width:24px;height:24px;fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__icon~.vs-alert__footer{padding-left:35px}.vs-alert__icon~.vs-alert__content{padding-left:20px}.vs-alert__icon~.vs-alert__title{padding-left:35px}.vs-alert__progress{width:100%;position:absolute;bottom:0;left:0;height:2px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-alert__progress__bar{width:30%;left:0;position:relative;height:100%;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination{position:relative;padding:0 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:10px}.vs-alert__pagination span{font-size:.8rem;margin:0 8px;min-width:28px;text-align:center}.vs-alert__pagination button{border:0;background:transparent;color:#111214;color:rgba(var(--vs-color),1);padding:0 7px;font-size:1rem;background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);border-radius:8px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination button:hover{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-icon-close{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-icon-close:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vs-icon-close:after,.vs-icon-close:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:16px;height:2px;border-radius:2px;-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-close:after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vs-icon-close.vs-icon-hover-less:hover:after,.vs-icon-close.vs-icon-hover-less:hover:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-plus{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer}.vs-icon-plus:before{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-plus:after,.vs-icon-plus:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:14px;height:2px;border-radius:2px}.vs-icon-plus:after{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .4s ease;transition:all .4s ease}.vs-icon-plus:hover:not(.less){-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.vs-icon-plus.less:hover{-webkit-transform:scale(.75);transform:scale(.75)}.vs-icon-plus.less:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-check{width:23px;height:23px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-icon-check span{-webkit-transform:rotate(45deg);transform:rotate(45deg);display:block;position:relative;width:8px;height:13px;margin-top:-4px}.vs-icon-check span .line1{background:transparent;content:\"\";position:absolute;height:2px;border-radius:2px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px;z-index:100;width:8px;bottom:0}.vs-icon-check span .line1:after{content:\"\";position:absolute;width:0;height:2px;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px 0 0 5px}.vs-icon-check span .line2{bottom:0;right:0;z-index:100;background:transparent;content:\"\";position:absolute;height:13px;border-radius:5px;-webkit-transition:all .2s ease;transition:all .2s ease;width:2px}.vs-icon-check span .line2:after{content:\"\";position:absolute;width:2px;height:0%;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;bottom:0;border-radius:5px 5px 0 0}.vs-icon-check.active:before{width:8px}.vs-icon-check.active:after{width:4px}.vs-icon-check.indeterminate span{-webkit-transform:rotate(0);transform:rotate(0);height:auto;margin:0;width:auto}.vs-icon-check.indeterminate span:after{position:relative;content:\"\";width:10px;height:2px;background:#fff;display:block}.vs-icon-check.indeterminate span .line1{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);bottom:0;right:-1px;opacity:0;display:none}.vs-icon-check.indeterminate span .line2{right:0!important;bottom:-.14rem!important;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important;-webkit-transition:all .25s ease!important;transition:all .25s ease!important;height:11px!important;display:none}.vs-icon-arrow{pointer-events:none;width:7px;height:7px;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform-origin:center;transform-origin:center}.vs-icon-arrow:after{width:100%;height:1px}.vs-icon-arrow:after,.vs-icon-arrow:before{content:\"\";background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;display:block;top:0}.vs-icon-arrow:before{width:1px;height:100%}.vs-input-parent{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}.vs-input-parent.square .vs-input-content{border-radius:0!important}.vs-input-parent.textWhite .vs-input{color:#fff}.vs-input-parent.transparent .vs-input{background:transparent!important}.vs-input-parent.block,.vs-input-parent.block .vs-input{width:100%}.vs-input-parent--has-label{margin-top:20px!important}.vs-input-parent--state-success .vs-input{background:rgba(70,201,58,.1)!important;background:rgba(var(--vs-success),.1)!important}.vs-input-parent--state-success .vs-input,.vs-input-parent--state-success .vs-input__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input-parent--state-success .vs-input__icon{color:#46c93a;color:rgba(var(--vs-success),1);background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-input-parent--state-danger .vs-input{background:rgba(255,71,87,.1)!important;background:rgba(var(--vs-danger),.1)!important}.vs-input-parent--state-danger .vs-input,.vs-input-parent--state-danger .vs-input__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input-parent--state-danger .vs-input__icon{color:#ff4757;color:rgba(var(--vs-danger),1);background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-input-parent--state-warn .vs-input{background:rgba(255,186,0,.1)!important;background:rgba(var(--vs-warn),.1)!important}.vs-input-parent--state-warn .vs-input,.vs-input-parent--state-warn .vs-input__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input-parent--state-warn .vs-input__icon{color:#ffba00;color:rgba(var(--vs-warn),1);background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-input-parent--state-dark .vs-input{background:rgba(30,30,30,.1)!important;background:rgba(var(--vs-dark),.1)!important}.vs-input-parent--state-dark .vs-input,.vs-input-parent--state-dark .vs-input__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input-parent--state-dark .vs-input__icon{color:#1e1e1e;color:rgba(var(--vs-dark),1);background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-input-parent--state-primary .vs-input{background:rgba(25,91,255,.1)!important;background:rgba(var(--vs-primary),.1)!important}.vs-input-parent--state-primary .vs-input,.vs-input-parent--state-primary .vs-input__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input-parent--state-primary .vs-input__icon{color:#195bff;color:rgba(var(--vs-primary),1);background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-input-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;border-radius:12px}.vs-input-content+.vs-input__message{padding-top:2px}.vs-input-content--has-color .vs-input:focus{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1)}.vs-input-content--has-color .vs-input:focus~.vs-input__icon,.vs-input-content--has-color .vs-input:focus~.vs-input__label,.vs-input-content--has-color .vs-input:focus~.vs-input__label--placeholder{color:#111214;color:rgba(var(--vs-color),1)}.vs-input{border:2px solid transparent;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;padding:7px 13px 7px 10px;width:200px}.vs-input:focus{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);padding-left:15px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after){padding-left:40px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__icon{-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){left:44px}.vs-input:focus~.vs-input__icon{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input:focus~.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input:focus~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){opacity:0;left:20px}.vs-input:focus~.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-77%);transform:translate(-3%,-77%);font-size:.75rem}.vs-input__label{position:absolute;left:13px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4}.vs-input__label--hidden{opacity:0;visibility:hidden}.vs-input__label--hidden.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3px,-80%);transform:translate(-3px,-80%);font-size:.75rem}.vs-input__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-2px,-77%);transform:translate(-2px,-77%);font-size:.75rem}.vs-input--has-icon{padding-left:38px}.vs-input--has-icon~.vs-input__label{left:44px}.vs-input--has-icon--after{padding-left:7px;padding-right:38px}.vs-input--has-icon--after~.vs-input__label{left:13px}.vs-input--has-icon--after.vs-input__label--label,.vs-input--has-icon:focus--has-icon--after~.vs-input__label--placeholder{-webkit-transform:translate(-25px,-80%)!important;transform:translate(-25px,-80%)!important}.vs-input--has-icon:focus--has-icon--after~.vs-input__label{left:44px}.vs-input__icon{position:absolute;right:auto;width:36px;height:36px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:12px 0 10px -10px rgba(0,0,0,.05);box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);pointer-events:none;left:0}.vs-input__icon--after{left:auto;right:0;-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input__icon--click{pointer-events:auto!important;cursor:pointer}.vs-input__icon--click:hover{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input__icon--click:hover.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-input__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input__progress{width:95%;left:2.5%;position:relative;height:2px;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);margin-top:5px;overflow:hidden;border-radius:5px}.vs-input__progress--danger .vs-input__progress__bar{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-input__progress--warn .vs-input__progress__bar{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-input__progress--success .vs-input__progress__bar{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-input__progress__bar{width:32%;height:2px;max-width:100%;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px}.vs-input__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default}.vs-input__loading:after{border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-input__loading:after,.vs-input__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-input__loading:before{border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-input-parent--border .vs-input__icon{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-input-parent--border .vs-input-content{border-radius:0}.vs-input-parent--border .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.vs-input-parent--border .vs-input-content .vs-input__affects__1{border-bottom:2px solid #f0f3f4;border-bottom:2px solid rgba(var(--vs-gray-3),1);width:100%;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-input-parent--border .vs-input-content .vs-input__affects__2{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1);width:0;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-input-parent--border .vs-input-content .vs-input{background:transparent;border-radius:0}.vs-input-parent--border .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__2{width:100%}.vs-input-parent--shadow .vs-input__icon{background:transparent;z-index:100}.vs-input-parent--shadow .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;border-radius:inherit;pointer-events:none;z-index:10}.vs-input-parent--shadow .vs-input-content .vs-input__affects__1{-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,.05);-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 6px 25px -6px rgba(0,0,0,.05);box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));width:100%;height:100%;position:absolute;top:0;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200;border-radius:inherit}.vs-input-parent--shadow .vs-input-content .vs-input{background:transparent;border-radius:0;border:2px solid transparent}.vs-input-parent--shadow .vs-input-content .vs-input:focus{-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__icon{background:#fff!important;background:rgba(var(--vs-background),1)!important;opacity:1;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__1{-webkit-transform:translateY(3px);transform:translateY(3px);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 3px 0 rgba(0,0,0,.05);box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox-content{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-checkbox-con{width:23px;height:23px;border-radius:9px;position:relative;z-index:1}.vs-checkbox-mask{border-radius:32%;width:100%;height:100%;position:absolute;z-index:50;cursor:pointer;pointer-events:none;-webkit-box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:-1;box-sizing:border-box}.vs-checkbox-mask i:not(.vs-icon-check){color:#fff;font-size:1.1em}.vs-checkbox-mask:after,.vs-checkbox-mask i:not(.vs-icon-check){opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox-mask:after{background:#111214;background:rgba(var(--vs-color),1);border-radius:inherit}.vs-checkbox-mask:after,.vs-checkbox-mask:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.vs-checkbox-mask:before{border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;border:2px solid #e6e9ea;border:2px solid rgba(var(--vs-gray-4),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-checkbox-mask .vs-icon-check{opacity:0;z-index:200}.vs-checkbox{position:absolute;width:100%;height:100%;top:0;left:0;margin:0;padding:0;opacity:0;z-index:100;cursor:pointer}.vs-checkbox:disabled{opacity:0;pointer-events:none}.vs-checkbox:active~.vs-checkbox-mask{background:#e6e9ea!important;background:rgba(var(--vs-gray-4),1)!important}.vs-checkbox:hover~.vs-checkbox-mask{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-checkbox:hover~.vs-checkbox-mask:before{border:2px solid rgba(230,233,234,0);border:2px solid rgba(var(--vs-gray-4),0)}.vs-checkbox:checked:hover~.vs-checkbox-mask{-webkit-box-shadow:0 3px 15px 0 rgba(17,18,20,.35);-webkit-box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35);box-shadow:0 3px 15px 0 rgba(17,18,20,.35);box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask{-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.35);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.35);box-shadow:0 0 0 0 rgba(17,18,20,.35);box-shadow:0 0 0 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask i:not(.vs-icon-check){opacity:1;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease .15s;transition:all .25s ease .15s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check{opacity:1}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line1:after{width:100%;-webkit-transition:all .25s ease .1s;transition:all .25s ease .1s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line2:after{-webkit-transition:all .2s ease .3s;transition:all .2s ease .3s;height:100%}.vs-checkbox:checked~.vs-checkbox-mask:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-checkbox:checked~.vs-checkbox-mask:before{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-checkbox-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:7px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem}.vs-checkbox-label,.vs-checkbox-label:before{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-checkbox-label:before{position:absolute;width:0;height:2px;background:rgba(44,62,80,.6);background:rgba(var(--vs-text),.6);content:\"\"}.vs-checkbox--disabled{pointer-events:none}.vs-checkbox--disabled .vs-checkbox-label{opacity:.5}.vs-checkbox--disabled .vs-checkbox-mask{opacity:.6;background:transparent!important}.vs-checkbox--checked .lineThrough{opacity:.4}.vs-checkbox--checked .lineThrough:before{width:calc(100% - 10px)}.vs-checkbox--loading{pointer-events:none}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:before{border-radius:50%;border:2px solid #111214!important;border:2px solid rgba(var(--vs-color),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite;opacity:1!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:after{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox--loading .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading .vs-checkbox-mask:before{border-radius:50%;border:2px solid #e6e9ea!important;border:2px solid rgba(var(--vs-gray-4),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite}@-webkit-keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox--label-before .vs-checkbox-label{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.vs-switch{--vs-color:var(--vs-primary)}@-webkit-keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-switch{color:#fff;padding:5px;border-radius:20px;min-width:48px;height:28px;border:0;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-switch--icon .vs-switch__input:checked~.vs-switch__circle{color:#fff!important}.vs-switch--icon .vs-switch__circle{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-switch--icon .vs-switch__circle i{opacity:1;font-size:1.3rem}.vs-switch--indeterminate .vs-switch__input{pointer-events:none}.vs-switch--indeterminate .vs-switch__circle{left:50%!important;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-switch--square{border-radius:5px}.vs-switch--square .vs-switch__background,.vs-switch--square .vs-switch__circle{border-radius:5px!important}.vs-switch:after{border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s linear .25s infinite;animation:rotateSwitch .6s linear .25s infinite}.vs-switch:after,.vs-switch:before{-webkit-transition:all 0s ease 0s;transition:all 0s ease 0s;opacity:0;visibility:hidden;content:\"\";position:absolute;width:calc(100% - 8px);height:calc(100% - 8px);z-index:200;pointer-events:none}.vs-switch:before{border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s ease .25s infinite;animation:rotateSwitch .6s ease .25s infinite}.vs-switch--loading{width:28px!important;min-width:28px!important;pointer-events:none;border-radius:20px!important}.vs-switch--loading .vs-switch__circle{border-radius:50%!important}.vs-switch--loading .vs-switch__background{opacity:0!important}.vs-switch--loading:after,.vs-switch--loading:before{opacity:1;visibility:visible;-webkit-transition:all .25s ease .3s;transition:all .25s ease .3s}.vs-switch:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-switch:active{-webkit-transform:scale(.9);transform:scale(.9)}.vs-switch__background{width:100%;height:auto;position:absolute;background:#111214;background:rgba(var(--vs-color),1);border-radius:inherit;z-index:2;-webkit-transition:all .25s ease-out;transition:all .25s ease-out;-webkit-transform:scale(1);transform:scale(1);left:-100%;border-radius:50%;padding-bottom:100%}.vs-switch__text{font-size:.7rem;padding:5px 5px 5px 25px;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;color:#2c3e50;color:rgba(var(--vs-text),1);z-index:9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;overflow:hidden;white-space:nowrap}.vs-switch__text.on{-webkit-transform:translate(-100%);transform:translate(-100%);position:absolute;opacity:0}.vs-switch__text i{font-size:1rem;opacity:.7}.vs-switch__circle{width:20px;height:20px;background:#fff;background:rgba(var(--vs-background),1);border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;position:absolute;z-index:10;left:4px;color:#2c3e50;color:rgba(var(--vs-text),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-switch__circle i{font-size:.8rem}.vs-switch__input{position:absolute;width:100%;opacity:0!important;height:100%;border-radius:inherit;z-index:100;top:0;left:0;margin:0;cursor:pointer}.vs-switch__input:active:checked~.vs-switch__circle{left:calc(100% - 30px)}.vs-switch__input:active~.vs-switch__circle{width:25px}.vs-switch__input:checked~.vs-switch__background{opacity:1;-webkit-transform:scale(1);transform:scale(1);width:100%;padding-bottom:100%;left:0;border-radius:50%;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-switch__input:checked~.vs-switch__text{padding-left:5px;padding-right:25px;color:#fff}.vs-switch__input:checked~.vs-switch__text i{opacity:1}.vs-switch__input:checked~.vs-switch__text.on{-webkit-transform:translate(0);transform:translate(0);position:relative;opacity:1}.vs-switch__input:checked~.vs-switch__text.off{-webkit-transform:translate(100%);transform:translate(100%);position:absolute;opacity:0}.vs-switch__input:checked~.vs-switch__circle{left:calc(100% - 24px);-webkit-box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);-webkit-box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);color:#111214;color:rgba(var(--vs-color),1)}.vs-select{--vs-color:var(--vs-primary)}.vs-select__options .vs-checkbox-content{--vs-color:inherit}.vs-select-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-enter{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-enter,.vs-select-enter:after{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-enter:after{opacity:0!important}.vs-select-leave-active,.vs-select-leave-to{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-leave-to{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-leave-to.top{-webkit-transform:translateY(10px)!important;transform:translateY(10px)!important}.vs-select-leave-to:after{opacity:0!important;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-content{width:100%;max-width:200px}.vs-select-content.block.block{max-width:100%}.vs-select{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:38px;width:100%}.vs-select--state-success .vs-select__input{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-success .vs-select__chips{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__chips:hover:after{opacity:0}.vs-select--state-success .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(70,201,58,.5);border:2px solid rgba(var(--vs-success),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-success .vs-select__icon,.vs-select--state-success .vs-select__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__icon{background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-select--state-success .vs-icon-arrow:after,.vs-select--state-success .vs-icon-arrow:before{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-select--state-danger .vs-select__input{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-danger .vs-select__chips{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__chips:hover:after{opacity:0}.vs-select--state-danger .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,71,87,.5);border:2px solid rgba(var(--vs-danger),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-danger .vs-select__icon,.vs-select--state-danger .vs-select__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__icon{background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-select--state-danger .vs-icon-arrow:after,.vs-select--state-danger .vs-icon-arrow:before{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select--state-warn .vs-select__input{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-warn .vs-select__chips{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__chips:hover:after{opacity:0}.vs-select--state-warn .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,186,0,.5);border:2px solid rgba(var(--vs-warn),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-warn .vs-select__icon,.vs-select--state-warn .vs-select__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__icon{background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-select--state-warn .vs-icon-arrow:after,.vs-select--state-warn .vs-icon-arrow:before{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-select--state-dark .vs-select__input{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-dark .vs-select__chips{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__chips:hover:after{opacity:0}.vs-select--state-dark .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(30,30,30,.5);border:2px solid rgba(var(--vs-dark),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-dark .vs-select__icon,.vs-select--state-dark .vs-select__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__icon{background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-select--state-dark .vs-icon-arrow:after,.vs-select--state-dark .vs-icon-arrow:before{background:#1e1e1e;background:rgba(var(--vs-dark),1)}.vs-select--state-primary .vs-select__input{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-primary .vs-select__chips{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__chips:hover:after{opacity:0}.vs-select--state-primary .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(25,91,255,.5);border:2px solid rgba(var(--vs-primary),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-primary .vs-select__icon,.vs-select--state-primary .vs-select__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__icon{background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-select--state-primary .vs-icon-arrow:after,.vs-select--state-primary .vs-icon-arrow:before{background:#195bff;background:rgba(var(--vs-primary),1)}.vs-select.loading{pointer-events:none}.vs-select.loading :not(.vs-select__loading):not(.vs-select__label){opacity:.6}.vs-select.loading .vs-select__label{pointer-events:none!important}.vs-select.top.activeOptions .vs-select__chips,.vs-select.top.activeOptions .vs-select__input{border-radius:0 0 12px 12px!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-select--disabled{opacity:.6;pointer-events:none}.vs-select--disabled label{pointer-events:none}.vs-select .vs-icon-arrow{z-index:600;position:absolute;right:15px;margin-top:-2px;-webkit-transition:all .25s ease;transition:all .25s ease;pointer-events:auto;cursor:pointer}.vs-select.activeOptions .vs-icon-arrow{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-top:-2px!important}.vs-select.activeOptions .vs-select__input{border-radius:12px 12px 0 0;border:2px solid transparent;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select.activeOptions .vs-select__chips,.vs-select.activeOptions .vs-select__input{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s}.vs-select.activeOptions .vs-select__chips{border-radius:12px 12px 0 0}.vs-select.activeOptions .vs-select__chips:after{opacity:0}.vs-select.activeOptions .vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select.activeOptions .vs-select__label{margin-top:-4px}.vs-select__input{opacity:1;background:transparent;border:2px solid transparent;border-radius:12px;cursor:pointer;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);min-height:38px;padding:7px 30px 7px 13px;width:100%}.vs-select__input.multiple{color:transparent;background:transparent;pointer-events:none}.vs-select__input.simple{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-select__input:focus{border-radius:12px 12px 0 0;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__input:focus~.vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__input:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px)}.vs-select__input:hover~.vs-select__label{margin-top:-4px}.vs-select__input:hover~.vs-icon-arrow{margin-top:-6px}.vs-select__chips{width:100%;height:auto;position:absolute;left:0;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);z-index:300;border-radius:12px;display:-webkit-box;display:-ms-flexbox;border:0;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:38px;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;padding:5px 26px 5px 5px}.vs-select__chips:focus{border-radius:12px 12px 0 0}.vs-select__chips:focus,.vs-select__chips:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips:hover~.vs-icon-arrow{margin-top:-6px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__input{width:auto;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:100%;position:relative;min-width:0;border:0 solid transparent;background:transparent;margin:2px 3px;min-width:30px}.vs-select__chips__input::-webkit-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-moz-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input:-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__chip{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;background:#fff;background:rgba(var(--vs-background),1);border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:2px 3px;padding:0 10px 0 6px;font-size:.84rem;border:2px solid #f4f7f8;border:2px solid rgba(var(--vs-gray-2),1);-webkit-box-sizing:border-box;box-sizing:border-box;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select__chips__chip.isCollapse{padding-right:6px!important}.vs-select__chips__chip__close{position:absolute;top:-4px;right:-4px;width:15px;height:15px;background:#e6e9ea;background:rgba(var(--vs-gray-4),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;font-size:.75rem;cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__chip__close:hover{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select__chips__chip__close:hover .vs-icon-close{--vs-color:var(--vs-background)}.vs-select__chips__chip__close:hover .vs-icon-close:after,.vs-select__chips__chip__close:hover .vs-icon-close:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-select__chips__chip__close .vs-icon-close{--vs-color:var(--vs-text);-webkit-transform:scale(.5);transform:scale(.5)}.vs-select__options{--vs-color:var(--vs-primary);position:absolute;z-index:99999;background:#fff;background:rgba(var(--vs-background),1);padding:5px;border-radius:0 0 12px 12px;overflow:hidden;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 20px -5px rgba(0,0,0,.05);box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top{border-radius:12px 12px 0 0;-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top:after{top:auto;bottom:-10px}.vs-select__options:after{content:\"\";position:absolute;top:-10px;width:80%;margin-left:10%;left:0;height:10px;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 20px 0 rgba(0,0,0,.05);box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));z-index:200;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;opacity:1}.vs-select__options__content{max-height:200px;overflow:auto;height:auto;z-index:100;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;scroll-behavior:smooth}.vs-select__options__content__not-data{font-size:.8rem;text-align:center;padding:6px 10px}.vs-select__options__content::-webkit-scrollbar{width:5px;height:5px;display:block;background:transparent}.vs-select__options__content::-webkit-scrollbar-thumb{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);border-radius:5px}.vs-select__label{position:absolute;left:14px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4;z-index:500}.vs-select__label--hidden{opacity:0;visibility:hidden}.vs-select__label--hidden.vs-select__label--placeholder,.vs-select__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default;z-index:600}.vs-select__loading:after{border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-select__loading:after,.vs-select__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-select__loading:before{border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-select__loading~.vs-icon-arrow{opacity:0!important}.vs-select__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-select__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-darken .vs-select__options.isColorDark{--vs-color:0,0,0!important}.vs-darken .vs-select__options.isColorDark .vs-select__option:hover{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2);color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-darken .vs-select__options.isColorDark .activeOption{color:#2c3e50;color:rgba(var(--vs-text),1);background:rgba(17,18,20,.6);background:rgba(var(--vs-color),.6)}.vs-select__option{border:0;width:100%;padding:6px 10px;text-align:left;background:transparent;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:5px;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));margin:2px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;opacity:1;visibility:visible;max-height:40px}.vs-select__option.hiddenOption{opacity:0;visibility:hidden;max-height:0;padding-top:0;padding-bottom:0;border:0;margin:0}.vs-select__option.isMultiple{padding:0 0 0 5px}.vs-select__option.isMultiple .vs-select__option-group{padding-left:0}.vs-select__option.isMultiple.isHover{background:#f4f7f8!important;background:rgba(var(--vs-gray-2),1)!important}.vs-select__option.isMultiple:disabled .vs-checkbox-content{pointer-events:none}.vs-select__option.isMultiple:hover{padding-left:5px!important}.vs-select__option.isMultiple .vs-checkbox-content{width:100%;pointer-events:none}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-con{-webkit-transform:scale(.85);transform:scale(.85)}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-label{width:calc(100% - 23px);text-align:left;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-select__option.isMultiple.activeOption{pointer-events:auto!important}.vs-select__option.isHover{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-select__option.activeOption{background:rgba(17,18,20,.05);background:rgba(var(--vs-color),.05);color:#111214;color:rgba(var(--vs-color),1);pointer-events:none}.vs-select__option:hover:not(:disabled){color:#111214;color:rgba(var(--vs-color),1);padding-left:14px}.vs-select__option-group{padding-left:10px;border-bottom:2px solid #f9fcfd;border-bottom:2px solid rgba(var(--vs-gray-1),1);position:relative;overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__option-group:last-child{border:0}.vs-select__option-group.hiddenOptionGroup{border-bottom:0 solid #f9fcfd;border-bottom:0 solid rgba(var(--vs-gray-1),1)}.vs-select__option-group.hiddenOptionGroup h5{padding:0;max-height:0}.vs-select__option-group h5{max-height:28px;-webkit-transition:all .25s ease;transition:all .25s ease;opacity:.5;margin:0;padding:7px 0;font-size:.7rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.vs-select__option-group h5 *{pointer-events:none}.vs-avatar-content{--vs-color:var(--vs-gray-2);--vs-badge:var(--vs-primary);border-radius:35%;z-index:1;width:44px;height:44px;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar-content.vs-change-color-badge .vs-avatar__badge .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar-content.vs-change-color:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1)}.vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04)}.vs-avatar-content:hover img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-avatar-content--size.history:after{top:-2px!important}.vs-avatar-content--hasIcons{margin-right:20px}.vs-avatar-content--hidden{display:none}.vs-avatar-content--circle{border-radius:50%!important}.vs-avatar-content--circle .vs-avatar__badge{right:-2px;bottom:-2px}.vs-avatar-content--circle .vs-avatar__badge.top-right{top:-2px;bottom:auto}.vs-avatar-content--circle .vs-avatar__badge.top-left{top:-2px;left:-2px;bottom:auto;right:auto}.vs-avatar-content--circle .vs-avatar__badge.bottom-left{left:-2px;right:auto}.vs-avatar-content--square{border-radius:0!important}.vs-avatar-content.history--gradient:after{background-image:linear-gradient(40deg,#f99b4a,#df376b 74%,#c52d91 0)!important}.vs-avatar-content.history .vs-avatar{width:calc(100% - 4px);height:calc(100% - 4px);border:2px solid #fff;border:2px solid rgba(var(--vs-background),1);margin:2px}.vs-avatar-content.history:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background-color:#ffe53b;z-index:-1;background:#111214;background:rgba(var(--vs-color),1)}.vs-avatar-content.vs-component--is-color .vs-avatar{color:#fff;color:rgba(var(--vs-background),1)}.vs-avatar-content.vs-component--is-color .vs-avatar__points .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;width:100%;height:100%;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.05);box-shadow:inset 0 0 0 0 rgba(0,0,0,.05)}.vs-avatar i{font-size:1.4rem}.vs-avatar img{width:100%;height:auto;display:block;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-avatar__loading{position:absolute;width:100%;top:0;left:0;background:rgba(0,0,0,.5);z-index:100;height:100%;border-radius:inherit}.vs-avatar__loading,.vs-avatar__loading__animate{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__loading__animate{height:60%;width:60%;border-radius:50%;position:relative}.vs-avatar__loading__animate:after{border-radius:inherit;border:2px solid transparent;border-bottom-color:#fff;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-avatar__loading__animate:after,.vs-avatar__loading__animate:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-avatar__loading__animate:before{border-radius:inherit;border:2px solid transparent;border-bottom:2px dashed #fff;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-avatar--letter--3{font-size:.9rem}.vs-avatar--letter--4{font-size:.8rem}.vs-avatar--letter--5{font-size:.7rem}.vs-avatar--letter--6{font-size:.6rem}.vs-avatar__badge{position:absolute;width:13px;height:13px;background:rgba(var(--vs-badge),1);border-radius:50%;border:2px solid #fff!important;border:2px solid rgba(var(--vs-background),1)!important;right:-4px;bottom:-4px;font-size:.6rem;font-weight:700;z-index:200;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-avatar__badge.isSlot,.vs-avatar__badge.writing{width:auto;height:auto;border-radius:7px;min-width:18px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;color:rgba(var(--vs-background),1);line-height:.9rem;padding:0 3px;min-height:18px}.vs-avatar__badge.top-right{top:-4px;bottom:auto}.vs-avatar__badge.top-left{top:-4px;left:-4px;bottom:auto;right:auto}.vs-avatar__badge.bottom-left{left:-4px;right:auto}.vs-avatar__points{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__points__point{width:5px;height:5px;background:#2c3e50;background:rgba(var(--vs-text),1);margin:0 2px;border-radius:50%}.vs-avatar__points__point:first-child{-webkit-animation:point 1.2s ease infinite;animation:point 1.2s ease infinite}.vs-avatar__points__point:nth-child(2){-webkit-animation:point 1.2s ease .4s infinite;animation:point 1.2s ease .4s infinite}.vs-avatar__points__point:nth-child(3){-webkit-animation:point 1.2s ease .8s infinite;animation:point 1.2s ease .8s infinite}.vs-avatar__latest{background:rgba(0,0,0,.5);top:0;left:0;width:100%;height:100%;z-index:300;border-radius:inherit;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar__icons,.vs-avatar__latest{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__icons{width:auto;height:auto;min-height:90%;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:-20px;padding:3px 3px 3px 5px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:-1;border-radius:5px 5px 5px 5px;font-size:1rem}.vs-avatar__icons i{cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-avatar__icons i:hover{opacity:.7}@-webkit-keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}@keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}.vs-avatar__group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:18px}.vs-avatar__group.float{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding-left:0}.vs-avatar__group.float .vs-avatar-content{position:relative;z-index:2;border:3px solid vs-color(\"background\");margin:0}.vs-avatar__group:not(.float) .vs-avatar-content{margin-left:-18px;position:relative;z-index:2}.vs-avatar__group:not(.float) .vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.1);box-shadow:inset 0 0 0 0 rgba(0,0,0,.1)}.vs-avatar__group:not(.float) .vs-avatar-content:hover img{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content .vs-avatar__latest{width:calc(100% - 6px);height:calc(100% - 6px);margin:3px}.vs-avatar__group:not(.float) .vs-avatar-content:not(.vs-change-color) .vs-avatar{background:vs-color(\"background\")}.vs-avatar__group:not(.float) .vs-avatar-content img{width:calc(100% - 6px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons){-webkit-transform:translate(-10px);transform:translate(-10px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons) .vs-avatar{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons{margin-right:0}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons:hover{-webkit-transform:translate(-34px)!important;transform:translate(-34px)!important}.vs-radio-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-radio-content.active .vs-radio__effect__icon{opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:scale(1.3);transform:scale(1.3)}.vs-radio-content.active .vs-radio__effect:after{border:7px solid #111214;border:7px solid rgba(var(--vs-color),1);-webkit-box-shadow:0 3px 12px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3);box-shadow:0 3px 12px 0 rgba(17,18,20,.3);box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3)}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect .vs-radio__effect__icon{opacity:.7}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect:after{border:2px solid rgba(44,62,80,.2);border:2px solid rgba(var(--vs-text),.2)}.vs-radio-content.loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-radio-content.loading .vs-radio__effect:after{opacity:.1}.vs-radio-content.loading .vs-radio__effect__loading{position:absolute;width:100%;height:100%;border-radius:inherit}.vs-radio-content.loading .vs-radio__effect__loading:after{border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right-color:rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right-color:rgba(var(--vs-text),.4);-webkit-animation:loadingRadio .6s ease infinite;animation:loadingRadio .6s ease infinite}.vs-radio-content.loading .vs-radio__effect__loading:after,.vs-radio-content.loading .vs-radio__effect__loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4)}.vs-radio-content.loading .vs-radio__effect__loading:before{border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right:2px dashed rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right:2px dashed rgba(var(--vs-text),.4);-webkit-animation:loadingRadio .6s linear infinite;animation:loadingRadio .6s linear infinite}.vs-radio-content label{cursor:pointer}.vs-radio-content.disabled{opacity:.5;pointer-events:none}.vs-radio-content.disabled .vs-radio__effect{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-radio-content.disabled label{pointer-events:none}.vs-radio{width:20px;height:20px;min-width:20px;min-height:20px;margin:0;padding:0;border-radius:50%;position:relative;z-index:10}.vs-radio__label{margin:0 6px}.vs-radio__effect{position:absolute;width:100%;height:100%;border-radius:inherit;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:10}.vs-radio__effect,.vs-radio__effect__icon{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-radio__effect__icon i{font-size:.75rem}.vs-radio__effect:after{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),.4);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4)}.vs-radio input{margin:0;padding:0;width:100%;height:100%;position:relative;z-index:100;opacity:0;cursor:pointer}.vs-radio input:active~.vs-radio__effect:after{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-tooltip{--vs-color:var(--vs-text)}.vs-tooltip-enter-active,.vs-tooltip-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-tooltip-enter,.vs-tooltip-leave-to{opacity:0}.vs-tooltip-enter.top,.vs-tooltip-leave-to.top{-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-tooltip-enter.bottom,.vs-tooltip-leave-to.bottom{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-tooltip-enter.left,.vs-tooltip-leave-to.left{-webkit-transform:translate(5px);transform:translate(5px)}.vs-tooltip-enter.right,.vs-tooltip-leave-to.right{-webkit-transform:translate(-5px);transform:translate(-5px)}.darken .vs-tooltip{--vs-color:var(--vs-gray-3);color:#fff}.darken .vs-tooltip:not(.vs-change-color){color:#fff!important}.vs-tooltip{background:#111214;background:rgba(var(--vs-color),1);color:#fff;color:rgba(var(--vs-background),1);position:absolute;z-index:1000000;text-align:center;padding:5px 10px;border-radius:12px;font-size:.85rem;max-width:350px;min-width:30px;min-height:30px}.vs-tooltip.loading{color:hsla(0,0%,100%,.2);color:rgba(var(--vs-background),.2)}.vs-tooltip.loading *{opacity:.5;pointer-events:none}.vs-tooltip__loading{width:22px;height:22px;position:absolute;display:block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%;opacity:1!important}.vs-tooltip__loading:after{border-radius:inherit;border:2px solid hsla(0,0%,100%,0);border-right-color:#fff;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-background),1);-webkit-animation:loadingTooltip .6s ease infinite;animation:loadingTooltip .6s ease infinite}.vs-tooltip__loading:after,.vs-tooltip__loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-tooltip__loading:before{border-radius:inherit;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #fff;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-background),1);-webkit-animation:loadingTooltip .6s linear infinite;animation:loadingTooltip .6s linear infinite}.vs-tooltip.borderThick{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.borderThick.top{border-bottom:4px solid #111214;border-bottom:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.top:after{bottom:-7px}.vs-tooltip.borderThick.left{border-right:4px solid #111214;border-right:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.left:after{right:-7px}.vs-tooltip.borderThick.right{border-left:4px solid #111214;border-left:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.right:after{left:-7px}.vs-tooltip.borderThick.bottom{border-top:4px solid #111214;border-top:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.bottom:after{top:-7px}.vs-tooltip.borderThick:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.borderThick:after{background:#111214!important;background:rgba(var(--vs-color),1)!important}.vs-tooltip.border{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-tooltip.border:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.border:after{border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);width:12px!important;height:12px!important}.vs-tooltip.circle{border-radius:20px}.vs-tooltip.square{border-radius:0}.vs-tooltip.notArrow:after{display:none}.vs-tooltip.shadow{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.shadow:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.shadow:after{-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.isDark{--vs-color:var(--vs-gray-3);color:#fff}.vs-tooltip.top:after{bottom:-3px;border-radius:0 0 2px 0}.vs-tooltip.bottom:after,.vs-tooltip.top:after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;left:50%;-webkit-transform:translate(-50%) rotate(45deg);transform:translate(-50%) rotate(45deg);z-index:-2}.vs-tooltip.bottom:after{top:-3px;border-radius:2px 0 0 0}.vs-tooltip.left:after{right:-3px;border-radius:0 2px 0 0}.vs-tooltip.left:after,.vs-tooltip.right:after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;top:50%;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);z-index:-2}.vs-tooltip.right:after{left:-3px;border-radius:0 0 0 2px}@-webkit-keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-dialog-content{--vs-color:var(--vs-primary)}.vs-dialog-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-dialog-enter-active .vs-dialog:not(.vs-dialog--fullScreen){-webkit-animation:rebound .4s;animation:rebound .4s}.vs-dialog-leave-active,.vs-dialog-leave-active .vs-dialog{-webkit-transition:all .15s ease;transition:all .15s ease}.vs-dialog-enter,.vs-dialog-leave-to{opacity:0}.vs-dialog-enter .vs-dialog,.vs-dialog-leave-to .vs-dialog{-webkit-transform:scale(.7);transform:scale(.7);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-dialog-enter .vs-dialog--fullScreen,.vs-dialog-leave-to .vs-dialog--fullScreen{-webkit-transform:translateY(8%)!important;transform:translateY(8%)!important}@-webkit-keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}.vs-dialog-content{background:rgba(0,0,0,.2);background:rgba(0,0,0,var(--vs-background-opacity));position:fixed;left:0;top:0;z-index:99000;z-index:var(--vs-zindex-2);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;max-height:100vh;overflow-y:auto;overflow-x:hidden;padding-top:80px;padding-bottom:80px}.vs-dialog-content.fullScreen{padding:0;overflow:hidden}.vs-dialog-content.blur{-webkit-backdrop-filter:saturate(180%) blur(15px);backdrop-filter:saturate(180%) blur(15px)}.vs-dialog{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);position:relative;min-width:400px;border-radius:20px;border-radius:var(--vs-radius);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 30px 0 rgba(0,0,0,.05);box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));max-width:800px;margin:auto}.vs-dialog--notCenter .vs-dialog__header{display:block}.vs-dialog__loading{width:100%;position:absolute;top:0;left:0;height:100%;border-radius:inherit;background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-dialog__loading:after{border-radius:inherit;border:2px solid rgba(17,18,20,0);border-right-color:#111214;border:2px solid rgba(var(--vs-color),0);border-right-color:rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s ease infinite;animation:loadingDialog .6s ease infinite}.vs-dialog__loading:after,.vs-dialog__loading:before{content:\"\";position:absolute;width:30px;height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-dialog__loading:before{border-radius:inherit;border:2px solid rgba(17,18,20,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-color),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s linear infinite;animation:loadingDialog .6s linear infinite}.vs-dialog--scroll .vs-dialog__content{max-height:calc(80vh - 200px);overflow:auto}.vs-dialog--autoWidth{width:auto!important;min-width:auto!important;max-width:auto!important}.vs-dialog--square,.vs-dialog--square .vs-dialog__close{border-radius:0}.vs-dialog--notPadding .vs-dialog__footer{padding:0}.vs-dialog--notPadding .vs-dialog__content{padding:0;margin-bottom:0!important}.vs-dialog--notPadding .vs-dialog__header{padding:0}.vs-dialog--rebound{-webkit-animation:reboundClick .3s!important;animation:reboundClick .3s!important}.vs-dialog--fullScreen{width:calc(100% - 30px)!important;height:calc(100% - 30px)!important;max-width:none!important;max-height:none!important}.vs-dialog__footer{padding:0 16px 10px}.vs-dialog__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px 16px}.vs-dialog__content{padding:10px 16px;width:100%;position:relative;border-radius:inherit}.vs-dialog__content.notFooter{margin-bottom:20px}.vs-dialog__close{--vs-color:var(--vs-text);position:absolute;top:-6px;right:-6px;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:inherit;border-radius:12px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200;border:0}.vs-dialog__close i{width:34px;height:34px;opacity:.7}.vs-dialog__close i:after,.vs-dialog__close i:before{width:14px}.vs-dialog__close:hover{-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 4px 0 rgba(0,0,0,.05);box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}.vs-dialog__close:hover i{opacity:1}@-webkit-keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@media (max-width:600px){.vs-dialog{min-width:calc(100vw - 20px);max-width:calc(100vw - 20px);margin:auto 10px}}.vs-pagination-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination-content.notMargin .vs-pagination__dotted{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0}.vs-pagination-content.notMargin .vs-pagination__arrow{margin:0!important;border-radius:0}.vs-pagination-content.notMargin .vs-pagination__arrow:first-of-type{border-radius:12px 0 0 12px}.vs-pagination-content.notMargin .vs-pagination__arrow:last-of-type{border-radius:0 12px 12px 0}.vs-pagination-content.notMargin .vs-pagination__button{border-radius:0;margin:0!important}.vs-pagination-content.disabled{opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination-content.square .vs-pagination__active,.vs-pagination-content.square .vs-pagination__arrow,.vs-pagination-content.square .vs-pagination__button{border-radius:0}.vs-pagination-content.circle .vs-pagination__active,.vs-pagination-content.circle .vs-pagination__arrow,.vs-pagination-content.circle .vs-pagination__button{border-radius:50%}.vs-pagination-content.buttonsDotted .vs-pagination__arrow{width:15px;height:12px;min-width:15px;padding:0;background:transparent}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i{width:6px;height:6px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:before{width:1px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:after{height:1px}.vs-pagination-content.buttonsDotted .vs-pagination__dotted{width:12px;height:12px;font-size:.9rem;letter-spacing:1px}.vs-pagination-content.buttonsDotted .vs-pagination__button{width:12px;height:12px}.vs-pagination-content.buttonsDotted .vs-pagination__button.active{-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active{width:12px;height:12px;-webkit-box-shadow:0 2px 10px 0 rgba(17,18,20,.4);-webkit-box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);box-shadow:0 2px 10px 0 rgba(17,18,20,.4);box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active.move{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative}.vs-pagination__progress{width:calc(100% - 16px);height:3px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);position:absolute;bottom:-8px;border-radius:10px}.vs-pagination__progress .progress{width:0;background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;max-width:100%}.vs-pagination__slot{min-height:36px;display:block;display:-webkit-box;display:-ms-flexbox;display:flex}.vs-pagination__arrow,.vs-pagination__slot{min-width:36px;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination__arrow{width:auto;height:36px;border-radius:12px;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 2px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease;border:0}.vs-pagination__arrow:disabled{opacity:.4;pointer-events:none}.vs-pagination__arrow:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__arrow i{width:10px;height:10px;position:relative;display:block;margin-left:4px;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__arrow i:before{width:2px}.vs-pagination__arrow i:after{height:2px}.vs-pagination__arrow.next i{margin-left:-4px;-webkit-transform:rotate(135deg) scale(.8);transform:rotate(135deg) scale(.8)}.vs-pagination__active{position:absolute;left:50%;top:0;width:36px;height:36px;background:#111214;background:rgba(var(--vs-color),1);border-radius:12px;z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#fff;-webkit-box-shadow:0 5px 20px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 20px 0 rgba(17,18,20,.3);box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);cursor:default}.vs-pagination__active.move{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-pagination__dotted{width:36px;height:36px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.4rem;letter-spacing:2px;margin:0 2px;cursor:pointer}.vs-pagination__dotted:hover span.dotted{opacity:0;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted:hover .con-arrows{opacity:1;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover span.dotted{opacity:0;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover .con-arrows{opacity:1;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted span.dotted{margin-right:-2px;text-align:center}.vs-pagination__dotted.next .con-arrows{-webkit-transform:rotate(180deg);transform:rotate(180deg);margin-left:-5px}.vs-pagination__dotted .con-arrows{width:10px;height:10px;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:5px;opacity:0;-webkit-transition:all .1s ease;transition:all .1s ease}.vs-pagination__dotted .con-arrows i{width:10px;height:10px;position:relative;display:block;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__dotted .con-arrows i:before{width:2px}.vs-pagination__dotted .con-arrows i:after{height:2px}.vs-pagination__dotted .con-arrows i:last-child{position:absolute;top:0;margin-left:6px}.vs-pagination__button{width:36px;height:36px;border-radius:12px;padding:0;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0 2px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);position:relative;border:0}.vs-pagination__button.loading{border-radius:50%;opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button.loading:after{border-radius:50%;border:2px solid hsla(0,0%,100%,0);border-right-color:#111214;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s ease infinite;animation:loadingPagination .6s ease infinite}.vs-pagination__button.loading:after,.vs-pagination__button.loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-pagination__button.loading:before{border-radius:50%;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s linear infinite;animation:loadingPagination .6s linear infinite}.vs-pagination__button.disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__button:active{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-table-content{--vs-color:var(--vs-primary);width:100%;border-radius:16px}.vs-table{width:100%;font-size:.9rem;margin:0;overflow:auto}.vs-table table{margin:0;border-collapse:collapse;width:100%;min-width:500px;border:0}.vs-table.striped .vs-table__tr:nth-child(2n){background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table_not-found{display:none;padding:20px;text-align:center;width:100%}.vs-table_not-found tr{text-align:center}.vs-table_not-found tr td{padding:20px;border:0}.vs-table__tbody:empty{display:none;background:#000}.vs-table__tbody:empty~.vs-table_not-found{display:table-row-group}.vs-table.isSelectedValue tr{cursor:pointer}.vs-table__footer{padding:8px 10px;border-radius:0 0 14px 14px}.vs-table__footer,.vs-table__header{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__header{width:100%;padding:10px;border-radius:14px 14px 0 0}.vs-table__header~.vs-table .vs-table__th:first-child,.vs-table__header~.vs-table .vs-table__th:last-child{border-radius:0}.vs-table__thead{width:100%}.vs-table__thead .vs-table__th{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__thead .vs-table__th:first-child{border-radius:14px 0 0 0}.vs-table__thead .vs-table__th:last-child{border-radius:0 14px 0 0}.isMultipleSelected .vs-table__tr .vs-table__td{border-radius:0!important}.vs-table__tr{padding:5px;border:0}.vs-table__tr.expand{cursor:pointer}.vs-table__tr.vs-change-color .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr.vs-change-color .vs-table__td:hover{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:first-of-type .vs-table__td:last-child{border-radius:0 0 15px 0}.vs-table__tr:first-of-type .vs-table__td:first-child{border-radius:0 0 0 15px}.vs-table__tr.isExpand:first-of-type .vs-table__td{border-radius:0}.vs-table__tr.isExpand:first-of-type .vs-table__td,.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td{background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:last-child{border-radius:0 15px 0 0}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:first-child{border-radius:15px 0 0 0}.vs-table__tr.isExpand:not(:first-of-type)+.vs-table__tr__expand td{border-radius:0 0 15px 15px!important}.vs-table__tr.selected .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr .vs-table__td{background:rgba(var(--vs-bg),.1);color:rgba(var(--vs-bg),1)}.vs-table__tr.vs-change-color:hover .vs-table__td{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:hover .vs-table__td{background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-table__tr__expand,.vs-table__tr__expand td{-webkit-transition:all .25s ease;transition:all .25s ease;border:0}.vs-table__tr__expand td{padding:0;background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr__expand td .vs-table__expand__td__content{overflow:hidden;display:block;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__tr__expand td .vs-table__expand__td__content__sub{padding:10px 15px;z-index:1;position:relative}.fade-expand-enter-active,.fade-expand-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.fade-expand-enter,.fade-expand-leave-to{opacity:0}.fade-expand-enter td .vs-table__expand__td__content,.fade-expand-leave-to td .vs-table__expand__td__content{height:0!important}.vs-table__th{padding:10px 12px;text-align:left;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem;border:0}.vs-table__th.sort .vs-table__th__content{pointer-events:none}.vs-table__th.sort:hover{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-table__th[data-sort-type=asc] .icon-sort-2{margin-top:-7px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=asc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=desc] .icon-sort-2{margin-top:-7px}.vs-table__th[data-sort-type=desc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important}.vs-table__th__content{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__th__content,.vs-table__th__content__icons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-table__th__content__icons{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:7px;-webkit-transform:scale(.8);transform:scale(.8)}.vs-table__th__content .vs-icon-arrow{position:relative;display:block}.vs-table__th__content .vs-icon-arrow.icon-sort-1{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vs-table__th__content .vs-icon-arrow.icon-sort-2{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.vs-table__td{padding:10px 12px;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem;border:0}.vs-table__td:last-child{border-radius:0 15px 15px 0}.vs-table__td:first-child{border-radius:15px 0 0 15px}.vs-table__td.isCheckbox{width:23px}.vs-table__td.isEdit{text-decoration:underline;cursor:pointer}.vs-navbar-content{--vs-color:var(--vs-background);position:absolute;z-index:9000;top:0;left:0;width:100%;border-radius:0 0 15px 15px;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-navbar-content.paddingScroll:not(.paddingScrollActive){padding-top:20px;padding-bottom:20px}.vs-navbar-content.paddingScroll:not(.paddingScrollActive) .vs-navbar__group__items{margin-bottom:-30px}.vs-navbar-content.vsNavbarSquare{border-radius:0}.vs-navbar-content.textWhite{color:#fff}.vs-navbar-content.textWhite .vs-navbar__item:before,.vs-navbar-content.textWhite .vs-navbar__line{background:#fff}.vs-navbar-content.fixed{position:fixed!important}.vs-navbar-content.shadow,.vs-navbar-content.shadowActive{-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px 0 rgba(0,0,0,.05);box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-navbar-content.hidden{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.vs-navbar{width:100%;position:relative;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:44px}.vs-navbar,.vs-navbar__left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-navbar__right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-navbar__center,.vs-navbar__right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-navbar__line{position:absolute;left:0;bottom:0;width:100px;background:#2c3e50;background:rgba(var(--vs-text),1);height:3px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__line.notTransition{-webkit-transition:none!important;transition:none!important}.vs-navbar__item{padding:10px 15px;margin:0;border:0;background:transparent;font-size:.85rem;opacity:.7;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;font-weight:700;color:inherit}.vs-navbar__item.active,.vs-navbar__item:hover{opacity:1}.vs-navbar__group{position:relative}.vs-navbar__group:hover .vs-navbar__group__item{opacity:1}.vs-navbar__group:hover .vs-navbar__group__items{opacity:1;visibility:visible;-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-navbar__group__item{padding:10px 15px;background:transparent;color:inherit;font-weight:700;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;opacity:.7;border:0}.vs-navbar__group__items{position:absolute;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:-12px;-webkit-transform:translateY(90%);transform:translateY(90%);background:#111214;background:rgba(var(--vs-color),1);border-radius:5px 18px 18px 18px;padding:10px;min-width:160px;opacity:0;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;color:inherit;visibility:hidden}.vs-navbar__group__items:after{content:\"\";left:0;top:-13px;background:transparent;width:100%;height:14px;position:absolute;z-index:-1}.vs-navbar__group__items .vs-navbar__item{text-align:left;width:100%;position:relative;padding:5px 10px}.vs-navbar__group__items .vs-navbar__item:before{content:\"\";left:0;top:0;width:4px;height:4px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;border-radius:50%;top:calc(50% - 2px);opacity:0;-webkit-transform:translate(-10px);transform:translate(-10px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__group__items .vs-navbar__item.active:before{opacity:1;-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content{--vs-color:var(--vs-primary)}@-webkit-keyframes delayOpacity{0%{opacity:0}to{opacity:1}}@keyframes delayOpacity{0%{opacity:0}to{opacity:1}}.vs-sidebar-content{position:fixed;left:0;top:0;width:calc(100% - 50px);max-width:260px;height:100vh;border-radius:0 30px 30px 0;color:#2c3e50;color:rgba(var(--vs-text),1);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 25px 0 rgba(0,0,0,.05);box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:21000;background:#fff;background:rgba(var(--vs-background),1);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-110%);transform:translate(-110%)}.vs-sidebar-content.right{left:auto;right:0;-webkit-transform:translate(110%);transform:translate(110%)}.vs-sidebar-content.right.open{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content.right.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip{opacity:1;left:auto!important;right:60px!important}.vs-sidebar-content.absolute{position:absolute!important;z-index:9001;height:100%}.vs-sidebar-content.relative{position:relative!important;z-index:9001;height:100%}.vs-sidebar-content.textWhite .vs-sidebar__group__content:after{background:hsla(0,0%,100%,.4)}.vs-sidebar-content.textWhite .vs-sidebar__item:after{background:#fff!important}.vs-sidebar-content.textWhite .vs-sidebar__item.active{color:#fff!important}.vs-sidebar-content.notShadow{-webkit-box-shadow:none!important;box-shadow:none!important}.vs-sidebar-content.square{border-radius:0}.vs-sidebar-content.notLineActive .vs-sidebar .vs-sidebar__item:after{display:none}.vs-sidebar-content.open{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content.reduce .vs-sidebar__footer{padding:10px 0}.vs-sidebar-content.reduce .vs-sidebar__header .vs-avatar-content{width:44px!important;height:44px!important}.vs-sidebar-content.reduce .vs-sidebar__logo img{width:80%}.vs-sidebar-content.reduce .vs-sidebar__item{padding-left:16px!important;min-height:47px}.vs-sidebar-content.reduce .vs-sidebar__item:not(.hasIcon) .vs-sidebar__item__text{font-size:.5rem}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon .vs-sidebar__item__text{-webkit-transform:translate(-10px);transform:translate(-10px);margin-left:-50px}.vs-sidebar-content.reduce .vs-sidebar__item__arrow{position:absolute;left:36px;top:10px;-webkit-animation:delayOpacity .6s ease;animation:delayOpacity .6s ease;width:5px;height:5px}.vs-sidebar-content.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip{opacity:1;left:60px}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon{padding:0!important}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon:after{left:-6px}.vs-sidebar-content .vs-sidebar__logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:25px 0;min-height:80px}.vs-sidebar-content .vs-sidebar__logo img{max-width:120px;max-height:35px}.vs-sidebar-content .vs-sidebar{overflow-x:hidden;width:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-sidebar-content .vs-sidebar::-webkit-scrollbar{width:0}.vs-sidebar-content .vs-sidebar__header{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar-content .vs-sidebar__footer,.vs-sidebar-content .vs-sidebar__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:10px}.vs-sidebar-content .vs-sidebar__footer{justify-self:flex-start}.vs-sidebar__item{width:100%;padding:15px 16px 14px;text-align:left;background:transparent;font-size:1rem;font-weight:700;opacity:.7;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;color:#2c3e50;color:rgba(var(--vs-text),1);border:0}.vs-sidebar__item.hasIcon{padding:0}.vs-sidebar__item.hasIcon.active{padding-left:8px}.vs-sidebar__item.hasIcon:hover{padding-left:8px;opacity:1}.vs-sidebar__item:after{content:\"\";position:absolute;left:-4px;top:0;width:10px;height:100%;background:#111214;background:rgba(var(--vs-color),1);border-radius:0 20px 20px 0;-webkit-transform:translate(-6px);transform:translate(-6px);-webkit-transition:all .25s ease;transition:all .25s ease;z-index:60}.vs-sidebar__item.active:not(.hasIcon){padding-left:25px}.vs-sidebar__item.active{opacity:1;color:#111214;color:rgba(var(--vs-color),1)}.vs-sidebar__item.active:after{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar__item__icon{min-width:50px;height:47px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.2rem;z-index:50;background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__item:hover:not(.hasIcon){opacity:1;padding-left:25px}.vs-sidebar__item__text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;z-index:10;font-size:.9rem}.vs-sidebar__item__arrow,.vs-sidebar__item__text{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-sidebar__item__arrow{width:7px;height:7px;position:relative;justify-self:flex-end;margin-left:auto;margin-right:15px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important;z-index:80}.vs-sidebar__item__arrow .vs-icon-arrow:before{width:2px}.vs-sidebar__item__arrow .vs-icon-arrow:after{height:2px}.vs-sidebar__item__text-tooltip{position:fixed;left:50px;opacity:0;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.85rem;white-space:nowrap}.vs-sidebar__group{padding:0;width:100%;min-width:260px;position:relative}.vs-sidebar__group.open .vs-sidebar__group__content:after{-webkit-transform:translate(0);transform:translate(0);opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item{opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item__arrow{-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-sidebar__group__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar__group__content{overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease;position:relative}.vs-sidebar__group__content:after{content:\"\";position:absolute;left:0;top:0;background:rgba(17,18,20,.3);background:rgba(var(--vs-color),.3);width:4px;height:100%;opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-100%);transform:translate(-100%);border-radius:0 10px 10px 0;z-index:60}.vs-sidebar__group__content .vs-sidebar__item{background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__group>.vs-sidebar__group__header .vs-sidebar__item:hover{padding-left:0}.vs-card-content{--vs-color:var(--vs-primary)}.vs-card-content.type-5 .vs-card{-webkit-box-shadow:none;box-shadow:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-card-content.type-5 .vs-card:hover .vs-card__interactions{bottom:50px}.vs-card-content.type-5 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 30px 0 rgba(0,0,0,.05);box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-card-content.type-5 .vs-card:hover .vs-card__img{border-radius:6px 40px 6px 40px}.vs-card-content.type-5 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-card-content.type-5 .vs-card__img{border-radius:6px 20px 6px 20px}.vs-card-content.type-5 .vs-card__interactions{bottom:6px;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:20}.vs-card-content.type-5 .vs-card__text{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:6px 20px 6px 20px;margin-top:-50px;z-index:10;position:relative;width:calc(100% - 30px);padding-top:10px;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translateY(25px);transform:translateY(25px);opacity:0}.vs-card-content.type-4 .vs-card{-webkit-box-shadow:none;box-shadow:none;max-width:300px}.vs-card-content.type-4 .vs-card:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-card-content.type-4 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1);transform:scale(1)}.vs-card-content.type-4 .vs-card:hover .vs-card__text{padding-top:15px;padding-bottom:25px}.vs-card-content.type-4 .vs-card__img{-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-height:600px}.vs-card-content.type-4 .vs-card__img img{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-card-content.type-4 .vs-card__interactions{top:0;bottom:auto}.vs-card-content.type-4 .vs-card__text{background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);position:absolute;bottom:0;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border-radius:0 0 20px 20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-4 .vs-card__text p{opacity:1}.vs-card-content.type-3 .vs-card{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:400px}.vs-card-content.type-3 .vs-card:hover{-webkit-transform:scale(1.04);transform:scale(1.04)}.vs-card-content.type-3 .vs-card__img img{min-width:200px}.vs-card-content.type-3 .vs-card__text{padding-top:15px}.vs-card-content.type-3 .vs-card__title h2,.vs-card-content.type-3 .vs-card__title h3,.vs-card-content.type-3 .vs-card__title h4,.vs-card-content.type-3 .vs-card__title h5,.vs-card-content.type-3 .vs-card__title h6{padding:0}.vs-card-content.type-2 .vs-card{-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.vs-card-content.type-2 .vs-card:hover{-webkit-transform:scale(.95);transform:scale(.95)}.vs-card-content.type-2 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card-content.type-2 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;color:#fff}.vs-card-content.type-2 .vs-card__interactions{right:0;top:0;left:auto;bottom:auto;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.vs-card-content.type-2 .vs-card__title{position:relative;color:inherit;padding:0}.vs-card-content.type-2 .vs-card__title h2,.vs-card-content.type-2 .vs-card__title h3,.vs-card-content.type-2 .vs-card__title h4,.vs-card-content.type-2 .vs-card__title h5,.vs-card-content.type-2 .vs-card__title h6{padding:0 0 5px}.vs-card-content.type-2 .vs-card__text{position:absolute;bottom:0;background:hsla(0,0%,100%,.9);background:rgba(var(--vs-background),.9);padding-top:30px;border-radiu:0 0 20px 20px;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5)));background:linear-gradient(180deg,transparent,rgba(0,0,0,.5));color:transparent;font-size:.9rem;-webkit-transform:translateY(45%);transform:translateY(45%);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-2 .vs-card__text p{opacity:1}.vs-card-content.type-1 .vs-card:hover{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-card-content.type-1 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);width:100%;max-width:350px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer;position:relative}.vs-card__text{font-size:.85rem;padding:0 15px 15px}.vs-card__text p{font-size:inherit;margin:0;opacity:.8}.vs-card__title{padding-top:10px;padding-bottom:5px}.vs-card__title h2,.vs-card__title h3,.vs-card__title h4,.vs-card__title h5,.vs-card__title h6{padding:0;margin:0;font-size:1.1rem}.vs-card__interactions{position:absolute;bottom:0;padding:5px 10px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;left:0}.vs-card__img,.vs-card__interactions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__img{position:relative;max-height:250px;overflow:hidden;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-card__img,.vs-card__img img{border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card__img img{width:100%;display:block}.vs-card__group{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__group-space{min-width:20px;position:relative;height:20px}.vs-card__group .vs-card__group-cards{position:relative;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;overflow-x:auto;scroll-behavior:smooth;padding-top:20px;padding-bottom:20px;border-radius:20px}.vs-card__group .vs-card__group-cards .vs-card-content{min-width:350px;margin-left:20px}.vs-card__group .vs-card__group-prev{z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent;border:0}.vs-card__group .vs-card__group-prev .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vs-card__group .vs-card__group-prev .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-prev .vs-icon-arrow:after{height:2px}.vs-card__group .vs-card__group-next{border:0;z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent}.vs-card__group .vs-card__group-next .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.vs-card__group .vs-card__group-next .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-next .vs-icon-arrow:after{height:2px}.loading-enter-active,.loading-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.loading-enter,.loading-leave-to{opacity:0}.vs-loading{--vs-color:var(--vs-primary);--vs-background:255,255,255;--vs-opacity:.6;position:fixed;top:0;left:0;width:100%;height:100%;z-index:100000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(255,255,255,var(--vs-opacity));background:rgba(var(--vs-background),var(--vs-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;padding:20px;border-radius:inherit}.vs-loading--target{position:absolute}.vs-loading__load{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-loading__load__text{font-size:.75em;margin:7px}.vs-loading__load__percent,.vs-loading__load__text{font-weight:700;color:#111214;color:rgba(var(--vs-color),1)}.vs-loading__load__percent{position:relative;font-size:.65rem;margin-top:1px;z-index:200}.vs-loading__load__animation{width:40px;height:40px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading__progress{width:100%;position:absolute;top:0;left:0;height:4px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading__progress__bar{background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:0 10px 10px 0}.vs-loading--default .vs-loading__load__animation{border-radius:50%}.vs-loading--default .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s ease infinite;animation:rotate .8s ease infinite;top:0}.vs-loading--default .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s linear infinite;animation:rotate .8s linear infinite;opacity:.2}.vs-loading--default .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-loading--waves .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--waves .vs-loading__load__animation__1{-webkit-animation:waves .7s ease infinite;animation:waves .7s ease infinite}.vs-loading--waves .vs-loading__load__animation__1,.vs-loading--waves .vs-loading__load__animation__2{width:0;background:transparent;height:0;position:absolute;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}.vs-loading--waves .vs-loading__load__animation__2{-webkit-animation:waves 1.4s linear infinite;animation:waves 1.4s linear infinite}.vs-loading--waves .vs-loading__load__animation__3{width:0;background:transparent;height:0;position:absolute;-webkit-animation:waves 1.75s ease infinite;animation:waves 1.75s ease infinite;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}@-webkit-keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}@keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}.vs-loading--corners .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--corners .vs-loading__load__animation__1{width:100%;background:transparent;height:100%;position:absolute;-webkit-animation:corners 1s ease infinite;animation:corners 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-loading--corners .vs-loading__load__animation__2,.vs-loading--corners .vs-loading__load__animation__3{display:none}@-webkit-keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}@keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}.vs-loading--border .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.vs-loading--border .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0}.vs-loading--border .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear .2s infinite;animation:rotate 1s linear .2s infinite}.vs-loading--border .vs-loading__load__animation__3{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;-webkit-animation:rotate 1s linear .4s infinite;animation:rotate 1s linear .4s infinite;opacity:.2}.vs-loading--points .vs-loading__load__percent{position:absolute;top:-10px}.vs-loading--points .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto}.vs-loading--points .vs-loading__load__animation__1{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease infinite;animation:points .75s ease infinite}.vs-loading--points .vs-loading__load__animation__2{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .25s infinite;animation:points .75s ease .25s infinite}.vs-loading--points .vs-loading__load__animation__3{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .5s infinite;animation:points .75s ease .5s infinite}@-webkit-keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}.vs-loading--square .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--square .vs-loading__load__animation__1{-webkit-animation:rotateSquare 4s ease infinite;animation:rotateSquare 4s ease infinite}.vs-loading--square .vs-loading__load__animation__1,.vs-loading--square .vs-loading__load__animation__2{position:absolute;width:100%;height:100%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-radius:inherit;top:0}.vs-loading--square .vs-loading__load__animation__2{animation:rotateSquare 4s ease infinite reverse;background:#fff;background:rgba(var(--vs-background),1)}.vs-loading--square .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.vs-loading--gradient .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--gradient .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:0;border-radius:inherit;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0;background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,hsla(0,0%,100%,0)),to(#111214));background:linear-gradient(0deg,hsla(0,0%,100%,0) 33%,#111214);background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,rgba(var(--vs-background),0)),to(rgba(var(--vs-color),1)));background:linear-gradient(0deg,rgba(var(--vs-background),0) 33%,rgba(var(--vs-color),1));border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__2{top:2px;position:absolute;width:calc(100% - 4px);height:calc(100% - 4px);border:0;border-radius:inherit;background:#fff;background:rgba(var(--vs-background),1);border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__3{display:none}.vs-loading--rectangle .vs-loading__load__percent{position:absolute;bottom:-2px}.vs-loading--rectangle .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--rectangle .vs-loading__load__animation__1{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease infinite;animation:rectangle 1s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--rectangle .vs-loading__load__animation__2{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease-out infinite;animation:rectangle 1s ease-out infinite;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading--rectangle .vs-loading__load__animation__3{display:none}@-webkit-keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}@keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}.vs-loading--circles .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--circles .vs-loading__load__animation__1{position:absolute;width:40px;height:40px;-webkit-animation:rotate 1s ease infinite;animation:rotate 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__2{position:absolute;width:50px;height:50px;-webkit-animation:rotate 1s ease-in-out infinite;animation:rotate 1s ease-in-out infinite;border-radius:50%;border:2px dashed #111214;border:2px dashed rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__3{position:absolute;width:60px;height:60px;animation:rotate 1s linear infinite reverse;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--square-rotate .vs-loading__load__percent{position:absolute;bottom:30px}.vs-loading--square-rotate .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--square-rotate .vs-loading__load__animation__1{position:absolute;width:25px;height:25px;-webkit-animation:squareRotate 3s ease infinite;animation:squareRotate 3s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--square-rotate .vs-loading__load__animation__2,.vs-loading--square-rotate .vs-loading__load__animation__3{display:none}@-webkit-keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}.vs-loading--scale .vs-loading__load__percent{position:absolute;bottom:40px}.vs-loading--scale .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px;height:40px}.vs-loading--scale .vs-loading__load__animation__1{-webkit-animation:scale .8s ease infinite;animation:scale .8s ease infinite}.vs-loading--scale .vs-loading__load__animation__1,.vs-loading--scale .vs-loading__load__animation__2{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;border-radius:5px}.vs-loading--scale .vs-loading__load__animation__2{-webkit-animation:scale .8s ease .2s infinite;animation:scale .8s ease .2s infinite}.vs-loading--scale .vs-loading__load__animation__3{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;-webkit-animation:scale .8s ease .4s infinite;animation:scale .8s ease .4s infinite;border-radius:5px}@-webkit-keyframes scale{50%{height:25px}0%{height:5px}}@keyframes scale{50%{height:25px}0%{height:5px}}.notification-enter-active{-webkit-transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s}.notification-leave-to{max-height:0!important;padding-top:0!important;padding-bottom:0!important;margin-top:0!important;margin-bottom:0!important;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;opacity:0!important}.notification-enter,.notification-leave-to{-webkit-clip-path:circle(0 at 80% 35%)!important;clip-path:circle(0 at 80% 35%)!important}.notification-enter{-webkit-transform:translate(25%);transform:translate(25%)}.notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(10%);transform:translate(10%)}.vs-notification-parent{position:fixed;right:0;bottom:0;z-index:200000;-webkit-transition:all 25s ease;transition:all 25s ease;padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-center,.vs-notification-parent--top-right{bottom:auto;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.vs-notification-parent--top-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--top-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--top-center .vs-notification--sticky:last-child{border-radius:0 0 20px 20px;margin-top:-10px}.vs-notification-parent--top-center .vs-notification{-webkit-clip-path:circle(120% at 50% 0);clip-path:circle(120% at 50% 0);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--top-center .vs-notification.vs-notification--border{border:3px solid transparent;border-top:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-center .notification-enter{-webkit-transform:translateY(-25%);transform:translateY(-25%);-webkit-clip-path:circle(0 at 50% 0)!important;clip-path:circle(0 at 50% 0)!important}.vs-notification-parent--top-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}.vs-notification-parent--bottom-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--bottom-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--bottom-center .vs-notification--sticky:last-child{border-radius:20px 20px 0 0;margin-bottom:-10px}.vs-notification-parent--bottom-center .vs-notification{-webkit-clip-path:circle(120% at 50% 100%);clip-path:circle(120% at 50% 100%);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--bottom-center .vs-notification.vs-notification--border{border:3px solid transparent;border-bottom:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-center .notification-enter{-webkit-transform:translateY(25%);transform:translateY(25%);-webkit-clip-path:circle(0 at 50% 100%)!important;clip-path:circle(0 at 50% 100%)!important}.vs-notification-parent--bottom-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(10%);transform:translateY(10%)}.vs-notification-parent--top-left{bottom:auto;top:0;left:0;right:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--top-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--top-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--top-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification-parent--bottom-left{left:0;right:auto}.vs-notification-parent--bottom-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--bottom-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--bottom-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--bottom-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification{--vs-color:var(--vs-background);--vs-border:var(--vs-background);--vs-opacity:.6;position:relative;max-width:340px;width:100%;height:auto;border-radius:20px;-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 30px -5px rgba(0,0,0,.05);box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));overflow:hidden;-webkit-clip-path:circle(145% at 100% 50%);clip-path:circle(145% at 100% 50%);background:#111214;background:rgba(var(--vs-color),1);color:#2c3e50;color:rgba(var(--vs-text),1);margin:3px 10px;-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s}.vs-notification:hover:not(.vs-notification--flat){-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-notification--notPadding{padding:0!important}.vs-notification.vs-notification--icon{padding-left:50px!important}.vs-notification.vs-notification--loading{width:100px!important;max-height:100px!important;min-height:100px!important;padding:0!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification--width-auto{width:auto;max-width:none}.vs-notification--width-all{max-width:calc(100vw - 50px);width:calc(100vw - 50px)}.vs-notification--square{border-radius:0!important}.vs-notification--sticky{margin-right:0;margin-bottom:0;border-radius:20px 0 0 20px}.vs-notification--flat{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));background:#fff;background:rgba(var(--vs-background),1);color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat:hover:after{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-notification--flat .vs-notification__progress{background:#111214;background:rgba(var(--vs-color),1)}.vs-notification--flat .vs-notification__close{--vs-color:inherit}.vs-notification--flat .vs-notification__content{color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat.vs-notification--border{border:0 solid transparent!important;border-right:3px solid rgba(var(--vs-border),1)!important}.vs-notification--flat:after{content:\"\";background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);width:100%;height:100%;border-radius:inherit;position:absolute;top:0;left:0;z-index:-1;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification.vs-notification--onClick{cursor:pointer}.vs-notification.vs-notification--color:not(.vs-notification--flat){color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__progress{background:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__close{--vs-color:255,255,255}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:after{border:2px solid transparent;border-bottom-color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:before{border:2px solid transparent;border-bottom:2px dashed #fff}.vs-notification.vs-notification--border{border:3px solid transparent;border-right:3px solid rgba(var(--vs-border),1)}.vs-notification__progress{width:0;height:3px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;bottom:0;left:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification__loading{width:50px;height:50px;border-radius:50%;position:absolute}.vs-notification__loading:after{border:2px solid #2c3e50;border:2px solid rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s ease infinite;animation:loadingNoti .8s ease infinite}.vs-notification__loading:after,.vs-notification__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-notification__loading:before{border:2px dashed #2c3e50;border:2px dashed rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s linear infinite;animation:loadingNoti .8s linear infinite;opacity:.2}.vs-notification__close{--vs-color:var(--vs-text);position:absolute;border:0;background:transparent;top:2px;right:2px;-webkit-transform:scale(.75);transform:scale(.75);padding:0}.vs-notification__icon{position:absolute;top:calc(50% - 22px);background:transparent;width:45px;height:45px;left:2px;border-radius:0 35% 35% 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification__icon i{font-size:1.2rem}.vs-notification__content{position:relative;width:auto;height:auto;-webkit-transition:all .25s ease .2s;transition:all .25s ease .2s;opacity:1}.vs-notification__content__text{width:100%}.vs-notification__content__text p{margin:0;padding:0;font-size:.75rem;line-height:1rem}.vs-notification__content__header{width:100%;margin:0;padding:0 0 6px}.vs-notification__content__header h4{width:100%;margin:0;padding:0;font-size:.9rem}.darken .vs-notification--dark{color:#fff!important}.darken .vs-notification--dark .vs-notification__close{--vs-color:255,255,255!important}.darken .vs-notification--dark h4,.darken .vs-notification--dark p{color:#fff!important}@-webkit-keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes progressNoti{0%{width:0}to{width:100%}}@keyframes progressNoti{0%{width:0}to{width:100%}}@media (max-width:600px){.vs-notification{margin:3px 0!important;border-radius:0!important;width:100%!important;max-width:100%!important;min-width:100%!important}.vs-notification:hover{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-notification:last-child{margin-bottom:0!important}.vs-notification-parent{padding:0;width:100%!important;max-width:100%!important}.vs-notification-parent .vs-notification--sticky{margin-bottom:0!important}.vs-notification-parent.vs-notification-parent--top-center .vs-notification:last-child{margin-bottom:3px;margin-top:0!important}}.vs-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.vs-col,.vs-row{width:100%;position:relative}.vs-col--w-1{width:8.33%}.vs-col--w-2{width:16.66%}.vs-col--w-3{width:25%}.vs-col--w-4{width:33.33%}.vs-col--w-5{width:41.66%}.vs-col--w-6{width:50%}.vs-col--w-7{width:58.33%}.vs-col--w-8{width:66.66%}.vs-col--w-9{width:75%}.vs-col--w-10{width:83.33%}.vs-col--w-11{width:91.66%}.vs-col--w-12{width:100%}.vs-col--offset-1{margin-left:8.33%}.vs-col--offset-2{margin-left:16.66%}.vs-col--offset-3{margin-left:25%}.vs-col--offset-4{margin-left:33.33%}.vs-col--offset-5{margin-left:41.66%}.vs-col--offset-6{margin-left:50%}.vs-col--offset-7{margin-left:58.33%}.vs-col--offset-8{margin-left:66.66%}.vs-col--offset-9{margin-left:75%}.vs-col--offset-10{margin-left:83.33%}.vs-col--offset-11{margin-left:91.66%}.vs-col--offset-12{margin-left:100%}.vs-col--lg-1{width:8.33%}.vs-col--lg-2{width:16.66%}.vs-col--lg-3{width:25%}.vs-col--lg-4{width:33.33%}.vs-col--lg-5{width:41.66%}.vs-col--lg-6{width:50%}.vs-col--lg-7{width:58.33%}.vs-col--lg-8{width:66.66%}.vs-col--lg-9{width:75%}.vs-col--lg-10{width:83.33%}.vs-col--lg-11{width:91.66%}.vs-col--lg-12{width:100%}@media (max-width:900px){.vs-col--sm-1{width:8.33%}.vs-col--sm-2{width:16.66%}.vs-col--sm-3{width:25%}.vs-col--sm-4{width:33.33%}.vs-col--sm-5{width:41.66%}.vs-col--sm-6{width:50%}.vs-col--sm-7{width:58.33%}.vs-col--sm-8{width:66.66%}.vs-col--sm-9{width:75%}.vs-col--sm-10{width:83.33%}.vs-col--sm-11{width:91.66%}.vs-col--sm-12{width:100%}}@media (max-width:600px){.vs-col--xs-1{width:8.33%}.vs-col--xs-2{width:16.66%}.vs-col--xs-3{width:25%}.vs-col--xs-4{width:33.33%}.vs-col--xs-5{width:41.66%}.vs-col--xs-6{width:50%}.vs-col--xs-7{width:58.33%}.vs-col--xs-8{width:66.66%}.vs-col--xs-9{width:75%}.vs-col--xs-10{width:83.33%}.vs-col--xs-11{width:91.66%}.vs-col--xs-12{width:100%}}:root{--vs-primary:25,91,255;--vs-warn:255,186,0;--vs-danger:255,71,87;--vs-success:70,201,58;--vs-dark:30,30,30;--vs-light:244,247,248;--vs-color:17,18,20;--vs-facebook:59,89,153;--vs-twitter:29,161,242;--vs-youtube:255,0,0;--vs-pinterest:189,8,28;--vs-linkedin:0,119,181;--vs-snapchat:255,252,0;--vs-whatsapp:37,211,102;--vs-tumblr:54,70,93;--vs-reddit:255,69,0;--vs-spotify:30,215,96;--vs-amazon:255,153,0;--vs-medium:2,184,117;--vs-vimeo:26,183,234;--vs-skype:0,175,240;--vs-dribbble:234,76,137;--vs-slack:74,21,75;--vs-yahoo:67,2,151;--vs-twitch:100,65,164;--vs-discord:114,137,218;--vs-telegram:0,136,204;--vs-google-plus:219,68,55;--vs-messenger:0,132,255;--vs-background:255,255,255;--vs-text:44,62,80;--vs-gray-1:249,252,253;--vs-gray-2:244,247,248;--vs-gray-3:240,243,244;--vs-gray-4:230,233,234}[class*=\"--default\"],[class*=\"--primary\"]{--vs-color:var(--vs-primary)}[class*=\"--danger\"]{--vs-color:var(--vs-danger)}[class*=\"--success\"]{--vs-color:var(--vs-success)}[class*=\"--dark\"]{--vs-color:var(--vs-dark)}[class*=\"--warn\"]{--vs-color:var(--vs-warn)}:root{--vs-shadow-opacity:.05;--vs-radius:20px;--vs-zindex-1:100000;--vs-zindex-2:99000;--vs-zindex-3:98000;--vs-zindex-4:97000;--vs-background-opacity:.2}[vs-theme=dark]{--vs-background:30,32,35;--vs-text:255,255,255;--vs-gray-1:24,25,28;--vs-gray-2:20,20,23;--vs-gray-3:15,16,19;--vs-gray-4:10,11,14;--vs-shadow-opacity:.3;--vs-dark:0,0,0;--vs-background-opacity:.6}[vs-theme=dark] .vs-pagination-content.vs-component-dark .vs-pagination__active{--vs-color:255,255,255;color:#f0f3f4;color:rgba(var(--vs-gray-3),1)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent:hover:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),var(--vs-background-opacity))}[vs-theme=dark] .vs-ripple,[vs-theme=dark] .vs-ripple-content,[vs-theme=dark] .vs-ripple-invert{--vs-color:0,0,0}[vs-theme=dark] .vs-loading{--vs-background:0,0,0}[vs-theme=dark] .vs-input-parent--state-dark{--vs-dark:255,255,255!important}[vs-theme=dark] .vs-input-parent--state-dark .vs-input{background:#000!important}[vs-theme=dark] .vs-component-dark{--vs-color:0,0,0!important}[vs-theme=dark] .vs-component-dark .vs-avatar{color:#fff!important}[vs-theme=dark] .vs-component-dark.vs-alert{--vs-color:0,0,0!important;background:#111214!important;background:rgba(var(--vs-color),1)!important;color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}button{cursor:pointer;outline:none}[disabled]{opacity:.6}input{outline:none}a,button,input,select,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}[class*=vs-]{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;list-style:none}.vs-ripple-content{--vs-color:inherit;width:100px;height:100px;position:absolute;width:100%;pointer-events:none;overflow:hidden;height:100%;top:0;right:0;border-radius:inherit;z-index:-1}.vs-ripple-content .vs-ripple{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background:radial-gradient(circle,rgba(17,18,20,.05),rgba(17,18,20,.6));background:radial-gradient(circle,rgba(var(--vs-color),.05),rgba(var(--vs-color),.6))}.vs-ripple-content .vs-ripple--solid{background:#111214;background:rgba(var(--vs-color),1);opacity:1}.vs-ripple-content .vs-ripple-invert{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background-image:radial-gradient(circle,rgba(17,18,20,.5),rgba(17,18,20,0));background-image:radial-gradient(circle,rgba(var(--vs-color),.5),rgba(var(--vs-color),0))}.vs-ripple-content .vs-ripple-cut-1{-webkit-transform:translate(-100%,-50%) skew(20deg);transform:translate(-100%,-50%) skew(20deg);background-image:-webkit-gradient(linear,right top,left top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(270deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-ripple-content .vs-ripple-cut-1,.vs-ripple-content .vs-ripple-cut-2{width:0;height:0;opacity:0;position:absolute;-webkit-transition:all .6s ease;transition:all .6s ease}.vs-ripple-content .vs-ripple-cut-2{-webkit-transform:translateY(-50%) skew(20deg);transform:translateY(-50%) skew(20deg);background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-remove-transition *,.vs-remove-transition :after,.vs-remove-transition :before{-webkit-transition:all 0s!important;transition:all 0s!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("42029a27", content, true)

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n  * Vuesax v4.0.1-alpha.24 🖖 (https://lusaxweb.github.io/vuesax/)\n  * Forged by Luis Daniel Rovira\n  * Released under the MIT License.\n  * Donate: https://www.patreon.com/bePatron?c=1567892\n  * © 2019, Lusaxweb. (https://lusaxweb.net)\n  */.vs-button{--vs-color:\"\";--vs-color-rotate:var(--vs-primary);--vs-color-darken:var(--vs-primary);--vs-button-padding:8px 12px;--vs-button-margin:5px;--vs-button-border-radius:12px;--vs-button-text-color:#fff;border:0;margin:var(--vs-button-margin);border-radius:var(--vs-button-border-radius);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0;outline:none;font-size:.8rem;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}.vs-button--fff:focus{color:#1e1e1e!important}.vs-button__content{padding:var(--vs-button-padding);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--active-disabled{pointer-events:none;opacity:.6}.vs-button:disabled{pointer-events:none;opacity:.35}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content i{font-size:1.15rem}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__content{-webkit-transform:translate(-100%);transform:translate(-100%)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__animate{-webkit-transform:translate(0);transform:translate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__content{-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__animate{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__content{-webkit-transform:scale(1.4)!important;transform:scale(1.4)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__animate{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__content{-webkit-transform:rotate(180deg)!important;transform:rotate(180deg)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__animate{opacity:1;-webkit-transform:rotate(0);transform:rotate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content,.vs-button__animate{-webkit-transition:-webkit-transform .25s ease;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease}.vs-button__animate{position:absolute;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;top:0;left:0;-webkit-transform:translate(100%);transform:translate(100%);pointer-events:none}.vs-button__animate--vertical{-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-button__animate--scale{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}.vs-button__animate--rotate{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);opacity:0}.vs-button--block{width:100%;display:block}.vs-button--upload:after{content:\"\";position:absolute;width:100%;height:100%;background:rgba(17,18,20,.4);background:rgba(var(--vs-color),.4);top:0;left:0;z-index:1200;-webkit-animation:btnupload .7s ease infinite;animation:btnupload .7s ease infinite;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-button .vs-button__loading{width:100%;height:100%;position:absolute;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(17,18,20,.8);background:rgba(var(--vs-color),.8);border-radius:inherit}.vs-button .vs-button__loading:after{border:2px solid hsla(0,0%,100%,0);border-left:2px dotted hsla(0,0%,100%,.6);border-radius:50%;-webkit-animation:btnload .6s linear infinite;animation:btnload .6s linear infinite}.vs-button .vs-button__loading:after,.vs-button .vs-button__loading:before{content:\"\";width:17px;height:17px;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button .vs-button__loading:before{border:2px solid hsla(0,0%,100%,0);border-left-color:#fff;border-radius:50%;-webkit-animation:btnload .6s ease infinite;animation:btnload .6s ease infinite}.vs-button--size-xl{border-radius:20px}.vs-button--size-xl .vs-button__content{padding:15px 20px;font-size:1.1rem}.vs-button--size-large{font-size:1rem;border-radius:15px}.vs-button--size-large .vs-button__content{padding:10px 15px}.vs-button--size-small{font-size:.75rem;border-radius:9px}.vs-button--size-small .vs-button__content{padding:5px 10px}.vs-button--size-mini{font-size:.6rem;border-radius:7px}.vs-button--size-mini .vs-button__content{padding:3px 8px}.vs-button--circle{border-radius:25px}.vs-button--square{border-radius:0}.vs-button--icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--icon .vs-button__content{padding:8px}.vs-button--icon i{font-size:1.15rem}.vs-button--default{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-button--default.vs-button--active,.vs-button--default:hover{-webkit-box-shadow:0 10px 20px -10px #111214;-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);box-shadow:0 10px 20px -10px #111214;box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--flat{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--flat.vs-button--dark{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-button--flat:hover{background:rgba(17,18,20,.25);background:rgba(var(--vs-color),.25)}.vs-button--flat:focus{-webkit-transition:all .25s ease,background .25s ease .25s;transition:all .25s ease,background .25s ease .25s}.vs-button--flat.vs-button--active,.vs-button--flat:focus,.vs-button--floating{color:#fff;background:#111214;background:rgba(var(--vs-color),1)}.vs-button--floating{-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--floating,.vs-button--floating:hover{-webkit-box-shadow:0 8px 20px -6px #111214;-webkit-box-shadow:0 8px 20px -6px rgba(var(--vs-color),1);box-shadow:0 8px 20px -6px #111214;box-shadow:0 8px 20px -6px rgba(var(--vs-color),1)}.vs-button--floating:hover{-webkit-transform:translateY(-6px);transform:translateY(-6px)}.vs-button--floating.vs-button--active,.vs-button--floating:focus{-webkit-transform:translate(0);transform:translate(0);-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-button--border{background:rgba(17,18,20,0);background:rgba(var(--vs-color),0);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--border:before{content:\"\";border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background:transparent;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--border:hover:before{border:2px solid rgba(17,18,20,.5);border:2px solid rgba(var(--vs-color),.5)}.vs-button--border.vs-button--active,.vs-button--border:focus,.vs-button--gradient{color:#fff;background:#111214;background:rgba(var(--vs-color),1)}.vs-button--gradient{overflow:hidden}.vs-button--gradient.vs-button--primary:before,.vs-button--gradient.vs-button--success:before{-webkit-filter:hue-rotate(40deg);filter:hue-rotate(40deg)}.vs-button--gradient:before{content:\"\";background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:hue-rotate(-40deg);filter:hue-rotate(-40deg);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--gradient:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(17,18,20,.7);-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7);box-shadow:0 10px 20px -10px rgba(17,18,20,.7);box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7)}.vs-button--gradient:hover:before{opacity:0}.vs-button--gradient.vs-button--active{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(0,0,0,.35);box-shadow:0 10px 20px -10px rgba(0,0,0,.35)}.vs-button--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}.vs-button--relief .vs-button__content{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-button--relief.vs-button--icon.vs-button--active{height:auto}.vs-button--relief:before{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:calc(100% - 3px);border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:contrast(2) grayscale(.4);filter:contrast(2) grayscale(.4);border-bottom:3px solid #111214;border-bottom:3px solid rgba(var(--vs-color),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--relief:active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief:active .vs-button__content{padding-bottom:6px}.vs-button--relief:active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--relief.vs-button--active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief.vs-button--active .vs-button__content{padding-bottom:6px}.vs-button--relief.vs-button--active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--transparent{background:transparent;color:#111214;color:rgba(var(--vs-color),1);overflow:hidden}.vs-button--transparent:before{content:\"\";background:rgba(43,133,153,.10196);position:absolute;bottom:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:-1;-webkit-transform:scale(.5);transform:scale(.5);opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--transparent:active:not(.vs-button--active):before{-webkit-transform:scale(.9)!important;transform:scale(.9)!important}.vs-button--transparent.vs-button--active:before,.vs-button--transparent:hover:before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-button--shadow{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);overflow:hidden;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-button--shadow:active:not(.vs-button--active){-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-button--shadow.vs-button--active,.vs-button--shadow:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 8px 25px 0 rgba(0,0,0,.05);box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}@keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}.vs-button-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button-group .vs-button{margin:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type){border-radius:0;border:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border:before{border-left:0;width:100%}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border+.vs-button--border:not(:last-of-type):before{border-right:0;width:100%}.vs-button-group .vs-button:last-of-type{border-radius:0 12px 12px 0}.vs-button-group .vs-button:first-of-type{border-radius:12px 0 0 12px}.vs-alert{--vs-color:var(--vs-primary);background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);color:#111214;color:rgba(var(--vs-color),1);width:100%;padding:0 20px;border-radius:0 12px 12px 0;position:relative;font-size:.9rem;z-index:10;-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert b{font-weight:600}.vs-alert a{color:inherit!important;text-decoration:underline}.vs-alert a:hover{opacity:.6}.vs-alert:after{content:\"\";left:0;top:0;width:2px;height:100%;position:absolute}.vs-alert--solid,.vs-alert:after{background:#111214;background:rgba(var(--vs-color),1)}.vs-alert--solid,.vs-alert--solid .vs-alert__icon i{color:#fff}.vs-alert--solid .vs-alert__icon svg{fill:#fff}.vs-alert--solid .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close svg{fill:#fff}.vs-alert--solid:after{background:hsla(0,0%,100%,.4)}.vs-alert--border{background:transparent}.vs-alert--border:before{border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-left:0;width:calc(100% - 2px);content:\"\";position:absolute;height:calc(100% - 2px);top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--shadow{background:transparent;-webkit-box-shadow:0 4px 15px 0 rgba(17,18,20,.12);-webkit-box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12);box-shadow:0 4px 15px 0 rgba(17,18,20,.12);box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12)}.vs-alert--gradient{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px}.vs-alert--gradient .vs-alert__icon i{color:#fff}.vs-alert--gradient .vs-alert__icon svg{fill:#fff}.vs-alert--gradient .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close svg{fill:#fff}.vs-alert--gradient:after{display:none}.vs-alert--gradient:before{background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));-webkit-filter:hue-rotate(-50deg);filter:hue-rotate(-50deg);width:100%;content:\"\";position:absolute;height:100%;top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--flat{background:rgba(0,0,0,.03)}.vs-alert--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px;-webkit-box-shadow:6px 6px 0 0 rgba(17,18,20,.3);-webkit-box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3);box-shadow:6px 6px 0 0 rgba(17,18,20,.3);box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3)}.vs-alert--relief .vs-alert__icon i{color:#fff}.vs-alert--relief .vs-alert__icon svg{fill:#fff}.vs-alert--relief .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);background:rgba(0,0,0,.2);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close svg{fill:#fff}.vs-alert--relief:after{display:none}.vs-alert__title{font-weight:600;font-size:1rem;padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vs-alert__title--clickHidden{cursor:pointer;padding-right:0}.vs-alert__title~.vs-alert__content .vs-alert__content__text{padding-top:0}.vs-alert__content{-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert__content__text{padding:20px 15px}.vs-alert__close{position:absolute;top:9px;right:6px;background:transparent;border:0;color:#111214;color:rgba(var(--vs-color),1);width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.3);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.3);box-shadow:0 0 0 0 rgba(17,18,20,.3);box-shadow:0 0 0 0 rgba(var(--vs-color),.3);border-radius:10px;padding:0}.vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 18px 0 rgba(17,18,20,.3);box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3)}.vs-alert__close svg{fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__footer{position:relative;width:100%;padding:0 15px 10px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-alert__footer,.vs-alert__icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-alert__icon{position:absolute;width:50px;height:100%;left:0;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:2px}.vs-alert__icon i{font-size:1.3rem;color:#111214;color:rgba(var(--vs-color),1)}.vs-alert__icon svg{width:24px;height:24px;fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__icon~.vs-alert__footer{padding-left:35px}.vs-alert__icon~.vs-alert__content{padding-left:20px}.vs-alert__icon~.vs-alert__title{padding-left:35px}.vs-alert__progress{width:100%;position:absolute;bottom:0;left:0;height:2px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-alert__progress__bar{width:30%;left:0;position:relative;height:100%;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination{position:relative;padding:0 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:10px}.vs-alert__pagination span{font-size:.8rem;margin:0 8px;min-width:28px;text-align:center}.vs-alert__pagination button{border:0;background:transparent;color:#111214;color:rgba(var(--vs-color),1);padding:0 7px;font-size:1rem;background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);border-radius:8px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination button:hover{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-icon-close{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-icon-close:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vs-icon-close:after,.vs-icon-close:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:16px;height:2px;border-radius:2px;-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-close:after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vs-icon-close.vs-icon-hover-less:hover:after,.vs-icon-close.vs-icon-hover-less:hover:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-plus{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer}.vs-icon-plus:before{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-plus:after,.vs-icon-plus:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:14px;height:2px;border-radius:2px}.vs-icon-plus:after{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .4s ease;transition:all .4s ease}.vs-icon-plus:hover:not(.less){-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.vs-icon-plus.less:hover{-webkit-transform:scale(.75);transform:scale(.75)}.vs-icon-plus.less:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-check{width:23px;height:23px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-icon-check span{-webkit-transform:rotate(45deg);transform:rotate(45deg);display:block;position:relative;width:8px;height:13px;margin-top:-4px}.vs-icon-check span .line1{background:transparent;content:\"\";position:absolute;height:2px;border-radius:2px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px;z-index:100;width:8px;bottom:0}.vs-icon-check span .line1:after{content:\"\";position:absolute;width:0;height:2px;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px 0 0 5px}.vs-icon-check span .line2{bottom:0;right:0;z-index:100;background:transparent;content:\"\";position:absolute;height:13px;border-radius:5px;-webkit-transition:all .2s ease;transition:all .2s ease;width:2px}.vs-icon-check span .line2:after{content:\"\";position:absolute;width:2px;height:0%;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;bottom:0;border-radius:5px 5px 0 0}.vs-icon-check.active:before{width:8px}.vs-icon-check.active:after{width:4px}.vs-icon-check.indeterminate span{-webkit-transform:rotate(0);transform:rotate(0);height:auto;margin:0;width:auto}.vs-icon-check.indeterminate span:after{position:relative;content:\"\";width:10px;height:2px;background:#fff;display:block}.vs-icon-check.indeterminate span .line1{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);bottom:0;right:-1px;opacity:0;display:none}.vs-icon-check.indeterminate span .line2{right:0!important;bottom:-.14rem!important;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important;-webkit-transition:all .25s ease!important;transition:all .25s ease!important;height:11px!important;display:none}.vs-icon-arrow{pointer-events:none;width:7px;height:7px;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform-origin:center;transform-origin:center}.vs-icon-arrow:after{width:100%;height:1px}.vs-icon-arrow:after,.vs-icon-arrow:before{content:\"\";background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;display:block;top:0}.vs-icon-arrow:before{width:1px;height:100%}.vs-input-parent{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}.vs-input-parent.square .vs-input-content{border-radius:0!important}.vs-input-parent.textWhite .vs-input{color:#fff}.vs-input-parent.transparent .vs-input{background:transparent!important}.vs-input-parent.block,.vs-input-parent.block .vs-input{width:100%}.vs-input-parent--has-label{margin-top:20px!important}.vs-input-parent--state-success .vs-input{background:rgba(70,201,58,.1)!important;background:rgba(var(--vs-success),.1)!important}.vs-input-parent--state-success .vs-input,.vs-input-parent--state-success .vs-input__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input-parent--state-success .vs-input__icon{color:#46c93a;color:rgba(var(--vs-success),1);background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-input-parent--state-danger .vs-input{background:rgba(255,71,87,.1)!important;background:rgba(var(--vs-danger),.1)!important}.vs-input-parent--state-danger .vs-input,.vs-input-parent--state-danger .vs-input__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input-parent--state-danger .vs-input__icon{color:#ff4757;color:rgba(var(--vs-danger),1);background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-input-parent--state-warn .vs-input{background:rgba(255,186,0,.1)!important;background:rgba(var(--vs-warn),.1)!important}.vs-input-parent--state-warn .vs-input,.vs-input-parent--state-warn .vs-input__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input-parent--state-warn .vs-input__icon{color:#ffba00;color:rgba(var(--vs-warn),1);background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-input-parent--state-dark .vs-input{background:rgba(30,30,30,.1)!important;background:rgba(var(--vs-dark),.1)!important}.vs-input-parent--state-dark .vs-input,.vs-input-parent--state-dark .vs-input__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input-parent--state-dark .vs-input__icon{color:#1e1e1e;color:rgba(var(--vs-dark),1);background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-input-parent--state-primary .vs-input{background:rgba(25,91,255,.1)!important;background:rgba(var(--vs-primary),.1)!important}.vs-input-parent--state-primary .vs-input,.vs-input-parent--state-primary .vs-input__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input-parent--state-primary .vs-input__icon{color:#195bff;color:rgba(var(--vs-primary),1);background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-input-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;border-radius:12px}.vs-input-content+.vs-input__message{padding-top:2px}.vs-input-content--has-color .vs-input:focus{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1)}.vs-input-content--has-color .vs-input:focus~.vs-input__icon,.vs-input-content--has-color .vs-input:focus~.vs-input__label,.vs-input-content--has-color .vs-input:focus~.vs-input__label--placeholder{color:#111214;color:rgba(var(--vs-color),1)}.vs-input{border:2px solid transparent;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;padding:7px 13px 7px 10px;width:200px}.vs-input:focus{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);padding-left:15px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after){padding-left:40px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__icon{-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){left:44px}.vs-input:focus~.vs-input__icon{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input:focus~.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input:focus~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){opacity:0;left:20px}.vs-input:focus~.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-77%);transform:translate(-3%,-77%);font-size:.75rem}.vs-input__label{position:absolute;left:13px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4}.vs-input__label--hidden{opacity:0;visibility:hidden}.vs-input__label--hidden.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3px,-80%);transform:translate(-3px,-80%);font-size:.75rem}.vs-input__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-2px,-77%);transform:translate(-2px,-77%);font-size:.75rem}.vs-input--has-icon{padding-left:38px}.vs-input--has-icon~.vs-input__label{left:44px}.vs-input--has-icon--after{padding-left:7px;padding-right:38px}.vs-input--has-icon--after~.vs-input__label{left:13px}.vs-input--has-icon--after.vs-input__label--label,.vs-input--has-icon:focus--has-icon--after~.vs-input__label--placeholder{-webkit-transform:translate(-25px,-80%)!important;transform:translate(-25px,-80%)!important}.vs-input--has-icon:focus--has-icon--after~.vs-input__label{left:44px}.vs-input__icon{position:absolute;right:auto;width:36px;height:36px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:12px 0 10px -10px rgba(0,0,0,.05);box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);pointer-events:none;left:0}.vs-input__icon--after{left:auto;right:0;-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input__icon--click{pointer-events:auto!important;cursor:pointer}.vs-input__icon--click:hover{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input__icon--click:hover.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-input__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input__progress{width:95%;left:2.5%;position:relative;height:2px;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);margin-top:5px;overflow:hidden;border-radius:5px}.vs-input__progress--danger .vs-input__progress__bar{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-input__progress--warn .vs-input__progress__bar{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-input__progress--success .vs-input__progress__bar{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-input__progress__bar{width:32%;height:2px;max-width:100%;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px}.vs-input__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default}.vs-input__loading:after{border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-input__loading:after,.vs-input__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-input__loading:before{border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-input-parent--border .vs-input__icon{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-input-parent--border .vs-input-content{border-radius:0}.vs-input-parent--border .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.vs-input-parent--border .vs-input-content .vs-input__affects__1{border-bottom:2px solid #f0f3f4;border-bottom:2px solid rgba(var(--vs-gray-3),1);width:100%;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-input-parent--border .vs-input-content .vs-input__affects__2{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1);width:0;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-input-parent--border .vs-input-content .vs-input{background:transparent;border-radius:0}.vs-input-parent--border .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__2{width:100%}.vs-input-parent--shadow .vs-input__icon{background:transparent;z-index:100}.vs-input-parent--shadow .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;border-radius:inherit;pointer-events:none;z-index:10}.vs-input-parent--shadow .vs-input-content .vs-input__affects__1{-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,.05);-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 6px 25px -6px rgba(0,0,0,.05);box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));width:100%;height:100%;position:absolute;top:0;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200;border-radius:inherit}.vs-input-parent--shadow .vs-input-content .vs-input{background:transparent;border-radius:0;border:2px solid transparent}.vs-input-parent--shadow .vs-input-content .vs-input:focus{-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__icon{background:#fff!important;background:rgba(var(--vs-background),1)!important;opacity:1;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__1{-webkit-transform:translateY(3px);transform:translateY(3px);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 3px 0 rgba(0,0,0,.05);box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox-content{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-checkbox-con{width:23px;height:23px;border-radius:9px;position:relative;z-index:1}.vs-checkbox-mask{border-radius:32%;width:100%;height:100%;position:absolute;z-index:50;cursor:pointer;pointer-events:none;-webkit-box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:-1;box-sizing:border-box}.vs-checkbox-mask i:not(.vs-icon-check){color:#fff;font-size:1.1em}.vs-checkbox-mask:after,.vs-checkbox-mask i:not(.vs-icon-check){opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox-mask:after{background:#111214;background:rgba(var(--vs-color),1);border-radius:inherit}.vs-checkbox-mask:after,.vs-checkbox-mask:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.vs-checkbox-mask:before{border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;border:2px solid #e6e9ea;border:2px solid rgba(var(--vs-gray-4),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-checkbox-mask .vs-icon-check{opacity:0;z-index:200}.vs-checkbox{position:absolute;width:100%;height:100%;top:0;left:0;margin:0;padding:0;opacity:0;z-index:100;cursor:pointer}.vs-checkbox:disabled{opacity:0;pointer-events:none}.vs-checkbox:active~.vs-checkbox-mask{background:#e6e9ea!important;background:rgba(var(--vs-gray-4),1)!important}.vs-checkbox:hover~.vs-checkbox-mask{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-checkbox:hover~.vs-checkbox-mask:before{border:2px solid rgba(230,233,234,0);border:2px solid rgba(var(--vs-gray-4),0)}.vs-checkbox:checked:hover~.vs-checkbox-mask{-webkit-box-shadow:0 3px 15px 0 rgba(17,18,20,.35);-webkit-box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35);box-shadow:0 3px 15px 0 rgba(17,18,20,.35);box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask{-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.35);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.35);box-shadow:0 0 0 0 rgba(17,18,20,.35);box-shadow:0 0 0 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask i:not(.vs-icon-check){opacity:1;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease .15s;transition:all .25s ease .15s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check{opacity:1}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line1:after{width:100%;-webkit-transition:all .25s ease .1s;transition:all .25s ease .1s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line2:after{-webkit-transition:all .2s ease .3s;transition:all .2s ease .3s;height:100%}.vs-checkbox:checked~.vs-checkbox-mask:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-checkbox:checked~.vs-checkbox-mask:before{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-checkbox-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:7px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem}.vs-checkbox-label,.vs-checkbox-label:before{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-checkbox-label:before{position:absolute;width:0;height:2px;background:rgba(44,62,80,.6);background:rgba(var(--vs-text),.6);content:\"\"}.vs-checkbox--disabled{pointer-events:none}.vs-checkbox--disabled .vs-checkbox-label{opacity:.5}.vs-checkbox--disabled .vs-checkbox-mask{opacity:.6;background:transparent!important}.vs-checkbox--checked .lineThrough{opacity:.4}.vs-checkbox--checked .lineThrough:before{width:calc(100% - 10px)}.vs-checkbox--loading{pointer-events:none}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:before{border-radius:50%;border:2px solid #111214!important;border:2px solid rgba(var(--vs-color),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite;opacity:1!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:after{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox--loading .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading .vs-checkbox-mask:before{border-radius:50%;border:2px solid #e6e9ea!important;border:2px solid rgba(var(--vs-gray-4),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite}@-webkit-keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox--label-before .vs-checkbox-label{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.vs-switch{--vs-color:var(--vs-primary)}@-webkit-keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-switch{color:#fff;padding:5px;border-radius:20px;min-width:48px;height:28px;border:0;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-switch--icon .vs-switch__input:checked~.vs-switch__circle{color:#fff!important}.vs-switch--icon .vs-switch__circle{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-switch--icon .vs-switch__circle i{opacity:1;font-size:1.3rem}.vs-switch--indeterminate .vs-switch__input{pointer-events:none}.vs-switch--indeterminate .vs-switch__circle{left:50%!important;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-switch--square{border-radius:5px}.vs-switch--square .vs-switch__background,.vs-switch--square .vs-switch__circle{border-radius:5px!important}.vs-switch:after{border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s linear .25s infinite;animation:rotateSwitch .6s linear .25s infinite}.vs-switch:after,.vs-switch:before{-webkit-transition:all 0s ease 0s;transition:all 0s ease 0s;opacity:0;visibility:hidden;content:\"\";position:absolute;width:calc(100% - 8px);height:calc(100% - 8px);z-index:200;pointer-events:none}.vs-switch:before{border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s ease .25s infinite;animation:rotateSwitch .6s ease .25s infinite}.vs-switch--loading{width:28px!important;min-width:28px!important;pointer-events:none;border-radius:20px!important}.vs-switch--loading .vs-switch__circle{border-radius:50%!important}.vs-switch--loading .vs-switch__background{opacity:0!important}.vs-switch--loading:after,.vs-switch--loading:before{opacity:1;visibility:visible;-webkit-transition:all .25s ease .3s;transition:all .25s ease .3s}.vs-switch:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-switch:active{-webkit-transform:scale(.9);transform:scale(.9)}.vs-switch__background{width:100%;height:auto;position:absolute;background:#111214;background:rgba(var(--vs-color),1);border-radius:inherit;z-index:2;-webkit-transition:all .25s ease-out;transition:all .25s ease-out;-webkit-transform:scale(1);transform:scale(1);left:-100%;border-radius:50%;padding-bottom:100%}.vs-switch__text{font-size:.7rem;padding:5px 5px 5px 25px;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;color:#2c3e50;color:rgba(var(--vs-text),1);z-index:9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;overflow:hidden;white-space:nowrap}.vs-switch__text.on{-webkit-transform:translate(-100%);transform:translate(-100%);position:absolute;opacity:0}.vs-switch__text i{font-size:1rem;opacity:.7}.vs-switch__circle{width:20px;height:20px;background:#fff;background:rgba(var(--vs-background),1);border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;position:absolute;z-index:10;left:4px;color:#2c3e50;color:rgba(var(--vs-text),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-switch__circle i{font-size:.8rem}.vs-switch__input{position:absolute;width:100%;opacity:0!important;height:100%;border-radius:inherit;z-index:100;top:0;left:0;margin:0;cursor:pointer}.vs-switch__input:active:checked~.vs-switch__circle{left:calc(100% - 30px)}.vs-switch__input:active~.vs-switch__circle{width:25px}.vs-switch__input:checked~.vs-switch__background{opacity:1;-webkit-transform:scale(1);transform:scale(1);width:100%;padding-bottom:100%;left:0;border-radius:50%;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-switch__input:checked~.vs-switch__text{padding-left:5px;padding-right:25px;color:#fff}.vs-switch__input:checked~.vs-switch__text i{opacity:1}.vs-switch__input:checked~.vs-switch__text.on{-webkit-transform:translate(0);transform:translate(0);position:relative;opacity:1}.vs-switch__input:checked~.vs-switch__text.off{-webkit-transform:translate(100%);transform:translate(100%);position:absolute;opacity:0}.vs-switch__input:checked~.vs-switch__circle{left:calc(100% - 24px);-webkit-box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);-webkit-box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);color:#111214;color:rgba(var(--vs-color),1)}.vs-select{--vs-color:var(--vs-primary)}.vs-select__options .vs-checkbox-content{--vs-color:inherit}.vs-select-enter,.vs-select-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-enter{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.vs-select-enter,.vs-select-enter:after{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-enter:after{opacity:0!important}.vs-select-leave-active,.vs-select-leave-to{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-leave-to{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-leave-to.top{-webkit-transform:translateY(10px)!important;transform:translateY(10px)!important}.vs-select-leave-to:after{opacity:0!important;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-content{width:100%;max-width:200px}.vs-select-content.block.block{max-width:100%}.vs-select{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:38px;width:100%}.vs-select--state-success .vs-select__input{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-success .vs-select__chips{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__chips:hover:after{opacity:0}.vs-select--state-success .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(70,201,58,.5);border:2px solid rgba(var(--vs-success),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-success .vs-select__icon,.vs-select--state-success .vs-select__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__icon{background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-select--state-success .vs-icon-arrow:after,.vs-select--state-success .vs-icon-arrow:before{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-select--state-danger .vs-select__input{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-danger .vs-select__chips{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__chips:hover:after{opacity:0}.vs-select--state-danger .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,71,87,.5);border:2px solid rgba(var(--vs-danger),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-danger .vs-select__icon,.vs-select--state-danger .vs-select__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__icon{background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-select--state-danger .vs-icon-arrow:after,.vs-select--state-danger .vs-icon-arrow:before{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select--state-warn .vs-select__input{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-warn .vs-select__chips{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__chips:hover:after{opacity:0}.vs-select--state-warn .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,186,0,.5);border:2px solid rgba(var(--vs-warn),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-warn .vs-select__icon,.vs-select--state-warn .vs-select__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__icon{background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-select--state-warn .vs-icon-arrow:after,.vs-select--state-warn .vs-icon-arrow:before{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-select--state-dark .vs-select__input{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-dark .vs-select__chips{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__chips:hover:after{opacity:0}.vs-select--state-dark .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(30,30,30,.5);border:2px solid rgba(var(--vs-dark),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-dark .vs-select__icon,.vs-select--state-dark .vs-select__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__icon{background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-select--state-dark .vs-icon-arrow:after,.vs-select--state-dark .vs-icon-arrow:before{background:#1e1e1e;background:rgba(var(--vs-dark),1)}.vs-select--state-primary .vs-select__input{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-primary .vs-select__chips{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__chips:hover:after{opacity:0}.vs-select--state-primary .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(25,91,255,.5);border:2px solid rgba(var(--vs-primary),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-primary .vs-select__icon,.vs-select--state-primary .vs-select__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__icon{background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-select--state-primary .vs-icon-arrow:after,.vs-select--state-primary .vs-icon-arrow:before{background:#195bff;background:rgba(var(--vs-primary),1)}.vs-select.loading{pointer-events:none}.vs-select.loading :not(.vs-select__loading):not(.vs-select__label){opacity:.6}.vs-select.loading .vs-select__label{pointer-events:none!important}.vs-select.top.activeOptions .vs-select__chips,.vs-select.top.activeOptions .vs-select__input{border-radius:0 0 12px 12px!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-select--disabled{opacity:.6;pointer-events:none}.vs-select--disabled label{pointer-events:none}.vs-select .vs-icon-arrow{z-index:600;position:absolute;right:15px;margin-top:-2px;-webkit-transition:all .25s ease;transition:all .25s ease;pointer-events:auto;cursor:pointer}.vs-select.activeOptions .vs-icon-arrow{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-top:-2px!important}.vs-select.activeOptions .vs-select__input{border-radius:12px 12px 0 0;border:2px solid transparent;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select.activeOptions .vs-select__chips,.vs-select.activeOptions .vs-select__input{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s}.vs-select.activeOptions .vs-select__chips{border-radius:12px 12px 0 0}.vs-select.activeOptions .vs-select__chips:after{opacity:0}.vs-select.activeOptions .vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select.activeOptions .vs-select__label{margin-top:-4px}.vs-select__input{opacity:1;background:transparent;border:2px solid transparent;border-radius:12px;cursor:pointer;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);min-height:38px;padding:7px 30px 7px 13px;width:100%}.vs-select__input.multiple{color:transparent;background:transparent;pointer-events:none}.vs-select__input.simple{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-select__input:focus{border-radius:12px 12px 0 0;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__input:focus~.vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__input:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px)}.vs-select__input:hover~.vs-select__label{margin-top:-4px}.vs-select__input:hover~.vs-icon-arrow{margin-top:-6px}.vs-select__chips{width:100%;height:auto;position:absolute;left:0;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);z-index:300;border-radius:12px;display:-webkit-box;display:-ms-flexbox;border:0;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:38px;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;padding:5px 26px 5px 5px}.vs-select__chips:focus{border-radius:12px 12px 0 0}.vs-select__chips:focus,.vs-select__chips:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips:hover~.vs-icon-arrow{margin-top:-6px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__input{width:auto;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:100%;position:relative;min-width:0;border:0 solid transparent;background:transparent;margin:2px 3px;min-width:30px}.vs-select__chips__input::-webkit-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-moz-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input:-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__chip{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;background:#fff;background:rgba(var(--vs-background),1);border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:2px 3px;padding:0 10px 0 6px;font-size:.84rem;border:2px solid #f4f7f8;border:2px solid rgba(var(--vs-gray-2),1);-webkit-box-sizing:border-box;box-sizing:border-box;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select__chips__chip.isCollapse{padding-right:6px!important}.vs-select__chips__chip__close{position:absolute;top:-4px;right:-4px;width:15px;height:15px;background:#e6e9ea;background:rgba(var(--vs-gray-4),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;font-size:.75rem;cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__chip__close:hover{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select__chips__chip__close:hover .vs-icon-close{--vs-color:var(--vs-background)}.vs-select__chips__chip__close:hover .vs-icon-close:after,.vs-select__chips__chip__close:hover .vs-icon-close:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-select__chips__chip__close .vs-icon-close{--vs-color:var(--vs-text);-webkit-transform:scale(.5);transform:scale(.5)}.vs-select__options{--vs-color:var(--vs-primary);position:absolute;z-index:99999;background:#fff;background:rgba(var(--vs-background),1);padding:5px;border-radius:0 0 12px 12px;overflow:hidden;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 20px -5px rgba(0,0,0,.05);box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top{border-radius:12px 12px 0 0;-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top:after{top:auto;bottom:-10px}.vs-select__options:after{content:\"\";position:absolute;top:-10px;width:80%;margin-left:10%;left:0;height:10px;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 20px 0 rgba(0,0,0,.05);box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));z-index:200;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;opacity:1}.vs-select__options__content{max-height:200px;overflow:auto;height:auto;z-index:100;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;scroll-behavior:smooth}.vs-select__options__content__not-data{font-size:.8rem;text-align:center;padding:6px 10px}.vs-select__options__content::-webkit-scrollbar{width:5px;height:5px;display:block;background:transparent}.vs-select__options__content::-webkit-scrollbar-thumb{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);border-radius:5px}.vs-select__label{position:absolute;left:14px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4;z-index:500}.vs-select__label--hidden{opacity:0;visibility:hidden}.vs-select__label--hidden.vs-select__label--placeholder,.vs-select__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default;z-index:600}.vs-select__loading:after{border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-select__loading:after,.vs-select__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-select__loading:before{border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-select__loading~.vs-icon-arrow{opacity:0!important}.vs-select__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-select__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-darken .vs-select__options.isColorDark{--vs-color:0,0,0!important}.vs-darken .vs-select__options.isColorDark .vs-select__option:hover{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2);color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-darken .vs-select__options.isColorDark .activeOption{color:#2c3e50;color:rgba(var(--vs-text),1);background:rgba(17,18,20,.6);background:rgba(var(--vs-color),.6)}.vs-select__option{border:0;width:100%;padding:6px 10px;text-align:left;background:transparent;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:5px;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));margin:2px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;opacity:1;visibility:visible;max-height:40px}.vs-select__option.hiddenOption{opacity:0;visibility:hidden;max-height:0;padding-top:0;padding-bottom:0;border:0;margin:0}.vs-select__option.isMultiple{padding:0 0 0 5px}.vs-select__option.isMultiple .vs-select__option-group{padding-left:0}.vs-select__option.isMultiple.isHover{background:#f4f7f8!important;background:rgba(var(--vs-gray-2),1)!important}.vs-select__option.isMultiple:disabled .vs-checkbox-content{pointer-events:none}.vs-select__option.isMultiple:hover{padding-left:5px!important}.vs-select__option.isMultiple .vs-checkbox-content{width:100%;pointer-events:none}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-con{-webkit-transform:scale(.85);transform:scale(.85)}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-label{width:calc(100% - 23px);text-align:left;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-select__option.isMultiple.activeOption{pointer-events:auto!important}.vs-select__option.isHover{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-select__option.activeOption{background:rgba(17,18,20,.05);background:rgba(var(--vs-color),.05);color:#111214;color:rgba(var(--vs-color),1);pointer-events:none}.vs-select__option:hover:not(:disabled){color:#111214;color:rgba(var(--vs-color),1);padding-left:14px}.vs-select__option-group{padding-left:10px;border-bottom:2px solid #f9fcfd;border-bottom:2px solid rgba(var(--vs-gray-1),1);position:relative;overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__option-group:last-child{border:0}.vs-select__option-group.hiddenOptionGroup{border-bottom:0 solid #f9fcfd;border-bottom:0 solid rgba(var(--vs-gray-1),1)}.vs-select__option-group.hiddenOptionGroup h5{padding:0;max-height:0}.vs-select__option-group h5{max-height:28px;-webkit-transition:all .25s ease;transition:all .25s ease;opacity:.5;margin:0;padding:7px 0;font-size:.7rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.vs-select__option-group h5 *{pointer-events:none}.vs-avatar-content{--vs-color:var(--vs-gray-2);--vs-badge:var(--vs-primary);border-radius:35%;z-index:1;width:44px;height:44px;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar-content.vs-change-color-badge .vs-avatar__badge .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar-content.vs-change-color:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1)}.vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04)}.vs-avatar-content:hover img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-avatar-content--size.history:after{top:-2px!important}.vs-avatar-content--hasIcons{margin-right:20px}.vs-avatar-content--hidden{display:none}.vs-avatar-content--circle{border-radius:50%!important}.vs-avatar-content--circle .vs-avatar__badge{right:-2px;bottom:-2px}.vs-avatar-content--circle .vs-avatar__badge.top-right{top:-2px;bottom:auto}.vs-avatar-content--circle .vs-avatar__badge.top-left{top:-2px;left:-2px;bottom:auto;right:auto}.vs-avatar-content--circle .vs-avatar__badge.bottom-left{left:-2px;right:auto}.vs-avatar-content--square{border-radius:0!important}.vs-avatar-content.history--gradient:after{background-image:linear-gradient(40deg,#f99b4a,#df376b 74%,#c52d91 0)!important}.vs-avatar-content.history .vs-avatar{width:calc(100% - 4px);height:calc(100% - 4px);border:2px solid #fff;border:2px solid rgba(var(--vs-background),1);margin:2px}.vs-avatar-content.history:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background-color:#ffe53b;z-index:-1;background:#111214;background:rgba(var(--vs-color),1)}.vs-avatar-content.vs-component--is-color .vs-avatar{color:#fff;color:rgba(var(--vs-background),1)}.vs-avatar-content.vs-component--is-color .vs-avatar__points .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;width:100%;height:100%;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.05);box-shadow:inset 0 0 0 0 rgba(0,0,0,.05)}.vs-avatar i{font-size:1.4rem}.vs-avatar img{width:100%;height:auto;display:block;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-avatar__loading{position:absolute;width:100%;top:0;left:0;background:rgba(0,0,0,.5);z-index:100;height:100%;border-radius:inherit}.vs-avatar__loading,.vs-avatar__loading__animate{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__loading__animate{height:60%;width:60%;border-radius:50%;position:relative}.vs-avatar__loading__animate:after{border-radius:inherit;border:2px solid transparent;border-bottom-color:#fff;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-avatar__loading__animate:after,.vs-avatar__loading__animate:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-avatar__loading__animate:before{border-radius:inherit;border:2px solid transparent;border-bottom:2px dashed #fff;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-avatar--letter--3{font-size:.9rem}.vs-avatar--letter--4{font-size:.8rem}.vs-avatar--letter--5{font-size:.7rem}.vs-avatar--letter--6{font-size:.6rem}.vs-avatar__badge{position:absolute;width:13px;height:13px;background:rgba(var(--vs-badge),1);border-radius:50%;border:2px solid #fff!important;border:2px solid rgba(var(--vs-background),1)!important;right:-4px;bottom:-4px;font-size:.6rem;font-weight:700;z-index:200;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-avatar__badge.isSlot,.vs-avatar__badge.writing{width:auto;height:auto;border-radius:7px;min-width:18px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;color:rgba(var(--vs-background),1);line-height:.9rem;padding:0 3px;min-height:18px}.vs-avatar__badge.top-right{top:-4px;bottom:auto}.vs-avatar__badge.top-left{top:-4px;left:-4px;bottom:auto;right:auto}.vs-avatar__badge.bottom-left{left:-4px;right:auto}.vs-avatar__points{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__points__point{width:5px;height:5px;background:#2c3e50;background:rgba(var(--vs-text),1);margin:0 2px;border-radius:50%}.vs-avatar__points__point:first-child{-webkit-animation:point 1.2s ease infinite;animation:point 1.2s ease infinite}.vs-avatar__points__point:nth-child(2){-webkit-animation:point 1.2s ease .4s infinite;animation:point 1.2s ease .4s infinite}.vs-avatar__points__point:nth-child(3){-webkit-animation:point 1.2s ease .8s infinite;animation:point 1.2s ease .8s infinite}.vs-avatar__latest{background:rgba(0,0,0,.5);top:0;left:0;width:100%;height:100%;z-index:300;border-radius:inherit;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar__icons,.vs-avatar__latest{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__icons{width:auto;height:auto;min-height:90%;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:-20px;padding:3px 3px 3px 5px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:-1;border-radius:5px 5px 5px 5px;font-size:1rem}.vs-avatar__icons i{cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-avatar__icons i:hover{opacity:.7}@-webkit-keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}@keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}.vs-avatar__group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:18px}.vs-avatar__group.float{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding-left:0}.vs-avatar__group.float .vs-avatar-content{position:relative;z-index:2;border:3px solid vs-color(\"background\");margin:0}.vs-avatar__group:not(.float) .vs-avatar-content{margin-left:-18px;position:relative;z-index:2}.vs-avatar__group:not(.float) .vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.1);box-shadow:inset 0 0 0 0 rgba(0,0,0,.1)}.vs-avatar__group:not(.float) .vs-avatar-content:hover img{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content .vs-avatar__latest{width:calc(100% - 6px);height:calc(100% - 6px);margin:3px}.vs-avatar__group:not(.float) .vs-avatar-content:not(.vs-change-color) .vs-avatar{background:vs-color(\"background\")}.vs-avatar__group:not(.float) .vs-avatar-content img{width:calc(100% - 6px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons){-webkit-transform:translate(-10px);transform:translate(-10px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons) .vs-avatar{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons{margin-right:0}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons:hover{-webkit-transform:translate(-34px)!important;transform:translate(-34px)!important}.vs-radio-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-radio-content.active .vs-radio__effect__icon{opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:scale(1.3);transform:scale(1.3)}.vs-radio-content.active .vs-radio__effect:after{border:7px solid #111214;border:7px solid rgba(var(--vs-color),1);-webkit-box-shadow:0 3px 12px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3);box-shadow:0 3px 12px 0 rgba(17,18,20,.3);box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3)}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect .vs-radio__effect__icon{opacity:.7}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect:after{border:2px solid rgba(44,62,80,.2);border:2px solid rgba(var(--vs-text),.2)}.vs-radio-content.loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-radio-content.loading .vs-radio__effect:after{opacity:.1}.vs-radio-content.loading .vs-radio__effect__loading{position:absolute;width:100%;height:100%;border-radius:inherit}.vs-radio-content.loading .vs-radio__effect__loading:after{border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right-color:rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right-color:rgba(var(--vs-text),.4);-webkit-animation:loadingRadio .6s ease infinite;animation:loadingRadio .6s ease infinite}.vs-radio-content.loading .vs-radio__effect__loading:after,.vs-radio-content.loading .vs-radio__effect__loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4)}.vs-radio-content.loading .vs-radio__effect__loading:before{border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right:2px dashed rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right:2px dashed rgba(var(--vs-text),.4);-webkit-animation:loadingRadio .6s linear infinite;animation:loadingRadio .6s linear infinite}.vs-radio-content label{cursor:pointer}.vs-radio-content.disabled{opacity:.5;pointer-events:none}.vs-radio-content.disabled .vs-radio__effect{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-radio-content.disabled label{pointer-events:none}.vs-radio{width:20px;height:20px;min-width:20px;min-height:20px;margin:0;padding:0;border-radius:50%;position:relative;z-index:10}.vs-radio__label{margin:0 6px}.vs-radio__effect{position:absolute;width:100%;height:100%;border-radius:inherit;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:10}.vs-radio__effect,.vs-radio__effect__icon{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-radio__effect__icon i{font-size:.75rem}.vs-radio__effect:after{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),.4);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4)}.vs-radio input{margin:0;padding:0;width:100%;height:100%;position:relative;z-index:100;opacity:0;cursor:pointer}.vs-radio input:active~.vs-radio__effect:after{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-tooltip{--vs-color:var(--vs-text)}.vs-tooltip-enter-active,.vs-tooltip-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-tooltip-enter,.vs-tooltip-leave-to{opacity:0}.vs-tooltip-enter.top,.vs-tooltip-leave-to.top{-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-tooltip-enter.bottom,.vs-tooltip-leave-to.bottom{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-tooltip-enter.left,.vs-tooltip-leave-to.left{-webkit-transform:translate(5px);transform:translate(5px)}.vs-tooltip-enter.right,.vs-tooltip-leave-to.right{-webkit-transform:translate(-5px);transform:translate(-5px)}.darken .vs-tooltip{--vs-color:var(--vs-gray-3);color:#fff}.darken .vs-tooltip:not(.vs-change-color){color:#fff!important}.vs-tooltip{background:#111214;background:rgba(var(--vs-color),1);color:#fff;color:rgba(var(--vs-background),1);position:absolute;z-index:1000000;text-align:center;padding:5px 10px;border-radius:12px;font-size:.85rem;max-width:350px;min-width:30px;min-height:30px}.vs-tooltip.loading{color:hsla(0,0%,100%,.2);color:rgba(var(--vs-background),.2)}.vs-tooltip.loading *{opacity:.5;pointer-events:none}.vs-tooltip__loading{width:22px;height:22px;position:absolute;display:block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%;opacity:1!important}.vs-tooltip__loading:after{border-radius:inherit;border:2px solid hsla(0,0%,100%,0);border-right-color:#fff;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-background),1);-webkit-animation:loadingTooltip .6s ease infinite;animation:loadingTooltip .6s ease infinite}.vs-tooltip__loading:after,.vs-tooltip__loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-tooltip__loading:before{border-radius:inherit;border:2px dashed #fff;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #fff;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-background),1);-webkit-animation:loadingTooltip .6s linear infinite;animation:loadingTooltip .6s linear infinite}.vs-tooltip.borderThick{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.borderThick.top{border-bottom:4px solid #111214;border-bottom:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.top:after{bottom:-7px}.vs-tooltip.borderThick.left{border-right:4px solid #111214;border-right:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.left:after{right:-7px}.vs-tooltip.borderThick.right{border-left:4px solid #111214;border-left:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.right:after{left:-7px}.vs-tooltip.borderThick.bottom{border-top:4px solid #111214;border-top:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.bottom:after{top:-7px}.vs-tooltip.borderThick:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.borderThick:after{background:#111214!important;background:rgba(var(--vs-color),1)!important}.vs-tooltip.border{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-tooltip.border:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.border:after{border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);width:12px!important;height:12px!important}.vs-tooltip.circle{border-radius:20px}.vs-tooltip.square{border-radius:0}.vs-tooltip.notArrow:after{display:none}.vs-tooltip.shadow{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.shadow:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.shadow:after{-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.isDark{--vs-color:var(--vs-gray-3);color:#fff}.vs-tooltip.top:after{bottom:-3px;border-radius:0 0 2px 0}.vs-tooltip.bottom:after,.vs-tooltip.top:after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;left:50%;-webkit-transform:translate(-50%) rotate(45deg);transform:translate(-50%) rotate(45deg);z-index:-2}.vs-tooltip.bottom:after{top:-3px;border-radius:2px 0 0 0}.vs-tooltip.left:after{right:-3px;border-radius:0 2px 0 0}.vs-tooltip.left:after,.vs-tooltip.right:after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;top:50%;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);z-index:-2}.vs-tooltip.right:after{left:-3px;border-radius:0 0 0 2px}@-webkit-keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-dialog-content{--vs-color:var(--vs-primary)}.vs-dialog-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-dialog-enter-active .vs-dialog:not(.vs-dialog--fullScreen){-webkit-animation:rebound .4s;animation:rebound .4s}.vs-dialog-leave-active,.vs-dialog-leave-active .vs-dialog{-webkit-transition:all .15s ease;transition:all .15s ease}.vs-dialog-enter,.vs-dialog-leave-to{opacity:0}.vs-dialog-enter .vs-dialog,.vs-dialog-leave-to .vs-dialog{-webkit-transform:scale(.7);transform:scale(.7);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-dialog-enter .vs-dialog--fullScreen,.vs-dialog-leave-to .vs-dialog--fullScreen{-webkit-transform:translateY(8%)!important;transform:translateY(8%)!important}@-webkit-keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}.vs-dialog-content{background:rgba(0,0,0,.2);background:rgba(0,0,0,var(--vs-background-opacity));position:fixed;left:0;top:0;z-index:99000;z-index:var(--vs-zindex-2);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;max-height:100vh;overflow-y:auto;overflow-x:hidden;padding-top:80px;padding-bottom:80px}.vs-dialog-content.fullScreen{padding:0;overflow:hidden}.vs-dialog-content.blur{-webkit-backdrop-filter:saturate(180%) blur(15px);backdrop-filter:saturate(180%) blur(15px)}.vs-dialog{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);position:relative;min-width:400px;border-radius:20px;border-radius:var(--vs-radius);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 30px 0 rgba(0,0,0,.05);box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));max-width:800px;margin:auto}.vs-dialog--notCenter .vs-dialog__header{display:block}.vs-dialog__loading{width:100%;position:absolute;top:0;left:0;height:100%;border-radius:inherit;background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-dialog__loading:after{border-radius:inherit;border:2px solid rgba(17,18,20,0);border-right-color:#111214;border:2px solid rgba(var(--vs-color),0);border-right-color:rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s ease infinite;animation:loadingDialog .6s ease infinite}.vs-dialog__loading:after,.vs-dialog__loading:before{content:\"\";position:absolute;width:30px;height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-dialog__loading:before{border-radius:inherit;border:2px dashed #111214;border:2px solid rgba(17,18,20,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-color),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s linear infinite;animation:loadingDialog .6s linear infinite}.vs-dialog--scroll .vs-dialog__content{max-height:calc(80vh - 200px);overflow:auto}.vs-dialog--autoWidth{width:auto!important;min-width:auto!important;max-width:auto!important}.vs-dialog--square,.vs-dialog--square .vs-dialog__close{border-radius:0}.vs-dialog--notPadding .vs-dialog__footer{padding:0}.vs-dialog--notPadding .vs-dialog__content{padding:0;margin-bottom:0!important}.vs-dialog--notPadding .vs-dialog__header{padding:0}.vs-dialog--rebound{-webkit-animation:reboundClick .3s!important;animation:reboundClick .3s!important}.vs-dialog--fullScreen{width:calc(100% - 30px)!important;height:calc(100% - 30px)!important;max-width:none!important;max-height:none!important}.vs-dialog__footer{padding:0 16px 10px}.vs-dialog__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px 16px}.vs-dialog__content{padding:10px 16px;width:100%;position:relative;border-radius:inherit}.vs-dialog__content.notFooter{margin-bottom:20px}.vs-dialog__close{--vs-color:var(--vs-text);position:absolute;top:-6px;right:-6px;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:inherit;border-radius:12px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200;border:0}.vs-dialog__close i{width:34px;height:34px;opacity:.7}.vs-dialog__close i:after,.vs-dialog__close i:before{width:14px}.vs-dialog__close:hover{-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 4px 0 rgba(0,0,0,.05);box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}.vs-dialog__close:hover i{opacity:1}@-webkit-keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@media (max-width:600px){.vs-dialog{min-width:calc(100vw - 20px);max-width:calc(100vw - 20px);margin:auto 10px}}.vs-pagination-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination-content.notMargin .vs-pagination__dotted{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0}.vs-pagination-content.notMargin .vs-pagination__arrow{margin:0!important;border-radius:0}.vs-pagination-content.notMargin .vs-pagination__arrow:first-of-type{border-radius:12px 0 0 12px}.vs-pagination-content.notMargin .vs-pagination__arrow:last-of-type{border-radius:0 12px 12px 0}.vs-pagination-content.notMargin .vs-pagination__button{border-radius:0;margin:0!important}.vs-pagination-content.disabled{opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination-content.square .vs-pagination__active,.vs-pagination-content.square .vs-pagination__arrow,.vs-pagination-content.square .vs-pagination__button{border-radius:0}.vs-pagination-content.circle .vs-pagination__active,.vs-pagination-content.circle .vs-pagination__arrow,.vs-pagination-content.circle .vs-pagination__button{border-radius:50%}.vs-pagination-content.buttonsDotted .vs-pagination__arrow{width:15px;height:12px;min-width:15px;padding:0;background:transparent}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i{width:6px;height:6px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:before{width:1px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:after{height:1px}.vs-pagination-content.buttonsDotted .vs-pagination__dotted{width:12px;height:12px;font-size:.9rem;letter-spacing:1px}.vs-pagination-content.buttonsDotted .vs-pagination__button{width:12px;height:12px}.vs-pagination-content.buttonsDotted .vs-pagination__button.active{-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active{width:12px;height:12px;-webkit-box-shadow:0 2px 10px 0 rgba(17,18,20,.4);-webkit-box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);box-shadow:0 2px 10px 0 rgba(17,18,20,.4);box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active.move{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative}.vs-pagination__progress{width:calc(100% - 16px);height:3px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);position:absolute;bottom:-8px;border-radius:10px}.vs-pagination__progress .progress{width:0;background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;max-width:100%}.vs-pagination__slot{min-height:36px;display:block;display:-webkit-box;display:-ms-flexbox;display:flex}.vs-pagination__arrow,.vs-pagination__slot{min-width:36px;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination__arrow{width:auto;height:36px;border-radius:12px;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 2px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease;border:0}.vs-pagination__arrow:disabled{opacity:.4;pointer-events:none}.vs-pagination__arrow:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__arrow i{width:10px;height:10px;position:relative;display:block;margin-left:4px;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__arrow i:before{width:2px}.vs-pagination__arrow i:after{height:2px}.vs-pagination__arrow.next i{margin-left:-4px;-webkit-transform:rotate(135deg) scale(.8);transform:rotate(135deg) scale(.8)}.vs-pagination__active{position:absolute;left:50%;top:0;width:36px;height:36px;background:#111214;background:rgba(var(--vs-color),1);border-radius:12px;z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#fff;-webkit-box-shadow:0 5px 20px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 20px 0 rgba(17,18,20,.3);box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);cursor:default}.vs-pagination__active.move{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-pagination__dotted{width:36px;height:36px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.4rem;letter-spacing:2px;margin:0 2px;cursor:pointer}.vs-pagination__dotted:hover span.dotted{opacity:0;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted:hover .con-arrows{opacity:1;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover span.dotted{opacity:0;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover .con-arrows{opacity:1;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted span.dotted{margin-right:-2px;text-align:center}.vs-pagination__dotted.next .con-arrows{-webkit-transform:rotate(180deg);transform:rotate(180deg);margin-left:-5px}.vs-pagination__dotted .con-arrows{width:10px;height:10px;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:5px;opacity:0;-webkit-transition:all .1s ease;transition:all .1s ease}.vs-pagination__dotted .con-arrows i{width:10px;height:10px;position:relative;display:block;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__dotted .con-arrows i:before{width:2px}.vs-pagination__dotted .con-arrows i:after{height:2px}.vs-pagination__dotted .con-arrows i:last-child{position:absolute;top:0;margin-left:6px}.vs-pagination__button{width:36px;height:36px;border-radius:12px;padding:0;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0 2px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);position:relative;border:0}.vs-pagination__button.loading{border-radius:50%;opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button.loading:after{border-radius:50%;border:2px solid hsla(0,0%,100%,0);border-right-color:#111214;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s ease infinite;animation:loadingPagination .6s ease infinite}.vs-pagination__button.loading:after,.vs-pagination__button.loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-pagination__button.loading:before{border-radius:50%;border:2px dashed #111214;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s linear infinite;animation:loadingPagination .6s linear infinite}.vs-pagination__button.disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__button:active{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-table-content{--vs-color:var(--vs-primary);width:100%;border-radius:16px}.vs-table{width:100%;font-size:.9rem;margin:0;overflow:auto}.vs-table table{margin:0;border-collapse:collapse;width:100%;min-width:500px;border:0}.vs-table.striped .vs-table__tr:nth-child(2n){background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table_not-found{display:none;padding:20px;text-align:center;width:100%}.vs-table_not-found tr{text-align:center}.vs-table_not-found tr td{padding:20px;border:0}.vs-table__tbody:empty{display:none;background:#000}.vs-table__tbody:empty~.vs-table_not-found{display:table-row-group}.vs-table.isSelectedValue tr{cursor:pointer}.vs-table__footer{padding:8px 10px;border-radius:0 0 14px 14px}.vs-table__footer,.vs-table__header{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__header{width:100%;padding:10px;border-radius:14px 14px 0 0}.vs-table__header~.vs-table .vs-table__th:first-child,.vs-table__header~.vs-table .vs-table__th:last-child{border-radius:0}.vs-table__thead{width:100%}.vs-table__thead .vs-table__th{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__thead .vs-table__th:first-child{border-radius:14px 0 0 0}.vs-table__thead .vs-table__th:last-child{border-radius:0 14px 0 0}.isMultipleSelected .vs-table__tr .vs-table__td{border-radius:0!important}.vs-table__tr{padding:5px;border:0}.vs-table__tr.expand{cursor:pointer}.vs-table__tr.vs-change-color .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr.vs-change-color .vs-table__td:hover{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:first-of-type .vs-table__td:last-child{border-radius:0 0 15px 0}.vs-table__tr:first-of-type .vs-table__td:first-child{border-radius:0 0 0 15px}.vs-table__tr.isExpand:first-of-type .vs-table__td{border-radius:0}.vs-table__tr.isExpand:first-of-type .vs-table__td,.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td{background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:last-child{border-radius:0 15px 0 0}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:first-child{border-radius:15px 0 0 0}.vs-table__tr.isExpand:not(:first-of-type)+.vs-table__tr__expand td{border-radius:0 0 15px 15px!important}.vs-table__tr.selected .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr .vs-table__td{background:rgba(var(--vs-bg),.1);color:rgba(var(--vs-bg),1)}.vs-table__tr.vs-change-color:hover .vs-table__td{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:hover .vs-table__td{background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-table__tr__expand,.vs-table__tr__expand td{-webkit-transition:all .25s ease;transition:all .25s ease;border:0}.vs-table__tr__expand td{padding:0;background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr__expand td .vs-table__expand__td__content{overflow:hidden;display:block;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__tr__expand td .vs-table__expand__td__content__sub{padding:10px 15px;z-index:1;position:relative}.fade-expand-enter-active,.fade-expand-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.fade-expand-enter,.fade-expand-leave-to{opacity:0}.fade-expand-enter td .vs-table__expand__td__content,.fade-expand-leave-to td .vs-table__expand__td__content{height:0!important}.vs-table__th{padding:10px 12px;text-align:left;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem;border:0}.vs-table__th.sort .vs-table__th__content{pointer-events:none}.vs-table__th.sort:hover{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-table__th[data-sort-type=asc] .icon-sort-2{margin-top:-7px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=asc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=desc] .icon-sort-2{margin-top:-7px}.vs-table__th[data-sort-type=desc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important}.vs-table__th__content{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__th__content,.vs-table__th__content__icons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-table__th__content__icons{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:7px;-webkit-transform:scale(.8);transform:scale(.8)}.vs-table__th__content .vs-icon-arrow{position:relative;display:block}.vs-table__th__content .vs-icon-arrow.icon-sort-1{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vs-table__th__content .vs-icon-arrow.icon-sort-2{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.vs-table__td{padding:10px 12px;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem;border:0}.vs-table__td:last-child{border-radius:0 15px 15px 0}.vs-table__td:first-child{border-radius:15px 0 0 15px}.vs-table__td.isCheckbox{width:23px}.vs-table__td.isEdit{text-decoration:underline;cursor:pointer}.vs-navbar-content{--vs-color:var(--vs-background);position:absolute;z-index:9000;top:0;left:0;width:100%;border-radius:0 0 15px 15px;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-navbar-content.paddingScroll:not(.paddingScrollActive){padding-top:20px;padding-bottom:20px}.vs-navbar-content.paddingScroll:not(.paddingScrollActive) .vs-navbar__group__items{margin-bottom:-30px}.vs-navbar-content.vsNavbarSquare{border-radius:0}.vs-navbar-content.textWhite{color:#fff}.vs-navbar-content.textWhite .vs-navbar__item:before,.vs-navbar-content.textWhite .vs-navbar__line{background:#fff}.vs-navbar-content.fixed{position:fixed!important}.vs-navbar-content.shadow,.vs-navbar-content.shadowActive{-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px 0 rgba(0,0,0,.05);box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-navbar-content.hidden{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.vs-navbar{width:100%;position:relative;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:44px}.vs-navbar,.vs-navbar__left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-navbar__right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-navbar__center,.vs-navbar__right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-navbar__line{position:absolute;left:0;bottom:0;width:100px;background:#2c3e50;background:rgba(var(--vs-text),1);height:3px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__line.notTransition{-webkit-transition:none!important;transition:none!important}.vs-navbar__item{padding:10px 15px;margin:0;border:0;background:transparent;font-size:.85rem;opacity:.7;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;font-weight:700;color:inherit}.vs-navbar__item.active,.vs-navbar__item:hover{opacity:1}.vs-navbar__group{position:relative}.vs-navbar__group:hover .vs-navbar__group__item{opacity:1}.vs-navbar__group:hover .vs-navbar__group__items{opacity:1;visibility:visible;-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-navbar__group__item{padding:10px 15px;background:transparent;color:inherit;font-weight:700;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;opacity:.7;border:0}.vs-navbar__group__items{position:absolute;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:-12px;-webkit-transform:translateY(90%);transform:translateY(90%);background:#111214;background:rgba(var(--vs-color),1);border-radius:5px 18px 18px 18px;padding:10px;min-width:160px;opacity:0;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;color:inherit;visibility:hidden}.vs-navbar__group__items:after{content:\"\";left:0;top:-13px;background:transparent;width:100%;height:14px;position:absolute;z-index:-1}.vs-navbar__group__items .vs-navbar__item{text-align:left;width:100%;position:relative;padding:5px 10px}.vs-navbar__group__items .vs-navbar__item:before{content:\"\";left:0;top:0;width:4px;height:4px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;border-radius:50%;top:calc(50% - 2px);opacity:0;-webkit-transform:translate(-10px);transform:translate(-10px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__group__items .vs-navbar__item.active:before{opacity:1;-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content{--vs-color:var(--vs-primary)}@-webkit-keyframes delayOpacity{0%{opacity:0}to{opacity:1}}@keyframes delayOpacity{0%{opacity:0}to{opacity:1}}.vs-sidebar-content{position:fixed;left:0;top:0;width:calc(100% - 50px);max-width:260px;height:100vh;border-radius:0 30px 30px 0;color:#2c3e50;color:rgba(var(--vs-text),1);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 25px 0 rgba(0,0,0,.05);box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:21000;background:#fff;background:rgba(var(--vs-background),1);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-110%);transform:translate(-110%)}.vs-sidebar-content.right{left:auto;right:0;-webkit-transform:translate(110%);transform:translate(110%)}.vs-sidebar-content.right.open{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content.right.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip{opacity:1;left:auto!important;right:60px!important}.vs-sidebar-content.absolute{position:absolute!important;z-index:9001;height:100%}.vs-sidebar-content.relative{position:relative!important;z-index:9001;height:100%}.vs-sidebar-content.textWhite .vs-sidebar__group__content:after{background:hsla(0,0%,100%,.4)}.vs-sidebar-content.textWhite .vs-sidebar__item:after{background:#fff!important}.vs-sidebar-content.textWhite .vs-sidebar__item.active{color:#fff!important}.vs-sidebar-content.notShadow{-webkit-box-shadow:none!important;box-shadow:none!important}.vs-sidebar-content.square{border-radius:0}.vs-sidebar-content.notLineActive .vs-sidebar .vs-sidebar__item:after{display:none}.vs-sidebar-content.open{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content.reduce .vs-sidebar__footer{padding:10px 0}.vs-sidebar-content.reduce .vs-sidebar__header .vs-avatar-content{width:44px!important;height:44px!important}.vs-sidebar-content.reduce .vs-sidebar__logo img{width:80%}.vs-sidebar-content.reduce .vs-sidebar__item{padding-left:16px!important;min-height:47px}.vs-sidebar-content.reduce .vs-sidebar__item:not(.hasIcon) .vs-sidebar__item__text{font-size:.5rem}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon .vs-sidebar__item__text{-webkit-transform:translate(-10px);transform:translate(-10px);margin-left:-50px}.vs-sidebar-content.reduce .vs-sidebar__item__arrow{position:absolute;left:36px;top:10px;-webkit-animation:delayOpacity .6s ease;animation:delayOpacity .6s ease;width:5px;height:5px}.vs-sidebar-content.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip{opacity:1;left:60px}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon{padding:0!important}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon:after{left:-6px}.vs-sidebar-content .vs-sidebar__logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:25px 0;min-height:80px}.vs-sidebar-content .vs-sidebar__logo img{max-width:120px;max-height:35px}.vs-sidebar-content .vs-sidebar{overflow-x:hidden;width:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-sidebar-content .vs-sidebar::-webkit-scrollbar{width:0}.vs-sidebar-content .vs-sidebar__header{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar-content .vs-sidebar__footer,.vs-sidebar-content .vs-sidebar__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:10px}.vs-sidebar-content .vs-sidebar__footer{justify-self:flex-start}.vs-sidebar__item{width:100%;padding:15px 16px 14px;text-align:left;background:transparent;font-size:1rem;font-weight:700;opacity:.7;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;color:#2c3e50;color:rgba(var(--vs-text),1);border:0}.vs-sidebar__item.hasIcon{padding:0}.vs-sidebar__item.hasIcon.active{padding-left:8px}.vs-sidebar__item.hasIcon:hover{padding-left:8px;opacity:1}.vs-sidebar__item:after{content:\"\";position:absolute;left:-4px;top:0;width:10px;height:100%;background:#111214;background:rgba(var(--vs-color),1);border-radius:0 20px 20px 0;-webkit-transform:translate(-6px);transform:translate(-6px);-webkit-transition:all .25s ease;transition:all .25s ease;z-index:60}.vs-sidebar__item.active:not(.hasIcon){padding-left:25px}.vs-sidebar__item.active{opacity:1;color:#111214;color:rgba(var(--vs-color),1)}.vs-sidebar__item.active:after{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar__item__icon{min-width:50px;height:47px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.2rem;z-index:50;background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__item:hover:not(.hasIcon){opacity:1;padding-left:25px}.vs-sidebar__item__text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;z-index:10;font-size:.9rem}.vs-sidebar__item__arrow,.vs-sidebar__item__text{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-sidebar__item__arrow{width:7px;height:7px;position:relative;justify-self:flex-end;margin-left:auto;margin-right:15px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important;z-index:80}.vs-sidebar__item__arrow .vs-icon-arrow:before{width:2px}.vs-sidebar__item__arrow .vs-icon-arrow:after{height:2px}.vs-sidebar__item__text-tooltip{position:fixed;left:50px;opacity:0;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.85rem;white-space:nowrap}.vs-sidebar__group{padding:0;width:100%;min-width:260px;position:relative}.vs-sidebar__group.open .vs-sidebar__group__content:after{-webkit-transform:translate(0);transform:translate(0);opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item{opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item__arrow{-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-sidebar__group__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar__group__content{overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease;position:relative}.vs-sidebar__group__content:after{content:\"\";position:absolute;left:0;top:0;background:rgba(17,18,20,.3);background:rgba(var(--vs-color),.3);width:4px;height:100%;opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-100%);transform:translate(-100%);border-radius:0 10px 10px 0;z-index:60}.vs-sidebar__group__content .vs-sidebar__item{background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__group>.vs-sidebar__group__header .vs-sidebar__item:hover{padding-left:0}.vs-card-content{--vs-color:var(--vs-primary)}.vs-card-content.type-5 .vs-card{-webkit-box-shadow:none;box-shadow:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-card-content.type-5 .vs-card:hover .vs-card__interactions{bottom:50px}.vs-card-content.type-5 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 30px 0 rgba(0,0,0,.05);box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-card-content.type-5 .vs-card:hover .vs-card__img{border-radius:6px 40px 6px 40px}.vs-card-content.type-5 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-card-content.type-5 .vs-card__img{border-radius:6px 20px 6px 20px}.vs-card-content.type-5 .vs-card__interactions{bottom:6px;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:20}.vs-card-content.type-5 .vs-card__text{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:6px 20px 6px 20px;margin-top:-50px;z-index:10;position:relative;width:calc(100% - 30px);padding-top:10px;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translateY(25px);transform:translateY(25px);opacity:0}.vs-card-content.type-4 .vs-card{-webkit-box-shadow:none;box-shadow:none;max-width:300px}.vs-card-content.type-4 .vs-card:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-card-content.type-4 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1);transform:scale(1)}.vs-card-content.type-4 .vs-card:hover .vs-card__text{padding-top:15px;padding-bottom:25px}.vs-card-content.type-4 .vs-card__img{-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-height:600px}.vs-card-content.type-4 .vs-card__img img{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-card-content.type-4 .vs-card__interactions{top:0;bottom:auto}.vs-card-content.type-4 .vs-card__text{background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);position:absolute;bottom:0;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border-radius:0 0 20px 20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-4 .vs-card__text p{opacity:1}.vs-card-content.type-3 .vs-card{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:400px}.vs-card-content.type-3 .vs-card:hover{-webkit-transform:scale(1.04);transform:scale(1.04)}.vs-card-content.type-3 .vs-card__img img{min-width:200px}.vs-card-content.type-3 .vs-card__text{padding-top:15px}.vs-card-content.type-3 .vs-card__title h2,.vs-card-content.type-3 .vs-card__title h3,.vs-card-content.type-3 .vs-card__title h4,.vs-card-content.type-3 .vs-card__title h5,.vs-card-content.type-3 .vs-card__title h6{padding:0}.vs-card-content.type-2 .vs-card{-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.vs-card-content.type-2 .vs-card:hover{-webkit-transform:scale(.95);transform:scale(.95)}.vs-card-content.type-2 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card-content.type-2 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;color:#fff}.vs-card-content.type-2 .vs-card__interactions{right:0;top:0;left:auto;bottom:auto;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.vs-card-content.type-2 .vs-card__title{position:relative;color:inherit;padding:0}.vs-card-content.type-2 .vs-card__title h2,.vs-card-content.type-2 .vs-card__title h3,.vs-card-content.type-2 .vs-card__title h4,.vs-card-content.type-2 .vs-card__title h5,.vs-card-content.type-2 .vs-card__title h6{padding:0 0 5px}.vs-card-content.type-2 .vs-card__text{position:absolute;bottom:0;background:hsla(0,0%,100%,.9);background:rgba(var(--vs-background),.9);padding-top:30px;border-radiu:0 0 20px 20px;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5)));background:linear-gradient(180deg,transparent,rgba(0,0,0,.5));color:transparent;font-size:.9rem;-webkit-transform:translateY(45%);transform:translateY(45%);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-2 .vs-card__text p{opacity:1}.vs-card-content.type-1 .vs-card:hover{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-card-content.type-1 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);width:100%;max-width:350px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer;position:relative}.vs-card__text{font-size:.85rem;padding:0 15px 15px}.vs-card__text p{font-size:inherit;margin:0;opacity:.8}.vs-card__title{padding-top:10px;padding-bottom:5px}.vs-card__title h2,.vs-card__title h3,.vs-card__title h4,.vs-card__title h5,.vs-card__title h6{padding:0;margin:0;font-size:1.1rem}.vs-card__interactions{position:absolute;bottom:0;padding:5px 10px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;left:0}.vs-card__img,.vs-card__interactions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__img{position:relative;max-height:250px;overflow:hidden;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-card__img,.vs-card__img img{border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card__img img{width:100%;display:block}.vs-card__group{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__group-space{min-width:20px;position:relative;height:20px}.vs-card__group .vs-card__group-cards{position:relative;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;overflow-x:auto;scroll-behavior:smooth;padding-top:20px;padding-bottom:20px;border-radius:20px}.vs-card__group .vs-card__group-cards .vs-card-content{min-width:350px;margin-left:20px}.vs-card__group .vs-card__group-prev{z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent;border:0}.vs-card__group .vs-card__group-prev .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vs-card__group .vs-card__group-prev .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-prev .vs-icon-arrow:after{height:2px}.vs-card__group .vs-card__group-next{border:0;z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent}.vs-card__group .vs-card__group-next .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.vs-card__group .vs-card__group-next .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-next .vs-icon-arrow:after{height:2px}.loading-enter-active,.loading-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.loading-enter,.loading-leave-to{opacity:0}.vs-loading{--vs-color:var(--vs-primary);--vs-background:255,255,255;--vs-opacity:0.6;position:fixed;top:0;left:0;width:100%;height:100%;z-index:100000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(255,255,255,var(--vs-opacity));background:rgba(var(--vs-background),var(--vs-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;padding:20px;border-radius:inherit}.vs-loading--target{position:absolute}.vs-loading__load{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-loading__load__text{font-size:.75em;margin:7px}.vs-loading__load__percent,.vs-loading__load__text{font-weight:700;color:#111214;color:rgba(var(--vs-color),1)}.vs-loading__load__percent{position:relative;font-size:.65rem;margin-top:1px;z-index:200}.vs-loading__load__animation{width:40px;height:40px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading__progress{width:100%;position:absolute;top:0;left:0;height:4px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading__progress__bar{background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:0 10px 10px 0}.vs-loading--default .vs-loading__load__animation{border-radius:50%}.vs-loading--default .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s ease infinite;animation:rotate .8s ease infinite;top:0}.vs-loading--default .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s linear infinite;animation:rotate .8s linear infinite;opacity:.2}.vs-loading--default .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-loading--waves .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--waves .vs-loading__load__animation__1{-webkit-animation:waves .7s ease infinite;animation:waves .7s ease infinite}.vs-loading--waves .vs-loading__load__animation__1,.vs-loading--waves .vs-loading__load__animation__2{width:0;background:transparent;height:0;position:absolute;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}.vs-loading--waves .vs-loading__load__animation__2{-webkit-animation:waves 1.4s linear infinite;animation:waves 1.4s linear infinite}.vs-loading--waves .vs-loading__load__animation__3{width:0;background:transparent;height:0;position:absolute;-webkit-animation:waves 1.75s ease infinite;animation:waves 1.75s ease infinite;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}@-webkit-keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}@keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}.vs-loading--corners .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--corners .vs-loading__load__animation__1{width:100%;background:transparent;height:100%;position:absolute;-webkit-animation:corners 1s ease infinite;animation:corners 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-loading--corners .vs-loading__load__animation__2,.vs-loading--corners .vs-loading__load__animation__3{display:none}@-webkit-keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}@keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}.vs-loading--border .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.vs-loading--border .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0}.vs-loading--border .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear .2s infinite;animation:rotate 1s linear .2s infinite}.vs-loading--border .vs-loading__load__animation__3{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;-webkit-animation:rotate 1s linear .4s infinite;animation:rotate 1s linear .4s infinite;opacity:.2}.vs-loading--points .vs-loading__load__percent{position:absolute;top:-10px}.vs-loading--points .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto}.vs-loading--points .vs-loading__load__animation__1{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease infinite;animation:points .75s ease infinite}.vs-loading--points .vs-loading__load__animation__2{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .25s infinite;animation:points .75s ease .25s infinite}.vs-loading--points .vs-loading__load__animation__3{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .5s infinite;animation:points .75s ease .5s infinite}@-webkit-keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}.vs-loading--square .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--square .vs-loading__load__animation__1{-webkit-animation:rotateSquare 4s ease infinite;animation:rotateSquare 4s ease infinite}.vs-loading--square .vs-loading__load__animation__1,.vs-loading--square .vs-loading__load__animation__2{position:absolute;width:100%;height:100%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-radius:inherit;top:0}.vs-loading--square .vs-loading__load__animation__2{animation:rotateSquare 4s ease infinite reverse;background:#fff;background:rgba(var(--vs-background),1)}.vs-loading--square .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.vs-loading--gradient .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--gradient .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:0;border-radius:inherit;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0;background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,hsla(0,0%,100%,0)),to(#111214));background:linear-gradient(0deg,hsla(0,0%,100%,0) 33%,#111214);background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,rgba(var(--vs-background),0)),to(rgba(var(--vs-color),1)));background:linear-gradient(0deg,rgba(var(--vs-background),0) 33%,rgba(var(--vs-color),1));border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__2{top:2px;position:absolute;width:calc(100% - 4px);height:calc(100% - 4px);border:0;border-radius:inherit;background:#fff;background:rgba(var(--vs-background),1);border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__3{display:none}.vs-loading--rectangle .vs-loading__load__percent{position:absolute;bottom:-2px}.vs-loading--rectangle .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--rectangle .vs-loading__load__animation__1{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease infinite;animation:rectangle 1s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--rectangle .vs-loading__load__animation__2{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease-out infinite;animation:rectangle 1s ease-out infinite;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading--rectangle .vs-loading__load__animation__3{display:none}@-webkit-keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}@keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}.vs-loading--circles .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--circles .vs-loading__load__animation__1{position:absolute;width:40px;height:40px;-webkit-animation:rotate 1s ease infinite;animation:rotate 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__2{position:absolute;width:50px;height:50px;-webkit-animation:rotate 1s ease-in-out infinite;animation:rotate 1s ease-in-out infinite;border-radius:50%;border:2px dashed #111214;border:2px dashed rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__3{position:absolute;width:60px;height:60px;animation:rotate 1s linear infinite reverse;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--square-rotate .vs-loading__load__percent{position:absolute;bottom:30px}.vs-loading--square-rotate .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--square-rotate .vs-loading__load__animation__1{position:absolute;width:25px;height:25px;-webkit-animation:squareRotate 3s ease infinite;animation:squareRotate 3s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--square-rotate .vs-loading__load__animation__2,.vs-loading--square-rotate .vs-loading__load__animation__3{display:none}@-webkit-keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}.vs-loading--scale .vs-loading__load__percent{position:absolute;bottom:40px}.vs-loading--scale .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px;height:40px}.vs-loading--scale .vs-loading__load__animation__1{-webkit-animation:scale .8s ease infinite;animation:scale .8s ease infinite}.vs-loading--scale .vs-loading__load__animation__1,.vs-loading--scale .vs-loading__load__animation__2{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;border-radius:5px}.vs-loading--scale .vs-loading__load__animation__2{-webkit-animation:scale .8s ease .2s infinite;animation:scale .8s ease .2s infinite}.vs-loading--scale .vs-loading__load__animation__3{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;-webkit-animation:scale .8s ease .4s infinite;animation:scale .8s ease .4s infinite;border-radius:5px}@-webkit-keyframes scale{50%{height:25px}0%{height:5px}}@keyframes scale{50%{height:25px}0%{height:5px}}.notification-enter-active{-webkit-transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s}.notification-leave-to{max-height:0!important;padding-top:0!important;padding-bottom:0!important;margin-top:0!important;margin-bottom:0!important;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;opacity:0!important}.notification-enter,.notification-leave-to{-webkit-clip-path:circle(0 at 80% 35%)!important;clip-path:circle(0 at 80% 35%)!important}.notification-enter{-webkit-transform:translate(25%);transform:translate(25%)}.notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(10%);transform:translate(10%)}.vs-notification-parent{position:fixed;right:0;bottom:0;z-index:200000;-webkit-transition:all 25s ease;transition:all 25s ease;padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-center,.vs-notification-parent--top-right{bottom:auto;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.vs-notification-parent--top-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--top-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--top-center .vs-notification--sticky:last-child{border-radius:0 0 20px 20px;margin-top:-10px}.vs-notification-parent--top-center .vs-notification{-webkit-clip-path:circle(120% at 50% 0);clip-path:circle(120% at 50% 0);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--top-center .vs-notification.vs-notification--border{border:3px solid transparent;border-top:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-center .notification-enter{-webkit-transform:translateY(-25%);transform:translateY(-25%);-webkit-clip-path:circle(0 at 50% 0)!important;clip-path:circle(0 at 50% 0)!important}.vs-notification-parent--top-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}.vs-notification-parent--bottom-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--bottom-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--bottom-center .vs-notification--sticky:last-child{border-radius:20px 20px 0 0;margin-bottom:-10px}.vs-notification-parent--bottom-center .vs-notification{-webkit-clip-path:circle(120% at 50% 100%);clip-path:circle(120% at 50% 100%);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--bottom-center .vs-notification.vs-notification--border{border:3px solid transparent;border-bottom:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-center .notification-enter{-webkit-transform:translateY(25%);transform:translateY(25%);-webkit-clip-path:circle(0 at 50% 100%)!important;clip-path:circle(0 at 50% 100%)!important}.vs-notification-parent--bottom-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(10%);transform:translateY(10%)}.vs-notification-parent--top-left{bottom:auto;top:0;left:0;right:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--top-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--top-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--top-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification-parent--bottom-left{left:0;right:auto}.vs-notification-parent--bottom-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--bottom-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--bottom-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--bottom-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification{--vs-color:var(--vs-background);--vs-border:var(--vs-background);--vs-opacity:0.6;position:relative;max-width:340px;width:100%;height:auto;border-radius:20px;-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 30px -5px rgba(0,0,0,.05);box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));overflow:hidden;-webkit-clip-path:circle(145% at 100% 50%);clip-path:circle(145% at 100% 50%);background:#111214;background:rgba(var(--vs-color),1);color:#2c3e50;color:rgba(var(--vs-text),1);margin:3px 10px;-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s}.vs-notification:hover:not(.vs-notification--flat){-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-notification--notPadding{padding:0!important}.vs-notification.vs-notification--icon{padding-left:50px!important}.vs-notification.vs-notification--loading{width:100px!important;max-height:100px!important;min-height:100px!important;padding:0!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification--width-auto{width:auto;max-width:none}.vs-notification--width-all{max-width:calc(100vw - 50px);width:calc(100vw - 50px)}.vs-notification--square{border-radius:0!important}.vs-notification--sticky{margin-right:0;margin-bottom:0;border-radius:20px 0 0 20px}.vs-notification--flat{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));background:#fff;background:rgba(var(--vs-background),1);color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat:hover:after{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-notification--flat .vs-notification__progress{background:#111214;background:rgba(var(--vs-color),1)}.vs-notification--flat .vs-notification__close{--vs-color:inherit}.vs-notification--flat .vs-notification__content{color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat.vs-notification--border{border:0 solid transparent!important;border-right:3px solid rgba(var(--vs-border),1)!important}.vs-notification--flat:after{content:\"\";background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);width:100%;height:100%;border-radius:inherit;position:absolute;top:0;left:0;z-index:-1;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification.vs-notification--onClick{cursor:pointer}.vs-notification.vs-notification--color:not(.vs-notification--flat){color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__progress{background:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__close{--vs-color:255,255,255}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:after{border:2px solid transparent;border-bottom-color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:before{border:2px solid transparent;border-bottom:2px dashed #fff}.vs-notification.vs-notification--border{border:3px solid transparent;border-right:3px solid rgba(var(--vs-border),1)}.vs-notification__progress{width:0;height:3px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;bottom:0;left:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification__loading{width:50px;height:50px;border-radius:50%;position:absolute}.vs-notification__loading:after{border:2px solid #2c3e50;border:2px solid rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s ease infinite;animation:loadingNoti .8s ease infinite}.vs-notification__loading:after,.vs-notification__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-notification__loading:before{border:2px dashed #2c3e50;border:2px dashed rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s linear infinite;animation:loadingNoti .8s linear infinite;opacity:.2}.vs-notification__close{--vs-color:var(--vs-text);position:absolute;border:0;background:transparent;top:2px;right:2px;-webkit-transform:scale(.75);transform:scale(.75);padding:0}.vs-notification__icon{position:absolute;top:calc(50% - 22px);background:transparent;width:45px;height:45px;left:2px;border-radius:0 35% 35% 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification__icon i{font-size:1.2rem}.vs-notification__content{position:relative;width:auto;height:auto;-webkit-transition:all .25s ease .2s;transition:all .25s ease .2s;opacity:1}.vs-notification__content__text{width:100%}.vs-notification__content__text p{margin:0;padding:0;font-size:.75rem;line-height:1rem}.vs-notification__content__header{width:100%;margin:0;padding:0 0 6px}.vs-notification__content__header h4{width:100%;margin:0;padding:0;font-size:.9rem}.darken .vs-notification--dark{color:#fff!important}.darken .vs-notification--dark .vs-notification__close{--vs-color:255,255,255!important}.darken .vs-notification--dark h4,.darken .vs-notification--dark p{color:#fff!important}@-webkit-keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes progressNoti{0%{width:0}to{width:100%}}@keyframes progressNoti{0%{width:0}to{width:100%}}@media (max-width:600px){.vs-notification{margin:3px 0!important;border-radius:0!important;width:100%!important;max-width:100%!important;min-width:100%!important}.vs-notification:hover{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-notification:last-child{margin-bottom:0!important}.vs-notification-parent{padding:0;width:100%!important;max-width:100%!important}.vs-notification-parent .vs-notification--sticky{margin-bottom:0!important}.vs-notification-parent.vs-notification-parent--top-center .vs-notification:last-child{margin-bottom:3px;margin-top:0!important}}.vs-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.vs-col,.vs-row{width:100%;position:relative}.vs-col--w-1{width:8.33%}.vs-col--w-2{width:16.66%}.vs-col--w-3{width:25%}.vs-col--w-4{width:33.33%}.vs-col--w-5{width:41.66%}.vs-col--w-6{width:50%}.vs-col--w-7{width:58.33%}.vs-col--w-8{width:66.66%}.vs-col--w-9{width:75%}.vs-col--w-10{width:83.33%}.vs-col--w-11{width:91.66%}.vs-col--w-12{width:100%}.vs-col--offset-1{margin-left:8.33%}.vs-col--offset-2{margin-left:16.66%}.vs-col--offset-3{margin-left:25%}.vs-col--offset-4{margin-left:33.33%}.vs-col--offset-5{margin-left:41.66%}.vs-col--offset-6{margin-left:50%}.vs-col--offset-7{margin-left:58.33%}.vs-col--offset-8{margin-left:66.66%}.vs-col--offset-9{margin-left:75%}.vs-col--offset-10{margin-left:83.33%}.vs-col--offset-11{margin-left:91.66%}.vs-col--offset-12{margin-left:100%}.vs-col--lg-1{width:8.33%}.vs-col--lg-2{width:16.66%}.vs-col--lg-3{width:25%}.vs-col--lg-4{width:33.33%}.vs-col--lg-5{width:41.66%}.vs-col--lg-6{width:50%}.vs-col--lg-7{width:58.33%}.vs-col--lg-8{width:66.66%}.vs-col--lg-9{width:75%}.vs-col--lg-10{width:83.33%}.vs-col--lg-11{width:91.66%}.vs-col--lg-12{width:100%}@media (max-width:900px){.vs-col--sm-1{width:8.33%}.vs-col--sm-2{width:16.66%}.vs-col--sm-3{width:25%}.vs-col--sm-4{width:33.33%}.vs-col--sm-5{width:41.66%}.vs-col--sm-6{width:50%}.vs-col--sm-7{width:58.33%}.vs-col--sm-8{width:66.66%}.vs-col--sm-9{width:75%}.vs-col--sm-10{width:83.33%}.vs-col--sm-11{width:91.66%}.vs-col--sm-12{width:100%}}@media (max-width:600px){.vs-col--xs-1{width:8.33%}.vs-col--xs-2{width:16.66%}.vs-col--xs-3{width:25%}.vs-col--xs-4{width:33.33%}.vs-col--xs-5{width:41.66%}.vs-col--xs-6{width:50%}.vs-col--xs-7{width:58.33%}.vs-col--xs-8{width:66.66%}.vs-col--xs-9{width:75%}.vs-col--xs-10{width:83.33%}.vs-col--xs-11{width:91.66%}.vs-col--xs-12{width:100%}}:root{--vs-primary:25,91,255;--vs-warn:255,186,0;--vs-danger:255,71,87;--vs-success:70,201,58;--vs-dark:30,30,30;--vs-light:244,247,248;--vs-color:17,18,20;--vs-facebook:59,89,153;--vs-twitter:29,161,242;--vs-youtube:255,0,0;--vs-pinterest:189,8,28;--vs-linkedin:0,119,181;--vs-snapchat:255,252,0;--vs-whatsapp:37,211,102;--vs-tumblr:54,70,93;--vs-reddit:255,69,0;--vs-spotify:30,215,96;--vs-amazon:255,153,0;--vs-medium:2,184,117;--vs-vimeo:26,183,234;--vs-skype:0,175,240;--vs-dribbble:234,76,137;--vs-slack:74,21,75;--vs-yahoo:67,2,151;--vs-twitch:100,65,164;--vs-discord:114,137,218;--vs-telegram:0,136,204;--vs-google-plus:219,68,55;--vs-messenger:0,132,255;--vs-background:255,255,255;--vs-text:44,62,80;--vs-gray-1:249,252,253;--vs-gray-2:244,247,248;--vs-gray-3:240,243,244;--vs-gray-4:230,233,234}[class*=\"--default\"],[class*=\"--primary\"]{--vs-color:var(--vs-primary)}[class*=\"--danger\"]{--vs-color:var(--vs-danger)}[class*=\"--success\"]{--vs-color:var(--vs-success)}[class*=\"--dark\"]{--vs-color:var(--vs-dark)}[class*=\"--warn\"]{--vs-color:var(--vs-warn)}:root{--vs-shadow-opacity:0.05;--vs-radius:20px;--vs-zindex-1:100000;--vs-zindex-2:99000;--vs-zindex-3:98000;--vs-zindex-4:97000;--vs-background-opacity:0.2}[vs-theme=dark]{--vs-background:30,32,35;--vs-text:255,255,255;--vs-gray-1:24,25,28;--vs-gray-2:20,20,23;--vs-gray-3:15,16,19;--vs-gray-4:10,11,14;--vs-shadow-opacity:0.3;--vs-dark:0,0,0;--vs-background-opacity:0.6}[vs-theme=dark] .vs-pagination-content.vs-component-dark .vs-pagination__active{--vs-color:255,255,255;color:#f0f3f4;color:rgba(var(--vs-gray-3),1)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent:hover:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),var(--vs-background-opacity))}[vs-theme=dark] .vs-ripple,[vs-theme=dark] .vs-ripple-content,[vs-theme=dark] .vs-ripple-invert{--vs-color:0,0,0}[vs-theme=dark] .vs-loading{--vs-background:0,0,0}[vs-theme=dark] .vs-input-parent--state-dark{--vs-dark:255,255,255!important}[vs-theme=dark] .vs-input-parent--state-dark .vs-input{background:#000!important}[vs-theme=dark] .vs-component-dark{--vs-color:0,0,0!important}[vs-theme=dark] .vs-component-dark .vs-avatar{color:#fff!important}[vs-theme=dark] .vs-component-dark.vs-alert{--vs-color:0,0,0!important;background:#111214!important;background:rgba(var(--vs-color),1)!important;color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}button{cursor:pointer;outline:none}[disabled]{opacity:.6}input{outline:none}a,button,input,select,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}[class*=vs-]{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;list-style:none}.vs-ripple-content{--vs-color:inherit;width:100px;height:100px;position:absolute;width:100%;pointer-events:none;overflow:hidden;height:100%;top:0;right:0;border-radius:inherit;z-index:-1}.vs-ripple-content .vs-ripple{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background:radial-gradient(circle,rgba(17,18,20,.05),rgba(17,18,20,.6));background:radial-gradient(circle,rgba(var(--vs-color),.05),rgba(var(--vs-color),.6))}.vs-ripple-content .vs-ripple--solid{background:#111214;background:rgba(var(--vs-color),1);opacity:1}.vs-ripple-content .vs-ripple-invert{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background-image:radial-gradient(circle,rgba(17,18,20,.5),rgba(17,18,20,0));background-image:radial-gradient(circle,rgba(var(--vs-color),.5),rgba(var(--vs-color),0))}.vs-ripple-content .vs-ripple-cut-1{-webkit-transform:translate(-100%,-50%) skew(20deg);transform:translate(-100%,-50%) skew(20deg);background-image:-webkit-gradient(linear,right top,left top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(270deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-ripple-content .vs-ripple-cut-1,.vs-ripple-content .vs-ripple-cut-2{width:0;height:0;opacity:0;position:absolute;-webkit-transition:all .6s ease;transition:all .6s ease}.vs-ripple-content .vs-ripple-cut-2{-webkit-transform:translateY(-50%) skew(20deg);transform:translateY(-50%) skew(20deg);background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-remove-transition *,.vs-remove-transition :after,.vs-remove-transition :before{-webkit-transition:all 0s!important;transition:all 0s!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("5aef43d4", content, true)

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bucomaxilofacial .implantodontia{display:grid;grid-gap:.08rem}.v-expansion-panels{border-radius:12px;box-shadow:none}.v-expansion-panel{border-radius:12px}.v-expansion-panel-header{font-size:.95rem;border-radius:12px;font-family:Hellix Normal;text-align:left}.v-expansion-panel-content{border-radius:12px;font-family:Hellix Normal;line-height:1.3rem}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_style_index_0_id_9d0f973c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_style_index_0_id_9d0f973c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_style_index_0_id_9d0f973c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_style_index_0_id_9d0f973c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_style_index_0_id_9d0f973c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-9d0f973c]{margin:0 auto;max-width:1200px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0ca54476_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0ca54476_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0ca54476_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0ca54476_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0ca54476_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".TextFooter[data-v-0ca54476]{margin:2rem 0}.Footer[data-v-0ca54476]{position:relative;bottom:0;width:100%;height:40rem;background-color:#595657}@media(max-width:600px){.Footer[data-v-0ca54476]{height:40rem}.Footer .TitleFooter[data-v-0ca54476]{margin-top:1rem}}.Footer .container[data-v-0ca54476]{display:grid;height:100%;grid-template-columns:1fr;justify-items:start;align-items:center;grid-template-rows:1fr auto}.Footer .container p[data-v-0ca54476]{color:#fff}.TitleFooter[data-v-0ca54476]{font-family:Hellix Bold}h1[data-v-0ca54476]{display:grid;justify-content:start;margin-top:0;margin-bottom:1rem}h1[data-v-0ca54476],p[data-v-0ca54476]{color:#fff}p[data-v-0ca54476]{margin-bottom:2rem;font-family:Hellix normal}.ButtonsLayout[data-v-0ca54476]{display:grid;grid-auto-flow:column;grid-gap:1rem;grid-template-columns:-webkit-max-content;grid-template-columns:max-content}.IconsLayout[data-v-0ca54476]{display:grid;grid-auto-flow:column;grid-template-columns:repeat(4,minmax(10px,3.5rem));justify-items:start;margin:2rem 0}#contact[data-v-0ca54476],#location[data-v-0ca54476]{width:1.2rem}img[data-v-0ca54476]{width:2.5rem;height:2.5rem}.contactLocation[data-v-0ca54476]{display:grid;grid-auto-flow:dense;grid-gap:1.5rem;margin:2.5rem 0}.contact[data-v-0ca54476],.location[data-v-0ca54476]{display:grid;grid-auto-flow:column;grid-template-columns:-webkit-max-content;grid-template-columns:max-content;grid-gap:.8rem;align-items:center}.Copy[data-v-0ca54476]{font-size:.9rem;color:#9d9d9d;bottom:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOla_vue_vue_type_style_index_0_id_3d5395ee_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOla_vue_vue_type_style_index_0_id_3d5395ee_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOla_vue_vue_type_style_index_0_id_3d5395ee_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOla_vue_vue_type_style_index_0_id_3d5395ee_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOla_vue_vue_type_style_index_0_id_3d5395ee_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#OlaText{color:#fff;font-family:Hellix Medium;font-size:1rem;font-weight:medium;text-decoration:none}#vs-ola{background:linear-gradient(90deg,#378799,#52adc1);width:8rem;height:2.3rem;border-radius:.6rem;border-style:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_style_index_0_id_540b6dec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_style_index_0_id_540b6dec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_style_index_0_id_540b6dec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_style_index_0_id_540b6dec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_style_index_0_id_540b6dec_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-540b6dec]{width:70%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_1957be6b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_1957be6b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_1957be6b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_1957be6b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_1957be6b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-1957be6b]{width:70%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Linkdl_vue_vue_type_style_index_0_id_2fce7a10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Linkdl_vue_vue_type_style_index_0_id_2fce7a10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Linkdl_vue_vue_type_style_index_0_id_2fce7a10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Linkdl_vue_vue_type_style_index_0_id_2fce7a10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Linkdl_vue_vue_type_style_index_0_id_2fce7a10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-2fce7a10]{width:70%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facebook_vue_vue_type_style_index_0_id_71e5161a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facebook_vue_vue_type_style_index_0_id_71e5161a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facebook_vue_vue_type_style_index_0_id_71e5161a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facebook_vue_vue_type_style_index_0_id_71e5161a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facebook_vue_vue_type_style_index_0_id_71e5161a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-71e5161a]{width:70%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("2840f874", content, true)

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes v-shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}@keyframes v-shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}.v-application .black{background-color:#000!important;border-color:#000!important}.v-application .black--text{color:#000!important;caret-color:#000!important}.v-application .white{background-color:#fff!important;border-color:#fff!important}.v-application .white--text{color:#fff!important;caret-color:#fff!important}.v-application .transparent{background-color:transparent!important;border-color:transparent!important}.v-application .transparent--text{color:transparent!important;caret-color:transparent!important}.v-application .red{background-color:#f44336!important;border-color:#f44336!important}.v-application .red--text{color:#f44336!important;caret-color:#f44336!important}.v-application .red.lighten-5{background-color:#ffebee!important;border-color:#ffebee!important}.v-application .red--text.text--lighten-5{color:#ffebee!important;caret-color:#ffebee!important}.v-application .red.lighten-4{background-color:#ffcdd2!important;border-color:#ffcdd2!important}.v-application .red--text.text--lighten-4{color:#ffcdd2!important;caret-color:#ffcdd2!important}.v-application .red.lighten-3{background-color:#ef9a9a!important;border-color:#ef9a9a!important}.v-application .red--text.text--lighten-3{color:#ef9a9a!important;caret-color:#ef9a9a!important}.v-application .red.lighten-2{background-color:#e57373!important;border-color:#e57373!important}.v-application .red--text.text--lighten-2{color:#e57373!important;caret-color:#e57373!important}.v-application .red.lighten-1{background-color:#ef5350!important;border-color:#ef5350!important}.v-application .red--text.text--lighten-1{color:#ef5350!important;caret-color:#ef5350!important}.v-application .red.darken-1{background-color:#e53935!important;border-color:#e53935!important}.v-application .red--text.text--darken-1{color:#e53935!important;caret-color:#e53935!important}.v-application .red.darken-2{background-color:#d32f2f!important;border-color:#d32f2f!important}.v-application .red--text.text--darken-2{color:#d32f2f!important;caret-color:#d32f2f!important}.v-application .red.darken-3{background-color:#c62828!important;border-color:#c62828!important}.v-application .red--text.text--darken-3{color:#c62828!important;caret-color:#c62828!important}.v-application .red.darken-4{background-color:#b71c1c!important;border-color:#b71c1c!important}.v-application .red--text.text--darken-4{color:#b71c1c!important;caret-color:#b71c1c!important}.v-application .red.accent-1{background-color:#ff8a80!important;border-color:#ff8a80!important}.v-application .red--text.text--accent-1{color:#ff8a80!important;caret-color:#ff8a80!important}.v-application .red.accent-2{background-color:#ff5252!important;border-color:#ff5252!important}.v-application .red--text.text--accent-2{color:#ff5252!important;caret-color:#ff5252!important}.v-application .red.accent-3{background-color:#ff1744!important;border-color:#ff1744!important}.v-application .red--text.text--accent-3{color:#ff1744!important;caret-color:#ff1744!important}.v-application .red.accent-4{background-color:#d50000!important;border-color:#d50000!important}.v-application .red--text.text--accent-4{color:#d50000!important;caret-color:#d50000!important}.v-application .pink{background-color:#e91e63!important;border-color:#e91e63!important}.v-application .pink--text{color:#e91e63!important;caret-color:#e91e63!important}.v-application .pink.lighten-5{background-color:#fce4ec!important;border-color:#fce4ec!important}.v-application .pink--text.text--lighten-5{color:#fce4ec!important;caret-color:#fce4ec!important}.v-application .pink.lighten-4{background-color:#f8bbd0!important;border-color:#f8bbd0!important}.v-application .pink--text.text--lighten-4{color:#f8bbd0!important;caret-color:#f8bbd0!important}.v-application .pink.lighten-3{background-color:#f48fb1!important;border-color:#f48fb1!important}.v-application .pink--text.text--lighten-3{color:#f48fb1!important;caret-color:#f48fb1!important}.v-application .pink.lighten-2{background-color:#f06292!important;border-color:#f06292!important}.v-application .pink--text.text--lighten-2{color:#f06292!important;caret-color:#f06292!important}.v-application .pink.lighten-1{background-color:#ec407a!important;border-color:#ec407a!important}.v-application .pink--text.text--lighten-1{color:#ec407a!important;caret-color:#ec407a!important}.v-application .pink.darken-1{background-color:#d81b60!important;border-color:#d81b60!important}.v-application .pink--text.text--darken-1{color:#d81b60!important;caret-color:#d81b60!important}.v-application .pink.darken-2{background-color:#c2185b!important;border-color:#c2185b!important}.v-application .pink--text.text--darken-2{color:#c2185b!important;caret-color:#c2185b!important}.v-application .pink.darken-3{background-color:#ad1457!important;border-color:#ad1457!important}.v-application .pink--text.text--darken-3{color:#ad1457!important;caret-color:#ad1457!important}.v-application .pink.darken-4{background-color:#880e4f!important;border-color:#880e4f!important}.v-application .pink--text.text--darken-4{color:#880e4f!important;caret-color:#880e4f!important}.v-application .pink.accent-1{background-color:#ff80ab!important;border-color:#ff80ab!important}.v-application .pink--text.text--accent-1{color:#ff80ab!important;caret-color:#ff80ab!important}.v-application .pink.accent-2{background-color:#ff4081!important;border-color:#ff4081!important}.v-application .pink--text.text--accent-2{color:#ff4081!important;caret-color:#ff4081!important}.v-application .pink.accent-3{background-color:#f50057!important;border-color:#f50057!important}.v-application .pink--text.text--accent-3{color:#f50057!important;caret-color:#f50057!important}.v-application .pink.accent-4{background-color:#c51162!important;border-color:#c51162!important}.v-application .pink--text.text--accent-4{color:#c51162!important;caret-color:#c51162!important}.v-application .purple{background-color:#9c27b0!important;border-color:#9c27b0!important}.v-application .purple--text{color:#9c27b0!important;caret-color:#9c27b0!important}.v-application .purple.lighten-5{background-color:#f3e5f5!important;border-color:#f3e5f5!important}.v-application .purple--text.text--lighten-5{color:#f3e5f5!important;caret-color:#f3e5f5!important}.v-application .purple.lighten-4{background-color:#e1bee7!important;border-color:#e1bee7!important}.v-application .purple--text.text--lighten-4{color:#e1bee7!important;caret-color:#e1bee7!important}.v-application .purple.lighten-3{background-color:#ce93d8!important;border-color:#ce93d8!important}.v-application .purple--text.text--lighten-3{color:#ce93d8!important;caret-color:#ce93d8!important}.v-application .purple.lighten-2{background-color:#ba68c8!important;border-color:#ba68c8!important}.v-application .purple--text.text--lighten-2{color:#ba68c8!important;caret-color:#ba68c8!important}.v-application .purple.lighten-1{background-color:#ab47bc!important;border-color:#ab47bc!important}.v-application .purple--text.text--lighten-1{color:#ab47bc!important;caret-color:#ab47bc!important}.v-application .purple.darken-1{background-color:#8e24aa!important;border-color:#8e24aa!important}.v-application .purple--text.text--darken-1{color:#8e24aa!important;caret-color:#8e24aa!important}.v-application .purple.darken-2{background-color:#7b1fa2!important;border-color:#7b1fa2!important}.v-application .purple--text.text--darken-2{color:#7b1fa2!important;caret-color:#7b1fa2!important}.v-application .purple.darken-3{background-color:#6a1b9a!important;border-color:#6a1b9a!important}.v-application .purple--text.text--darken-3{color:#6a1b9a!important;caret-color:#6a1b9a!important}.v-application .purple.darken-4{background-color:#4a148c!important;border-color:#4a148c!important}.v-application .purple--text.text--darken-4{color:#4a148c!important;caret-color:#4a148c!important}.v-application .purple.accent-1{background-color:#ea80fc!important;border-color:#ea80fc!important}.v-application .purple--text.text--accent-1{color:#ea80fc!important;caret-color:#ea80fc!important}.v-application .purple.accent-2{background-color:#e040fb!important;border-color:#e040fb!important}.v-application .purple--text.text--accent-2{color:#e040fb!important;caret-color:#e040fb!important}.v-application .purple.accent-3{background-color:#d500f9!important;border-color:#d500f9!important}.v-application .purple--text.text--accent-3{color:#d500f9!important;caret-color:#d500f9!important}.v-application .purple.accent-4{background-color:#a0f!important;border-color:#a0f!important}.v-application .purple--text.text--accent-4{color:#a0f!important;caret-color:#a0f!important}.v-application .deep-purple{background-color:#673ab7!important;border-color:#673ab7!important}.v-application .deep-purple--text{color:#673ab7!important;caret-color:#673ab7!important}.v-application .deep-purple.lighten-5{background-color:#ede7f6!important;border-color:#ede7f6!important}.v-application .deep-purple--text.text--lighten-5{color:#ede7f6!important;caret-color:#ede7f6!important}.v-application .deep-purple.lighten-4{background-color:#d1c4e9!important;border-color:#d1c4e9!important}.v-application .deep-purple--text.text--lighten-4{color:#d1c4e9!important;caret-color:#d1c4e9!important}.v-application .deep-purple.lighten-3{background-color:#b39ddb!important;border-color:#b39ddb!important}.v-application .deep-purple--text.text--lighten-3{color:#b39ddb!important;caret-color:#b39ddb!important}.v-application .deep-purple.lighten-2{background-color:#9575cd!important;border-color:#9575cd!important}.v-application .deep-purple--text.text--lighten-2{color:#9575cd!important;caret-color:#9575cd!important}.v-application .deep-purple.lighten-1{background-color:#7e57c2!important;border-color:#7e57c2!important}.v-application .deep-purple--text.text--lighten-1{color:#7e57c2!important;caret-color:#7e57c2!important}.v-application .deep-purple.darken-1{background-color:#5e35b1!important;border-color:#5e35b1!important}.v-application .deep-purple--text.text--darken-1{color:#5e35b1!important;caret-color:#5e35b1!important}.v-application .deep-purple.darken-2{background-color:#512da8!important;border-color:#512da8!important}.v-application .deep-purple--text.text--darken-2{color:#512da8!important;caret-color:#512da8!important}.v-application .deep-purple.darken-3{background-color:#4527a0!important;border-color:#4527a0!important}.v-application .deep-purple--text.text--darken-3{color:#4527a0!important;caret-color:#4527a0!important}.v-application .deep-purple.darken-4{background-color:#311b92!important;border-color:#311b92!important}.v-application .deep-purple--text.text--darken-4{color:#311b92!important;caret-color:#311b92!important}.v-application .deep-purple.accent-1{background-color:#b388ff!important;border-color:#b388ff!important}.v-application .deep-purple--text.text--accent-1{color:#b388ff!important;caret-color:#b388ff!important}.v-application .deep-purple.accent-2{background-color:#7c4dff!important;border-color:#7c4dff!important}.v-application .deep-purple--text.text--accent-2{color:#7c4dff!important;caret-color:#7c4dff!important}.v-application .deep-purple.accent-3{background-color:#651fff!important;border-color:#651fff!important}.v-application .deep-purple--text.text--accent-3{color:#651fff!important;caret-color:#651fff!important}.v-application .deep-purple.accent-4{background-color:#6200ea!important;border-color:#6200ea!important}.v-application .deep-purple--text.text--accent-4{color:#6200ea!important;caret-color:#6200ea!important}.v-application .indigo{background-color:#3f51b5!important;border-color:#3f51b5!important}.v-application .indigo--text{color:#3f51b5!important;caret-color:#3f51b5!important}.v-application .indigo.lighten-5{background-color:#e8eaf6!important;border-color:#e8eaf6!important}.v-application .indigo--text.text--lighten-5{color:#e8eaf6!important;caret-color:#e8eaf6!important}.v-application .indigo.lighten-4{background-color:#c5cae9!important;border-color:#c5cae9!important}.v-application .indigo--text.text--lighten-4{color:#c5cae9!important;caret-color:#c5cae9!important}.v-application .indigo.lighten-3{background-color:#9fa8da!important;border-color:#9fa8da!important}.v-application .indigo--text.text--lighten-3{color:#9fa8da!important;caret-color:#9fa8da!important}.v-application .indigo.lighten-2{background-color:#7986cb!important;border-color:#7986cb!important}.v-application .indigo--text.text--lighten-2{color:#7986cb!important;caret-color:#7986cb!important}.v-application .indigo.lighten-1{background-color:#5c6bc0!important;border-color:#5c6bc0!important}.v-application .indigo--text.text--lighten-1{color:#5c6bc0!important;caret-color:#5c6bc0!important}.v-application .indigo.darken-1{background-color:#3949ab!important;border-color:#3949ab!important}.v-application .indigo--text.text--darken-1{color:#3949ab!important;caret-color:#3949ab!important}.v-application .indigo.darken-2{background-color:#303f9f!important;border-color:#303f9f!important}.v-application .indigo--text.text--darken-2{color:#303f9f!important;caret-color:#303f9f!important}.v-application .indigo.darken-3{background-color:#283593!important;border-color:#283593!important}.v-application .indigo--text.text--darken-3{color:#283593!important;caret-color:#283593!important}.v-application .indigo.darken-4{background-color:#1a237e!important;border-color:#1a237e!important}.v-application .indigo--text.text--darken-4{color:#1a237e!important;caret-color:#1a237e!important}.v-application .indigo.accent-1{background-color:#8c9eff!important;border-color:#8c9eff!important}.v-application .indigo--text.text--accent-1{color:#8c9eff!important;caret-color:#8c9eff!important}.v-application .indigo.accent-2{background-color:#536dfe!important;border-color:#536dfe!important}.v-application .indigo--text.text--accent-2{color:#536dfe!important;caret-color:#536dfe!important}.v-application .indigo.accent-3{background-color:#3d5afe!important;border-color:#3d5afe!important}.v-application .indigo--text.text--accent-3{color:#3d5afe!important;caret-color:#3d5afe!important}.v-application .indigo.accent-4{background-color:#304ffe!important;border-color:#304ffe!important}.v-application .indigo--text.text--accent-4{color:#304ffe!important;caret-color:#304ffe!important}.v-application .blue{background-color:#2196f3!important;border-color:#2196f3!important}.v-application .blue--text{color:#2196f3!important;caret-color:#2196f3!important}.v-application .blue.lighten-5{background-color:#e3f2fd!important;border-color:#e3f2fd!important}.v-application .blue--text.text--lighten-5{color:#e3f2fd!important;caret-color:#e3f2fd!important}.v-application .blue.lighten-4{background-color:#bbdefb!important;border-color:#bbdefb!important}.v-application .blue--text.text--lighten-4{color:#bbdefb!important;caret-color:#bbdefb!important}.v-application .blue.lighten-3{background-color:#90caf9!important;border-color:#90caf9!important}.v-application .blue--text.text--lighten-3{color:#90caf9!important;caret-color:#90caf9!important}.v-application .blue.lighten-2{background-color:#64b5f6!important;border-color:#64b5f6!important}.v-application .blue--text.text--lighten-2{color:#64b5f6!important;caret-color:#64b5f6!important}.v-application .blue.lighten-1{background-color:#42a5f5!important;border-color:#42a5f5!important}.v-application .blue--text.text--lighten-1{color:#42a5f5!important;caret-color:#42a5f5!important}.v-application .blue.darken-1{background-color:#1e88e5!important;border-color:#1e88e5!important}.v-application .blue--text.text--darken-1{color:#1e88e5!important;caret-color:#1e88e5!important}.v-application .blue.darken-2{background-color:#1976d2!important;border-color:#1976d2!important}.v-application .blue--text.text--darken-2{color:#1976d2!important;caret-color:#1976d2!important}.v-application .blue.darken-3{background-color:#1565c0!important;border-color:#1565c0!important}.v-application .blue--text.text--darken-3{color:#1565c0!important;caret-color:#1565c0!important}.v-application .blue.darken-4{background-color:#0d47a1!important;border-color:#0d47a1!important}.v-application .blue--text.text--darken-4{color:#0d47a1!important;caret-color:#0d47a1!important}.v-application .blue.accent-1{background-color:#82b1ff!important;border-color:#82b1ff!important}.v-application .blue--text.text--accent-1{color:#82b1ff!important;caret-color:#82b1ff!important}.v-application .blue.accent-2{background-color:#448aff!important;border-color:#448aff!important}.v-application .blue--text.text--accent-2{color:#448aff!important;caret-color:#448aff!important}.v-application .blue.accent-3{background-color:#2979ff!important;border-color:#2979ff!important}.v-application .blue--text.text--accent-3{color:#2979ff!important;caret-color:#2979ff!important}.v-application .blue.accent-4{background-color:#2962ff!important;border-color:#2962ff!important}.v-application .blue--text.text--accent-4{color:#2962ff!important;caret-color:#2962ff!important}.v-application .light-blue{background-color:#03a9f4!important;border-color:#03a9f4!important}.v-application .light-blue--text{color:#03a9f4!important;caret-color:#03a9f4!important}.v-application .light-blue.lighten-5{background-color:#e1f5fe!important;border-color:#e1f5fe!important}.v-application .light-blue--text.text--lighten-5{color:#e1f5fe!important;caret-color:#e1f5fe!important}.v-application .light-blue.lighten-4{background-color:#b3e5fc!important;border-color:#b3e5fc!important}.v-application .light-blue--text.text--lighten-4{color:#b3e5fc!important;caret-color:#b3e5fc!important}.v-application .light-blue.lighten-3{background-color:#81d4fa!important;border-color:#81d4fa!important}.v-application .light-blue--text.text--lighten-3{color:#81d4fa!important;caret-color:#81d4fa!important}.v-application .light-blue.lighten-2{background-color:#4fc3f7!important;border-color:#4fc3f7!important}.v-application .light-blue--text.text--lighten-2{color:#4fc3f7!important;caret-color:#4fc3f7!important}.v-application .light-blue.lighten-1{background-color:#29b6f6!important;border-color:#29b6f6!important}.v-application .light-blue--text.text--lighten-1{color:#29b6f6!important;caret-color:#29b6f6!important}.v-application .light-blue.darken-1{background-color:#039be5!important;border-color:#039be5!important}.v-application .light-blue--text.text--darken-1{color:#039be5!important;caret-color:#039be5!important}.v-application .light-blue.darken-2{background-color:#0288d1!important;border-color:#0288d1!important}.v-application .light-blue--text.text--darken-2{color:#0288d1!important;caret-color:#0288d1!important}.v-application .light-blue.darken-3{background-color:#0277bd!important;border-color:#0277bd!important}.v-application .light-blue--text.text--darken-3{color:#0277bd!important;caret-color:#0277bd!important}.v-application .light-blue.darken-4{background-color:#01579b!important;border-color:#01579b!important}.v-application .light-blue--text.text--darken-4{color:#01579b!important;caret-color:#01579b!important}.v-application .light-blue.accent-1{background-color:#80d8ff!important;border-color:#80d8ff!important}.v-application .light-blue--text.text--accent-1{color:#80d8ff!important;caret-color:#80d8ff!important}.v-application .light-blue.accent-2{background-color:#40c4ff!important;border-color:#40c4ff!important}.v-application .light-blue--text.text--accent-2{color:#40c4ff!important;caret-color:#40c4ff!important}.v-application .light-blue.accent-3{background-color:#00b0ff!important;border-color:#00b0ff!important}.v-application .light-blue--text.text--accent-3{color:#00b0ff!important;caret-color:#00b0ff!important}.v-application .light-blue.accent-4{background-color:#0091ea!important;border-color:#0091ea!important}.v-application .light-blue--text.text--accent-4{color:#0091ea!important;caret-color:#0091ea!important}.v-application .cyan{background-color:#00bcd4!important;border-color:#00bcd4!important}.v-application .cyan--text{color:#00bcd4!important;caret-color:#00bcd4!important}.v-application .cyan.lighten-5{background-color:#e0f7fa!important;border-color:#e0f7fa!important}.v-application .cyan--text.text--lighten-5{color:#e0f7fa!important;caret-color:#e0f7fa!important}.v-application .cyan.lighten-4{background-color:#b2ebf2!important;border-color:#b2ebf2!important}.v-application .cyan--text.text--lighten-4{color:#b2ebf2!important;caret-color:#b2ebf2!important}.v-application .cyan.lighten-3{background-color:#80deea!important;border-color:#80deea!important}.v-application .cyan--text.text--lighten-3{color:#80deea!important;caret-color:#80deea!important}.v-application .cyan.lighten-2{background-color:#4dd0e1!important;border-color:#4dd0e1!important}.v-application .cyan--text.text--lighten-2{color:#4dd0e1!important;caret-color:#4dd0e1!important}.v-application .cyan.lighten-1{background-color:#26c6da!important;border-color:#26c6da!important}.v-application .cyan--text.text--lighten-1{color:#26c6da!important;caret-color:#26c6da!important}.v-application .cyan.darken-1{background-color:#00acc1!important;border-color:#00acc1!important}.v-application .cyan--text.text--darken-1{color:#00acc1!important;caret-color:#00acc1!important}.v-application .cyan.darken-2{background-color:#0097a7!important;border-color:#0097a7!important}.v-application .cyan--text.text--darken-2{color:#0097a7!important;caret-color:#0097a7!important}.v-application .cyan.darken-3{background-color:#00838f!important;border-color:#00838f!important}.v-application .cyan--text.text--darken-3{color:#00838f!important;caret-color:#00838f!important}.v-application .cyan.darken-4{background-color:#006064!important;border-color:#006064!important}.v-application .cyan--text.text--darken-4{color:#006064!important;caret-color:#006064!important}.v-application .cyan.accent-1{background-color:#84ffff!important;border-color:#84ffff!important}.v-application .cyan--text.text--accent-1{color:#84ffff!important;caret-color:#84ffff!important}.v-application .cyan.accent-2{background-color:#18ffff!important;border-color:#18ffff!important}.v-application .cyan--text.text--accent-2{color:#18ffff!important;caret-color:#18ffff!important}.v-application .cyan.accent-3{background-color:#00e5ff!important;border-color:#00e5ff!important}.v-application .cyan--text.text--accent-3{color:#00e5ff!important;caret-color:#00e5ff!important}.v-application .cyan.accent-4{background-color:#00b8d4!important;border-color:#00b8d4!important}.v-application .cyan--text.text--accent-4{color:#00b8d4!important;caret-color:#00b8d4!important}.v-application .teal{background-color:#009688!important;border-color:#009688!important}.v-application .teal--text{color:#009688!important;caret-color:#009688!important}.v-application .teal.lighten-5{background-color:#e0f2f1!important;border-color:#e0f2f1!important}.v-application .teal--text.text--lighten-5{color:#e0f2f1!important;caret-color:#e0f2f1!important}.v-application .teal.lighten-4{background-color:#b2dfdb!important;border-color:#b2dfdb!important}.v-application .teal--text.text--lighten-4{color:#b2dfdb!important;caret-color:#b2dfdb!important}.v-application .teal.lighten-3{background-color:#80cbc4!important;border-color:#80cbc4!important}.v-application .teal--text.text--lighten-3{color:#80cbc4!important;caret-color:#80cbc4!important}.v-application .teal.lighten-2{background-color:#4db6ac!important;border-color:#4db6ac!important}.v-application .teal--text.text--lighten-2{color:#4db6ac!important;caret-color:#4db6ac!important}.v-application .teal.lighten-1{background-color:#26a69a!important;border-color:#26a69a!important}.v-application .teal--text.text--lighten-1{color:#26a69a!important;caret-color:#26a69a!important}.v-application .teal.darken-1{background-color:#00897b!important;border-color:#00897b!important}.v-application .teal--text.text--darken-1{color:#00897b!important;caret-color:#00897b!important}.v-application .teal.darken-2{background-color:#00796b!important;border-color:#00796b!important}.v-application .teal--text.text--darken-2{color:#00796b!important;caret-color:#00796b!important}.v-application .teal.darken-3{background-color:#00695c!important;border-color:#00695c!important}.v-application .teal--text.text--darken-3{color:#00695c!important;caret-color:#00695c!important}.v-application .teal.darken-4{background-color:#004d40!important;border-color:#004d40!important}.v-application .teal--text.text--darken-4{color:#004d40!important;caret-color:#004d40!important}.v-application .teal.accent-1{background-color:#a7ffeb!important;border-color:#a7ffeb!important}.v-application .teal--text.text--accent-1{color:#a7ffeb!important;caret-color:#a7ffeb!important}.v-application .teal.accent-2{background-color:#64ffda!important;border-color:#64ffda!important}.v-application .teal--text.text--accent-2{color:#64ffda!important;caret-color:#64ffda!important}.v-application .teal.accent-3{background-color:#1de9b6!important;border-color:#1de9b6!important}.v-application .teal--text.text--accent-3{color:#1de9b6!important;caret-color:#1de9b6!important}.v-application .teal.accent-4{background-color:#00bfa5!important;border-color:#00bfa5!important}.v-application .teal--text.text--accent-4{color:#00bfa5!important;caret-color:#00bfa5!important}.v-application .green{background-color:#4caf50!important;border-color:#4caf50!important}.v-application .green--text{color:#4caf50!important;caret-color:#4caf50!important}.v-application .green.lighten-5{background-color:#e8f5e9!important;border-color:#e8f5e9!important}.v-application .green--text.text--lighten-5{color:#e8f5e9!important;caret-color:#e8f5e9!important}.v-application .green.lighten-4{background-color:#c8e6c9!important;border-color:#c8e6c9!important}.v-application .green--text.text--lighten-4{color:#c8e6c9!important;caret-color:#c8e6c9!important}.v-application .green.lighten-3{background-color:#a5d6a7!important;border-color:#a5d6a7!important}.v-application .green--text.text--lighten-3{color:#a5d6a7!important;caret-color:#a5d6a7!important}.v-application .green.lighten-2{background-color:#81c784!important;border-color:#81c784!important}.v-application .green--text.text--lighten-2{color:#81c784!important;caret-color:#81c784!important}.v-application .green.lighten-1{background-color:#66bb6a!important;border-color:#66bb6a!important}.v-application .green--text.text--lighten-1{color:#66bb6a!important;caret-color:#66bb6a!important}.v-application .green.darken-1{background-color:#43a047!important;border-color:#43a047!important}.v-application .green--text.text--darken-1{color:#43a047!important;caret-color:#43a047!important}.v-application .green.darken-2{background-color:#388e3c!important;border-color:#388e3c!important}.v-application .green--text.text--darken-2{color:#388e3c!important;caret-color:#388e3c!important}.v-application .green.darken-3{background-color:#2e7d32!important;border-color:#2e7d32!important}.v-application .green--text.text--darken-3{color:#2e7d32!important;caret-color:#2e7d32!important}.v-application .green.darken-4{background-color:#1b5e20!important;border-color:#1b5e20!important}.v-application .green--text.text--darken-4{color:#1b5e20!important;caret-color:#1b5e20!important}.v-application .green.accent-1{background-color:#b9f6ca!important;border-color:#b9f6ca!important}.v-application .green--text.text--accent-1{color:#b9f6ca!important;caret-color:#b9f6ca!important}.v-application .green.accent-2{background-color:#69f0ae!important;border-color:#69f0ae!important}.v-application .green--text.text--accent-2{color:#69f0ae!important;caret-color:#69f0ae!important}.v-application .green.accent-3{background-color:#00e676!important;border-color:#00e676!important}.v-application .green--text.text--accent-3{color:#00e676!important;caret-color:#00e676!important}.v-application .green.accent-4{background-color:#00c853!important;border-color:#00c853!important}.v-application .green--text.text--accent-4{color:#00c853!important;caret-color:#00c853!important}.v-application .light-green{background-color:#8bc34a!important;border-color:#8bc34a!important}.v-application .light-green--text{color:#8bc34a!important;caret-color:#8bc34a!important}.v-application .light-green.lighten-5{background-color:#f1f8e9!important;border-color:#f1f8e9!important}.v-application .light-green--text.text--lighten-5{color:#f1f8e9!important;caret-color:#f1f8e9!important}.v-application .light-green.lighten-4{background-color:#dcedc8!important;border-color:#dcedc8!important}.v-application .light-green--text.text--lighten-4{color:#dcedc8!important;caret-color:#dcedc8!important}.v-application .light-green.lighten-3{background-color:#c5e1a5!important;border-color:#c5e1a5!important}.v-application .light-green--text.text--lighten-3{color:#c5e1a5!important;caret-color:#c5e1a5!important}.v-application .light-green.lighten-2{background-color:#aed581!important;border-color:#aed581!important}.v-application .light-green--text.text--lighten-2{color:#aed581!important;caret-color:#aed581!important}.v-application .light-green.lighten-1{background-color:#9ccc65!important;border-color:#9ccc65!important}.v-application .light-green--text.text--lighten-1{color:#9ccc65!important;caret-color:#9ccc65!important}.v-application .light-green.darken-1{background-color:#7cb342!important;border-color:#7cb342!important}.v-application .light-green--text.text--darken-1{color:#7cb342!important;caret-color:#7cb342!important}.v-application .light-green.darken-2{background-color:#689f38!important;border-color:#689f38!important}.v-application .light-green--text.text--darken-2{color:#689f38!important;caret-color:#689f38!important}.v-application .light-green.darken-3{background-color:#558b2f!important;border-color:#558b2f!important}.v-application .light-green--text.text--darken-3{color:#558b2f!important;caret-color:#558b2f!important}.v-application .light-green.darken-4{background-color:#33691e!important;border-color:#33691e!important}.v-application .light-green--text.text--darken-4{color:#33691e!important;caret-color:#33691e!important}.v-application .light-green.accent-1{background-color:#ccff90!important;border-color:#ccff90!important}.v-application .light-green--text.text--accent-1{color:#ccff90!important;caret-color:#ccff90!important}.v-application .light-green.accent-2{background-color:#b2ff59!important;border-color:#b2ff59!important}.v-application .light-green--text.text--accent-2{color:#b2ff59!important;caret-color:#b2ff59!important}.v-application .light-green.accent-3{background-color:#76ff03!important;border-color:#76ff03!important}.v-application .light-green--text.text--accent-3{color:#76ff03!important;caret-color:#76ff03!important}.v-application .light-green.accent-4{background-color:#64dd17!important;border-color:#64dd17!important}.v-application .light-green--text.text--accent-4{color:#64dd17!important;caret-color:#64dd17!important}.v-application .lime{background-color:#cddc39!important;border-color:#cddc39!important}.v-application .lime--text{color:#cddc39!important;caret-color:#cddc39!important}.v-application .lime.lighten-5{background-color:#f9fbe7!important;border-color:#f9fbe7!important}.v-application .lime--text.text--lighten-5{color:#f9fbe7!important;caret-color:#f9fbe7!important}.v-application .lime.lighten-4{background-color:#f0f4c3!important;border-color:#f0f4c3!important}.v-application .lime--text.text--lighten-4{color:#f0f4c3!important;caret-color:#f0f4c3!important}.v-application .lime.lighten-3{background-color:#e6ee9c!important;border-color:#e6ee9c!important}.v-application .lime--text.text--lighten-3{color:#e6ee9c!important;caret-color:#e6ee9c!important}.v-application .lime.lighten-2{background-color:#dce775!important;border-color:#dce775!important}.v-application .lime--text.text--lighten-2{color:#dce775!important;caret-color:#dce775!important}.v-application .lime.lighten-1{background-color:#d4e157!important;border-color:#d4e157!important}.v-application .lime--text.text--lighten-1{color:#d4e157!important;caret-color:#d4e157!important}.v-application .lime.darken-1{background-color:#c0ca33!important;border-color:#c0ca33!important}.v-application .lime--text.text--darken-1{color:#c0ca33!important;caret-color:#c0ca33!important}.v-application .lime.darken-2{background-color:#afb42b!important;border-color:#afb42b!important}.v-application .lime--text.text--darken-2{color:#afb42b!important;caret-color:#afb42b!important}.v-application .lime.darken-3{background-color:#9e9d24!important;border-color:#9e9d24!important}.v-application .lime--text.text--darken-3{color:#9e9d24!important;caret-color:#9e9d24!important}.v-application .lime.darken-4{background-color:#827717!important;border-color:#827717!important}.v-application .lime--text.text--darken-4{color:#827717!important;caret-color:#827717!important}.v-application .lime.accent-1{background-color:#f4ff81!important;border-color:#f4ff81!important}.v-application .lime--text.text--accent-1{color:#f4ff81!important;caret-color:#f4ff81!important}.v-application .lime.accent-2{background-color:#eeff41!important;border-color:#eeff41!important}.v-application .lime--text.text--accent-2{color:#eeff41!important;caret-color:#eeff41!important}.v-application .lime.accent-3{background-color:#c6ff00!important;border-color:#c6ff00!important}.v-application .lime--text.text--accent-3{color:#c6ff00!important;caret-color:#c6ff00!important}.v-application .lime.accent-4{background-color:#aeea00!important;border-color:#aeea00!important}.v-application .lime--text.text--accent-4{color:#aeea00!important;caret-color:#aeea00!important}.v-application .yellow{background-color:#ffeb3b!important;border-color:#ffeb3b!important}.v-application .yellow--text{color:#ffeb3b!important;caret-color:#ffeb3b!important}.v-application .yellow.lighten-5{background-color:#fffde7!important;border-color:#fffde7!important}.v-application .yellow--text.text--lighten-5{color:#fffde7!important;caret-color:#fffde7!important}.v-application .yellow.lighten-4{background-color:#fff9c4!important;border-color:#fff9c4!important}.v-application .yellow--text.text--lighten-4{color:#fff9c4!important;caret-color:#fff9c4!important}.v-application .yellow.lighten-3{background-color:#fff59d!important;border-color:#fff59d!important}.v-application .yellow--text.text--lighten-3{color:#fff59d!important;caret-color:#fff59d!important}.v-application .yellow.lighten-2{background-color:#fff176!important;border-color:#fff176!important}.v-application .yellow--text.text--lighten-2{color:#fff176!important;caret-color:#fff176!important}.v-application .yellow.lighten-1{background-color:#ffee58!important;border-color:#ffee58!important}.v-application .yellow--text.text--lighten-1{color:#ffee58!important;caret-color:#ffee58!important}.v-application .yellow.darken-1{background-color:#fdd835!important;border-color:#fdd835!important}.v-application .yellow--text.text--darken-1{color:#fdd835!important;caret-color:#fdd835!important}.v-application .yellow.darken-2{background-color:#fbc02d!important;border-color:#fbc02d!important}.v-application .yellow--text.text--darken-2{color:#fbc02d!important;caret-color:#fbc02d!important}.v-application .yellow.darken-3{background-color:#f9a825!important;border-color:#f9a825!important}.v-application .yellow--text.text--darken-3{color:#f9a825!important;caret-color:#f9a825!important}.v-application .yellow.darken-4{background-color:#f57f17!important;border-color:#f57f17!important}.v-application .yellow--text.text--darken-4{color:#f57f17!important;caret-color:#f57f17!important}.v-application .yellow.accent-1{background-color:#ffff8d!important;border-color:#ffff8d!important}.v-application .yellow--text.text--accent-1{color:#ffff8d!important;caret-color:#ffff8d!important}.v-application .yellow.accent-2{background-color:#ff0!important;border-color:#ff0!important}.v-application .yellow--text.text--accent-2{color:#ff0!important;caret-color:#ff0!important}.v-application .yellow.accent-3{background-color:#ffea00!important;border-color:#ffea00!important}.v-application .yellow--text.text--accent-3{color:#ffea00!important;caret-color:#ffea00!important}.v-application .yellow.accent-4{background-color:#ffd600!important;border-color:#ffd600!important}.v-application .yellow--text.text--accent-4{color:#ffd600!important;caret-color:#ffd600!important}.v-application .amber{background-color:#ffc107!important;border-color:#ffc107!important}.v-application .amber--text{color:#ffc107!important;caret-color:#ffc107!important}.v-application .amber.lighten-5{background-color:#fff8e1!important;border-color:#fff8e1!important}.v-application .amber--text.text--lighten-5{color:#fff8e1!important;caret-color:#fff8e1!important}.v-application .amber.lighten-4{background-color:#ffecb3!important;border-color:#ffecb3!important}.v-application .amber--text.text--lighten-4{color:#ffecb3!important;caret-color:#ffecb3!important}.v-application .amber.lighten-3{background-color:#ffe082!important;border-color:#ffe082!important}.v-application .amber--text.text--lighten-3{color:#ffe082!important;caret-color:#ffe082!important}.v-application .amber.lighten-2{background-color:#ffd54f!important;border-color:#ffd54f!important}.v-application .amber--text.text--lighten-2{color:#ffd54f!important;caret-color:#ffd54f!important}.v-application .amber.lighten-1{background-color:#ffca28!important;border-color:#ffca28!important}.v-application .amber--text.text--lighten-1{color:#ffca28!important;caret-color:#ffca28!important}.v-application .amber.darken-1{background-color:#ffb300!important;border-color:#ffb300!important}.v-application .amber--text.text--darken-1{color:#ffb300!important;caret-color:#ffb300!important}.v-application .amber.darken-2{background-color:#ffa000!important;border-color:#ffa000!important}.v-application .amber--text.text--darken-2{color:#ffa000!important;caret-color:#ffa000!important}.v-application .amber.darken-3{background-color:#ff8f00!important;border-color:#ff8f00!important}.v-application .amber--text.text--darken-3{color:#ff8f00!important;caret-color:#ff8f00!important}.v-application .amber.darken-4{background-color:#ff6f00!important;border-color:#ff6f00!important}.v-application .amber--text.text--darken-4{color:#ff6f00!important;caret-color:#ff6f00!important}.v-application .amber.accent-1{background-color:#ffe57f!important;border-color:#ffe57f!important}.v-application .amber--text.text--accent-1{color:#ffe57f!important;caret-color:#ffe57f!important}.v-application .amber.accent-2{background-color:#ffd740!important;border-color:#ffd740!important}.v-application .amber--text.text--accent-2{color:#ffd740!important;caret-color:#ffd740!important}.v-application .amber.accent-3{background-color:#ffc400!important;border-color:#ffc400!important}.v-application .amber--text.text--accent-3{color:#ffc400!important;caret-color:#ffc400!important}.v-application .amber.accent-4{background-color:#ffab00!important;border-color:#ffab00!important}.v-application .amber--text.text--accent-4{color:#ffab00!important;caret-color:#ffab00!important}.v-application .orange{background-color:#ff9800!important;border-color:#ff9800!important}.v-application .orange--text{color:#ff9800!important;caret-color:#ff9800!important}.v-application .orange.lighten-5{background-color:#fff3e0!important;border-color:#fff3e0!important}.v-application .orange--text.text--lighten-5{color:#fff3e0!important;caret-color:#fff3e0!important}.v-application .orange.lighten-4{background-color:#ffe0b2!important;border-color:#ffe0b2!important}.v-application .orange--text.text--lighten-4{color:#ffe0b2!important;caret-color:#ffe0b2!important}.v-application .orange.lighten-3{background-color:#ffcc80!important;border-color:#ffcc80!important}.v-application .orange--text.text--lighten-3{color:#ffcc80!important;caret-color:#ffcc80!important}.v-application .orange.lighten-2{background-color:#ffb74d!important;border-color:#ffb74d!important}.v-application .orange--text.text--lighten-2{color:#ffb74d!important;caret-color:#ffb74d!important}.v-application .orange.lighten-1{background-color:#ffa726!important;border-color:#ffa726!important}.v-application .orange--text.text--lighten-1{color:#ffa726!important;caret-color:#ffa726!important}.v-application .orange.darken-1{background-color:#fb8c00!important;border-color:#fb8c00!important}.v-application .orange--text.text--darken-1{color:#fb8c00!important;caret-color:#fb8c00!important}.v-application .orange.darken-2{background-color:#f57c00!important;border-color:#f57c00!important}.v-application .orange--text.text--darken-2{color:#f57c00!important;caret-color:#f57c00!important}.v-application .orange.darken-3{background-color:#ef6c00!important;border-color:#ef6c00!important}.v-application .orange--text.text--darken-3{color:#ef6c00!important;caret-color:#ef6c00!important}.v-application .orange.darken-4{background-color:#e65100!important;border-color:#e65100!important}.v-application .orange--text.text--darken-4{color:#e65100!important;caret-color:#e65100!important}.v-application .orange.accent-1{background-color:#ffd180!important;border-color:#ffd180!important}.v-application .orange--text.text--accent-1{color:#ffd180!important;caret-color:#ffd180!important}.v-application .orange.accent-2{background-color:#ffab40!important;border-color:#ffab40!important}.v-application .orange--text.text--accent-2{color:#ffab40!important;caret-color:#ffab40!important}.v-application .orange.accent-3{background-color:#ff9100!important;border-color:#ff9100!important}.v-application .orange--text.text--accent-3{color:#ff9100!important;caret-color:#ff9100!important}.v-application .orange.accent-4{background-color:#ff6d00!important;border-color:#ff6d00!important}.v-application .orange--text.text--accent-4{color:#ff6d00!important;caret-color:#ff6d00!important}.v-application .deep-orange{background-color:#ff5722!important;border-color:#ff5722!important}.v-application .deep-orange--text{color:#ff5722!important;caret-color:#ff5722!important}.v-application .deep-orange.lighten-5{background-color:#fbe9e7!important;border-color:#fbe9e7!important}.v-application .deep-orange--text.text--lighten-5{color:#fbe9e7!important;caret-color:#fbe9e7!important}.v-application .deep-orange.lighten-4{background-color:#ffccbc!important;border-color:#ffccbc!important}.v-application .deep-orange--text.text--lighten-4{color:#ffccbc!important;caret-color:#ffccbc!important}.v-application .deep-orange.lighten-3{background-color:#ffab91!important;border-color:#ffab91!important}.v-application .deep-orange--text.text--lighten-3{color:#ffab91!important;caret-color:#ffab91!important}.v-application .deep-orange.lighten-2{background-color:#ff8a65!important;border-color:#ff8a65!important}.v-application .deep-orange--text.text--lighten-2{color:#ff8a65!important;caret-color:#ff8a65!important}.v-application .deep-orange.lighten-1{background-color:#ff7043!important;border-color:#ff7043!important}.v-application .deep-orange--text.text--lighten-1{color:#ff7043!important;caret-color:#ff7043!important}.v-application .deep-orange.darken-1{background-color:#f4511e!important;border-color:#f4511e!important}.v-application .deep-orange--text.text--darken-1{color:#f4511e!important;caret-color:#f4511e!important}.v-application .deep-orange.darken-2{background-color:#e64a19!important;border-color:#e64a19!important}.v-application .deep-orange--text.text--darken-2{color:#e64a19!important;caret-color:#e64a19!important}.v-application .deep-orange.darken-3{background-color:#d84315!important;border-color:#d84315!important}.v-application .deep-orange--text.text--darken-3{color:#d84315!important;caret-color:#d84315!important}.v-application .deep-orange.darken-4{background-color:#bf360c!important;border-color:#bf360c!important}.v-application .deep-orange--text.text--darken-4{color:#bf360c!important;caret-color:#bf360c!important}.v-application .deep-orange.accent-1{background-color:#ff9e80!important;border-color:#ff9e80!important}.v-application .deep-orange--text.text--accent-1{color:#ff9e80!important;caret-color:#ff9e80!important}.v-application .deep-orange.accent-2{background-color:#ff6e40!important;border-color:#ff6e40!important}.v-application .deep-orange--text.text--accent-2{color:#ff6e40!important;caret-color:#ff6e40!important}.v-application .deep-orange.accent-3{background-color:#ff3d00!important;border-color:#ff3d00!important}.v-application .deep-orange--text.text--accent-3{color:#ff3d00!important;caret-color:#ff3d00!important}.v-application .deep-orange.accent-4{background-color:#dd2c00!important;border-color:#dd2c00!important}.v-application .deep-orange--text.text--accent-4{color:#dd2c00!important;caret-color:#dd2c00!important}.v-application .brown{background-color:#795548!important;border-color:#795548!important}.v-application .brown--text{color:#795548!important;caret-color:#795548!important}.v-application .brown.lighten-5{background-color:#efebe9!important;border-color:#efebe9!important}.v-application .brown--text.text--lighten-5{color:#efebe9!important;caret-color:#efebe9!important}.v-application .brown.lighten-4{background-color:#d7ccc8!important;border-color:#d7ccc8!important}.v-application .brown--text.text--lighten-4{color:#d7ccc8!important;caret-color:#d7ccc8!important}.v-application .brown.lighten-3{background-color:#bcaaa4!important;border-color:#bcaaa4!important}.v-application .brown--text.text--lighten-3{color:#bcaaa4!important;caret-color:#bcaaa4!important}.v-application .brown.lighten-2{background-color:#a1887f!important;border-color:#a1887f!important}.v-application .brown--text.text--lighten-2{color:#a1887f!important;caret-color:#a1887f!important}.v-application .brown.lighten-1{background-color:#8d6e63!important;border-color:#8d6e63!important}.v-application .brown--text.text--lighten-1{color:#8d6e63!important;caret-color:#8d6e63!important}.v-application .brown.darken-1{background-color:#6d4c41!important;border-color:#6d4c41!important}.v-application .brown--text.text--darken-1{color:#6d4c41!important;caret-color:#6d4c41!important}.v-application .brown.darken-2{background-color:#5d4037!important;border-color:#5d4037!important}.v-application .brown--text.text--darken-2{color:#5d4037!important;caret-color:#5d4037!important}.v-application .brown.darken-3{background-color:#4e342e!important;border-color:#4e342e!important}.v-application .brown--text.text--darken-3{color:#4e342e!important;caret-color:#4e342e!important}.v-application .brown.darken-4{background-color:#3e2723!important;border-color:#3e2723!important}.v-application .brown--text.text--darken-4{color:#3e2723!important;caret-color:#3e2723!important}.v-application .blue-grey{background-color:#607d8b!important;border-color:#607d8b!important}.v-application .blue-grey--text{color:#607d8b!important;caret-color:#607d8b!important}.v-application .blue-grey.lighten-5{background-color:#eceff1!important;border-color:#eceff1!important}.v-application .blue-grey--text.text--lighten-5{color:#eceff1!important;caret-color:#eceff1!important}.v-application .blue-grey.lighten-4{background-color:#cfd8dc!important;border-color:#cfd8dc!important}.v-application .blue-grey--text.text--lighten-4{color:#cfd8dc!important;caret-color:#cfd8dc!important}.v-application .blue-grey.lighten-3{background-color:#b0bec5!important;border-color:#b0bec5!important}.v-application .blue-grey--text.text--lighten-3{color:#b0bec5!important;caret-color:#b0bec5!important}.v-application .blue-grey.lighten-2{background-color:#90a4ae!important;border-color:#90a4ae!important}.v-application .blue-grey--text.text--lighten-2{color:#90a4ae!important;caret-color:#90a4ae!important}.v-application .blue-grey.lighten-1{background-color:#78909c!important;border-color:#78909c!important}.v-application .blue-grey--text.text--lighten-1{color:#78909c!important;caret-color:#78909c!important}.v-application .blue-grey.darken-1{background-color:#546e7a!important;border-color:#546e7a!important}.v-application .blue-grey--text.text--darken-1{color:#546e7a!important;caret-color:#546e7a!important}.v-application .blue-grey.darken-2{background-color:#455a64!important;border-color:#455a64!important}.v-application .blue-grey--text.text--darken-2{color:#455a64!important;caret-color:#455a64!important}.v-application .blue-grey.darken-3{background-color:#37474f!important;border-color:#37474f!important}.v-application .blue-grey--text.text--darken-3{color:#37474f!important;caret-color:#37474f!important}.v-application .blue-grey.darken-4{background-color:#263238!important;border-color:#263238!important}.v-application .blue-grey--text.text--darken-4{color:#263238!important;caret-color:#263238!important}.v-application .grey{background-color:#9e9e9e!important;border-color:#9e9e9e!important}.v-application .grey--text{color:#9e9e9e!important;caret-color:#9e9e9e!important}.v-application .grey.lighten-5{background-color:#fafafa!important;border-color:#fafafa!important}.v-application .grey--text.text--lighten-5{color:#fafafa!important;caret-color:#fafafa!important}.v-application .grey.lighten-4{background-color:#f5f5f5!important;border-color:#f5f5f5!important}.v-application .grey--text.text--lighten-4{color:#f5f5f5!important;caret-color:#f5f5f5!important}.v-application .grey.lighten-3{background-color:#eee!important;border-color:#eee!important}.v-application .grey--text.text--lighten-3{color:#eee!important;caret-color:#eee!important}.v-application .grey.lighten-2{background-color:#e0e0e0!important;border-color:#e0e0e0!important}.v-application .grey--text.text--lighten-2{color:#e0e0e0!important;caret-color:#e0e0e0!important}.v-application .grey.lighten-1{background-color:#bdbdbd!important;border-color:#bdbdbd!important}.v-application .grey--text.text--lighten-1{color:#bdbdbd!important;caret-color:#bdbdbd!important}.v-application .grey.darken-1{background-color:#757575!important;border-color:#757575!important}.v-application .grey--text.text--darken-1{color:#757575!important;caret-color:#757575!important}.v-application .grey.darken-2{background-color:#616161!important;border-color:#616161!important}.v-application .grey--text.text--darken-2{color:#616161!important;caret-color:#616161!important}.v-application .grey.darken-3{background-color:#424242!important;border-color:#424242!important}.v-application .grey--text.text--darken-3{color:#424242!important;caret-color:#424242!important}.v-application .grey.darken-4{background-color:#212121!important;border-color:#212121!important}.v-application .grey--text.text--darken-4{color:#212121!important;caret-color:#212121!important}.v-application .shades.black{background-color:#000!important;border-color:#000!important}.v-application .shades--text.text--black{color:#000!important;caret-color:#000!important}.v-application .shades.white{background-color:#fff!important;border-color:#fff!important}.v-application .shades--text.text--white{color:#fff!important;caret-color:#fff!important}.v-application .shades.transparent{background-color:transparent!important;border-color:transparent!important}.v-application .shades--text.text--transparent{color:transparent!important;caret-color:transparent!important}/*!\n * ress.css • v2.0.4\n * MIT License\n * github.com/filipelinhares/ress\n */html{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%;word-break:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{padding:0;margin:0}hr{overflow:visible;height:0}details,main{display:block}summary{display:list-item}small{font-size:80%}[hidden]{display:none}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{background-color:transparent}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}pre{font-size:1em}b,strong{font-weight:bolder}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[disabled]{cursor:default}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}button,select{text-transform:none}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer;color:inherit}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:1px dotted ButtonText}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,input,select,textarea{background-color:transparent;border-style:none}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;white-space:normal;max-width:100%}::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}img{border-style:none}progress{vertical-align:baseline}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled=true]{cursor:default}.v-application .elevation-24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important}.v-application .elevation-23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important}.v-application .elevation-22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important}.v-application .elevation-21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important}.v-application .elevation-20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important}.v-application .elevation-19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important}.v-application .elevation-18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important}.v-application .elevation-17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important}.v-application .elevation-16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important}.v-application .elevation-15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important}.v-application .elevation-14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important}.v-application .elevation-13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important}.v-application .elevation-12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important}.v-application .elevation-11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important}.v-application .elevation-10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important}.v-application .elevation-9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important}.v-application .elevation-8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.v-application .elevation-7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important}.v-application .elevation-6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important}.v-application .elevation-5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important}.v-application .elevation-4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important}.v-application .elevation-3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important}.v-application .elevation-2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}.v-application .elevation-1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important}.v-application .elevation-0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.carousel-transition-enter{transform:translate(100%)}.carousel-transition-leave,.carousel-transition-leave-to{position:absolute;top:0;transform:translate(-100%)}.carousel-reverse-transition-enter{transform:translate(-100%)}.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{position:absolute;top:0;transform:translate(100%)}.dialog-transition-enter-active,.dialog-transition-leave-active{pointer-events:none!important}.dialog-transition-enter,.dialog-transition-leave-to{transform:scale(.5);opacity:0}.dialog-transition-enter-to,.dialog-transition-leave{opacity:1}.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{transform:translateY(100%)}.dialog-top-transition-enter,.dialog-top-transition-leave-to{transform:translateY(-100%)}.picker-reverse-transition-enter-active,.picker-reverse-transition-leave-active,.picker-transition-enter-active,.picker-transition-leave-active{transition:.3s cubic-bezier(0,0,.2,1)}.picker-reverse-transition-enter,.picker-reverse-transition-leave-to,.picker-transition-enter,.picker-transition-leave-to{opacity:0}.picker-reverse-transition-leave,.picker-reverse-transition-leave-active,.picker-reverse-transition-leave-to,.picker-transition-leave,.picker-transition-leave-active,.picker-transition-leave-to{position:absolute!important}.picker-transition-enter{transform:translateY(100%)}.picker-reverse-transition-enter,.picker-transition-leave-to{transform:translateY(-100%)}.picker-reverse-transition-leave-to{transform:translateY(100%)}.picker-title-transition-enter-to,.picker-title-transition-leave{transform:translate(0)}.picker-title-transition-enter{transform:translate(-100%)}.picker-title-transition-leave-to{opacity:0;transform:translate(100%)}.picker-title-transition-leave,.picker-title-transition-leave-active,.picker-title-transition-leave-to{position:absolute!important}.tab-transition-enter{transform:translate(100%)}.tab-transition-leave,.tab-transition-leave-active{position:absolute;top:0}.tab-transition-leave-to{position:absolute}.tab-reverse-transition-enter,.tab-transition-leave-to{transform:translate(-100%)}.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{top:0;position:absolute;transform:translate(100%)}.expand-transition-enter-active,.expand-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.expand-transition-move{transition:transform .6s}.expand-x-transition-enter-active,.expand-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.expand-x-transition-move{transition:transform .6s}.scale-transition-enter-active,.scale-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scale-transition-move{transition:transform .6s}.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{opacity:0;transform:scale(0)}.scale-rotate-transition-enter-active,.scale-rotate-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scale-rotate-transition-move{transition:transform .6s}.scale-rotate-transition-enter,.scale-rotate-transition-leave,.scale-rotate-transition-leave-to{opacity:0;transform:scale(0) rotate(-45deg)}.scale-rotate-reverse-transition-enter-active,.scale-rotate-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scale-rotate-reverse-transition-move{transition:transform .6s}.scale-rotate-reverse-transition-enter,.scale-rotate-reverse-transition-leave,.scale-rotate-reverse-transition-leave-to{opacity:0;transform:scale(0) rotate(45deg)}.message-transition-enter-active,.message-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.message-transition-move{transition:transform .6s}.message-transition-enter,.message-transition-leave-to{opacity:0;transform:translateY(-15px)}.message-transition-leave,.message-transition-leave-active{position:absolute}.slide-y-transition-enter-active,.slide-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-y-transition-move{transition:transform .6s}.slide-y-transition-enter,.slide-y-transition-leave-to{opacity:0;transform:translateY(-15px)}.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-y-reverse-transition-move{transition:transform .6s}.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{opacity:0;transform:translateY(15px)}.scroll-y-transition-enter-active,.scroll-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-y-transition-move{transition:transform .6s}.scroll-y-transition-enter,.scroll-y-transition-leave-to{opacity:0}.scroll-y-transition-enter{transform:translateY(-15px)}.scroll-y-transition-leave-to{transform:translateY(15px)}.scroll-y-reverse-transition-enter-active,.scroll-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-y-reverse-transition-move{transition:transform .6s}.scroll-y-reverse-transition-enter,.scroll-y-reverse-transition-leave-to{opacity:0}.scroll-y-reverse-transition-enter{transform:translateY(15px)}.scroll-y-reverse-transition-leave-to{transform:translateY(-15px)}.scroll-x-transition-enter-active,.scroll-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-x-transition-move{transition:transform .6s}.scroll-x-transition-enter,.scroll-x-transition-leave-to{opacity:0}.scroll-x-transition-enter{transform:translateX(-15px)}.scroll-x-transition-leave-to{transform:translateX(15px)}.scroll-x-reverse-transition-enter-active,.scroll-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.scroll-x-reverse-transition-move{transition:transform .6s}.scroll-x-reverse-transition-enter,.scroll-x-reverse-transition-leave-to{opacity:0}.scroll-x-reverse-transition-enter{transform:translateX(15px)}.scroll-x-reverse-transition-leave-to{transform:translateX(-15px)}.slide-x-transition-enter-active,.slide-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-x-transition-move{transition:transform .6s}.slide-x-transition-enter,.slide-x-transition-leave-to{opacity:0;transform:translateX(-15px)}.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.slide-x-reverse-transition-move{transition:transform .6s}.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{opacity:0;transform:translateX(15px)}.fade-transition-enter-active,.fade-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.fade-transition-move{transition:transform .6s}.fade-transition-enter,.fade-transition-leave-to{opacity:0!important}.fab-transition-enter-active,.fab-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.fab-transition-move{transition:transform .6s}.fab-transition-enter,.fab-transition-leave-to{transform:scale(0) rotate(-45deg)}.v-application .blockquote{padding:16px 0 16px 24px;font-size:18px;font-weight:300}.v-application code,.v-application kbd{border-radius:3px;font-size:85%;font-weight:400}.v-application code{padding:.2em .4em}.v-application kbd{padding:.2em .4rem;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.theme--light.v-application code{background-color:rgba(0,0,0,.05);color:currentColor}.theme--light.v-application kbd{background:#212529;color:#fff}.theme--dark.v-application code{background-color:hsla(0,0%,100%,.1);color:currentColor}.theme--dark.v-application kbd{background:#212529;color:#fff}html{font-size:16px;overflow-x:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0)}html.overflow-y-hidden{overflow-y:hidden!important}.v-application{font-family:\"Roboto\",sans-serif;line-height:1.5}.v-application ::-ms-clear,.v-application ::-ms-reveal{display:none}@supports(-webkit-touch-callout:none){body{cursor:pointer}}.v-application .theme--light.heading{color:rgba(0,0,0,.87)}.v-application .theme--dark.heading{color:#fff}.v-application ol,.v-application ul{padding-left:24px}.v-application .display-4{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .display-3,.v-application .display-4{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .display-3{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .display-2{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .display-1,.v-application .display-2{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .display-1{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .headline{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .headline,.v-application .title{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .title{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .subtitle-2{font-size:.875rem!important;font-weight:500;letter-spacing:.0071428571em!important;line-height:1.375rem;font-family:\"Roboto\",sans-serif!important}.v-application .subtitle-1{font-size:1rem!important;letter-spacing:.009375em!important;line-height:1.75rem}.v-application .body-2,.v-application .subtitle-1{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .body-2{font-size:.875rem!important;letter-spacing:.0178571429em!important;line-height:1.25rem}.v-application .body-1{font-size:1rem!important;letter-spacing:.03125em!important;line-height:1.5rem}.v-application .body-1,.v-application .caption{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .caption{font-size:.75rem!important;letter-spacing:.0333333333em!important;line-height:1.25rem}.v-application .overline{font-size:.75rem!important;font-weight:500;letter-spacing:.1666666667em!important;line-height:2rem;text-transform:uppercase;font-family:\"Roboto\",sans-serif!important}.v-application p{margin-bottom:16px}@media only print{.v-application .hidden-print-only{display:none!important}}@media only screen{.v-application .hidden-screen-only{display:none!important}}@media only screen and (max-width:599.98px){.v-application .hidden-xs-only{display:none!important}}@media only screen and (min-width:600px)and (max-width:959.98px){.v-application .hidden-sm-only{display:none!important}}@media only screen and (max-width:959.98px){.v-application .hidden-sm-and-down{display:none!important}}@media only screen and (min-width:600px){.v-application .hidden-sm-and-up{display:none!important}}@media only screen and (min-width:960px)and (max-width:1263.98px){.v-application .hidden-md-only{display:none!important}}@media only screen and (max-width:1263.98px){.v-application .hidden-md-and-down{display:none!important}}@media only screen and (min-width:960px){.v-application .hidden-md-and-up{display:none!important}}@media only screen and (min-width:1264px)and (max-width:1903.98px){.v-application .hidden-lg-only{display:none!important}}@media only screen and (max-width:1903.98px){.v-application .hidden-lg-and-down{display:none!important}}@media only screen and (min-width:1264px){.v-application .hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1904px){.v-application .hidden-xl-only{display:none!important}}.d-sr-only,.d-sr-only-focusable:not(:focus){border:0!important;clip:rect(0,0,0,0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.v-application .font-weight-thin{font-weight:100!important}.v-application .font-weight-light{font-weight:300!important}.v-application .font-weight-regular{font-weight:400!important}.v-application .font-weight-medium{font-weight:500!important}.v-application .font-weight-bold{font-weight:700!important}.v-application .font-weight-black{font-weight:900!important}.v-application .font-italic{font-style:italic!important}.v-application .transition-fast-out-slow-in{transition:.3s cubic-bezier(.4,0,.2,1)!important}.v-application .transition-linear-out-slow-in{transition:.3s cubic-bezier(0,0,.2,1)!important}.v-application .transition-fast-out-linear-in{transition:.3s cubic-bezier(.4,0,1,1)!important}.v-application .transition-ease-in-out{transition:.3s cubic-bezier(.4,0,.6,1)!important}.v-application .transition-fast-in-fast-out{transition:.3s cubic-bezier(.25,.8,.25,1)!important}.v-application .transition-swing{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.v-application .overflow-auto{overflow:auto!important}.v-application .overflow-hidden{overflow:hidden!important}.v-application .overflow-visible{overflow:visible!important}.v-application .overflow-x-auto{overflow-x:auto!important}.v-application .overflow-x-hidden{overflow-x:hidden!important}.v-application .overflow-y-auto{overflow-y:auto!important}.v-application .overflow-y-hidden{overflow-y:hidden!important}.v-application .d-none{display:none!important}.v-application .d-inline{display:inline!important}.v-application .d-inline-block{display:inline-block!important}.v-application .d-block{display:block!important}.v-application .d-table{display:table!important}.v-application .d-table-row{display:table-row!important}.v-application .d-table-cell{display:table-cell!important}.v-application .d-flex{display:flex!important}.v-application .d-inline-flex{display:inline-flex!important}.v-application .float-none{float:none!important}.v-application .float-left{float:left!important}.v-application .float-right{float:right!important}.v-application--is-rtl .float-end{float:left!important}.v-application--is-ltr .float-end,.v-application--is-rtl .float-start{float:right!important}.v-application--is-ltr .float-start{float:left!important}.v-application .flex-fill{flex:1 1 auto!important}.v-application .flex-row{flex-direction:row!important}.v-application .flex-column{flex-direction:column!important}.v-application .flex-row-reverse{flex-direction:row-reverse!important}.v-application .flex-column-reverse{flex-direction:column-reverse!important}.v-application .flex-grow-0{flex-grow:0!important}.v-application .flex-grow-1{flex-grow:1!important}.v-application .flex-shrink-0{flex-shrink:0!important}.v-application .flex-shrink-1{flex-shrink:1!important}.v-application .flex-wrap{flex-wrap:wrap!important}.v-application .flex-nowrap{flex-wrap:nowrap!important}.v-application .flex-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-start{justify-content:flex-start!important}.v-application .justify-end{justify-content:flex-end!important}.v-application .justify-center{justify-content:center!important}.v-application .justify-space-between{justify-content:space-between!important}.v-application .justify-space-around{justify-content:space-around!important}.v-application .align-start{align-items:flex-start!important}.v-application .align-end{align-items:flex-end!important}.v-application .align-center{align-items:center!important}.v-application .align-baseline{align-items:baseline!important}.v-application .align-stretch{align-items:stretch!important}.v-application .align-content-start{align-content:flex-start!important}.v-application .align-content-end{align-content:flex-end!important}.v-application .align-content-center{align-content:center!important}.v-application .align-content-space-between{align-content:space-between!important}.v-application .align-content-space-around{align-content:space-around!important}.v-application .align-content-stretch{align-content:stretch!important}.v-application .align-self-auto{align-self:auto!important}.v-application .align-self-start{align-self:flex-start!important}.v-application .align-self-end{align-self:flex-end!important}.v-application .align-self-center{align-self:center!important}.v-application .align-self-baseline{align-self:baseline!important}.v-application .align-self-stretch{align-self:stretch!important}.v-application .order-first{order:-1!important}.v-application .order-0{order:0!important}.v-application .order-1{order:1!important}.v-application .order-2{order:2!important}.v-application .order-3{order:3!important}.v-application .order-4{order:4!important}.v-application .order-5{order:5!important}.v-application .order-6{order:6!important}.v-application .order-7{order:7!important}.v-application .order-8{order:8!important}.v-application .order-9{order:9!important}.v-application .order-10{order:10!important}.v-application .order-11{order:11!important}.v-application .order-12{order:12!important}.v-application .order-last{order:13!important}.v-application .ma-0{margin:0!important}.v-application .ma-1{margin:4px!important}.v-application .ma-2{margin:8px!important}.v-application .ma-3{margin:12px!important}.v-application .ma-4{margin:16px!important}.v-application .ma-5{margin:20px!important}.v-application .ma-6{margin:24px!important}.v-application .ma-7{margin:28px!important}.v-application .ma-8{margin:32px!important}.v-application .ma-9{margin:36px!important}.v-application .ma-10{margin:40px!important}.v-application .ma-11{margin:44px!important}.v-application .ma-12{margin:48px!important}.v-application .ma-13{margin:52px!important}.v-application .ma-14{margin:56px!important}.v-application .ma-15{margin:60px!important}.v-application .ma-16{margin:64px!important}.v-application .ma-auto{margin:auto!important}.v-application .mx-0{margin-right:0!important;margin-left:0!important}.v-application .mx-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-0{margin-top:0!important}.v-application .mt-1{margin-top:4px!important}.v-application .mt-2{margin-top:8px!important}.v-application .mt-3{margin-top:12px!important}.v-application .mt-4{margin-top:16px!important}.v-application .mt-5{margin-top:20px!important}.v-application .mt-6{margin-top:24px!important}.v-application .mt-7{margin-top:28px!important}.v-application .mt-8{margin-top:32px!important}.v-application .mt-9{margin-top:36px!important}.v-application .mt-10{margin-top:40px!important}.v-application .mt-11{margin-top:44px!important}.v-application .mt-12{margin-top:48px!important}.v-application .mt-13{margin-top:52px!important}.v-application .mt-14{margin-top:56px!important}.v-application .mt-15{margin-top:60px!important}.v-application .mt-16{margin-top:64px!important}.v-application .mt-auto{margin-top:auto!important}.v-application .mr-0{margin-right:0!important}.v-application .mr-1{margin-right:4px!important}.v-application .mr-2{margin-right:8px!important}.v-application .mr-3{margin-right:12px!important}.v-application .mr-4{margin-right:16px!important}.v-application .mr-5{margin-right:20px!important}.v-application .mr-6{margin-right:24px!important}.v-application .mr-7{margin-right:28px!important}.v-application .mr-8{margin-right:32px!important}.v-application .mr-9{margin-right:36px!important}.v-application .mr-10{margin-right:40px!important}.v-application .mr-11{margin-right:44px!important}.v-application .mr-12{margin-right:48px!important}.v-application .mr-13{margin-right:52px!important}.v-application .mr-14{margin-right:56px!important}.v-application .mr-15{margin-right:60px!important}.v-application .mr-16{margin-right:64px!important}.v-application .mr-auto{margin-right:auto!important}.v-application .mb-0{margin-bottom:0!important}.v-application .mb-1{margin-bottom:4px!important}.v-application .mb-2{margin-bottom:8px!important}.v-application .mb-3{margin-bottom:12px!important}.v-application .mb-4{margin-bottom:16px!important}.v-application .mb-5{margin-bottom:20px!important}.v-application .mb-6{margin-bottom:24px!important}.v-application .mb-7{margin-bottom:28px!important}.v-application .mb-8{margin-bottom:32px!important}.v-application .mb-9{margin-bottom:36px!important}.v-application .mb-10{margin-bottom:40px!important}.v-application .mb-11{margin-bottom:44px!important}.v-application .mb-12{margin-bottom:48px!important}.v-application .mb-13{margin-bottom:52px!important}.v-application .mb-14{margin-bottom:56px!important}.v-application .mb-15{margin-bottom:60px!important}.v-application .mb-16{margin-bottom:64px!important}.v-application .mb-auto{margin-bottom:auto!important}.v-application .ml-0{margin-left:0!important}.v-application .ml-1{margin-left:4px!important}.v-application .ml-2{margin-left:8px!important}.v-application .ml-3{margin-left:12px!important}.v-application .ml-4{margin-left:16px!important}.v-application .ml-5{margin-left:20px!important}.v-application .ml-6{margin-left:24px!important}.v-application .ml-7{margin-left:28px!important}.v-application .ml-8{margin-left:32px!important}.v-application .ml-9{margin-left:36px!important}.v-application .ml-10{margin-left:40px!important}.v-application .ml-11{margin-left:44px!important}.v-application .ml-12{margin-left:48px!important}.v-application .ml-13{margin-left:52px!important}.v-application .ml-14{margin-left:56px!important}.v-application .ml-15{margin-left:60px!important}.v-application .ml-16{margin-left:64px!important}.v-application .ml-auto{margin-left:auto!important}.v-application--is-ltr .ms-0{margin-left:0!important}.v-application--is-rtl .ms-0{margin-right:0!important}.v-application--is-ltr .ms-1{margin-left:4px!important}.v-application--is-rtl .ms-1{margin-right:4px!important}.v-application--is-ltr .ms-2{margin-left:8px!important}.v-application--is-rtl .ms-2{margin-right:8px!important}.v-application--is-ltr .ms-3{margin-left:12px!important}.v-application--is-rtl .ms-3{margin-right:12px!important}.v-application--is-ltr .ms-4{margin-left:16px!important}.v-application--is-rtl .ms-4{margin-right:16px!important}.v-application--is-ltr .ms-5{margin-left:20px!important}.v-application--is-rtl .ms-5{margin-right:20px!important}.v-application--is-ltr .ms-6{margin-left:24px!important}.v-application--is-rtl .ms-6{margin-right:24px!important}.v-application--is-ltr .ms-7{margin-left:28px!important}.v-application--is-rtl .ms-7{margin-right:28px!important}.v-application--is-ltr .ms-8{margin-left:32px!important}.v-application--is-rtl .ms-8{margin-right:32px!important}.v-application--is-ltr .ms-9{margin-left:36px!important}.v-application--is-rtl .ms-9{margin-right:36px!important}.v-application--is-ltr .ms-10{margin-left:40px!important}.v-application--is-rtl .ms-10{margin-right:40px!important}.v-application--is-ltr .ms-11{margin-left:44px!important}.v-application--is-rtl .ms-11{margin-right:44px!important}.v-application--is-ltr .ms-12{margin-left:48px!important}.v-application--is-rtl .ms-12{margin-right:48px!important}.v-application--is-ltr .ms-13{margin-left:52px!important}.v-application--is-rtl .ms-13{margin-right:52px!important}.v-application--is-ltr .ms-14{margin-left:56px!important}.v-application--is-rtl .ms-14{margin-right:56px!important}.v-application--is-ltr .ms-15{margin-left:60px!important}.v-application--is-rtl .ms-15{margin-right:60px!important}.v-application--is-ltr .ms-16{margin-left:64px!important}.v-application--is-rtl .ms-16{margin-right:64px!important}.v-application--is-ltr .ms-auto{margin-left:auto!important}.v-application--is-rtl .ms-auto{margin-right:auto!important}.v-application--is-ltr .me-0{margin-right:0!important}.v-application--is-rtl .me-0{margin-left:0!important}.v-application--is-ltr .me-1{margin-right:4px!important}.v-application--is-rtl .me-1{margin-left:4px!important}.v-application--is-ltr .me-2{margin-right:8px!important}.v-application--is-rtl .me-2{margin-left:8px!important}.v-application--is-ltr .me-3{margin-right:12px!important}.v-application--is-rtl .me-3{margin-left:12px!important}.v-application--is-ltr .me-4{margin-right:16px!important}.v-application--is-rtl .me-4{margin-left:16px!important}.v-application--is-ltr .me-5{margin-right:20px!important}.v-application--is-rtl .me-5{margin-left:20px!important}.v-application--is-ltr .me-6{margin-right:24px!important}.v-application--is-rtl .me-6{margin-left:24px!important}.v-application--is-ltr .me-7{margin-right:28px!important}.v-application--is-rtl .me-7{margin-left:28px!important}.v-application--is-ltr .me-8{margin-right:32px!important}.v-application--is-rtl .me-8{margin-left:32px!important}.v-application--is-ltr .me-9{margin-right:36px!important}.v-application--is-rtl .me-9{margin-left:36px!important}.v-application--is-ltr .me-10{margin-right:40px!important}.v-application--is-rtl .me-10{margin-left:40px!important}.v-application--is-ltr .me-11{margin-right:44px!important}.v-application--is-rtl .me-11{margin-left:44px!important}.v-application--is-ltr .me-12{margin-right:48px!important}.v-application--is-rtl .me-12{margin-left:48px!important}.v-application--is-ltr .me-13{margin-right:52px!important}.v-application--is-rtl .me-13{margin-left:52px!important}.v-application--is-ltr .me-14{margin-right:56px!important}.v-application--is-rtl .me-14{margin-left:56px!important}.v-application--is-ltr .me-15{margin-right:60px!important}.v-application--is-rtl .me-15{margin-left:60px!important}.v-application--is-ltr .me-16{margin-right:64px!important}.v-application--is-rtl .me-16{margin-left:64px!important}.v-application--is-ltr .me-auto{margin-right:auto!important}.v-application--is-rtl .me-auto{margin-left:auto!important}.v-application .ma-n1{margin:-4px!important}.v-application .ma-n2{margin:-8px!important}.v-application .ma-n3{margin:-12px!important}.v-application .ma-n4{margin:-16px!important}.v-application .ma-n5{margin:-20px!important}.v-application .ma-n6{margin:-24px!important}.v-application .ma-n7{margin:-28px!important}.v-application .ma-n8{margin:-32px!important}.v-application .ma-n9{margin:-36px!important}.v-application .ma-n10{margin:-40px!important}.v-application .ma-n11{margin:-44px!important}.v-application .ma-n12{margin:-48px!important}.v-application .ma-n13{margin:-52px!important}.v-application .ma-n14{margin:-56px!important}.v-application .ma-n15{margin:-60px!important}.v-application .ma-n16{margin:-64px!important}.v-application .mx-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-n1{margin-top:-4px!important}.v-application .mt-n2{margin-top:-8px!important}.v-application .mt-n3{margin-top:-12px!important}.v-application .mt-n4{margin-top:-16px!important}.v-application .mt-n5{margin-top:-20px!important}.v-application .mt-n6{margin-top:-24px!important}.v-application .mt-n7{margin-top:-28px!important}.v-application .mt-n8{margin-top:-32px!important}.v-application .mt-n9{margin-top:-36px!important}.v-application .mt-n10{margin-top:-40px!important}.v-application .mt-n11{margin-top:-44px!important}.v-application .mt-n12{margin-top:-48px!important}.v-application .mt-n13{margin-top:-52px!important}.v-application .mt-n14{margin-top:-56px!important}.v-application .mt-n15{margin-top:-60px!important}.v-application .mt-n16{margin-top:-64px!important}.v-application .mr-n1{margin-right:-4px!important}.v-application .mr-n2{margin-right:-8px!important}.v-application .mr-n3{margin-right:-12px!important}.v-application .mr-n4{margin-right:-16px!important}.v-application .mr-n5{margin-right:-20px!important}.v-application .mr-n6{margin-right:-24px!important}.v-application .mr-n7{margin-right:-28px!important}.v-application .mr-n8{margin-right:-32px!important}.v-application .mr-n9{margin-right:-36px!important}.v-application .mr-n10{margin-right:-40px!important}.v-application .mr-n11{margin-right:-44px!important}.v-application .mr-n12{margin-right:-48px!important}.v-application .mr-n13{margin-right:-52px!important}.v-application .mr-n14{margin-right:-56px!important}.v-application .mr-n15{margin-right:-60px!important}.v-application .mr-n16{margin-right:-64px!important}.v-application .mb-n1{margin-bottom:-4px!important}.v-application .mb-n2{margin-bottom:-8px!important}.v-application .mb-n3{margin-bottom:-12px!important}.v-application .mb-n4{margin-bottom:-16px!important}.v-application .mb-n5{margin-bottom:-20px!important}.v-application .mb-n6{margin-bottom:-24px!important}.v-application .mb-n7{margin-bottom:-28px!important}.v-application .mb-n8{margin-bottom:-32px!important}.v-application .mb-n9{margin-bottom:-36px!important}.v-application .mb-n10{margin-bottom:-40px!important}.v-application .mb-n11{margin-bottom:-44px!important}.v-application .mb-n12{margin-bottom:-48px!important}.v-application .mb-n13{margin-bottom:-52px!important}.v-application .mb-n14{margin-bottom:-56px!important}.v-application .mb-n15{margin-bottom:-60px!important}.v-application .mb-n16{margin-bottom:-64px!important}.v-application .ml-n1{margin-left:-4px!important}.v-application .ml-n2{margin-left:-8px!important}.v-application .ml-n3{margin-left:-12px!important}.v-application .ml-n4{margin-left:-16px!important}.v-application .ml-n5{margin-left:-20px!important}.v-application .ml-n6{margin-left:-24px!important}.v-application .ml-n7{margin-left:-28px!important}.v-application .ml-n8{margin-left:-32px!important}.v-application .ml-n9{margin-left:-36px!important}.v-application .ml-n10{margin-left:-40px!important}.v-application .ml-n11{margin-left:-44px!important}.v-application .ml-n12{margin-left:-48px!important}.v-application .ml-n13{margin-left:-52px!important}.v-application .ml-n14{margin-left:-56px!important}.v-application .ml-n15{margin-left:-60px!important}.v-application .ml-n16{margin-left:-64px!important}.v-application--is-ltr .ms-n1{margin-left:-4px!important}.v-application--is-rtl .ms-n1{margin-right:-4px!important}.v-application--is-ltr .ms-n2{margin-left:-8px!important}.v-application--is-rtl .ms-n2{margin-right:-8px!important}.v-application--is-ltr .ms-n3{margin-left:-12px!important}.v-application--is-rtl .ms-n3{margin-right:-12px!important}.v-application--is-ltr .ms-n4{margin-left:-16px!important}.v-application--is-rtl .ms-n4{margin-right:-16px!important}.v-application--is-ltr .ms-n5{margin-left:-20px!important}.v-application--is-rtl .ms-n5{margin-right:-20px!important}.v-application--is-ltr .ms-n6{margin-left:-24px!important}.v-application--is-rtl .ms-n6{margin-right:-24px!important}.v-application--is-ltr .ms-n7{margin-left:-28px!important}.v-application--is-rtl .ms-n7{margin-right:-28px!important}.v-application--is-ltr .ms-n8{margin-left:-32px!important}.v-application--is-rtl .ms-n8{margin-right:-32px!important}.v-application--is-ltr .ms-n9{margin-left:-36px!important}.v-application--is-rtl .ms-n9{margin-right:-36px!important}.v-application--is-ltr .ms-n10{margin-left:-40px!important}.v-application--is-rtl .ms-n10{margin-right:-40px!important}.v-application--is-ltr .ms-n11{margin-left:-44px!important}.v-application--is-rtl .ms-n11{margin-right:-44px!important}.v-application--is-ltr .ms-n12{margin-left:-48px!important}.v-application--is-rtl .ms-n12{margin-right:-48px!important}.v-application--is-ltr .ms-n13{margin-left:-52px!important}.v-application--is-rtl .ms-n13{margin-right:-52px!important}.v-application--is-ltr .ms-n14{margin-left:-56px!important}.v-application--is-rtl .ms-n14{margin-right:-56px!important}.v-application--is-ltr .ms-n15{margin-left:-60px!important}.v-application--is-rtl .ms-n15{margin-right:-60px!important}.v-application--is-ltr .ms-n16{margin-left:-64px!important}.v-application--is-rtl .ms-n16{margin-right:-64px!important}.v-application--is-ltr .me-n1{margin-right:-4px!important}.v-application--is-rtl .me-n1{margin-left:-4px!important}.v-application--is-ltr .me-n2{margin-right:-8px!important}.v-application--is-rtl .me-n2{margin-left:-8px!important}.v-application--is-ltr .me-n3{margin-right:-12px!important}.v-application--is-rtl .me-n3{margin-left:-12px!important}.v-application--is-ltr .me-n4{margin-right:-16px!important}.v-application--is-rtl .me-n4{margin-left:-16px!important}.v-application--is-ltr .me-n5{margin-right:-20px!important}.v-application--is-rtl .me-n5{margin-left:-20px!important}.v-application--is-ltr .me-n6{margin-right:-24px!important}.v-application--is-rtl .me-n6{margin-left:-24px!important}.v-application--is-ltr .me-n7{margin-right:-28px!important}.v-application--is-rtl .me-n7{margin-left:-28px!important}.v-application--is-ltr .me-n8{margin-right:-32px!important}.v-application--is-rtl .me-n8{margin-left:-32px!important}.v-application--is-ltr .me-n9{margin-right:-36px!important}.v-application--is-rtl .me-n9{margin-left:-36px!important}.v-application--is-ltr .me-n10{margin-right:-40px!important}.v-application--is-rtl .me-n10{margin-left:-40px!important}.v-application--is-ltr .me-n11{margin-right:-44px!important}.v-application--is-rtl .me-n11{margin-left:-44px!important}.v-application--is-ltr .me-n12{margin-right:-48px!important}.v-application--is-rtl .me-n12{margin-left:-48px!important}.v-application--is-ltr .me-n13{margin-right:-52px!important}.v-application--is-rtl .me-n13{margin-left:-52px!important}.v-application--is-ltr .me-n14{margin-right:-56px!important}.v-application--is-rtl .me-n14{margin-left:-56px!important}.v-application--is-ltr .me-n15{margin-right:-60px!important}.v-application--is-rtl .me-n15{margin-left:-60px!important}.v-application--is-ltr .me-n16{margin-right:-64px!important}.v-application--is-rtl .me-n16{margin-left:-64px!important}.v-application .pa-0{padding:0!important}.v-application .pa-1{padding:4px!important}.v-application .pa-2{padding:8px!important}.v-application .pa-3{padding:12px!important}.v-application .pa-4{padding:16px!important}.v-application .pa-5{padding:20px!important}.v-application .pa-6{padding:24px!important}.v-application .pa-7{padding:28px!important}.v-application .pa-8{padding:32px!important}.v-application .pa-9{padding:36px!important}.v-application .pa-10{padding:40px!important}.v-application .pa-11{padding:44px!important}.v-application .pa-12{padding:48px!important}.v-application .pa-13{padding:52px!important}.v-application .pa-14{padding:56px!important}.v-application .pa-15{padding:60px!important}.v-application .pa-16{padding:64px!important}.v-application .px-0{padding-right:0!important;padding-left:0!important}.v-application .px-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-0{padding-top:0!important}.v-application .pt-1{padding-top:4px!important}.v-application .pt-2{padding-top:8px!important}.v-application .pt-3{padding-top:12px!important}.v-application .pt-4{padding-top:16px!important}.v-application .pt-5{padding-top:20px!important}.v-application .pt-6{padding-top:24px!important}.v-application .pt-7{padding-top:28px!important}.v-application .pt-8{padding-top:32px!important}.v-application .pt-9{padding-top:36px!important}.v-application .pt-10{padding-top:40px!important}.v-application .pt-11{padding-top:44px!important}.v-application .pt-12{padding-top:48px!important}.v-application .pt-13{padding-top:52px!important}.v-application .pt-14{padding-top:56px!important}.v-application .pt-15{padding-top:60px!important}.v-application .pt-16{padding-top:64px!important}.v-application .pr-0{padding-right:0!important}.v-application .pr-1{padding-right:4px!important}.v-application .pr-2{padding-right:8px!important}.v-application .pr-3{padding-right:12px!important}.v-application .pr-4{padding-right:16px!important}.v-application .pr-5{padding-right:20px!important}.v-application .pr-6{padding-right:24px!important}.v-application .pr-7{padding-right:28px!important}.v-application .pr-8{padding-right:32px!important}.v-application .pr-9{padding-right:36px!important}.v-application .pr-10{padding-right:40px!important}.v-application .pr-11{padding-right:44px!important}.v-application .pr-12{padding-right:48px!important}.v-application .pr-13{padding-right:52px!important}.v-application .pr-14{padding-right:56px!important}.v-application .pr-15{padding-right:60px!important}.v-application .pr-16{padding-right:64px!important}.v-application .pb-0{padding-bottom:0!important}.v-application .pb-1{padding-bottom:4px!important}.v-application .pb-2{padding-bottom:8px!important}.v-application .pb-3{padding-bottom:12px!important}.v-application .pb-4{padding-bottom:16px!important}.v-application .pb-5{padding-bottom:20px!important}.v-application .pb-6{padding-bottom:24px!important}.v-application .pb-7{padding-bottom:28px!important}.v-application .pb-8{padding-bottom:32px!important}.v-application .pb-9{padding-bottom:36px!important}.v-application .pb-10{padding-bottom:40px!important}.v-application .pb-11{padding-bottom:44px!important}.v-application .pb-12{padding-bottom:48px!important}.v-application .pb-13{padding-bottom:52px!important}.v-application .pb-14{padding-bottom:56px!important}.v-application .pb-15{padding-bottom:60px!important}.v-application .pb-16{padding-bottom:64px!important}.v-application .pl-0{padding-left:0!important}.v-application .pl-1{padding-left:4px!important}.v-application .pl-2{padding-left:8px!important}.v-application .pl-3{padding-left:12px!important}.v-application .pl-4{padding-left:16px!important}.v-application .pl-5{padding-left:20px!important}.v-application .pl-6{padding-left:24px!important}.v-application .pl-7{padding-left:28px!important}.v-application .pl-8{padding-left:32px!important}.v-application .pl-9{padding-left:36px!important}.v-application .pl-10{padding-left:40px!important}.v-application .pl-11{padding-left:44px!important}.v-application .pl-12{padding-left:48px!important}.v-application .pl-13{padding-left:52px!important}.v-application .pl-14{padding-left:56px!important}.v-application .pl-15{padding-left:60px!important}.v-application .pl-16{padding-left:64px!important}.v-application--is-ltr .ps-0{padding-left:0!important}.v-application--is-rtl .ps-0{padding-right:0!important}.v-application--is-ltr .ps-1{padding-left:4px!important}.v-application--is-rtl .ps-1{padding-right:4px!important}.v-application--is-ltr .ps-2{padding-left:8px!important}.v-application--is-rtl .ps-2{padding-right:8px!important}.v-application--is-ltr .ps-3{padding-left:12px!important}.v-application--is-rtl .ps-3{padding-right:12px!important}.v-application--is-ltr .ps-4{padding-left:16px!important}.v-application--is-rtl .ps-4{padding-right:16px!important}.v-application--is-ltr .ps-5{padding-left:20px!important}.v-application--is-rtl .ps-5{padding-right:20px!important}.v-application--is-ltr .ps-6{padding-left:24px!important}.v-application--is-rtl .ps-6{padding-right:24px!important}.v-application--is-ltr .ps-7{padding-left:28px!important}.v-application--is-rtl .ps-7{padding-right:28px!important}.v-application--is-ltr .ps-8{padding-left:32px!important}.v-application--is-rtl .ps-8{padding-right:32px!important}.v-application--is-ltr .ps-9{padding-left:36px!important}.v-application--is-rtl .ps-9{padding-right:36px!important}.v-application--is-ltr .ps-10{padding-left:40px!important}.v-application--is-rtl .ps-10{padding-right:40px!important}.v-application--is-ltr .ps-11{padding-left:44px!important}.v-application--is-rtl .ps-11{padding-right:44px!important}.v-application--is-ltr .ps-12{padding-left:48px!important}.v-application--is-rtl .ps-12{padding-right:48px!important}.v-application--is-ltr .ps-13{padding-left:52px!important}.v-application--is-rtl .ps-13{padding-right:52px!important}.v-application--is-ltr .ps-14{padding-left:56px!important}.v-application--is-rtl .ps-14{padding-right:56px!important}.v-application--is-ltr .ps-15{padding-left:60px!important}.v-application--is-rtl .ps-15{padding-right:60px!important}.v-application--is-ltr .ps-16{padding-left:64px!important}.v-application--is-rtl .ps-16{padding-right:64px!important}.v-application--is-ltr .pe-0{padding-right:0!important}.v-application--is-rtl .pe-0{padding-left:0!important}.v-application--is-ltr .pe-1{padding-right:4px!important}.v-application--is-rtl .pe-1{padding-left:4px!important}.v-application--is-ltr .pe-2{padding-right:8px!important}.v-application--is-rtl .pe-2{padding-left:8px!important}.v-application--is-ltr .pe-3{padding-right:12px!important}.v-application--is-rtl .pe-3{padding-left:12px!important}.v-application--is-ltr .pe-4{padding-right:16px!important}.v-application--is-rtl .pe-4{padding-left:16px!important}.v-application--is-ltr .pe-5{padding-right:20px!important}.v-application--is-rtl .pe-5{padding-left:20px!important}.v-application--is-ltr .pe-6{padding-right:24px!important}.v-application--is-rtl .pe-6{padding-left:24px!important}.v-application--is-ltr .pe-7{padding-right:28px!important}.v-application--is-rtl .pe-7{padding-left:28px!important}.v-application--is-ltr .pe-8{padding-right:32px!important}.v-application--is-rtl .pe-8{padding-left:32px!important}.v-application--is-ltr .pe-9{padding-right:36px!important}.v-application--is-rtl .pe-9{padding-left:36px!important}.v-application--is-ltr .pe-10{padding-right:40px!important}.v-application--is-rtl .pe-10{padding-left:40px!important}.v-application--is-ltr .pe-11{padding-right:44px!important}.v-application--is-rtl .pe-11{padding-left:44px!important}.v-application--is-ltr .pe-12{padding-right:48px!important}.v-application--is-rtl .pe-12{padding-left:48px!important}.v-application--is-ltr .pe-13{padding-right:52px!important}.v-application--is-rtl .pe-13{padding-left:52px!important}.v-application--is-ltr .pe-14{padding-right:56px!important}.v-application--is-rtl .pe-14{padding-left:56px!important}.v-application--is-ltr .pe-15{padding-right:60px!important}.v-application--is-rtl .pe-15{padding-left:60px!important}.v-application--is-ltr .pe-16{padding-right:64px!important}.v-application--is-rtl .pe-16{padding-left:64px!important}.v-application .rounded-0{border-radius:0!important}.v-application .rounded-sm{border-radius:2px!important}.v-application .rounded{border-radius:4px!important}.v-application .rounded-lg{border-radius:8px!important}.v-application .rounded-xl{border-radius:24px!important}.v-application .rounded-pill{border-radius:9999px!important}.v-application .rounded-circle{border-radius:50%!important}.v-application .rounded-t-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.v-application .rounded-t-sm{border-top-left-radius:2px!important;border-top-right-radius:2px!important}.v-application .rounded-t{border-top-left-radius:4px!important;border-top-right-radius:4px!important}.v-application .rounded-t-lg{border-top-left-radius:8px!important;border-top-right-radius:8px!important}.v-application .rounded-t-xl{border-top-left-radius:24px!important;border-top-right-radius:24px!important}.v-application .rounded-t-pill{border-top-left-radius:9999px!important;border-top-right-radius:9999px!important}.v-application .rounded-t-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}.v-application .rounded-r-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.v-application .rounded-r-sm{border-top-right-radius:2px!important;border-bottom-right-radius:2px!important}.v-application .rounded-r{border-top-right-radius:4px!important;border-bottom-right-radius:4px!important}.v-application .rounded-r-lg{border-top-right-radius:8px!important;border-bottom-right-radius:8px!important}.v-application .rounded-r-xl{border-top-right-radius:24px!important;border-bottom-right-radius:24px!important}.v-application .rounded-r-pill{border-top-right-radius:9999px!important;border-bottom-right-radius:9999px!important}.v-application .rounded-r-circle{border-top-right-radius:50%!important;border-bottom-right-radius:50%!important}.v-application .rounded-b-0{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.v-application .rounded-b-sm{border-bottom-left-radius:2px!important;border-bottom-right-radius:2px!important}.v-application .rounded-b{border-bottom-left-radius:4px!important;border-bottom-right-radius:4px!important}.v-application .rounded-b-lg{border-bottom-left-radius:8px!important;border-bottom-right-radius:8px!important}.v-application .rounded-b-xl{border-bottom-left-radius:24px!important;border-bottom-right-radius:24px!important}.v-application .rounded-b-pill{border-bottom-left-radius:9999px!important;border-bottom-right-radius:9999px!important}.v-application .rounded-b-circle{border-bottom-left-radius:50%!important;border-bottom-right-radius:50%!important}.v-application .rounded-l-0{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.v-application .rounded-l-sm{border-top-left-radius:2px!important;border-bottom-left-radius:2px!important}.v-application .rounded-l{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important}.v-application .rounded-l-lg{border-top-left-radius:8px!important;border-bottom-left-radius:8px!important}.v-application .rounded-l-xl{border-top-left-radius:24px!important;border-bottom-left-radius:24px!important}.v-application .rounded-l-pill{border-top-left-radius:9999px!important;border-bottom-left-radius:9999px!important}.v-application .rounded-l-circle{border-top-left-radius:50%!important;border-bottom-left-radius:50%!important}.v-application .rounded-tl-0{border-top-left-radius:0!important}.v-application .rounded-tl-sm{border-top-left-radius:2px!important}.v-application .rounded-tl{border-top-left-radius:4px!important}.v-application .rounded-tl-lg{border-top-left-radius:8px!important}.v-application .rounded-tl-xl{border-top-left-radius:24px!important}.v-application .rounded-tl-pill{border-top-left-radius:9999px!important}.v-application .rounded-tl-circle{border-top-left-radius:50%!important}.v-application .rounded-tr-0{border-top-right-radius:0!important}.v-application .rounded-tr-sm{border-top-right-radius:2px!important}.v-application .rounded-tr{border-top-right-radius:4px!important}.v-application .rounded-tr-lg{border-top-right-radius:8px!important}.v-application .rounded-tr-xl{border-top-right-radius:24px!important}.v-application .rounded-tr-pill{border-top-right-radius:9999px!important}.v-application .rounded-tr-circle{border-top-right-radius:50%!important}.v-application .rounded-br-0{border-bottom-right-radius:0!important}.v-application .rounded-br-sm{border-bottom-right-radius:2px!important}.v-application .rounded-br{border-bottom-right-radius:4px!important}.v-application .rounded-br-lg{border-bottom-right-radius:8px!important}.v-application .rounded-br-xl{border-bottom-right-radius:24px!important}.v-application .rounded-br-pill{border-bottom-right-radius:9999px!important}.v-application .rounded-br-circle{border-bottom-right-radius:50%!important}.v-application .rounded-bl-0{border-bottom-left-radius:0!important}.v-application .rounded-bl-sm{border-bottom-left-radius:2px!important}.v-application .rounded-bl{border-bottom-left-radius:4px!important}.v-application .rounded-bl-lg{border-bottom-left-radius:8px!important}.v-application .rounded-bl-xl{border-bottom-left-radius:24px!important}.v-application .rounded-bl-pill{border-bottom-left-radius:9999px!important}.v-application .rounded-bl-circle{border-bottom-left-radius:50%!important}.v-application .text-left{text-align:left!important}.v-application .text-right{text-align:right!important}.v-application .text-center{text-align:center!important}.v-application .text-justify{text-align:justify!important}[dir=ltr] .v-application .text-start{text-align:left!important}[dir=ltr] .v-application .text-end,[dir=rtl] .v-application .text-start{text-align:right!important}[dir=rtl] .v-application .text-end{text-align:left!important}.v-application .text-decoration-line-through{text-decoration:line-through!important}.v-application .text-decoration-none{text-decoration:none!important}.v-application .text-decoration-overline{text-decoration:overline!important}.v-application .text-decoration-underline{text-decoration:underline!important}.v-application .text-wrap{white-space:normal!important}.v-application .text-no-wrap{white-space:nowrap!important}.v-application .text-pre{white-space:pre!important}.v-application .text-pre-line{white-space:pre-line!important}.v-application .text-pre-wrap{white-space:pre-wrap!important}.v-application .text-break{word-wrap:break-word!important;word-break:break-word!important}.v-application .text-truncate{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.v-application .text-none{text-transform:none!important}.v-application .text-capitalize{text-transform:capitalize!important}.v-application .text-lowercase{text-transform:lowercase!important}.v-application .text-uppercase{text-transform:uppercase!important}.v-application .text-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-h1,.v-application .text-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-h3,.v-application .text-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-h5,.v-application .text-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-body-1{font-size:1rem!important;line-height:1.5rem;letter-spacing:.03125em!important}.v-application .text-body-1,.v-application .text-body-2{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-body-2{font-size:.875rem!important;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-button{font-size:.875rem!important;font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;font-family:\"Roboto\",sans-serif!important;text-transform:uppercase!important}.v-application .text-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-caption,.v-application .text-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}@media(min-width:600px){.v-application .d-sm-none{display:none!important}.v-application .d-sm-inline{display:inline!important}.v-application .d-sm-inline-block{display:inline-block!important}.v-application .d-sm-block{display:block!important}.v-application .d-sm-table{display:table!important}.v-application .d-sm-table-row{display:table-row!important}.v-application .d-sm-table-cell{display:table-cell!important}.v-application .d-sm-flex{display:flex!important}.v-application .d-sm-inline-flex{display:inline-flex!important}.v-application .float-sm-none{float:none!important}.v-application .float-sm-left{float:left!important}.v-application .float-sm-right{float:right!important}.v-application--is-rtl .float-sm-end{float:left!important}.v-application--is-ltr .float-sm-end,.v-application--is-rtl .float-sm-start{float:right!important}.v-application--is-ltr .float-sm-start{float:left!important}.v-application .flex-sm-fill{flex:1 1 auto!important}.v-application .flex-sm-row{flex-direction:row!important}.v-application .flex-sm-column{flex-direction:column!important}.v-application .flex-sm-row-reverse{flex-direction:row-reverse!important}.v-application .flex-sm-column-reverse{flex-direction:column-reverse!important}.v-application .flex-sm-grow-0{flex-grow:0!important}.v-application .flex-sm-grow-1{flex-grow:1!important}.v-application .flex-sm-shrink-0{flex-shrink:0!important}.v-application .flex-sm-shrink-1{flex-shrink:1!important}.v-application .flex-sm-wrap{flex-wrap:wrap!important}.v-application .flex-sm-nowrap{flex-wrap:nowrap!important}.v-application .flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-sm-start{justify-content:flex-start!important}.v-application .justify-sm-end{justify-content:flex-end!important}.v-application .justify-sm-center{justify-content:center!important}.v-application .justify-sm-space-between{justify-content:space-between!important}.v-application .justify-sm-space-around{justify-content:space-around!important}.v-application .align-sm-start{align-items:flex-start!important}.v-application .align-sm-end{align-items:flex-end!important}.v-application .align-sm-center{align-items:center!important}.v-application .align-sm-baseline{align-items:baseline!important}.v-application .align-sm-stretch{align-items:stretch!important}.v-application .align-content-sm-start{align-content:flex-start!important}.v-application .align-content-sm-end{align-content:flex-end!important}.v-application .align-content-sm-center{align-content:center!important}.v-application .align-content-sm-space-between{align-content:space-between!important}.v-application .align-content-sm-space-around{align-content:space-around!important}.v-application .align-content-sm-stretch{align-content:stretch!important}.v-application .align-self-sm-auto{align-self:auto!important}.v-application .align-self-sm-start{align-self:flex-start!important}.v-application .align-self-sm-end{align-self:flex-end!important}.v-application .align-self-sm-center{align-self:center!important}.v-application .align-self-sm-baseline{align-self:baseline!important}.v-application .align-self-sm-stretch{align-self:stretch!important}.v-application .order-sm-first{order:-1!important}.v-application .order-sm-0{order:0!important}.v-application .order-sm-1{order:1!important}.v-application .order-sm-2{order:2!important}.v-application .order-sm-3{order:3!important}.v-application .order-sm-4{order:4!important}.v-application .order-sm-5{order:5!important}.v-application .order-sm-6{order:6!important}.v-application .order-sm-7{order:7!important}.v-application .order-sm-8{order:8!important}.v-application .order-sm-9{order:9!important}.v-application .order-sm-10{order:10!important}.v-application .order-sm-11{order:11!important}.v-application .order-sm-12{order:12!important}.v-application .order-sm-last{order:13!important}.v-application .ma-sm-0{margin:0!important}.v-application .ma-sm-1{margin:4px!important}.v-application .ma-sm-2{margin:8px!important}.v-application .ma-sm-3{margin:12px!important}.v-application .ma-sm-4{margin:16px!important}.v-application .ma-sm-5{margin:20px!important}.v-application .ma-sm-6{margin:24px!important}.v-application .ma-sm-7{margin:28px!important}.v-application .ma-sm-8{margin:32px!important}.v-application .ma-sm-9{margin:36px!important}.v-application .ma-sm-10{margin:40px!important}.v-application .ma-sm-11{margin:44px!important}.v-application .ma-sm-12{margin:48px!important}.v-application .ma-sm-13{margin:52px!important}.v-application .ma-sm-14{margin:56px!important}.v-application .ma-sm-15{margin:60px!important}.v-application .ma-sm-16{margin:64px!important}.v-application .ma-sm-auto{margin:auto!important}.v-application .mx-sm-0{margin-right:0!important;margin-left:0!important}.v-application .mx-sm-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-sm-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-sm-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-sm-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-sm-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-sm-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-sm-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-sm-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-sm-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-sm-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-sm-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-sm-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-sm-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-sm-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-sm-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-sm-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-sm-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-sm-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-sm-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-sm-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-sm-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-sm-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-sm-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-sm-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-sm-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-sm-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-sm-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-sm-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-sm-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-sm-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-sm-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-sm-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-sm-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-sm-0{margin-top:0!important}.v-application .mt-sm-1{margin-top:4px!important}.v-application .mt-sm-2{margin-top:8px!important}.v-application .mt-sm-3{margin-top:12px!important}.v-application .mt-sm-4{margin-top:16px!important}.v-application .mt-sm-5{margin-top:20px!important}.v-application .mt-sm-6{margin-top:24px!important}.v-application .mt-sm-7{margin-top:28px!important}.v-application .mt-sm-8{margin-top:32px!important}.v-application .mt-sm-9{margin-top:36px!important}.v-application .mt-sm-10{margin-top:40px!important}.v-application .mt-sm-11{margin-top:44px!important}.v-application .mt-sm-12{margin-top:48px!important}.v-application .mt-sm-13{margin-top:52px!important}.v-application .mt-sm-14{margin-top:56px!important}.v-application .mt-sm-15{margin-top:60px!important}.v-application .mt-sm-16{margin-top:64px!important}.v-application .mt-sm-auto{margin-top:auto!important}.v-application .mr-sm-0{margin-right:0!important}.v-application .mr-sm-1{margin-right:4px!important}.v-application .mr-sm-2{margin-right:8px!important}.v-application .mr-sm-3{margin-right:12px!important}.v-application .mr-sm-4{margin-right:16px!important}.v-application .mr-sm-5{margin-right:20px!important}.v-application .mr-sm-6{margin-right:24px!important}.v-application .mr-sm-7{margin-right:28px!important}.v-application .mr-sm-8{margin-right:32px!important}.v-application .mr-sm-9{margin-right:36px!important}.v-application .mr-sm-10{margin-right:40px!important}.v-application .mr-sm-11{margin-right:44px!important}.v-application .mr-sm-12{margin-right:48px!important}.v-application .mr-sm-13{margin-right:52px!important}.v-application .mr-sm-14{margin-right:56px!important}.v-application .mr-sm-15{margin-right:60px!important}.v-application .mr-sm-16{margin-right:64px!important}.v-application .mr-sm-auto{margin-right:auto!important}.v-application .mb-sm-0{margin-bottom:0!important}.v-application .mb-sm-1{margin-bottom:4px!important}.v-application .mb-sm-2{margin-bottom:8px!important}.v-application .mb-sm-3{margin-bottom:12px!important}.v-application .mb-sm-4{margin-bottom:16px!important}.v-application .mb-sm-5{margin-bottom:20px!important}.v-application .mb-sm-6{margin-bottom:24px!important}.v-application .mb-sm-7{margin-bottom:28px!important}.v-application .mb-sm-8{margin-bottom:32px!important}.v-application .mb-sm-9{margin-bottom:36px!important}.v-application .mb-sm-10{margin-bottom:40px!important}.v-application .mb-sm-11{margin-bottom:44px!important}.v-application .mb-sm-12{margin-bottom:48px!important}.v-application .mb-sm-13{margin-bottom:52px!important}.v-application .mb-sm-14{margin-bottom:56px!important}.v-application .mb-sm-15{margin-bottom:60px!important}.v-application .mb-sm-16{margin-bottom:64px!important}.v-application .mb-sm-auto{margin-bottom:auto!important}.v-application .ml-sm-0{margin-left:0!important}.v-application .ml-sm-1{margin-left:4px!important}.v-application .ml-sm-2{margin-left:8px!important}.v-application .ml-sm-3{margin-left:12px!important}.v-application .ml-sm-4{margin-left:16px!important}.v-application .ml-sm-5{margin-left:20px!important}.v-application .ml-sm-6{margin-left:24px!important}.v-application .ml-sm-7{margin-left:28px!important}.v-application .ml-sm-8{margin-left:32px!important}.v-application .ml-sm-9{margin-left:36px!important}.v-application .ml-sm-10{margin-left:40px!important}.v-application .ml-sm-11{margin-left:44px!important}.v-application .ml-sm-12{margin-left:48px!important}.v-application .ml-sm-13{margin-left:52px!important}.v-application .ml-sm-14{margin-left:56px!important}.v-application .ml-sm-15{margin-left:60px!important}.v-application .ml-sm-16{margin-left:64px!important}.v-application .ml-sm-auto{margin-left:auto!important}.v-application--is-ltr .ms-sm-0{margin-left:0!important}.v-application--is-rtl .ms-sm-0{margin-right:0!important}.v-application--is-ltr .ms-sm-1{margin-left:4px!important}.v-application--is-rtl .ms-sm-1{margin-right:4px!important}.v-application--is-ltr .ms-sm-2{margin-left:8px!important}.v-application--is-rtl .ms-sm-2{margin-right:8px!important}.v-application--is-ltr .ms-sm-3{margin-left:12px!important}.v-application--is-rtl .ms-sm-3{margin-right:12px!important}.v-application--is-ltr .ms-sm-4{margin-left:16px!important}.v-application--is-rtl .ms-sm-4{margin-right:16px!important}.v-application--is-ltr .ms-sm-5{margin-left:20px!important}.v-application--is-rtl .ms-sm-5{margin-right:20px!important}.v-application--is-ltr .ms-sm-6{margin-left:24px!important}.v-application--is-rtl .ms-sm-6{margin-right:24px!important}.v-application--is-ltr .ms-sm-7{margin-left:28px!important}.v-application--is-rtl .ms-sm-7{margin-right:28px!important}.v-application--is-ltr .ms-sm-8{margin-left:32px!important}.v-application--is-rtl .ms-sm-8{margin-right:32px!important}.v-application--is-ltr .ms-sm-9{margin-left:36px!important}.v-application--is-rtl .ms-sm-9{margin-right:36px!important}.v-application--is-ltr .ms-sm-10{margin-left:40px!important}.v-application--is-rtl .ms-sm-10{margin-right:40px!important}.v-application--is-ltr .ms-sm-11{margin-left:44px!important}.v-application--is-rtl .ms-sm-11{margin-right:44px!important}.v-application--is-ltr .ms-sm-12{margin-left:48px!important}.v-application--is-rtl .ms-sm-12{margin-right:48px!important}.v-application--is-ltr .ms-sm-13{margin-left:52px!important}.v-application--is-rtl .ms-sm-13{margin-right:52px!important}.v-application--is-ltr .ms-sm-14{margin-left:56px!important}.v-application--is-rtl .ms-sm-14{margin-right:56px!important}.v-application--is-ltr .ms-sm-15{margin-left:60px!important}.v-application--is-rtl .ms-sm-15{margin-right:60px!important}.v-application--is-ltr .ms-sm-16{margin-left:64px!important}.v-application--is-rtl .ms-sm-16{margin-right:64px!important}.v-application--is-ltr .ms-sm-auto{margin-left:auto!important}.v-application--is-rtl .ms-sm-auto{margin-right:auto!important}.v-application--is-ltr .me-sm-0{margin-right:0!important}.v-application--is-rtl .me-sm-0{margin-left:0!important}.v-application--is-ltr .me-sm-1{margin-right:4px!important}.v-application--is-rtl .me-sm-1{margin-left:4px!important}.v-application--is-ltr .me-sm-2{margin-right:8px!important}.v-application--is-rtl .me-sm-2{margin-left:8px!important}.v-application--is-ltr .me-sm-3{margin-right:12px!important}.v-application--is-rtl .me-sm-3{margin-left:12px!important}.v-application--is-ltr .me-sm-4{margin-right:16px!important}.v-application--is-rtl .me-sm-4{margin-left:16px!important}.v-application--is-ltr .me-sm-5{margin-right:20px!important}.v-application--is-rtl .me-sm-5{margin-left:20px!important}.v-application--is-ltr .me-sm-6{margin-right:24px!important}.v-application--is-rtl .me-sm-6{margin-left:24px!important}.v-application--is-ltr .me-sm-7{margin-right:28px!important}.v-application--is-rtl .me-sm-7{margin-left:28px!important}.v-application--is-ltr .me-sm-8{margin-right:32px!important}.v-application--is-rtl .me-sm-8{margin-left:32px!important}.v-application--is-ltr .me-sm-9{margin-right:36px!important}.v-application--is-rtl .me-sm-9{margin-left:36px!important}.v-application--is-ltr .me-sm-10{margin-right:40px!important}.v-application--is-rtl .me-sm-10{margin-left:40px!important}.v-application--is-ltr .me-sm-11{margin-right:44px!important}.v-application--is-rtl .me-sm-11{margin-left:44px!important}.v-application--is-ltr .me-sm-12{margin-right:48px!important}.v-application--is-rtl .me-sm-12{margin-left:48px!important}.v-application--is-ltr .me-sm-13{margin-right:52px!important}.v-application--is-rtl .me-sm-13{margin-left:52px!important}.v-application--is-ltr .me-sm-14{margin-right:56px!important}.v-application--is-rtl .me-sm-14{margin-left:56px!important}.v-application--is-ltr .me-sm-15{margin-right:60px!important}.v-application--is-rtl .me-sm-15{margin-left:60px!important}.v-application--is-ltr .me-sm-16{margin-right:64px!important}.v-application--is-rtl .me-sm-16{margin-left:64px!important}.v-application--is-ltr .me-sm-auto{margin-right:auto!important}.v-application--is-rtl .me-sm-auto{margin-left:auto!important}.v-application .ma-sm-n1{margin:-4px!important}.v-application .ma-sm-n2{margin:-8px!important}.v-application .ma-sm-n3{margin:-12px!important}.v-application .ma-sm-n4{margin:-16px!important}.v-application .ma-sm-n5{margin:-20px!important}.v-application .ma-sm-n6{margin:-24px!important}.v-application .ma-sm-n7{margin:-28px!important}.v-application .ma-sm-n8{margin:-32px!important}.v-application .ma-sm-n9{margin:-36px!important}.v-application .ma-sm-n10{margin:-40px!important}.v-application .ma-sm-n11{margin:-44px!important}.v-application .ma-sm-n12{margin:-48px!important}.v-application .ma-sm-n13{margin:-52px!important}.v-application .ma-sm-n14{margin:-56px!important}.v-application .ma-sm-n15{margin:-60px!important}.v-application .ma-sm-n16{margin:-64px!important}.v-application .mx-sm-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-sm-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-sm-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-sm-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-sm-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-sm-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-sm-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-sm-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-sm-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-sm-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-sm-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-sm-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-sm-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-sm-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-sm-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-sm-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-sm-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-sm-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-sm-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-sm-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-sm-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-sm-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-sm-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-sm-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-sm-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-sm-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-sm-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-sm-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-sm-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-sm-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-sm-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-sm-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-sm-n1{margin-top:-4px!important}.v-application .mt-sm-n2{margin-top:-8px!important}.v-application .mt-sm-n3{margin-top:-12px!important}.v-application .mt-sm-n4{margin-top:-16px!important}.v-application .mt-sm-n5{margin-top:-20px!important}.v-application .mt-sm-n6{margin-top:-24px!important}.v-application .mt-sm-n7{margin-top:-28px!important}.v-application .mt-sm-n8{margin-top:-32px!important}.v-application .mt-sm-n9{margin-top:-36px!important}.v-application .mt-sm-n10{margin-top:-40px!important}.v-application .mt-sm-n11{margin-top:-44px!important}.v-application .mt-sm-n12{margin-top:-48px!important}.v-application .mt-sm-n13{margin-top:-52px!important}.v-application .mt-sm-n14{margin-top:-56px!important}.v-application .mt-sm-n15{margin-top:-60px!important}.v-application .mt-sm-n16{margin-top:-64px!important}.v-application .mr-sm-n1{margin-right:-4px!important}.v-application .mr-sm-n2{margin-right:-8px!important}.v-application .mr-sm-n3{margin-right:-12px!important}.v-application .mr-sm-n4{margin-right:-16px!important}.v-application .mr-sm-n5{margin-right:-20px!important}.v-application .mr-sm-n6{margin-right:-24px!important}.v-application .mr-sm-n7{margin-right:-28px!important}.v-application .mr-sm-n8{margin-right:-32px!important}.v-application .mr-sm-n9{margin-right:-36px!important}.v-application .mr-sm-n10{margin-right:-40px!important}.v-application .mr-sm-n11{margin-right:-44px!important}.v-application .mr-sm-n12{margin-right:-48px!important}.v-application .mr-sm-n13{margin-right:-52px!important}.v-application .mr-sm-n14{margin-right:-56px!important}.v-application .mr-sm-n15{margin-right:-60px!important}.v-application .mr-sm-n16{margin-right:-64px!important}.v-application .mb-sm-n1{margin-bottom:-4px!important}.v-application .mb-sm-n2{margin-bottom:-8px!important}.v-application .mb-sm-n3{margin-bottom:-12px!important}.v-application .mb-sm-n4{margin-bottom:-16px!important}.v-application .mb-sm-n5{margin-bottom:-20px!important}.v-application .mb-sm-n6{margin-bottom:-24px!important}.v-application .mb-sm-n7{margin-bottom:-28px!important}.v-application .mb-sm-n8{margin-bottom:-32px!important}.v-application .mb-sm-n9{margin-bottom:-36px!important}.v-application .mb-sm-n10{margin-bottom:-40px!important}.v-application .mb-sm-n11{margin-bottom:-44px!important}.v-application .mb-sm-n12{margin-bottom:-48px!important}.v-application .mb-sm-n13{margin-bottom:-52px!important}.v-application .mb-sm-n14{margin-bottom:-56px!important}.v-application .mb-sm-n15{margin-bottom:-60px!important}.v-application .mb-sm-n16{margin-bottom:-64px!important}.v-application .ml-sm-n1{margin-left:-4px!important}.v-application .ml-sm-n2{margin-left:-8px!important}.v-application .ml-sm-n3{margin-left:-12px!important}.v-application .ml-sm-n4{margin-left:-16px!important}.v-application .ml-sm-n5{margin-left:-20px!important}.v-application .ml-sm-n6{margin-left:-24px!important}.v-application .ml-sm-n7{margin-left:-28px!important}.v-application .ml-sm-n8{margin-left:-32px!important}.v-application .ml-sm-n9{margin-left:-36px!important}.v-application .ml-sm-n10{margin-left:-40px!important}.v-application .ml-sm-n11{margin-left:-44px!important}.v-application .ml-sm-n12{margin-left:-48px!important}.v-application .ml-sm-n13{margin-left:-52px!important}.v-application .ml-sm-n14{margin-left:-56px!important}.v-application .ml-sm-n15{margin-left:-60px!important}.v-application .ml-sm-n16{margin-left:-64px!important}.v-application--is-ltr .ms-sm-n1{margin-left:-4px!important}.v-application--is-rtl .ms-sm-n1{margin-right:-4px!important}.v-application--is-ltr .ms-sm-n2{margin-left:-8px!important}.v-application--is-rtl .ms-sm-n2{margin-right:-8px!important}.v-application--is-ltr .ms-sm-n3{margin-left:-12px!important}.v-application--is-rtl .ms-sm-n3{margin-right:-12px!important}.v-application--is-ltr .ms-sm-n4{margin-left:-16px!important}.v-application--is-rtl .ms-sm-n4{margin-right:-16px!important}.v-application--is-ltr .ms-sm-n5{margin-left:-20px!important}.v-application--is-rtl .ms-sm-n5{margin-right:-20px!important}.v-application--is-ltr .ms-sm-n6{margin-left:-24px!important}.v-application--is-rtl .ms-sm-n6{margin-right:-24px!important}.v-application--is-ltr .ms-sm-n7{margin-left:-28px!important}.v-application--is-rtl .ms-sm-n7{margin-right:-28px!important}.v-application--is-ltr .ms-sm-n8{margin-left:-32px!important}.v-application--is-rtl .ms-sm-n8{margin-right:-32px!important}.v-application--is-ltr .ms-sm-n9{margin-left:-36px!important}.v-application--is-rtl .ms-sm-n9{margin-right:-36px!important}.v-application--is-ltr .ms-sm-n10{margin-left:-40px!important}.v-application--is-rtl .ms-sm-n10{margin-right:-40px!important}.v-application--is-ltr .ms-sm-n11{margin-left:-44px!important}.v-application--is-rtl .ms-sm-n11{margin-right:-44px!important}.v-application--is-ltr .ms-sm-n12{margin-left:-48px!important}.v-application--is-rtl .ms-sm-n12{margin-right:-48px!important}.v-application--is-ltr .ms-sm-n13{margin-left:-52px!important}.v-application--is-rtl .ms-sm-n13{margin-right:-52px!important}.v-application--is-ltr .ms-sm-n14{margin-left:-56px!important}.v-application--is-rtl .ms-sm-n14{margin-right:-56px!important}.v-application--is-ltr .ms-sm-n15{margin-left:-60px!important}.v-application--is-rtl .ms-sm-n15{margin-right:-60px!important}.v-application--is-ltr .ms-sm-n16{margin-left:-64px!important}.v-application--is-rtl .ms-sm-n16{margin-right:-64px!important}.v-application--is-ltr .me-sm-n1{margin-right:-4px!important}.v-application--is-rtl .me-sm-n1{margin-left:-4px!important}.v-application--is-ltr .me-sm-n2{margin-right:-8px!important}.v-application--is-rtl .me-sm-n2{margin-left:-8px!important}.v-application--is-ltr .me-sm-n3{margin-right:-12px!important}.v-application--is-rtl .me-sm-n3{margin-left:-12px!important}.v-application--is-ltr .me-sm-n4{margin-right:-16px!important}.v-application--is-rtl .me-sm-n4{margin-left:-16px!important}.v-application--is-ltr .me-sm-n5{margin-right:-20px!important}.v-application--is-rtl .me-sm-n5{margin-left:-20px!important}.v-application--is-ltr .me-sm-n6{margin-right:-24px!important}.v-application--is-rtl .me-sm-n6{margin-left:-24px!important}.v-application--is-ltr .me-sm-n7{margin-right:-28px!important}.v-application--is-rtl .me-sm-n7{margin-left:-28px!important}.v-application--is-ltr .me-sm-n8{margin-right:-32px!important}.v-application--is-rtl .me-sm-n8{margin-left:-32px!important}.v-application--is-ltr .me-sm-n9{margin-right:-36px!important}.v-application--is-rtl .me-sm-n9{margin-left:-36px!important}.v-application--is-ltr .me-sm-n10{margin-right:-40px!important}.v-application--is-rtl .me-sm-n10{margin-left:-40px!important}.v-application--is-ltr .me-sm-n11{margin-right:-44px!important}.v-application--is-rtl .me-sm-n11{margin-left:-44px!important}.v-application--is-ltr .me-sm-n12{margin-right:-48px!important}.v-application--is-rtl .me-sm-n12{margin-left:-48px!important}.v-application--is-ltr .me-sm-n13{margin-right:-52px!important}.v-application--is-rtl .me-sm-n13{margin-left:-52px!important}.v-application--is-ltr .me-sm-n14{margin-right:-56px!important}.v-application--is-rtl .me-sm-n14{margin-left:-56px!important}.v-application--is-ltr .me-sm-n15{margin-right:-60px!important}.v-application--is-rtl .me-sm-n15{margin-left:-60px!important}.v-application--is-ltr .me-sm-n16{margin-right:-64px!important}.v-application--is-rtl .me-sm-n16{margin-left:-64px!important}.v-application .pa-sm-0{padding:0!important}.v-application .pa-sm-1{padding:4px!important}.v-application .pa-sm-2{padding:8px!important}.v-application .pa-sm-3{padding:12px!important}.v-application .pa-sm-4{padding:16px!important}.v-application .pa-sm-5{padding:20px!important}.v-application .pa-sm-6{padding:24px!important}.v-application .pa-sm-7{padding:28px!important}.v-application .pa-sm-8{padding:32px!important}.v-application .pa-sm-9{padding:36px!important}.v-application .pa-sm-10{padding:40px!important}.v-application .pa-sm-11{padding:44px!important}.v-application .pa-sm-12{padding:48px!important}.v-application .pa-sm-13{padding:52px!important}.v-application .pa-sm-14{padding:56px!important}.v-application .pa-sm-15{padding:60px!important}.v-application .pa-sm-16{padding:64px!important}.v-application .px-sm-0{padding-right:0!important;padding-left:0!important}.v-application .px-sm-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-sm-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-sm-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-sm-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-sm-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-sm-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-sm-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-sm-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-sm-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-sm-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-sm-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-sm-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-sm-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-sm-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-sm-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-sm-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-sm-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-sm-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-sm-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-sm-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-sm-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-sm-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-sm-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-sm-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-sm-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-sm-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-sm-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-sm-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-sm-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-sm-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-sm-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-sm-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-sm-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-sm-0{padding-top:0!important}.v-application .pt-sm-1{padding-top:4px!important}.v-application .pt-sm-2{padding-top:8px!important}.v-application .pt-sm-3{padding-top:12px!important}.v-application .pt-sm-4{padding-top:16px!important}.v-application .pt-sm-5{padding-top:20px!important}.v-application .pt-sm-6{padding-top:24px!important}.v-application .pt-sm-7{padding-top:28px!important}.v-application .pt-sm-8{padding-top:32px!important}.v-application .pt-sm-9{padding-top:36px!important}.v-application .pt-sm-10{padding-top:40px!important}.v-application .pt-sm-11{padding-top:44px!important}.v-application .pt-sm-12{padding-top:48px!important}.v-application .pt-sm-13{padding-top:52px!important}.v-application .pt-sm-14{padding-top:56px!important}.v-application .pt-sm-15{padding-top:60px!important}.v-application .pt-sm-16{padding-top:64px!important}.v-application .pr-sm-0{padding-right:0!important}.v-application .pr-sm-1{padding-right:4px!important}.v-application .pr-sm-2{padding-right:8px!important}.v-application .pr-sm-3{padding-right:12px!important}.v-application .pr-sm-4{padding-right:16px!important}.v-application .pr-sm-5{padding-right:20px!important}.v-application .pr-sm-6{padding-right:24px!important}.v-application .pr-sm-7{padding-right:28px!important}.v-application .pr-sm-8{padding-right:32px!important}.v-application .pr-sm-9{padding-right:36px!important}.v-application .pr-sm-10{padding-right:40px!important}.v-application .pr-sm-11{padding-right:44px!important}.v-application .pr-sm-12{padding-right:48px!important}.v-application .pr-sm-13{padding-right:52px!important}.v-application .pr-sm-14{padding-right:56px!important}.v-application .pr-sm-15{padding-right:60px!important}.v-application .pr-sm-16{padding-right:64px!important}.v-application .pb-sm-0{padding-bottom:0!important}.v-application .pb-sm-1{padding-bottom:4px!important}.v-application .pb-sm-2{padding-bottom:8px!important}.v-application .pb-sm-3{padding-bottom:12px!important}.v-application .pb-sm-4{padding-bottom:16px!important}.v-application .pb-sm-5{padding-bottom:20px!important}.v-application .pb-sm-6{padding-bottom:24px!important}.v-application .pb-sm-7{padding-bottom:28px!important}.v-application .pb-sm-8{padding-bottom:32px!important}.v-application .pb-sm-9{padding-bottom:36px!important}.v-application .pb-sm-10{padding-bottom:40px!important}.v-application .pb-sm-11{padding-bottom:44px!important}.v-application .pb-sm-12{padding-bottom:48px!important}.v-application .pb-sm-13{padding-bottom:52px!important}.v-application .pb-sm-14{padding-bottom:56px!important}.v-application .pb-sm-15{padding-bottom:60px!important}.v-application .pb-sm-16{padding-bottom:64px!important}.v-application .pl-sm-0{padding-left:0!important}.v-application .pl-sm-1{padding-left:4px!important}.v-application .pl-sm-2{padding-left:8px!important}.v-application .pl-sm-3{padding-left:12px!important}.v-application .pl-sm-4{padding-left:16px!important}.v-application .pl-sm-5{padding-left:20px!important}.v-application .pl-sm-6{padding-left:24px!important}.v-application .pl-sm-7{padding-left:28px!important}.v-application .pl-sm-8{padding-left:32px!important}.v-application .pl-sm-9{padding-left:36px!important}.v-application .pl-sm-10{padding-left:40px!important}.v-application .pl-sm-11{padding-left:44px!important}.v-application .pl-sm-12{padding-left:48px!important}.v-application .pl-sm-13{padding-left:52px!important}.v-application .pl-sm-14{padding-left:56px!important}.v-application .pl-sm-15{padding-left:60px!important}.v-application .pl-sm-16{padding-left:64px!important}.v-application--is-ltr .ps-sm-0{padding-left:0!important}.v-application--is-rtl .ps-sm-0{padding-right:0!important}.v-application--is-ltr .ps-sm-1{padding-left:4px!important}.v-application--is-rtl .ps-sm-1{padding-right:4px!important}.v-application--is-ltr .ps-sm-2{padding-left:8px!important}.v-application--is-rtl .ps-sm-2{padding-right:8px!important}.v-application--is-ltr .ps-sm-3{padding-left:12px!important}.v-application--is-rtl .ps-sm-3{padding-right:12px!important}.v-application--is-ltr .ps-sm-4{padding-left:16px!important}.v-application--is-rtl .ps-sm-4{padding-right:16px!important}.v-application--is-ltr .ps-sm-5{padding-left:20px!important}.v-application--is-rtl .ps-sm-5{padding-right:20px!important}.v-application--is-ltr .ps-sm-6{padding-left:24px!important}.v-application--is-rtl .ps-sm-6{padding-right:24px!important}.v-application--is-ltr .ps-sm-7{padding-left:28px!important}.v-application--is-rtl .ps-sm-7{padding-right:28px!important}.v-application--is-ltr .ps-sm-8{padding-left:32px!important}.v-application--is-rtl .ps-sm-8{padding-right:32px!important}.v-application--is-ltr .ps-sm-9{padding-left:36px!important}.v-application--is-rtl .ps-sm-9{padding-right:36px!important}.v-application--is-ltr .ps-sm-10{padding-left:40px!important}.v-application--is-rtl .ps-sm-10{padding-right:40px!important}.v-application--is-ltr .ps-sm-11{padding-left:44px!important}.v-application--is-rtl .ps-sm-11{padding-right:44px!important}.v-application--is-ltr .ps-sm-12{padding-left:48px!important}.v-application--is-rtl .ps-sm-12{padding-right:48px!important}.v-application--is-ltr .ps-sm-13{padding-left:52px!important}.v-application--is-rtl .ps-sm-13{padding-right:52px!important}.v-application--is-ltr .ps-sm-14{padding-left:56px!important}.v-application--is-rtl .ps-sm-14{padding-right:56px!important}.v-application--is-ltr .ps-sm-15{padding-left:60px!important}.v-application--is-rtl .ps-sm-15{padding-right:60px!important}.v-application--is-ltr .ps-sm-16{padding-left:64px!important}.v-application--is-rtl .ps-sm-16{padding-right:64px!important}.v-application--is-ltr .pe-sm-0{padding-right:0!important}.v-application--is-rtl .pe-sm-0{padding-left:0!important}.v-application--is-ltr .pe-sm-1{padding-right:4px!important}.v-application--is-rtl .pe-sm-1{padding-left:4px!important}.v-application--is-ltr .pe-sm-2{padding-right:8px!important}.v-application--is-rtl .pe-sm-2{padding-left:8px!important}.v-application--is-ltr .pe-sm-3{padding-right:12px!important}.v-application--is-rtl .pe-sm-3{padding-left:12px!important}.v-application--is-ltr .pe-sm-4{padding-right:16px!important}.v-application--is-rtl .pe-sm-4{padding-left:16px!important}.v-application--is-ltr .pe-sm-5{padding-right:20px!important}.v-application--is-rtl .pe-sm-5{padding-left:20px!important}.v-application--is-ltr .pe-sm-6{padding-right:24px!important}.v-application--is-rtl .pe-sm-6{padding-left:24px!important}.v-application--is-ltr .pe-sm-7{padding-right:28px!important}.v-application--is-rtl .pe-sm-7{padding-left:28px!important}.v-application--is-ltr .pe-sm-8{padding-right:32px!important}.v-application--is-rtl .pe-sm-8{padding-left:32px!important}.v-application--is-ltr .pe-sm-9{padding-right:36px!important}.v-application--is-rtl .pe-sm-9{padding-left:36px!important}.v-application--is-ltr .pe-sm-10{padding-right:40px!important}.v-application--is-rtl .pe-sm-10{padding-left:40px!important}.v-application--is-ltr .pe-sm-11{padding-right:44px!important}.v-application--is-rtl .pe-sm-11{padding-left:44px!important}.v-application--is-ltr .pe-sm-12{padding-right:48px!important}.v-application--is-rtl .pe-sm-12{padding-left:48px!important}.v-application--is-ltr .pe-sm-13{padding-right:52px!important}.v-application--is-rtl .pe-sm-13{padding-left:52px!important}.v-application--is-ltr .pe-sm-14{padding-right:56px!important}.v-application--is-rtl .pe-sm-14{padding-left:56px!important}.v-application--is-ltr .pe-sm-15{padding-right:60px!important}.v-application--is-rtl .pe-sm-15{padding-left:60px!important}.v-application--is-ltr .pe-sm-16{padding-right:64px!important}.v-application--is-rtl .pe-sm-16{padding-left:64px!important}.v-application .text-sm-left{text-align:left!important}.v-application .text-sm-right{text-align:right!important}.v-application .text-sm-center{text-align:center!important}.v-application .text-sm-justify{text-align:justify!important}[dir=ltr] .v-application .text-sm-start{text-align:left!important}[dir=ltr] .v-application .text-sm-end,[dir=rtl] .v-application .text-sm-start{text-align:right!important}[dir=rtl] .v-application .text-sm-end{text-align:left!important}.v-application .text-sm-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-sm-h1,.v-application .text-sm-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-sm-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-sm-h3,.v-application .text-sm-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-sm-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-sm-h5,.v-application .text-sm-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-sm-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-sm-body-2,.v-application .text-sm-button{font-size:.875rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-sm-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-sm-caption,.v-application .text-sm-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-sm-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media(min-width:960px){.v-application .d-md-none{display:none!important}.v-application .d-md-inline{display:inline!important}.v-application .d-md-inline-block{display:inline-block!important}.v-application .d-md-block{display:block!important}.v-application .d-md-table{display:table!important}.v-application .d-md-table-row{display:table-row!important}.v-application .d-md-table-cell{display:table-cell!important}.v-application .d-md-flex{display:flex!important}.v-application .d-md-inline-flex{display:inline-flex!important}.v-application .float-md-none{float:none!important}.v-application .float-md-left{float:left!important}.v-application .float-md-right{float:right!important}.v-application--is-rtl .float-md-end{float:left!important}.v-application--is-ltr .float-md-end,.v-application--is-rtl .float-md-start{float:right!important}.v-application--is-ltr .float-md-start{float:left!important}.v-application .flex-md-fill{flex:1 1 auto!important}.v-application .flex-md-row{flex-direction:row!important}.v-application .flex-md-column{flex-direction:column!important}.v-application .flex-md-row-reverse{flex-direction:row-reverse!important}.v-application .flex-md-column-reverse{flex-direction:column-reverse!important}.v-application .flex-md-grow-0{flex-grow:0!important}.v-application .flex-md-grow-1{flex-grow:1!important}.v-application .flex-md-shrink-0{flex-shrink:0!important}.v-application .flex-md-shrink-1{flex-shrink:1!important}.v-application .flex-md-wrap{flex-wrap:wrap!important}.v-application .flex-md-nowrap{flex-wrap:nowrap!important}.v-application .flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-md-start{justify-content:flex-start!important}.v-application .justify-md-end{justify-content:flex-end!important}.v-application .justify-md-center{justify-content:center!important}.v-application .justify-md-space-between{justify-content:space-between!important}.v-application .justify-md-space-around{justify-content:space-around!important}.v-application .align-md-start{align-items:flex-start!important}.v-application .align-md-end{align-items:flex-end!important}.v-application .align-md-center{align-items:center!important}.v-application .align-md-baseline{align-items:baseline!important}.v-application .align-md-stretch{align-items:stretch!important}.v-application .align-content-md-start{align-content:flex-start!important}.v-application .align-content-md-end{align-content:flex-end!important}.v-application .align-content-md-center{align-content:center!important}.v-application .align-content-md-space-between{align-content:space-between!important}.v-application .align-content-md-space-around{align-content:space-around!important}.v-application .align-content-md-stretch{align-content:stretch!important}.v-application .align-self-md-auto{align-self:auto!important}.v-application .align-self-md-start{align-self:flex-start!important}.v-application .align-self-md-end{align-self:flex-end!important}.v-application .align-self-md-center{align-self:center!important}.v-application .align-self-md-baseline{align-self:baseline!important}.v-application .align-self-md-stretch{align-self:stretch!important}.v-application .order-md-first{order:-1!important}.v-application .order-md-0{order:0!important}.v-application .order-md-1{order:1!important}.v-application .order-md-2{order:2!important}.v-application .order-md-3{order:3!important}.v-application .order-md-4{order:4!important}.v-application .order-md-5{order:5!important}.v-application .order-md-6{order:6!important}.v-application .order-md-7{order:7!important}.v-application .order-md-8{order:8!important}.v-application .order-md-9{order:9!important}.v-application .order-md-10{order:10!important}.v-application .order-md-11{order:11!important}.v-application .order-md-12{order:12!important}.v-application .order-md-last{order:13!important}.v-application .ma-md-0{margin:0!important}.v-application .ma-md-1{margin:4px!important}.v-application .ma-md-2{margin:8px!important}.v-application .ma-md-3{margin:12px!important}.v-application .ma-md-4{margin:16px!important}.v-application .ma-md-5{margin:20px!important}.v-application .ma-md-6{margin:24px!important}.v-application .ma-md-7{margin:28px!important}.v-application .ma-md-8{margin:32px!important}.v-application .ma-md-9{margin:36px!important}.v-application .ma-md-10{margin:40px!important}.v-application .ma-md-11{margin:44px!important}.v-application .ma-md-12{margin:48px!important}.v-application .ma-md-13{margin:52px!important}.v-application .ma-md-14{margin:56px!important}.v-application .ma-md-15{margin:60px!important}.v-application .ma-md-16{margin:64px!important}.v-application .ma-md-auto{margin:auto!important}.v-application .mx-md-0{margin-right:0!important;margin-left:0!important}.v-application .mx-md-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-md-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-md-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-md-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-md-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-md-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-md-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-md-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-md-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-md-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-md-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-md-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-md-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-md-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-md-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-md-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-md-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-md-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-md-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-md-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-md-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-md-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-md-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-md-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-md-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-md-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-md-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-md-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-md-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-md-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-md-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-md-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-md-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-md-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-md-0{margin-top:0!important}.v-application .mt-md-1{margin-top:4px!important}.v-application .mt-md-2{margin-top:8px!important}.v-application .mt-md-3{margin-top:12px!important}.v-application .mt-md-4{margin-top:16px!important}.v-application .mt-md-5{margin-top:20px!important}.v-application .mt-md-6{margin-top:24px!important}.v-application .mt-md-7{margin-top:28px!important}.v-application .mt-md-8{margin-top:32px!important}.v-application .mt-md-9{margin-top:36px!important}.v-application .mt-md-10{margin-top:40px!important}.v-application .mt-md-11{margin-top:44px!important}.v-application .mt-md-12{margin-top:48px!important}.v-application .mt-md-13{margin-top:52px!important}.v-application .mt-md-14{margin-top:56px!important}.v-application .mt-md-15{margin-top:60px!important}.v-application .mt-md-16{margin-top:64px!important}.v-application .mt-md-auto{margin-top:auto!important}.v-application .mr-md-0{margin-right:0!important}.v-application .mr-md-1{margin-right:4px!important}.v-application .mr-md-2{margin-right:8px!important}.v-application .mr-md-3{margin-right:12px!important}.v-application .mr-md-4{margin-right:16px!important}.v-application .mr-md-5{margin-right:20px!important}.v-application .mr-md-6{margin-right:24px!important}.v-application .mr-md-7{margin-right:28px!important}.v-application .mr-md-8{margin-right:32px!important}.v-application .mr-md-9{margin-right:36px!important}.v-application .mr-md-10{margin-right:40px!important}.v-application .mr-md-11{margin-right:44px!important}.v-application .mr-md-12{margin-right:48px!important}.v-application .mr-md-13{margin-right:52px!important}.v-application .mr-md-14{margin-right:56px!important}.v-application .mr-md-15{margin-right:60px!important}.v-application .mr-md-16{margin-right:64px!important}.v-application .mr-md-auto{margin-right:auto!important}.v-application .mb-md-0{margin-bottom:0!important}.v-application .mb-md-1{margin-bottom:4px!important}.v-application .mb-md-2{margin-bottom:8px!important}.v-application .mb-md-3{margin-bottom:12px!important}.v-application .mb-md-4{margin-bottom:16px!important}.v-application .mb-md-5{margin-bottom:20px!important}.v-application .mb-md-6{margin-bottom:24px!important}.v-application .mb-md-7{margin-bottom:28px!important}.v-application .mb-md-8{margin-bottom:32px!important}.v-application .mb-md-9{margin-bottom:36px!important}.v-application .mb-md-10{margin-bottom:40px!important}.v-application .mb-md-11{margin-bottom:44px!important}.v-application .mb-md-12{margin-bottom:48px!important}.v-application .mb-md-13{margin-bottom:52px!important}.v-application .mb-md-14{margin-bottom:56px!important}.v-application .mb-md-15{margin-bottom:60px!important}.v-application .mb-md-16{margin-bottom:64px!important}.v-application .mb-md-auto{margin-bottom:auto!important}.v-application .ml-md-0{margin-left:0!important}.v-application .ml-md-1{margin-left:4px!important}.v-application .ml-md-2{margin-left:8px!important}.v-application .ml-md-3{margin-left:12px!important}.v-application .ml-md-4{margin-left:16px!important}.v-application .ml-md-5{margin-left:20px!important}.v-application .ml-md-6{margin-left:24px!important}.v-application .ml-md-7{margin-left:28px!important}.v-application .ml-md-8{margin-left:32px!important}.v-application .ml-md-9{margin-left:36px!important}.v-application .ml-md-10{margin-left:40px!important}.v-application .ml-md-11{margin-left:44px!important}.v-application .ml-md-12{margin-left:48px!important}.v-application .ml-md-13{margin-left:52px!important}.v-application .ml-md-14{margin-left:56px!important}.v-application .ml-md-15{margin-left:60px!important}.v-application .ml-md-16{margin-left:64px!important}.v-application .ml-md-auto{margin-left:auto!important}.v-application--is-ltr .ms-md-0{margin-left:0!important}.v-application--is-rtl .ms-md-0{margin-right:0!important}.v-application--is-ltr .ms-md-1{margin-left:4px!important}.v-application--is-rtl .ms-md-1{margin-right:4px!important}.v-application--is-ltr .ms-md-2{margin-left:8px!important}.v-application--is-rtl .ms-md-2{margin-right:8px!important}.v-application--is-ltr .ms-md-3{margin-left:12px!important}.v-application--is-rtl .ms-md-3{margin-right:12px!important}.v-application--is-ltr .ms-md-4{margin-left:16px!important}.v-application--is-rtl .ms-md-4{margin-right:16px!important}.v-application--is-ltr .ms-md-5{margin-left:20px!important}.v-application--is-rtl .ms-md-5{margin-right:20px!important}.v-application--is-ltr .ms-md-6{margin-left:24px!important}.v-application--is-rtl .ms-md-6{margin-right:24px!important}.v-application--is-ltr .ms-md-7{margin-left:28px!important}.v-application--is-rtl .ms-md-7{margin-right:28px!important}.v-application--is-ltr .ms-md-8{margin-left:32px!important}.v-application--is-rtl .ms-md-8{margin-right:32px!important}.v-application--is-ltr .ms-md-9{margin-left:36px!important}.v-application--is-rtl .ms-md-9{margin-right:36px!important}.v-application--is-ltr .ms-md-10{margin-left:40px!important}.v-application--is-rtl .ms-md-10{margin-right:40px!important}.v-application--is-ltr .ms-md-11{margin-left:44px!important}.v-application--is-rtl .ms-md-11{margin-right:44px!important}.v-application--is-ltr .ms-md-12{margin-left:48px!important}.v-application--is-rtl .ms-md-12{margin-right:48px!important}.v-application--is-ltr .ms-md-13{margin-left:52px!important}.v-application--is-rtl .ms-md-13{margin-right:52px!important}.v-application--is-ltr .ms-md-14{margin-left:56px!important}.v-application--is-rtl .ms-md-14{margin-right:56px!important}.v-application--is-ltr .ms-md-15{margin-left:60px!important}.v-application--is-rtl .ms-md-15{margin-right:60px!important}.v-application--is-ltr .ms-md-16{margin-left:64px!important}.v-application--is-rtl .ms-md-16{margin-right:64px!important}.v-application--is-ltr .ms-md-auto{margin-left:auto!important}.v-application--is-rtl .ms-md-auto{margin-right:auto!important}.v-application--is-ltr .me-md-0{margin-right:0!important}.v-application--is-rtl .me-md-0{margin-left:0!important}.v-application--is-ltr .me-md-1{margin-right:4px!important}.v-application--is-rtl .me-md-1{margin-left:4px!important}.v-application--is-ltr .me-md-2{margin-right:8px!important}.v-application--is-rtl .me-md-2{margin-left:8px!important}.v-application--is-ltr .me-md-3{margin-right:12px!important}.v-application--is-rtl .me-md-3{margin-left:12px!important}.v-application--is-ltr .me-md-4{margin-right:16px!important}.v-application--is-rtl .me-md-4{margin-left:16px!important}.v-application--is-ltr .me-md-5{margin-right:20px!important}.v-application--is-rtl .me-md-5{margin-left:20px!important}.v-application--is-ltr .me-md-6{margin-right:24px!important}.v-application--is-rtl .me-md-6{margin-left:24px!important}.v-application--is-ltr .me-md-7{margin-right:28px!important}.v-application--is-rtl .me-md-7{margin-left:28px!important}.v-application--is-ltr .me-md-8{margin-right:32px!important}.v-application--is-rtl .me-md-8{margin-left:32px!important}.v-application--is-ltr .me-md-9{margin-right:36px!important}.v-application--is-rtl .me-md-9{margin-left:36px!important}.v-application--is-ltr .me-md-10{margin-right:40px!important}.v-application--is-rtl .me-md-10{margin-left:40px!important}.v-application--is-ltr .me-md-11{margin-right:44px!important}.v-application--is-rtl .me-md-11{margin-left:44px!important}.v-application--is-ltr .me-md-12{margin-right:48px!important}.v-application--is-rtl .me-md-12{margin-left:48px!important}.v-application--is-ltr .me-md-13{margin-right:52px!important}.v-application--is-rtl .me-md-13{margin-left:52px!important}.v-application--is-ltr .me-md-14{margin-right:56px!important}.v-application--is-rtl .me-md-14{margin-left:56px!important}.v-application--is-ltr .me-md-15{margin-right:60px!important}.v-application--is-rtl .me-md-15{margin-left:60px!important}.v-application--is-ltr .me-md-16{margin-right:64px!important}.v-application--is-rtl .me-md-16{margin-left:64px!important}.v-application--is-ltr .me-md-auto{margin-right:auto!important}.v-application--is-rtl .me-md-auto{margin-left:auto!important}.v-application .ma-md-n1{margin:-4px!important}.v-application .ma-md-n2{margin:-8px!important}.v-application .ma-md-n3{margin:-12px!important}.v-application .ma-md-n4{margin:-16px!important}.v-application .ma-md-n5{margin:-20px!important}.v-application .ma-md-n6{margin:-24px!important}.v-application .ma-md-n7{margin:-28px!important}.v-application .ma-md-n8{margin:-32px!important}.v-application .ma-md-n9{margin:-36px!important}.v-application .ma-md-n10{margin:-40px!important}.v-application .ma-md-n11{margin:-44px!important}.v-application .ma-md-n12{margin:-48px!important}.v-application .ma-md-n13{margin:-52px!important}.v-application .ma-md-n14{margin:-56px!important}.v-application .ma-md-n15{margin:-60px!important}.v-application .ma-md-n16{margin:-64px!important}.v-application .mx-md-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-md-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-md-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-md-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-md-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-md-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-md-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-md-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-md-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-md-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-md-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-md-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-md-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-md-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-md-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-md-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-md-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-md-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-md-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-md-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-md-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-md-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-md-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-md-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-md-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-md-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-md-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-md-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-md-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-md-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-md-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-md-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-md-n1{margin-top:-4px!important}.v-application .mt-md-n2{margin-top:-8px!important}.v-application .mt-md-n3{margin-top:-12px!important}.v-application .mt-md-n4{margin-top:-16px!important}.v-application .mt-md-n5{margin-top:-20px!important}.v-application .mt-md-n6{margin-top:-24px!important}.v-application .mt-md-n7{margin-top:-28px!important}.v-application .mt-md-n8{margin-top:-32px!important}.v-application .mt-md-n9{margin-top:-36px!important}.v-application .mt-md-n10{margin-top:-40px!important}.v-application .mt-md-n11{margin-top:-44px!important}.v-application .mt-md-n12{margin-top:-48px!important}.v-application .mt-md-n13{margin-top:-52px!important}.v-application .mt-md-n14{margin-top:-56px!important}.v-application .mt-md-n15{margin-top:-60px!important}.v-application .mt-md-n16{margin-top:-64px!important}.v-application .mr-md-n1{margin-right:-4px!important}.v-application .mr-md-n2{margin-right:-8px!important}.v-application .mr-md-n3{margin-right:-12px!important}.v-application .mr-md-n4{margin-right:-16px!important}.v-application .mr-md-n5{margin-right:-20px!important}.v-application .mr-md-n6{margin-right:-24px!important}.v-application .mr-md-n7{margin-right:-28px!important}.v-application .mr-md-n8{margin-right:-32px!important}.v-application .mr-md-n9{margin-right:-36px!important}.v-application .mr-md-n10{margin-right:-40px!important}.v-application .mr-md-n11{margin-right:-44px!important}.v-application .mr-md-n12{margin-right:-48px!important}.v-application .mr-md-n13{margin-right:-52px!important}.v-application .mr-md-n14{margin-right:-56px!important}.v-application .mr-md-n15{margin-right:-60px!important}.v-application .mr-md-n16{margin-right:-64px!important}.v-application .mb-md-n1{margin-bottom:-4px!important}.v-application .mb-md-n2{margin-bottom:-8px!important}.v-application .mb-md-n3{margin-bottom:-12px!important}.v-application .mb-md-n4{margin-bottom:-16px!important}.v-application .mb-md-n5{margin-bottom:-20px!important}.v-application .mb-md-n6{margin-bottom:-24px!important}.v-application .mb-md-n7{margin-bottom:-28px!important}.v-application .mb-md-n8{margin-bottom:-32px!important}.v-application .mb-md-n9{margin-bottom:-36px!important}.v-application .mb-md-n10{margin-bottom:-40px!important}.v-application .mb-md-n11{margin-bottom:-44px!important}.v-application .mb-md-n12{margin-bottom:-48px!important}.v-application .mb-md-n13{margin-bottom:-52px!important}.v-application .mb-md-n14{margin-bottom:-56px!important}.v-application .mb-md-n15{margin-bottom:-60px!important}.v-application .mb-md-n16{margin-bottom:-64px!important}.v-application .ml-md-n1{margin-left:-4px!important}.v-application .ml-md-n2{margin-left:-8px!important}.v-application .ml-md-n3{margin-left:-12px!important}.v-application .ml-md-n4{margin-left:-16px!important}.v-application .ml-md-n5{margin-left:-20px!important}.v-application .ml-md-n6{margin-left:-24px!important}.v-application .ml-md-n7{margin-left:-28px!important}.v-application .ml-md-n8{margin-left:-32px!important}.v-application .ml-md-n9{margin-left:-36px!important}.v-application .ml-md-n10{margin-left:-40px!important}.v-application .ml-md-n11{margin-left:-44px!important}.v-application .ml-md-n12{margin-left:-48px!important}.v-application .ml-md-n13{margin-left:-52px!important}.v-application .ml-md-n14{margin-left:-56px!important}.v-application .ml-md-n15{margin-left:-60px!important}.v-application .ml-md-n16{margin-left:-64px!important}.v-application--is-ltr .ms-md-n1{margin-left:-4px!important}.v-application--is-rtl .ms-md-n1{margin-right:-4px!important}.v-application--is-ltr .ms-md-n2{margin-left:-8px!important}.v-application--is-rtl .ms-md-n2{margin-right:-8px!important}.v-application--is-ltr .ms-md-n3{margin-left:-12px!important}.v-application--is-rtl .ms-md-n3{margin-right:-12px!important}.v-application--is-ltr .ms-md-n4{margin-left:-16px!important}.v-application--is-rtl .ms-md-n4{margin-right:-16px!important}.v-application--is-ltr .ms-md-n5{margin-left:-20px!important}.v-application--is-rtl .ms-md-n5{margin-right:-20px!important}.v-application--is-ltr .ms-md-n6{margin-left:-24px!important}.v-application--is-rtl .ms-md-n6{margin-right:-24px!important}.v-application--is-ltr .ms-md-n7{margin-left:-28px!important}.v-application--is-rtl .ms-md-n7{margin-right:-28px!important}.v-application--is-ltr .ms-md-n8{margin-left:-32px!important}.v-application--is-rtl .ms-md-n8{margin-right:-32px!important}.v-application--is-ltr .ms-md-n9{margin-left:-36px!important}.v-application--is-rtl .ms-md-n9{margin-right:-36px!important}.v-application--is-ltr .ms-md-n10{margin-left:-40px!important}.v-application--is-rtl .ms-md-n10{margin-right:-40px!important}.v-application--is-ltr .ms-md-n11{margin-left:-44px!important}.v-application--is-rtl .ms-md-n11{margin-right:-44px!important}.v-application--is-ltr .ms-md-n12{margin-left:-48px!important}.v-application--is-rtl .ms-md-n12{margin-right:-48px!important}.v-application--is-ltr .ms-md-n13{margin-left:-52px!important}.v-application--is-rtl .ms-md-n13{margin-right:-52px!important}.v-application--is-ltr .ms-md-n14{margin-left:-56px!important}.v-application--is-rtl .ms-md-n14{margin-right:-56px!important}.v-application--is-ltr .ms-md-n15{margin-left:-60px!important}.v-application--is-rtl .ms-md-n15{margin-right:-60px!important}.v-application--is-ltr .ms-md-n16{margin-left:-64px!important}.v-application--is-rtl .ms-md-n16{margin-right:-64px!important}.v-application--is-ltr .me-md-n1{margin-right:-4px!important}.v-application--is-rtl .me-md-n1{margin-left:-4px!important}.v-application--is-ltr .me-md-n2{margin-right:-8px!important}.v-application--is-rtl .me-md-n2{margin-left:-8px!important}.v-application--is-ltr .me-md-n3{margin-right:-12px!important}.v-application--is-rtl .me-md-n3{margin-left:-12px!important}.v-application--is-ltr .me-md-n4{margin-right:-16px!important}.v-application--is-rtl .me-md-n4{margin-left:-16px!important}.v-application--is-ltr .me-md-n5{margin-right:-20px!important}.v-application--is-rtl .me-md-n5{margin-left:-20px!important}.v-application--is-ltr .me-md-n6{margin-right:-24px!important}.v-application--is-rtl .me-md-n6{margin-left:-24px!important}.v-application--is-ltr .me-md-n7{margin-right:-28px!important}.v-application--is-rtl .me-md-n7{margin-left:-28px!important}.v-application--is-ltr .me-md-n8{margin-right:-32px!important}.v-application--is-rtl .me-md-n8{margin-left:-32px!important}.v-application--is-ltr .me-md-n9{margin-right:-36px!important}.v-application--is-rtl .me-md-n9{margin-left:-36px!important}.v-application--is-ltr .me-md-n10{margin-right:-40px!important}.v-application--is-rtl .me-md-n10{margin-left:-40px!important}.v-application--is-ltr .me-md-n11{margin-right:-44px!important}.v-application--is-rtl .me-md-n11{margin-left:-44px!important}.v-application--is-ltr .me-md-n12{margin-right:-48px!important}.v-application--is-rtl .me-md-n12{margin-left:-48px!important}.v-application--is-ltr .me-md-n13{margin-right:-52px!important}.v-application--is-rtl .me-md-n13{margin-left:-52px!important}.v-application--is-ltr .me-md-n14{margin-right:-56px!important}.v-application--is-rtl .me-md-n14{margin-left:-56px!important}.v-application--is-ltr .me-md-n15{margin-right:-60px!important}.v-application--is-rtl .me-md-n15{margin-left:-60px!important}.v-application--is-ltr .me-md-n16{margin-right:-64px!important}.v-application--is-rtl .me-md-n16{margin-left:-64px!important}.v-application .pa-md-0{padding:0!important}.v-application .pa-md-1{padding:4px!important}.v-application .pa-md-2{padding:8px!important}.v-application .pa-md-3{padding:12px!important}.v-application .pa-md-4{padding:16px!important}.v-application .pa-md-5{padding:20px!important}.v-application .pa-md-6{padding:24px!important}.v-application .pa-md-7{padding:28px!important}.v-application .pa-md-8{padding:32px!important}.v-application .pa-md-9{padding:36px!important}.v-application .pa-md-10{padding:40px!important}.v-application .pa-md-11{padding:44px!important}.v-application .pa-md-12{padding:48px!important}.v-application .pa-md-13{padding:52px!important}.v-application .pa-md-14{padding:56px!important}.v-application .pa-md-15{padding:60px!important}.v-application .pa-md-16{padding:64px!important}.v-application .px-md-0{padding-right:0!important;padding-left:0!important}.v-application .px-md-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-md-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-md-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-md-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-md-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-md-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-md-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-md-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-md-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-md-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-md-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-md-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-md-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-md-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-md-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-md-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-md-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-md-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-md-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-md-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-md-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-md-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-md-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-md-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-md-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-md-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-md-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-md-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-md-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-md-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-md-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-md-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-md-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-md-0{padding-top:0!important}.v-application .pt-md-1{padding-top:4px!important}.v-application .pt-md-2{padding-top:8px!important}.v-application .pt-md-3{padding-top:12px!important}.v-application .pt-md-4{padding-top:16px!important}.v-application .pt-md-5{padding-top:20px!important}.v-application .pt-md-6{padding-top:24px!important}.v-application .pt-md-7{padding-top:28px!important}.v-application .pt-md-8{padding-top:32px!important}.v-application .pt-md-9{padding-top:36px!important}.v-application .pt-md-10{padding-top:40px!important}.v-application .pt-md-11{padding-top:44px!important}.v-application .pt-md-12{padding-top:48px!important}.v-application .pt-md-13{padding-top:52px!important}.v-application .pt-md-14{padding-top:56px!important}.v-application .pt-md-15{padding-top:60px!important}.v-application .pt-md-16{padding-top:64px!important}.v-application .pr-md-0{padding-right:0!important}.v-application .pr-md-1{padding-right:4px!important}.v-application .pr-md-2{padding-right:8px!important}.v-application .pr-md-3{padding-right:12px!important}.v-application .pr-md-4{padding-right:16px!important}.v-application .pr-md-5{padding-right:20px!important}.v-application .pr-md-6{padding-right:24px!important}.v-application .pr-md-7{padding-right:28px!important}.v-application .pr-md-8{padding-right:32px!important}.v-application .pr-md-9{padding-right:36px!important}.v-application .pr-md-10{padding-right:40px!important}.v-application .pr-md-11{padding-right:44px!important}.v-application .pr-md-12{padding-right:48px!important}.v-application .pr-md-13{padding-right:52px!important}.v-application .pr-md-14{padding-right:56px!important}.v-application .pr-md-15{padding-right:60px!important}.v-application .pr-md-16{padding-right:64px!important}.v-application .pb-md-0{padding-bottom:0!important}.v-application .pb-md-1{padding-bottom:4px!important}.v-application .pb-md-2{padding-bottom:8px!important}.v-application .pb-md-3{padding-bottom:12px!important}.v-application .pb-md-4{padding-bottom:16px!important}.v-application .pb-md-5{padding-bottom:20px!important}.v-application .pb-md-6{padding-bottom:24px!important}.v-application .pb-md-7{padding-bottom:28px!important}.v-application .pb-md-8{padding-bottom:32px!important}.v-application .pb-md-9{padding-bottom:36px!important}.v-application .pb-md-10{padding-bottom:40px!important}.v-application .pb-md-11{padding-bottom:44px!important}.v-application .pb-md-12{padding-bottom:48px!important}.v-application .pb-md-13{padding-bottom:52px!important}.v-application .pb-md-14{padding-bottom:56px!important}.v-application .pb-md-15{padding-bottom:60px!important}.v-application .pb-md-16{padding-bottom:64px!important}.v-application .pl-md-0{padding-left:0!important}.v-application .pl-md-1{padding-left:4px!important}.v-application .pl-md-2{padding-left:8px!important}.v-application .pl-md-3{padding-left:12px!important}.v-application .pl-md-4{padding-left:16px!important}.v-application .pl-md-5{padding-left:20px!important}.v-application .pl-md-6{padding-left:24px!important}.v-application .pl-md-7{padding-left:28px!important}.v-application .pl-md-8{padding-left:32px!important}.v-application .pl-md-9{padding-left:36px!important}.v-application .pl-md-10{padding-left:40px!important}.v-application .pl-md-11{padding-left:44px!important}.v-application .pl-md-12{padding-left:48px!important}.v-application .pl-md-13{padding-left:52px!important}.v-application .pl-md-14{padding-left:56px!important}.v-application .pl-md-15{padding-left:60px!important}.v-application .pl-md-16{padding-left:64px!important}.v-application--is-ltr .ps-md-0{padding-left:0!important}.v-application--is-rtl .ps-md-0{padding-right:0!important}.v-application--is-ltr .ps-md-1{padding-left:4px!important}.v-application--is-rtl .ps-md-1{padding-right:4px!important}.v-application--is-ltr .ps-md-2{padding-left:8px!important}.v-application--is-rtl .ps-md-2{padding-right:8px!important}.v-application--is-ltr .ps-md-3{padding-left:12px!important}.v-application--is-rtl .ps-md-3{padding-right:12px!important}.v-application--is-ltr .ps-md-4{padding-left:16px!important}.v-application--is-rtl .ps-md-4{padding-right:16px!important}.v-application--is-ltr .ps-md-5{padding-left:20px!important}.v-application--is-rtl .ps-md-5{padding-right:20px!important}.v-application--is-ltr .ps-md-6{padding-left:24px!important}.v-application--is-rtl .ps-md-6{padding-right:24px!important}.v-application--is-ltr .ps-md-7{padding-left:28px!important}.v-application--is-rtl .ps-md-7{padding-right:28px!important}.v-application--is-ltr .ps-md-8{padding-left:32px!important}.v-application--is-rtl .ps-md-8{padding-right:32px!important}.v-application--is-ltr .ps-md-9{padding-left:36px!important}.v-application--is-rtl .ps-md-9{padding-right:36px!important}.v-application--is-ltr .ps-md-10{padding-left:40px!important}.v-application--is-rtl .ps-md-10{padding-right:40px!important}.v-application--is-ltr .ps-md-11{padding-left:44px!important}.v-application--is-rtl .ps-md-11{padding-right:44px!important}.v-application--is-ltr .ps-md-12{padding-left:48px!important}.v-application--is-rtl .ps-md-12{padding-right:48px!important}.v-application--is-ltr .ps-md-13{padding-left:52px!important}.v-application--is-rtl .ps-md-13{padding-right:52px!important}.v-application--is-ltr .ps-md-14{padding-left:56px!important}.v-application--is-rtl .ps-md-14{padding-right:56px!important}.v-application--is-ltr .ps-md-15{padding-left:60px!important}.v-application--is-rtl .ps-md-15{padding-right:60px!important}.v-application--is-ltr .ps-md-16{padding-left:64px!important}.v-application--is-rtl .ps-md-16{padding-right:64px!important}.v-application--is-ltr .pe-md-0{padding-right:0!important}.v-application--is-rtl .pe-md-0{padding-left:0!important}.v-application--is-ltr .pe-md-1{padding-right:4px!important}.v-application--is-rtl .pe-md-1{padding-left:4px!important}.v-application--is-ltr .pe-md-2{padding-right:8px!important}.v-application--is-rtl .pe-md-2{padding-left:8px!important}.v-application--is-ltr .pe-md-3{padding-right:12px!important}.v-application--is-rtl .pe-md-3{padding-left:12px!important}.v-application--is-ltr .pe-md-4{padding-right:16px!important}.v-application--is-rtl .pe-md-4{padding-left:16px!important}.v-application--is-ltr .pe-md-5{padding-right:20px!important}.v-application--is-rtl .pe-md-5{padding-left:20px!important}.v-application--is-ltr .pe-md-6{padding-right:24px!important}.v-application--is-rtl .pe-md-6{padding-left:24px!important}.v-application--is-ltr .pe-md-7{padding-right:28px!important}.v-application--is-rtl .pe-md-7{padding-left:28px!important}.v-application--is-ltr .pe-md-8{padding-right:32px!important}.v-application--is-rtl .pe-md-8{padding-left:32px!important}.v-application--is-ltr .pe-md-9{padding-right:36px!important}.v-application--is-rtl .pe-md-9{padding-left:36px!important}.v-application--is-ltr .pe-md-10{padding-right:40px!important}.v-application--is-rtl .pe-md-10{padding-left:40px!important}.v-application--is-ltr .pe-md-11{padding-right:44px!important}.v-application--is-rtl .pe-md-11{padding-left:44px!important}.v-application--is-ltr .pe-md-12{padding-right:48px!important}.v-application--is-rtl .pe-md-12{padding-left:48px!important}.v-application--is-ltr .pe-md-13{padding-right:52px!important}.v-application--is-rtl .pe-md-13{padding-left:52px!important}.v-application--is-ltr .pe-md-14{padding-right:56px!important}.v-application--is-rtl .pe-md-14{padding-left:56px!important}.v-application--is-ltr .pe-md-15{padding-right:60px!important}.v-application--is-rtl .pe-md-15{padding-left:60px!important}.v-application--is-ltr .pe-md-16{padding-right:64px!important}.v-application--is-rtl .pe-md-16{padding-left:64px!important}.v-application .text-md-left{text-align:left!important}.v-application .text-md-right{text-align:right!important}.v-application .text-md-center{text-align:center!important}.v-application .text-md-justify{text-align:justify!important}[dir=ltr] .v-application .text-md-start{text-align:left!important}[dir=ltr] .v-application .text-md-end,[dir=rtl] .v-application .text-md-start{text-align:right!important}[dir=rtl] .v-application .text-md-end{text-align:left!important}.v-application .text-md-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-md-h1,.v-application .text-md-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-md-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-md-h3,.v-application .text-md-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-md-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-md-h5,.v-application .text-md-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-md-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-md-body-2,.v-application .text-md-button{font-size:.875rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-md-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-md-caption,.v-application .text-md-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-md-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media(min-width:1264px){.v-application .d-lg-none{display:none!important}.v-application .d-lg-inline{display:inline!important}.v-application .d-lg-inline-block{display:inline-block!important}.v-application .d-lg-block{display:block!important}.v-application .d-lg-table{display:table!important}.v-application .d-lg-table-row{display:table-row!important}.v-application .d-lg-table-cell{display:table-cell!important}.v-application .d-lg-flex{display:flex!important}.v-application .d-lg-inline-flex{display:inline-flex!important}.v-application .float-lg-none{float:none!important}.v-application .float-lg-left{float:left!important}.v-application .float-lg-right{float:right!important}.v-application--is-rtl .float-lg-end{float:left!important}.v-application--is-ltr .float-lg-end,.v-application--is-rtl .float-lg-start{float:right!important}.v-application--is-ltr .float-lg-start{float:left!important}.v-application .flex-lg-fill{flex:1 1 auto!important}.v-application .flex-lg-row{flex-direction:row!important}.v-application .flex-lg-column{flex-direction:column!important}.v-application .flex-lg-row-reverse{flex-direction:row-reverse!important}.v-application .flex-lg-column-reverse{flex-direction:column-reverse!important}.v-application .flex-lg-grow-0{flex-grow:0!important}.v-application .flex-lg-grow-1{flex-grow:1!important}.v-application .flex-lg-shrink-0{flex-shrink:0!important}.v-application .flex-lg-shrink-1{flex-shrink:1!important}.v-application .flex-lg-wrap{flex-wrap:wrap!important}.v-application .flex-lg-nowrap{flex-wrap:nowrap!important}.v-application .flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-lg-start{justify-content:flex-start!important}.v-application .justify-lg-end{justify-content:flex-end!important}.v-application .justify-lg-center{justify-content:center!important}.v-application .justify-lg-space-between{justify-content:space-between!important}.v-application .justify-lg-space-around{justify-content:space-around!important}.v-application .align-lg-start{align-items:flex-start!important}.v-application .align-lg-end{align-items:flex-end!important}.v-application .align-lg-center{align-items:center!important}.v-application .align-lg-baseline{align-items:baseline!important}.v-application .align-lg-stretch{align-items:stretch!important}.v-application .align-content-lg-start{align-content:flex-start!important}.v-application .align-content-lg-end{align-content:flex-end!important}.v-application .align-content-lg-center{align-content:center!important}.v-application .align-content-lg-space-between{align-content:space-between!important}.v-application .align-content-lg-space-around{align-content:space-around!important}.v-application .align-content-lg-stretch{align-content:stretch!important}.v-application .align-self-lg-auto{align-self:auto!important}.v-application .align-self-lg-start{align-self:flex-start!important}.v-application .align-self-lg-end{align-self:flex-end!important}.v-application .align-self-lg-center{align-self:center!important}.v-application .align-self-lg-baseline{align-self:baseline!important}.v-application .align-self-lg-stretch{align-self:stretch!important}.v-application .order-lg-first{order:-1!important}.v-application .order-lg-0{order:0!important}.v-application .order-lg-1{order:1!important}.v-application .order-lg-2{order:2!important}.v-application .order-lg-3{order:3!important}.v-application .order-lg-4{order:4!important}.v-application .order-lg-5{order:5!important}.v-application .order-lg-6{order:6!important}.v-application .order-lg-7{order:7!important}.v-application .order-lg-8{order:8!important}.v-application .order-lg-9{order:9!important}.v-application .order-lg-10{order:10!important}.v-application .order-lg-11{order:11!important}.v-application .order-lg-12{order:12!important}.v-application .order-lg-last{order:13!important}.v-application .ma-lg-0{margin:0!important}.v-application .ma-lg-1{margin:4px!important}.v-application .ma-lg-2{margin:8px!important}.v-application .ma-lg-3{margin:12px!important}.v-application .ma-lg-4{margin:16px!important}.v-application .ma-lg-5{margin:20px!important}.v-application .ma-lg-6{margin:24px!important}.v-application .ma-lg-7{margin:28px!important}.v-application .ma-lg-8{margin:32px!important}.v-application .ma-lg-9{margin:36px!important}.v-application .ma-lg-10{margin:40px!important}.v-application .ma-lg-11{margin:44px!important}.v-application .ma-lg-12{margin:48px!important}.v-application .ma-lg-13{margin:52px!important}.v-application .ma-lg-14{margin:56px!important}.v-application .ma-lg-15{margin:60px!important}.v-application .ma-lg-16{margin:64px!important}.v-application .ma-lg-auto{margin:auto!important}.v-application .mx-lg-0{margin-right:0!important;margin-left:0!important}.v-application .mx-lg-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-lg-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-lg-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-lg-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-lg-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-lg-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-lg-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-lg-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-lg-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-lg-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-lg-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-lg-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-lg-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-lg-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-lg-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-lg-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-lg-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-lg-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-lg-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-lg-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-lg-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-lg-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-lg-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-lg-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-lg-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-lg-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-lg-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-lg-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-lg-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-lg-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-lg-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-lg-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-lg-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-lg-0{margin-top:0!important}.v-application .mt-lg-1{margin-top:4px!important}.v-application .mt-lg-2{margin-top:8px!important}.v-application .mt-lg-3{margin-top:12px!important}.v-application .mt-lg-4{margin-top:16px!important}.v-application .mt-lg-5{margin-top:20px!important}.v-application .mt-lg-6{margin-top:24px!important}.v-application .mt-lg-7{margin-top:28px!important}.v-application .mt-lg-8{margin-top:32px!important}.v-application .mt-lg-9{margin-top:36px!important}.v-application .mt-lg-10{margin-top:40px!important}.v-application .mt-lg-11{margin-top:44px!important}.v-application .mt-lg-12{margin-top:48px!important}.v-application .mt-lg-13{margin-top:52px!important}.v-application .mt-lg-14{margin-top:56px!important}.v-application .mt-lg-15{margin-top:60px!important}.v-application .mt-lg-16{margin-top:64px!important}.v-application .mt-lg-auto{margin-top:auto!important}.v-application .mr-lg-0{margin-right:0!important}.v-application .mr-lg-1{margin-right:4px!important}.v-application .mr-lg-2{margin-right:8px!important}.v-application .mr-lg-3{margin-right:12px!important}.v-application .mr-lg-4{margin-right:16px!important}.v-application .mr-lg-5{margin-right:20px!important}.v-application .mr-lg-6{margin-right:24px!important}.v-application .mr-lg-7{margin-right:28px!important}.v-application .mr-lg-8{margin-right:32px!important}.v-application .mr-lg-9{margin-right:36px!important}.v-application .mr-lg-10{margin-right:40px!important}.v-application .mr-lg-11{margin-right:44px!important}.v-application .mr-lg-12{margin-right:48px!important}.v-application .mr-lg-13{margin-right:52px!important}.v-application .mr-lg-14{margin-right:56px!important}.v-application .mr-lg-15{margin-right:60px!important}.v-application .mr-lg-16{margin-right:64px!important}.v-application .mr-lg-auto{margin-right:auto!important}.v-application .mb-lg-0{margin-bottom:0!important}.v-application .mb-lg-1{margin-bottom:4px!important}.v-application .mb-lg-2{margin-bottom:8px!important}.v-application .mb-lg-3{margin-bottom:12px!important}.v-application .mb-lg-4{margin-bottom:16px!important}.v-application .mb-lg-5{margin-bottom:20px!important}.v-application .mb-lg-6{margin-bottom:24px!important}.v-application .mb-lg-7{margin-bottom:28px!important}.v-application .mb-lg-8{margin-bottom:32px!important}.v-application .mb-lg-9{margin-bottom:36px!important}.v-application .mb-lg-10{margin-bottom:40px!important}.v-application .mb-lg-11{margin-bottom:44px!important}.v-application .mb-lg-12{margin-bottom:48px!important}.v-application .mb-lg-13{margin-bottom:52px!important}.v-application .mb-lg-14{margin-bottom:56px!important}.v-application .mb-lg-15{margin-bottom:60px!important}.v-application .mb-lg-16{margin-bottom:64px!important}.v-application .mb-lg-auto{margin-bottom:auto!important}.v-application .ml-lg-0{margin-left:0!important}.v-application .ml-lg-1{margin-left:4px!important}.v-application .ml-lg-2{margin-left:8px!important}.v-application .ml-lg-3{margin-left:12px!important}.v-application .ml-lg-4{margin-left:16px!important}.v-application .ml-lg-5{margin-left:20px!important}.v-application .ml-lg-6{margin-left:24px!important}.v-application .ml-lg-7{margin-left:28px!important}.v-application .ml-lg-8{margin-left:32px!important}.v-application .ml-lg-9{margin-left:36px!important}.v-application .ml-lg-10{margin-left:40px!important}.v-application .ml-lg-11{margin-left:44px!important}.v-application .ml-lg-12{margin-left:48px!important}.v-application .ml-lg-13{margin-left:52px!important}.v-application .ml-lg-14{margin-left:56px!important}.v-application .ml-lg-15{margin-left:60px!important}.v-application .ml-lg-16{margin-left:64px!important}.v-application .ml-lg-auto{margin-left:auto!important}.v-application--is-ltr .ms-lg-0{margin-left:0!important}.v-application--is-rtl .ms-lg-0{margin-right:0!important}.v-application--is-ltr .ms-lg-1{margin-left:4px!important}.v-application--is-rtl .ms-lg-1{margin-right:4px!important}.v-application--is-ltr .ms-lg-2{margin-left:8px!important}.v-application--is-rtl .ms-lg-2{margin-right:8px!important}.v-application--is-ltr .ms-lg-3{margin-left:12px!important}.v-application--is-rtl .ms-lg-3{margin-right:12px!important}.v-application--is-ltr .ms-lg-4{margin-left:16px!important}.v-application--is-rtl .ms-lg-4{margin-right:16px!important}.v-application--is-ltr .ms-lg-5{margin-left:20px!important}.v-application--is-rtl .ms-lg-5{margin-right:20px!important}.v-application--is-ltr .ms-lg-6{margin-left:24px!important}.v-application--is-rtl .ms-lg-6{margin-right:24px!important}.v-application--is-ltr .ms-lg-7{margin-left:28px!important}.v-application--is-rtl .ms-lg-7{margin-right:28px!important}.v-application--is-ltr .ms-lg-8{margin-left:32px!important}.v-application--is-rtl .ms-lg-8{margin-right:32px!important}.v-application--is-ltr .ms-lg-9{margin-left:36px!important}.v-application--is-rtl .ms-lg-9{margin-right:36px!important}.v-application--is-ltr .ms-lg-10{margin-left:40px!important}.v-application--is-rtl .ms-lg-10{margin-right:40px!important}.v-application--is-ltr .ms-lg-11{margin-left:44px!important}.v-application--is-rtl .ms-lg-11{margin-right:44px!important}.v-application--is-ltr .ms-lg-12{margin-left:48px!important}.v-application--is-rtl .ms-lg-12{margin-right:48px!important}.v-application--is-ltr .ms-lg-13{margin-left:52px!important}.v-application--is-rtl .ms-lg-13{margin-right:52px!important}.v-application--is-ltr .ms-lg-14{margin-left:56px!important}.v-application--is-rtl .ms-lg-14{margin-right:56px!important}.v-application--is-ltr .ms-lg-15{margin-left:60px!important}.v-application--is-rtl .ms-lg-15{margin-right:60px!important}.v-application--is-ltr .ms-lg-16{margin-left:64px!important}.v-application--is-rtl .ms-lg-16{margin-right:64px!important}.v-application--is-ltr .ms-lg-auto{margin-left:auto!important}.v-application--is-rtl .ms-lg-auto{margin-right:auto!important}.v-application--is-ltr .me-lg-0{margin-right:0!important}.v-application--is-rtl .me-lg-0{margin-left:0!important}.v-application--is-ltr .me-lg-1{margin-right:4px!important}.v-application--is-rtl .me-lg-1{margin-left:4px!important}.v-application--is-ltr .me-lg-2{margin-right:8px!important}.v-application--is-rtl .me-lg-2{margin-left:8px!important}.v-application--is-ltr .me-lg-3{margin-right:12px!important}.v-application--is-rtl .me-lg-3{margin-left:12px!important}.v-application--is-ltr .me-lg-4{margin-right:16px!important}.v-application--is-rtl .me-lg-4{margin-left:16px!important}.v-application--is-ltr .me-lg-5{margin-right:20px!important}.v-application--is-rtl .me-lg-5{margin-left:20px!important}.v-application--is-ltr .me-lg-6{margin-right:24px!important}.v-application--is-rtl .me-lg-6{margin-left:24px!important}.v-application--is-ltr .me-lg-7{margin-right:28px!important}.v-application--is-rtl .me-lg-7{margin-left:28px!important}.v-application--is-ltr .me-lg-8{margin-right:32px!important}.v-application--is-rtl .me-lg-8{margin-left:32px!important}.v-application--is-ltr .me-lg-9{margin-right:36px!important}.v-application--is-rtl .me-lg-9{margin-left:36px!important}.v-application--is-ltr .me-lg-10{margin-right:40px!important}.v-application--is-rtl .me-lg-10{margin-left:40px!important}.v-application--is-ltr .me-lg-11{margin-right:44px!important}.v-application--is-rtl .me-lg-11{margin-left:44px!important}.v-application--is-ltr .me-lg-12{margin-right:48px!important}.v-application--is-rtl .me-lg-12{margin-left:48px!important}.v-application--is-ltr .me-lg-13{margin-right:52px!important}.v-application--is-rtl .me-lg-13{margin-left:52px!important}.v-application--is-ltr .me-lg-14{margin-right:56px!important}.v-application--is-rtl .me-lg-14{margin-left:56px!important}.v-application--is-ltr .me-lg-15{margin-right:60px!important}.v-application--is-rtl .me-lg-15{margin-left:60px!important}.v-application--is-ltr .me-lg-16{margin-right:64px!important}.v-application--is-rtl .me-lg-16{margin-left:64px!important}.v-application--is-ltr .me-lg-auto{margin-right:auto!important}.v-application--is-rtl .me-lg-auto{margin-left:auto!important}.v-application .ma-lg-n1{margin:-4px!important}.v-application .ma-lg-n2{margin:-8px!important}.v-application .ma-lg-n3{margin:-12px!important}.v-application .ma-lg-n4{margin:-16px!important}.v-application .ma-lg-n5{margin:-20px!important}.v-application .ma-lg-n6{margin:-24px!important}.v-application .ma-lg-n7{margin:-28px!important}.v-application .ma-lg-n8{margin:-32px!important}.v-application .ma-lg-n9{margin:-36px!important}.v-application .ma-lg-n10{margin:-40px!important}.v-application .ma-lg-n11{margin:-44px!important}.v-application .ma-lg-n12{margin:-48px!important}.v-application .ma-lg-n13{margin:-52px!important}.v-application .ma-lg-n14{margin:-56px!important}.v-application .ma-lg-n15{margin:-60px!important}.v-application .ma-lg-n16{margin:-64px!important}.v-application .mx-lg-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-lg-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-lg-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-lg-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-lg-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-lg-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-lg-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-lg-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-lg-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-lg-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-lg-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-lg-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-lg-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-lg-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-lg-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-lg-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-lg-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-lg-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-lg-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-lg-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-lg-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-lg-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-lg-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-lg-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-lg-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-lg-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-lg-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-lg-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-lg-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-lg-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-lg-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-lg-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-lg-n1{margin-top:-4px!important}.v-application .mt-lg-n2{margin-top:-8px!important}.v-application .mt-lg-n3{margin-top:-12px!important}.v-application .mt-lg-n4{margin-top:-16px!important}.v-application .mt-lg-n5{margin-top:-20px!important}.v-application .mt-lg-n6{margin-top:-24px!important}.v-application .mt-lg-n7{margin-top:-28px!important}.v-application .mt-lg-n8{margin-top:-32px!important}.v-application .mt-lg-n9{margin-top:-36px!important}.v-application .mt-lg-n10{margin-top:-40px!important}.v-application .mt-lg-n11{margin-top:-44px!important}.v-application .mt-lg-n12{margin-top:-48px!important}.v-application .mt-lg-n13{margin-top:-52px!important}.v-application .mt-lg-n14{margin-top:-56px!important}.v-application .mt-lg-n15{margin-top:-60px!important}.v-application .mt-lg-n16{margin-top:-64px!important}.v-application .mr-lg-n1{margin-right:-4px!important}.v-application .mr-lg-n2{margin-right:-8px!important}.v-application .mr-lg-n3{margin-right:-12px!important}.v-application .mr-lg-n4{margin-right:-16px!important}.v-application .mr-lg-n5{margin-right:-20px!important}.v-application .mr-lg-n6{margin-right:-24px!important}.v-application .mr-lg-n7{margin-right:-28px!important}.v-application .mr-lg-n8{margin-right:-32px!important}.v-application .mr-lg-n9{margin-right:-36px!important}.v-application .mr-lg-n10{margin-right:-40px!important}.v-application .mr-lg-n11{margin-right:-44px!important}.v-application .mr-lg-n12{margin-right:-48px!important}.v-application .mr-lg-n13{margin-right:-52px!important}.v-application .mr-lg-n14{margin-right:-56px!important}.v-application .mr-lg-n15{margin-right:-60px!important}.v-application .mr-lg-n16{margin-right:-64px!important}.v-application .mb-lg-n1{margin-bottom:-4px!important}.v-application .mb-lg-n2{margin-bottom:-8px!important}.v-application .mb-lg-n3{margin-bottom:-12px!important}.v-application .mb-lg-n4{margin-bottom:-16px!important}.v-application .mb-lg-n5{margin-bottom:-20px!important}.v-application .mb-lg-n6{margin-bottom:-24px!important}.v-application .mb-lg-n7{margin-bottom:-28px!important}.v-application .mb-lg-n8{margin-bottom:-32px!important}.v-application .mb-lg-n9{margin-bottom:-36px!important}.v-application .mb-lg-n10{margin-bottom:-40px!important}.v-application .mb-lg-n11{margin-bottom:-44px!important}.v-application .mb-lg-n12{margin-bottom:-48px!important}.v-application .mb-lg-n13{margin-bottom:-52px!important}.v-application .mb-lg-n14{margin-bottom:-56px!important}.v-application .mb-lg-n15{margin-bottom:-60px!important}.v-application .mb-lg-n16{margin-bottom:-64px!important}.v-application .ml-lg-n1{margin-left:-4px!important}.v-application .ml-lg-n2{margin-left:-8px!important}.v-application .ml-lg-n3{margin-left:-12px!important}.v-application .ml-lg-n4{margin-left:-16px!important}.v-application .ml-lg-n5{margin-left:-20px!important}.v-application .ml-lg-n6{margin-left:-24px!important}.v-application .ml-lg-n7{margin-left:-28px!important}.v-application .ml-lg-n8{margin-left:-32px!important}.v-application .ml-lg-n9{margin-left:-36px!important}.v-application .ml-lg-n10{margin-left:-40px!important}.v-application .ml-lg-n11{margin-left:-44px!important}.v-application .ml-lg-n12{margin-left:-48px!important}.v-application .ml-lg-n13{margin-left:-52px!important}.v-application .ml-lg-n14{margin-left:-56px!important}.v-application .ml-lg-n15{margin-left:-60px!important}.v-application .ml-lg-n16{margin-left:-64px!important}.v-application--is-ltr .ms-lg-n1{margin-left:-4px!important}.v-application--is-rtl .ms-lg-n1{margin-right:-4px!important}.v-application--is-ltr .ms-lg-n2{margin-left:-8px!important}.v-application--is-rtl .ms-lg-n2{margin-right:-8px!important}.v-application--is-ltr .ms-lg-n3{margin-left:-12px!important}.v-application--is-rtl .ms-lg-n3{margin-right:-12px!important}.v-application--is-ltr .ms-lg-n4{margin-left:-16px!important}.v-application--is-rtl .ms-lg-n4{margin-right:-16px!important}.v-application--is-ltr .ms-lg-n5{margin-left:-20px!important}.v-application--is-rtl .ms-lg-n5{margin-right:-20px!important}.v-application--is-ltr .ms-lg-n6{margin-left:-24px!important}.v-application--is-rtl .ms-lg-n6{margin-right:-24px!important}.v-application--is-ltr .ms-lg-n7{margin-left:-28px!important}.v-application--is-rtl .ms-lg-n7{margin-right:-28px!important}.v-application--is-ltr .ms-lg-n8{margin-left:-32px!important}.v-application--is-rtl .ms-lg-n8{margin-right:-32px!important}.v-application--is-ltr .ms-lg-n9{margin-left:-36px!important}.v-application--is-rtl .ms-lg-n9{margin-right:-36px!important}.v-application--is-ltr .ms-lg-n10{margin-left:-40px!important}.v-application--is-rtl .ms-lg-n10{margin-right:-40px!important}.v-application--is-ltr .ms-lg-n11{margin-left:-44px!important}.v-application--is-rtl .ms-lg-n11{margin-right:-44px!important}.v-application--is-ltr .ms-lg-n12{margin-left:-48px!important}.v-application--is-rtl .ms-lg-n12{margin-right:-48px!important}.v-application--is-ltr .ms-lg-n13{margin-left:-52px!important}.v-application--is-rtl .ms-lg-n13{margin-right:-52px!important}.v-application--is-ltr .ms-lg-n14{margin-left:-56px!important}.v-application--is-rtl .ms-lg-n14{margin-right:-56px!important}.v-application--is-ltr .ms-lg-n15{margin-left:-60px!important}.v-application--is-rtl .ms-lg-n15{margin-right:-60px!important}.v-application--is-ltr .ms-lg-n16{margin-left:-64px!important}.v-application--is-rtl .ms-lg-n16{margin-right:-64px!important}.v-application--is-ltr .me-lg-n1{margin-right:-4px!important}.v-application--is-rtl .me-lg-n1{margin-left:-4px!important}.v-application--is-ltr .me-lg-n2{margin-right:-8px!important}.v-application--is-rtl .me-lg-n2{margin-left:-8px!important}.v-application--is-ltr .me-lg-n3{margin-right:-12px!important}.v-application--is-rtl .me-lg-n3{margin-left:-12px!important}.v-application--is-ltr .me-lg-n4{margin-right:-16px!important}.v-application--is-rtl .me-lg-n4{margin-left:-16px!important}.v-application--is-ltr .me-lg-n5{margin-right:-20px!important}.v-application--is-rtl .me-lg-n5{margin-left:-20px!important}.v-application--is-ltr .me-lg-n6{margin-right:-24px!important}.v-application--is-rtl .me-lg-n6{margin-left:-24px!important}.v-application--is-ltr .me-lg-n7{margin-right:-28px!important}.v-application--is-rtl .me-lg-n7{margin-left:-28px!important}.v-application--is-ltr .me-lg-n8{margin-right:-32px!important}.v-application--is-rtl .me-lg-n8{margin-left:-32px!important}.v-application--is-ltr .me-lg-n9{margin-right:-36px!important}.v-application--is-rtl .me-lg-n9{margin-left:-36px!important}.v-application--is-ltr .me-lg-n10{margin-right:-40px!important}.v-application--is-rtl .me-lg-n10{margin-left:-40px!important}.v-application--is-ltr .me-lg-n11{margin-right:-44px!important}.v-application--is-rtl .me-lg-n11{margin-left:-44px!important}.v-application--is-ltr .me-lg-n12{margin-right:-48px!important}.v-application--is-rtl .me-lg-n12{margin-left:-48px!important}.v-application--is-ltr .me-lg-n13{margin-right:-52px!important}.v-application--is-rtl .me-lg-n13{margin-left:-52px!important}.v-application--is-ltr .me-lg-n14{margin-right:-56px!important}.v-application--is-rtl .me-lg-n14{margin-left:-56px!important}.v-application--is-ltr .me-lg-n15{margin-right:-60px!important}.v-application--is-rtl .me-lg-n15{margin-left:-60px!important}.v-application--is-ltr .me-lg-n16{margin-right:-64px!important}.v-application--is-rtl .me-lg-n16{margin-left:-64px!important}.v-application .pa-lg-0{padding:0!important}.v-application .pa-lg-1{padding:4px!important}.v-application .pa-lg-2{padding:8px!important}.v-application .pa-lg-3{padding:12px!important}.v-application .pa-lg-4{padding:16px!important}.v-application .pa-lg-5{padding:20px!important}.v-application .pa-lg-6{padding:24px!important}.v-application .pa-lg-7{padding:28px!important}.v-application .pa-lg-8{padding:32px!important}.v-application .pa-lg-9{padding:36px!important}.v-application .pa-lg-10{padding:40px!important}.v-application .pa-lg-11{padding:44px!important}.v-application .pa-lg-12{padding:48px!important}.v-application .pa-lg-13{padding:52px!important}.v-application .pa-lg-14{padding:56px!important}.v-application .pa-lg-15{padding:60px!important}.v-application .pa-lg-16{padding:64px!important}.v-application .px-lg-0{padding-right:0!important;padding-left:0!important}.v-application .px-lg-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-lg-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-lg-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-lg-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-lg-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-lg-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-lg-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-lg-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-lg-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-lg-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-lg-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-lg-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-lg-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-lg-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-lg-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-lg-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-lg-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-lg-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-lg-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-lg-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-lg-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-lg-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-lg-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-lg-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-lg-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-lg-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-lg-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-lg-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-lg-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-lg-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-lg-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-lg-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-lg-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-lg-0{padding-top:0!important}.v-application .pt-lg-1{padding-top:4px!important}.v-application .pt-lg-2{padding-top:8px!important}.v-application .pt-lg-3{padding-top:12px!important}.v-application .pt-lg-4{padding-top:16px!important}.v-application .pt-lg-5{padding-top:20px!important}.v-application .pt-lg-6{padding-top:24px!important}.v-application .pt-lg-7{padding-top:28px!important}.v-application .pt-lg-8{padding-top:32px!important}.v-application .pt-lg-9{padding-top:36px!important}.v-application .pt-lg-10{padding-top:40px!important}.v-application .pt-lg-11{padding-top:44px!important}.v-application .pt-lg-12{padding-top:48px!important}.v-application .pt-lg-13{padding-top:52px!important}.v-application .pt-lg-14{padding-top:56px!important}.v-application .pt-lg-15{padding-top:60px!important}.v-application .pt-lg-16{padding-top:64px!important}.v-application .pr-lg-0{padding-right:0!important}.v-application .pr-lg-1{padding-right:4px!important}.v-application .pr-lg-2{padding-right:8px!important}.v-application .pr-lg-3{padding-right:12px!important}.v-application .pr-lg-4{padding-right:16px!important}.v-application .pr-lg-5{padding-right:20px!important}.v-application .pr-lg-6{padding-right:24px!important}.v-application .pr-lg-7{padding-right:28px!important}.v-application .pr-lg-8{padding-right:32px!important}.v-application .pr-lg-9{padding-right:36px!important}.v-application .pr-lg-10{padding-right:40px!important}.v-application .pr-lg-11{padding-right:44px!important}.v-application .pr-lg-12{padding-right:48px!important}.v-application .pr-lg-13{padding-right:52px!important}.v-application .pr-lg-14{padding-right:56px!important}.v-application .pr-lg-15{padding-right:60px!important}.v-application .pr-lg-16{padding-right:64px!important}.v-application .pb-lg-0{padding-bottom:0!important}.v-application .pb-lg-1{padding-bottom:4px!important}.v-application .pb-lg-2{padding-bottom:8px!important}.v-application .pb-lg-3{padding-bottom:12px!important}.v-application .pb-lg-4{padding-bottom:16px!important}.v-application .pb-lg-5{padding-bottom:20px!important}.v-application .pb-lg-6{padding-bottom:24px!important}.v-application .pb-lg-7{padding-bottom:28px!important}.v-application .pb-lg-8{padding-bottom:32px!important}.v-application .pb-lg-9{padding-bottom:36px!important}.v-application .pb-lg-10{padding-bottom:40px!important}.v-application .pb-lg-11{padding-bottom:44px!important}.v-application .pb-lg-12{padding-bottom:48px!important}.v-application .pb-lg-13{padding-bottom:52px!important}.v-application .pb-lg-14{padding-bottom:56px!important}.v-application .pb-lg-15{padding-bottom:60px!important}.v-application .pb-lg-16{padding-bottom:64px!important}.v-application .pl-lg-0{padding-left:0!important}.v-application .pl-lg-1{padding-left:4px!important}.v-application .pl-lg-2{padding-left:8px!important}.v-application .pl-lg-3{padding-left:12px!important}.v-application .pl-lg-4{padding-left:16px!important}.v-application .pl-lg-5{padding-left:20px!important}.v-application .pl-lg-6{padding-left:24px!important}.v-application .pl-lg-7{padding-left:28px!important}.v-application .pl-lg-8{padding-left:32px!important}.v-application .pl-lg-9{padding-left:36px!important}.v-application .pl-lg-10{padding-left:40px!important}.v-application .pl-lg-11{padding-left:44px!important}.v-application .pl-lg-12{padding-left:48px!important}.v-application .pl-lg-13{padding-left:52px!important}.v-application .pl-lg-14{padding-left:56px!important}.v-application .pl-lg-15{padding-left:60px!important}.v-application .pl-lg-16{padding-left:64px!important}.v-application--is-ltr .ps-lg-0{padding-left:0!important}.v-application--is-rtl .ps-lg-0{padding-right:0!important}.v-application--is-ltr .ps-lg-1{padding-left:4px!important}.v-application--is-rtl .ps-lg-1{padding-right:4px!important}.v-application--is-ltr .ps-lg-2{padding-left:8px!important}.v-application--is-rtl .ps-lg-2{padding-right:8px!important}.v-application--is-ltr .ps-lg-3{padding-left:12px!important}.v-application--is-rtl .ps-lg-3{padding-right:12px!important}.v-application--is-ltr .ps-lg-4{padding-left:16px!important}.v-application--is-rtl .ps-lg-4{padding-right:16px!important}.v-application--is-ltr .ps-lg-5{padding-left:20px!important}.v-application--is-rtl .ps-lg-5{padding-right:20px!important}.v-application--is-ltr .ps-lg-6{padding-left:24px!important}.v-application--is-rtl .ps-lg-6{padding-right:24px!important}.v-application--is-ltr .ps-lg-7{padding-left:28px!important}.v-application--is-rtl .ps-lg-7{padding-right:28px!important}.v-application--is-ltr .ps-lg-8{padding-left:32px!important}.v-application--is-rtl .ps-lg-8{padding-right:32px!important}.v-application--is-ltr .ps-lg-9{padding-left:36px!important}.v-application--is-rtl .ps-lg-9{padding-right:36px!important}.v-application--is-ltr .ps-lg-10{padding-left:40px!important}.v-application--is-rtl .ps-lg-10{padding-right:40px!important}.v-application--is-ltr .ps-lg-11{padding-left:44px!important}.v-application--is-rtl .ps-lg-11{padding-right:44px!important}.v-application--is-ltr .ps-lg-12{padding-left:48px!important}.v-application--is-rtl .ps-lg-12{padding-right:48px!important}.v-application--is-ltr .ps-lg-13{padding-left:52px!important}.v-application--is-rtl .ps-lg-13{padding-right:52px!important}.v-application--is-ltr .ps-lg-14{padding-left:56px!important}.v-application--is-rtl .ps-lg-14{padding-right:56px!important}.v-application--is-ltr .ps-lg-15{padding-left:60px!important}.v-application--is-rtl .ps-lg-15{padding-right:60px!important}.v-application--is-ltr .ps-lg-16{padding-left:64px!important}.v-application--is-rtl .ps-lg-16{padding-right:64px!important}.v-application--is-ltr .pe-lg-0{padding-right:0!important}.v-application--is-rtl .pe-lg-0{padding-left:0!important}.v-application--is-ltr .pe-lg-1{padding-right:4px!important}.v-application--is-rtl .pe-lg-1{padding-left:4px!important}.v-application--is-ltr .pe-lg-2{padding-right:8px!important}.v-application--is-rtl .pe-lg-2{padding-left:8px!important}.v-application--is-ltr .pe-lg-3{padding-right:12px!important}.v-application--is-rtl .pe-lg-3{padding-left:12px!important}.v-application--is-ltr .pe-lg-4{padding-right:16px!important}.v-application--is-rtl .pe-lg-4{padding-left:16px!important}.v-application--is-ltr .pe-lg-5{padding-right:20px!important}.v-application--is-rtl .pe-lg-5{padding-left:20px!important}.v-application--is-ltr .pe-lg-6{padding-right:24px!important}.v-application--is-rtl .pe-lg-6{padding-left:24px!important}.v-application--is-ltr .pe-lg-7{padding-right:28px!important}.v-application--is-rtl .pe-lg-7{padding-left:28px!important}.v-application--is-ltr .pe-lg-8{padding-right:32px!important}.v-application--is-rtl .pe-lg-8{padding-left:32px!important}.v-application--is-ltr .pe-lg-9{padding-right:36px!important}.v-application--is-rtl .pe-lg-9{padding-left:36px!important}.v-application--is-ltr .pe-lg-10{padding-right:40px!important}.v-application--is-rtl .pe-lg-10{padding-left:40px!important}.v-application--is-ltr .pe-lg-11{padding-right:44px!important}.v-application--is-rtl .pe-lg-11{padding-left:44px!important}.v-application--is-ltr .pe-lg-12{padding-right:48px!important}.v-application--is-rtl .pe-lg-12{padding-left:48px!important}.v-application--is-ltr .pe-lg-13{padding-right:52px!important}.v-application--is-rtl .pe-lg-13{padding-left:52px!important}.v-application--is-ltr .pe-lg-14{padding-right:56px!important}.v-application--is-rtl .pe-lg-14{padding-left:56px!important}.v-application--is-ltr .pe-lg-15{padding-right:60px!important}.v-application--is-rtl .pe-lg-15{padding-left:60px!important}.v-application--is-ltr .pe-lg-16{padding-right:64px!important}.v-application--is-rtl .pe-lg-16{padding-left:64px!important}.v-application .text-lg-left{text-align:left!important}.v-application .text-lg-right{text-align:right!important}.v-application .text-lg-center{text-align:center!important}.v-application .text-lg-justify{text-align:justify!important}[dir=ltr] .v-application .text-lg-start{text-align:left!important}[dir=ltr] .v-application .text-lg-end,[dir=rtl] .v-application .text-lg-start{text-align:right!important}[dir=rtl] .v-application .text-lg-end{text-align:left!important}.v-application .text-lg-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-lg-h1,.v-application .text-lg-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-lg-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-lg-h3,.v-application .text-lg-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-lg-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-lg-h5,.v-application .text-lg-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-lg-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-lg-body-2,.v-application .text-lg-button{font-size:.875rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-lg-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-lg-caption,.v-application .text-lg-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-lg-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media(min-width:1904px){.v-application .d-xl-none{display:none!important}.v-application .d-xl-inline{display:inline!important}.v-application .d-xl-inline-block{display:inline-block!important}.v-application .d-xl-block{display:block!important}.v-application .d-xl-table{display:table!important}.v-application .d-xl-table-row{display:table-row!important}.v-application .d-xl-table-cell{display:table-cell!important}.v-application .d-xl-flex{display:flex!important}.v-application .d-xl-inline-flex{display:inline-flex!important}.v-application .float-xl-none{float:none!important}.v-application .float-xl-left{float:left!important}.v-application .float-xl-right{float:right!important}.v-application--is-rtl .float-xl-end{float:left!important}.v-application--is-ltr .float-xl-end,.v-application--is-rtl .float-xl-start{float:right!important}.v-application--is-ltr .float-xl-start{float:left!important}.v-application .flex-xl-fill{flex:1 1 auto!important}.v-application .flex-xl-row{flex-direction:row!important}.v-application .flex-xl-column{flex-direction:column!important}.v-application .flex-xl-row-reverse{flex-direction:row-reverse!important}.v-application .flex-xl-column-reverse{flex-direction:column-reverse!important}.v-application .flex-xl-grow-0{flex-grow:0!important}.v-application .flex-xl-grow-1{flex-grow:1!important}.v-application .flex-xl-shrink-0{flex-shrink:0!important}.v-application .flex-xl-shrink-1{flex-shrink:1!important}.v-application .flex-xl-wrap{flex-wrap:wrap!important}.v-application .flex-xl-nowrap{flex-wrap:nowrap!important}.v-application .flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.v-application .justify-xl-start{justify-content:flex-start!important}.v-application .justify-xl-end{justify-content:flex-end!important}.v-application .justify-xl-center{justify-content:center!important}.v-application .justify-xl-space-between{justify-content:space-between!important}.v-application .justify-xl-space-around{justify-content:space-around!important}.v-application .align-xl-start{align-items:flex-start!important}.v-application .align-xl-end{align-items:flex-end!important}.v-application .align-xl-center{align-items:center!important}.v-application .align-xl-baseline{align-items:baseline!important}.v-application .align-xl-stretch{align-items:stretch!important}.v-application .align-content-xl-start{align-content:flex-start!important}.v-application .align-content-xl-end{align-content:flex-end!important}.v-application .align-content-xl-center{align-content:center!important}.v-application .align-content-xl-space-between{align-content:space-between!important}.v-application .align-content-xl-space-around{align-content:space-around!important}.v-application .align-content-xl-stretch{align-content:stretch!important}.v-application .align-self-xl-auto{align-self:auto!important}.v-application .align-self-xl-start{align-self:flex-start!important}.v-application .align-self-xl-end{align-self:flex-end!important}.v-application .align-self-xl-center{align-self:center!important}.v-application .align-self-xl-baseline{align-self:baseline!important}.v-application .align-self-xl-stretch{align-self:stretch!important}.v-application .order-xl-first{order:-1!important}.v-application .order-xl-0{order:0!important}.v-application .order-xl-1{order:1!important}.v-application .order-xl-2{order:2!important}.v-application .order-xl-3{order:3!important}.v-application .order-xl-4{order:4!important}.v-application .order-xl-5{order:5!important}.v-application .order-xl-6{order:6!important}.v-application .order-xl-7{order:7!important}.v-application .order-xl-8{order:8!important}.v-application .order-xl-9{order:9!important}.v-application .order-xl-10{order:10!important}.v-application .order-xl-11{order:11!important}.v-application .order-xl-12{order:12!important}.v-application .order-xl-last{order:13!important}.v-application .ma-xl-0{margin:0!important}.v-application .ma-xl-1{margin:4px!important}.v-application .ma-xl-2{margin:8px!important}.v-application .ma-xl-3{margin:12px!important}.v-application .ma-xl-4{margin:16px!important}.v-application .ma-xl-5{margin:20px!important}.v-application .ma-xl-6{margin:24px!important}.v-application .ma-xl-7{margin:28px!important}.v-application .ma-xl-8{margin:32px!important}.v-application .ma-xl-9{margin:36px!important}.v-application .ma-xl-10{margin:40px!important}.v-application .ma-xl-11{margin:44px!important}.v-application .ma-xl-12{margin:48px!important}.v-application .ma-xl-13{margin:52px!important}.v-application .ma-xl-14{margin:56px!important}.v-application .ma-xl-15{margin:60px!important}.v-application .ma-xl-16{margin:64px!important}.v-application .ma-xl-auto{margin:auto!important}.v-application .mx-xl-0{margin-right:0!important;margin-left:0!important}.v-application .mx-xl-1{margin-right:4px!important;margin-left:4px!important}.v-application .mx-xl-2{margin-right:8px!important;margin-left:8px!important}.v-application .mx-xl-3{margin-right:12px!important;margin-left:12px!important}.v-application .mx-xl-4{margin-right:16px!important;margin-left:16px!important}.v-application .mx-xl-5{margin-right:20px!important;margin-left:20px!important}.v-application .mx-xl-6{margin-right:24px!important;margin-left:24px!important}.v-application .mx-xl-7{margin-right:28px!important;margin-left:28px!important}.v-application .mx-xl-8{margin-right:32px!important;margin-left:32px!important}.v-application .mx-xl-9{margin-right:36px!important;margin-left:36px!important}.v-application .mx-xl-10{margin-right:40px!important;margin-left:40px!important}.v-application .mx-xl-11{margin-right:44px!important;margin-left:44px!important}.v-application .mx-xl-12{margin-right:48px!important;margin-left:48px!important}.v-application .mx-xl-13{margin-right:52px!important;margin-left:52px!important}.v-application .mx-xl-14{margin-right:56px!important;margin-left:56px!important}.v-application .mx-xl-15{margin-right:60px!important;margin-left:60px!important}.v-application .mx-xl-16{margin-right:64px!important;margin-left:64px!important}.v-application .mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.v-application .my-xl-0{margin-top:0!important;margin-bottom:0!important}.v-application .my-xl-1{margin-top:4px!important;margin-bottom:4px!important}.v-application .my-xl-2{margin-top:8px!important;margin-bottom:8px!important}.v-application .my-xl-3{margin-top:12px!important;margin-bottom:12px!important}.v-application .my-xl-4{margin-top:16px!important;margin-bottom:16px!important}.v-application .my-xl-5{margin-top:20px!important;margin-bottom:20px!important}.v-application .my-xl-6{margin-top:24px!important;margin-bottom:24px!important}.v-application .my-xl-7{margin-top:28px!important;margin-bottom:28px!important}.v-application .my-xl-8{margin-top:32px!important;margin-bottom:32px!important}.v-application .my-xl-9{margin-top:36px!important;margin-bottom:36px!important}.v-application .my-xl-10{margin-top:40px!important;margin-bottom:40px!important}.v-application .my-xl-11{margin-top:44px!important;margin-bottom:44px!important}.v-application .my-xl-12{margin-top:48px!important;margin-bottom:48px!important}.v-application .my-xl-13{margin-top:52px!important;margin-bottom:52px!important}.v-application .my-xl-14{margin-top:56px!important;margin-bottom:56px!important}.v-application .my-xl-15{margin-top:60px!important;margin-bottom:60px!important}.v-application .my-xl-16{margin-top:64px!important;margin-bottom:64px!important}.v-application .my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.v-application .mt-xl-0{margin-top:0!important}.v-application .mt-xl-1{margin-top:4px!important}.v-application .mt-xl-2{margin-top:8px!important}.v-application .mt-xl-3{margin-top:12px!important}.v-application .mt-xl-4{margin-top:16px!important}.v-application .mt-xl-5{margin-top:20px!important}.v-application .mt-xl-6{margin-top:24px!important}.v-application .mt-xl-7{margin-top:28px!important}.v-application .mt-xl-8{margin-top:32px!important}.v-application .mt-xl-9{margin-top:36px!important}.v-application .mt-xl-10{margin-top:40px!important}.v-application .mt-xl-11{margin-top:44px!important}.v-application .mt-xl-12{margin-top:48px!important}.v-application .mt-xl-13{margin-top:52px!important}.v-application .mt-xl-14{margin-top:56px!important}.v-application .mt-xl-15{margin-top:60px!important}.v-application .mt-xl-16{margin-top:64px!important}.v-application .mt-xl-auto{margin-top:auto!important}.v-application .mr-xl-0{margin-right:0!important}.v-application .mr-xl-1{margin-right:4px!important}.v-application .mr-xl-2{margin-right:8px!important}.v-application .mr-xl-3{margin-right:12px!important}.v-application .mr-xl-4{margin-right:16px!important}.v-application .mr-xl-5{margin-right:20px!important}.v-application .mr-xl-6{margin-right:24px!important}.v-application .mr-xl-7{margin-right:28px!important}.v-application .mr-xl-8{margin-right:32px!important}.v-application .mr-xl-9{margin-right:36px!important}.v-application .mr-xl-10{margin-right:40px!important}.v-application .mr-xl-11{margin-right:44px!important}.v-application .mr-xl-12{margin-right:48px!important}.v-application .mr-xl-13{margin-right:52px!important}.v-application .mr-xl-14{margin-right:56px!important}.v-application .mr-xl-15{margin-right:60px!important}.v-application .mr-xl-16{margin-right:64px!important}.v-application .mr-xl-auto{margin-right:auto!important}.v-application .mb-xl-0{margin-bottom:0!important}.v-application .mb-xl-1{margin-bottom:4px!important}.v-application .mb-xl-2{margin-bottom:8px!important}.v-application .mb-xl-3{margin-bottom:12px!important}.v-application .mb-xl-4{margin-bottom:16px!important}.v-application .mb-xl-5{margin-bottom:20px!important}.v-application .mb-xl-6{margin-bottom:24px!important}.v-application .mb-xl-7{margin-bottom:28px!important}.v-application .mb-xl-8{margin-bottom:32px!important}.v-application .mb-xl-9{margin-bottom:36px!important}.v-application .mb-xl-10{margin-bottom:40px!important}.v-application .mb-xl-11{margin-bottom:44px!important}.v-application .mb-xl-12{margin-bottom:48px!important}.v-application .mb-xl-13{margin-bottom:52px!important}.v-application .mb-xl-14{margin-bottom:56px!important}.v-application .mb-xl-15{margin-bottom:60px!important}.v-application .mb-xl-16{margin-bottom:64px!important}.v-application .mb-xl-auto{margin-bottom:auto!important}.v-application .ml-xl-0{margin-left:0!important}.v-application .ml-xl-1{margin-left:4px!important}.v-application .ml-xl-2{margin-left:8px!important}.v-application .ml-xl-3{margin-left:12px!important}.v-application .ml-xl-4{margin-left:16px!important}.v-application .ml-xl-5{margin-left:20px!important}.v-application .ml-xl-6{margin-left:24px!important}.v-application .ml-xl-7{margin-left:28px!important}.v-application .ml-xl-8{margin-left:32px!important}.v-application .ml-xl-9{margin-left:36px!important}.v-application .ml-xl-10{margin-left:40px!important}.v-application .ml-xl-11{margin-left:44px!important}.v-application .ml-xl-12{margin-left:48px!important}.v-application .ml-xl-13{margin-left:52px!important}.v-application .ml-xl-14{margin-left:56px!important}.v-application .ml-xl-15{margin-left:60px!important}.v-application .ml-xl-16{margin-left:64px!important}.v-application .ml-xl-auto{margin-left:auto!important}.v-application--is-ltr .ms-xl-0{margin-left:0!important}.v-application--is-rtl .ms-xl-0{margin-right:0!important}.v-application--is-ltr .ms-xl-1{margin-left:4px!important}.v-application--is-rtl .ms-xl-1{margin-right:4px!important}.v-application--is-ltr .ms-xl-2{margin-left:8px!important}.v-application--is-rtl .ms-xl-2{margin-right:8px!important}.v-application--is-ltr .ms-xl-3{margin-left:12px!important}.v-application--is-rtl .ms-xl-3{margin-right:12px!important}.v-application--is-ltr .ms-xl-4{margin-left:16px!important}.v-application--is-rtl .ms-xl-4{margin-right:16px!important}.v-application--is-ltr .ms-xl-5{margin-left:20px!important}.v-application--is-rtl .ms-xl-5{margin-right:20px!important}.v-application--is-ltr .ms-xl-6{margin-left:24px!important}.v-application--is-rtl .ms-xl-6{margin-right:24px!important}.v-application--is-ltr .ms-xl-7{margin-left:28px!important}.v-application--is-rtl .ms-xl-7{margin-right:28px!important}.v-application--is-ltr .ms-xl-8{margin-left:32px!important}.v-application--is-rtl .ms-xl-8{margin-right:32px!important}.v-application--is-ltr .ms-xl-9{margin-left:36px!important}.v-application--is-rtl .ms-xl-9{margin-right:36px!important}.v-application--is-ltr .ms-xl-10{margin-left:40px!important}.v-application--is-rtl .ms-xl-10{margin-right:40px!important}.v-application--is-ltr .ms-xl-11{margin-left:44px!important}.v-application--is-rtl .ms-xl-11{margin-right:44px!important}.v-application--is-ltr .ms-xl-12{margin-left:48px!important}.v-application--is-rtl .ms-xl-12{margin-right:48px!important}.v-application--is-ltr .ms-xl-13{margin-left:52px!important}.v-application--is-rtl .ms-xl-13{margin-right:52px!important}.v-application--is-ltr .ms-xl-14{margin-left:56px!important}.v-application--is-rtl .ms-xl-14{margin-right:56px!important}.v-application--is-ltr .ms-xl-15{margin-left:60px!important}.v-application--is-rtl .ms-xl-15{margin-right:60px!important}.v-application--is-ltr .ms-xl-16{margin-left:64px!important}.v-application--is-rtl .ms-xl-16{margin-right:64px!important}.v-application--is-ltr .ms-xl-auto{margin-left:auto!important}.v-application--is-rtl .ms-xl-auto{margin-right:auto!important}.v-application--is-ltr .me-xl-0{margin-right:0!important}.v-application--is-rtl .me-xl-0{margin-left:0!important}.v-application--is-ltr .me-xl-1{margin-right:4px!important}.v-application--is-rtl .me-xl-1{margin-left:4px!important}.v-application--is-ltr .me-xl-2{margin-right:8px!important}.v-application--is-rtl .me-xl-2{margin-left:8px!important}.v-application--is-ltr .me-xl-3{margin-right:12px!important}.v-application--is-rtl .me-xl-3{margin-left:12px!important}.v-application--is-ltr .me-xl-4{margin-right:16px!important}.v-application--is-rtl .me-xl-4{margin-left:16px!important}.v-application--is-ltr .me-xl-5{margin-right:20px!important}.v-application--is-rtl .me-xl-5{margin-left:20px!important}.v-application--is-ltr .me-xl-6{margin-right:24px!important}.v-application--is-rtl .me-xl-6{margin-left:24px!important}.v-application--is-ltr .me-xl-7{margin-right:28px!important}.v-application--is-rtl .me-xl-7{margin-left:28px!important}.v-application--is-ltr .me-xl-8{margin-right:32px!important}.v-application--is-rtl .me-xl-8{margin-left:32px!important}.v-application--is-ltr .me-xl-9{margin-right:36px!important}.v-application--is-rtl .me-xl-9{margin-left:36px!important}.v-application--is-ltr .me-xl-10{margin-right:40px!important}.v-application--is-rtl .me-xl-10{margin-left:40px!important}.v-application--is-ltr .me-xl-11{margin-right:44px!important}.v-application--is-rtl .me-xl-11{margin-left:44px!important}.v-application--is-ltr .me-xl-12{margin-right:48px!important}.v-application--is-rtl .me-xl-12{margin-left:48px!important}.v-application--is-ltr .me-xl-13{margin-right:52px!important}.v-application--is-rtl .me-xl-13{margin-left:52px!important}.v-application--is-ltr .me-xl-14{margin-right:56px!important}.v-application--is-rtl .me-xl-14{margin-left:56px!important}.v-application--is-ltr .me-xl-15{margin-right:60px!important}.v-application--is-rtl .me-xl-15{margin-left:60px!important}.v-application--is-ltr .me-xl-16{margin-right:64px!important}.v-application--is-rtl .me-xl-16{margin-left:64px!important}.v-application--is-ltr .me-xl-auto{margin-right:auto!important}.v-application--is-rtl .me-xl-auto{margin-left:auto!important}.v-application .ma-xl-n1{margin:-4px!important}.v-application .ma-xl-n2{margin:-8px!important}.v-application .ma-xl-n3{margin:-12px!important}.v-application .ma-xl-n4{margin:-16px!important}.v-application .ma-xl-n5{margin:-20px!important}.v-application .ma-xl-n6{margin:-24px!important}.v-application .ma-xl-n7{margin:-28px!important}.v-application .ma-xl-n8{margin:-32px!important}.v-application .ma-xl-n9{margin:-36px!important}.v-application .ma-xl-n10{margin:-40px!important}.v-application .ma-xl-n11{margin:-44px!important}.v-application .ma-xl-n12{margin:-48px!important}.v-application .ma-xl-n13{margin:-52px!important}.v-application .ma-xl-n14{margin:-56px!important}.v-application .ma-xl-n15{margin:-60px!important}.v-application .ma-xl-n16{margin:-64px!important}.v-application .mx-xl-n1{margin-right:-4px!important;margin-left:-4px!important}.v-application .mx-xl-n2{margin-right:-8px!important;margin-left:-8px!important}.v-application .mx-xl-n3{margin-right:-12px!important;margin-left:-12px!important}.v-application .mx-xl-n4{margin-right:-16px!important;margin-left:-16px!important}.v-application .mx-xl-n5{margin-right:-20px!important;margin-left:-20px!important}.v-application .mx-xl-n6{margin-right:-24px!important;margin-left:-24px!important}.v-application .mx-xl-n7{margin-right:-28px!important;margin-left:-28px!important}.v-application .mx-xl-n8{margin-right:-32px!important;margin-left:-32px!important}.v-application .mx-xl-n9{margin-right:-36px!important;margin-left:-36px!important}.v-application .mx-xl-n10{margin-right:-40px!important;margin-left:-40px!important}.v-application .mx-xl-n11{margin-right:-44px!important;margin-left:-44px!important}.v-application .mx-xl-n12{margin-right:-48px!important;margin-left:-48px!important}.v-application .mx-xl-n13{margin-right:-52px!important;margin-left:-52px!important}.v-application .mx-xl-n14{margin-right:-56px!important;margin-left:-56px!important}.v-application .mx-xl-n15{margin-right:-60px!important;margin-left:-60px!important}.v-application .mx-xl-n16{margin-right:-64px!important;margin-left:-64px!important}.v-application .my-xl-n1{margin-top:-4px!important;margin-bottom:-4px!important}.v-application .my-xl-n2{margin-top:-8px!important;margin-bottom:-8px!important}.v-application .my-xl-n3{margin-top:-12px!important;margin-bottom:-12px!important}.v-application .my-xl-n4{margin-top:-16px!important;margin-bottom:-16px!important}.v-application .my-xl-n5{margin-top:-20px!important;margin-bottom:-20px!important}.v-application .my-xl-n6{margin-top:-24px!important;margin-bottom:-24px!important}.v-application .my-xl-n7{margin-top:-28px!important;margin-bottom:-28px!important}.v-application .my-xl-n8{margin-top:-32px!important;margin-bottom:-32px!important}.v-application .my-xl-n9{margin-top:-36px!important;margin-bottom:-36px!important}.v-application .my-xl-n10{margin-top:-40px!important;margin-bottom:-40px!important}.v-application .my-xl-n11{margin-top:-44px!important;margin-bottom:-44px!important}.v-application .my-xl-n12{margin-top:-48px!important;margin-bottom:-48px!important}.v-application .my-xl-n13{margin-top:-52px!important;margin-bottom:-52px!important}.v-application .my-xl-n14{margin-top:-56px!important;margin-bottom:-56px!important}.v-application .my-xl-n15{margin-top:-60px!important;margin-bottom:-60px!important}.v-application .my-xl-n16{margin-top:-64px!important;margin-bottom:-64px!important}.v-application .mt-xl-n1{margin-top:-4px!important}.v-application .mt-xl-n2{margin-top:-8px!important}.v-application .mt-xl-n3{margin-top:-12px!important}.v-application .mt-xl-n4{margin-top:-16px!important}.v-application .mt-xl-n5{margin-top:-20px!important}.v-application .mt-xl-n6{margin-top:-24px!important}.v-application .mt-xl-n7{margin-top:-28px!important}.v-application .mt-xl-n8{margin-top:-32px!important}.v-application .mt-xl-n9{margin-top:-36px!important}.v-application .mt-xl-n10{margin-top:-40px!important}.v-application .mt-xl-n11{margin-top:-44px!important}.v-application .mt-xl-n12{margin-top:-48px!important}.v-application .mt-xl-n13{margin-top:-52px!important}.v-application .mt-xl-n14{margin-top:-56px!important}.v-application .mt-xl-n15{margin-top:-60px!important}.v-application .mt-xl-n16{margin-top:-64px!important}.v-application .mr-xl-n1{margin-right:-4px!important}.v-application .mr-xl-n2{margin-right:-8px!important}.v-application .mr-xl-n3{margin-right:-12px!important}.v-application .mr-xl-n4{margin-right:-16px!important}.v-application .mr-xl-n5{margin-right:-20px!important}.v-application .mr-xl-n6{margin-right:-24px!important}.v-application .mr-xl-n7{margin-right:-28px!important}.v-application .mr-xl-n8{margin-right:-32px!important}.v-application .mr-xl-n9{margin-right:-36px!important}.v-application .mr-xl-n10{margin-right:-40px!important}.v-application .mr-xl-n11{margin-right:-44px!important}.v-application .mr-xl-n12{margin-right:-48px!important}.v-application .mr-xl-n13{margin-right:-52px!important}.v-application .mr-xl-n14{margin-right:-56px!important}.v-application .mr-xl-n15{margin-right:-60px!important}.v-application .mr-xl-n16{margin-right:-64px!important}.v-application .mb-xl-n1{margin-bottom:-4px!important}.v-application .mb-xl-n2{margin-bottom:-8px!important}.v-application .mb-xl-n3{margin-bottom:-12px!important}.v-application .mb-xl-n4{margin-bottom:-16px!important}.v-application .mb-xl-n5{margin-bottom:-20px!important}.v-application .mb-xl-n6{margin-bottom:-24px!important}.v-application .mb-xl-n7{margin-bottom:-28px!important}.v-application .mb-xl-n8{margin-bottom:-32px!important}.v-application .mb-xl-n9{margin-bottom:-36px!important}.v-application .mb-xl-n10{margin-bottom:-40px!important}.v-application .mb-xl-n11{margin-bottom:-44px!important}.v-application .mb-xl-n12{margin-bottom:-48px!important}.v-application .mb-xl-n13{margin-bottom:-52px!important}.v-application .mb-xl-n14{margin-bottom:-56px!important}.v-application .mb-xl-n15{margin-bottom:-60px!important}.v-application .mb-xl-n16{margin-bottom:-64px!important}.v-application .ml-xl-n1{margin-left:-4px!important}.v-application .ml-xl-n2{margin-left:-8px!important}.v-application .ml-xl-n3{margin-left:-12px!important}.v-application .ml-xl-n4{margin-left:-16px!important}.v-application .ml-xl-n5{margin-left:-20px!important}.v-application .ml-xl-n6{margin-left:-24px!important}.v-application .ml-xl-n7{margin-left:-28px!important}.v-application .ml-xl-n8{margin-left:-32px!important}.v-application .ml-xl-n9{margin-left:-36px!important}.v-application .ml-xl-n10{margin-left:-40px!important}.v-application .ml-xl-n11{margin-left:-44px!important}.v-application .ml-xl-n12{margin-left:-48px!important}.v-application .ml-xl-n13{margin-left:-52px!important}.v-application .ml-xl-n14{margin-left:-56px!important}.v-application .ml-xl-n15{margin-left:-60px!important}.v-application .ml-xl-n16{margin-left:-64px!important}.v-application--is-ltr .ms-xl-n1{margin-left:-4px!important}.v-application--is-rtl .ms-xl-n1{margin-right:-4px!important}.v-application--is-ltr .ms-xl-n2{margin-left:-8px!important}.v-application--is-rtl .ms-xl-n2{margin-right:-8px!important}.v-application--is-ltr .ms-xl-n3{margin-left:-12px!important}.v-application--is-rtl .ms-xl-n3{margin-right:-12px!important}.v-application--is-ltr .ms-xl-n4{margin-left:-16px!important}.v-application--is-rtl .ms-xl-n4{margin-right:-16px!important}.v-application--is-ltr .ms-xl-n5{margin-left:-20px!important}.v-application--is-rtl .ms-xl-n5{margin-right:-20px!important}.v-application--is-ltr .ms-xl-n6{margin-left:-24px!important}.v-application--is-rtl .ms-xl-n6{margin-right:-24px!important}.v-application--is-ltr .ms-xl-n7{margin-left:-28px!important}.v-application--is-rtl .ms-xl-n7{margin-right:-28px!important}.v-application--is-ltr .ms-xl-n8{margin-left:-32px!important}.v-application--is-rtl .ms-xl-n8{margin-right:-32px!important}.v-application--is-ltr .ms-xl-n9{margin-left:-36px!important}.v-application--is-rtl .ms-xl-n9{margin-right:-36px!important}.v-application--is-ltr .ms-xl-n10{margin-left:-40px!important}.v-application--is-rtl .ms-xl-n10{margin-right:-40px!important}.v-application--is-ltr .ms-xl-n11{margin-left:-44px!important}.v-application--is-rtl .ms-xl-n11{margin-right:-44px!important}.v-application--is-ltr .ms-xl-n12{margin-left:-48px!important}.v-application--is-rtl .ms-xl-n12{margin-right:-48px!important}.v-application--is-ltr .ms-xl-n13{margin-left:-52px!important}.v-application--is-rtl .ms-xl-n13{margin-right:-52px!important}.v-application--is-ltr .ms-xl-n14{margin-left:-56px!important}.v-application--is-rtl .ms-xl-n14{margin-right:-56px!important}.v-application--is-ltr .ms-xl-n15{margin-left:-60px!important}.v-application--is-rtl .ms-xl-n15{margin-right:-60px!important}.v-application--is-ltr .ms-xl-n16{margin-left:-64px!important}.v-application--is-rtl .ms-xl-n16{margin-right:-64px!important}.v-application--is-ltr .me-xl-n1{margin-right:-4px!important}.v-application--is-rtl .me-xl-n1{margin-left:-4px!important}.v-application--is-ltr .me-xl-n2{margin-right:-8px!important}.v-application--is-rtl .me-xl-n2{margin-left:-8px!important}.v-application--is-ltr .me-xl-n3{margin-right:-12px!important}.v-application--is-rtl .me-xl-n3{margin-left:-12px!important}.v-application--is-ltr .me-xl-n4{margin-right:-16px!important}.v-application--is-rtl .me-xl-n4{margin-left:-16px!important}.v-application--is-ltr .me-xl-n5{margin-right:-20px!important}.v-application--is-rtl .me-xl-n5{margin-left:-20px!important}.v-application--is-ltr .me-xl-n6{margin-right:-24px!important}.v-application--is-rtl .me-xl-n6{margin-left:-24px!important}.v-application--is-ltr .me-xl-n7{margin-right:-28px!important}.v-application--is-rtl .me-xl-n7{margin-left:-28px!important}.v-application--is-ltr .me-xl-n8{margin-right:-32px!important}.v-application--is-rtl .me-xl-n8{margin-left:-32px!important}.v-application--is-ltr .me-xl-n9{margin-right:-36px!important}.v-application--is-rtl .me-xl-n9{margin-left:-36px!important}.v-application--is-ltr .me-xl-n10{margin-right:-40px!important}.v-application--is-rtl .me-xl-n10{margin-left:-40px!important}.v-application--is-ltr .me-xl-n11{margin-right:-44px!important}.v-application--is-rtl .me-xl-n11{margin-left:-44px!important}.v-application--is-ltr .me-xl-n12{margin-right:-48px!important}.v-application--is-rtl .me-xl-n12{margin-left:-48px!important}.v-application--is-ltr .me-xl-n13{margin-right:-52px!important}.v-application--is-rtl .me-xl-n13{margin-left:-52px!important}.v-application--is-ltr .me-xl-n14{margin-right:-56px!important}.v-application--is-rtl .me-xl-n14{margin-left:-56px!important}.v-application--is-ltr .me-xl-n15{margin-right:-60px!important}.v-application--is-rtl .me-xl-n15{margin-left:-60px!important}.v-application--is-ltr .me-xl-n16{margin-right:-64px!important}.v-application--is-rtl .me-xl-n16{margin-left:-64px!important}.v-application .pa-xl-0{padding:0!important}.v-application .pa-xl-1{padding:4px!important}.v-application .pa-xl-2{padding:8px!important}.v-application .pa-xl-3{padding:12px!important}.v-application .pa-xl-4{padding:16px!important}.v-application .pa-xl-5{padding:20px!important}.v-application .pa-xl-6{padding:24px!important}.v-application .pa-xl-7{padding:28px!important}.v-application .pa-xl-8{padding:32px!important}.v-application .pa-xl-9{padding:36px!important}.v-application .pa-xl-10{padding:40px!important}.v-application .pa-xl-11{padding:44px!important}.v-application .pa-xl-12{padding:48px!important}.v-application .pa-xl-13{padding:52px!important}.v-application .pa-xl-14{padding:56px!important}.v-application .pa-xl-15{padding:60px!important}.v-application .pa-xl-16{padding:64px!important}.v-application .px-xl-0{padding-right:0!important;padding-left:0!important}.v-application .px-xl-1{padding-right:4px!important;padding-left:4px!important}.v-application .px-xl-2{padding-right:8px!important;padding-left:8px!important}.v-application .px-xl-3{padding-right:12px!important;padding-left:12px!important}.v-application .px-xl-4{padding-right:16px!important;padding-left:16px!important}.v-application .px-xl-5{padding-right:20px!important;padding-left:20px!important}.v-application .px-xl-6{padding-right:24px!important;padding-left:24px!important}.v-application .px-xl-7{padding-right:28px!important;padding-left:28px!important}.v-application .px-xl-8{padding-right:32px!important;padding-left:32px!important}.v-application .px-xl-9{padding-right:36px!important;padding-left:36px!important}.v-application .px-xl-10{padding-right:40px!important;padding-left:40px!important}.v-application .px-xl-11{padding-right:44px!important;padding-left:44px!important}.v-application .px-xl-12{padding-right:48px!important;padding-left:48px!important}.v-application .px-xl-13{padding-right:52px!important;padding-left:52px!important}.v-application .px-xl-14{padding-right:56px!important;padding-left:56px!important}.v-application .px-xl-15{padding-right:60px!important;padding-left:60px!important}.v-application .px-xl-16{padding-right:64px!important;padding-left:64px!important}.v-application .py-xl-0{padding-top:0!important;padding-bottom:0!important}.v-application .py-xl-1{padding-top:4px!important;padding-bottom:4px!important}.v-application .py-xl-2{padding-top:8px!important;padding-bottom:8px!important}.v-application .py-xl-3{padding-top:12px!important;padding-bottom:12px!important}.v-application .py-xl-4{padding-top:16px!important;padding-bottom:16px!important}.v-application .py-xl-5{padding-top:20px!important;padding-bottom:20px!important}.v-application .py-xl-6{padding-top:24px!important;padding-bottom:24px!important}.v-application .py-xl-7{padding-top:28px!important;padding-bottom:28px!important}.v-application .py-xl-8{padding-top:32px!important;padding-bottom:32px!important}.v-application .py-xl-9{padding-top:36px!important;padding-bottom:36px!important}.v-application .py-xl-10{padding-top:40px!important;padding-bottom:40px!important}.v-application .py-xl-11{padding-top:44px!important;padding-bottom:44px!important}.v-application .py-xl-12{padding-top:48px!important;padding-bottom:48px!important}.v-application .py-xl-13{padding-top:52px!important;padding-bottom:52px!important}.v-application .py-xl-14{padding-top:56px!important;padding-bottom:56px!important}.v-application .py-xl-15{padding-top:60px!important;padding-bottom:60px!important}.v-application .py-xl-16{padding-top:64px!important;padding-bottom:64px!important}.v-application .pt-xl-0{padding-top:0!important}.v-application .pt-xl-1{padding-top:4px!important}.v-application .pt-xl-2{padding-top:8px!important}.v-application .pt-xl-3{padding-top:12px!important}.v-application .pt-xl-4{padding-top:16px!important}.v-application .pt-xl-5{padding-top:20px!important}.v-application .pt-xl-6{padding-top:24px!important}.v-application .pt-xl-7{padding-top:28px!important}.v-application .pt-xl-8{padding-top:32px!important}.v-application .pt-xl-9{padding-top:36px!important}.v-application .pt-xl-10{padding-top:40px!important}.v-application .pt-xl-11{padding-top:44px!important}.v-application .pt-xl-12{padding-top:48px!important}.v-application .pt-xl-13{padding-top:52px!important}.v-application .pt-xl-14{padding-top:56px!important}.v-application .pt-xl-15{padding-top:60px!important}.v-application .pt-xl-16{padding-top:64px!important}.v-application .pr-xl-0{padding-right:0!important}.v-application .pr-xl-1{padding-right:4px!important}.v-application .pr-xl-2{padding-right:8px!important}.v-application .pr-xl-3{padding-right:12px!important}.v-application .pr-xl-4{padding-right:16px!important}.v-application .pr-xl-5{padding-right:20px!important}.v-application .pr-xl-6{padding-right:24px!important}.v-application .pr-xl-7{padding-right:28px!important}.v-application .pr-xl-8{padding-right:32px!important}.v-application .pr-xl-9{padding-right:36px!important}.v-application .pr-xl-10{padding-right:40px!important}.v-application .pr-xl-11{padding-right:44px!important}.v-application .pr-xl-12{padding-right:48px!important}.v-application .pr-xl-13{padding-right:52px!important}.v-application .pr-xl-14{padding-right:56px!important}.v-application .pr-xl-15{padding-right:60px!important}.v-application .pr-xl-16{padding-right:64px!important}.v-application .pb-xl-0{padding-bottom:0!important}.v-application .pb-xl-1{padding-bottom:4px!important}.v-application .pb-xl-2{padding-bottom:8px!important}.v-application .pb-xl-3{padding-bottom:12px!important}.v-application .pb-xl-4{padding-bottom:16px!important}.v-application .pb-xl-5{padding-bottom:20px!important}.v-application .pb-xl-6{padding-bottom:24px!important}.v-application .pb-xl-7{padding-bottom:28px!important}.v-application .pb-xl-8{padding-bottom:32px!important}.v-application .pb-xl-9{padding-bottom:36px!important}.v-application .pb-xl-10{padding-bottom:40px!important}.v-application .pb-xl-11{padding-bottom:44px!important}.v-application .pb-xl-12{padding-bottom:48px!important}.v-application .pb-xl-13{padding-bottom:52px!important}.v-application .pb-xl-14{padding-bottom:56px!important}.v-application .pb-xl-15{padding-bottom:60px!important}.v-application .pb-xl-16{padding-bottom:64px!important}.v-application .pl-xl-0{padding-left:0!important}.v-application .pl-xl-1{padding-left:4px!important}.v-application .pl-xl-2{padding-left:8px!important}.v-application .pl-xl-3{padding-left:12px!important}.v-application .pl-xl-4{padding-left:16px!important}.v-application .pl-xl-5{padding-left:20px!important}.v-application .pl-xl-6{padding-left:24px!important}.v-application .pl-xl-7{padding-left:28px!important}.v-application .pl-xl-8{padding-left:32px!important}.v-application .pl-xl-9{padding-left:36px!important}.v-application .pl-xl-10{padding-left:40px!important}.v-application .pl-xl-11{padding-left:44px!important}.v-application .pl-xl-12{padding-left:48px!important}.v-application .pl-xl-13{padding-left:52px!important}.v-application .pl-xl-14{padding-left:56px!important}.v-application .pl-xl-15{padding-left:60px!important}.v-application .pl-xl-16{padding-left:64px!important}.v-application--is-ltr .ps-xl-0{padding-left:0!important}.v-application--is-rtl .ps-xl-0{padding-right:0!important}.v-application--is-ltr .ps-xl-1{padding-left:4px!important}.v-application--is-rtl .ps-xl-1{padding-right:4px!important}.v-application--is-ltr .ps-xl-2{padding-left:8px!important}.v-application--is-rtl .ps-xl-2{padding-right:8px!important}.v-application--is-ltr .ps-xl-3{padding-left:12px!important}.v-application--is-rtl .ps-xl-3{padding-right:12px!important}.v-application--is-ltr .ps-xl-4{padding-left:16px!important}.v-application--is-rtl .ps-xl-4{padding-right:16px!important}.v-application--is-ltr .ps-xl-5{padding-left:20px!important}.v-application--is-rtl .ps-xl-5{padding-right:20px!important}.v-application--is-ltr .ps-xl-6{padding-left:24px!important}.v-application--is-rtl .ps-xl-6{padding-right:24px!important}.v-application--is-ltr .ps-xl-7{padding-left:28px!important}.v-application--is-rtl .ps-xl-7{padding-right:28px!important}.v-application--is-ltr .ps-xl-8{padding-left:32px!important}.v-application--is-rtl .ps-xl-8{padding-right:32px!important}.v-application--is-ltr .ps-xl-9{padding-left:36px!important}.v-application--is-rtl .ps-xl-9{padding-right:36px!important}.v-application--is-ltr .ps-xl-10{padding-left:40px!important}.v-application--is-rtl .ps-xl-10{padding-right:40px!important}.v-application--is-ltr .ps-xl-11{padding-left:44px!important}.v-application--is-rtl .ps-xl-11{padding-right:44px!important}.v-application--is-ltr .ps-xl-12{padding-left:48px!important}.v-application--is-rtl .ps-xl-12{padding-right:48px!important}.v-application--is-ltr .ps-xl-13{padding-left:52px!important}.v-application--is-rtl .ps-xl-13{padding-right:52px!important}.v-application--is-ltr .ps-xl-14{padding-left:56px!important}.v-application--is-rtl .ps-xl-14{padding-right:56px!important}.v-application--is-ltr .ps-xl-15{padding-left:60px!important}.v-application--is-rtl .ps-xl-15{padding-right:60px!important}.v-application--is-ltr .ps-xl-16{padding-left:64px!important}.v-application--is-rtl .ps-xl-16{padding-right:64px!important}.v-application--is-ltr .pe-xl-0{padding-right:0!important}.v-application--is-rtl .pe-xl-0{padding-left:0!important}.v-application--is-ltr .pe-xl-1{padding-right:4px!important}.v-application--is-rtl .pe-xl-1{padding-left:4px!important}.v-application--is-ltr .pe-xl-2{padding-right:8px!important}.v-application--is-rtl .pe-xl-2{padding-left:8px!important}.v-application--is-ltr .pe-xl-3{padding-right:12px!important}.v-application--is-rtl .pe-xl-3{padding-left:12px!important}.v-application--is-ltr .pe-xl-4{padding-right:16px!important}.v-application--is-rtl .pe-xl-4{padding-left:16px!important}.v-application--is-ltr .pe-xl-5{padding-right:20px!important}.v-application--is-rtl .pe-xl-5{padding-left:20px!important}.v-application--is-ltr .pe-xl-6{padding-right:24px!important}.v-application--is-rtl .pe-xl-6{padding-left:24px!important}.v-application--is-ltr .pe-xl-7{padding-right:28px!important}.v-application--is-rtl .pe-xl-7{padding-left:28px!important}.v-application--is-ltr .pe-xl-8{padding-right:32px!important}.v-application--is-rtl .pe-xl-8{padding-left:32px!important}.v-application--is-ltr .pe-xl-9{padding-right:36px!important}.v-application--is-rtl .pe-xl-9{padding-left:36px!important}.v-application--is-ltr .pe-xl-10{padding-right:40px!important}.v-application--is-rtl .pe-xl-10{padding-left:40px!important}.v-application--is-ltr .pe-xl-11{padding-right:44px!important}.v-application--is-rtl .pe-xl-11{padding-left:44px!important}.v-application--is-ltr .pe-xl-12{padding-right:48px!important}.v-application--is-rtl .pe-xl-12{padding-left:48px!important}.v-application--is-ltr .pe-xl-13{padding-right:52px!important}.v-application--is-rtl .pe-xl-13{padding-left:52px!important}.v-application--is-ltr .pe-xl-14{padding-right:56px!important}.v-application--is-rtl .pe-xl-14{padding-left:56px!important}.v-application--is-ltr .pe-xl-15{padding-right:60px!important}.v-application--is-rtl .pe-xl-15{padding-left:60px!important}.v-application--is-ltr .pe-xl-16{padding-right:64px!important}.v-application--is-rtl .pe-xl-16{padding-left:64px!important}.v-application .text-xl-left{text-align:left!important}.v-application .text-xl-right{text-align:right!important}.v-application .text-xl-center{text-align:center!important}.v-application .text-xl-justify{text-align:justify!important}[dir=ltr] .v-application .text-xl-start{text-align:left!important}[dir=ltr] .v-application .text-xl-end,[dir=rtl] .v-application .text-xl-start{text-align:right!important}[dir=rtl] .v-application .text-xl-end{text-align:left!important}.v-application .text-xl-h1{font-size:6rem!important;line-height:6rem;letter-spacing:-.015625em!important}.v-application .text-xl-h1,.v-application .text-xl-h2{font-weight:300;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-h2{font-size:3.75rem!important;line-height:3.75rem;letter-spacing:-.0083333333em!important}.v-application .text-xl-h3{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.v-application .text-xl-h3,.v-application .text-xl-h4{font-weight:400;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-h4{font-size:2.125rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.v-application .text-xl-h5{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important}.v-application .text-xl-h5,.v-application .text-xl-h6{line-height:2rem;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-h6{font-size:1.25rem!important;font-weight:500;letter-spacing:.0125em!important}.v-application .text-xl-subtitle-1{font-size:1rem!important;font-weight:400;line-height:1.75rem;letter-spacing:.009375em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-subtitle-2{font-size:.875rem!important;font-weight:500;line-height:1.375rem;letter-spacing:.0071428571em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-body-1{font-size:1rem!important;font-weight:400;line-height:1.5rem;letter-spacing:.03125em!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-body-2{font-weight:400;line-height:1.25rem;letter-spacing:.0178571429em!important}.v-application .text-xl-body-2,.v-application .text-xl-button{font-size:.875rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-button{font-weight:500;line-height:2.25rem;letter-spacing:.0892857143em!important;text-transform:uppercase!important}.v-application .text-xl-caption{font-weight:400;line-height:1.25rem;letter-spacing:.0333333333em!important}.v-application .text-xl-caption,.v-application .text-xl-overline{font-size:.75rem!important;font-family:\"Roboto\",sans-serif!important}.v-application .text-xl-overline{font-weight:500;line-height:2rem;letter-spacing:.1666666667em!important;text-transform:uppercase!important}}@media print{.v-application .d-print-none{display:none!important}.v-application .d-print-inline{display:inline!important}.v-application .d-print-inline-block{display:inline-block!important}.v-application .d-print-block{display:block!important}.v-application .d-print-table{display:table!important}.v-application .d-print-table-row{display:table-row!important}.v-application .d-print-table-cell{display:table-cell!important}.v-application .d-print-flex{display:flex!important}.v-application .d-print-inline-flex{display:inline-flex!important}.v-application .float-print-none{float:none!important}.v-application .float-print-left{float:left!important}.v-application .float-print-right{float:right!important}.v-application--is-rtl .float-print-end{float:left!important}.v-application--is-ltr .float-print-end,.v-application--is-rtl .float-print-start{float:right!important}.v-application--is-ltr .float-print-start{float:left!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "Container", function() { return Container; });
__webpack_require__.d(components_namespaceObject, "Depoimentos", function() { return Depoimentos; });
__webpack_require__.d(components_namespaceObject, "Home", function() { return Home; });
__webpack_require__.d(components_namespaceObject, "Procedimentos", function() { return Procedimentos; });
__webpack_require__.d(components_namespaceObject, "Bucofacial", function() { return Bucofacial; });
__webpack_require__.d(components_namespaceObject, "ButtonExplorar", function() { return ButtonExplorar; });
__webpack_require__.d(components_namespaceObject, "ButtonHeader", function() { return ButtonHeader; });
__webpack_require__.d(components_namespaceObject, "ButtonOla", function() { return ButtonOla; });
__webpack_require__.d(components_namespaceObject, "ButtonVer", function() { return ButtonVer; });
__webpack_require__.d(components_namespaceObject, "ChipsGroup", function() { return ChipsGroup; });
__webpack_require__.d(components_namespaceObject, "Facebook", function() { return Facebook; });
__webpack_require__.d(components_namespaceObject, "GhostButton", function() { return GhostButton; });
__webpack_require__.d(components_namespaceObject, "HofCard", function() { return HofCard; });
__webpack_require__.d(components_namespaceObject, "HofCirurgicaCard", function() { return HofCirurgicaCard; });
__webpack_require__.d(components_namespaceObject, "ImplantodontiaCard", function() { return ImplantodontiaCard; });
__webpack_require__.d(components_namespaceObject, "Instagram", function() { return Instagram; });
__webpack_require__.d(components_namespaceObject, "Linkdl", function() { return Linkdl; });
__webpack_require__.d(components_namespaceObject, "LogoTiago", function() { return LogoTiago; });
__webpack_require__.d(components_namespaceObject, "Tiago", function() { return Tiago; });
__webpack_require__.d(components_namespaceObject, "WhatsApp", function() { return WhatsApp; });
__webpack_require__.d(components_namespaceObject, "Banners", function() { return Banners; });
__webpack_require__.d(components_namespaceObject, "Bucomaxilofacial", function() { return Bucomaxilofacial; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "HOF", function() { return HOF; });
__webpack_require__.d(components_namespaceObject, "HOFC", function() { return HOFC; });
__webpack_require__.d(components_namespaceObject, "Header", function() { return Header; });
__webpack_require__.d(components_namespaceObject, "Implantodontia", function() { return Implantodontia; });
__webpack_require__.d(components_namespaceObject, "Sobre", function() { return Sobre; });
__webpack_require__.d(components_namespaceObject, "TitleHome", function() { return TitleHome; });
__webpack_require__.d(components_namespaceObject, "AnaPaula", function() { return AnaPaula; });
__webpack_require__.d(components_namespaceObject, "Avatar", function() { return Avatar; });
__webpack_require__.d(components_namespaceObject, "JuliaCardoso", function() { return JuliaCardoso; });
__webpack_require__.d(components_namespaceObject, "LauraAllram", function() { return LauraAllram; });
__webpack_require__.d(components_namespaceObject, "StaelTorres", function() { return StaelTorres; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/static.js
var static_namespaceObject = {};
__webpack_require__.r(static_namespaceObject);
__webpack_require__.d(static_namespaceObject, "getImage", function() { return static_getImage; });
__webpack_require__.d(static_namespaceObject, "supportsAlias", function() { return static_supportsAlias; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.cjs
var dist = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(26);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(dist["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(dist["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = dist["joinURL"];
const stripTrailingSlash = dist["withoutTrailingSlash"];
const isSamePath = dist["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(27);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(12);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(10);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(13);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _2c0bb0a1 = () => interopDefault(__webpack_require__.e(/* import() | pages/procedimentos/Bucomaxilo */ 29).then(__webpack_require__.bind(null, 227)));

const _50348c95 = () => interopDefault(__webpack_require__.e(/* import() | pages/procedimentos/HOF */ 30).then(__webpack_require__.bind(null, 224)));

const _2f2ddd78 = () => interopDefault(__webpack_require__.e(/* import() | pages/procedimentos/HOFCirurgica */ 31).then(__webpack_require__.bind(null, 225)));

const _34f8c3ea = () => interopDefault(__webpack_require__.e(/* import() | pages/procedimentos/Implantodontia */ 32).then(__webpack_require__.bind(null, 226)));

const _7190e3fe = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 28).then(__webpack_require__.bind(null, 228)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/procedimentos/Bucomaxilo",
    component: _2c0bb0a1,
    name: "procedimentos-Bucomaxilo"
  }, {
    path: "/procedimentos/HOF",
    component: _50348c95,
    name: "procedimentos-HOF"
  }, {
    path: "/procedimentos/HOFCirurgica",
    component: _2f2ddd78,
    name: "procedimentos-HOFCirurgica"
  }, {
    path: "/procedimentos/Implantodontia",
    component: _34f8c3ea,
    name: "procedimentos-Implantodontia"
  }, {
    path: "/",
    component: _7190e3fe,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(dist["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4fc33f3a"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "3b715424"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(37);

// EXTERNAL MODULE: ./assets/scss/vuesax-alt.scss
var vuesax_alt = __webpack_require__(39);

// EXTERNAL MODULE: ./assets/scss/base.scss
var scss_base = __webpack_require__(41);

// EXTERNAL MODULE: ./assets/css/hover-master/css/hover.css
var hover = __webpack_require__(48);

// EXTERNAL MODULE: ./assets/scss/procedimentos.scss
var procedimentos = __webpack_require__(50);

// EXTERNAL MODULE: ./assets/scss/cards.scss
var cards = __webpack_require__(52);

// EXTERNAL MODULE: ./assets/scss/depoimentos.scss
var depoimentos = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuesax/dist/vuesax.css
var vuesax = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuesax/dist/vuesax.min.css
var vuesax_min = __webpack_require__(57);

// EXTERNAL MODULE: ./assets/scss/Dropdown.scss
var Dropdown = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=7f406d3e&
var defaultvue_type_template_id_7f406d3e_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('Nuxt');
};

var defaultvue_type_template_id_7f406d3e_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=7f406d3e&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_7f406d3e_render,
  defaultvue_type_template_id_7f406d3e_staticRenderFns,
  false,
  null,
  null,
  "57594c7c"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/procedimentos.vue?vue&type=template&id=47820e8d&
var procedimentosvue_type_template_id_47820e8d_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('Container', [_c('Nuxt')], 1), _vm._ssrNode(" "), _c('Footer')], 2);
};

var procedimentosvue_type_template_id_47820e8d_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/procedimentos.vue?vue&type=template&id=47820e8d&

// CONCATENATED MODULE: ./layouts/procedimentos.vue

var procedimentos_script = {}


/* normalize component */

var procedimentos_component = Object(componentNormalizer["a" /* default */])(
  procedimentos_script,
  procedimentosvue_type_template_id_47820e8d_render,
  procedimentosvue_type_template_id_47820e8d_staticRenderFns,
  false,
  null,
  null,
  "dab2c25e"
  
)

/* harmony default export */ var layouts_procedimentos = (procedimentos_component.exports);

/* nuxt-component-imports */
installComponents(procedimentos_component, {Container: __webpack_require__(15).default,Footer: __webpack_require__(29).default})

// CONCATENATED MODULE: ./.nuxt/App.js

















const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_procedimentos": sanitizeComponent(layouts_procedimentos)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(dist["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(dist["withoutTrailingSlash"])(Object(dist["withoutBase"])(Object(dist["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(dist["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(dist["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(dist["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const Container = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)).then(c => wrapFunctional(c.default || c));
const Depoimentos = () => __webpack_require__.e(/* import() | components/depoimentos */ 10).then(__webpack_require__.bind(null, 212)).then(c => wrapFunctional(c.default || c));
const Home = () => __webpack_require__.e(/* import() | components/home */ 17).then(__webpack_require__.bind(null, 209)).then(c => wrapFunctional(c.default || c));
const Procedimentos = () => __webpack_require__.e(/* import() | components/procedimentos */ 23).then(__webpack_require__.bind(null, 211)).then(c => wrapFunctional(c.default || c));
const Bucofacial = () => __webpack_require__.e(/* import() | components/bucofacial */ 4).then(__webpack_require__.bind(null, 182)).then(c => wrapFunctional(c.default || c));
const ButtonExplorar = () => __webpack_require__.e(/* import() | components/button-explorar */ 6).then(__webpack_require__.bind(null, 162)).then(c => wrapFunctional(c.default || c));
const ButtonHeader = () => __webpack_require__.e(/* import() | components/button-header */ 7).then(__webpack_require__.bind(null, 125)).then(c => wrapFunctional(c.default || c));
const ButtonOla = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 78)).then(c => wrapFunctional(c.default || c));
const ButtonVer = () => __webpack_require__.e(/* import() | components/button-ver */ 8).then(__webpack_require__.bind(null, 229)).then(c => wrapFunctional(c.default || c));
const ChipsGroup = () => __webpack_require__.e(/* import() | components/chips-group */ 9).then(__webpack_require__.bind(null, 145)).then(c => wrapFunctional(c.default || c));
const Facebook = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 82)).then(c => wrapFunctional(c.default || c));
const GhostButton = () => __webpack_require__.e(/* import() | components/ghost-button */ 11).then(__webpack_require__.bind(null, 163)).then(c => wrapFunctional(c.default || c));
const HofCard = () => __webpack_require__.e(/* import() | components/hof-card */ 15).then(__webpack_require__.bind(null, 184)).then(c => wrapFunctional(c.default || c));
const HofCirurgicaCard = () => __webpack_require__.e(/* import() | components/hof-cirurgica-card */ 16).then(__webpack_require__.bind(null, 185)).then(c => wrapFunctional(c.default || c));
const ImplantodontiaCard = () => __webpack_require__.e(/* import() | components/implantodontia-card */ 19).then(__webpack_require__.bind(null, 183)).then(c => wrapFunctional(c.default || c));
const Instagram = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 79)).then(c => wrapFunctional(c.default || c));
const Linkdl = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 81)).then(c => wrapFunctional(c.default || c));
const LogoTiago = () => __webpack_require__.e(/* import() | components/logo-tiago */ 22).then(__webpack_require__.bind(null, 140)).then(c => wrapFunctional(c.default || c));
const Tiago = () => __webpack_require__.e(/* import() | components/tiago */ 26).then(__webpack_require__.bind(null, 181)).then(c => wrapFunctional(c.default || c));
const WhatsApp = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 80)).then(c => wrapFunctional(c.default || c));
const Banners = () => __webpack_require__.e(/* import() | components/banners */ 3).then(__webpack_require__.bind(null, 223)).then(c => wrapFunctional(c.default || c));
const Bucomaxilofacial = () => __webpack_require__.e(/* import() | components/bucomaxilofacial */ 5).then(__webpack_require__.bind(null, 205)).then(c => wrapFunctional(c.default || c));
const Footer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29)).then(c => wrapFunctional(c.default || c));
const HOF = () => __webpack_require__.e(/* import() | components/h-o-f */ 12).then(__webpack_require__.bind(null, 206)).then(c => wrapFunctional(c.default || c));
const HOFC = () => __webpack_require__.e(/* import() | components/h-o-f-c */ 13).then(__webpack_require__.bind(null, 207)).then(c => wrapFunctional(c.default || c));
const Header = () => __webpack_require__.e(/* import() | components/header */ 14).then(__webpack_require__.bind(null, 124)).then(c => wrapFunctional(c.default || c));
const Implantodontia = () => __webpack_require__.e(/* import() | components/implantodontia */ 18).then(__webpack_require__.bind(null, 208)).then(c => wrapFunctional(c.default || c));
const Sobre = () => __webpack_require__.e(/* import() | components/sobre */ 24).then(__webpack_require__.bind(null, 210)).then(c => wrapFunctional(c.default || c));
const TitleHome = () => __webpack_require__.e(/* import() | components/title-home */ 27).then(__webpack_require__.bind(null, 180)).then(c => wrapFunctional(c.default || c));
const AnaPaula = () => __webpack_require__.e(/* import() | components/ana-paula */ 1).then(__webpack_require__.bind(null, 176)).then(c => wrapFunctional(c.default || c));
const Avatar = () => __webpack_require__.e(/* import() | components/avatar */ 2).then(__webpack_require__.bind(null, 118)).then(c => wrapFunctional(c.default || c));
const JuliaCardoso = () => __webpack_require__.e(/* import() | components/julia-cardoso */ 20).then(__webpack_require__.bind(null, 179)).then(c => wrapFunctional(c.default || c));
const LauraAllram = () => __webpack_require__.e(/* import() | components/laura-allram */ 21).then(__webpack_require__.bind(null, 177)).then(c => wrapFunctional(c.default || c));
const StaelTorres = () => __webpack_require__.e(/* import() | components/stael-torres */ 25).then(__webpack_require__.bind(null, 178)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 22 modules
var framework = __webpack_require__(9);

// CONCATENATED MODULE: ./.nuxt/vuetify/options.js
/* harmony default export */ var vuetify_options = ({});
// CONCATENATED MODULE: ./.nuxt/vuetify/plugin.js



external_vue_default.a.use(framework["a" /* default */], {});
/* harmony default export */ var vuetify_plugin = (ctx => {
  const vuetifyOptions = typeof vuetify_options === 'function' ? vuetify_options(ctx) : vuetify_options;
  vuetifyOptions.icons = vuetifyOptions.icons || {};
  vuetifyOptions.icons.iconfont = 'mdi';
  const vuetify = new framework["a" /* default */](vuetifyOptions);
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
});
// CONCATENATED MODULE: ./.nuxt/gtm.utils.js
const logSyle = 'background: #2E495E;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em;';
function log(...args) {// eslint-disable-next-line no-console
}
// CONCATENATED MODULE: ./.nuxt/gtm.js

const _layer = 'dataLayer';
const _id = 'G-F93CYBJFLC';

function gtmClient(ctx, initialized) {
  return {
    init(id = _id) {
      if (initialized[id] || !window._gtm_inject) {
        return;
      }

      window._gtm_inject(id);

      initialized[id] = true;
      log('init', id);
    },

    push(obj) {
      if (!window[_layer]) {
        window[_layer] = [];
      }

      window[_layer].push(obj);

      log('push', obj);
    }

  };
}

function gtmServer(ctx, initialized) {
  const events = [];
  const inits = [];
  ctx.beforeNuxtRender(() => {
    if (!inits.length && !events.length) {
      return;
    }

    const gtmScript = ctx.app.head.script.find(s => s.hid == 'gtm-script');
    gtmScript.innerHTML = `window['${_layer}']=${JSON.stringify(events)};${gtmScript.innerHTML}`;

    if (inits.length) {
      gtmScript.innerHTML += `;${JSON.stringify(inits)}.forEach(function(i){window._gtm_inject(i)})`;
    }

    const gtmIframe = ctx.app.head.noscript.find(s => s.hid == 'gtm-noscript');

    const renderIframe = id => `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>`;

    if (inits.length) {
      gtmIframe.innerHTML += inits.map(renderIframe);
    }
  });
  return {
    init(id = _id) {
      if (initialized[id]) {
        return;
      }

      inits.push(id);
      initialized[id] = true;
      log('init', id);
    },

    push(obj) {
      events.push(obj);
      log('push', JSON.stringify(obj));
    }

  };
}

function startPageTracking(ctx) {
  ctx.app.router.afterEach(to => {
    setTimeout(() => {
      ctx.$gtm.push(to.gtm || {
        routeName: to.name,
        pageType: 'PageView',
        pageUrl: '' + to.fullPath,
        pageTitle: typeof document !== 'undefined' && document.title || '',
        event: 'nuxtRoute'
      });
    }, 250);
  });
}

/* harmony default export */ var gtm = (function (ctx, inject) {
  const runtimeConfig = ctx.$config && ctx.$config.gtm || {};
  const autoInit = true;
  const id = 'G-F93CYBJFLC';
  const runtimeId = runtimeConfig.id;
  const initialized = autoInit && id ? {
    [id]: true
  } : {};
  const $gtm =  false ? undefined : gtmServer(ctx, initialized);

  if (autoInit && runtimeId && runtimeId !== id) {
    $gtm.init(runtimeId);
  }

  ctx.$gtm = $gtm;
  inject('gtm', ctx.$gtm);
});
// EXTERNAL MODULE: ./node_modules/defu/dist/defu.cjs
var defu = __webpack_require__(14);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/meta.js
async function imageMeta(ctx, url) {
  const cache = getCache(ctx);
  const cacheKey = "image:meta:" + url;

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const meta = await _imageMeta(url).catch(err => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  cache.set(cacheKey, meta);
  return meta;
}

async function _imageMeta(url) {
  if (true) {
    const imageMeta2 = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 101, 7)).then(r => r.default || r);
    const data = await fetch(url).then(res => res.buffer());
    const metadata = imageMeta2(data);

    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }

    const {
      width,
      height
    } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }

  if (typeof Image === "undefined") {
    throw new TypeError("Image not supported");
  }

  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const meta = {
        width: img.width,
        height: img.height,
        ratio: img.width / img.height
      };
      resolve(meta);
    };

    img.onerror = err => reject(err);

    img.src = url;
  });
}

function getCache(ctx) {
  if (!ctx.nuxtContext.cache) {
    if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
      ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
    } else {
      const _cache = {};
      ctx.nuxtContext.cache = {
        get: id => _cache[id],
        set: (id, value) => {
          _cache[id] = value;
        },
        has: id => typeof _cache[id] !== "undefined"
      };
    }
  }

  return ctx.nuxtContext.cache;
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/index.js
function imageFetch(url) {
  return fetch(cleanDoubleSlashes(url));
}
function getInt(x) {
  if (typeof x === "number") {
    return x;
  }

  if (typeof x === "string") {
    return parseInt(x, 10);
  }

  return void 0;
}
function getFileExtension(url = "") {
  const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function cleanDoubleSlashes(path = "") {
  return path.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
}
function createMapper(map) {
  return key => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({
  formatter,
  keyMap,
  joinWith = "/",
  valueMap
} = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }

  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }

  const map = valueMap || {};
  Object.keys(map).forEach(valueKey => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];

      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }

      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function renderAttributesToString(attributes = {}) {
  return Object.entries(attributes).map(([key, value]) => value ? `${key}="${value}"` : "").filter(Boolean).join(" ");
}
function renderTag(tag, attrs, contents) {
  const html = `<${tag} ${renderAttributesToString(attrs)}>`;

  if (!contents) {
    return html;
  }

  return html + contents + `</${tag}>`;
}
function generateAlt(src = "") {
  return src.split(/[?#]/).shift().split("/").pop().split(".").shift();
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }

  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/image.js





function createImage(globalOptions, nuxtContext) {
  const staticImageManifest =  false ? undefined : {};
  const ctx = {
    options: globalOptions,
    nuxtContext
  };

  const getImage = function (input, options = {}) {
    const image = resolveImage(ctx, input, options);

    if (image.isStatic) {
      handleStaticImage(image, input);
    }

    return image;
  };

  const $img = function $img2(input, modifiers = {}, options = {}) {
    return getImage(input, { ...options,
      modifiers: defu_default()(modifiers, options.modifiers || {})
    }).url;
  };

  function handleStaticImage(image, input) {
    if (true) {
      if (false) {}

      if (true) {
        const {
          ssrContext
        } = ctx.nuxtContext;

        if (ssrContext) {
          var _ssrState$data, _ssrContext$image;

          const ssrState = ssrContext.nuxt || {};
          const staticImages = ssrState._img = ssrState._img || {};
          const ssrData = (_ssrState$data = ssrState.data) === null || _ssrState$data === void 0 ? void 0 : _ssrState$data[0];

          if (ssrData) {
            ssrData._img = staticImages;
          }

          const mapToStatic = (_ssrContext$image = ssrContext.image) === null || _ssrContext$image === void 0 ? void 0 : _ssrContext$image.mapToStatic;

          if (typeof mapToStatic === "function") {
            const mappedURL = mapToStatic(image, input);

            if (mappedURL) {
              staticImages[image.url] = mappedURL;
              image.url = mappedURL;
            }
          }
        }
      }
    } else {}
  }

  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName],
      ...options
    });
  }

  $img.options = globalOptions;
  $img.getImage = getImage;

  $img.getMeta = (input, options) => getMeta(ctx, input, options);

  $img.getSizes = (input, options) => getSizes(ctx, input, options);

  ctx.$img = $img;
  return $img;
}

async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options
  });

  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}

function resolveImage(ctx, input, options) {
  var _options$modifiers, _options$modifiers2;

  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }

  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }

  const {
    provider,
    defaults
  } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = Object(dist["hasProtocol"])(input) ? input : Object(dist["withLeadingSlash"])(input);

  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = Object(dist["joinURL"])(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }

  if (provider.validateDomains && Object(dist["hasProtocol"])(input)) {
    const inputHost = Object(dist["parseURL"])(input).host;

    if (!ctx.options.domains.find(d => d === inputHost)) {
      return {
        url: input
      };
    }
  }

  const _options = defu_default()(options, preset, defaults);

  _options.modifiers = { ..._options.modifiers
  };
  const expectedFormat = _options.modifiers.format;

  if ((_options$modifiers = _options.modifiers) !== null && _options$modifiers !== void 0 && _options$modifiers.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }

  if ((_options$modifiers2 = _options.modifiers) !== null && _options$modifiers2 !== void 0 && _options$modifiers2.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }

  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}

function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];

  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }

  return provider;
}

function getPreset(ctx, name) {
  if (!name) {
    return {};
  }

  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }

  return ctx.options.presets[name];
}

function getSizes(ctx, input, opts) {
  var _opts$modifiers, _opts$modifiers2;

  const width = parseSize((_opts$modifiers = opts.modifiers) === null || _opts$modifiers === void 0 ? void 0 : _opts$modifiers.width);
  const height = parseSize((_opts$modifiers2 = opts.modifiers) === null || _opts$modifiers2 === void 0 ? void 0 : _opts$modifiers2.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};

  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter(e => e)) {
      const s = entry.split(":");

      if (s.length !== 2) {
        continue;
      }

      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }

  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");

    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }

    if (!isFluid && !size.endsWith("px")) {
      continue;
    }

    let _cWidth = parseInt(size);

    if (!screenMaxWidth || !_cWidth) {
      continue;
    }

    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }

    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;

    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers,
        width: _cWidth,
        height: _cHeight
      }, opts)
    });
  }

  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];

  if (defaultVar) {
    defaultVar.media = "";
  }

  return {
    sizes: variants.map(v => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map(v => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar === null || defaultVar === void 0 ? void 0 : defaultVar.src
  };
}
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=template&id=4c03b41d&
var nuxt_imgvue_type_template_id_4c03b41d_render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _c('img', _vm._g(_vm._b({
    key: _vm.nSrc,
    ref: "img",
    attrs: {
      "src": _vm.nSrc
    }
  }, 'img', _vm.nAttrs, false), _vm.$listeners), []);
};

var nuxt_imgvue_type_template_id_4c03b41d_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/image.mixin.js


const defineMixin = opts => opts;

const imageMixin = defineMixin({
  props: {
    src: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: void 0
    },
    quality: {
      type: [Number, String],
      default: void 0
    },
    background: {
      type: String,
      default: void 0
    },
    fit: {
      type: String,
      default: void 0
    },
    modifiers: {
      type: Object,
      default: void 0
    },
    preset: {
      type: String,
      default: void 0
    },
    provider: {
      type: String,
      default: void 0
    },
    sizes: {
      type: [Object, String],
      default: void 0
    },
    preload: {
      type: Boolean,
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    alt: {
      type: String,
      default: void 0
    },
    referrerpolicy: {
      type: String,
      default: void 0
    },
    usemap: {
      type: String,
      default: void 0
    },
    longdesc: {
      type: String,
      default: void 0
    },
    ismap: {
      type: Boolean,
      default: void 0
    },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: val => ["anonymous", "use-credentials", "", true, false].includes(val)
    },
    loading: {
      type: String,
      default: void 0
    },
    decoding: {
      type: String,
      default: void 0,
      validator: val => ["async", "auto", "sync"].includes(val)
    }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },

    nModifiers() {
      return { ...this.modifiers,
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      };
    },

    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }

  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&



const defineComponent = opts => opts;

/* harmony default export */ var nuxt_imgvue_type_script_lang_js_ = (defineComponent({
  name: "NuxtImg",
  mixins: [imageMixin],
  props: {
    placeholder: {
      type: [Boolean, String, Number, Array],
      default: void 0
    }
  },

  head() {
    if (this.preload === true) {
      return {
        link: [{
          rel: "preload",
          as: "image",
          href: this.nSrc
        }]
      };
    }

    return {};
  },

  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;

      if (this.sizes) {
        const {
          sizes,
          srcset
        } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }

      return attrs;
    },

    nMainSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },

    nSizes() {
      return this.$img.getSizes(this.src, { ...this.nOptions,
        sizes: this.sizes,
        modifiers: { ...this.nModifiers,
          width: parseSize(this.width),
          height: parseSize(this.height)
        }
      });
    },

    nSrc() {
      return this.nPlaceholder ? this.nPlaceholder : this.nMainSrc;
    },

    nPlaceholder() {
      let placeholder = this.placeholder;

      if (placeholder === "") {
        placeholder = true;
      }

      if (!placeholder || this.placeholderLoaded) {
        return false;
      }

      if (typeof placeholder === "string") {
        return placeholder;
      }

      const size = Array.isArray(placeholder) ? placeholder : typeof placeholder === "number" ? [placeholder, placeholder] : [10, 10];
      return this.$img(this.src, { ...this.nModifiers,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, this.nOptions);
    }

  },

  mounted() {
    if (this.nPlaceholder) {
      const img = new Image();
      img.src = this.nMainSrc;

      img.onload = () => {
        this.$refs.img.src = this.nMainSrc;
        this.placeholderLoaded = true;
      };
    }

    if (true) {
      if (this.sizes) {
        this.nSizes;
      }
    }
  }

}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_imgvue_type_script_lang_js_ = (nuxt_imgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue





/* normalize component */

var nuxt_img_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_imgvue_type_script_lang_js_,
  nuxt_imgvue_type_template_id_4c03b41d_render,
  nuxt_imgvue_type_template_id_4c03b41d_staticRenderFns,
  false,
  null,
  null,
  "35f5efd8"
  
)

/* harmony default export */ var nuxt_img = (nuxt_img_component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=template&id=310bdcc2&
var nuxt_picturevue_type_template_id_310bdcc2_render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;

  return _c('picture', {
    key: _vm.nSources[0].src
  }, [_vm._ssrNode((_vm.nSources[1] ? "<source" + _vm._ssrAttr("type", _vm.nSources[1].type) + _vm._ssrAttr("srcset", _vm.nSources[1].srcset) + _vm._ssrAttr("sizes", _vm.nSources[1].sizes) + ">" : "<!---->") + " <img" + _vm._ssrAttr("src", _vm.nSources[0].src) + _vm._ssrAttr("srcset", _vm.nSources[0].srcset) + _vm._ssrAttr("sizes", _vm.nSources[0].sizes) + _vm._ssrAttrs({ ..._vm.nImgAttrs,
    ..._vm.imgAttrs
  }) + ">")]);
};

var nuxt_picturevue_type_template_id_310bdcc2_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&



const nuxt_picturevue_type_script_lang_js_defineComponent = opts => opts;

/* harmony default export */ var nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_defineComponent({
  name: "NuxtPicture",
  mixins: [imageMixin],
  props: {
    legacyFormat: {
      type: String,
      default: null
    },
    imgAttrs: {
      type: Object,
      default: null
    }
  },

  head() {
    if (this.preload === true) {
      const srcKey = typeof this.nSources[1] !== "undefined" ? 1 : 0;
      const link = {
        rel: "preload",
        as: "image",
        imagesrcset: this.nSources[srcKey].srcset
      };

      if (typeof this.nSources[srcKey].sizes !== "undefined") {
        link.imagesizes = this.nSources[srcKey].sizes;
      }

      return {
        link: [link]
      };
    }

    return {};
  },

  computed: {
    isTransparent() {
      return ["png", "webp", "gif"].includes(this.originalFormat);
    },

    originalFormat() {
      return getFileExtension(this.src);
    },

    nFormat() {
      if (this.format) {
        return this.format;
      }

      if (this.originalFormat === "svg") {
        return "svg";
      }

      return "webp";
    },

    nLegacyFormat() {
      if (this.legacyFormat) {
        return this.legacyFormat;
      }

      const formats = {
        webp: this.isTransparent ? "png" : "jpeg",
        svg: "png"
      };
      return formats[this.nFormat] || this.originalFormat;
    },

    nSources() {
      if (this.nFormat === "svg") {
        return [{
          srcset: this.src
        }];
      }

      const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
      const sources = formats.map(format => {
        const {
          srcset,
          sizes,
          src
        } = this.$img.getSizes(this.src, { ...this.nOptions,
          sizes: this.sizes || this.$img.options.screens,
          modifiers: { ...this.nModifiers,
            format
          }
        });
        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset
        };
      });
      return sources;
    }

  },

  created() {
    if (true) {
      this.nSources;
    }
  }

}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue





/* normalize component */

var nuxt_picture_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_picturevue_type_script_lang_js_,
  nuxt_picturevue_type_template_id_310bdcc2_render,
  nuxt_picturevue_type_template_id_310bdcc2_staticRenderFns,
  false,
  null,
  null,
  "f6104dda"
  
)

/* harmony default export */ var nuxt_picture = (nuxt_picture_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js


const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => Object(dist["encodeParam"])(key) + "_" + Object(dist["encodeParam"])(val)
});
const ipx_getImage = (src, {
  modifiers = {},
  baseURL
} = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }

  const params = operationsGenerator(modifiers) || "_";

  if (!baseURL) {
    var _ctx$nuxtContext;

    baseURL = Object(dist["joinURL"])(((_ctx$nuxtContext = ctx.nuxtContext) === null || _ctx$nuxtContext === void 0 ? void 0 : _ctx$nuxtContext.base) || "/", "/_ipx");
  }

  return {
    url: Object(dist["joinURL"])(baseURL, params, Object(dist["encodePath"])(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/static.js

const static_getImage = (src, options, ctx) => ({ ...ipx_getImage(src, options, ctx),
  isStatic: true
});
const static_supportsAlias = true;
// CONCATENATED MODULE: ./.nuxt/image.js





const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "static",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ['static']: {
    provider: static_namespaceObject,
    defaults: {}
  }
};
external_vue_default.a.component(nuxt_img.name, nuxt_img);
external_vue_default.a.component(nuxt_picture.name, nuxt_picture);
external_vue_default.a.component('NImg', nuxt_img);
external_vue_default.a.component('NPicture', nuxt_picture);
/* harmony default export */ var _nuxt_image = (function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext);

  if (true) {
    nuxtContext.beforeNuxtRender(({
      nuxtState
    }) => {
      const ssrData = nuxtState.data[0] || {};
      ssrData._img = nuxtState._img || {};
    });
  }

  inject('img', $img);
});
// EXTERNAL MODULE: external "vuesax"
var external_vuesax_ = __webpack_require__(28);
var external_vuesax_default = /*#__PURE__*/__webpack_require__.n(external_vuesax_);

// CONCATENATED MODULE: ./plugins/vuesax.js


 //Vuesax styles

external_vue_default.a.use(external_vuesax_default.a, {// options here
});
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./vuetify/plugin.js (mode: 'all')

 // Source: ./gtm.js (mode: 'all')

 // Source: ./image.js (mode: 'all')

 // Source: ../plugins/vuesax.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Dr. Tiago Machado de Souza - Cirugião Bucomaxilofacial",
      "htmlAttrs": {
        "lang": "PT-br"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Sou especialista em Cirurgia Bucomaxilo Facial, Implantodontia e HOF. Prezo pelo atendimento humanitário, qualidade e sofisticação dos meus pacientes."
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"
      }],
      "script": [{
        "src": "https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fmodernizr\u002F2.8.3\u002Fmodernizr.min.js"
      }, {
        "hid": "gtm-script",
        "innerHTML": "if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=G-F93CYBJFLC?id='+i;f.parentNode.insertBefore(j,f);};w[y]('G-F93CYBJFLC')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"
      }],
      "style": [],
      "noscript": [{
        "hid": "gtm-noscript",
        "pbody": true,
        "innerHTML": "\u003Ciframe src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fns.html?id=G-F93CYBJFLC&\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\" title=\"gtm\"\u003E\u003C\u002Fiframe\u003E"
      }],
      "__dangerouslyDisableSanitizersByTagID": {
        "gtm-script": ["innerHTML"],
        "gtm-noscript": ["innerHTML"]
      }
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof vuetify_plugin === 'function') {
    await vuetify_plugin(app.context, inject);
  }

  if (typeof gtm === 'function') {
    await gtm(app.context, inject);
  }

  if (typeof _nuxt_image === 'function') {
    await _nuxt_image(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vuesax.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vuesax.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(dist["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(dist["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(dist["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(dist["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/ButtonOla.vue?vue&type=template&id=3d5395ee&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "buttonOla"
  }, [_c('vs-button', {
    staticClass: "OlaBtn",
    attrs: {
      "id": "vs-ola"
    }
  }, [_c('a', {
    attrs: {
      "id": "OlaText",
      "href": "https://api.whatsapp.com/send?phone=555185020228&text=Ol%C3%A1!%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
    }
  }, [_vm._v("Diga Olá!")])])], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/ButtonOla.vue?vue&type=template&id=3d5395ee&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/atoms/ButtonOla.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6ffff38a"
  
)

/* harmony default export */ var ButtonOla = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Instagram.vue?vue&type=template&id=540b6dec&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "ig"
  }, [_vm._ssrNode("<img src=\"https://res.cloudinary.com/dnqiosdb6/image/upload/v1652042089/Icons/Instagram_qeafx3.png\" alt=\"Acesso Instagram\" class=\"ig hvr-float\" data-v-540b6dec>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/Instagram.vue?vue&type=template&id=540b6dec&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/atoms/Instagram.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "540b6dec",
  "8d66d74a"
  
)

/* harmony default export */ var Instagram = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/WhatsApp.vue?vue&type=template&id=1957be6b&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "instagram"
  }, [_vm._ssrNode("<img src=\"https://res.cloudinary.com/dnqiosdb6/image/upload/v1652042090/Icons/WhatsApp_q8z1t7.png\" alt=\"Acesso WhatsApp\" class=\"wp hvr-float\" data-v-1957be6b>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/WhatsApp.vue?vue&type=template&id=1957be6b&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/atoms/WhatsApp.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1957be6b",
  "279d71d9"
  
)

/* harmony default export */ var WhatsApp = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Linkdl.vue?vue&type=template&id=2fce7a10&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "linkdl"
  }, [_vm._ssrNode("<img src=\"https://res.cloudinary.com/dnqiosdb6/image/upload/v1652042089/Icons/Linkdl_fnvhc5.png\" alt=\"Acesso Linkdl\" class=\"linkdl hvr-float\" data-v-2fce7a10>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/Linkdl.vue?vue&type=template&id=2fce7a10&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/atoms/Linkdl.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2fce7a10",
  "5dca73ae"
  
)

/* harmony default export */ var Linkdl = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/Facebook.vue?vue&type=template&id=71e5161a&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "instagram"
  }, [_vm._ssrNode("<img src=\"https://res.cloudinary.com/dnqiosdb6/image/upload/v1652042089/Icons/Facebook_qh96qq.png\" alt=\"Acesso Facebook\" class=\"fb hvr-float\" data-v-71e5161a>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/Facebook.vue?vue&type=template&id=71e5161a&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/atoms/Facebook.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "71e5161a",
  "6490512d"
  
)

/* harmony default export */ var Facebook = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, exports) {

module.exports = require("image-meta");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map