/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"monaco-editor":"monaco-editor","monaco-languages":"monaco-languages"}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
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
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: serviceUrl, clang, rustc, cargo, templates, sentryDNS, default */
/***/ (function(module) {

module.exports = {"serviceUrl":"//wasmexplorer-service.herokuapp.com/service.php","clang":"//webassembly-studio-clang.herokuapp.com/build","rustc":"//webassembly-studio-rust.herokuapp.com/rustc","cargo":"//webassembly-studio-rust.herokuapp.com/cargo","templates":{"default":"/dist/templates/index.js","arc":"/dist/arc-templates/index.js"},"sentryDNS":"https://756ae32005ed49cf9d4dd2aa106ccd4a@sentry.io/1229949"};

/***/ }),

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(/*! concat-map */ "./node_modules/concat-map/index.js");
var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/balanced-match/index.js");

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ "./node_modules/cassowary/bin/c.js":
/*!*****************************************!*\
  !*** ./node_modules/cassowary/bin/c.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Parts Copyright (C) 2011-2012, Alex Russell (slightlyoff@chromium.org)
 * Parts Copyright (C) Copyright (C) 1998-2000 Greg J. Badros
 *
 * Use of this source code is governed by the LGPL, which can be found in the
 * COPYING.LGPL file.
 *
 * This is a compiled version of Cassowary/JS. For source versions or to
 * contribute, see the github project:
 *
 *  https://github.com/slightlyoff/cassowary-js-refactor
 *
 */

(function() {
(function(a){"use strict";try{(function(){}).bind(a)}catch(b){Object.defineProperty(Function.prototype,"bind",{value:function(a){var b=this;return function(){return b.apply(a,arguments)}},enumerable:!1,configurable:!0,writable:!0})}var c=a.HTMLElement!==void 0,d=function(a){for(var b=null;a&&a!=Object.prototype;){if(a.tagName){b=a.tagName;break}a=a.prototype}return b||"div"},e=1e-8,f={},g=function(a,b){if(a&&b){if("function"==typeof a[b])return a[b];var c=a.prototype;if(c&&"function"==typeof c[b])return c[b];if(c!==Object.prototype&&c!==Function.prototype)return"function"==typeof a.__super__?g(a.__super__,b):void 0}},h=a.c={debug:!1,trace:!1,verbose:!1,traceAdded:!1,GC:!1,GEQ:1,LEQ:2,inherit:function(b){var e=null,g=null;b["extends"]&&(g=b["extends"],delete b["extends"]),b.initialize&&(e=b.initialize,delete b.initialize);var h=e||function(){};Object.defineProperty(h,"__super__",{value:g?g:Object,enumerable:!1,configurable:!0,writable:!1}),b._t&&(f[b._t]=h);var i=h.prototype=Object.create(g?g.prototype:Object.prototype);if(this.extend(i,b),c&&g&&g.prototype instanceof a.HTMLElement){var j=h,k=d(i),l=function(a){return a.__proto__=i,j.apply(a,arguments),i.created&&a.created(),i.decorate&&a.decorate(),a};this.extend(i,{upgrade:l}),h=function(){return l(a.document.createElement(k))},h.prototype=i,this.extend(h,{ctor:j})}return h},extend:function(a,b){return this.own(b,function(c){var d=Object.getOwnPropertyDescriptor(b,c);try{"function"==typeof d.get||"function"==typeof d.set?Object.defineProperty(a,c,d):"function"==typeof d.value||"_"===c.charAt(0)?(d.writable=!0,d.configurable=!0,d.enumerable=!1,Object.defineProperty(a,c,d)):a[c]=b[c]}catch(e){}}),a},own:function(b,c,d){return Object.getOwnPropertyNames(b).forEach(c,d||a),b},traceprint:function(a){h.verbose&&console.log(a)},fnenterprint:function(a){console.log("* "+a)},fnexitprint:function(a){console.log("- "+a)},assert:function(a,b){if(!a)throw new h.InternalError("Assertion failed: "+b)},plus:function(a,b){return a instanceof h.Expression||(a=new h.Expression(a)),b instanceof h.Expression||(b=new h.Expression(b)),a.plus(b)},minus:function(a,b){return a instanceof h.Expression||(a=new h.Expression(a)),b instanceof h.Expression||(b=new h.Expression(b)),a.minus(b)},times:function(a,b){return("number"==typeof a||a instanceof h.Variable)&&(a=new h.Expression(a)),("number"==typeof b||b instanceof h.Variable)&&(b=new h.Expression(b)),a.times(b)},divide:function(a,b){return("number"==typeof a||a instanceof h.Variable)&&(a=new h.Expression(a)),("number"==typeof b||b instanceof h.Variable)&&(b=new h.Expression(b)),a.divide(b)},approx:function(a,b){if(a===b)return!0;var c,d;return c=a instanceof h.Variable?a.value:a,d=b instanceof h.Variable?b.value:b,0==c?e>Math.abs(d):0==d?e>Math.abs(c):Math.abs(c-d)<Math.abs(c)*e},_inc:function(a){return function(){return a++}}(0),parseJSON:function(a){return JSON.parse(a,function(a,b){if("object"!=typeof b||"string"!=typeof b._t)return b;var c=b._t,d=f[c];if(c&&d){var e=g(d,"fromJSON");if(e)return e(b,d)}return b})}}; true&&"undefined"==typeof load&&(a.exports=h)})(this),function(a){"use strict";var b=function(a){var b=a.hashCode?a.hashCode:""+a;return b},c=function(a,b){Object.keys(a).forEach(function(c){b[c]=a[c]})},d={};a.HashTable=a.inherit({initialize:function(){this.size=0,this._store={},this._keyStrMap={},this._deleted=0},set:function(a,c){var d=b(a);this._store.hasOwnProperty(d)||this.size++,this._store[d]=c,this._keyStrMap[d]=a},get:function(a){if(!this.size)return null;a=b(a);var c=this._store[a];return c!==void 0?this._store[a]:null},clear:function(){this.size=0,this._store={},this._keyStrMap={}},_compact:function(){var a={};c(this._store,a),this._store=a},_compactThreshold:100,_perhapsCompact:function(){this._size>64||this._deleted>this._compactThreshold&&(this._compact(),this._deleted=0)},"delete":function(a){a=b(a),this._store.hasOwnProperty(a)&&(this._deleted++,delete this._store[a],this.size>0&&this.size--)},each:function(a,b){if(this.size){this._perhapsCompact();var c=this._store,d=this._keyStrMap;Object.keys(this._store).forEach(function(e){a.call(b||null,d[e],c[e])},this)}},escapingEach:function(a,b){if(this.size){this._perhapsCompact();for(var c=this,e=this._store,f=this._keyStrMap,g=d,h=Object.keys(e),i=0;h.length>i;i++)if(function(d){c._store.hasOwnProperty(d)&&(g=a.call(b||null,f[d],e[d]))}(h[i]),g){if(void 0!==g.retval)return g;if(g.brk)break}}},clone:function(){var b=new a.HashTable;return this.size&&(b.size=this.size,c(this._store,b._store),c(this._keyStrMap,b._keyStrMap)),b},equals:function(b){if(b===this)return!0;if(!(b instanceof a.HashTable)||b._size!==this._size)return!1;for(var c=Object.keys(this._store),d=0;c.length>d;d++){var e=c[d];if(this._keyStrMap[e]!==b._keyStrMap[e]||this._store[e]!==b._store[e])return!1}return!0},toString:function(){var b="";return this.each(function(a,c){b+=a+" => "+c+"\n"}),b}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.HashSet=a.inherit({_t:"c.HashSet",initialize:function(){this.storage=[],this.size=0},add:function(a){var b=this.storage;b.indexOf(a),-1==b.indexOf(a)&&b.push(a),this.size=this.storage.length},values:function(){return this.storage},has:function(a){var b=this.storage;return-1!=b.indexOf(a)},"delete":function(a){var b=this.storage.indexOf(a);return-1==b?null:(this.storage.splice(b,1)[0],this.size=this.storage.length,void 0)},clear:function(){this.storage.length=0},each:function(a,b){this.size&&this.storage.forEach(a,b)},escapingEach:function(a,b){this.size&&this.storage.forEach(a,b)},toString:function(){var a=this.size+" {",b=!0;return this.each(function(c){b?b=!1:a+=", ",a+=c}),a+="}\n"},toJSON:function(){var a=[];return this.each(function(b){a.push(b.toJSON())}),{_t:"c.HashSet",data:a}},fromJSON:function(b){var c=new a.HashSet;return b.data&&(c.size=b.data.length,c.storage=b.data),c}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Error=a.inherit({initialize:function(a){a&&(this._description=a)},_name:"c.Error",_description:"An error has occured in Cassowary",set description(a){this._description=a},get description(){return"("+this._name+") "+this._description},get message(){return this.description},toString:function(){return this.description}});var b=function(b,c){return a.inherit({"extends":a.Error,initialize:function(){a.Error.apply(this,arguments)},_name:b||"",_description:c||""})};a.ConstraintNotFound=b("c.ConstraintNotFound","Tried to remove a constraint never added to the tableu"),a.InternalError=b("c.InternalError"),a.NonExpression=b("c.NonExpression","The resulting expression would be non"),a.NotEnoughStays=b("c.NotEnoughStays","There are not enough stays to give specific values to every variable"),a.RequiredFailure=b("c.RequiredFailure","A required constraint cannot be satisfied"),a.TooDifficult=b("c.TooDifficult","The constraints are too difficult to solve")}(this.c||module.parent.exports||{}),function(a){"use strict";var b=1e3;a.SymbolicWeight=a.inherit({_t:"c.SymbolicWeight",initialize:function(){this.value=0;for(var a=1,c=arguments.length-1;c>=0;--c)this.value+=arguments[c]*a,a*=b},toJSON:function(){return{_t:this._t,value:this.value}}})}(this.c||module.parent.exports||{}),function(a){a.Strength=a.inherit({initialize:function(b,c,d,e){this.name=b,this.symbolicWeight=c instanceof a.SymbolicWeight?c:new a.SymbolicWeight(c,d,e)},get required(){return this===a.Strength.required},toString:function(){return this.name+(this.isRequired?"":":"+this.symbolicWeight)}}),a.Strength.required=new a.Strength("<Required>",1e3,1e3,1e3),a.Strength.strong=new a.Strength("strong",1,0,0),a.Strength.medium=new a.Strength("medium",0,1,0),a.Strength.weak=new a.Strength("weak",0,0,1)}(this.c||( true?module.parent.exports.c:undefined)),function(a){"use strict";a.AbstractVariable=a.inherit({isDummy:!1,isExternal:!1,isPivotable:!1,isRestricted:!1,_init:function(b,c){this.hashCode=a._inc(),this.name=(c||"")+this.hashCode,b&&(b.name!==void 0&&(this.name=b.name),b.value!==void 0&&(this.value=b.value),b.prefix!==void 0&&(this._prefix=b.prefix))},_prefix:"",name:"",value:0,toJSON:function(){var a={};return this._t&&(a._t=this._t),this.name&&(a.name=this.name),this.value!==void 0&&(a.value=this.value),this._prefix&&(a._prefix=this._prefix),this._t&&(a._t=this._t),a},fromJSON:function(b,c){var d=new c;return a.extend(d,b),d},toString:function(){return this._prefix+"["+this.name+":"+this.value+"]"}}),a.Variable=a.inherit({_t:"c.Variable","extends":a.AbstractVariable,initialize:function(b){this._init(b,"v");var c=a.Variable._map;c&&(c[this.name]=this)},isExternal:!0}),a.DummyVariable=a.inherit({_t:"c.DummyVariable","extends":a.AbstractVariable,initialize:function(a){this._init(a,"d")},isDummy:!0,isRestricted:!0,value:"dummy"}),a.ObjectiveVariable=a.inherit({_t:"c.ObjectiveVariable","extends":a.AbstractVariable,initialize:function(a){this._init(a,"o")},value:"obj"}),a.SlackVariable=a.inherit({_t:"c.SlackVariable","extends":a.AbstractVariable,initialize:function(a){this._init(a,"s")},isPivotable:!0,isRestricted:!0,value:"slack"})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Point=a.inherit({initialize:function(b,c,d){if(b instanceof a.Variable)this._x=b;else{var e={value:b};d&&(e.name="x"+d),this._x=new a.Variable(e)}if(c instanceof a.Variable)this._y=c;else{var f={value:c};d&&(f.name="y"+d),this._y=new a.Variable(f)}},get x(){return this._x},set x(b){b instanceof a.Variable?this._x=b:this._x.value=b},get y(){return this._y},set y(b){b instanceof a.Variable?this._y=b:this._y.value=b},toString:function(){return"("+this.x+", "+this.y+")"}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Expression=a.inherit({initialize:function(b,c,d){a.GC&&console.log("new c.Expression"),this.constant="number"!=typeof d||isNaN(d)?0:d,this.terms=new a.HashTable,b instanceof a.AbstractVariable?this.setVariable(b,"number"==typeof c?c:1):"number"==typeof b&&(isNaN(b)?console.trace():this.constant=b)},initializeFromHash:function(b,c){return a.verbose&&(console.log("*******************************"),console.log("clone c.initializeFromHash"),console.log("*******************************")),a.GC&&console.log("clone c.Expression"),this.constant=b,this.terms=c.clone(),this},multiplyMe:function(a){this.constant*=a;var b=this.terms;return b.each(function(c,d){b.set(c,d*a)}),this},clone:function(){a.verbose&&(console.log("*******************************"),console.log("clone c.Expression"),console.log("*******************************"));var b=new a.Expression;return b.initializeFromHash(this.constant,this.terms),b},times:function(b){if("number"==typeof b)return this.clone().multiplyMe(b);if(this.isConstant)return b.times(this.constant);if(b.isConstant)return this.times(b.constant);throw new a.NonExpression},plus:function(b){return b instanceof a.Expression?this.clone().addExpression(b,1):b instanceof a.Variable?this.clone().addVariable(b,1):void 0},minus:function(b){return b instanceof a.Expression?this.clone().addExpression(b,-1):b instanceof a.Variable?this.clone().addVariable(b,-1):void 0},divide:function(b){if("number"==typeof b){if(a.approx(b,0))throw new a.NonExpression;return this.times(1/b)}if(b instanceof a.Expression){if(!b.isConstant)throw new a.NonExpression;return this.times(1/b.constant)}},addExpression:function(b,c,d,e){return b instanceof a.AbstractVariable&&(b=new a.Expression(b),a.trace&&console.log("addExpression: Had to cast a var to an expression")),c=c||1,this.constant+=c*b.constant,b.terms.each(function(a,b){this.addVariable(a,b*c,d,e)},this),this},addVariable:function(b,c,d,e){null==c&&(c=1),a.trace&&console.log("c.Expression::addVariable():",b,c);var f=this.terms.get(b);if(f){var g=f+c;0==g||a.approx(g,0)?(e&&e.noteRemovedVariable(b,d),this.terms.delete(b)):this.setVariable(b,g)}else a.approx(c,0)||(this.setVariable(b,c),e&&e.noteAddedVariable(b,d));return this},setVariable:function(a,b){return this.terms.set(a,b),this},anyPivotableVariable:function(){if(this.isConstant)throw new a.InternalError("anyPivotableVariable called on a constant");var b=this.terms.escapingEach(function(a){return a.isPivotable?{retval:a}:void 0});return b&&void 0!==b.retval?b.retval:null},substituteOut:function(b,c,d,e){a.trace&&(a.fnenterprint("CLE:substituteOut: "+b+", "+c+", "+d+", ..."),a.traceprint("this = "+this));var f=this.setVariable.bind(this),g=this.terms,h=g.get(b);g.delete(b),this.constant+=h*c.constant,c.terms.each(function(b,c){var i=g.get(b);if(i){var j=i+h*c;a.approx(j,0)?(e.noteRemovedVariable(b,d),g.delete(b)):f(b,j)}else f(b,h*c),e&&e.noteAddedVariable(b,d)}),a.trace&&a.traceprint("Now this is "+this)},changeSubject:function(a,b){this.setVariable(a,this.newSubject(b))},newSubject:function(b){a.trace&&a.fnenterprint("newSubject:"+b);var c=1/this.terms.get(b);return this.terms.delete(b),this.multiplyMe(-c),c},coefficientFor:function(a){return this.terms.get(a)||0},get isConstant(){return 0==this.terms.size},toString:function(){var b="",c=!1;if(!a.approx(this.constant,0)||this.isConstant){if(b+=this.constant,this.isConstant)return b;c=!0}return this.terms.each(function(a,d){c&&(b+=" + "),b+=d+"*"+a,c=!0}),b},equals:function(b){return b===this?!0:b instanceof a.Expression&&b.constant===this.constant&&b.terms.equals(this.terms)},Plus:function(a,b){return a.plus(b)},Minus:function(a,b){return a.minus(b)},Times:function(a,b){return a.times(b)},Divide:function(a,b){return a.divide(b)}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.AbstractConstraint=a.inherit({initialize:function(b,c){this.hashCode=a._inc(),this.strength=b||a.Strength.required,this.weight=c||1},isEditConstraint:!1,isInequality:!1,isStayConstraint:!1,get required(){return this.strength===a.Strength.required},toString:function(){return this.strength+" {"+this.weight+"} ("+this.expression+")"}});var b=a.AbstractConstraint.prototype.toString,c=function(b,c,d){a.AbstractConstraint.call(this,c||a.Strength.strong,d),this.variable=b,this.expression=new a.Expression(b,-1,b.value)};a.EditConstraint=a.inherit({"extends":a.AbstractConstraint,initialize:function(){c.apply(this,arguments)},isEditConstraint:!0,toString:function(){return"edit:"+b.call(this)}}),a.StayConstraint=a.inherit({"extends":a.AbstractConstraint,initialize:function(){c.apply(this,arguments)},isStayConstraint:!0,toString:function(){return"stay:"+b.call(this)}});var d=a.Constraint=a.inherit({"extends":a.AbstractConstraint,initialize:function(b,c,d){a.AbstractConstraint.call(this,c,d),this.expression=b}});a.Inequality=a.inherit({"extends":a.Constraint,_cloneOrNewCle:function(b){return b.clone?b.clone():new a.Expression(b)},initialize:function(b,c,e,f,g){var h=b instanceof a.Expression,i=e instanceof a.Expression,j=b instanceof a.AbstractVariable,k=e instanceof a.AbstractVariable,l="number"==typeof b,m="number"==typeof e;if((h||l)&&k){var n=b,o=c,p=e,q=f,r=g;if(d.call(this,this._cloneOrNewCle(n),q,r),o==a.LEQ)this.expression.multiplyMe(-1),this.expression.addVariable(p);else{if(o!=a.GEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addVariable(p,-1)}}else if(j&&(i||m)){var n=e,o=c,p=b,q=f,r=g;if(d.call(this,this._cloneOrNewCle(n),q,r),o==a.GEQ)this.expression.multiplyMe(-1),this.expression.addVariable(p);else{if(o!=a.LEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addVariable(p,-1)}}else{if(h&&m){var s=b,o=c,t=e,q=f,r=g;if(d.call(this,this._cloneOrNewCle(s),q,r),o==a.LEQ)this.expression.multiplyMe(-1),this.expression.addExpression(this._cloneOrNewCle(t));else{if(o!=a.GEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addExpression(this._cloneOrNewCle(t),-1)}return this}if(l&&i){var s=e,o=c,t=b,q=f,r=g;if(d.call(this,this._cloneOrNewCle(s),q,r),o==a.GEQ)this.expression.multiplyMe(-1),this.expression.addExpression(this._cloneOrNewCle(t));else{if(o!=a.LEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addExpression(this._cloneOrNewCle(t),-1)}return this}if(h&&i){var s=b,o=c,t=e,q=f,r=g;if(d.call(this,this._cloneOrNewCle(t),q,r),o==a.GEQ)this.expression.multiplyMe(-1),this.expression.addExpression(this._cloneOrNewCle(s));else{if(o!=a.LEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addExpression(this._cloneOrNewCle(s),-1)}}else{if(h)return d.call(this,b,c,e);if(c==a.GEQ)d.call(this,new a.Expression(e),f,g),this.expression.multiplyMe(-1),this.expression.addVariable(b);else{if(c!=a.LEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");d.call(this,new a.Expression(e),f,g),this.expression.addVariable(b,-1)}}}},isInequality:!0,toString:function(){return d.prototype.toString.call(this)+" >= 0) id: "+this.hashCode}}),a.Equation=a.inherit({"extends":a.Constraint,initialize:function(b,c,e,f){if(b instanceof a.Expression&&!c||c instanceof a.Strength)d.call(this,b,c,e);else if(b instanceof a.AbstractVariable&&c instanceof a.Expression){var g=b,h=c,i=e,j=f;d.call(this,h.clone(),i,j),this.expression.addVariable(g,-1)}else if(b instanceof a.AbstractVariable&&"number"==typeof c){var g=b,k=c,i=e,j=f;d.call(this,new a.Expression(k),i,j),this.expression.addVariable(g,-1)}else if(b instanceof a.Expression&&c instanceof a.AbstractVariable){var h=b,g=c,i=e,j=f;d.call(this,h.clone(),i,j),this.expression.addVariable(g,-1)}else{if(!(b instanceof a.Expression||b instanceof a.AbstractVariable||"number"==typeof b)||!(c instanceof a.Expression||c instanceof a.AbstractVariable||"number"==typeof c))throw"Bad initializer to c.Equation";b=b instanceof a.Expression?b.clone():new a.Expression(b),c=c instanceof a.Expression?c.clone():new a.Expression(c),d.call(this,b,e,f),this.expression.addExpression(c,-1)}a.assert(this.strength instanceof a.Strength,"_strength not set")},toString:function(){return d.prototype.toString.call(this)+" = 0)"}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.EditInfo=a.inherit({initialize:function(a,b,c,d,e){this.constraint=a,this.editPlus=b,this.editMinus=c,this.prevEditConstant=d,this.index=e},toString:function(){return"<cn="+this.constraint+", ep="+this.editPlus+", em="+this.editMinus+", pec="+this.prevEditConstant+", index="+this.index+">"}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Tableau=a.inherit({initialize:function(){this.columns=new a.HashTable,this.rows=new a.HashTable,this._infeasibleRows=new a.HashSet,this._externalRows=new a.HashSet,this._externalParametricVars=new a.HashSet},noteRemovedVariable:function(b,c){a.trace&&console.log("c.Tableau::noteRemovedVariable: ",b,c);var d=this.columns.get(b);c&&d&&d.delete(c)},noteAddedVariable:function(a,b){b&&this.insertColVar(a,b)},getInternalInfo:function(){var a="Tableau Information:\n";return a+="Rows: "+this.rows.size,a+=" (= "+(this.rows.size-1)+" constraints)",a+="\nColumns: "+this.columns.size,a+="\nInfeasible Rows: "+this._infeasibleRows.size,a+="\nExternal basic variables: "+this._externalRows.size,a+="\nExternal parametric variables: ",a+=this._externalParametricVars.size,a+="\n"},toString:function(){var a="Tableau:\n";return this.rows.each(function(b,c){a+=b,a+=" <==> ",a+=c,a+="\n"}),a+="\nColumns:\n",a+=this.columns,a+="\nInfeasible rows: ",a+=this._infeasibleRows,a+="External basic variables: ",a+=this._externalRows,a+="External parametric variables: ",a+=this._externalParametricVars},insertColVar:function(b,c){var d=this.columns.get(b);d||(d=new a.HashSet,this.columns.set(b,d)),d.add(c)},addRow:function(b,c){a.trace&&a.fnenterprint("addRow: "+b+", "+c),this.rows.set(b,c),c.terms.each(function(a){this.insertColVar(a,b),a.isExternal&&this._externalParametricVars.add(a)},this),b.isExternal&&this._externalRows.add(b),a.trace&&a.traceprint(""+this)},removeColumn:function(b){a.trace&&a.fnenterprint("removeColumn:"+b);var c=this.columns.get(b);c?(this.columns.delete(b),c.each(function(a){var c=this.rows.get(a);c.terms.delete(b)},this)):a.trace&&console.log("Could not find var",b,"in columns"),b.isExternal&&(this._externalRows.delete(b),this._externalParametricVars.delete(b))},removeRow:function(b){a.trace&&a.fnenterprint("removeRow:"+b);var c=this.rows.get(b);return a.assert(null!=c),c.terms.each(function(c){var e=this.columns.get(c);null!=e&&(a.trace&&console.log("removing from varset:",b),e.delete(b))},this),this._infeasibleRows.delete(b),b.isExternal&&this._externalRows.delete(b),this.rows.delete(b),a.trace&&a.fnexitprint("returning "+c),c},substituteOut:function(b,c){a.trace&&a.fnenterprint("substituteOut:"+b+", "+c),a.trace&&a.traceprint(""+this);var d=this.columns.get(b);d.each(function(a){var d=this.rows.get(a);d.substituteOut(b,c,a,this),a.isRestricted&&0>d.constant&&this._infeasibleRows.add(a)},this),b.isExternal&&(this._externalRows.add(b),this._externalParametricVars.delete(b)),this.columns.delete(b)},columnsHasKey:function(a){return!!this.columns.get(a)}})}(this.c||module.parent.exports||{}),function(a){var b=a.Tableau,c=b.prototype,d=1e-8,e=a.Strength.weak;a.SimplexSolver=a.inherit({"extends":a.Tableau,initialize:function(){a.Tableau.call(this),this._stayMinusErrorVars=[],this._stayPlusErrorVars=[],this._errorVars=new a.HashTable,this._markerVars=new a.HashTable,this._objective=new a.ObjectiveVariable({name:"Z"}),this._editVarMap=new a.HashTable,this._editVarList=[],this._slackCounter=0,this._artificialCounter=0,this._dummyCounter=0,this.autoSolve=!0,this._fNeedsSolving=!1,this._optimizeCount=0,this.rows.set(this._objective,new a.Expression),this._stkCedcns=[0],a.trace&&a.traceprint("objective expr == "+this.rows.get(this._objective))},addLowerBound:function(b,c){var d=new a.Inequality(b,a.GEQ,new a.Expression(c));return this.addConstraint(d)},addUpperBound:function(b,c){var d=new a.Inequality(b,a.LEQ,new a.Expression(c));return this.addConstraint(d)},addBounds:function(a,b,c){return this.addLowerBound(a,b),this.addUpperBound(a,c),this},add:function(){for(var a=0;arguments.length>a;a++)this.addConstraint(arguments[a]);return this},addConstraint:function(b){a.trace&&a.fnenterprint("addConstraint: "+b);var c=Array(2),d=Array(1),e=this.newExpression(b,c,d);if(d=d[0],this.tryAddingDirectly(e)||this.addWithArtificialVariable(e),this._fNeedsSolving=!0,b.isEditConstraint){var f=this._editVarMap.size,g=c[0],h=c[1];!g instanceof a.SlackVariable&&console.warn("cvEplus not a slack variable =",g),!h instanceof a.SlackVariable&&console.warn("cvEminus not a slack variable =",h),a.debug&&console.log("new c.EditInfo("+b+", "+g+", "+h+", "+d+", "+f+")");var i=new a.EditInfo(b,g,h,d,f);this._editVarMap.set(b.variable,i),this._editVarList[f]={v:b.variable,info:i}}return this.autoSolve&&(this.optimize(this._objective),this._setExternalVariables()),this},addConstraintNoException:function(b){a.trace&&a.fnenterprint("addConstraintNoException: "+b);try{return this.addConstraint(b),!0}catch(c){return!1}},addEditVar:function(b,c){return a.trace&&a.fnenterprint("addEditVar: "+b+" @ "+c),this.addConstraint(new a.EditConstraint(b,c||a.Strength.strong))},beginEdit:function(){return a.assert(this._editVarMap.size>0,"_editVarMap.size > 0"),this._infeasibleRows.clear(),this._resetStayConstants(),this._stkCedcns.push(this._editVarMap.size),this},endEdit:function(){return a.assert(this._editVarMap.size>0,"_editVarMap.size > 0"),this.resolve(),this._stkCedcns.pop(),this.removeEditVarsTo(this._stkCedcns[this._stkCedcns.length-1]),this},removeAllEditVars:function(){return this.removeEditVarsTo(0)},removeEditVarsTo:function(b){try{for(var c=this._editVarList.length,d=b;c>d;d++)this._editVarList[d]&&this.removeConstraint(this._editVarMap.get(this._editVarList[d].v).constraint);return this._editVarList.length=b,a.assert(this._editVarMap.size==b,"_editVarMap.size == n"),this}catch(e){throw new a.InternalError("Constraint not found in removeEditVarsTo")}},addPointStays:function(b){return a.trace&&console.log("addPointStays",b),b.forEach(function(a,b){this.addStay(a.x,e,Math.pow(2,b)),this.addStay(a.y,e,Math.pow(2,b))},this),this},addStay:function(b,c,d){var f=new a.StayConstraint(b,c||e,d||1);return this.addConstraint(f)},removeConstraint:function(a){return this.removeConstraintInternal(a),this},removeConstraintInternal:function(b){a.trace&&a.fnenterprint("removeConstraintInternal: "+b),a.trace&&a.traceprint(""+this),this._fNeedsSolving=!0,this._resetStayConstants();var c=this.rows.get(this._objective),d=this._errorVars.get(b);a.trace&&a.traceprint("eVars == "+d),null!=d&&d.each(function(e){var f=this.rows.get(e);null==f?c.addVariable(e,-b.weight*b.strength.symbolicWeight.value,this._objective,this):c.addExpression(f,-b.weight*b.strength.symbolicWeight.value,this._objective,this),a.trace&&a.traceprint("now eVars == "+d)},this);var e=this._markerVars.get(b);if(this._markerVars.delete(b),null==e)throw new a.InternalError("Constraint not found in removeConstraintInternal");if(a.trace&&a.traceprint("Looking to remove var "+e),null==this.rows.get(e)){var f=this.columns.get(e);a.trace&&a.traceprint("Must pivot -- columns are "+f);var g=null,h=0;f.each(function(b){if(b.isRestricted){var c=this.rows.get(b),d=c.coefficientFor(e);if(a.trace&&a.traceprint("Marker "+e+"'s coefficient in "+c+" is "+d),0>d){var f=-c.constant/d;(null==g||h>f||a.approx(f,h)&&b.hashCode<g.hashCode)&&(h=f,g=b)}}},this),null==g&&(a.trace&&a.traceprint("exitVar is still null"),f.each(function(a){if(a.isRestricted){var b=this.rows.get(a),c=b.coefficientFor(e),d=b.constant/c;(null==g||h>d)&&(h=d,g=a)}},this)),null==g&&(0==f.size?this.removeColumn(e):f.escapingEach(function(a){return a!=this._objective?(g=a,{brk:!0}):void 0},this)),null!=g&&this.pivot(e,g)}if(null!=this.rows.get(e)&&this.removeRow(e),null!=d&&d.each(function(a){a!=e&&this.removeColumn(a)},this),b.isStayConstraint){if(null!=d)for(var j=0;this._stayPlusErrorVars.length>j;j++)d.delete(this._stayPlusErrorVars[j]),d.delete(this._stayMinusErrorVars[j])}else if(b.isEditConstraint){a.assert(null!=d,"eVars != null");var k=this._editVarMap.get(b.variable);this.removeColumn(k.editMinus),this._editVarMap.delete(b.variable)}return null!=d&&this._errorVars.delete(d),this.autoSolve&&(this.optimize(this._objective),this._setExternalVariables()),this},reset:function(){throw a.trace&&a.fnenterprint("reset"),new a.InternalError("reset not implemented")},resolveArray:function(b){a.trace&&a.fnenterprint("resolveArray"+b);var c=b.length;this._editVarMap.each(function(a,d){var e=d.index;c>e&&this.suggestValue(a,b[e])},this),this.resolve()},resolvePair:function(a,b){this.suggestValue(this._editVarList[0].v,a),this.suggestValue(this._editVarList[1].v,b),this.resolve()},resolve:function(){a.trace&&a.fnenterprint("resolve()"),this.dualOptimize(),this._setExternalVariables(),this._infeasibleRows.clear(),this._resetStayConstants()},suggestValue:function(b,c){a.trace&&console.log("suggestValue("+b+", "+c+")");var d=this._editVarMap.get(b);if(!d)throw new a.Error("suggestValue for variable "+b+", but var is not an edit variable");var e=c-d.prevEditConstant;return d.prevEditConstant=c,this.deltaEditConstant(e,d.editPlus,d.editMinus),this},solve:function(){return this._fNeedsSolving&&(this.optimize(this._objective),this._setExternalVariables()),this},setEditedValue:function(b,c){if(!this.columnsHasKey(b)&&null==this.rows.get(b))return b.value=c,this;if(!a.approx(c,b.value)){this.addEditVar(b),this.beginEdit();try{this.suggestValue(b,c)}catch(d){throw new a.InternalError("Error in setEditedValue")}this.endEdit()}return this},addVar:function(b){if(!this.columnsHasKey(b)&&null==this.rows.get(b)){try{this.addStay(b)}catch(c){throw new a.InternalError("Error in addVar -- required failure is impossible")}a.trace&&a.traceprint("added initial stay on "+b)}return this},getInternalInfo:function(){var a=c.getInternalInfo.call(this);return a+="\nSolver info:\n",a+="Stay Error Variables: ",a+=this._stayPlusErrorVars.length+this._stayMinusErrorVars.length,a+=" ("+this._stayPlusErrorVars.length+" +, ",a+=this._stayMinusErrorVars.length+" -)\n",a+="Edit Variables: "+this._editVarMap.size,a+="\n"},getDebugInfo:function(){return""+this+this.getInternalInfo()+"\n"},toString:function(){var a=c.getInternalInfo.call(this);return a+="\n_stayPlusErrorVars: ",a+="["+this._stayPlusErrorVars+"]",a+="\n_stayMinusErrorVars: ",a+="["+this._stayMinusErrorVars+"]",a+="\n",a+="_editVarMap:\n"+this._editVarMap,a+="\n"},getConstraintMap:function(){return this._markerVars},addWithArtificialVariable:function(b){a.trace&&a.fnenterprint("addWithArtificialVariable: "+b);var c=new a.SlackVariable({value:++this._artificialCounter,prefix:"a"}),d=new a.ObjectiveVariable({name:"az"}),e=b.clone();a.trace&&a.traceprint("before addRows:\n"+this),this.addRow(d,e),this.addRow(c,b),a.trace&&a.traceprint("after addRows:\n"+this),this.optimize(d);var f=this.rows.get(d);if(a.trace&&a.traceprint("azTableauRow.constant == "+f.constant),!a.approx(f.constant,0))throw this.removeRow(d),this.removeColumn(c),new a.RequiredFailure;var g=this.rows.get(c);if(null!=g){if(g.isConstant)return this.removeRow(c),this.removeRow(d),void 0;var h=g.anyPivotableVariable();this.pivot(h,c)}a.assert(null==this.rows.get(c),"rowExpression(av) == null"),this.removeColumn(c),this.removeRow(d)},tryAddingDirectly:function(b){a.trace&&a.fnenterprint("tryAddingDirectly: "+b);var c=this.chooseSubject(b);return null==c?(a.trace&&a.fnexitprint("returning false"),!1):(b.newSubject(c),this.columnsHasKey(c)&&this.substituteOut(c,b),this.addRow(c,b),a.trace&&a.fnexitprint("returning true"),!0)},chooseSubject:function(b){a.trace&&a.fnenterprint("chooseSubject: "+b);var c=null,d=!1,e=!1,f=b.terms,g=f.escapingEach(function(a,b){if(d){if(!a.isRestricted&&!this.columnsHasKey(a))return{retval:a}}else if(a.isRestricted){if(!e&&!a.isDummy&&0>b){var f=this.columns.get(a);(null==f||1==f.size&&this.columnsHasKey(this._objective))&&(c=a,e=!0)}}else c=a,d=!0},this);if(g&&void 0!==g.retval)return g.retval;if(null!=c)return c;var h=0,g=f.escapingEach(function(a,b){return a.isDummy?(this.columnsHasKey(a)||(c=a,h=b),void 0):{retval:null}},this);if(g&&void 0!==g.retval)return g.retval;if(!a.approx(b.constant,0))throw new a.RequiredFailure;return h>0&&b.multiplyMe(-1),c},deltaEditConstant:function(b,c,d){a.trace&&a.fnenterprint("deltaEditConstant :"+b+", "+c+", "+d);var e=this.rows.get(c);if(null!=e)return e.constant+=b,0>e.constant&&this._infeasibleRows.add(c),void 0;var f=this.rows.get(d);if(null!=f)return f.constant+=-b,0>f.constant&&this._infeasibleRows.add(d),void 0;var g=this.columns.get(d);g||console.log("columnVars is null -- tableau is:\n"+this),g.each(function(a){var c=this.rows.get(a),e=c.coefficientFor(d);c.constant+=e*b,a.isRestricted&&0>c.constant&&this._infeasibleRows.add(a)},this)},dualOptimize:function(){a.trace&&a.fnenterprint("dualOptimize:");for(var b=this.rows.get(this._objective);this._infeasibleRows.size;){var c=this._infeasibleRows.values()[0];this._infeasibleRows.delete(c);var d=null,e=this.rows.get(c);if(e&&0>e.constant){var g,f=Number.MAX_VALUE,h=e.terms;if(h.each(function(c,e){if(e>0&&c.isPivotable){var h=b.coefficientFor(c);g=h/e,(f>g||a.approx(g,f)&&c.hashCode<d.hashCode)&&(d=c,f=g)}}),f==Number.MAX_VALUE)throw new a.InternalError("ratio == nil (MAX_VALUE) in dualOptimize");this.pivot(d,c)}}},newExpression:function(b,c,d){a.trace&&(a.fnenterprint("newExpression: "+b),a.traceprint("cn.isInequality == "+b.isInequality),a.traceprint("cn.required == "+b.required));var e=b.expression,f=new a.Expression(e.constant),g=new a.SlackVariable,h=new a.DummyVariable,i=new a.SlackVariable,j=new a.SlackVariable,k=e.terms;if(k.each(function(a,b){var c=this.rows.get(a);c?f.addExpression(c,b):f.addVariable(a,b)},this),b.isInequality){if(a.trace&&a.traceprint("Inequality, adding slack"),++this._slackCounter,g=new a.SlackVariable({value:this._slackCounter,prefix:"s"}),f.setVariable(g,-1),this._markerVars.set(b,g),!b.required){++this._slackCounter,i=new a.SlackVariable({value:this._slackCounter,prefix:"em"}),f.setVariable(i,1);
var l=this.rows.get(this._objective);l.setVariable(i,b.strength.symbolicWeight.value*b.weight),this.insertErrorVar(b,i),this.noteAddedVariable(i,this._objective)}}else if(b.required)a.trace&&a.traceprint("Equality, required"),++this._dummyCounter,h=new a.DummyVariable({value:this._dummyCounter,prefix:"d"}),f.setVariable(h,1),this._markerVars.set(b,h),a.trace&&a.traceprint("Adding dummyVar == d"+this._dummyCounter);else{a.trace&&a.traceprint("Equality, not required"),++this._slackCounter,j=new a.SlackVariable({value:this._slackCounter,prefix:"ep"}),i=new a.SlackVariable({value:this._slackCounter,prefix:"em"}),f.setVariable(j,-1),f.setVariable(i,1),this._markerVars.set(b,j);var l=this.rows.get(this._objective);a.trace&&console.log(l);var m=b.strength.symbolicWeight.value*b.weight;0==m&&(a.trace&&a.traceprint("cn == "+b),a.trace&&a.traceprint("adding "+j+" and "+i+" with swCoeff == "+m)),l.setVariable(j,m),this.noteAddedVariable(j,this._objective),l.setVariable(i,m),this.noteAddedVariable(i,this._objective),this.insertErrorVar(b,i),this.insertErrorVar(b,j),b.isStayConstraint?(this._stayPlusErrorVars.push(j),this._stayMinusErrorVars.push(i)):b.isEditConstraint&&(c[0]=j,c[1]=i,d[0]=e.constant)}return 0>f.constant&&f.multiplyMe(-1),a.trace&&a.fnexitprint("returning "+f),f},optimize:function(b){a.trace&&a.fnenterprint("optimize: "+b),a.trace&&a.traceprint(""+this),this._optimizeCount++;var c=this.rows.get(b);a.assert(null!=c,"zRow != null");for(var g,h,e=null,f=null;;){if(g=0,h=c.terms,h.escapingEach(function(a,b){return a.isPivotable&&g>b?(g=b,e=a,{brk:1}):void 0},this),g>=-d)return;a.trace&&console.log("entryVar:",e,"objectiveCoeff:",g);var i=Number.MAX_VALUE,j=this.columns.get(e),k=0;if(j.each(function(b){if(a.trace&&a.traceprint("Checking "+b),b.isPivotable){var c=this.rows.get(b),d=c.coefficientFor(e);a.trace&&a.traceprint("pivotable, coeff = "+d),0>d&&(k=-c.constant/d,(i>k||a.approx(k,i)&&b.hashCode<f.hashCode)&&(i=k,f=b))}},this),i==Number.MAX_VALUE)throw new a.InternalError("Objective function is unbounded in optimize");this.pivot(e,f),a.trace&&a.traceprint(""+this)}},pivot:function(b,c){a.trace&&console.log("pivot: ",b,c);var d=!1;d&&console.time(" SimplexSolver::pivot"),null==b&&console.warn("pivot: entryVar == null"),null==c&&console.warn("pivot: exitVar == null"),d&&console.time("  removeRow");var e=this.removeRow(c);d&&console.timeEnd("  removeRow"),d&&console.time("  changeSubject"),e.changeSubject(c,b),d&&console.timeEnd("  changeSubject"),d&&console.time("  substituteOut"),this.substituteOut(b,e),d&&console.timeEnd("  substituteOut"),d&&console.time("  addRow"),this.addRow(b,e),d&&console.timeEnd("  addRow"),d&&console.timeEnd(" SimplexSolver::pivot")},_resetStayConstants:function(){a.trace&&console.log("_resetStayConstants");for(var b=0;this._stayPlusErrorVars.length>b;b++){var c=this.rows.get(this._stayPlusErrorVars[b]);null==c&&(c=this.rows.get(this._stayMinusErrorVars[b])),null!=c&&(c.constant=0)}},_setExternalVariables:function(){a.trace&&a.fnenterprint("_setExternalVariables:"),a.trace&&a.traceprint(""+this),this._externalParametricVars.each(function(b){null!=this.rows.get(b)?a.trace&&console.log("Error: variable"+b+" in _externalParametricVars is basic"):b.value=0},this),this._externalRows.each(function(a){var b=this.rows.get(a);a.value!=b.constant&&(a.value=b.constant)},this),this._fNeedsSolving=!1,this.onsolved()},onsolved:function(){},insertErrorVar:function(b,c){a.trace&&a.fnenterprint("insertErrorVar:"+b+", "+c);var d=this._errorVars.get(c);d||(d=new a.HashSet,this._errorVars.set(b,d)),d.add(c)}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Timer=a.inherit({initialize:function(){this.isRunning=!1,this._elapsedMs=0},start:function(){return this.isRunning=!0,this._startReading=new Date,this},stop:function(){return this.isRunning=!1,this._elapsedMs+=new Date-this._startReading,this},reset:function(){return this.isRunning=!1,this._elapsedMs=0,this},elapsedTime:function(){return this.isRunning?(this._elapsedMs+(new Date-this._startReading))/1e3:this._elapsedMs/1e3}})}(this.c||module.parent.exports||{}),__cassowary_parser=function(){function a(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var b={parse:function(b,c){function k(a){g>e||(e>g&&(g=e,h=[]),h.push(a))}function l(){var a,b,c,d,f;if(d=e,f=e,a=z(),null!==a){if(c=m(),null!==c)for(b=[];null!==c;)b.push(c),c=m();else b=null;null!==b?(c=z(),null!==c?a=[a,b,c]:(a=null,e=f)):(a=null,e=f)}else a=null,e=f;return null!==a&&(a=function(a,b){return b}(d,a[1])),null===a&&(e=d),a}function m(){var a,b,c,d;return c=e,d=e,a=P(),null!==a?(b=s(),null!==b?a=[a,b]:(a=null,e=d)):(a=null,e=d),null!==a&&(a=function(a,b){return b}(c,a[0])),null===a&&(e=c),a}function n(){var a;return b.length>e?(a=b.charAt(e),e++):(a=null,0===f&&k("any character")),a}function o(){var a;return/^[a-zA-Z]/.test(b.charAt(e))?(a=b.charAt(e),e++):(a=null,0===f&&k("[a-zA-Z]")),null===a&&(36===b.charCodeAt(e)?(a="$",e++):(a=null,0===f&&k('"$"')),null===a&&(95===b.charCodeAt(e)?(a="_",e++):(a=null,0===f&&k('"_"')))),a}function p(){var a;return f++,/^[\t\x0B\f \xA0\uFEFF]/.test(b.charAt(e))?(a=b.charAt(e),e++):(a=null,0===f&&k("[\\t\\x0B\\f \\xA0\\uFEFF]")),f--,0===f&&null===a&&k("whitespace"),a}function q(){var a;return/^[\n\r\u2028\u2029]/.test(b.charAt(e))?(a=b.charAt(e),e++):(a=null,0===f&&k("[\\n\\r\\u2028\\u2029]")),a}function r(){var a;return f++,10===b.charCodeAt(e)?(a="\n",e++):(a=null,0===f&&k('"\\n"')),null===a&&("\r\n"===b.substr(e,2)?(a="\r\n",e+=2):(a=null,0===f&&k('"\\r\\n"')),null===a&&(13===b.charCodeAt(e)?(a="\r",e++):(a=null,0===f&&k('"\\r"')),null===a&&(8232===b.charCodeAt(e)?(a="\u2028",e++):(a=null,0===f&&k('"\\u2028"')),null===a&&(8233===b.charCodeAt(e)?(a="\u2029",e++):(a=null,0===f&&k('"\\u2029"')))))),f--,0===f&&null===a&&k("end of line"),a}function s(){var a,c,d;return d=e,a=z(),null!==a?(59===b.charCodeAt(e)?(c=";",e++):(c=null,0===f&&k('";"')),null!==c?a=[a,c]:(a=null,e=d)):(a=null,e=d),null===a&&(d=e,a=y(),null!==a?(c=r(),null!==c?a=[a,c]:(a=null,e=d)):(a=null,e=d),null===a&&(d=e,a=z(),null!==a?(c=t(),null!==c?a=[a,c]:(a=null,e=d)):(a=null,e=d))),a}function t(){var a,c;return c=e,f++,b.length>e?(a=b.charAt(e),e++):(a=null,0===f&&k("any character")),f--,null===a?a="":(a=null,e=c),a}function u(){var a;return f++,a=v(),null===a&&(a=x()),f--,0===f&&null===a&&k("comment"),a}function v(){var a,c,d,g,h,i,j;if(h=e,"/*"===b.substr(e,2)?(a="/*",e+=2):(a=null,0===f&&k('"/*"')),null!==a){for(c=[],i=e,j=e,f++,"*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==d;)c.push(d),i=e,j=e,f++,"*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==c?("*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),null!==d?a=[a,c,d]:(a=null,e=h)):(a=null,e=h)}else a=null,e=h;return a}function w(){var a,c,d,g,h,i,j;if(h=e,"/*"===b.substr(e,2)?(a="/*",e+=2):(a=null,0===f&&k('"/*"')),null!==a){for(c=[],i=e,j=e,f++,"*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),null===d&&(d=q()),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==d;)c.push(d),i=e,j=e,f++,"*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),null===d&&(d=q()),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==c?("*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),null!==d?a=[a,c,d]:(a=null,e=h)):(a=null,e=h)}else a=null,e=h;return a}function x(){var a,c,d,g,h,i,j;if(h=e,"//"===b.substr(e,2)?(a="//",e+=2):(a=null,0===f&&k('"//"')),null!==a){for(c=[],i=e,j=e,f++,d=q(),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==d;)c.push(d),i=e,j=e,f++,d=q(),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==c?a=[a,c]:(a=null,e=h)}else a=null,e=h;return a}function y(){var a,b;for(a=[],b=p(),null===b&&(b=w(),null===b&&(b=x()));null!==b;)a.push(b),b=p(),null===b&&(b=w(),null===b&&(b=x()));return a}function z(){var a,b;for(a=[],b=p(),null===b&&(b=r(),null===b&&(b=u()));null!==b;)a.push(b),b=p(),null===b&&(b=r(),null===b&&(b=u()));return a}function A(){var a,b;return b=e,a=C(),null===a&&(a=B()),null!==a&&(a=function(a,b){return{type:"NumericLiteral",value:b}}(b,a)),null===a&&(e=b),a}function B(){var a,c,d;if(d=e,/^[0-9]/.test(b.charAt(e))?(c=b.charAt(e),e++):(c=null,0===f&&k("[0-9]")),null!==c)for(a=[];null!==c;)a.push(c),/^[0-9]/.test(b.charAt(e))?(c=b.charAt(e),e++):(c=null,0===f&&k("[0-9]"));else a=null;return null!==a&&(a=function(a,b){return parseInt(b.join(""))}(d,a)),null===a&&(e=d),a}function C(){var a,c,d,g,h;return g=e,h=e,a=B(),null!==a?(46===b.charCodeAt(e)?(c=".",e++):(c=null,0===f&&k('"."')),null!==c?(d=B(),null!==d?a=[a,c,d]:(a=null,e=h)):(a=null,e=h)):(a=null,e=h),null!==a&&(a=function(a,b){return parseFloat(b.join(""))}(g,a)),null===a&&(e=g),a}function D(){var a,c,d,g;if(g=e,/^[\-+]/.test(b.charAt(e))?(a=b.charAt(e),e++):(a=null,0===f&&k("[\\-+]")),a=null!==a?a:"",null!==a){if(/^[0-9]/.test(b.charAt(e))?(d=b.charAt(e),e++):(d=null,0===f&&k("[0-9]")),null!==d)for(c=[];null!==d;)c.push(d),/^[0-9]/.test(b.charAt(e))?(d=b.charAt(e),e++):(d=null,0===f&&k("[0-9]"));else c=null;null!==c?a=[a,c]:(a=null,e=g)}else a=null,e=g;return a}function E(){var a,b;return f++,b=e,a=F(),null!==a&&(a=function(a,b){return b}(b,a)),null===a&&(e=b),f--,0===f&&null===a&&k("identifier"),a}function F(){var a,b,c,d,g;if(f++,d=e,g=e,a=o(),null!==a){for(b=[],c=o();null!==c;)b.push(c),c=o();null!==b?a=[a,b]:(a=null,e=g)}else a=null,e=g;return null!==a&&(a=function(a,b,c){return b+c.join("")}(d,a[0],a[1])),null===a&&(e=d),f--,0===f&&null===a&&k("identifier"),a}function G(){var a,c,d,g,h,i,j;return i=e,a=E(),null!==a&&(a=function(a,b){return{type:"Variable",name:b}}(i,a)),null===a&&(e=i),null===a&&(a=A(),null===a&&(i=e,j=e,40===b.charCodeAt(e)?(a="(",e++):(a=null,0===f&&k('"("')),null!==a?(c=z(),null!==c?(d=P(),null!==d?(g=z(),null!==g?(41===b.charCodeAt(e)?(h=")",e++):(h=null,0===f&&k('")"')),null!==h?a=[a,c,d,g,h]:(a=null,e=j)):(a=null,e=j)):(a=null,e=j)):(a=null,e=j)):(a=null,e=j),null!==a&&(a=function(a,b){return b}(i,a[2])),null===a&&(e=i))),a}function H(){var a,b,c,d,f;return a=G(),null===a&&(d=e,f=e,a=I(),null!==a?(b=z(),null!==b?(c=H(),null!==c?a=[a,b,c]:(a=null,e=f)):(a=null,e=f)):(a=null,e=f),null!==a&&(a=function(a,b,c){return{type:"UnaryExpression",operator:b,expression:c}}(d,a[0],a[2])),null===a&&(e=d)),a}function I(){var a;return 43===b.charCodeAt(e)?(a="+",e++):(a=null,0===f&&k('"+"')),null===a&&(45===b.charCodeAt(e)?(a="-",e++):(a=null,0===f&&k('"-"')),null===a&&(33===b.charCodeAt(e)?(a="!",e++):(a=null,0===f&&k('"!"')))),a}function J(){var a,b,c,d,f,g,h,i,j;if(h=e,i=e,a=H(),null!==a){for(b=[],j=e,c=z(),null!==c?(d=K(),null!==d?(f=z(),null!==f?(g=H(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==c;)b.push(c),j=e,c=z(),null!==c?(d=K(),null!==d?(f=z(),null!==f?(g=H(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==b?a=[a,b]:(a=null,e=i)}else a=null,e=i;return null!==a&&(a=function(a,b,c){for(var d=b,e=0;c.length>e;e++)d={type:"MultiplicativeExpression",operator:c[e][1],left:d,right:c[e][3]};return d}(h,a[0],a[1])),null===a&&(e=h),a}function K(){var a;return 42===b.charCodeAt(e)?(a="*",e++):(a=null,0===f&&k('"*"')),null===a&&(47===b.charCodeAt(e)?(a="/",e++):(a=null,0===f&&k('"/"'))),a}function L(){var a,b,c,d,f,g,h,i,j;if(h=e,i=e,a=J(),null!==a){for(b=[],j=e,c=z(),null!==c?(d=M(),null!==d?(f=z(),null!==f?(g=J(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==c;)b.push(c),j=e,c=z(),null!==c?(d=M(),null!==d?(f=z(),null!==f?(g=J(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==b?a=[a,b]:(a=null,e=i)}else a=null,e=i;return null!==a&&(a=function(a,b,c){for(var d=b,e=0;c.length>e;e++)d={type:"AdditiveExpression",operator:c[e][1],left:d,right:c[e][3]};return d}(h,a[0],a[1])),null===a&&(e=h),a}function M(){var a;return 43===b.charCodeAt(e)?(a="+",e++):(a=null,0===f&&k('"+"')),null===a&&(45===b.charCodeAt(e)?(a="-",e++):(a=null,0===f&&k('"-"'))),a}function N(){var a,b,c,d,f,g,h,i,j;if(h=e,i=e,a=L(),null!==a){for(b=[],j=e,c=z(),null!==c?(d=O(),null!==d?(f=z(),null!==f?(g=L(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==c;)b.push(c),j=e,c=z(),null!==c?(d=O(),null!==d?(f=z(),null!==f?(g=L(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==b?a=[a,b]:(a=null,e=i)}else a=null,e=i;return null!==a&&(a=function(a,b,c){for(var d=b,e=0;c.length>e;e++)d={type:"Inequality",operator:c[e][1],left:d,right:c[e][3]};return d}(h,a[0],a[1])),null===a&&(e=h),a}function O(){var a;return"<="===b.substr(e,2)?(a="<=",e+=2):(a=null,0===f&&k('"<="')),null===a&&(">="===b.substr(e,2)?(a=">=",e+=2):(a=null,0===f&&k('">="')),null===a&&(60===b.charCodeAt(e)?(a="<",e++):(a=null,0===f&&k('"<"')),null===a&&(62===b.charCodeAt(e)?(a=">",e++):(a=null,0===f&&k('">"'))))),a}function P(){var a,c,d,g,h,i,j,l,m;if(j=e,l=e,a=N(),null!==a){for(c=[],m=e,d=z(),null!==d?("=="===b.substr(e,2)?(g="==",e+=2):(g=null,0===f&&k('"=="')),null!==g?(h=z(),null!==h?(i=N(),null!==i?d=[d,g,h,i]:(d=null,e=m)):(d=null,e=m)):(d=null,e=m)):(d=null,e=m);null!==d;)c.push(d),m=e,d=z(),null!==d?("=="===b.substr(e,2)?(g="==",e+=2):(g=null,0===f&&k('"=="')),null!==g?(h=z(),null!==h?(i=N(),null!==i?d=[d,g,h,i]:(d=null,e=m)):(d=null,e=m)):(d=null,e=m)):(d=null,e=m);null!==c?a=[a,c]:(a=null,e=l)}else a=null,e=l;return null!==a&&(a=function(a,b,c){for(var d=b,e=0;c.length>e;e++)d={type:"Equality",operator:c[e][1],left:d,right:c[e][3]};return d}(j,a[0],a[1])),null===a&&(e=j),a}function Q(a){a.sort();for(var b=null,c=[],d=0;a.length>d;d++)a[d]!==b&&(c.push(a[d]),b=a[d]);return c}function R(){for(var a=1,c=1,d=!1,f=0;Math.max(e,g)>f;f++){var h=b.charAt(f);"\n"===h?(d||a++,c=1,d=!1):"\r"===h||"\u2028"===h||"\u2029"===h?(a++,c=1,d=!0):(c++,d=!1)}return{line:a,column:c}}var d={start:l,Statement:m,SourceCharacter:n,IdentifierStart:o,WhiteSpace:p,LineTerminator:q,LineTerminatorSequence:r,EOS:s,EOF:t,Comment:u,MultiLineComment:v,MultiLineCommentNoLineTerminator:w,SingleLineComment:x,_:y,__:z,Literal:A,Integer:B,Real:C,SignedInteger:D,Identifier:E,IdentifierName:F,PrimaryExpression:G,UnaryExpression:H,UnaryOperator:I,MultiplicativeExpression:J,MultiplicativeOperator:K,AdditiveExpression:L,AdditiveOperator:M,InequalityExpression:N,InequalityOperator:O,LinearExpression:P};if(void 0!==c){if(void 0===d[c])throw Error("Invalid rule name: "+a(c)+".")}else c="start";var e=0,f=0,g=0,h=[],S=d[c]();if(null===S||e!==b.length){var T=Math.max(e,g),U=b.length>T?b.charAt(T):null,V=R();throw new this.SyntaxError(Q(h),U,T,V.line,V.column)}return S},toSource:function(){return this._source}};return b.SyntaxError=function(b,c,d,e,f){function g(b,c){var d,e;switch(b.length){case 0:d="end of input";break;case 1:d=b[0];break;default:d=b.slice(0,b.length-1).join(", ")+" or "+b[b.length-1]}return e=c?a(c):"end of input","Expected "+d+" but "+e+" found."}this.name="SyntaxError",this.expected=b,this.found=c,this.message=g(b,c),this.offset=d,this.line=e,this.column=f},b.SyntaxError.prototype=Error.prototype,b}();
}).call(
  ( true) ?
      (module.compiled =  true && module) : undefined
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/concat-map/index.js":
/*!******************************************!*\
  !*** ./node_modules/concat-map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/flux/index.js":
/*!************************************!*\
  !*** ./node_modules/flux/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = __webpack_require__(/*! ./lib/Dispatcher */ "./node_modules/flux/lib/Dispatcher.js");


/***/ }),

/***/ "./node_modules/flux/lib/Dispatcher.js":
/*!*********************************************!*\
  !*** ./node_modules/flux/lib/Dispatcher.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */



exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : undefined : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ?  true ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : undefined : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : undefined : undefined;
        continue;
      }
      !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : undefined : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ?  true ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : undefined : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;

/***/ }),

/***/ "./node_modules/minimatch/minimatch.js":
/*!*********************************************!*\
  !*** ./node_modules/minimatch/minimatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js")
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(/*! brace-expansion */ "./node_modules/brace-expansion/index.js")

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ "./node_modules/mousetrap/mousetrap.js":
/*!*********************************************!*\
  !*** ./node_modules/mousetrap/mousetrap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.2
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/raven-js/src/configError.js":
/*!**************************************************!*\
  !*** ./node_modules/raven-js/src/configError.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function RavenConfigError(message) {
  this.name = 'RavenConfigError';
  this.message = message;
}
RavenConfigError.prototype = new Error();
RavenConfigError.prototype.constructor = RavenConfigError;

module.exports = RavenConfigError;


/***/ }),

/***/ "./node_modules/raven-js/src/console.js":
/*!**********************************************!*\
  !*** ./node_modules/raven-js/src/console.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/raven-js/src/utils.js");

var wrapMethod = function(console, level, callback) {
  var originalConsoleLevel = console[level];
  var originalConsole = console;

  if (!(level in console)) {
    return;
  }

  var sentryLevel = level === 'warn' ? 'warning' : level;

  console[level] = function() {
    var args = [].slice.call(arguments);

    var msg = utils.safeJoin(args, ' ');
    var data = {level: sentryLevel, logger: 'console', extra: {arguments: args}};

    if (level === 'assert') {
      if (args[0] === false) {
        // Default browsers message
        msg =
          'Assertion failed: ' + (utils.safeJoin(args.slice(1), ' ') || 'console.assert');
        data.extra.arguments = args.slice(1);
        callback && callback(msg, data);
      }
    } else {
      callback && callback(msg, data);
    }

    // this fails for some browsers. :(
    if (originalConsoleLevel) {
      // IE9 doesn't allow calling apply on console functions directly
      // See: https://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function#answer-5473193
      Function.prototype.apply.call(originalConsoleLevel, originalConsole, args);
    }
  };
};

module.exports = {
  wrapMethod: wrapMethod
};


/***/ }),

/***/ "./node_modules/raven-js/src/raven.js":
/*!********************************************!*\
  !*** ./node_modules/raven-js/src/raven.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global XDomainRequest:false */

var TraceKit = __webpack_require__(/*! ../vendor/TraceKit/tracekit */ "./node_modules/raven-js/vendor/TraceKit/tracekit.js");
var stringify = __webpack_require__(/*! ../vendor/json-stringify-safe/stringify */ "./node_modules/raven-js/vendor/json-stringify-safe/stringify.js");
var md5 = __webpack_require__(/*! ../vendor/md5/md5 */ "./node_modules/raven-js/vendor/md5/md5.js");
var RavenConfigError = __webpack_require__(/*! ./configError */ "./node_modules/raven-js/src/configError.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/raven-js/src/utils.js");
var isErrorEvent = utils.isErrorEvent;
var isDOMError = utils.isDOMError;
var isDOMException = utils.isDOMException;
var isError = utils.isError;
var isObject = utils.isObject;
var isPlainObject = utils.isPlainObject;
var isUndefined = utils.isUndefined;
var isFunction = utils.isFunction;
var isString = utils.isString;
var isArray = utils.isArray;
var isEmptyObject = utils.isEmptyObject;
var each = utils.each;
var objectMerge = utils.objectMerge;
var truncate = utils.truncate;
var objectFrozen = utils.objectFrozen;
var hasKey = utils.hasKey;
var joinRegExp = utils.joinRegExp;
var urlencode = utils.urlencode;
var uuid4 = utils.uuid4;
var htmlTreeAsString = utils.htmlTreeAsString;
var isSameException = utils.isSameException;
var isSameStacktrace = utils.isSameStacktrace;
var parseUrl = utils.parseUrl;
var fill = utils.fill;
var supportsFetch = utils.supportsFetch;
var supportsReferrerPolicy = utils.supportsReferrerPolicy;
var serializeKeysForMessage = utils.serializeKeysForMessage;
var serializeException = utils.serializeException;
var sanitize = utils.sanitize;

var wrapConsoleMethod = __webpack_require__(/*! ./console */ "./node_modules/raven-js/src/console.js").wrapMethod;

var dsnKeys = 'source protocol user pass host port path'.split(' '),
  dsnPattern = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;

function now() {
  return +new Date();
}

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var _document = _window.document;
var _navigator = _window.navigator;

function keepOriginalCallback(original, callback) {
  return isFunction(callback)
    ? function(data) {
        return callback(data, original);
      }
    : callback;
}

// First, check for JSON support
// If there is no JSON, we no-op the core features of Raven
// since JSON is required to encode the payload
function Raven() {
  this._hasJSON = !!(typeof JSON === 'object' && JSON.stringify);
  // Raven can run in contexts where there's no document (react-native)
  this._hasDocument = !isUndefined(_document);
  this._hasNavigator = !isUndefined(_navigator);
  this._lastCapturedException = null;
  this._lastData = null;
  this._lastEventId = null;
  this._globalServer = null;
  this._globalKey = null;
  this._globalProject = null;
  this._globalContext = {};
  this._globalOptions = {
    // SENTRY_RELEASE can be injected by https://github.com/getsentry/sentry-webpack-plugin
    release: _window.SENTRY_RELEASE && _window.SENTRY_RELEASE.id,
    logger: 'javascript',
    ignoreErrors: [],
    ignoreUrls: [],
    whitelistUrls: [],
    includePaths: [],
    headers: null,
    collectWindowErrors: true,
    captureUnhandledRejections: true,
    maxMessageLength: 0,
    // By default, truncates URL values to 250 chars
    maxUrlLength: 250,
    stackTraceLimit: 50,
    autoBreadcrumbs: true,
    instrument: true,
    sampleRate: 1,
    sanitizeKeys: []
  };
  this._fetchDefaults = {
    method: 'POST',
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    referrerPolicy: supportsReferrerPolicy() ? 'origin' : ''
  };
  this._ignoreOnError = 0;
  this._isRavenInstalled = false;
  this._originalErrorStackTraceLimit = Error.stackTraceLimit;
  // capture references to window.console *and* all its methods first
  // before the console plugin has a chance to monkey patch
  this._originalConsole = _window.console || {};
  this._originalConsoleMethods = {};
  this._plugins = [];
  this._startTime = now();
  this._wrappedBuiltIns = [];
  this._breadcrumbs = [];
  this._lastCapturedEvent = null;
  this._keypressTimeout;
  this._location = _window.location;
  this._lastHref = this._location && this._location.href;
  this._resetBackoff();

  // eslint-disable-next-line guard-for-in
  for (var method in this._originalConsole) {
    this._originalConsoleMethods[method] = this._originalConsole[method];
  }
}

/*
 * The core Raven singleton
 *
 * @this {Raven}
 */

Raven.prototype = {
  // Hardcode version string so that raven source can be loaded directly via
  // webpack (using a build step causes webpack #1617). Grunt verifies that
  // this value matches package.json during build.
  //   See: https://github.com/getsentry/raven-js/issues/465
  VERSION: '3.27.0',

  debug: false,

  TraceKit: TraceKit, // alias to TraceKit

  /*
     * Configure Raven with a DSN and extra options
     *
     * @param {string} dsn The public Sentry DSN
     * @param {object} options Set of global options [optional]
     * @return {Raven}
     */
  config: function(dsn, options) {
    var self = this;

    if (self._globalServer) {
      this._logDebug('error', 'Error: Raven has already been configured');
      return self;
    }
    if (!dsn) return self;

    var globalOptions = self._globalOptions;

    // merge in options
    if (options) {
      each(options, function(key, value) {
        // tags and extra are special and need to be put into context
        if (key === 'tags' || key === 'extra' || key === 'user') {
          self._globalContext[key] = value;
        } else {
          globalOptions[key] = value;
        }
      });
    }

    self.setDSN(dsn);

    // "Script error." is hard coded into browsers for errors that it can't read.
    // this is the result of a script being pulled in from an external domain and CORS.
    globalOptions.ignoreErrors.push(/^Script error\.?$/);
    globalOptions.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/);

    // join regexp rules into one big rule
    globalOptions.ignoreErrors = joinRegExp(globalOptions.ignoreErrors);
    globalOptions.ignoreUrls = globalOptions.ignoreUrls.length
      ? joinRegExp(globalOptions.ignoreUrls)
      : false;
    globalOptions.whitelistUrls = globalOptions.whitelistUrls.length
      ? joinRegExp(globalOptions.whitelistUrls)
      : false;
    globalOptions.includePaths = joinRegExp(globalOptions.includePaths);
    globalOptions.maxBreadcrumbs = Math.max(
      0,
      Math.min(globalOptions.maxBreadcrumbs || 100, 100)
    ); // default and hard limit is 100

    var autoBreadcrumbDefaults = {
      xhr: true,
      console: true,
      dom: true,
      location: true,
      sentry: true
    };

    var autoBreadcrumbs = globalOptions.autoBreadcrumbs;
    if ({}.toString.call(autoBreadcrumbs) === '[object Object]') {
      autoBreadcrumbs = objectMerge(autoBreadcrumbDefaults, autoBreadcrumbs);
    } else if (autoBreadcrumbs !== false) {
      autoBreadcrumbs = autoBreadcrumbDefaults;
    }
    globalOptions.autoBreadcrumbs = autoBreadcrumbs;

    var instrumentDefaults = {
      tryCatch: true
    };

    var instrument = globalOptions.instrument;
    if ({}.toString.call(instrument) === '[object Object]') {
      instrument = objectMerge(instrumentDefaults, instrument);
    } else if (instrument !== false) {
      instrument = instrumentDefaults;
    }
    globalOptions.instrument = instrument;

    TraceKit.collectWindowErrors = !!globalOptions.collectWindowErrors;

    // return for chaining
    return self;
  },

  /*
     * Installs a global window.onerror error handler
     * to capture and report uncaught exceptions.
     * At this point, install() is required to be called due
     * to the way TraceKit is set up.
     *
     * @return {Raven}
     */
  install: function() {
    var self = this;
    if (self.isSetup() && !self._isRavenInstalled) {
      TraceKit.report.subscribe(function() {
        self._handleOnErrorStackInfo.apply(self, arguments);
      });

      if (self._globalOptions.captureUnhandledRejections) {
        self._attachPromiseRejectionHandler();
      }

      self._patchFunctionToString();

      if (self._globalOptions.instrument && self._globalOptions.instrument.tryCatch) {
        self._instrumentTryCatch();
      }

      if (self._globalOptions.autoBreadcrumbs) self._instrumentBreadcrumbs();

      // Install all of the plugins
      self._drainPlugins();

      self._isRavenInstalled = true;
    }

    Error.stackTraceLimit = self._globalOptions.stackTraceLimit;
    return this;
  },

  /*
     * Set the DSN (can be called multiple time unlike config)
     *
     * @param {string} dsn The public Sentry DSN
     */
  setDSN: function(dsn) {
    var self = this,
      uri = self._parseDSN(dsn),
      lastSlash = uri.path.lastIndexOf('/'),
      path = uri.path.substr(1, lastSlash);

    self._dsn = dsn;
    self._globalKey = uri.user;
    self._globalSecret = uri.pass && uri.pass.substr(1);
    self._globalProject = uri.path.substr(lastSlash + 1);

    self._globalServer = self._getGlobalServer(uri);

    self._globalEndpoint =
      self._globalServer + '/' + path + 'api/' + self._globalProject + '/store/';

    // Reset backoff state since we may be pointing at a
    // new project/server
    this._resetBackoff();
  },

  /*
     * Wrap code within a context so Raven can capture errors
     * reliably across domains that is executed immediately.
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The callback to be immediately executed within the context
     * @param {array} args An array of arguments to be called with the callback [optional]
     */
  context: function(options, func, args) {
    if (isFunction(options)) {
      args = func || [];
      func = options;
      options = {};
    }

    return this.wrap(options, func).apply(this, args);
  },

  /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @param {function} _before A function to call before the try/catch wrapper [optional, private]
     * @return {function} The newly wrapped functions with a context
     */
  wrap: function(options, func, _before) {
    var self = this;
    // 1 argument has been passed, and it's not a function
    // so just return it
    if (isUndefined(func) && !isFunction(options)) {
      return options;
    }

    // options is optional
    if (isFunction(options)) {
      func = options;
      options = undefined;
    }

    // At this point, we've passed along 2 arguments, and the second one
    // is not a function either, so we'll just return the second argument.
    if (!isFunction(func)) {
      return func;
    }

    // We don't wanna wrap it twice!
    try {
      if (func.__raven__) {
        return func;
      }

      // If this has already been wrapped in the past, return that
      if (func.__raven_wrapper__) {
        return func.__raven_wrapper__;
      }
    } catch (e) {
      // Just accessing custom props in some Selenium environments
      // can cause a "Permission denied" exception (see raven-js#495).
      // Bail on wrapping and return the function as-is (defers to window.onerror).
      return func;
    }

    function wrapped() {
      var args = [],
        i = arguments.length,
        deep = !options || (options && options.deep !== false);

      if (_before && isFunction(_before)) {
        _before.apply(this, arguments);
      }

      // Recursively wrap all of a function's arguments that are
      // functions themselves.
      while (i--) args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];

      try {
        // Attempt to invoke user-land function
        // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
        //       means Raven caught an error invoking your application code. This is
        //       expected behavior and NOT indicative of a bug with Raven.js.
        return func.apply(this, args);
      } catch (e) {
        self._ignoreNextOnError();
        self.captureException(e, options);
        throw e;
      }
    }

    // copy over properties of the old function
    for (var property in func) {
      if (hasKey(func, property)) {
        wrapped[property] = func[property];
      }
    }
    wrapped.prototype = func.prototype;

    func.__raven_wrapper__ = wrapped;
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    wrapped.__raven__ = true;
    wrapped.__orig__ = func;

    return wrapped;
  },

  /**
   * Uninstalls the global error handler.
   *
   * @return {Raven}
   */
  uninstall: function() {
    TraceKit.report.uninstall();

    this._detachPromiseRejectionHandler();
    this._unpatchFunctionToString();
    this._restoreBuiltIns();
    this._restoreConsole();

    Error.stackTraceLimit = this._originalErrorStackTraceLimit;
    this._isRavenInstalled = false;

    return this;
  },

  /**
   * Callback used for `unhandledrejection` event
   *
   * @param {PromiseRejectionEvent} event An object containing
   *   promise: the Promise that was rejected
   *   reason: the value with which the Promise was rejected
   * @return void
   */
  _promiseRejectionHandler: function(event) {
    this._logDebug('debug', 'Raven caught unhandled promise rejection:', event);
    this.captureException(event.reason, {
      mechanism: {
        type: 'onunhandledrejection',
        handled: false
      }
    });
  },

  /**
   * Installs the global promise rejection handler.
   *
   * @return {raven}
   */
  _attachPromiseRejectionHandler: function() {
    this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this);
    _window.addEventListener &&
      _window.addEventListener('unhandledrejection', this._promiseRejectionHandler);
    return this;
  },

  /**
   * Uninstalls the global promise rejection handler.
   *
   * @return {raven}
   */
  _detachPromiseRejectionHandler: function() {
    _window.removeEventListener &&
      _window.removeEventListener('unhandledrejection', this._promiseRejectionHandler);
    return this;
  },

  /**
   * Manually capture an exception and send it over to Sentry
   *
   * @param {error} ex An exception to be logged
   * @param {object} options A specific set of options for this error [optional]
   * @return {Raven}
   */
  captureException: function(ex, options) {
    options = objectMerge({trimHeadFrames: 0}, options ? options : {});

    if (isErrorEvent(ex) && ex.error) {
      // If it is an ErrorEvent with `error` property, extract it to get actual Error
      ex = ex.error;
    } else if (isDOMError(ex) || isDOMException(ex)) {
      // If it is a DOMError or DOMException (which are legacy APIs, but still supported in some browsers)
      // then we just extract the name and message, as they don't provide anything else
      // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
      // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
      var name = ex.name || (isDOMError(ex) ? 'DOMError' : 'DOMException');
      var message = ex.message ? name + ': ' + ex.message : name;

      return this.captureMessage(
        message,
        objectMerge(options, {
          // neither DOMError or DOMException provide stack trace and we most likely wont get it this way as well
          // but it's barely any overhead so we may at least try
          stacktrace: true,
          trimHeadFrames: options.trimHeadFrames + 1
        })
      );
    } else if (isError(ex)) {
      // we have a real Error object
      ex = ex;
    } else if (isPlainObject(ex)) {
      // If it is plain Object, serialize it manually and extract options
      // This will allow us to group events based on top-level keys
      // which is much better than creating new group when any key/value change
      options = this._getCaptureExceptionOptionsFromPlainObject(options, ex);
      ex = new Error(options.message);
    } else {
      // If none of previous checks were valid, then it means that
      // it's not a DOMError/DOMException
      // it's not a plain Object
      // it's not a valid ErrorEvent (one with an error property)
      // it's not an Error
      // So bail out and capture it as a simple message:
      return this.captureMessage(
        ex,
        objectMerge(options, {
          stacktrace: true, // if we fall back to captureMessage, default to attempting a new trace
          trimHeadFrames: options.trimHeadFrames + 1
        })
      );
    }

    // Store the raw exception object for potential debugging and introspection
    this._lastCapturedException = ex;

    // TraceKit.report will re-raise any exception passed to it,
    // which means you have to wrap it in try/catch. Instead, we
    // can wrap it here and only re-raise if TraceKit.report
    // raises an exception different from the one we asked to
    // report on.
    try {
      var stack = TraceKit.computeStackTrace(ex);
      this._handleStackInfo(stack, options);
    } catch (ex1) {
      if (ex !== ex1) {
        throw ex1;
      }
    }

    return this;
  },

  _getCaptureExceptionOptionsFromPlainObject: function(currentOptions, ex) {
    var exKeys = Object.keys(ex).sort();
    var options = objectMerge(currentOptions, {
      message:
        'Non-Error exception captured with keys: ' + serializeKeysForMessage(exKeys),
      fingerprint: [md5(exKeys)],
      extra: currentOptions.extra || {}
    });
    options.extra.__serialized__ = serializeException(ex);

    return options;
  },

  /*
     * Manually send a message to Sentry
     *
     * @param {string} msg A plain message to be captured in Sentry
     * @param {object} options A specific set of options for this message [optional]
     * @return {Raven}
     */
  captureMessage: function(msg, options) {
    // config() automagically converts ignoreErrors from a list to a RegExp so we need to test for an
    // early call; we'll error on the side of logging anything called before configuration since it's
    // probably something you should see:
    if (
      !!this._globalOptions.ignoreErrors.test &&
      this._globalOptions.ignoreErrors.test(msg)
    ) {
      return;
    }

    options = options || {};
    msg = msg + ''; // Make sure it's actually a string

    var data = objectMerge(
      {
        message: msg
      },
      options
    );

    var ex;
    // Generate a "synthetic" stack trace from this point.
    // NOTE: If you are a Sentry user, and you are seeing this stack frame, it is NOT indicative
    //       of a bug with Raven.js. Sentry generates synthetic traces either by configuration,
    //       or if it catches a thrown object without a "stack" property.
    try {
      throw new Error(msg);
    } catch (ex1) {
      ex = ex1;
    }

    // null exception name so `Error` isn't prefixed to msg
    ex.name = null;
    var stack = TraceKit.computeStackTrace(ex);

    // stack[0] is `throw new Error(msg)` call itself, we are interested in the frame that was just before that, stack[1]
    var initialCall = isArray(stack.stack) && stack.stack[1];

    // if stack[1] is `Raven.captureException`, it means that someone passed a string to it and we redirected that call
    // to be handled by `captureMessage`, thus `initialCall` is the 3rd one, not 2nd
    // initialCall => captureException(string) => captureMessage(string)
    if (initialCall && initialCall.func === 'Raven.captureException') {
      initialCall = stack.stack[2];
    }

    var fileurl = (initialCall && initialCall.url) || '';

    if (
      !!this._globalOptions.ignoreUrls.test &&
      this._globalOptions.ignoreUrls.test(fileurl)
    ) {
      return;
    }

    if (
      !!this._globalOptions.whitelistUrls.test &&
      !this._globalOptions.whitelistUrls.test(fileurl)
    ) {
      return;
    }

    // Always attempt to get stacktrace if message is empty.
    // It's the only way to provide any helpful information to the user.
    if (this._globalOptions.stacktrace || options.stacktrace || data.message === '') {
      // fingerprint on msg, not stack trace (legacy behavior, could be revisited)
      data.fingerprint = data.fingerprint == null ? msg : data.fingerprint;

      options = objectMerge(
        {
          trimHeadFrames: 0
        },
        options
      );
      // Since we know this is a synthetic trace, the top frame (this function call)
      // MUST be from Raven.js, so mark it for trimming
      // We add to the trim counter so that callers can choose to trim extra frames, such
      // as utility functions.
      options.trimHeadFrames += 1;

      var frames = this._prepareFrames(stack, options);
      data.stacktrace = {
        // Sentry expects frames oldest to newest
        frames: frames.reverse()
      };
    }

    // Make sure that fingerprint is always wrapped in an array
    if (data.fingerprint) {
      data.fingerprint = isArray(data.fingerprint)
        ? data.fingerprint
        : [data.fingerprint];
    }

    // Fire away!
    this._send(data);

    return this;
  },

  captureBreadcrumb: function(obj) {
    var crumb = objectMerge(
      {
        timestamp: now() / 1000
      },
      obj
    );

    if (isFunction(this._globalOptions.breadcrumbCallback)) {
      var result = this._globalOptions.breadcrumbCallback(crumb);

      if (isObject(result) && !isEmptyObject(result)) {
        crumb = result;
      } else if (result === false) {
        return this;
      }
    }

    this._breadcrumbs.push(crumb);
    if (this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs) {
      this._breadcrumbs.shift();
    }
    return this;
  },

  addPlugin: function(plugin /*arg1, arg2, ... argN*/) {
    var pluginArgs = [].slice.call(arguments, 1);

    this._plugins.push([plugin, pluginArgs]);
    if (this._isRavenInstalled) {
      this._drainPlugins();
    }

    return this;
  },

  /*
     * Set/clear a user to be sent along with the payload.
     *
     * @param {object} user An object representing user data [optional]
     * @return {Raven}
     */
  setUserContext: function(user) {
    // Intentionally do not merge here since that's an unexpected behavior.
    this._globalContext.user = user;

    return this;
  },

  /*
     * Merge extra attributes to be sent along with the payload.
     *
     * @param {object} extra An object representing extra data [optional]
     * @return {Raven}
     */
  setExtraContext: function(extra) {
    this._mergeContext('extra', extra);

    return this;
  },

  /*
     * Merge tags to be sent along with the payload.
     *
     * @param {object} tags An object representing tags [optional]
     * @return {Raven}
     */
  setTagsContext: function(tags) {
    this._mergeContext('tags', tags);

    return this;
  },

  /*
     * Clear all of the context.
     *
     * @return {Raven}
     */
  clearContext: function() {
    this._globalContext = {};

    return this;
  },

  /*
     * Get a copy of the current context. This cannot be mutated.
     *
     * @return {object} copy of context
     */
  getContext: function() {
    // lol javascript
    return JSON.parse(stringify(this._globalContext));
  },

  /*
     * Set environment of application
     *
     * @param {string} environment Typically something like 'production'.
     * @return {Raven}
     */
  setEnvironment: function(environment) {
    this._globalOptions.environment = environment;

    return this;
  },

  /*
     * Set release version of application
     *
     * @param {string} release Typically something like a git SHA to identify version
     * @return {Raven}
     */
  setRelease: function(release) {
    this._globalOptions.release = release;

    return this;
  },

  /*
     * Set the dataCallback option
     *
     * @param {function} callback The callback to run which allows the
     *                            data blob to be mutated before sending
     * @return {Raven}
     */
  setDataCallback: function(callback) {
    var original = this._globalOptions.dataCallback;
    this._globalOptions.dataCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /*
     * Set the breadcrumbCallback option
     *
     * @param {function} callback The callback to run which allows filtering
     *                            or mutating breadcrumbs
     * @return {Raven}
     */
  setBreadcrumbCallback: function(callback) {
    var original = this._globalOptions.breadcrumbCallback;
    this._globalOptions.breadcrumbCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /*
     * Set the shouldSendCallback option
     *
     * @param {function} callback The callback to run which allows
     *                            introspecting the blob before sending
     * @return {Raven}
     */
  setShouldSendCallback: function(callback) {
    var original = this._globalOptions.shouldSendCallback;
    this._globalOptions.shouldSendCallback = keepOriginalCallback(original, callback);
    return this;
  },

  /**
   * Override the default HTTP transport mechanism that transmits data
   * to the Sentry server.
   *
   * @param {function} transport Function invoked instead of the default
   *                             `makeRequest` handler.
   *
   * @return {Raven}
   */
  setTransport: function(transport) {
    this._globalOptions.transport = transport;

    return this;
  },

  /*
     * Get the latest raw exception that was captured by Raven.
     *
     * @return {error}
     */
  lastException: function() {
    return this._lastCapturedException;
  },

  /*
     * Get the last event id
     *
     * @return {string}
     */
  lastEventId: function() {
    return this._lastEventId;
  },

  /*
     * Determine if Raven is setup and ready to go.
     *
     * @return {boolean}
     */
  isSetup: function() {
    if (!this._hasJSON) return false; // needs JSON support
    if (!this._globalServer) {
      if (!this.ravenNotConfiguredError) {
        this.ravenNotConfiguredError = true;
        this._logDebug('error', 'Error: Raven has not been configured.');
      }
      return false;
    }
    return true;
  },

  afterLoad: function() {
    // TODO: remove window dependence?

    // Attempt to initialize Raven on load
    var RavenConfig = _window.RavenConfig;
    if (RavenConfig) {
      this.config(RavenConfig.dsn, RavenConfig.config).install();
    }
  },

  showReportDialog: function(options) {
    if (
      !_document // doesn't work without a document (React native)
    )
      return;

    options = objectMerge(
      {
        eventId: this.lastEventId(),
        dsn: this._dsn,
        user: this._globalContext.user || {}
      },
      options
    );

    if (!options.eventId) {
      throw new RavenConfigError('Missing eventId');
    }

    if (!options.dsn) {
      throw new RavenConfigError('Missing DSN');
    }

    var encode = encodeURIComponent;
    var encodedOptions = [];

    for (var key in options) {
      if (key === 'user') {
        var user = options.user;
        if (user.name) encodedOptions.push('name=' + encode(user.name));
        if (user.email) encodedOptions.push('email=' + encode(user.email));
      } else {
        encodedOptions.push(encode(key) + '=' + encode(options[key]));
      }
    }
    var globalServer = this._getGlobalServer(this._parseDSN(options.dsn));

    var script = _document.createElement('script');
    script.async = true;
    script.src = globalServer + '/api/embed/error-page/?' + encodedOptions.join('&');
    (_document.head || _document.body).appendChild(script);
  },

  /**** Private functions ****/
  _ignoreNextOnError: function() {
    var self = this;
    this._ignoreOnError += 1;
    setTimeout(function() {
      // onerror should trigger before setTimeout
      self._ignoreOnError -= 1;
    });
  },

  _triggerEvent: function(eventType, options) {
    // NOTE: `event` is a native browser thing, so let's avoid conflicting wiht it
    var evt, key;

    if (!this._hasDocument) return;

    options = options || {};

    eventType = 'raven' + eventType.substr(0, 1).toUpperCase() + eventType.substr(1);

    if (_document.createEvent) {
      evt = _document.createEvent('HTMLEvents');
      evt.initEvent(eventType, true, true);
    } else {
      evt = _document.createEventObject();
      evt.eventType = eventType;
    }

    for (key in options)
      if (hasKey(options, key)) {
        evt[key] = options[key];
      }

    if (_document.createEvent) {
      // IE9 if standards
      _document.dispatchEvent(evt);
    } else {
      // IE8 regardless of Quirks or Standards
      // IE9 if quirks
      try {
        _document.fireEvent('on' + evt.eventType.toLowerCase(), evt);
      } catch (e) {
        // Do nothing
      }
    }
  },

  /**
   * Wraps addEventListener to capture UI breadcrumbs
   * @param evtName the event name (e.g. "click")
   * @returns {Function}
   * @private
   */
  _breadcrumbEventHandler: function(evtName) {
    var self = this;
    return function(evt) {
      // reset keypress timeout; e.g. triggering a 'click' after
      // a 'keypress' will reset the keypress debounce so that a new
      // set of keypresses can be recorded
      self._keypressTimeout = null;

      // It's possible this handler might trigger multiple times for the same
      // event (e.g. event propagation through node ancestors). Ignore if we've
      // already captured the event.
      if (self._lastCapturedEvent === evt) return;

      self._lastCapturedEvent = evt;

      // try/catch both:
      // - accessing evt.target (see getsentry/raven-js#838, #768)
      // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
      //   can throw an exception in some circumstances.
      var target;
      try {
        target = htmlTreeAsString(evt.target);
      } catch (e) {
        target = '<unknown>';
      }

      self.captureBreadcrumb({
        category: 'ui.' + evtName, // e.g. ui.click, ui.input
        message: target
      });
    };
  },

  /**
   * Wraps addEventListener to capture keypress UI events
   * @returns {Function}
   * @private
   */
  _keypressEventHandler: function() {
    var self = this,
      debounceDuration = 1000; // milliseconds

    // TODO: if somehow user switches keypress target before
    //       debounce timeout is triggered, we will only capture
    //       a single breadcrumb from the FIRST target (acceptable?)
    return function(evt) {
      var target;
      try {
        target = evt.target;
      } catch (e) {
        // just accessing event properties can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/raven-js/issues/838
        return;
      }
      var tagName = target && target.tagName;

      // only consider keypress events on actual input elements
      // this will disregard keypresses targeting body (e.g. tabbing
      // through elements, hotkeys, etc)
      if (
        !tagName ||
        (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable)
      )
        return;

      // record first keypress in a series, but ignore subsequent
      // keypresses until debounce clears
      var timeout = self._keypressTimeout;
      if (!timeout) {
        self._breadcrumbEventHandler('input')(evt);
      }
      clearTimeout(timeout);
      self._keypressTimeout = setTimeout(function() {
        self._keypressTimeout = null;
      }, debounceDuration);
    };
  },

  /**
   * Captures a breadcrumb of type "navigation", normalizing input URLs
   * @param to the originating URL
   * @param from the target URL
   * @private
   */
  _captureUrlChange: function(from, to) {
    var parsedLoc = parseUrl(this._location.href);
    var parsedTo = parseUrl(to);
    var parsedFrom = parseUrl(from);

    // because onpopstate only tells you the "new" (to) value of location.href, and
    // not the previous (from) value, we need to track the value of the current URL
    // state ourselves
    this._lastHref = to;

    // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host)
      to = parsedTo.relative;
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host)
      from = parsedFrom.relative;

    this.captureBreadcrumb({
      category: 'navigation',
      data: {
        to: to,
        from: from
      }
    });
  },

  _patchFunctionToString: function() {
    var self = this;
    self._originalFunctionToString = Function.prototype.toString;
    // eslint-disable-next-line no-extend-native
    Function.prototype.toString = function() {
      if (typeof this === 'function' && this.__raven__) {
        return self._originalFunctionToString.apply(this.__orig__, arguments);
      }
      return self._originalFunctionToString.apply(this, arguments);
    };
  },

  _unpatchFunctionToString: function() {
    if (this._originalFunctionToString) {
      // eslint-disable-next-line no-extend-native
      Function.prototype.toString = this._originalFunctionToString;
    }
  },

  /**
   * Wrap timer functions and event targets to catch errors and provide
   * better metadata.
   */
  _instrumentTryCatch: function() {
    var self = this;

    var wrappedBuiltIns = self._wrappedBuiltIns;

    function wrapTimeFn(orig) {
      return function(fn, t) {
        // preserve arity
        // Make a copy of the arguments to prevent deoptimization
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }
        var originalCallback = args[0];
        if (isFunction(originalCallback)) {
          args[0] = self.wrap(
            {
              mechanism: {
                type: 'instrument',
                data: {function: orig.name || '<anonymous>'}
              }
            },
            originalCallback
          );
        }

        // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
        // also supports only two arguments and doesn't care what this is, so we
        // can just call the original function directly.
        if (orig.apply) {
          return orig.apply(this, args);
        } else {
          return orig(args[0], args[1]);
        }
      };
    }

    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

    function wrapEventTarget(global) {
      var proto = _window[global] && _window[global].prototype;
      if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
        fill(
          proto,
          'addEventListener',
          function(orig) {
            return function(evtName, fn, capture, secure) {
              // preserve arity
              try {
                if (fn && fn.handleEvent) {
                  fn.handleEvent = self.wrap(
                    {
                      mechanism: {
                        type: 'instrument',
                        data: {
                          target: global,
                          function: 'handleEvent',
                          handler: (fn && fn.name) || '<anonymous>'
                        }
                      }
                    },
                    fn.handleEvent
                  );
                }
              } catch (err) {
                // can sometimes get 'Permission denied to access property "handle Event'
              }

              // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
              // so that we don't have more than one wrapper function
              var before, clickHandler, keypressHandler;

              if (
                autoBreadcrumbs &&
                autoBreadcrumbs.dom &&
                (global === 'EventTarget' || global === 'Node')
              ) {
                // NOTE: generating multiple handlers per addEventListener invocation, should
                //       revisit and verify we can just use one (almost certainly)
                clickHandler = self._breadcrumbEventHandler('click');
                keypressHandler = self._keypressEventHandler();
                before = function(evt) {
                  // need to intercept every DOM event in `before` argument, in case that
                  // same wrapped method is re-used for different events (e.g. mousemove THEN click)
                  // see #724
                  if (!evt) return;

                  var eventType;
                  try {
                    eventType = evt.type;
                  } catch (e) {
                    // just accessing event properties can throw an exception in some rare circumstances
                    // see: https://github.com/getsentry/raven-js/issues/838
                    return;
                  }
                  if (eventType === 'click') return clickHandler(evt);
                  else if (eventType === 'keypress') return keypressHandler(evt);
                };
              }
              return orig.call(
                this,
                evtName,
                self.wrap(
                  {
                    mechanism: {
                      type: 'instrument',
                      data: {
                        target: global,
                        function: 'addEventListener',
                        handler: (fn && fn.name) || '<anonymous>'
                      }
                    }
                  },
                  fn,
                  before
                ),
                capture,
                secure
              );
            };
          },
          wrappedBuiltIns
        );
        fill(
          proto,
          'removeEventListener',
          function(orig) {
            return function(evt, fn, capture, secure) {
              try {
                fn = fn && (fn.__raven_wrapper__ ? fn.__raven_wrapper__ : fn);
              } catch (e) {
                // ignore, accessing __raven_wrapper__ will throw in some Selenium environments
              }
              return orig.call(this, evt, fn, capture, secure);
            };
          },
          wrappedBuiltIns
        );
      }
    }

    fill(_window, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
    fill(_window, 'setInterval', wrapTimeFn, wrappedBuiltIns);
    if (_window.requestAnimationFrame) {
      fill(
        _window,
        'requestAnimationFrame',
        function(orig) {
          return function(cb) {
            return orig(
              self.wrap(
                {
                  mechanism: {
                    type: 'instrument',
                    data: {
                      function: 'requestAnimationFrame',
                      handler: (orig && orig.name) || '<anonymous>'
                    }
                  }
                },
                cb
              )
            );
          };
        },
        wrappedBuiltIns
      );
    }

    // event targets borrowed from bugsnag-js:
    // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666
    var eventTargets = [
      'EventTarget',
      'Window',
      'Node',
      'ApplicationCache',
      'AudioTrackList',
      'ChannelMergerNode',
      'CryptoOperation',
      'EventSource',
      'FileReader',
      'HTMLUnknownElement',
      'IDBDatabase',
      'IDBRequest',
      'IDBTransaction',
      'KeyOperation',
      'MediaController',
      'MessagePort',
      'ModalWindow',
      'Notification',
      'SVGElementInstance',
      'Screen',
      'TextTrack',
      'TextTrackCue',
      'TextTrackList',
      'WebSocket',
      'WebSocketWorker',
      'Worker',
      'XMLHttpRequest',
      'XMLHttpRequestEventTarget',
      'XMLHttpRequestUpload'
    ];
    for (var i = 0; i < eventTargets.length; i++) {
      wrapEventTarget(eventTargets[i]);
    }
  },

  /**
   * Instrument browser built-ins w/ breadcrumb capturing
   *  - XMLHttpRequests
   *  - DOM interactions (click/typing)
   *  - window.location changes
   *  - console
   *
   * Can be disabled or individually configured via the `autoBreadcrumbs` config option
   */
  _instrumentBreadcrumbs: function() {
    var self = this;
    var autoBreadcrumbs = this._globalOptions.autoBreadcrumbs;

    var wrappedBuiltIns = self._wrappedBuiltIns;

    function wrapProp(prop, xhr) {
      if (prop in xhr && isFunction(xhr[prop])) {
        fill(xhr, prop, function(orig) {
          return self.wrap(
            {
              mechanism: {
                type: 'instrument',
                data: {function: prop, handler: (orig && orig.name) || '<anonymous>'}
              }
            },
            orig
          );
        }); // intentionally don't track filled methods on XHR instances
      }
    }

    if (autoBreadcrumbs.xhr && 'XMLHttpRequest' in _window) {
      var xhrproto = _window.XMLHttpRequest && _window.XMLHttpRequest.prototype;
      fill(
        xhrproto,
        'open',
        function(origOpen) {
          return function(method, url) {
            // preserve arity

            // if Sentry key appears in URL, don't capture
            if (isString(url) && url.indexOf(self._globalKey) === -1) {
              this.__raven_xhr = {
                method: method,
                url: url,
                status_code: null
              };
            }

            return origOpen.apply(this, arguments);
          };
        },
        wrappedBuiltIns
      );

      fill(
        xhrproto,
        'send',
        function(origSend) {
          return function() {
            // preserve arity
            var xhr = this;

            function onreadystatechangeHandler() {
              if (xhr.__raven_xhr && xhr.readyState === 4) {
                try {
                  // touching statusCode in some platforms throws
                  // an exception
                  xhr.__raven_xhr.status_code = xhr.status;
                } catch (e) {
                  /* do nothing */
                }

                self.captureBreadcrumb({
                  type: 'http',
                  category: 'xhr',
                  data: xhr.__raven_xhr
                });
              }
            }

            var props = ['onload', 'onerror', 'onprogress'];
            for (var j = 0; j < props.length; j++) {
              wrapProp(props[j], xhr);
            }

            if ('onreadystatechange' in xhr && isFunction(xhr.onreadystatechange)) {
              fill(
                xhr,
                'onreadystatechange',
                function(orig) {
                  return self.wrap(
                    {
                      mechanism: {
                        type: 'instrument',
                        data: {
                          function: 'onreadystatechange',
                          handler: (orig && orig.name) || '<anonymous>'
                        }
                      }
                    },
                    orig,
                    onreadystatechangeHandler
                  );
                } /* intentionally don't track this instrumentation */
              );
            } else {
              // if onreadystatechange wasn't actually set by the page on this xhr, we
              // are free to set our own and capture the breadcrumb
              xhr.onreadystatechange = onreadystatechangeHandler;
            }

            return origSend.apply(this, arguments);
          };
        },
        wrappedBuiltIns
      );
    }

    if (autoBreadcrumbs.xhr && supportsFetch()) {
      fill(
        _window,
        'fetch',
        function(origFetch) {
          return function() {
            // preserve arity
            // Make a copy of the arguments to prevent deoptimization
            // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; ++i) {
              args[i] = arguments[i];
            }

            var fetchInput = args[0];
            var method = 'GET';
            var url;

            if (typeof fetchInput === 'string') {
              url = fetchInput;
            } else if ('Request' in _window && fetchInput instanceof _window.Request) {
              url = fetchInput.url;
              if (fetchInput.method) {
                method = fetchInput.method;
              }
            } else {
              url = '' + fetchInput;
            }

            // if Sentry key appears in URL, don't capture, as it's our own request
            if (url.indexOf(self._globalKey) !== -1) {
              return origFetch.apply(this, args);
            }

            if (args[1] && args[1].method) {
              method = args[1].method;
            }

            var fetchData = {
              method: method,
              url: url,
              status_code: null
            };

            return origFetch
              .apply(this, args)
              .then(function(response) {
                fetchData.status_code = response.status;

                self.captureBreadcrumb({
                  type: 'http',
                  category: 'fetch',
                  data: fetchData
                });

                return response;
              })
              ['catch'](function(err) {
                // if there is an error performing the request
                self.captureBreadcrumb({
                  type: 'http',
                  category: 'fetch',
                  data: fetchData,
                  level: 'error'
                });

                throw err;
              });
          };
        },
        wrappedBuiltIns
      );
    }

    // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
    // to the document. Do this before we instrument addEventListener.
    if (autoBreadcrumbs.dom && this._hasDocument) {
      if (_document.addEventListener) {
        _document.addEventListener('click', self._breadcrumbEventHandler('click'), false);
        _document.addEventListener('keypress', self._keypressEventHandler(), false);
      } else if (_document.attachEvent) {
        // IE8 Compatibility
        _document.attachEvent('onclick', self._breadcrumbEventHandler('click'));
        _document.attachEvent('onkeypress', self._keypressEventHandler());
      }
    }

    // record navigation (URL) changes
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var chrome = _window.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    var hasPushAndReplaceState =
      !isChromePackagedApp &&
      _window.history &&
      _window.history.pushState &&
      _window.history.replaceState;
    if (autoBreadcrumbs.location && hasPushAndReplaceState) {
      // TODO: remove onpopstate handler on uninstall()
      var oldOnPopState = _window.onpopstate;
      _window.onpopstate = function() {
        var currentHref = self._location.href;
        self._captureUrlChange(self._lastHref, currentHref);

        if (oldOnPopState) {
          return oldOnPopState.apply(this, arguments);
        }
      };

      var historyReplacementFunction = function(origHistFunction) {
        // note history.pushState.length is 0; intentionally not declaring
        // params to preserve 0 arity
        return function(/* state, title, url */) {
          var url = arguments.length > 2 ? arguments[2] : undefined;

          // url argument is optional
          if (url) {
            // coerce to string (this is what pushState does)
            self._captureUrlChange(self._lastHref, url + '');
          }

          return origHistFunction.apply(this, arguments);
        };
      };

      fill(_window.history, 'pushState', historyReplacementFunction, wrappedBuiltIns);
      fill(_window.history, 'replaceState', historyReplacementFunction, wrappedBuiltIns);
    }

    if (autoBreadcrumbs.console && 'console' in _window && console.log) {
      // console
      var consoleMethodCallback = function(msg, data) {
        self.captureBreadcrumb({
          message: msg,
          level: data.level,
          category: 'console'
        });
      };

      each(['debug', 'info', 'warn', 'error', 'log'], function(_, level) {
        wrapConsoleMethod(console, level, consoleMethodCallback);
      });
    }
  },

  _restoreBuiltIns: function() {
    // restore any wrapped builtins
    var builtin;
    while (this._wrappedBuiltIns.length) {
      builtin = this._wrappedBuiltIns.shift();

      var obj = builtin[0],
        name = builtin[1],
        orig = builtin[2];

      obj[name] = orig;
    }
  },

  _restoreConsole: function() {
    // eslint-disable-next-line guard-for-in
    for (var method in this._originalConsoleMethods) {
      this._originalConsole[method] = this._originalConsoleMethods[method];
    }
  },

  _drainPlugins: function() {
    var self = this;

    // FIX ME TODO
    each(this._plugins, function(_, plugin) {
      var installer = plugin[0];
      var args = plugin[1];
      installer.apply(self, [self].concat(args));
    });
  },

  _parseDSN: function(str) {
    var m = dsnPattern.exec(str),
      dsn = {},
      i = 7;

    try {
      while (i--) dsn[dsnKeys[i]] = m[i] || '';
    } catch (e) {
      throw new RavenConfigError('Invalid DSN: ' + str);
    }

    if (dsn.pass && !this._globalOptions.allowSecretKey) {
      throw new RavenConfigError(
        'Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key'
      );
    }

    return dsn;
  },

  _getGlobalServer: function(uri) {
    // assemble the endpoint from the uri pieces
    var globalServer = '//' + uri.host + (uri.port ? ':' + uri.port : '');

    if (uri.protocol) {
      globalServer = uri.protocol + ':' + globalServer;
    }
    return globalServer;
  },

  _handleOnErrorStackInfo: function(stackInfo, options) {
    options = options || {};
    options.mechanism = options.mechanism || {
      type: 'onerror',
      handled: false
    };

    // if we are intentionally ignoring errors via onerror, bail out
    if (!this._ignoreOnError) {
      this._handleStackInfo(stackInfo, options);
    }
  },

  _handleStackInfo: function(stackInfo, options) {
    var frames = this._prepareFrames(stackInfo, options);

    this._triggerEvent('handle', {
      stackInfo: stackInfo,
      options: options
    });

    this._processException(
      stackInfo.name,
      stackInfo.message,
      stackInfo.url,
      stackInfo.lineno,
      frames,
      options
    );
  },

  _prepareFrames: function(stackInfo, options) {
    var self = this;
    var frames = [];
    if (stackInfo.stack && stackInfo.stack.length) {
      each(stackInfo.stack, function(i, stack) {
        var frame = self._normalizeFrame(stack, stackInfo.url);
        if (frame) {
          frames.push(frame);
        }
      });

      // e.g. frames captured via captureMessage throw
      if (options && options.trimHeadFrames) {
        for (var j = 0; j < options.trimHeadFrames && j < frames.length; j++) {
          frames[j].in_app = false;
        }
      }
    }
    frames = frames.slice(0, this._globalOptions.stackTraceLimit);
    return frames;
  },

  _normalizeFrame: function(frame, stackInfoUrl) {
    // normalize the frames data
    var normalized = {
      filename: frame.url,
      lineno: frame.line,
      colno: frame.column,
      function: frame.func || '?'
    };

    // Case when we don't have any information about the error
    // E.g. throwing a string or raw object, instead of an `Error` in Firefox
    // Generating synthetic error doesn't add any value here
    //
    // We should probably somehow let a user know that they should fix their code
    if (!frame.url) {
      normalized.filename = stackInfoUrl; // fallback to whole stacks url from onerror handler
    }

    normalized.in_app = !// determine if an exception came from outside of our app
    // first we check the global includePaths list.
    (
      (!!this._globalOptions.includePaths.test &&
        !this._globalOptions.includePaths.test(normalized.filename)) ||
      // Now we check for fun, if the function name is Raven or TraceKit
      /(Raven|TraceKit)\./.test(normalized['function']) ||
      // finally, we do a last ditch effort and check for raven.min.js
      /raven\.(min\.)?js$/.test(normalized.filename)
    );

    return normalized;
  },

  _processException: function(type, message, fileurl, lineno, frames, options) {
    var prefixedMessage = (type ? type + ': ' : '') + (message || '');
    if (
      !!this._globalOptions.ignoreErrors.test &&
      (this._globalOptions.ignoreErrors.test(message) ||
        this._globalOptions.ignoreErrors.test(prefixedMessage))
    ) {
      return;
    }

    var stacktrace;

    if (frames && frames.length) {
      fileurl = frames[0].filename || fileurl;
      // Sentry expects frames oldest to newest
      // and JS sends them as newest to oldest
      frames.reverse();
      stacktrace = {frames: frames};
    } else if (fileurl) {
      stacktrace = {
        frames: [
          {
            filename: fileurl,
            lineno: lineno,
            in_app: true
          }
        ]
      };
    }

    if (
      !!this._globalOptions.ignoreUrls.test &&
      this._globalOptions.ignoreUrls.test(fileurl)
    ) {
      return;
    }

    if (
      !!this._globalOptions.whitelistUrls.test &&
      !this._globalOptions.whitelistUrls.test(fileurl)
    ) {
      return;
    }

    var data = objectMerge(
      {
        // sentry.interfaces.Exception
        exception: {
          values: [
            {
              type: type,
              value: message,
              stacktrace: stacktrace
            }
          ]
        },
        transaction: fileurl
      },
      options
    );

    var ex = data.exception.values[0];
    if (ex.type == null && ex.value === '') {
      ex.value = 'Unrecoverable error caught';
    }

    // Move mechanism from options to exception interface
    // We do this, as requiring user to pass `{exception:{mechanism:{ ... }}}` would be
    // too much
    if (!data.exception.mechanism && data.mechanism) {
      data.exception.mechanism = data.mechanism;
      delete data.mechanism;
    }

    data.exception.mechanism = objectMerge(
      {
        type: 'generic',
        handled: true
      },
      data.exception.mechanism || {}
    );

    // Fire away!
    this._send(data);
  },

  _trimPacket: function(data) {
    // For now, we only want to truncate the two different messages
    // but this could/should be expanded to just trim everything
    var max = this._globalOptions.maxMessageLength;
    if (data.message) {
      data.message = truncate(data.message, max);
    }
    if (data.exception) {
      var exception = data.exception.values[0];
      exception.value = truncate(exception.value, max);
    }

    var request = data.request;
    if (request) {
      if (request.url) {
        request.url = truncate(request.url, this._globalOptions.maxUrlLength);
      }
      if (request.Referer) {
        request.Referer = truncate(request.Referer, this._globalOptions.maxUrlLength);
      }
    }

    if (data.breadcrumbs && data.breadcrumbs.values)
      this._trimBreadcrumbs(data.breadcrumbs);

    return data;
  },

  /**
   * Truncate breadcrumb values (right now just URLs)
   */
  _trimBreadcrumbs: function(breadcrumbs) {
    // known breadcrumb properties with urls
    // TODO: also consider arbitrary prop values that start with (https?)?://
    var urlProps = ['to', 'from', 'url'],
      urlProp,
      crumb,
      data;

    for (var i = 0; i < breadcrumbs.values.length; ++i) {
      crumb = breadcrumbs.values[i];
      if (
        !crumb.hasOwnProperty('data') ||
        !isObject(crumb.data) ||
        objectFrozen(crumb.data)
      )
        continue;

      data = objectMerge({}, crumb.data);
      for (var j = 0; j < urlProps.length; ++j) {
        urlProp = urlProps[j];
        if (data.hasOwnProperty(urlProp) && data[urlProp]) {
          data[urlProp] = truncate(data[urlProp], this._globalOptions.maxUrlLength);
        }
      }
      breadcrumbs.values[i].data = data;
    }
  },

  _getHttpData: function() {
    if (!this._hasNavigator && !this._hasDocument) return;
    var httpData = {};

    if (this._hasNavigator && _navigator.userAgent) {
      httpData.headers = {
        'User-Agent': _navigator.userAgent
      };
    }

    // Check in `window` instead of `document`, as we may be in ServiceWorker environment
    if (_window.location && _window.location.href) {
      httpData.url = _window.location.href;
    }

    if (this._hasDocument && _document.referrer) {
      if (!httpData.headers) httpData.headers = {};
      httpData.headers.Referer = _document.referrer;
    }

    return httpData;
  },

  _resetBackoff: function() {
    this._backoffDuration = 0;
    this._backoffStart = null;
  },

  _shouldBackoff: function() {
    return this._backoffDuration && now() - this._backoffStart < this._backoffDuration;
  },

  /**
   * Returns true if the in-process data payload matches the signature
   * of the previously-sent data
   *
   * NOTE: This has to be done at this level because TraceKit can generate
   *       data from window.onerror WITHOUT an exception object (IE8, IE9,
   *       other old browsers). This can take the form of an "exception"
   *       data object with a single frame (derived from the onerror args).
   */
  _isRepeatData: function(current) {
    var last = this._lastData;

    if (
      !last ||
      current.message !== last.message || // defined for captureMessage
      current.transaction !== last.transaction // defined for captureException/onerror
    )
      return false;

    // Stacktrace interface (i.e. from captureMessage)
    if (current.stacktrace || last.stacktrace) {
      return isSameStacktrace(current.stacktrace, last.stacktrace);
    } else if (current.exception || last.exception) {
      // Exception interface (i.e. from captureException/onerror)
      return isSameException(current.exception, last.exception);
    }

    return true;
  },

  _setBackoffState: function(request) {
    // If we are already in a backoff state, don't change anything
    if (this._shouldBackoff()) {
      return;
    }

    var status = request.status;

    // 400 - project_id doesn't exist or some other fatal
    // 401 - invalid/revoked dsn
    // 429 - too many requests
    if (!(status === 400 || status === 401 || status === 429)) return;

    var retry;
    try {
      // If Retry-After is not in Access-Control-Expose-Headers, most
      // browsers will throw an exception trying to access it
      if (supportsFetch()) {
        retry = request.headers.get('Retry-After');
      } else {
        retry = request.getResponseHeader('Retry-After');
      }

      // Retry-After is returned in seconds
      retry = parseInt(retry, 10) * 1000;
    } catch (e) {
      /* eslint no-empty:0 */
    }

    this._backoffDuration = retry
      ? // If Sentry server returned a Retry-After value, use it
        retry
      : // Otherwise, double the last backoff duration (starts at 1 sec)
        this._backoffDuration * 2 || 1000;

    this._backoffStart = now();
  },

  _send: function(data) {
    var globalOptions = this._globalOptions;

    var baseData = {
        project: this._globalProject,
        logger: globalOptions.logger,
        platform: 'javascript'
      },
      httpData = this._getHttpData();

    if (httpData) {
      baseData.request = httpData;
    }

    // HACK: delete `trimHeadFrames` to prevent from appearing in outbound payload
    if (data.trimHeadFrames) delete data.trimHeadFrames;

    data = objectMerge(baseData, data);

    // Merge in the tags and extra separately since objectMerge doesn't handle a deep merge
    data.tags = objectMerge(objectMerge({}, this._globalContext.tags), data.tags);
    data.extra = objectMerge(objectMerge({}, this._globalContext.extra), data.extra);

    // Send along our own collected metadata with extra
    data.extra['session:duration'] = now() - this._startTime;

    if (this._breadcrumbs && this._breadcrumbs.length > 0) {
      // intentionally make shallow copy so that additions
      // to breadcrumbs aren't accidentally sent in this request
      data.breadcrumbs = {
        values: [].slice.call(this._breadcrumbs, 0)
      };
    }

    if (this._globalContext.user) {
      // sentry.interfaces.User
      data.user = this._globalContext.user;
    }

    // Include the environment if it's defined in globalOptions
    if (globalOptions.environment) data.environment = globalOptions.environment;

    // Include the release if it's defined in globalOptions
    if (globalOptions.release) data.release = globalOptions.release;

    // Include server_name if it's defined in globalOptions
    if (globalOptions.serverName) data.server_name = globalOptions.serverName;

    data = this._sanitizeData(data);

    // Cleanup empty properties before sending them to the server
    Object.keys(data).forEach(function(key) {
      if (data[key] == null || data[key] === '' || isEmptyObject(data[key])) {
        delete data[key];
      }
    });

    if (isFunction(globalOptions.dataCallback)) {
      data = globalOptions.dataCallback(data) || data;
    }

    // Why??????????
    if (!data || isEmptyObject(data)) {
      return;
    }

    // Check if the request should be filtered or not
    if (
      isFunction(globalOptions.shouldSendCallback) &&
      !globalOptions.shouldSendCallback(data)
    ) {
      return;
    }

    // Backoff state: Sentry server previously responded w/ an error (e.g. 429 - too many requests),
    // so drop requests until "cool-off" period has elapsed.
    if (this._shouldBackoff()) {
      this._logDebug('warn', 'Raven dropped error due to backoff: ', data);
      return;
    }

    if (typeof globalOptions.sampleRate === 'number') {
      if (Math.random() < globalOptions.sampleRate) {
        this._sendProcessedPayload(data);
      }
    } else {
      this._sendProcessedPayload(data);
    }
  },

  _sanitizeData: function(data) {
    return sanitize(data, this._globalOptions.sanitizeKeys);
  },

  _getUuid: function() {
    return uuid4();
  },

  _sendProcessedPayload: function(data, callback) {
    var self = this;
    var globalOptions = this._globalOptions;

    if (!this.isSetup()) return;

    // Try and clean up the packet before sending by truncating long values
    data = this._trimPacket(data);

    // ideally duplicate error testing should occur *before* dataCallback/shouldSendCallback,
    // but this would require copying an un-truncated copy of the data packet, which can be
    // arbitrarily deep (extra_data) -- could be worthwhile? will revisit
    if (!this._globalOptions.allowDuplicates && this._isRepeatData(data)) {
      this._logDebug('warn', 'Raven dropped repeat event: ', data);
      return;
    }

    // Send along an event_id if not explicitly passed.
    // This event_id can be used to reference the error within Sentry itself.
    // Set lastEventId after we know the error should actually be sent
    this._lastEventId = data.event_id || (data.event_id = this._getUuid());

    // Store outbound payload after trim
    this._lastData = data;

    this._logDebug('debug', 'Raven about to send:', data);

    var auth = {
      sentry_version: '7',
      sentry_client: 'raven-js/' + this.VERSION,
      sentry_key: this._globalKey
    };

    if (this._globalSecret) {
      auth.sentry_secret = this._globalSecret;
    }

    var exception = data.exception && data.exception.values[0];

    // only capture 'sentry' breadcrumb is autoBreadcrumbs is truthy
    if (
      this._globalOptions.autoBreadcrumbs &&
      this._globalOptions.autoBreadcrumbs.sentry
    ) {
      this.captureBreadcrumb({
        category: 'sentry',
        message: exception
          ? (exception.type ? exception.type + ': ' : '') + exception.value
          : data.message,
        event_id: data.event_id,
        level: data.level || 'error' // presume error unless specified
      });
    }

    var url = this._globalEndpoint;
    (globalOptions.transport || this._makeRequest).call(this, {
      url: url,
      auth: auth,
      data: data,
      options: globalOptions,
      onSuccess: function success() {
        self._resetBackoff();

        self._triggerEvent('success', {
          data: data,
          src: url
        });
        callback && callback();
      },
      onError: function failure(error) {
        self._logDebug('error', 'Raven transport failed to send: ', error);

        if (error.request) {
          self._setBackoffState(error.request);
        }

        self._triggerEvent('failure', {
          data: data,
          src: url
        });
        error = error || new Error('Raven send failed (no additional details provided)');
        callback && callback(error);
      }
    });
  },

  _makeRequest: function(opts) {
    // Auth is intentionally sent as part of query string (NOT as custom HTTP header) to avoid preflight CORS requests
    var url = opts.url + '?' + urlencode(opts.auth);

    var evaluatedHeaders = null;
    var evaluatedFetchParameters = {};

    if (opts.options.headers) {
      evaluatedHeaders = this._evaluateHash(opts.options.headers);
    }

    if (opts.options.fetchParameters) {
      evaluatedFetchParameters = this._evaluateHash(opts.options.fetchParameters);
    }

    if (supportsFetch()) {
      evaluatedFetchParameters.body = stringify(opts.data);

      var defaultFetchOptions = objectMerge({}, this._fetchDefaults);
      var fetchOptions = objectMerge(defaultFetchOptions, evaluatedFetchParameters);

      if (evaluatedHeaders) {
        fetchOptions.headers = evaluatedHeaders;
      }

      return _window
        .fetch(url, fetchOptions)
        .then(function(response) {
          if (response.ok) {
            opts.onSuccess && opts.onSuccess();
          } else {
            var error = new Error('Sentry error code: ' + response.status);
            // It's called request only to keep compatibility with XHR interface
            // and not add more redundant checks in setBackoffState method
            error.request = response;
            opts.onError && opts.onError(error);
          }
        })
        ['catch'](function() {
          opts.onError &&
            opts.onError(new Error('Sentry error code: network unavailable'));
        });
    }

    var request = _window.XMLHttpRequest && new _window.XMLHttpRequest();
    if (!request) return;

    // if browser doesn't support CORS (e.g. IE7), we are out of luck
    var hasCORS = 'withCredentials' in request || typeof XDomainRequest !== 'undefined';

    if (!hasCORS) return;

    if ('withCredentials' in request) {
      request.onreadystatechange = function() {
        if (request.readyState !== 4) {
          return;
        } else if (request.status === 200) {
          opts.onSuccess && opts.onSuccess();
        } else if (opts.onError) {
          var err = new Error('Sentry error code: ' + request.status);
          err.request = request;
          opts.onError(err);
        }
      };
    } else {
      request = new XDomainRequest();
      // xdomainrequest cannot go http -> https (or vice versa),
      // so always use protocol relative
      url = url.replace(/^https?:/, '');

      // onreadystatechange not supported by XDomainRequest
      if (opts.onSuccess) {
        request.onload = opts.onSuccess;
      }
      if (opts.onError) {
        request.onerror = function() {
          var err = new Error('Sentry error code: XDomainRequest');
          err.request = request;
          opts.onError(err);
        };
      }
    }

    request.open('POST', url);

    if (evaluatedHeaders) {
      each(evaluatedHeaders, function(key, value) {
        request.setRequestHeader(key, value);
      });
    }

    request.send(stringify(opts.data));
  },

  _evaluateHash: function(hash) {
    var evaluated = {};

    for (var key in hash) {
      if (hash.hasOwnProperty(key)) {
        var value = hash[key];
        evaluated[key] = typeof value === 'function' ? value() : value;
      }
    }

    return evaluated;
  },

  _logDebug: function(level) {
    // We allow `Raven.debug` and `Raven.config(DSN, { debug: true })` to not make backward incompatible API change
    if (
      this._originalConsoleMethods[level] &&
      (this.debug || this._globalOptions.debug)
    ) {
      // In IE<10 console methods do not have their own 'apply' method
      Function.prototype.apply.call(
        this._originalConsoleMethods[level],
        this._originalConsole,
        [].slice.call(arguments, 1)
      );
    }
  },

  _mergeContext: function(key, context) {
    if (isUndefined(context)) {
      delete this._globalContext[key];
    } else {
      this._globalContext[key] = objectMerge(this._globalContext[key] || {}, context);
    }
  }
};

// Deprecations
Raven.prototype.setUser = Raven.prototype.setUserContext;
Raven.prototype.setReleaseContext = Raven.prototype.setRelease;

module.exports = Raven;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/raven-js/src/singleton.js":
/*!************************************************!*\
  !*** ./node_modules/raven-js/src/singleton.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Enforces a single instance of the Raven client, and the
 * main entry point for Raven. If you are a consumer of the
 * Raven library, you SHOULD load this file (vs raven.js).
 **/

var RavenConstructor = __webpack_require__(/*! ./raven */ "./node_modules/raven-js/src/raven.js");

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var _Raven = _window.Raven;

var Raven = new RavenConstructor();

/*
 * Allow multiple versions of Raven to be installed.
 * Strip Raven from the global context and returns the instance.
 *
 * @return {Raven}
 */
Raven.noConflict = function() {
  _window.Raven = _Raven;
  return Raven;
};

Raven.afterLoad();

module.exports = Raven;

/**
 * DISCLAIMER:
 *
 * Expose `Client` constructor for cases where user want to track multiple "sub-applications" in one larger app.
 * It's not meant to be used by a wide audience, so pleaaase make sure that you know what you're doing before using it.
 * Accidentally calling `install` multiple times, may result in an unexpected behavior that's very hard to debug.
 *
 * It's called `Client' to be in-line with Raven Node implementation.
 *
 * HOWTO:
 *
 * import Raven from 'raven-js';
 *
 * const someAppReporter = new Raven.Client();
 * const someOtherAppReporter = new Raven.Client();
 *
 * someAppReporter.config('__DSN__', {
 *   ...config goes here
 * });
 *
 * someOtherAppReporter.config('__OTHER_DSN__', {
 *   ...config goes here
 * });
 *
 * someAppReporter.captureMessage(...);
 * someAppReporter.captureException(...);
 * someAppReporter.captureBreadcrumb(...);
 *
 * someOtherAppReporter.captureMessage(...);
 * someOtherAppReporter.captureException(...);
 * someOtherAppReporter.captureBreadcrumb(...);
 *
 * It should "just work".
 */
module.exports.Client = RavenConstructor;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/raven-js/src/utils.js":
/*!********************************************!*\
  !*** ./node_modules/raven-js/src/utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var stringify = __webpack_require__(/*! ../vendor/json-stringify-safe/stringify */ "./node_modules/raven-js/vendor/json-stringify-safe/stringify.js");

var _window =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
        ? self
        : {};

function isObject(what) {
  return typeof what === 'object' && what !== null;
}

// Yanked from https://git.io/vS8DV re-used under CC0
// with some tiny modifications
function isError(value) {
  switch (Object.prototype.toString.call(value)) {
    case '[object Error]':
      return true;
    case '[object Exception]':
      return true;
    case '[object DOMException]':
      return true;
    default:
      return value instanceof Error;
  }
}

function isErrorEvent(value) {
  return Object.prototype.toString.call(value) === '[object ErrorEvent]';
}

function isDOMError(value) {
  return Object.prototype.toString.call(value) === '[object DOMError]';
}

function isDOMException(value) {
  return Object.prototype.toString.call(value) === '[object DOMException]';
}

function isUndefined(what) {
  return what === void 0;
}

function isFunction(what) {
  return typeof what === 'function';
}

function isPlainObject(what) {
  return Object.prototype.toString.call(what) === '[object Object]';
}

function isString(what) {
  return Object.prototype.toString.call(what) === '[object String]';
}

function isArray(what) {
  return Object.prototype.toString.call(what) === '[object Array]';
}

function isEmptyObject(what) {
  if (!isPlainObject(what)) return false;

  for (var _ in what) {
    if (what.hasOwnProperty(_)) {
      return false;
    }
  }
  return true;
}

function supportsErrorEvent() {
  try {
    new ErrorEvent(''); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}

function supportsDOMError() {
  try {
    new DOMError(''); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}

function supportsDOMException() {
  try {
    new DOMException(''); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}

function supportsFetch() {
  if (!('fetch' in _window)) return false;

  try {
    new Headers(); // eslint-disable-line no-new
    new Request(''); // eslint-disable-line no-new
    new Response(); // eslint-disable-line no-new
    return true;
  } catch (e) {
    return false;
  }
}

// Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
// https://caniuse.com/#feat=referrer-policy
// It doesn't. And it throw exception instead of ignoring this parameter...
// REF: https://github.com/getsentry/raven-js/issues/1233
function supportsReferrerPolicy() {
  if (!supportsFetch()) return false;

  try {
    // eslint-disable-next-line no-new
    new Request('pickleRick', {
      referrerPolicy: 'origin'
    });
    return true;
  } catch (e) {
    return false;
  }
}

function supportsPromiseRejectionEvent() {
  return typeof PromiseRejectionEvent === 'function';
}

function wrappedCallback(callback) {
  function dataCallback(data, original) {
    var normalizedData = callback(data) || data;
    if (original) {
      return original(normalizedData) || normalizedData;
    }
    return normalizedData;
  }

  return dataCallback;
}

function each(obj, callback) {
  var i, j;

  if (isUndefined(obj.length)) {
    for (i in obj) {
      if (hasKey(obj, i)) {
        callback.call(null, i, obj[i]);
      }
    }
  } else {
    j = obj.length;
    if (j) {
      for (i = 0; i < j; i++) {
        callback.call(null, i, obj[i]);
      }
    }
  }
}

function objectMerge(obj1, obj2) {
  if (!obj2) {
    return obj1;
  }
  each(obj2, function(key, value) {
    obj1[key] = value;
  });
  return obj1;
}

/**
 * This function is only used for react-native.
 * react-native freezes object that have already been sent over the
 * js bridge. We need this function in order to check if the object is frozen.
 * So it's ok that objectFrozen returns false if Object.isFrozen is not
 * supported because it's not relevant for other "platforms". See related issue:
 * https://github.com/getsentry/react-native-sentry/issues/57
 */
function objectFrozen(obj) {
  if (!Object.isFrozen) {
    return false;
  }
  return Object.isFrozen(obj);
}

function truncate(str, max) {
  if (typeof max !== 'number') {
    throw new Error('2nd argument to `truncate` function should be a number');
  }
  if (typeof str !== 'string' || max === 0) {
    return str;
  }
  return str.length <= max ? str : str.substr(0, max) + '\u2026';
}

/**
 * hasKey, a better form of hasOwnProperty
 * Example: hasKey(MainHostObject, property) === true/false
 *
 * @param {Object} host object to check property
 * @param {string} key to check
 */
function hasKey(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function joinRegExp(patterns) {
  // Combine an array of regular expressions and strings into one large regexp
  // Be mad.
  var sources = [],
    i = 0,
    len = patterns.length,
    pattern;

  for (; i < len; i++) {
    pattern = patterns[i];
    if (isString(pattern)) {
      // If it's a string, we need to escape it
      // Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
      sources.push(pattern.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'));
    } else if (pattern && pattern.source) {
      // If it's a regexp already, we want to extract the source
      sources.push(pattern.source);
    }
    // Intentionally skip other cases
  }
  return new RegExp(sources.join('|'), 'i');
}

function urlencode(o) {
  var pairs = [];
  each(o, function(key, value) {
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  });
  return pairs.join('&');
}

// borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
// intentionally using regex and not <a/> href parsing trick because React Native and other
// environments where DOM might not be available
function parseUrl(url) {
  if (typeof url !== 'string') return {};
  var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);

  // coerce to undefined values to empty string so we don't get 'undefined'
  var query = match[6] || '';
  var fragment = match[8] || '';
  return {
    protocol: match[2],
    host: match[4],
    path: match[5],
    relative: match[5] + query + fragment // everything minus origin
  };
}
function uuid4() {
  var crypto = _window.crypto || _window.msCrypto;

  if (!isUndefined(crypto) && crypto.getRandomValues) {
    // Use window.crypto API if available
    // eslint-disable-next-line no-undef
    var arr = new Uint16Array(8);
    crypto.getRandomValues(arr);

    // set 4 in byte 7
    arr[3] = (arr[3] & 0xfff) | 0x4000;
    // set 2 most significant bits of byte 9 to '10'
    arr[4] = (arr[4] & 0x3fff) | 0x8000;

    var pad = function(num) {
      var v = num.toString(16);
      while (v.length < 4) {
        v = '0' + v;
      }
      return v;
    };

    return (
      pad(arr[0]) +
      pad(arr[1]) +
      pad(arr[2]) +
      pad(arr[3]) +
      pad(arr[4]) +
      pad(arr[5]) +
      pad(arr[6]) +
      pad(arr[7])
    );
  } else {
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @param elem
 * @returns {string}
 */
function htmlTreeAsString(elem) {
  /* eslint no-extra-parens:0*/
  var MAX_TRAVERSE_HEIGHT = 5,
    MAX_OUTPUT_LEN = 80,
    out = [],
    height = 0,
    len = 0,
    separator = ' > ',
    sepLength = separator.length,
    nextStr;

  while (elem && height++ < MAX_TRAVERSE_HEIGHT) {
    nextStr = htmlElementAsString(elem);
    // bail out if
    // - nextStr is the 'html' element
    // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
    //   (ignore this limit if we are on the first iteration)
    if (
      nextStr === 'html' ||
      (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)
    ) {
      break;
    }

    out.push(nextStr);

    len += nextStr.length;
    elem = elem.parentNode;
  }

  return out.reverse().join(separator);
}

/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @param HTMLElement
 * @returns {string}
 */
function htmlElementAsString(elem) {
  var out = [],
    className,
    classes,
    key,
    attr,
    i;

  if (!elem || !elem.tagName) {
    return '';
  }

  out.push(elem.tagName.toLowerCase());
  if (elem.id) {
    out.push('#' + elem.id);
  }

  className = elem.className;
  if (className && isString(className)) {
    classes = className.split(/\s+/);
    for (i = 0; i < classes.length; i++) {
      out.push('.' + classes[i]);
    }
  }
  var attrWhitelist = ['type', 'name', 'title', 'alt'];
  for (i = 0; i < attrWhitelist.length; i++) {
    key = attrWhitelist[i];
    attr = elem.getAttribute(key);
    if (attr) {
      out.push('[' + key + '="' + attr + '"]');
    }
  }
  return out.join('');
}

/**
 * Returns true if either a OR b is truthy, but not both
 */
function isOnlyOneTruthy(a, b) {
  return !!(!!a ^ !!b);
}

/**
 * Returns true if both parameters are undefined
 */
function isBothUndefined(a, b) {
  return isUndefined(a) && isUndefined(b);
}

/**
 * Returns true if the two input exception interfaces have the same content
 */
function isSameException(ex1, ex2) {
  if (isOnlyOneTruthy(ex1, ex2)) return false;

  ex1 = ex1.values[0];
  ex2 = ex2.values[0];

  if (ex1.type !== ex2.type || ex1.value !== ex2.value) return false;

  // in case both stacktraces are undefined, we can't decide so default to false
  if (isBothUndefined(ex1.stacktrace, ex2.stacktrace)) return false;

  return isSameStacktrace(ex1.stacktrace, ex2.stacktrace);
}

/**
 * Returns true if the two input stack trace interfaces have the same content
 */
function isSameStacktrace(stack1, stack2) {
  if (isOnlyOneTruthy(stack1, stack2)) return false;

  var frames1 = stack1.frames;
  var frames2 = stack2.frames;

  // Exit early if stacktrace is malformed
  if (frames1 === undefined || frames2 === undefined) return false;

  // Exit early if frame count differs
  if (frames1.length !== frames2.length) return false;

  // Iterate through every frame; bail out if anything differs
  var a, b;
  for (var i = 0; i < frames1.length; i++) {
    a = frames1[i];
    b = frames2[i];
    if (
      a.filename !== b.filename ||
      a.lineno !== b.lineno ||
      a.colno !== b.colno ||
      a['function'] !== b['function']
    )
      return false;
  }
  return true;
}

/**
 * Polyfill a method
 * @param obj object e.g. `document`
 * @param name method name present on object e.g. `addEventListener`
 * @param replacement replacement function
 * @param track {optional} record instrumentation to an array
 */
function fill(obj, name, replacement, track) {
  if (obj == null) return;
  var orig = obj[name];
  obj[name] = replacement(orig);
  obj[name].__raven__ = true;
  obj[name].__orig__ = orig;
  if (track) {
    track.push([obj, name, orig]);
  }
}

/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns {string}
 */
function safeJoin(input, delimiter) {
  if (!isArray(input)) return '';

  var output = [];

  for (var i = 0; i < input.length; i++) {
    try {
      output.push(String(input[i]));
    } catch (e) {
      output.push('[value cannot be serialized]');
    }
  }

  return output.join(delimiter);
}

// Default Node.js REPL depth
var MAX_SERIALIZE_EXCEPTION_DEPTH = 3;
// 50kB, as 100kB is max payload size, so half sounds reasonable
var MAX_SERIALIZE_EXCEPTION_SIZE = 50 * 1024;
var MAX_SERIALIZE_KEYS_LENGTH = 40;

function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}

function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}

function serializeValue(value) {
  if (typeof value === 'string') {
    var maxLength = 40;
    return truncate(value, maxLength);
  } else if (
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined'
  ) {
    return value;
  }

  var type = Object.prototype.toString.call(value);

  // Node.js REPL notation
  if (type === '[object Object]') return '[Object]';
  if (type === '[object Array]') return '[Array]';
  if (type === '[object Function]')
    return value.name ? '[Function: ' + value.name + ']' : '[Function]';

  return value;
}

function serializeObject(value, depth) {
  if (depth === 0) return serializeValue(value);

  if (isPlainObject(value)) {
    return Object.keys(value).reduce(function(acc, key) {
      acc[key] = serializeObject(value[key], depth - 1);
      return acc;
    }, {});
  } else if (Array.isArray(value)) {
    return value.map(function(val) {
      return serializeObject(val, depth - 1);
    });
  }

  return serializeValue(value);
}

function serializeException(ex, depth, maxSize) {
  if (!isPlainObject(ex)) return ex;

  depth = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_DEPTH : depth;
  maxSize = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_SIZE : maxSize;

  var serialized = serializeObject(ex, depth);

  if (jsonSize(stringify(serialized)) > maxSize) {
    return serializeException(ex, depth - 1);
  }

  return serialized;
}

function serializeKeysForMessage(keys, maxLength) {
  if (typeof keys === 'number' || typeof keys === 'string') return keys.toString();
  if (!Array.isArray(keys)) return '';

  keys = keys.filter(function(key) {
    return typeof key === 'string';
  });
  if (keys.length === 0) return '[object has no keys]';

  maxLength = typeof maxLength !== 'number' ? MAX_SERIALIZE_KEYS_LENGTH : maxLength;
  if (keys[0].length >= maxLength) return keys[0];

  for (var usedKeys = keys.length; usedKeys > 0; usedKeys--) {
    var serialized = keys.slice(0, usedKeys).join(', ');
    if (serialized.length > maxLength) continue;
    if (usedKeys === keys.length) return serialized;
    return serialized + '\u2026';
  }

  return '';
}

function sanitize(input, sanitizeKeys) {
  if (!isArray(sanitizeKeys) || (isArray(sanitizeKeys) && sanitizeKeys.length === 0))
    return input;

  var sanitizeRegExp = joinRegExp(sanitizeKeys);
  var sanitizeMask = '********';
  var safeInput;

  try {
    safeInput = JSON.parse(stringify(input));
  } catch (o_O) {
    return input;
  }

  function sanitizeWorker(workerInput) {
    if (isArray(workerInput)) {
      return workerInput.map(function(val) {
        return sanitizeWorker(val);
      });
    }

    if (isPlainObject(workerInput)) {
      return Object.keys(workerInput).reduce(function(acc, k) {
        if (sanitizeRegExp.test(k)) {
          acc[k] = sanitizeMask;
        } else {
          acc[k] = sanitizeWorker(workerInput[k]);
        }
        return acc;
      }, {});
    }

    return workerInput;
  }

  return sanitizeWorker(safeInput);
}

module.exports = {
  isObject: isObject,
  isError: isError,
  isErrorEvent: isErrorEvent,
  isDOMError: isDOMError,
  isDOMException: isDOMException,
  isUndefined: isUndefined,
  isFunction: isFunction,
  isPlainObject: isPlainObject,
  isString: isString,
  isArray: isArray,
  isEmptyObject: isEmptyObject,
  supportsErrorEvent: supportsErrorEvent,
  supportsDOMError: supportsDOMError,
  supportsDOMException: supportsDOMException,
  supportsFetch: supportsFetch,
  supportsReferrerPolicy: supportsReferrerPolicy,
  supportsPromiseRejectionEvent: supportsPromiseRejectionEvent,
  wrappedCallback: wrappedCallback,
  each: each,
  objectMerge: objectMerge,
  truncate: truncate,
  objectFrozen: objectFrozen,
  hasKey: hasKey,
  joinRegExp: joinRegExp,
  urlencode: urlencode,
  uuid4: uuid4,
  htmlTreeAsString: htmlTreeAsString,
  htmlElementAsString: htmlElementAsString,
  isSameException: isSameException,
  isSameStacktrace: isSameStacktrace,
  parseUrl: parseUrl,
  fill: fill,
  safeJoin: safeJoin,
  serializeException: serializeException,
  serializeKeysForMessage: serializeKeysForMessage,
  sanitize: sanitize
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/raven-js/vendor/TraceKit/tracekit.js":
/*!***********************************************************!*\
  !*** ./node_modules/raven-js/vendor/TraceKit/tracekit.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var utils = __webpack_require__(/*! ../../src/utils */ "./node_modules/raven-js/src/utils.js");

/*
 TraceKit - Cross brower stack traces

 This was originally forked from github.com/occ/TraceKit, but has since been
 largely re-written and is now maintained as part of raven-js.  Tests for
 this are in test/vendor.

 MIT license
*/

var TraceKit = {
  collectWindowErrors: true,
  debug: false
};

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

// global reference to slice
var _slice = [].slice;
var UNKNOWN_FUNCTION = '?';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

function getLocationHref() {
  if (typeof document === 'undefined' || document.location == null) return '';
  return document.location.href;
}

function getLocationOrigin() {
  if (typeof document === 'undefined' || document.location == null) return '';

  // Oh dear IE10...
  if (!document.location.origin) {
    return (
      document.location.protocol +
      '//' +
      document.location.hostname +
      (document.location.port ? ':' + document.location.port : '')
    );
  }

  return document.location.origin;
}

/**
 * TraceKit.report: cross-browser processing of unhandled exceptions
 *
 * Syntax:
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *              on top frame; column number is not guaranteed
 *   - Opera:   full stack trace with line and column numbers
 *   - Chrome:  full stack trace with line and column numbers
 *   - Safari:  line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *   - IE:      line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a stackInfo object as described in the
 * TraceKit.computeStackTrace docs.
 */
TraceKit.report = (function reportModuleWrapper() {
  var handlers = [],
    lastArgs = null,
    lastException = null,
    lastExceptionStack = null;

  /**
   * Add a crash handler.
   * @param {Function} handler
   */
  function subscribe(handler) {
    installGlobalHandler();
    handlers.push(handler);
  }

  /**
   * Remove a crash handler.
   * @param {Function} handler
   */
  function unsubscribe(handler) {
    for (var i = handlers.length - 1; i >= 0; --i) {
      if (handlers[i] === handler) {
        handlers.splice(i, 1);
      }
    }
  }

  /**
   * Remove all crash handlers.
   */
  function unsubscribeAll() {
    uninstallGlobalHandler();
    handlers = [];
  }

  /**
   * Dispatch stack information to all handlers.
   * @param {Object.<string, *>} stack
   */
  function notifyHandlers(stack, isWindowError) {
    var exception = null;
    if (isWindowError && !TraceKit.collectWindowErrors) {
      return;
    }
    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        try {
          handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
        } catch (inner) {
          exception = inner;
        }
      }
    }

    if (exception) {
      throw exception;
    }
  }

  var _oldOnerrorHandler, _onErrorHandlerInstalled;

  /**
   * Ensures all global unhandled exceptions are recorded.
   * Supported by Gecko and IE.
   * @param {string} msg Error message.
   * @param {string} url URL of script that generated the exception.
   * @param {(number|string)} lineNo The line number at which the error
   * occurred.
   * @param {?(number|string)} colNo The column number at which the error
   * occurred.
   * @param {?Error} ex The actual Error object.
   */
  function traceKitWindowOnError(msg, url, lineNo, colNo, ex) {
    var stack = null;
    // If 'ex' is ErrorEvent, get real Error from inside
    var exception = utils.isErrorEvent(ex) ? ex.error : ex;
    // If 'msg' is ErrorEvent, get real message from inside
    var message = utils.isErrorEvent(msg) ? msg.message : msg;

    if (lastExceptionStack) {
      TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(
        lastExceptionStack,
        url,
        lineNo,
        message
      );
      processLastException();
    } else if (exception && utils.isError(exception)) {
      // non-string `exception` arg; attempt to extract stack trace

      // New chrome and blink send along a real error object
      // Let's just report that like a normal error.
      // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
      stack = TraceKit.computeStackTrace(exception);
      notifyHandlers(stack, true);
    } else {
      var location = {
        url: url,
        line: lineNo,
        column: colNo
      };

      var name = undefined;
      var groups;

      if ({}.toString.call(message) === '[object String]') {
        var groups = message.match(ERROR_TYPES_RE);
        if (groups) {
          name = groups[1];
          message = groups[2];
        }
      }

      location.func = UNKNOWN_FUNCTION;

      stack = {
        name: name,
        message: message,
        url: getLocationHref(),
        stack: [location]
      };
      notifyHandlers(stack, true);
    }

    if (_oldOnerrorHandler) {
      return _oldOnerrorHandler.apply(this, arguments);
    }

    return false;
  }

  function installGlobalHandler() {
    if (_onErrorHandlerInstalled) {
      return;
    }
    _oldOnerrorHandler = _window.onerror;
    _window.onerror = traceKitWindowOnError;
    _onErrorHandlerInstalled = true;
  }

  function uninstallGlobalHandler() {
    if (!_onErrorHandlerInstalled) {
      return;
    }
    _window.onerror = _oldOnerrorHandler;
    _onErrorHandlerInstalled = false;
    _oldOnerrorHandler = undefined;
  }

  function processLastException() {
    var _lastExceptionStack = lastExceptionStack,
      _lastArgs = lastArgs;
    lastArgs = null;
    lastExceptionStack = null;
    lastException = null;
    notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
  }

  /**
   * Reports an unhandled Error to TraceKit.
   * @param {Error} ex
   * @param {?boolean} rethrow If false, do not re-throw the exception.
   * Only used for window.onerror to not cause an infinite loop of
   * rethrowing.
   */
  function report(ex, rethrow) {
    var args = _slice.call(arguments, 1);
    if (lastExceptionStack) {
      if (lastException === ex) {
        return; // already caught by an inner catch block, ignore
      } else {
        processLastException();
      }
    }

    var stack = TraceKit.computeStackTrace(ex);
    lastExceptionStack = stack;
    lastException = ex;
    lastArgs = args;

    // If the stack trace is incomplete, wait for 2 seconds for
    // slow slow IE to see if onerror occurs or not before reporting
    // this exception; otherwise, we will end up with an incomplete
    // stack trace
    setTimeout(function() {
      if (lastException === ex) {
        processLastException();
      }
    }, stack.incomplete ? 2000 : 0);

    if (rethrow !== false) {
      throw ex; // re-throw to propagate to the top level (and cause window.onerror)
    }
  }

  report.subscribe = subscribe;
  report.unsubscribe = unsubscribe;
  report.uninstall = unsubscribeAll;
  return report;
})();

/**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 * Returns:
 *   s.name              - exception name
 *   s.message           - exception message
 *   s.stack[i].url      - JavaScript or HTML file URL
 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
 *   s.stack[i].args     - arguments passed to the function, if known
 *   s.stack[i].line     - line number, if known
 *   s.stack[i].column   - column number, if known
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 */
TraceKit.computeStackTrace = (function computeStackTraceWrapper() {
  // Contents of Exception in various browsers.
  //
  // SAFARI:
  // ex.message = Can't find variable: qq
  // ex.line = 59
  // ex.sourceId = 580238192
  // ex.sourceURL = http://...
  // ex.expressionBeginOffset = 96
  // ex.expressionCaretOffset = 98
  // ex.expressionEndOffset = 98
  // ex.name = ReferenceError
  //
  // FIREFOX:
  // ex.message = qq is not defined
  // ex.fileName = http://...
  // ex.lineNumber = 59
  // ex.columnNumber = 69
  // ex.stack = ...stack trace... (see the example below)
  // ex.name = ReferenceError
  //
  // CHROME:
  // ex.message = qq is not defined
  // ex.name = ReferenceError
  // ex.type = not_defined
  // ex.arguments = ['aa']
  // ex.stack = ...stack trace...
  //
  // INTERNET EXPLORER:
  // ex.message = ...
  // ex.name = ReferenceError
  //
  // OPERA:
  // ex.message = ...message... (see the example below)
  // ex.name = ReferenceError
  // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
  // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

  /**
   * Computes stack trace information from the stack property.
   * Chrome and Gecko use this property.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */
  function computeStackTraceFromStackProp(ex) {
    if (typeof ex.stack === 'undefined' || !ex.stack) return;

    var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    // NOTE: blob urls are now supposed to always have an origin, therefore it's format
    // which is `blob:http://url/path/with-some-uuid`, is matched by `blob.*?:\/` as well
    var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    // Used to additionally parse URL/line/column from eval frames
    var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    var lines = ex.stack.split('\n');
    var stack = [];
    var submatch;
    var parts;
    var element;
    var reference = /^(.*) is undefined$/.exec(ex.message);

    for (var i = 0, j = lines.length; i < j; ++i) {
      if ((parts = chrome.exec(lines[i]))) {
        var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
        var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
        if (isEval && (submatch = chromeEval.exec(parts[2]))) {
          // throw out eval line/column and use top-most line/column number
          parts[2] = submatch[1]; // url
          parts[3] = submatch[2]; // line
          parts[4] = submatch[3]; // column
        }
        element = {
          url: !isNative ? parts[2] : null,
          func: parts[1] || UNKNOWN_FUNCTION,
          args: isNative ? [parts[2]] : [],
          line: parts[3] ? +parts[3] : null,
          column: parts[4] ? +parts[4] : null
        };
      } else if ((parts = winjs.exec(lines[i]))) {
        element = {
          url: parts[2],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: [],
          line: +parts[3],
          column: parts[4] ? +parts[4] : null
        };
      } else if ((parts = gecko.exec(lines[i]))) {
        var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
        if (isEval && (submatch = geckoEval.exec(parts[3]))) {
          // throw out eval line/column and use top-most line number
          parts[3] = submatch[1];
          parts[4] = submatch[2];
          parts[5] = null; // no column when eval
        } else if (i === 0 && !parts[5] && typeof ex.columnNumber !== 'undefined') {
          // FireFox uses this awesome columnNumber property for its top frame
          // Also note, Firefox's column number is 0-based and everything else expects 1-based,
          // so adding 1
          // NOTE: this hack doesn't work if top-most frame is eval
          stack[0].column = ex.columnNumber + 1;
        }
        element = {
          url: parts[3],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: parts[2] ? parts[2].split(',') : [],
          line: parts[4] ? +parts[4] : null,
          column: parts[5] ? +parts[5] : null
        };
      } else {
        continue;
      }

      if (!element.func && element.line) {
        element.func = UNKNOWN_FUNCTION;
      }

      if (element.url && element.url.substr(0, 5) === 'blob:') {
        // Special case for handling JavaScript loaded into a blob.
        // We use a synchronous AJAX request here as a blob is already in
        // memory - it's not making a network request.  This will generate a warning
        // in the browser console, but there has already been an error so that's not
        // that much of an issue.
        var xhr = new XMLHttpRequest();
        xhr.open('GET', element.url, false);
        xhr.send(null);

        // If we failed to download the source, skip this patch
        if (xhr.status === 200) {
          var source = xhr.responseText || '';

          // We trim the source down to the last 300 characters as sourceMappingURL is always at the end of the file.
          // Why 300? To be in line with: https://github.com/getsentry/sentry/blob/4af29e8f2350e20c28a6933354e4f42437b4ba42/src/sentry/lang/javascript/processor.py#L164-L175
          source = source.slice(-300);

          // Now we dig out the source map URL
          var sourceMaps = source.match(/\/\/# sourceMappingURL=(.*)$/);

          // If we don't find a source map comment or we find more than one, continue on to the next element.
          if (sourceMaps) {
            var sourceMapAddress = sourceMaps[1];

            // Now we check to see if it's a relative URL.
            // If it is, convert it to an absolute one.
            if (sourceMapAddress.charAt(0) === '~') {
              sourceMapAddress = getLocationOrigin() + sourceMapAddress.slice(1);
            }

            // Now we strip the '.map' off of the end of the URL and update the
            // element so that Sentry can match the map to the blob.
            element.url = sourceMapAddress.slice(0, -4);
          }
        }
      }

      stack.push(element);
    }

    if (!stack.length) {
      return null;
    }

    return {
      name: ex.name,
      message: ex.message,
      url: getLocationHref(),
      stack: stack
    };
  }

  /**
   * Adds information about the first frame to incomplete stack traces.
   * Safari and IE require this to get complete data on the first frame.
   * @param {Object.<string, *>} stackInfo Stack trace information from
   * one of the compute* methods.
   * @param {string} url The URL of the script that caused an error.
   * @param {(number|string)} lineNo The line number of the script that
   * caused an error.
   * @param {string=} message The error generated by the browser, which
   * hopefully contains the name of the object that caused the error.
   * @return {boolean} Whether or not the stack information was
   * augmented.
   */
  function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
    var initial = {
      url: url,
      line: lineNo
    };

    if (initial.url && initial.line) {
      stackInfo.incomplete = false;

      if (!initial.func) {
        initial.func = UNKNOWN_FUNCTION;
      }

      if (stackInfo.stack.length > 0) {
        if (stackInfo.stack[0].url === initial.url) {
          if (stackInfo.stack[0].line === initial.line) {
            return false; // already in stack trace
          } else if (
            !stackInfo.stack[0].line &&
            stackInfo.stack[0].func === initial.func
          ) {
            stackInfo.stack[0].line = initial.line;
            return false;
          }
        }
      }

      stackInfo.stack.unshift(initial);
      stackInfo.partial = true;
      return true;
    } else {
      stackInfo.incomplete = true;
    }

    return false;
  }

  /**
   * Computes stack trace information by walking the arguments.caller
   * chain at the time the exception occurred. This will cause earlier
   * frames to be missed but is the only way to get any stack trace in
   * Safari and IE. The top frame is restored by
   * {@link augmentStackTraceWithInitialElement}.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */
  function computeStackTraceByWalkingCallerChain(ex, depth) {
    var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
      stack = [],
      funcs = {},
      recursion = false,
      parts,
      item,
      source;

    for (
      var curr = computeStackTraceByWalkingCallerChain.caller;
      curr && !recursion;
      curr = curr.caller
    ) {
      if (curr === computeStackTrace || curr === TraceKit.report) {
        // console.log('skipping internal function');
        continue;
      }

      item = {
        url: null,
        func: UNKNOWN_FUNCTION,
        line: null,
        column: null
      };

      if (curr.name) {
        item.func = curr.name;
      } else if ((parts = functionName.exec(curr.toString()))) {
        item.func = parts[1];
      }

      if (typeof item.func === 'undefined') {
        try {
          item.func = parts.input.substring(0, parts.input.indexOf('{'));
        } catch (e) {}
      }

      if (funcs['' + curr]) {
        recursion = true;
      } else {
        funcs['' + curr] = true;
      }

      stack.push(item);
    }

    if (depth) {
      // console.log('depth is ' + depth);
      // console.log('stack is ' + stack.length);
      stack.splice(0, depth);
    }

    var result = {
      name: ex.name,
      message: ex.message,
      url: getLocationHref(),
      stack: stack
    };
    augmentStackTraceWithInitialElement(
      result,
      ex.sourceURL || ex.fileName,
      ex.line || ex.lineNumber,
      ex.message || ex.description
    );
    return result;
  }

  /**
   * Computes a stack trace for an exception.
   * @param {Error} ex
   * @param {(string|number)=} depth
   */
  function computeStackTrace(ex, depth) {
    var stack = null;
    depth = depth == null ? 0 : +depth;

    try {
      stack = computeStackTraceFromStackProp(ex);
      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }

    try {
      stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
      if (stack) {
        return stack;
      }
    } catch (e) {
      if (TraceKit.debug) {
        throw e;
      }
    }
    return {
      name: ex.name,
      message: ex.message,
      url: getLocationHref()
    };
  }

  computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
  computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;

  return computeStackTrace;
})();

module.exports = TraceKit;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/raven-js/vendor/json-stringify-safe/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/raven-js/vendor/json-stringify-safe/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 json-stringify-safe
 Like JSON.stringify, but doesn't throw on circular references.

 Originally forked from https://github.com/isaacs/json-stringify-safe
 version 5.0.1 on 3/8/2017 and modified to handle Errors serialization
 and IE8 compatibility. Tests for this are in test/vendor.

 ISC license: https://github.com/isaacs/json-stringify-safe/blob/master/LICENSE
*/

exports = module.exports = stringify;
exports.getSerialize = serializer;

function indexOf(haystack, needle) {
  for (var i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) return i;
  }
  return -1;
}

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
}

// https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
function stringifyError(value) {
  var err = {
    // These properties are implemented as magical getters and don't show up in for in
    stack: value.stack,
    message: value.message,
    name: value.name
  };

  for (var i in value) {
    if (Object.prototype.hasOwnProperty.call(value, i)) {
      err[i] = value[i];
    }
  }

  return err;
}

function serializer(replacer, cycleReplacer) {
  var stack = [];
  var keys = [];

  if (cycleReplacer == null) {
    cycleReplacer = function(key, value) {
      if (stack[0] === value) {
        return '[Circular ~]';
      }
      return '[Circular ~.' + keys.slice(0, indexOf(stack, value)).join('.') + ']';
    };
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = indexOf(stack, this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);

      if (~indexOf(stack, value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }

    return replacer == null
      ? value instanceof Error ? stringifyError(value) : value
      : replacer.call(this, key, value);
  };
}


/***/ }),

/***/ "./node_modules/raven-js/vendor/md5/md5.js":
/*!*************************************************!*\
  !*** ./node_modules/raven-js/vendor/md5/md5.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
* Add integers, wrapping at 2^32. This uses 16-bit operations internally
* to work around bugs in some JS interpreters.
*/
function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xffff);
}

/*
* Bitwise rotate a 32-bit number to the left.
*/
function bitRotateLeft(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
* These functions implement the four basic operations the algorithm uses.
*/
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn((b & c) | (~b & d), a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
* Calculate the MD5 of an array of little-endian words, and a bit length.
*/
function binlMD5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << (len % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var i;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;

    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}

/*
* Convert an array of little-endian words to a string
*/
function binl2rstr(input) {
  var i;
  var output = '';
  var length32 = input.length * 32;
  for (i = 0; i < length32; i += 8) {
    output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff);
  }
  return output;
}

/*
* Convert a raw string to an array of little-endian words
* Characters >255 have their high-byte silently ignored.
*/
function rstr2binl(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;
  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }
  var length8 = input.length * 8;
  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32);
  }
  return output;
}

/*
* Calculate the MD5 of a raw string
*/
function rstrMD5(s) {
  return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
}

/*
* Calculate the HMAC-MD5, of a key and some data (raw strings)
*/
function rstrHMACMD5(key, data) {
  var i;
  var bkey = rstr2binl(key);
  var ipad = [];
  var opad = [];
  var hash;
  ipad[15] = opad[15] = undefined;
  if (bkey.length > 16) {
    bkey = binlMD5(bkey, key.length * 8);
  }
  for (i = 0; i < 16; i += 1) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5c5c5c5c;
  }
  hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
}

/*
* Convert a raw string to a hex string
*/
function rstr2hex(input) {
  var hexTab = '0123456789abcdef';
  var output = '';
  var x;
  var i;
  for (i = 0; i < input.length; i += 1) {
    x = input.charCodeAt(i);
    output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
  }
  return output;
}

/*
* Encode a string as utf-8
*/
function str2rstrUTF8(input) {
  return unescape(encodeURIComponent(input));
}

/*
* Take string arguments and return either raw or hex encoded strings
*/
function rawMD5(s) {
  return rstrMD5(str2rstrUTF8(s));
}
function hexMD5(s) {
  return rstr2hex(rawMD5(s));
}
function rawHMACMD5(k, d) {
  return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
}
function hexHMACMD5(k, d) {
  return rstr2hex(rawHMACMD5(k, d));
}

function md5(string, key, raw) {
  if (!key) {
    if (!raw) {
      return hexMD5(string);
    }
    return rawMD5(string);
  }
  if (!raw) {
    return hexHMACMD5(key, string);
  }
  return rawHMACMD5(key, string);
}

module.exports = md5;


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-modal/lib/components/Modal.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/components/Modal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;
var createPortal = isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;

/***/ }),

/***/ "./node_modules/react-modal/lib/components/ModalPortal.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal/lib/components/ModalPortal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen();
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.afterClose();
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        },
        _react2.default.createElement(
          "div",
          _extends({
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {})),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/classList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/classList.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className;

    // eslint-disable-next-line max-len
    buffer += "\n\ndoc.body (" + classes + "):\n";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n";

    // eslint-disable-next-line no-console
    console.log(buffer);
  }
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/focusManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/focusManager.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/scopeTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  var target;
  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  event.preventDefault();

  tabbable[x].focus();
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/tabbable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/tar-js/lib/header.js":
/*!*******************************************!*\
  !*** ./node_modules/tar-js/lib/header.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * tar-js
 * MIT (c) 2011 T. Jameson Little
 */

(function () {
	"use strict";
	
/*
struct posix_header {             // byte offset
	char name[100];               //   0
	char mode[8];                 // 100
	char uid[8];                  // 108
	char gid[8];                  // 116
	char size[12];                // 124
	char mtime[12];               // 136
	char chksum[8];               // 148
	char typeflag;                // 156
	char linkname[100];           // 157
	char magic[6];                // 257
	char version[2];              // 263
	char uname[32];               // 265
	char gname[32];               // 297
	char devmajor[8];             // 329
	char devminor[8];             // 337
	char prefix[155];             // 345
                                  // 500
};
*/

	var utils = __webpack_require__(/*! ./utils */ "./node_modules/tar-js/lib/utils.js"),
		headerFormat;
	
	headerFormat = [
		{
			'field': 'fileName',
			'length': 100
		},
		{
			'field': 'fileMode',
			'length': 8
		},
		{
			'field': 'uid',
			'length': 8
		},
		{
			'field': 'gid',
			'length': 8
		},
		{
			'field': 'fileSize',
			'length': 12
		},
		{
			'field': 'mtime',
			'length': 12
		},
		{
			'field': 'checksum',
			'length': 8
		},
		{
			'field': 'type',
			'length': 1
		},
		{
			'field': 'linkName',
			'length': 100
		},
		{
			'field': 'ustar',
			'length': 8
		},
		{
			'field': 'owner',
			'length': 32
		},
		{
			'field': 'group',
			'length': 32
		},
		{
			'field': 'majorNumber',
			'length': 8
		},
		{
			'field': 'minorNumber',
			'length': 8
		},
		{
			'field': 'filenamePrefix',
			'length': 155
		},
		{
			'field': 'padding',
			'length': 12
		}
	];

	function formatHeader(data, cb) {
		var buffer = utils.clean(512),
			offset = 0;

		headerFormat.forEach(function (value) {
			var str = data[value.field] || "",
				i, length;

			for (i = 0, length = str.length; i < length; i += 1) {
				buffer[offset] = str.charCodeAt(i);
				offset += 1;
			}

			offset += value.length - i; // space it out with nulls
		});

		if (typeof cb === 'function') {
			return cb(buffer, offset);
		}
		return buffer;
	}
	
	module.exports.structure = headerFormat;
	module.exports.format = formatHeader;
}());


/***/ }),

/***/ "./node_modules/tar-js/lib/tar.js":
/*!****************************************!*\
  !*** ./node_modules/tar-js/lib/tar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * tar-js
 * MIT (c) 2011 T. Jameson Little
 */

(function () {
	"use strict";

	var header = __webpack_require__(/*! ./header */ "./node_modules/tar-js/lib/header.js"),
		utils = __webpack_require__(/*! ./utils */ "./node_modules/tar-js/lib/utils.js"),
		recordSize = 512,
		blockSize;
	
	function Tar(recordsPerBlock) {
		this.written = 0;
		blockSize = (recordsPerBlock || 20) * recordSize;
		this.out = utils.clean(blockSize);
	}

	Tar.prototype.append = function (filepath, input, opts, callback) {
		var data,
			checksum,
			mode,
			mtime,
			uid,
			gid,
			headerArr;

		if (typeof input === 'string') {
			input = utils.stringToUint8(input);
		} else if (input.constructor !== Uint8Array.prototype.constructor) {
			throw 'Invalid input type. You gave me: ' + input.constructor.toString().match(/function\s*([$A-Za-z_][0-9A-Za-z_]*)\s*\(/)[1];
		}

		if (typeof opts === 'function') {
			callback = opts;
			opts = {};
		}

		opts = opts || {};

		mode = opts.mode || parseInt('777', 8) & 0xfff;
		mtime = opts.mtime || Math.floor(+new Date() / 1000);
		uid = opts.uid || 0;
		gid = opts.gid || 0;

		data = {
			fileName: filepath,
			fileMode: utils.pad(mode, 7),
			uid: utils.pad(uid, 7),
			gid: utils.pad(gid, 7),
			fileSize: utils.pad(input.length, 11),
			mtime: utils.pad(mtime, 11),
			checksum: '        ',
			type: '0', // just a file
			ustar: 'ustar  ',
			owner: opts.owner || '',
			group: opts.group || ''
		};

		// calculate the checksum
		checksum = 0;
		Object.keys(data).forEach(function (key) {
			var i, value = data[key], length;

			for (i = 0, length = value.length; i < length; i += 1) {
				checksum += value.charCodeAt(i);
			}
		});

		data.checksum = utils.pad(checksum, 6) + "\u0000 ";

		headerArr = header.format(data);

		var i, offset, length;

		this.out.set(headerArr, this.written);

		this.written += headerArr.length;

		// If there is not enough space in this.out, we need to expand it to
		// fit the new input.
		if (this.written + input.length > this.out.length) {
			this.out = utils.extend(this.out, this.written, input.length, blockSize);
		}

		this.out.set(input, this.written);

		// to the nearest multiple of recordSize
		this.written += input.length + (recordSize - (input.length % recordSize || recordSize));

		// make sure there's at least 2 empty records worth of extra space
		if (this.out.length - this.written < recordSize * 2) {
			this.out = utils.extend(this.out, this.written, recordSize * 2, blockSize);
		}

		if (typeof callback === 'function') {
			callback(this.out);
		}

		return this.out;
	};

	Tar.prototype.clear = function () {
		this.written = 0;
		this.out = utils.clean(blockSize);
	};

  Tar.utils = utils;

	Tar.stringToUint8 = utils.stringToUint8;
	Tar.uint8ToBase64 = utils.uint8ToBase64;
  Tar.base64ToUint8 = utils.base64ToUint8;
	
	module.exports = Tar;
}());


/***/ }),

/***/ "./node_modules/tar-js/lib/utils.js":
/*!******************************************!*\
  !*** ./node_modules/tar-js/lib/utils.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * tar-js
 * MIT (c) 2011 T. Jameson Little
 */

(function () {
	"use strict";

	var lookup = [
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
			'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
			'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
			'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
			'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
			'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			'w', 'x', 'y', 'z', '0', '1', '2', '3',
			'4', '5', '6', '7', '8', '9', '+', '/'
		];
	function clean(length) {
		var i, buffer = new Uint8Array(length);
		for (i = 0; i < length; i += 1) {
			buffer[i] = 0;
		}
		return buffer;
	}

	function extend(orig, length, addLength, multipleOf) {
		var newSize = length + addLength,
			buffer = clean((parseInt(newSize / multipleOf) + 1) * multipleOf);

		buffer.set(orig);

		return buffer;
	}

	function pad(num, bytes, base) {
		num = num.toString(base || 8);
		return "000000000000".substr(num.length + 12 - bytes) + num;
	}	
	
	function stringToUint8 (input, out, offset) {
		var i, length;

		out = out || clean(input.length);

		offset = offset || 0;
		for (i = 0, length = input.length; i < length; i += 1) {
			out[offset] = input.charCodeAt(i);
			offset += 1;
		}

		return out;
	}

	function uint8ToBase64(uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length;

		function tripletToBase64 (num) {
			return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
		};

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
			output += tripletToBase64(temp);
		}

		// this prevents an ERR_INVALID_URL in Chrome (Firefox okay)
		switch (output.length % 4) {
			case 1:
				output += '=';
				break;
			case 2:
				output += '==';
				break;
			default:
				break;
		}

		return output;
	}

	function base64ToUint8(input) {
		var base64 = input.match(/^([^=]+)/)[1],
			extraBytes = input.match(/(=*)$/)[1].length,
			i = 0, length = base64.length, temp, offset = 0,
			ret = clean(base64.length * .75 + extraBytes);

		while (i < length) {
			temp = 0;

			temp |= lookup.indexOf(base64.charAt(i) || 'A') << 18;
			i += 1;
			temp |= lookup.indexOf(base64.charAt(i) || 'A') << 12;
			i += 1;
			temp |= lookup.indexOf(base64.charAt(i) || 'A') << 6;
			i += 1;
			temp |= lookup.indexOf(base64.charAt(i) || 'A');
			i += 1;

			ret[offset] = temp >> 16 & 0xFF;
			offset += 1;
			ret[offset] = temp >> 8 & 0xFF;
			offset += 1;
			ret[offset] = temp & 0xFF;
			offset += 1;
		}

		return ret;
	}

	module.exports.clean = clean;
	module.exports.pad = pad;
	module.exports.extend = extend;
	module.exports.stringToUint8 = stringToUint8;
	module.exports.uint8ToBase64 = uint8ToBase64;
	module.exports.base64ToUint8 = base64ToUint8;
}());


/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/actions/AppActions.ts":
/*!***********************************!*\
  !*** ./src/actions/AppActions.ts ***!
  \***********************************/
/*! exports provided: AppActionType, addFileTo, loadProject, initStore, updateFileNameAndDescription, deleteFile, logLn, splitGroup, openView, closeView, closeTabs, openFile, openFiles, openProjectFiles, saveProject, focusTabGroup, pushStatus, popStatus, runTask, run, build, setViewType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppActionType", function() { return AppActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFileTo", function() { return addFileTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProject", function() { return loadProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFileNameAndDescription", function() { return updateFileNameAndDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFile", function() { return deleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logLn", function() { return logLn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitGroup", function() { return splitGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openView", function() { return openView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeView", function() { return closeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeTabs", function() { return closeTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFile", function() { return openFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFiles", function() { return openFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openProjectFiles", function() { return openProjectFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProject", function() { return saveProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusTabGroup", function() { return focusTabGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushStatus", function() { return pushStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popStatus", function() { return popStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runTask", function() { return runTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "build", function() { return build; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewType", function() { return setViewType; });
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _components_editor_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editor/View */ "./src/components/editor/View.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./src/service.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors */ "./src/errors.ts");
/* harmony import */ var _utils_rewriteSources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/rewriteSources */ "./src/utils/rewriteSources.ts");
/* harmony import */ var _utils_taskRunner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/taskRunner */ "./src/utils/taskRunner.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */








var AppActionType;
(function (AppActionType) {
    AppActionType["ADD_FILE_TO"] = "ADD_FILE_TO";
    AppActionType["LOAD_PROJECT"] = "LOAD_PROJECT";
    AppActionType["CLEAR_PROJECT_MODIFIED"] = "CLEAR_PROJECT_MODIFIED";
    AppActionType["INIT_STORE"] = "INIT_STORE";
    AppActionType["UPDATE_FILE_NAME_AND_DESCRIPTION"] = "UPDATE_FILE_NAME_AND_DESCRIPTION";
    AppActionType["DELETE_FILE"] = "DELETE_FILE";
    AppActionType["SPLIT_GROUP"] = "SPLIT_GROUP";
    AppActionType["SET_VIEW_TYPE"] = "SET_VIEW_TYPE";
    AppActionType["OPEN_FILE"] = "OPEN_FILE";
    AppActionType["OPEN_FILES"] = "OPEN_PROJECT_FILES";
    AppActionType["FOCUS_TAB_GROUP"] = "FOCUS_TAB_GROUP";
    AppActionType["LOG_LN"] = "LOG_LN";
    AppActionType["PUSH_STATUS"] = "PUSH_STATUS";
    AppActionType["POP_STATUS"] = "POP_STATUS";
    AppActionType["SANDBOX_RUN"] = "SANDBOX_RUN";
    AppActionType["CLOSE_VIEW"] = "CLOSE_VIEW";
    AppActionType["CLOSE_TABS"] = "CLOSE_TABS";
    AppActionType["OPEN_VIEW"] = "OPEN_VIEW";
})(AppActionType || (AppActionType = {}));
function addFileTo(file, parent) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.ADD_FILE_TO,
        file,
        parent,
    });
}
function loadProject(project) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.LOAD_PROJECT,
        project,
    });
}
function initStore() {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.INIT_STORE,
    });
}
function updateFileNameAndDescription(file, name, description) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.UPDATE_FILE_NAME_AND_DESCRIPTION,
        file,
        name,
        description,
    });
}
function deleteFile(file) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.DELETE_FILE,
        file,
    });
}
function logLn(message, kind = "") {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.LOG_LN,
        message,
        kind,
    });
}
function splitGroup() {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.SPLIT_GROUP
    });
}
function openView(view, preview = true) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.OPEN_VIEW,
        view,
        preview
    });
}
function closeView(view) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.CLOSE_VIEW,
        view
    });
}
function closeTabs(file) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.CLOSE_TABS,
        file
    });
}
function openFile(file, type = _components_editor_View__WEBPACK_IMPORTED_MODULE_2__["ViewType"].Editor, preview = true) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.OPEN_FILE,
        file,
        viewType: type,
        preview
    });
}
function openFiles(files) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.OPEN_FILES,
        files
    });
}
async function openProjectFiles(template) {
    const newProject = new _models__WEBPACK_IMPORTED_MODULE_1__["Project"]();
    await _service__WEBPACK_IMPORTED_MODULE_4__["Service"].loadFilesIntoProject(template.files, newProject, template.baseUrl);
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.LOAD_PROJECT,
        project: newProject
    });
    if (newProject.getFile("README.md")) {
        openFiles([["README.md"]]);
    }
}
async function saveProject(fiddle) {
    logLn("Saving Project ...");
    const tabGroups = _stores_AppStore__WEBPACK_IMPORTED_MODULE_3__["default"].getTabGroups();
    const projectModel = _stores_AppStore__WEBPACK_IMPORTED_MODULE_3__["default"].getProject().getModel();
    const openedFiles = tabGroups.map((group) => {
        return group.views.map((view) => view.file.getPath());
    });
    const uri = await _service__WEBPACK_IMPORTED_MODULE_4__["Service"].saveProject(projectModel, openedFiles, fiddle);
    logLn("Saved Project OK");
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.CLEAR_PROJECT_MODIFIED,
    });
    return uri;
}
function focusTabGroup(group) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.FOCUS_TAB_GROUP,
        group
    });
}
function pushStatus(status) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.PUSH_STATUS,
        status,
    });
}
function popStatus() {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.POP_STATUS,
    });
}
async function runTask(name, optional = false, externals = _utils_taskRunner__WEBPACK_IMPORTED_MODULE_7__["RunTaskExternals"].Default) {
    // Runs the provided source in our fantasy gulp context
    const run = async (src) => {
        const project = _stores_AppStore__WEBPACK_IMPORTED_MODULE_3__["default"].getProject().getModel();
        await Object(_utils_taskRunner__WEBPACK_IMPORTED_MODULE_7__["runTask"])(src, name, optional, project, logLn, externals);
    };
    let gulpfile = _stores_AppStore__WEBPACK_IMPORTED_MODULE_3__["default"].getFileByName("gulpfile.js");
    if (gulpfile) {
        await run(_stores_AppStore__WEBPACK_IMPORTED_MODULE_3__["default"].getFileSource(gulpfile));
    }
    else {
        if (gulpfile = _stores_AppStore__WEBPACK_IMPORTED_MODULE_3__["default"].getFileByName("build.ts")) {
            const output = await gulpfile.getModel().getEmitOutput();
            await run(output.outputFiles[0].text);
        }
        else {
            if (gulpfile = _stores_AppStore__WEBPACK_IMPORTED_MODULE_3__["default"].getFileByName("build.js")) {
                await run(_stores_AppStore__WEBPACK_IMPORTED_MODULE_3__["default"].getFileSource(gulpfile));
            }
            else {
                logLn(_errors__WEBPACK_IMPORTED_MODULE_5__["Errors"].BuildFileMissing, "error");
            }
        }
    }
}
async function run() {
    const mainFileName = "src/main.html";
    const projectModel = _stores_AppStore__WEBPACK_IMPORTED_MODULE_3__["default"].getProject().getModel();
    const context = new _utils_rewriteSources__WEBPACK_IMPORTED_MODULE_6__["RewriteSourcesContext"](projectModel);
    context.logLn = logLn;
    context.createFile = (src, type) => {
        const blob = new Blob([src], { type, });
        return window.URL.createObjectURL(blob);
    };
    const src = Object(_utils_rewriteSources__WEBPACK_IMPORTED_MODULE_6__["rewriteHTML"])(context, mainFileName);
    if (!src) {
        logLn(`Cannot translate and open ${mainFileName}`);
        return;
    }
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.SANDBOX_RUN,
        src,
    });
}
async function build() {
    pushStatus("Building Project");
    await runTask("build");
    popStatus();
}
function setViewType(view, type) {
    _dispatcher__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
        type: AppActionType.SET_VIEW_TYPE,
        view,
        viewType: type
    });
}


/***/ }),

/***/ "./src/actions/ArcActions.ts":
/*!***********************************!*\
  !*** ./src/actions/ArcActions.ts ***!
  \***********************************/
/*! exports provided: publishArc, notifyArcAboutFork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishArc", function() { return publishArc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyArcAboutFork", function() { return notifyArcAboutFork; });
/* harmony import */ var _AppActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppActions */ "./src/actions/AppActions.ts");
/* harmony import */ var _utils_taskRunner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/taskRunner */ "./src/utils/taskRunner.ts");
/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../arc */ "./src/arc.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



async function publishArc() {
    Object(_AppActions__WEBPACK_IMPORTED_MODULE_0__["pushStatus"])("Previewing Arc Project");
    await Object(_AppActions__WEBPACK_IMPORTED_MODULE_0__["runTask"])("publish", false, _utils_taskRunner__WEBPACK_IMPORTED_MODULE_1__["RunTaskExternals"].Arc);
    Object(_AppActions__WEBPACK_IMPORTED_MODULE_0__["popStatus"])();
}
function notifyArcAboutFork(fiddle) {
    Object(_arc__WEBPACK_IMPORTED_MODULE_2__["notifyAboutFork"])(fiddle);
}


/***/ }),

/***/ "./src/arc.ts":
/*!********************!*\
  !*** ./src/arc.ts ***!
  \********************/
/*! exports provided: notifyAboutFork, Arc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyAboutFork", function() { return notifyAboutFork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return Arc; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function notifyAboutFork(fiddle) {
    window.parent.postMessage({
        type: "wasm-studio/fork",
        fiddle,
    }, "*");
}
class Arc {
    static publish(manifest) {
        window.parent.postMessage({
            type: "wasm-studio/module-publish",
            manifest,
        }, "*");
    }
}


/***/ }),

/***/ "./src/compilerServices/clangService.ts":
/*!**********************************************!*\
  !*** ./src/compilerServices/clangService.ts ***!
  \**********************************************/
/*! exports provided: ClangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClangService", function() { return ClangService; });
/* harmony import */ var _sendRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendRequest */ "./src/compilerServices/sendRequest.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/compilerServices/utils.ts");


class ClangService {
    constructor(lang) {
        this.lang = lang;
    }
    async compile(input) {
        const files = Object.values(input.files);
        if (files.length !== 1) {
            throw new Error(`Supporting compilation of a single file, but ${files.length} file(s) found`);
        }
        const [fileRef] = Object.keys(input.files);
        const src = files[0].content;
        const from = this.lang;
        const project = {
            output: "wasm",
            compress: true,
            files: [
                {
                    type: from,
                    name: "file." + from,
                    options: input.options,
                    src
                }
            ]
        };
        const result = await Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__["sendRequestJSON"])(project, _sendRequest__WEBPACK_IMPORTED_MODULE_0__["ServiceTypes"].Clang);
        const items = {};
        let content;
        if (result.success) {
            content = await Object(_utils__WEBPACK_IMPORTED_MODULE_1__["decodeBinary"])(result.output);
        }
        let console;
        if (result.tasks && result.tasks.length > 0) {
            console = result.tasks[0].console;
        }
        return {
            success: result.success,
            items: {
                "a.wasm": { content, fileRef, console, },
            },
            console: result.message
        };
    }
}


/***/ }),

/***/ "./src/compilerServices/index.ts":
/*!***************************************!*\
  !*** ./src/compilerServices/index.ts ***!
  \***************************************/
/*! exports provided: Language, createCompilerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompilerService", function() { return createCompilerService; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/compilerServices/types.ts");
/* harmony import */ var _rustService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rustService */ "./src/compilerServices/rustService.ts");
/* harmony import */ var _clangService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clangService */ "./src/compilerServices/clangService.ts");
/* harmony import */ var _x86Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./x86Service */ "./src/compilerServices/x86Service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["Language"]; });

/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





async function createCompilerService(from, to) {
    if (from === _types__WEBPACK_IMPORTED_MODULE_0__["Language"].Rust && to === _types__WEBPACK_IMPORTED_MODULE_0__["Language"].Wasm) {
        return new _rustService__WEBPACK_IMPORTED_MODULE_1__["RustService"]();
    }
    if ((from === _types__WEBPACK_IMPORTED_MODULE_0__["Language"].C || from === _types__WEBPACK_IMPORTED_MODULE_0__["Language"].Cpp) && to === _types__WEBPACK_IMPORTED_MODULE_0__["Language"].Wasm) {
        return new _clangService__WEBPACK_IMPORTED_MODULE_2__["ClangService"](from);
    }
    if (from === _types__WEBPACK_IMPORTED_MODULE_0__["Language"].Wasm && to === _types__WEBPACK_IMPORTED_MODULE_0__["Language"].x86) {
        return new _x86Service__WEBPACK_IMPORTED_MODULE_3__["X86Service"]();
    }
    throw new Error(`createCompilerService: not supported ${from}->${to}`);
}


/***/ }),

/***/ "./src/compilerServices/rustService.ts":
/*!*********************************************!*\
  !*** ./src/compilerServices/rustService.ts ***!
  \*********************************************/
/*! exports provided: RustService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RustService", function() { return RustService; });
/* harmony import */ var _sendRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendRequest */ "./src/compilerServices/sendRequest.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/compilerServices/utils.ts");
/* harmony import */ var tar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tar-js */ "./node_modules/tar-js/lib/tar.js");
/* harmony import */ var tar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tar_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/util.ts");




class RustService {
    async compile(input) {
        let result;
        let fileRef;
        const options = input.options;
        const cargo = options["cargo"];
        if (cargo) {
            const tarBuffer = new tar_js__WEBPACK_IMPORTED_MODULE_2__();
            const files = input.files;
            Object.entries(files).forEach(([name, file]) => {
                tarBuffer.append(name, file.content, {});
            });
            const tar = Object(_util__WEBPACK_IMPORTED_MODULE_3__["base64EncodeBytes"])(tarBuffer.out);
            result = await Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__["sendRequestJSON"])({ tar, options, }, _sendRequest__WEBPACK_IMPORTED_MODULE_0__["ServiceTypes"].Cargo);
            fileRef = Object.keys(files)[0];
        }
        else {
            const files = Object.values(input.files);
            if (files.length !== 1) {
                throw new Error(`Supporting compilation of a single file, but ${files.length} file(s) found`);
            }
            fileRef = Object.keys(input.files)[0];
            const code = files[0].content;
            result = await Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__["sendRequestJSON"])({ code, options, }, _sendRequest__WEBPACK_IMPORTED_MODULE_0__["ServiceTypes"].Rustc);
        }
        const items = {};
        let content;
        if (result.success) {
            content = await Object(_utils__WEBPACK_IMPORTED_MODULE_1__["decodeBinary"])(result.output);
        }
        let console;
        if (result.tasks && result.tasks.length > 0) {
            console = result.tasks[0].console;
        }
        const extraItems = {};
        if (result.wasmBindgenJs) {
            extraItems["wasm_bindgen.js"] = {
                content: result.wasmBindgenJs,
            };
        }
        return {
            success: result.success,
            items: {
                "a.wasm": { content, fileRef, console, },
                ...extraItems
            },
            console: result.message
        };
    }
}


/***/ }),

/***/ "./src/compilerServices/sendRequest.ts":
/*!*********************************************!*\
  !*** ./src/compilerServices/sendRequest.ts ***!
  \*********************************************/
/*! exports provided: ServiceTypes, getServiceURL, parseJSONResponse, sendRequestJSON, sendRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypes", function() { return ServiceTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceURL", function() { return getServiceURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJSONResponse", function() { return parseJSONResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestJSON", function() { return sendRequestJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var ServiceTypes;
(function (ServiceTypes) {
    ServiceTypes[ServiceTypes["Rustc"] = 0] = "Rustc";
    ServiceTypes[ServiceTypes["Cargo"] = 1] = "Cargo";
    ServiceTypes[ServiceTypes["Clang"] = 2] = "Clang";
    ServiceTypes[ServiceTypes["Service"] = 3] = "Service";
})(ServiceTypes || (ServiceTypes = {}));
async function getServiceURL(to) {
    const config = await Object(_config__WEBPACK_IMPORTED_MODULE_0__["default"])();
    switch (to) {
        case ServiceTypes.Rustc:
            return config.rustc;
        case ServiceTypes.Cargo:
            return config.cargo;
        case ServiceTypes.Clang:
            return config.clang;
        case ServiceTypes.Service:
            return config.serviceUrl;
        default:
            throw new Error(`Invalid ServiceType: ${to}`);
    }
}
async function parseJSONResponse(response) {
    const text = await response.text();
    if (response.status === 200) {
        try {
            return JSON.parse(text);
        }
        catch (_) { /* fall through for errors */ }
    }
    return {
        success: false,
        message: text.replace(/(^<pre>)|(<\/pre>$)/gi, ""),
    };
}
async function sendRequestJSON(content, to) {
    const url = await getServiceURL(to);
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(content),
        headers: new Headers({ "Content-Type": "application/json" })
    });
    return parseJSONResponse(response);
}
async function sendRequest(content, to) {
    const url = await getServiceURL(to);
    const response = await fetch(url, {
        method: "POST",
        body: content,
        headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" })
    });
    return parseJSONResponse(response);
}


/***/ }),

/***/ "./src/compilerServices/types.ts":
/*!***************************************!*\
  !*** ./src/compilerServices/types.ts ***!
  \***************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var Language;
(function (Language) {
    Language["C"] = "c";
    Language["Cpp"] = "cpp";
    Language["Wat"] = "wat";
    Language["Wasm"] = "wasm";
    Language["Rust"] = "rust";
    Language["Cretonne"] = "cton";
    Language["x86"] = "x86";
    Language["Json"] = "json";
    Language["JavaScript"] = "javascript";
    Language["TypeScript"] = "typescript";
    Language["Toml"] = "toml";
    Language["Text"] = "text";
})(Language || (Language = {}));


/***/ }),

/***/ "./src/compilerServices/utils.ts":
/*!***************************************!*\
  !*** ./src/compilerServices/utils.ts ***!
  \***************************************/
/*! exports provided: decodeBinary, encodeBinary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeBinary", function() { return decodeBinary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeBinary", function() { return encodeBinary; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _utils_zlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/zlib */ "./src/utils/zlib.ts");
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(base64_js__WEBPACK_IMPORTED_MODULE_2__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



async function decodeBinary(input) {
    let data = Object(_util__WEBPACK_IMPORTED_MODULE_0__["decodeRestrictedBase64ToBytes"])(input);
    if (Object(_utils_zlib__WEBPACK_IMPORTED_MODULE_1__["isZlibData"])(data)) {
        data = await Object(_utils_zlib__WEBPACK_IMPORTED_MODULE_1__["decompressZlib"])(data);
    }
    return data.buffer;
}
function encodeBinary(input) {
    return Object(base64_js__WEBPACK_IMPORTED_MODULE_2__["fromByteArray"])(new Uint8Array(input));
}


/***/ }),

/***/ "./src/compilerServices/x86Service.ts":
/*!********************************************!*\
  !*** ./src/compilerServices/x86Service.ts ***!
  \********************************************/
/*! exports provided: X86Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X86Service", function() { return X86Service; });
/* harmony import */ var _sendRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendRequest */ "./src/compilerServices/sendRequest.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/compilerServices/utils.ts");


class X86Service {
    async compile(input) {
        const files = Object.values(input.files);
        if (files.length !== 1) {
            throw new Error(`Supporting compilation of a single file, but ${files.length} file(s) found`);
        }
        const wasm = files[0].content;
        const options = input.options;
        const encodedWasm = encodeURIComponent(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["encodeBinary"])(wasm));
        const content = await Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__["sendRequest"])("input=" + encodedWasm + "&action=wasm2assembly&options=" + encodeURIComponent(options), _sendRequest__WEBPACK_IMPORTED_MODULE_0__["ServiceTypes"].Service);
        return {
            success: true,
            items: {
                "a.json": { content, },
            },
        };
    }
}


/***/ }),

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/*! exports provided: EmbeddingType, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddingType", function() { return EmbeddingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Workspace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Workspace */ "./src/components/Workspace.tsx");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor */ "./src/components/editor/index.ts");
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toolbar */ "./src/components/Toolbar.tsx");
/* harmony import */ var _editor_View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/View */ "./src/components/editor/View.tsx");
/* harmony import */ var _actions_AppActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/AppActions */ "./src/actions/AppActions.ts");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service */ "./src/service.ts");
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Split */ "./src/components/Split.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _NewFileDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NewFileDialog */ "./src/components/NewFileDialog.tsx");
/* harmony import */ var _EditFileDialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EditFileDialog */ "./src/components/EditFileDialog.tsx");
/* harmony import */ var _UploadFileDialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UploadFileDialog */ "./src/components/UploadFileDialog.tsx");
/* harmony import */ var _Toasts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Toasts */ "./src/components/Toasts.tsx");
/* harmony import */ var _ShareDialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShareDialog */ "./src/components/ShareDialog.tsx");
/* harmony import */ var _NewProjectDialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NewProjectDialog */ "./src/components/NewProjectDialog.tsx");
/* harmony import */ var _NewDirectoryDialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./NewDirectoryDialog */ "./src/components/NewDirectoryDialog.tsx");
/* harmony import */ var _ControlCenter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ControlCenter */ "./src/components/ControlCenter.tsx");
/* harmony import */ var _StatusBar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./StatusBar */ "./src/components/StatusBar.tsx");
/* harmony import */ var _actions_ArcActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../actions/ArcActions */ "./src/actions/ArcActions.ts");
/* harmony import */ var _utils_taskRunner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utils/taskRunner */ "./src/utils/taskRunner.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


























var EmbeddingType;
(function (EmbeddingType) {
    EmbeddingType[EmbeddingType["None"] = 0] = "None";
    EmbeddingType[EmbeddingType["Default"] = 1] = "Default";
    EmbeddingType[EmbeddingType["Arc"] = 2] = "Arc";
})(EmbeddingType || (EmbeddingType = {}));
class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        /**
         * Remember workspace split.
         */
        this.workspaceSplit = null;
        this.state = {
            fiddle: props.fiddle,
            project: null,
            file: null,
            newFileDialogDirectory: null,
            editFileDialogFile: null,
            newProjectDialog: !props.fiddle,
            shareDialog: false,
            workspaceSplits: [
                {
                    min: 200,
                    max: 400,
                    value: 200,
                },
                {
                    min: 256
                }
            ],
            controlCenterSplits: [
                { min: 100 },
                { min: 40, value: 256 }
            ],
            editorSplits: [],
            showProblems: true,
            showSandbox: props.embeddingParams.type !== EmbeddingType.Arc,
            uploadFileDialogDirectory: null,
            newDirectoryDialog: null,
            tabGroups: null,
            activeTabGroup: null,
            windowDimensions: App.getWindowDimensions(),
            hasStatus: false,
            isContentModified: false,
        };
    }
    async initializeProject() {
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["initStore"])();
        this.setState({
            project: _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].getProject(),
            tabGroups: _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].getTabGroups(),
            activeTabGroup: _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].getActiveTabGroup(),
            hasStatus: _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].hasStatus(),
        });
        this.bindAppStoreEvents();
        if (this.state.fiddle) {
            this.loadProjectFromFiddle(this.state.fiddle);
        }
    }
    static getWindowDimensions() {
        return `${window.innerWidth}x${window.innerHeight}@${window.devicePixelRatio}`;
    }
    async loadProjectFromFiddle(uri) {
        const project = new _models__WEBPACK_IMPORTED_MODULE_7__["Project"]();
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["pushStatus"])("Downloading Project");
        const fiddle = await _service__WEBPACK_IMPORTED_MODULE_8__["Service"].loadJSON(uri);
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["popStatus"])();
        if (fiddle.success) {
            await _service__WEBPACK_IMPORTED_MODULE_8__["Service"].loadFilesIntoProject(fiddle.files, project);
            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["loadProject"])(project);
            if (project.getFile("README.md")) {
                Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openFiles"])([["README.md"]]);
            }
        }
        else {
            if (this.toastContainer) {
                this.toastContainer.showToast(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    "Project ",
                    uri,
                    " was not found."), "error");
            }
        }
    }
    bindAppStoreEvents() {
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].onLoadProject.register(() => {
            this.setState({ project: _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].getProject() });
            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["runTask"])("project:load", true, _utils_taskRunner__WEBPACK_IMPORTED_MODULE_24__["RunTaskExternals"].Setup);
        });
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].onDirtyFileUsed.register((file) => {
            this.logLn(`Changes in ${file.getPath()} were ignored, save your changes.`, "warn");
        });
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].onTabsChange.register(() => {
            this.setState({
                tabGroups: _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].getTabGroups(),
                activeTabGroup: _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].getActiveTabGroup(),
            });
            Object(_util__WEBPACK_IMPORTED_MODULE_10__["layout"])();
        });
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].onDidChangeStatus.register(() => {
            this.setState({
                hasStatus: _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].hasStatus(),
            });
        });
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].onDidChangeIsContentModified.register(() => {
            this.props.windowContext.promptWhenClosing = _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].getIsContentModified();
            this.setState({
                isContentModified: _stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].getIsContentModified(),
            });
        });
    }
    // TODO: Optimize
    // shouldComponentUpdate(nextProps: any, nextState: AppState) {
    //   let state = this.state;
    //   if (state.file !== nextState.file) return true;
    //   if (state.group !== nextState.group) return true;
    //   if (!shallowCompare(state.groups, nextState.groups)) return true;
    //   return false;
    // }
    async loadReleaseNotes() {
        const response = await fetch("notes/notes.md");
        const src = await response.text();
        const notes = new _models__WEBPACK_IMPORTED_MODULE_7__["File"]("Release Notes", _models__WEBPACK_IMPORTED_MODULE_7__["FileType"].Markdown);
        notes.setData(src);
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openFile"])(notes, Object(_editor_View__WEBPACK_IMPORTED_MODULE_4__["defaultViewTypeForFileType"])(notes.type));
    }
    async loadHelp() {
        const response = await fetch("notes/help.md");
        const src = await response.text();
        const help = new _models__WEBPACK_IMPORTED_MODULE_7__["File"]("Help", _models__WEBPACK_IMPORTED_MODULE_7__["FileType"].Markdown);
        help.setData(src);
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openFile"])(help, Object(_editor_View__WEBPACK_IMPORTED_MODULE_4__["defaultViewTypeForFileType"])(help.type));
    }
    publishArc() {
        if (this.state.isContentModified) {
            return this.fork().then(_actions_ArcActions__WEBPACK_IMPORTED_MODULE_23__["publishArc"]);
        }
        else {
            return Object(_actions_ArcActions__WEBPACK_IMPORTED_MODULE_23__["publishArc"])();
        }
    }
    registerShortcuts() {
        mousetrap__WEBPACK_IMPORTED_MODULE_11__["bind"]("command+b", () => {
            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["build"])();
        });
        mousetrap__WEBPACK_IMPORTED_MODULE_11__["bind"]("command+enter", () => {
            if (this.props.embeddingParams.type !== EmbeddingType.Arc) {
                Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["run"])();
            }
            else {
                this.publishArc();
            }
        });
        mousetrap__WEBPACK_IMPORTED_MODULE_11__["bind"]("command+alt+enter", () => {
            if (this.props.embeddingParams.type !== EmbeddingType.Arc) {
                Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["build"])().then(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["run"]);
            }
            else {
                Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["build"])().then(() => this.publishArc());
            }
        });
    }
    logLn(message, kind = "") {
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["logLn"])(message, kind);
    }
    componentWillMount() {
        this.initializeProject();
    }
    componentDidMount() {
        Object(_util__WEBPACK_IMPORTED_MODULE_10__["layout"])();
        this.registerShortcuts();
        window.addEventListener("resize", () => {
            this.setState({
                windowDimensions: App.getWindowDimensions(),
            });
        }, false);
        if (this.props.embeddingParams.type === EmbeddingType.Arc) {
            window.addEventListener("message", (e) => {
                if (typeof e.data === "object" && e.data !== null && e.data.type === "arc/fork") {
                    this.fork();
                }
            });
        }
    }
    share() {
        this.setState({ shareDialog: true });
    }
    async update() {
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["saveProject"])(this.state.fiddle);
    }
    async fork() {
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["pushStatus"])("Forking Project");
        const fiddle = await Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["saveProject"])("");
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["popStatus"])();
        const search = window.location.search;
        if (this.state.fiddle) {
            Object(_util__WEBPACK_IMPORTED_MODULE_10__["assert"])(search.indexOf(this.state.fiddle) >= 0);
            history.replaceState({}, fiddle, search.replace(this.state.fiddle, fiddle));
        }
        else {
            const prefix = search ? search + "&" : "?";
            history.pushState({}, fiddle, `${prefix}f=${fiddle}`);
        }
        this.setState({ fiddle });
        if (this.props.embeddingParams.type === EmbeddingType.Arc) {
            Object(_actions_ArcActions__WEBPACK_IMPORTED_MODULE_23__["notifyArcAboutFork"])(fiddle);
        }
    }
    async gist(fileOrDirectory) {
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["pushStatus"])("Exporting Project");
        const target = fileOrDirectory || this.state.project.getModel();
        const gistURI = await _service__WEBPACK_IMPORTED_MODULE_8__["Service"].exportToGist(target, this.state.fiddle);
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["popStatus"])();
        if (gistURI) {
            if (this.toastContainer) {
                this.toastContainer.showToast(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    "\"Gist Created!\" ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: gistURI, target: "_blank", className: "toast-span" }, "Open in new tab.")));
            }
            console.log(`Gist created: ${gistURI}`);
        }
        else {
            console.log("Failed!");
        }
    }
    async download() {
        this.logLn("Downloading Project ...");
        const downloadService = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../utils/download */ "./src/utils/download.ts"));
        const projectModel = this.state.project.getModel();
        await downloadService.downloadProject(projectModel, this.state.fiddle);
        this.logLn("Project Zip CREATED ");
    }
    toolbarButtonsAreDisabled() {
        return this.state.hasStatus;
    }
    makeToolbarButtons() {
        const toolbarButtons = [
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "ViewWorkspace", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoThreeBars"], null), title: "View Project Workspace", onClick: () => {
                    const workspaceSplits = this.state.workspaceSplits;
                    const first = workspaceSplits[0];
                    const second = workspaceSplits[1];
                    if (this.workspaceSplit) {
                        Object.assign(first, this.workspaceSplit);
                        this.workspaceSplit = null;
                        delete second.value;
                    }
                    else {
                        this.workspaceSplit = Object.assign({}, first);
                        first.max = first.min = 0;
                    }
                    this.setState({ workspaceSplits });
                } })
        ];
        if (this.props.embeddingParams.type === EmbeddingType.Default) {
            toolbarButtons.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "EditInWebAssemblyStudio", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoPencil"], null), label: "Edit in WebAssembly Studio", title: "Edit Project in WebAssembly Studio", isDisabled: !this.state.fiddle, href: `//webassembly.studio/?f=${this.state.fiddle}`, target: "wasm.studio", rel: "noopener noreferrer" }));
        }
        if (this.props.embeddingParams.type === EmbeddingType.None &&
            this.props.update) {
            toolbarButtons.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "UpdateProject", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoPencil"], null), label: "Update", title: "Update Project", isDisabled: this.toolbarButtonsAreDisabled(), onClick: () => {
                    this.update();
                } }));
        }
        if (this.props.embeddingParams.type === EmbeddingType.None ||
            this.props.embeddingParams.type === EmbeddingType.Arc) {
            toolbarButtons.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "ForkProject", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoRepoForked"], null), label: "Fork", title: "Fork Project", isDisabled: this.toolbarButtonsAreDisabled(), onClick: () => {
                    this.fork();
                } }));
        }
        if (this.props.embeddingParams.type === EmbeddingType.None) {
            toolbarButtons.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "CreateGist", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoGist"], null), label: "Create Gist", title: "Create GitHub Gist from Project", isDisabled: this.toolbarButtonsAreDisabled(), onClick: () => {
                    this.gist();
                } }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "Download", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoDesktopDownload"], null), label: "Download", title: "Download Project", isDisabled: this.toolbarButtonsAreDisabled(), onClick: () => {
                    this.download();
                } }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "Share", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoRocket"], null), label: "Share", title: this.state.fiddle ? "Share Project" : "Cannot share a project that has not been forked yet.", isDisabled: this.toolbarButtonsAreDisabled() || !this.state.fiddle, onClick: () => {
                    this.share();
                } }));
        }
        toolbarButtons.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "Build", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoBeaker"], null), label: "Build", title: "Build Project: CtrlCmd + B", isDisabled: this.toolbarButtonsAreDisabled(), onClick: () => {
                Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["build"])();
            } }));
        if (this.props.embeddingParams.type !== EmbeddingType.Arc) {
            toolbarButtons.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "Run", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoGear"], null), label: "Run", title: "Run Project: CtrlCmd + Enter", isDisabled: this.toolbarButtonsAreDisabled(), onClick: () => {
                    Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["run"])();
                } }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "BuildAndRun", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoBeakerGear"], null), label: "Build & Run", title: "Build & Run Project: CtrlCmd + Alt + Enter", isDisabled: this.toolbarButtonsAreDisabled(), onClick: () => {
                    Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["build"])().then(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["run"]);
                } }));
        }
        if (this.props.embeddingParams.type === EmbeddingType.Arc) {
            toolbarButtons.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "Preview", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoGear"], null), label: "Preview", title: "Preview Project: CtrlCmd + Enter", isDisabled: this.toolbarButtonsAreDisabled(), onClick: () => {
                    this.publishArc();
                } }));
            toolbarButtons.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "BuildAndPreview", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoGear"], null), label: "Build & Preview", title: "Build & Preview Project: CtrlCmd + Alt + Enter", isDisabled: this.toolbarButtonsAreDisabled(), onClick: () => {
                    Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["build"])().then(() => this.publishArc());
                } }));
        }
        if (this.props.embeddingParams.type === EmbeddingType.None) {
            toolbarButtons.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "GithubIssues", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoOpenIssue"], null), label: "GitHub Issues", title: "GitHub Issues", customClassName: "issue", href: "https://github.com/wasdk/WebAssemblyStudio", target: "_blank", rel: "noopener noreferrer" }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_13__["Button"], { key: "HelpAndPrivacy", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_12__["GoQuestion"], null), label: "Help & Privacy", title: "Help & Privacy", customClassName: "help", onClick: () => {
                    this.loadHelp();
                } }));
        }
        return toolbarButtons;
    }
    render() {
        const self = this;
        const makeEditorPanes = () => {
            const groups = this.state.tabGroups;
            const activeGroup = this.state.activeTabGroup;
            if (groups.length === 0) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "No Groups");
            }
            return groups.map((group, i) => {
                // tslint:disable-next-line:jsx-key
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_editor__WEBPACK_IMPORTED_MODULE_2__["ViewTabs"], { key: `editorPane${i}`, views: group.views.slice(0), view: group.currentView, preview: group.preview, onSplitViews: () => Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["splitGroup"])(), hasFocus: activeGroup === group, onFocus: () => {
                        // TODO: Should be taken care of in shouldComponentUpdate instead.
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["focusTabGroup"])(group);
                    }, onChangeViewType: (view, type) => Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["setViewType"])(view, type), onClickView: (view) => {
                        if (!(_stores_AppStore__WEBPACK_IMPORTED_MODULE_6__["default"].getActiveTabGroup().currentView === view)) {
                            // Avoids the propagation of content selection between tabs.
                            Object(_util__WEBPACK_IMPORTED_MODULE_10__["resetDOMSelection"])();
                        }
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["focusTabGroup"])(group);
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openView"])(view);
                    }, onDoubleClickView: (view) => {
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["focusTabGroup"])(group);
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openView"])(view, false);
                    }, onClose: (view) => {
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["focusTabGroup"])(group);
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["closeView"])(view);
                    } });
            });
        };
        const editorPanes = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Split__WEBPACK_IMPORTED_MODULE_9__["Split"], { name: "Editors", orientation: _Split__WEBPACK_IMPORTED_MODULE_9__["SplitOrientation"].Vertical, defaultSplit: {
                min: 128,
            }, splits: this.state.editorSplits, onChange: (splits) => {
                this.setState({ editorSplits: splits });
                Object(_util__WEBPACK_IMPORTED_MODULE_10__["layout"])();
            } }, makeEditorPanes());
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fill" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Toasts__WEBPACK_IMPORTED_MODULE_17__["ToastContainer"], { ref: (ref) => this.toastContainer = ref }),
            this.state.newProjectDialog &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NewProjectDialog__WEBPACK_IMPORTED_MODULE_19__["NewProjectDialog"], { isOpen: true, templatesName: this.props.embeddingParams.templatesName, onCancel: () => {
                        this.setState({ newProjectDialog: null });
                    }, onCreate: async (template) => {
                        await Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openProjectFiles"])(template);
                        this.setState({ newProjectDialog: false });
                    } }),
            this.state.newFileDialogDirectory &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NewFileDialog__WEBPACK_IMPORTED_MODULE_14__["NewFileDialog"], { isOpen: true, directory: this.state.newFileDialogDirectory, onCancel: () => {
                        this.setState({ newFileDialogDirectory: null });
                    }, onCreate: (file) => {
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["addFileTo"])(file, this.state.newFileDialogDirectory.getModel());
                        this.setState({ newFileDialogDirectory: null });
                    } }),
            this.state.editFileDialogFile &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EditFileDialog__WEBPACK_IMPORTED_MODULE_15__["EditFileDialog"], { isOpen: true, file: this.state.editFileDialogFile, onCancel: () => {
                        this.setState({ editFileDialogFile: null });
                    }, onChange: (name, description) => {
                        const file = this.state.editFileDialogFile.getModel();
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["updateFileNameAndDescription"])(file, name, description);
                        this.setState({ editFileDialogFile: null });
                    } }),
            this.state.shareDialog &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ShareDialog__WEBPACK_IMPORTED_MODULE_18__["ShareDialog"], { isOpen: true, fiddle: this.state.fiddle, onCancel: () => {
                        this.setState({ shareDialog: false });
                    } }),
            this.state.uploadFileDialogDirectory &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_UploadFileDialog__WEBPACK_IMPORTED_MODULE_16__["UploadFileDialog"], { isOpen: true, directory: this.state.uploadFileDialogDirectory, onCancel: () => {
                        this.setState({ uploadFileDialogDirectory: null });
                    }, onUpload: (files) => {
                        files.map((file) => {
                            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["addFileTo"])(file, this.state.uploadFileDialogDirectory.getModel());
                        });
                        this.setState({ uploadFileDialogDirectory: null });
                    } }),
            this.state.newDirectoryDialog &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NewDirectoryDialog__WEBPACK_IMPORTED_MODULE_20__["NewDirectoryDialog"], { isOpen: true, directory: this.state.newDirectoryDialog, onCancel: () => {
                        this.setState({ newDirectoryDialog: null });
                    }, onCreate: (directory) => {
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["addFileTo"])(directory, this.state.newDirectoryDialog.getModel());
                        this.setState({ newDirectoryDialog: null });
                    } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: "calc(100% - 22px)" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Split__WEBPACK_IMPORTED_MODULE_9__["Split"], { name: "Workspace", orientation: _Split__WEBPACK_IMPORTED_MODULE_9__["SplitOrientation"].Vertical, splits: this.state.workspaceSplits, onChange: (splits) => {
                        this.setState({ workspaceSplits: splits });
                        Object(_util__WEBPACK_IMPORTED_MODULE_10__["layout"])();
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Workspace__WEBPACK_IMPORTED_MODULE_1__["Workspace"], { project: this.state.project, file: this.state.file, onNewFile: (directory) => {
                            this.setState({ newFileDialogDirectory: _models__WEBPACK_IMPORTED_MODULE_7__["ModelRef"].getRef(directory) });
                        }, onEditFile: (file) => {
                            this.setState({ editFileDialogFile: _models__WEBPACK_IMPORTED_MODULE_7__["ModelRef"].getRef(file) });
                        }, onDeleteFile: (file) => {
                            let message = "";
                            if (file instanceof _models__WEBPACK_IMPORTED_MODULE_7__["Directory"]) {
                                message = `Are you sure you want to delete '${file.name}' and its contents?`;
                            }
                            else {
                                message = `Are you sure you want to delete '${file.name}'?`;
                            }
                            if (confirm(message)) {
                                Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["closeTabs"])(file);
                                Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["deleteFile"])(file);
                            }
                        }, onClickFile: (file) => {
                            // Avoids the propagation of content selection between tabs.
                            Object(_util__WEBPACK_IMPORTED_MODULE_10__["resetDOMSelection"])();
                            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openFile"])(file, Object(_editor_View__WEBPACK_IMPORTED_MODULE_4__["defaultViewTypeForFileType"])(file.type));
                        }, onDoubleClickFile: (file) => {
                            if (file instanceof _models__WEBPACK_IMPORTED_MODULE_7__["Directory"]) {
                                return;
                            }
                            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openFile"])(file, Object(_editor_View__WEBPACK_IMPORTED_MODULE_4__["defaultViewTypeForFileType"])(file.type), false);
                        }, onMoveFile: (file, directory) => {
                            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["addFileTo"])(file, directory);
                        }, onUploadFile: (directory) => {
                            this.setState({ uploadFileDialogDirectory: _models__WEBPACK_IMPORTED_MODULE_7__["ModelRef"].getRef(directory) });
                        }, onNewDirectory: (directory) => {
                            this.setState({ newDirectoryDialog: _models__WEBPACK_IMPORTED_MODULE_7__["ModelRef"].getRef(directory) });
                        }, onCreateGist: (fileOrDirectory) => {
                            this.gist(fileOrDirectory);
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fill" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: "40px" } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Toolbar__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], null, this.makeToolbarButtons())),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: "calc(100% - 40px)" } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Split__WEBPACK_IMPORTED_MODULE_9__["Split"], { name: "Console", orientation: _Split__WEBPACK_IMPORTED_MODULE_9__["SplitOrientation"].Horizontal, splits: this.state.controlCenterSplits, onChange: (splits) => {
                                    this.setState({ controlCenterSplits: splits });
                                    Object(_util__WEBPACK_IMPORTED_MODULE_10__["layout"])();
                                } },
                                editorPanes,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ControlCenter__WEBPACK_IMPORTED_MODULE_21__["ControlCenter"], { showSandbox: this.state.showSandbox, onToggle: () => {
                                        const splits = this.state.controlCenterSplits;
                                        splits[1].value = splits[1].value === 40 ? 256 : 40;
                                        this.setState({ controlCenterSplits: splits });
                                        Object(_util__WEBPACK_IMPORTED_MODULE_10__["layout"])();
                                    } })))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StatusBar__WEBPACK_IMPORTED_MODULE_22__["StatusBar"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: "task-runner-content" }));
    }
}


/***/ }),

/***/ "./src/components/Binary.tsx":
/*!***********************************!*\
  !*** ./src/components/Binary.tsx ***!
  \***********************************/
/*! exports provided: colors, BinaryView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryView", function() { return BinaryView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const colors = [
    "#ead780", "#efb8f6", "#89ee39", "#bbc3fe", "#cbed3a",
    "#d0cdee", "#7aec58", "#f2bcd5", "#35ed72", "#cbd5e7",
    "#e2de49", "#79d8f6", "#f3c63e", "#66e9de", "#bee869",
    "#e6cdc7", "#71ec77", "#f3bea5", "#67eb8f", "#edca95",
    "#53efb6", "#ebe8c8", "#a0eb7f", "#b3e1e0", "#d3e484",
    "#8de6c0", "#bfee98", "#c0e0c5", "#88e99a", "#cee1a8",
    "#8be8ad", "#a6e0a3"
];
function toHex(n, width) {
    let s = n.toString(16).toUpperCase();
    while (s.length < width) {
        s = "0" + s;
    }
    return s;
}
class BinaryView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onDidChangeData = () => {
            const data = this.props.view.file.getData();
            this.setState({ data, });
        };
        const data = this.props.view.file.getData();
        this.state = { data };
    }
    componentDidMount() {
        this.props.view.file.onDidChangeData.register(this.onDidChangeData);
    }
    componentWillUnmount() {
        this.props.view.file.onDidChangeData.unregister(this.onDidChangeData);
    }
    componentWillReceiveProps(props) {
        const last = this.props.view;
        const next = props.view;
        if (last !== next) {
            last.file.onDidChangeData.unregister(this.onDidChangeData);
            next.file.onDidChangeData.register(this.onDidChangeData);
        }
    }
    render() {
        const data = new Uint8Array(this.state.data);
        const perRow = 16;
        const rowCount = Math.max(1, Math.ceil(data.length / perRow));
        const rows = [];
        for (let i = 0; i < rowCount; i++) {
            const rowOffset = i * perRow;
            const colCount = Math.min(data.length - rowOffset, perRow);
            const cols = [];
            let str = "";
            for (let j = 0; j < colCount; j++) {
                const b = data[rowOffset + j];
                cols.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "byte", key: "col" + j, style: { color: colors[b & 0x1F] } }, toHex(b, 2)));
                str += b >= 32 && b < 127 ? String.fromCharCode(b) : ".";
            }
            rows.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", key: "row" + i },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "address" }, "0x" + toHex(rowOffset, 8)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "bytes" }, cols),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, str))));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "binary" }, rows);
    }
}


/***/ }),

/***/ "./src/components/BrowserNotSupported.tsx":
/*!************************************************!*\
  !*** ./src/components/BrowserNotSupported.tsx ***!
  \************************************************/
/*! exports provided: BrowserNotSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserNotSupported", function() { return BrowserNotSupported; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


class BrowserNotSupported extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_modal__WEBPACK_IMPORTED_MODULE_1__, { isOpen: true, contentLabel: "Browser Not Supported", className: "modal", overlayClassName: "overlay", ariaHideApp: false },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-title-bar" }, "Browser Version Not Supported"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "browser-not-supported-description" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "https://developer.mozilla.org/en-US/docs/WebAssembly" }, "WebAssembly"),
                    " is not available in your browser. Please try using the latest version of Edge, Safari, Chrome or Firefox.")));
    }
}


/***/ }),

/***/ "./src/components/ControlCenter.tsx":
/*!******************************************!*\
  !*** ./src/components/ControlCenter.tsx ***!
  \******************************************/
/*! exports provided: ControlCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlCenter", function() { return ControlCenter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Split */ "./src/components/Split.tsx");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor */ "./src/components/editor/index.ts");
/* harmony import */ var _Sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sandbox */ "./src/components/Sandbox.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _Problems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Problems */ "./src/components/Problems.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */









class ControlCenter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onOutputChanged = () => {
            this.updateOutputView();
        };
        this.onDidChangeProblems = () => {
            this.updateOutputView();
        };
        const outputFile = _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__["default"].getOutput().getModel();
        this.outputView = new _editor__WEBPACK_IMPORTED_MODULE_2__["View"](outputFile);
        this.state = {
            visible: "output",
            splits: [
                { min: 128, value: 512 },
                { min: 128, value: 256 }
            ],
            problemCount: this.getProblemCount(),
            outputLineCount: this.getOutputLineCount()
        };
    }
    componentDidMount() {
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__["default"].onOutputChanged.register(this.onOutputChanged);
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__["default"].onDidChangeProblems.register(this.onDidChangeProblems);
    }
    componentWillUnmount() {
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__["default"].onOutputChanged.unregister(this.onOutputChanged);
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__["default"].onDidChangeProblems.unregister(this.onDidChangeProblems);
    }
    setOutputViewEditor(editor) {
        this.outputViewEditor = editor;
    }
    updateOutputView() {
        if (!this.updateOutputViewTimeout) {
            this.updateOutputViewTimeout = window.setTimeout(() => {
                this.updateOutputViewTimeout = null;
                this.setState({
                    problemCount: this.getProblemCount(),
                    outputLineCount: this.getOutputLineCount()
                });
            });
        }
        if (!this.outputViewEditor) {
            return;
        }
        this.outputViewEditor.revealLastLine();
    }
    createPane() {
        switch (this.state.visible) {
            case "output":
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_editor__WEBPACK_IMPORTED_MODULE_2__["EditorView"], { ref: (ref) => this.setOutputViewEditor(ref), view: this.outputView, options: { renderIndentGuides: false } });
            case "problems":
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Problems__WEBPACK_IMPORTED_MODULE_6__["Problems"], null);
            default:
                return null;
        }
    }
    getOutputLineCount() {
        return this.outputView.file.buffer.getLineCount();
    }
    getProblemCount() {
        let problemCount = 0;
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__["default"].getProject().getModel().forEachFile((file) => {
            problemCount += file.problems.length;
        }, false, true);
        return problemCount;
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fill" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "tabs", style: { display: "flex" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_4__["GoThreeBars"], null), title: "View Console", onClick: () => {
                            return this.props.onToggle && this.props.onToggle();
                        } })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_editor__WEBPACK_IMPORTED_MODULE_2__["Tabs"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_editor__WEBPACK_IMPORTED_MODULE_2__["Tab"], { label: `Output (${this.state.outputLineCount})`, isActive: this.state.visible === "output", onClick: () => {
                                this.setState({ visible: "output" });
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_editor__WEBPACK_IMPORTED_MODULE_2__["Tab"], { label: `Problems (${this.state.problemCount})`, isActive: this.state.visible === "problems", onClick: () => {
                                this.setState({ visible: "problems" });
                            } })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: "calc(100% - 40px)" } }, this.props.showSandbox ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Split__WEBPACK_IMPORTED_MODULE_1__["Split"], { name: "editor/sandbox", orientation: _Split__WEBPACK_IMPORTED_MODULE_1__["SplitOrientation"].Vertical, defaultSplit: {
                        min: 256,
                    }, splits: this.state.splits, onChange: (splits) => {
                        this.setState({ splits });
                        Object(_util__WEBPACK_IMPORTED_MODULE_8__["layout"])();
                    } },
                    this.createPane(),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Sandbox__WEBPACK_IMPORTED_MODULE_3__["Sandbox"], null)) : this.createPane()));
    }
}


/***/ }),

/***/ "./src/components/DirectoryTree.tsx":
/*!******************************************!*\
  !*** ./src/components/DirectoryTree.tsx ***!
  \******************************************/
/*! exports provided: DirectoryTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryTree", function() { return DirectoryTree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/service.ts");
/* harmony import */ var _monaco_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../monaco-utils */ "./src/monaco-utils.ts");
/* harmony import */ var _editor_View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/View */ "./src/components/editor/View.tsx");
/* harmony import */ var _actions_AppActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/AppActions */ "./src/actions/AppActions.ts");
/* harmony import */ var _utils_Template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Template */ "./src/utils/Template.ts");
/* harmony import */ var _monaco_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../monaco-controller */ "./src/monaco-controller.ts");
/* harmony import */ var _monaco_dnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../monaco-dnd */ "./src/monaco-dnd.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */









class DirectoryTree extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.lastClickedTime = Date.now();
        this.lastClickedFile = null;
        this.onLayout = () => {
            this.tree.layout();
        };
        // tslint:disable-next-line
        this.contextViewService = new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].ContextViewService(document.documentElement, null, { trace: () => { } });
        this.contextMenuService = new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].ContextMenuService(document.documentElement, null, null, this.contextViewService);
        this.state = { directory: this.props.directory };
        this.status = {
            push: _actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["pushStatus"],
            pop: _actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["popStatus"],
            logLn: _actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["logLn"]
        };
    }
    componentDidMount() {
        this.ensureTree();
        this.tree.model.setInput(this.props.directory.getModel());
        this.tree.model.onDidSelect((e) => {
            if (e.selection.length) {
                this.onClickFile(e.selection[0]);
            }
        });
        document.addEventListener("layout", this.onLayout);
    }
    componentWillUnmount() {
        document.removeEventListener("layout", this.onLayout);
    }
    componentWillReceiveProps(props) {
        if (this.state.directory !== props.directory) {
            this.tree.model.setInput(props.directory.getModel());
            this.setState({ directory: props.directory });
        }
        else {
            this.tree.refresh();
            _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].expandTree(this.tree);
        }
    }
    setContainer(container) {
        if (container == null) {
            return;
        }
        this.container = container;
    }
    ensureTree() {
        if (this.container.lastChild) {
            this.container.removeChild(this.container.lastChild);
        }
        this.tree = new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Tree(this.container, {
            dataSource: {
                /**
                 * Returns the unique identifier of the given element.
                 * No more than one element may use a given identifier.
                 */
                getId: function (tree, element) {
                    return element.key;
                },
                /**
                 * Returns a boolean value indicating whether the element has children.
                 */
                hasChildren: function (tree, element) {
                    return element instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Directory"];
                },
                /**
                 * Returns the element's children as an array in a promise.
                 */
                getChildren: function (tree, element) {
                    return monaco.Promise.as(element.children);
                },
                /**
                 * Returns the element's parent in a promise.
                 */
                getParent: function (tree, element) {
                    return monaco.Promise.as(element.parent);
                }
            },
            renderer: {
                getHeight: function (tree, element) {
                    return 24;
                },
                renderTemplate: function (tree, templateId, container) {
                    return new _utils_Template__WEBPACK_IMPORTED_MODULE_6__["FileTemplate"](container);
                },
                renderElement: function (tree, element, templateId, templateData) {
                    templateData.set(element);
                },
                disposeTemplate: function (tree, templateId, templateData) {
                    templateData.dispose();
                }
            },
            controller: Object(_monaco_controller__WEBPACK_IMPORTED_MODULE_7__["createController"])(this, (file, event) => this.getActions(file, event), true),
            dnd: new _monaco_dnd__WEBPACK_IMPORTED_MODULE_8__["DragAndDrop"](this)
        });
    }
    getActions(file, event) {
        const actions = [];
        // Upload options (Limited to delete & edit)
        if (this.props.onlyUploadActions) {
            if (!file.parent) {
                return actions;
            }
            this.props.onDeleteFile && actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Delete", "octicon-x", true, () => {
                return this.props.onDeleteFile(file);
            }));
            this.props.onEditFile && actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Edit", "octicon-pencil", true, () => {
                return this.props.onEditFile(file);
            }));
            return actions;
        }
        // Directory options
        if (file instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Directory"]) {
            this.props.onNewFile && actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "New File", "octicon-file-add", true, () => {
                return this.props.onNewFile(file);
            }));
            this.props.onNewDirectory && actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "New Directory", "octicon-file-add", true, () => {
                return this.props.onNewDirectory(file);
            }));
            this.props.onUploadFile && actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Upload Files", "octicon-cloud-upload", true, () => {
                return this.props.onUploadFile(file);
            }));
        }
        // Common file options
        if (!(file instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Project"])) {
            this.props.onEditFile && actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Edit", "octicon-pencil", true, () => {
                return this.props.onEditFile(file);
            }));
            this.props.onDeleteFile && actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Delete", "octicon-x", true, () => {
                return this.props.onDeleteFile(file);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Download", "octicon-cloud-download", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].download(file);
            }));
        }
        // Create a gist from everything but binary
        if (!Object(_models__WEBPACK_IMPORTED_MODULE_1__["isBinaryFileType"])(file.type)) {
            this.props.onCreateGist && actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Create Gist", "octicon-gist", true, () => {
                return this.props.onCreateGist(file);
            }));
        }
        // File-type specific separated with a ruler
        if (file.type === _models__WEBPACK_IMPORTED_MODULE_1__["FileType"].Wasm) {
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Validate", "octicon-check ruler", true, async () => {
                const result = await _service__WEBPACK_IMPORTED_MODULE_2__["Service"].validateWasmWithBinaryen(file, this.status);
                window.alert(result ? "Module is valid" : "Module is not valid");
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Optimize", "octicon-gear", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].optimizeWasmWithBinaryen(file, this.status);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Disassemble", "octicon-file-code", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].disassembleWasmWithWabt(file, this.status);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Disassemble w/ Binaryen", "octicon-file-code", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].disassembleWasmWithBinaryen(file, this.status);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "To asm.js", "octicon-file-code", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].convertWasmToAsmWithBinaryen(file, this.status);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Generate Call Graph", "octicon-gear", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].getWasmCallGraphWithBinaryen(file, this.status);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "To Firefox x86", "octicon-file-binary", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].disassembleX86(file, this.status);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "To Firefox x86 Baseline", "octicon-file-binary", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].disassembleX86(file, this.status, "--wasm-always-baseline");
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Binary Explorer", "octicon-file-binary", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].openBinaryExplorer(file);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "View as Binary", "octicon-file-binary", true, () => {
                Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openFile"])(file, _editor_View__WEBPACK_IMPORTED_MODULE_4__["ViewType"].Binary, false);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Twiggy", "octicon-file-binary", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].twiggyWasm(file, this.status);
            }));
        }
        else if (file.type === _models__WEBPACK_IMPORTED_MODULE_1__["FileType"].C || file.type === _models__WEBPACK_IMPORTED_MODULE_1__["FileType"].Cpp) {
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Clang-Format", "octicon-quote ruler", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].clangFormat(file, this.status);
            }));
        }
        else if (file.type === _models__WEBPACK_IMPORTED_MODULE_1__["FileType"].Wat) {
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Assemble", "octicon-file-binary ruler", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].assembleWatWithWabt(file, this.status);
            }));
            actions.push(new _monaco_utils__WEBPACK_IMPORTED_MODULE_3__["MonacoUtils"].Action("x", "Assemble w/ Binaryen", "octicon-file-binary", true, () => {
                _service__WEBPACK_IMPORTED_MODULE_2__["Service"].assembleWatWithBinaryen(file, this.status);
            }));
        }
        return actions;
    }
    onClickFile(file) {
        if (file instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Directory"]) {
            return;
        }
        if (Date.now() - this.lastClickedTime < 500 && this.lastClickedFile === file && this.props.onDoubleClickFile) {
            this.props.onDoubleClickFile(file);
        }
        else if (this.props.onClickFile) {
            this.props.onClickFile(file);
        }
        this.lastClickedTime = Date.now();
        this.lastClickedFile = file;
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fill", ref: (ref) => this.setContainer(ref) });
    }
}


/***/ }),

/***/ "./src/components/EditFileDialog.tsx":
/*!*******************************************!*\
  !*** ./src/components/EditFileDialog.tsx ***!
  \*******************************************/
/*! exports provided: EditFileDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFileDialog", function() { return EditFileDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _Widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Widgets */ "./src/components/Widgets.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */








class EditFileDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onChangeName = (event) => {
            this.setState({ name: event.target.value });
        };
        this.onChangeDescription = (event) => {
            this.setState({ description: event.target.value });
        };
        const { description, name, type: fileType } = props.file.getModel();
        this.state = {
            description,
            name,
            fileType,
        };
    }
    getNameError() {
        const fileNameError = Object(_util__WEBPACK_IMPORTED_MODULE_7__["validateFileName"])(this.state.name, this.state.fileType);
        if (fileNameError) {
            return fileNameError;
        }
        const directory = _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].getParent(this.props.file);
        const file = _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].getImmediateChild(directory, this.state.name);
        if (file && this.props.file !== file) {
            return `File '${this.state.name}' already exists`;
        }
        return "";
    }
    render() {
        const file = this.props.file;
        const fileModel = file.getModel();
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_modal__WEBPACK_IMPORTED_MODULE_1__, { isOpen: this.props.isOpen, contentLabel: "Edit " + (fileModel instanceof _models__WEBPACK_IMPORTED_MODULE_5__["Directory"] ? "Directory" : "File"), className: "modal", overlayClassName: "overlay", ariaHideApp: false },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-title-bar" }, `Edit ${fileModel instanceof _models__WEBPACK_IMPORTED_MODULE_5__["Directory"] ? "Directory" : "File"} ${fileModel.name}`),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { flex: 1, padding: "8px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["TextInputBox"], { label: "Name:", error: this.getNameError(), value: this.state.name, onChange: this.onChangeName }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["Spacer"], { height: 8 }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["TextInputBox"], { label: "Description:", value: this.state.description, onChange: this.onChangeDescription })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoX"], null), label: "Cancel", title: "Cancel", onClick: () => {
                            this.props.onCancel();
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoPencil"], null), label: "Edit", title: "Edit", isDisabled: !this.state.name || !!this.getNameError(), onClick: () => {
                            return this.props.onChange && this.props.onChange(this.state.name, this.state.description);
                        } }))));
    }
}


/***/ }),

/***/ "./src/components/ErrorBoundary.tsx":
/*!******************************************!*\
  !*** ./src/components/ErrorBoundary.tsx ***!
  \******************************************/
/*! exports provided: ErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Logger */ "./src/utils/Logger.ts");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = { error: null, info: null };
    }
    componentDidCatch(error, info) {
        this.setState({ error, info });
        _utils_Logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].captureException(error, { extra: info });
    }
    getNewIssueUrl() {
        const id = _utils_Logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].getLastEventId();
        return `https://github.com/wasdk/WebAssemblyStudio/issues/new?body=Error%20ID:%20${id}`;
    }
    getStackTrace() {
        return this.state.info.componentStack
            .split("\n")
            .map((line, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { key: `stacktrace-line-${i}`, className: "error-dialog-stacktrace-line" }, line)));
    }
    render() {
        if (this.state.error) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_modal__WEBPACK_IMPORTED_MODULE_1__, { isOpen: true, contentLabel: "An error occured", className: "modal", overlayClassName: "overlay", ariaHideApp: false },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-title-bar" }, "An error occured"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "error-dialog-description" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "An error occured in WebAssembly Studio. The error has been logged and will be investigated as soon as possible. Please open an issue on Github for further support."),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "error-dialog-stacktrace" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "error-dialog-stacktrace-title" },
                                "Error: ",
                                this.state.error.message),
                            this.getStackTrace()),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "error-dialog-error-id" },
                            "Error ID: ",
                            _utils_Logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].getLastEventId())),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_4__["GoSync"], null), label: "Reload", title: "Reload", href: "https://webassembly.studio/" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_4__["GoOpenIssue"], null), label: "Open Issue on Github", title: "Open Issue on Github", href: this.getNewIssueUrl(), target: "_blank", rel: "noopener noreferrer" })))));
        }
        else {
            return this.props.children;
        }
    }
}


/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "wasmStudioHeader" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "waHeaderText" }, "KIDE"));
    }
}


/***/ }),

/***/ "./src/components/Markdown.tsx":
/*!*************************************!*\
  !*** ./src/components/Markdown.tsx ***!
  \*************************************/
/*! exports provided: Markdown, MarkdownView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Markdown", function() { return Markdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownView", function() { return MarkdownView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/service.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


class Markdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            html: "Loading ..."
        };
    }
    async componentDidMount() {
        const html = await _service__WEBPACK_IMPORTED_MODULE_1__["Service"].compileMarkdownToHtml(this.props.src);
        this.setState({ html });
    }
    async componentWillReceiveProps(props) {
        if (this.props.src !== props.src) {
            const html = await _service__WEBPACK_IMPORTED_MODULE_1__["Service"].compileMarkdownToHtml(props.src);
            this.setState({ html });
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { padding: "8px", height: "100%", overflow: "scroll" }, className: "md", dangerouslySetInnerHTML: { __html: this.state.html } });
    }
}
class MarkdownView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onDidChangeBuffer = () => {
            this.setState({
                markdown: this.props.view.file.buffer.getValue()
            });
        };
        this.state = {
            markdown: this.props.view.file.buffer.getValue()
        };
    }
    componentDidMount() {
        this.props.view.file.onDidChangeBuffer.register(this.onDidChangeBuffer);
    }
    componentWillUnmount() {
        this.props.view.file.onDidChangeBuffer.unregister(this.onDidChangeBuffer);
    }
    componentWillReceiveProps(props) {
        const last = this.props.view;
        const next = props.view;
        if (last !== next) {
            last.file.onDidChangeBuffer.unregister(this.onDidChangeBuffer);
            next.file.onDidChangeBuffer.register(this.onDidChangeBuffer);
            this.setState({
                markdown: props.view.file.buffer.getValue()
            });
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Markdown, { src: this.state.markdown });
    }
}


/***/ }),

/***/ "./src/components/NewDirectoryDialog.tsx":
/*!***********************************************!*\
  !*** ./src/components/NewDirectoryDialog.tsx ***!
  \***********************************************/
/*! exports provided: NewDirectoryDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDirectoryDialog", function() { return NewDirectoryDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _Widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Widgets */ "./src/components/Widgets.tsx");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */







class NewDirectoryDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onChangeName = (event) => {
            this.setState({ name: event.target.value });
        };
        this.state = {
            name: ""
        };
    }
    nameError() {
        const directory = this.props.directory;
        if (this.state.name) {
            if (!/^[a-z0-9\.\-\_]+$/i.test(this.state.name)) {
                return "Illegal characters in directory name.";
            }
            else if (directory && _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].getImmediateChild(directory, this.state.name)) {
                return `Directory '${this.state.name}' already exists.`;
            }
        }
        return "";
    }
    createButtonLabel() {
        return "Create";
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_modal__WEBPACK_IMPORTED_MODULE_1__, { isOpen: this.props.isOpen, contentLabel: "Create New Directory", className: "modal", overlayClassName: "overlay", ariaHideApp: false },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-title-bar" }, "Create New Directory"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { flex: 1, padding: "8px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["TextInputBox"], { label: "Name:", error: this.nameError(), value: this.state.name, onChange: this.onChangeName })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoX"], null), label: "Cancel", title: "Cancel", onClick: () => {
                            this.props.onCancel();
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoFile"], null), label: this.createButtonLabel(), title: "Create New Directory", isDisabled: !this.state.name || !!this.nameError(), onClick: () => {
                            const directory = new _models__WEBPACK_IMPORTED_MODULE_5__["Directory"](this.state.name);
                            return this.props.onCreate && this.props.onCreate(directory);
                        } }))));
    }
}


/***/ }),

/***/ "./src/components/NewFileDialog.tsx":
/*!******************************************!*\
  !*** ./src/components/NewFileDialog.tsx ***!
  \******************************************/
/*! exports provided: NewFileDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFileDialog", function() { return NewFileDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _Widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Widgets */ "./src/components/Widgets.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */








class NewFileDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onChangeName = (event) => {
            this.setState({ name: event.target.value });
        };
        this.state = {
            fileType: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].C,
            description: "",
            name: ""
        };
    }
    getNameError() {
        const directory = this.props.directory;
        if (this.state.name) {
            const fileNameError = Object(_util__WEBPACK_IMPORTED_MODULE_7__["validateFileName"])(this.state.name, this.state.fileType);
            if (fileNameError) {
                return fileNameError;
            }
            const directory = this.props.directory;
            if (directory && _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].getImmediateChild(directory, this.state.name)) {
                return `File '${this.state.name}' already exists`;
            }
        }
        return "";
    }
    fileName() {
        let name = this.state.name;
        const extension = Object(_models__WEBPACK_IMPORTED_MODULE_5__["extensionForFileType"])(this.state.fileType);
        if (!name.endsWith("." + extension)) {
            name += "." + extension;
        }
        return name;
    }
    createButtonLabel() {
        return "Create";
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_modal__WEBPACK_IMPORTED_MODULE_1__, { isOpen: this.props.isOpen, contentLabel: "Create New File", className: "modal show-file-icons", overlayClassName: "overlay", ariaHideApp: false },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-title-bar" }, "Create New File"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex" } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: 250 } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListBox"], { value: this.state.fileType, height: 240, onSelect: (fileType) => {
                                    let description = "";
                                    switch (fileType) {
                                        case _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].C:
                                            description = "Creates a file containing C source code.";
                                            break;
                                        case _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Cpp:
                                            description = "Creates a file containing C++ source code.";
                                            break;
                                        case _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Cretonne:
                                            description = "Cretonne intermediate language (IL) source code.";
                                            break;
                                        default:
                                            description = "Creates a " + Object(_models__WEBPACK_IMPORTED_MODULE_5__["nameForFileType"])(fileType) + " file.";
                                            break;
                                    }
                                    this.setState({ fileType, description });
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].C, label: "C File (.c)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].C) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Cpp, label: "C++ File (.cpp)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Cpp) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Rust, label: "Rust File (.rs)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Rust) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Cretonne, label: "Cretonne (.cton)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Cretonne) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Wat, label: "Wat (.wat)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Wat) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].JavaScript, label: "JavaScript (.js)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].JavaScript) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].TypeScript, label: "TypeScript (.ts)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].TypeScript) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].HTML, label: "HTML (.html)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].HTML) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].CSS, label: "CSS (.css)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].CSS) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Markdown, label: "Markdown (.md)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].Markdown) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].JSON, label: "JSON (.json)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].JSON) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].DOT, label: "GraphViz DOT (.dot)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].DOT) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["ListItem"], { value: _models__WEBPACK_IMPORTED_MODULE_5__["FileType"].TOML, label: "TOML Document (.toml)", icon: Object(_models__WEBPACK_IMPORTED_MODULE_5__["getIconForFileType"])(_models__WEBPACK_IMPORTED_MODULE_5__["FileType"].TOML) }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "new-file-dialog-description" }, this.state.description))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { flex: 1, padding: "8px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_6__["TextInputBox"], { label: "Name: " + (this.props.directory ? _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].getPath(this.props.directory) + "/" : ""), error: this.getNameError(), value: this.state.name, onChange: this.onChangeName })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoX"], null), label: "Cancel", title: "Create New File", onClick: () => {
                            this.props.onCancel();
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoFile"], null), label: this.createButtonLabel(), title: "Create New File", isDisabled: !this.state.fileType || !this.state.name || !!this.getNameError(), onClick: () => {
                            const file = new _models__WEBPACK_IMPORTED_MODULE_5__["File"](this.fileName(), this.state.fileType);
                            return this.props.onCreate && this.props.onCreate(file);
                        } }))));
    }
}


/***/ }),

/***/ "./src/components/NewProjectDialog.tsx":
/*!*********************************************!*\
  !*** ./src/components/NewProjectDialog.tsx ***!
  \*********************************************/
/*! exports provided: NewProjectDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectDialog", function() { return NewProjectDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/service.ts");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* harmony import */ var _Widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Widgets */ "./src/components/Widgets.tsx");
/* harmony import */ var _utils_fetchTemplates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetchTemplates */ "./src/utils/fetchTemplates.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */








class NewProjectDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            template: null,
            description: "",
            name: "",
            templates: []
        };
    }
    async componentDidMount() {
        const config = await Object(_config__WEBPACK_IMPORTED_MODULE_7__["default"])();
        const templatesPath = config.templates[this.props.templatesName];
        const json = await Object(_utils_fetchTemplates__WEBPACK_IMPORTED_MODULE_6__["default"])(templatesPath);
        const base = new URL(templatesPath, location.href);
        const templates = [];
        for (const [key, entry] of Object.entries(json)) {
            const name = entry.name || "";
            const description = entry.description || "";
            const icon = entry.icon || "";
            templates.push({
                name,
                description,
                icon,
                files: entry.files,
                baseUrl: new URL(key + "/", base)
            });
        }
        this.setState({ templates });
        this.setTemplate(templates[0]);
    }
    async setTemplate(template) {
        const description = await _service__WEBPACK_IMPORTED_MODULE_1__["Service"].compileMarkdownToHtml(template.description);
        this.setState({ template, description });
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_modal__WEBPACK_IMPORTED_MODULE_2__, { isOpen: this.props.isOpen, contentLabel: "Create New Project", className: "modal show-file-icons", overlayClassName: "overlay", ariaHideApp: false },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-title-bar" }, "Create New Project"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex" } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: 200 } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_5__["ListBox"], { value: this.state.template, height: 240, onSelect: (template) => {
                                    this.setTemplate(template);
                                } }, this.state.templates.map((template) => {
                                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_5__["ListItem"], { key: template.name, value: template, label: template.name, icon: template.icon });
                            }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { flex: 1 }, className: "new-project-dialog-description" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "md", dangerouslySetInnerHTML: { __html: this.state.description } })))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { flex: 1, padding: "8px" } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_4__["GoX"], null), label: "Cancel", title: "Cancel", onClick: () => {
                            this.props.onCancel();
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_4__["GoFile"], null), label: "Create", title: "Create", isDisabled: !this.state.template, onClick: () => {
                            return this.props.onCreate && this.props.onCreate(this.state.template);
                        } }))));
    }
}


/***/ }),

/***/ "./src/components/Problems.tsx":
/*!*************************************!*\
  !*** ./src/components/Problems.tsx ***!
  \*************************************/
/*! exports provided: Problems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Problems", function() { return Problems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _utils_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Template */ "./src/utils/Template.ts");
/* harmony import */ var _monaco_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../monaco-utils */ "./src/monaco-utils.ts");
/* harmony import */ var _actions_AppActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/AppActions */ "./src/actions/AppActions.ts");
/* harmony import */ var _editor_View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor/View */ "./src/components/editor/View.tsx");
/* harmony import */ var _monaco_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../monaco-controller */ "./src/monaco-controller.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */








class Problems extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        // tslint:disable-next-line
        this.contextViewService = new _monaco_utils__WEBPACK_IMPORTED_MODULE_4__["MonacoUtils"].ContextViewService(document.documentElement, null, { trace: () => { } });
        this.contextMenuService = new _monaco_utils__WEBPACK_IMPORTED_MODULE_4__["MonacoUtils"].ContextMenuService(document.documentElement, null, null, this.contextViewService);
    }
    componentDidMount() {
        this.ensureTree();
        this.tree.model.setInput(_stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].getProject().getModel());
        this.tree.model.onDidSelect((e) => {
            if (e.selection.length) {
                this.onSelectProblem(e.selection[0]);
            }
        });
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].onDidChangeProblems.register(() => {
            this.tree.refresh();
            _monaco_utils__WEBPACK_IMPORTED_MODULE_4__["MonacoUtils"].expandTree(this.tree);
        });
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].onLoadProject.register(() => {
            this.tree.model.setInput(_stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].getProject().getModel());
        });
    }
    componentWillReceiveProps(props) {
        this.tree.refresh();
        _monaco_utils__WEBPACK_IMPORTED_MODULE_4__["MonacoUtils"].expandTree(this.tree);
    }
    setContainer(container) {
        if (container == null) {
            return;
        }
        this.container = container;
    }
    ensureTree() {
        if (this.container.lastChild) {
            this.container.removeChild(this.container.lastChild);
        }
        this.tree = new _monaco_utils__WEBPACK_IMPORTED_MODULE_4__["MonacoUtils"].Tree(this.container, {
            dataSource: {
                /**
                 * Returns the unique identifier of the given element.
                 * No more than one element may use a given identifier.
                 */
                getId: function (tree, element) {
                    return element.key;
                },
                /**
                 * Returns a boolean value indicating whether the element has children.
                 */
                hasChildren: function (tree, element) {
                    if (element instanceof _models__WEBPACK_IMPORTED_MODULE_2__["Directory"] && element.children.length) {
                        return true;
                    }
                    else if (element instanceof _models__WEBPACK_IMPORTED_MODULE_2__["File"]) {
                        return element.problems.length > 0;
                    }
                    return false;
                },
                /**
                 * Returns the element's children as an array in a promise.
                 */
                getChildren: function (tree, element) {
                    if (element instanceof _models__WEBPACK_IMPORTED_MODULE_2__["Directory"] && element.children.length) {
                        const children = [];
                        element.forEachFile((file) => {
                            if (file.problems.length) {
                                children.push(file);
                            }
                        }, false, true);
                        return monaco.Promise.as(children);
                    }
                    else if (element instanceof _models__WEBPACK_IMPORTED_MODULE_2__["File"]) {
                        return monaco.Promise.as(element.problems);
                    }
                    return null;
                },
                /**
                 * Returns the element's parent in a promise.
                 */
                getParent: function (tree, element) {
                    if (element instanceof _models__WEBPACK_IMPORTED_MODULE_2__["File"]) {
                        return monaco.Promise.as(element.getProject());
                    }
                    return monaco.Promise.as(element.file);
                }
            },
            renderer: {
                getHeight: function (tree, element) {
                    return 24;
                },
                getTemplateId(tree, element) {
                    if (element instanceof _models__WEBPACK_IMPORTED_MODULE_2__["File"]) {
                        return "file";
                    }
                    return "problem";
                },
                renderTemplate: function (tree, templateId, container) {
                    return templateId === "problem" ? new _utils_Template__WEBPACK_IMPORTED_MODULE_3__["ProblemTemplate"](container) : new _utils_Template__WEBPACK_IMPORTED_MODULE_3__["FileTemplate"](container);
                },
                renderElement: function (tree, element, templateId, templateData) {
                    templateData.set(element);
                },
                disposeTemplate: function (tree, templateId, templateData) {
                    templateData.dispose();
                }
            },
            controller: Object(_monaco_controller__WEBPACK_IMPORTED_MODULE_7__["createController"])(this)
        });
    }
    onSelectProblem(problem) {
        if (problem instanceof _models__WEBPACK_IMPORTED_MODULE_2__["File"]) {
            return;
        }
        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_5__["openFile"])(problem.file, _editor_View__WEBPACK_IMPORTED_MODULE_6__["ViewType"].Editor, true);
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fill", ref: (ref) => this.setContainer(ref) });
    }
}


/***/ }),

/***/ "./src/components/Sandbox.tsx":
/*!************************************!*\
  !*** ./src/components/Sandbox.tsx ***!
  \************************************/
/*! exports provided: Sandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sandbox", function() { return Sandbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Split */ "./src/components/Split.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _actions_AppActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/AppActions */ "./src/actions/AppActions.ts");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





class Sandbox extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.onResizeBegin = () => {
            this.container.style.pointerEvents = "none";
        };
        this.onResizeEnd = () => {
            this.container.style.pointerEvents = "auto";
        };
        this.onSandboxRun = (e) => {
            this.run(e.project, e.src);
        };
    }
    setContainer(container) {
        if (container == null) {
            return;
        }
        this.container = container;
    }
    componentDidMount() {
        _Split__WEBPACK_IMPORTED_MODULE_1__["Split"].onResizeBegin.register(this.onResizeBegin);
        _Split__WEBPACK_IMPORTED_MODULE_1__["Split"].onResizeEnd.register(this.onResizeEnd);
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].onSandboxRun.register(this.onSandboxRun);
    }
    componentWillUnmount() {
        _Split__WEBPACK_IMPORTED_MODULE_1__["Split"].onResizeBegin.unregister(this.onResizeBegin);
        _Split__WEBPACK_IMPORTED_MODULE_1__["Split"].onResizeEnd.unregister(this.onResizeEnd);
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].onSandboxRun.unregister(this.onSandboxRun);
    }
    run(project, src) {
        const iframe = document.createElement("iframe");
        iframe.className = "sandbox";
        iframe.src = URL.createObjectURL(new Blob([src], { type: "text/html" }));
        if (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
        this.container.appendChild(iframe);
        const contentWindow = iframe.contentWindow;
        const logger = { logLn: _actions_AppActions__WEBPACK_IMPORTED_MODULE_3__["logLn"], };
        // Hijack Console
        contentWindow.console.log = (log => function () {
            logger.logLn(Array.prototype.join.call(arguments));
            log.apply(contentWindow.console, arguments);
        })(contentWindow.console.log);
        contentWindow.console.info = (info => function () {
            logger.logLn(Array.prototype.join.call(arguments), "info");
            info.apply(contentWindow.console, arguments);
        })(contentWindow.console.info);
        contentWindow.console.warn = (warn => function () {
            logger.logLn(Array.prototype.join.call(arguments), "warn");
            warn.apply(contentWindow.console, arguments);
        })(contentWindow.console.warn);
        contentWindow.console.error = (error => function () {
            logger.logLn(Array.prototype.join.call(arguments), "error");
            error.apply(contentWindow.console, arguments);
        })(contentWindow.console.error);
        // Hijack fetch
        contentWindow.fetch = async (input, init) => {
            const url = new URL(input, "http://example.org/src/main.html");
            const file = project.getFile(url.pathname.substr(1));
            if (file) {
                return Promise.resolve(new Response(file.getData(), {
                    status: 200,
                    statusText: "OK",
                    headers: {
                        "Content-Type": Object(_models__WEBPACK_IMPORTED_MODULE_2__["mimeTypeForFileType"])(file.type)
                    }
                }));
            }
            const response = await fetch(input, init);
            if (response.status === 404) {
                return Promise.reject(`Failed to fetch: ${response.url}`);
            }
            else {
                return Promise.resolve(response);
            }
        };
        contentWindow.getFileURL = (path) => {
            const file = project.getFile(path);
            if (!file) {
                logger.logLn(`Cannot find file ${path}`, "error");
                return;
            }
            const blob = new Blob([file.getData()], { type: Object(_models__WEBPACK_IMPORTED_MODULE_2__["mimeTypeForFileType"])(file.type) });
            return window.URL.createObjectURL(blob);
        };
        const ready = new Promise((resolve) => {
            iframe.onready = () => {
                resolve(contentWindow);
            };
        });
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fill", ref: (ref) => this.setContainer(ref) });
    }
}


/***/ }),

/***/ "./src/components/ShareDialog.tsx":
/*!****************************************!*\
  !*** ./src/components/ShareDialog.tsx ***!
  \****************************************/
/*! exports provided: ShareDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDialog", function() { return ShareDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* harmony import */ var _Widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Widgets */ "./src/components/Widgets.tsx");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





class ShareDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const urlPrefix = `${location.protocol}//${location.host}${location.pathname}`;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_modal__WEBPACK_IMPORTED_MODULE_1__, { isOpen: this.props.isOpen, contentLabel: "Share Project", className: "modal", overlayClassName: "overlay", ariaHideApp: false },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-title-bar" }, "Share Project"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { flex: 1, padding: "8px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_4__["TextInputBox"], { label: "URL", value: `${urlPrefix}?f=${this.props.fiddle}` }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_4__["TextInputBox"], { label: "IFrame", value: `<iframe src="${urlPrefix}?embed&f=${this.props.fiddle}" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>` })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoX"], null), label: "Cancel", title: "Cancel", onClick: () => {
                            this.props.onCancel();
                        } }))));
    }
}


/***/ }),

/***/ "./src/components/Split.tsx":
/*!**********************************!*\
  !*** ./src/components/Split.tsx ***!
  \**********************************/
/*! exports provided: SplitOrientation, Split */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitOrientation", function() { return SplitOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Split", function() { return Split; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _utils_splitUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/splitUtils */ "./src/utils/splitUtils.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */




const Cassowary = __webpack_require__(/*! cassowary */ "./node_modules/cassowary/bin/c.js");
var SplitOrientation;
(function (SplitOrientation) {
    SplitOrientation[SplitOrientation["Horizontal"] = 0] = "Horizontal";
    SplitOrientation[SplitOrientation["Vertical"] = 1] = "Vertical";
})(SplitOrientation || (SplitOrientation = {}));
class Split extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.index = -1;
        /**
         * This fires for all splits, even if the resizer doesn't belong to this split.
         */
        this.onResizerMouseUp = () => {
            if (this.index < 0) {
                return;
            }
            this.index = -1;
            Split.onResizeEnd.dispatch(this);
            this.solver.endEdit();
            window.document.documentElement.style.pointerEvents = "auto";
            this.querySolver(this.state.splits);
            return this.props.onChange && this.props.onChange(this.state.splits);
        };
        this.onResizerMouseMove = (e) => {
            if (this.index < 0) {
                return;
            }
            const vars = this.vars;
            const isVertical = this.props.orientation === SplitOrientation.Vertical;
            const container = this.container;
            const rect = container.getBoundingClientRect();
            const mouseOffset = isVertical ? e.clientX - rect.left : e.clientY - rect.top;
            this.solver.suggestValue(vars[this.index + 1], mouseOffset);
            this.solver.resolve();
            const splits = this.state.splits;
            this.querySolver(splits);
            this.setState({ splits });
            e.preventDefault();
        };
        this.state = {
            splits: []
        };
    }
    componentDidMount() {
        document.addEventListener("mousemove", this.onResizerMouseMove);
        document.addEventListener("mouseup", this.onResizerMouseUp);
        const splits = this.canonicalizeSplits(this.props);
        this.setupSolver(splits, this.getContainerSize(this.props.orientation));
        this.querySolver(splits);
        this.setState({ splits });
    }
    componentWillReceiveProps(nextProps) {
        this.onResizerMouseUp();
        const splits = this.canonicalizeSplits(nextProps);
        this.setupSolver(splits, this.getContainerSize(nextProps.orientation));
        this.querySolver(splits);
        this.setState({ splits });
    }
    componentWillUnmount() {
        document.removeEventListener("mousemove", this.onResizerMouseMove);
        document.removeEventListener("mouseup", this.onResizerMouseUp);
    }
    onResizerMouseDown(i) {
        this.index = i;
        this.solver.addEditVar(this.vars[this.index + 1], Cassowary.Strength.strong).beginEdit();
        Split.onResizeBegin.dispatch(this);
        window.document.documentElement.style.pointerEvents = "none";
    }
    querySolver(splits) {
        const vars = this.vars;
        for (let i = 0; i < splits.length; i++) {
            splits[i].value = vars[i + 1].value - vars[i].value;
        }
    }
    getContainerSize(orientation) {
        return orientation === SplitOrientation.Horizontal ? this.container.clientHeight : this.container.clientWidth;
    }
    canonicalizeSplits(props) {
        const count = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(props.children);
        const containerSize = this.getContainerSize(props.orientation);
        const splits = [];
        for (let i = 0; i < count; i++) {
            const info = {};
            if (props.splits && i < props.splits.length) {
                Object(_utils_splitUtils__WEBPACK_IMPORTED_MODULE_3__["assignObject"])(info, props.splits[i]);
            }
            if (props.defaultSplit) {
                Object(_utils_splitUtils__WEBPACK_IMPORTED_MODULE_3__["assignObject"])(info, props.defaultSplit);
            }
            splits.push(Object(_utils_splitUtils__WEBPACK_IMPORTED_MODULE_3__["assignObject"])(info, {
                min: 32,
                max: containerSize,
            }));
        }
        return splits;
    }
    /**
     * Initializes a Cassowary solver and the constraints based on split infos and container size.
     */
    setupSolver(splits, containerSize) {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.index < 0, "Should not be in a dragging state.");
        const weak = Cassowary.Strength.weak;
        const medium = Cassowary.Strength.medium;
        const strong = Cassowary.Strength.strong;
        const required = Cassowary.Strength.required;
        function eq(a1, a2, strength, weight) {
            return new Cassowary.Equation(a1, a2, strength || weak, weight || 0);
        }
        function geq(a1, a2, strength, weight) {
            return new Cassowary.Inequality(a1, Cassowary.GEQ, a2, strength, weight);
        }
        function leq(a1, a2, strength, weight) {
            return new Cassowary.Inequality(a1, Cassowary.LEQ, a2, strength, weight);
        }
        // f     1               2           3   ...    l
        // |-----|---------------|-----------|----------|
        const vars = this.vars = [new Cassowary.Variable()];
        const solver = this.solver = new Cassowary.SimplexSolver();
        // Create Cassowary variables, these the dragged position as an offset from the origin.
        for (let i = 0; i < splits.length; i++) {
            vars.push(new Cassowary.Variable());
        }
        vars[0].value = 0;
        vars[vars.length - 1].value = containerSize;
        solver.addStay(vars[0], required);
        solver.addStay(vars[vars.length - 1], required);
        const offset = 0;
        for (let i = 0; i < vars.length - 1; i++) {
            const { min, max } = splits[i];
            const l = vars[i];
            const r = vars[i + 1];
            solver.addConstraint(geq(Cassowary.minus(r, l), min, strong)); // (y - x) >= min
            solver.addConstraint(leq(Cassowary.minus(r, l), max, strong)); // (y - x) <= max
        }
        // Add stays for the variables representing the dragged panes. This causes them to
        // try and remain in their dragged position unless the constraints prevent that.
        for (let i = 1; i < vars.length - 1; i++) {
            solver.addStay(vars[i], weak);
        }
        this.suggestVarValues(splits);
    }
    suggestVarValues(splits) {
        const vars = this.vars;
        for (let i = 0; i < vars.length - 1; i++) {
            const x = vars[i];
            const y = vars[i + 1];
            if (splits[i].value) {
                if (i < vars.length - 2) {
                    this.solver.addEditVar(y, Cassowary.Strength.strong).beginEdit();
                    this.solver.suggestValue(y, x.value + splits[i].value);
                }
                else {
                    this.solver.addEditVar(x, Cassowary.Strength.strong).beginEdit();
                    this.solver.suggestValue(x, y.value - splits[i].value);
                }
                this.solver.endEdit();
                this.solver.resolve();
            }
        }
    }
    render() {
        const { splits } = this.state;
        let resizerClassName = "resizer";
        const isHorizontal = this.props.orientation === SplitOrientation.Horizontal;
        if (isHorizontal) {
            resizerClassName += " horizontal";
        }
        else {
            resizerClassName += " vertical";
        }
        const count = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children);
        const children = [];
        react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(this.props.children, (child, i) => {
            const style = {};
            if (i < count - 1 && i < splits.length) {
                style.flexBasis = Object(_utils_splitUtils__WEBPACK_IMPORTED_MODULE_3__["toCSSPx"])(Math.round(splits[i].value));
            }
            else {
                style.flex = 1;
            }
            children.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: i, className: "split-pane", style: style }, child));
            if (i < count - 1) {
                children.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: "split:" + i, className: resizerClassName, onMouseDown: this.onResizerMouseDown.bind(this, i) }));
            }
        });
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "split", ref: (ref) => { this.container = ref; }, style: { flexDirection: isHorizontal ? "column" : "row" } }, children);
    }
}
Split.onResizeBegin = new _models__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]("Resize Begin");
Split.onResizeEnd = new _models__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]("Resize End");


/***/ }),

/***/ "./src/components/StatusBar.tsx":
/*!**************************************!*\
  !*** ./src/components/StatusBar.tsx ***!
  \**************************************/
/*! exports provided: StatusBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBar", function() { return StatusBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


class StatusBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onDidChangeStatus = () => {
            this.setState({
                hasStatus: _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].hasStatus(),
                status: _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].getStatus()
            });
        };
        this.state = {
            hasStatus: false,
            status: ""
        };
    }
    componentDidMount() {
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].onDidChangeStatus.register(this.onDidChangeStatus);
    }
    componentWillUnmount() {
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_1__["default"].onDidChangeStatus.unregister(this.onDidChangeStatus);
    }
    render() {
        let className = "status-bar";
        if (this.state.hasStatus) {
            className += " active";
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "status-bar-item" }, this.state.status));
    }
}


/***/ }),

/***/ "./src/components/Toasts.tsx":
/*!***********************************!*\
  !*** ./src/components/Toasts.tsx ***!
  \***********************************/
/*! exports provided: ToastContainer, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainer", function() { return ToastContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



class ToastContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            toasts: []
        };
    }
    showToast(message, kind = "info") {
        const { toasts } = this.state;
        toasts.push({ message, kind });
        this.setState({ toasts });
    }
    onDismiss(index) {
        this.setState((prevState) => ({
            toasts: prevState.toasts.filter((key, value) => value !== index)
        }));
    }
    render() {
        if (this.state.toasts.length === 0) {
            return null;
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "toast-container" }, this.state.toasts.map((toast, key) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Toast, { onDismiss: this.onDismiss.bind(this, key), key: key, message: toast.message, kind: toast.kind })));
    }
}
class Toast extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        const { message, onDismiss } = this.props;
        const className = "toast " + this.props.kind;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "toast-header" },
                message,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_2__["GoX"], null), customClassName: "button-toast", label: "Dismiss", title: "Dismiss", onClick: onDismiss })));
    }
}
Toast.defaultProps = {
    message: null,
    kind: "info",
    // tslint:disable-next-line
    onDismiss: () => { }
};


/***/ }),

/***/ "./src/components/Toolbar.tsx":
/*!************************************!*\
  !*** ./src/components/Toolbar.tsx ***!
  \************************************/
/*! exports provided: Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Toolbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "toolbar" }, this.props.children);
    }
}


/***/ }),

/***/ "./src/components/UploadFileDialog.tsx":
/*!*********************************************!*\
  !*** ./src/components/UploadFileDialog.tsx ***!
  \*********************************************/
/*! exports provided: UploadFileDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileDialog", function() { return UploadFileDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Icons */ "./src/components/shared/Icons.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _Widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Widgets */ "./src/components/Widgets.tsx");
/* harmony import */ var _DirectoryTree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DirectoryTree */ "./src/components/DirectoryTree.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _EditFileDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditFileDialog */ "./src/components/EditFileDialog.tsx");
/* harmony import */ var _actions_AppActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/AppActions */ "./src/actions/AppActions.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */










class UploadFileDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.root = _models__WEBPACK_IMPORTED_MODULE_4__["ModelRef"].getRef(new _models__WEBPACK_IMPORTED_MODULE_4__["Directory"]("root"));
        this.root.getModel().onDidChangeChildren.register(() => this.onRootChildrenChange());
        this.state = { hasFilesToUpload: false };
    }
    async handleUpload(items) {
        await Object(_util__WEBPACK_IMPORTED_MODULE_7__["uploadFilesToDirectory"])(items, this.root.getModel());
    }
    onRootChildrenChange() {
        this.setState({ hasFilesToUpload: this.root.getModel().hasChildren() });
    }
    render() {
        const root = this.root.getModel();
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_modal__WEBPACK_IMPORTED_MODULE_1__, { isOpen: this.props.isOpen, contentLabel: "Upload", className: "modal show-file-icons", overlayClassName: "overlay", ariaHideApp: false },
            this.state.editFileDialogFile &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EditFileDialog__WEBPACK_IMPORTED_MODULE_8__["EditFileDialog"], { isOpen: true, file: this.state.editFileDialogFile, onCancel: () => {
                        this.setState({ editFileDialogFile: null });
                    }, onChange: (name, description) => {
                        const file = this.state.editFileDialogFile.getModel();
                        Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_9__["updateFileNameAndDescription"])(file, name, description);
                        this.setState({ editFileDialogFile: null });
                    } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-title-bar" },
                    "Upload Files & Directories to ",
                    this.props.directory.getModel().getPath()),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "column" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets__WEBPACK_IMPORTED_MODULE_5__["UploadInput"], { ref: (ref) => this.uploadInput = ref, onChange: (e) => {
                                this.handleUpload(e.target.files);
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "column", style: { height: "290px" } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DirectoryTree__WEBPACK_IMPORTED_MODULE_6__["DirectoryTree"], { onlyUploadActions: true, directory: this.root, onDeleteFile: (file) => {
                                file.parent.removeFile(file);
                            }, onEditFile: (file) => {
                                this.setState({ editFileDialogFile: _models__WEBPACK_IMPORTED_MODULE_4__["ModelRef"].getRef(file) });
                            }, onMoveFile: (file, directory) => {
                                Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_9__["addFileTo"])(file, directory);
                            } }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoX"], null), label: "Cancel", title: "Cancel", onClick: () => {
                            this.props.onCancel();
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoFile"], null), label: "Files", title: "Select Files", onClick: () => {
                            this.uploadInput.open("files");
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoFileDirectory"], null), label: "Directory", title: "Select Directory", onClick: () => {
                            this.uploadInput.open("directory");
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoCloudUpload"], null), label: "Upload", title: "Upload", isDisabled: !this.state.hasFilesToUpload, onClick: () => {
                            return this.props.onUpload && this.props.onUpload(root.children.slice(0));
                        } }),
                    root.children.length === 1 && root.children[0] instanceof _models__WEBPACK_IMPORTED_MODULE_4__["Directory"] &&
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_3__["GoCloudUpload"], null), label: "Upload Root Contents", title: "Upload contents of " + root.children[0].name, onClick: () => {
                                return this.props.onUpload && this.props.onUpload(root.children[0].children.slice(0));
                            } }))));
    }
}


/***/ }),

/***/ "./src/components/Viz.tsx":
/*!********************************!*\
  !*** ./src/components/Viz.tsx ***!
  \********************************/
/*! exports provided: VizView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VizView", function() { return VizView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/service.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


function isVizLoaded() {
    return typeof Viz !== "undefined";
}
async function loadViz() {
    await _service__WEBPACK_IMPORTED_MODULE_1__["Service"].lazyLoad("lib/viz-lite.js");
}
class VizView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.updateThrottleDuration = 500;
        this.updateTimeout = 0;
        this.onDidChangeBuffer = () => {
            if (this.updateTimeout) {
                window.clearTimeout(this.updateTimeout);
            }
            this.updateTimeout = window.setTimeout(() => {
                this.updateTimeout = 0;
                this.setState({
                    content: this.props.view.file.buffer.getValue(),
                });
            }, this.updateThrottleDuration);
        };
        this.state = {
            isVizLoaded: isVizLoaded(),
            content: this.props.view.file.buffer.getValue(),
        };
    }
    async componentWillMount() {
        if (!this.state.isVizLoaded) {
            await loadViz();
            this.setState({
                isVizLoaded: isVizLoaded(),
            });
        }
    }
    componentDidMount() {
        this.props.view.file.onDidChangeBuffer.register(this.onDidChangeBuffer);
    }
    componentWillUnmount() {
        this.props.view.file.onDidChangeBuffer.unregister(this.onDidChangeBuffer);
    }
    componentWillReceiveProps(props) {
        const last = this.props.view;
        const next = props.view;
        if (last !== next) {
            last.file.onDidChangeBuffer.unregister(this.onDidChangeBuffer);
            next.file.onDidChangeBuffer.register(this.onDidChangeBuffer);
        }
    }
    render() {
        if (!this.state.isVizLoaded) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading GraphViz, please wait ...");
        }
        try {
            const svg = Viz(this.state.content);
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: "100%", height: "100%", overflow: "scroll" }, dangerouslySetInnerHTML: { __html: svg } });
        }
        catch (e) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "GraphViz Error");
        }
    }
}


/***/ }),

/***/ "./src/components/Widgets.tsx":
/*!************************************!*\
  !*** ./src/components/Widgets.tsx ***!
  \************************************/
/*! exports provided: Spacer, Divider, TextInputBox, UploadInput, ListItem, ListBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spacer", function() { return Spacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputBox", function() { return TextInputBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadInput", function() { return UploadInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBox", function() { return ListBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Spacer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: this.props.height } });
    }
}
class Divider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "divider", style: {
                marginTop: this.props.height / 2,
                marginBottom: this.props.height / 2
            } });
    }
}
class TextInputBox extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        const input = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "text-input-box", type: "text", value: this.props.value, onChange: this.props.onChange });
        if (this.props.label) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: "flex", flexDirection: "row" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-input-box-label" }, this.props.label),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { flex: 1 } }, input),
                this.props.error && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-input-box-error" }, this.props.error));
        }
        else {
            return input;
        }
    }
}
class UploadInput extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    setInputElement(ref) {
        this.inputElement = ref;
    }
    constructor(props) {
        super(props);
    }
    open(upload) {
        if (this.inputElement && upload === "directory") {
            this.inputElement.setAttribute("directory", "true");
            this.inputElement.setAttribute("webkitdirectory", "true");
            this.inputElement.setAttribute("allowdirs", "true");
        }
        else {
            this.inputElement.removeAttribute("directory");
            this.inputElement.removeAttribute("webkitdirectory");
            this.inputElement.removeAttribute("allowdirs");
        }
        this.inputElement.click();
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { id: "file-upload-input", ref: ref => this.setInputElement(ref), type: "file", onChange: this.props.onChange, multiple: true, hidden: true });
    }
}
class ListItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        let className = "list-item";
        if (this.props.selected) {
            className += " selected";
        }
        let content = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "label" }, this.props.label);
        if (this.props.error) {
            content = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "list-item-flex" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "label" }, this.props.label),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "error" }, this.props.error));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className, onClick: this.props.onClick },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "monaco-icon-label file-icon " + this.props.icon }),
            content);
    }
}
class ListBox extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        const { children, onSelect } = this.props;
        const newChildren = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, (child, index) => {
            return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](child, {
                onClick: () => {
                    return onSelect && onSelect(child.props.value);
                },
                selected: this.props.value === child.props.value
            });
        });
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "list-box", style: {
                height: this.props.height
            } }, newChildren);
    }
}


/***/ }),

/***/ "./src/components/Workspace.tsx":
/*!**************************************!*\
  !*** ./src/components/Workspace.tsx ***!
  \**************************************/
/*! exports provided: Workspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workspace", function() { return Workspace; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.tsx");
/* harmony import */ var _DirectoryTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DirectoryTree */ "./src/components/DirectoryTree.tsx");
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Split */ "./src/components/Split.tsx");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/AppStore */ "./src/stores/AppStore.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





class Workspace extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.refreshTree = () => {
            this.directoryTree.tree.refresh();
        };
        this.state = {
            splits: []
        };
    }
    componentDidMount() {
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].onDidChangeDirty.register(this.refreshTree);
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].onDidChangeChildren.register(this.refreshTree);
    }
    componentWillUnmount() {
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].onDidChangeDirty.unregister(this.refreshTree);
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"].onDidChangeChildren.unregister(this.refreshTree);
    }
    render() {
        const project = this.props.project;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "workspaceContainer" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: "calc(100% - 41px)" } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Split__WEBPACK_IMPORTED_MODULE_3__["Split"], { name: "Workspace", orientation: _Split__WEBPACK_IMPORTED_MODULE_3__["SplitOrientation"].Horizontal, splits: this.state.splits, onChange: (splits) => {
                        this.setState({ splits: splits });
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DirectoryTree__WEBPACK_IMPORTED_MODULE_2__["DirectoryTree"], { ref: (ref) => this.directoryTree = ref, directory: project, value: this.props.file, onNewFile: this.props.onNewFile, onNewDirectory: this.props.onNewDirectory, onEditFile: this.props.onEditFile, onDeleteFile: this.props.onDeleteFile, onUploadFile: this.props.onUploadFile, onMoveFile: this.props.onMoveFile, onClickFile: this.props.onClickFile, onDoubleClickFile: this.props.onDoubleClickFile, onCreateGist: this.props.onCreateGist }))));
    }
}


/***/ }),

/***/ "./src/components/editor/Editor.tsx":
/*!******************************************!*\
  !*** ./src/components/editor/Editor.tsx ***!
  \******************************************/
/*! exports provided: Monaco, EditorView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monaco", function() { return Monaco; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorView", function() { return EditorView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/models/index.ts");
/* harmony import */ var _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/AppActions */ "./src/actions/AppActions.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



class Monaco extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onLayout = () => {
            this.editor.layout();
        };
        this.status = {
            push: _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["pushStatus"],
            pop: _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["popStatus"],
            logLn: _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["logLn"]
        };
    }
    revealLastLine() {
        this.editor.revealLine(this.editor.getModel().getLineCount());
    }
    componentDidMount() {
        const { view } = this.props;
        if (view) {
            this.ensureEditor();
            this.editor.setModel(view.file.buffer);
            // TODO: Weird that we need this to make monaco really think it needs to update the language.
            monaco.editor.setModelLanguage(this.editor.getModel(), Object(_models__WEBPACK_IMPORTED_MODULE_1__["languageForFileType"])(view.file.type));
            this.editor.restoreViewState(view.state);
            this.editor.updateOptions({ readOnly: view.file.isBufferReadOnly });
        }
        document.addEventListener("layout", this.onLayout);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.view !== nextProps.view) {
            // We're about to switch to a new file, save the view state.
            this.props.view.state = this.editor.saveViewState();
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.view === nextProps.view) {
            return false;
        }
        return true;
    }
    componentDidUpdate() {
        const { view } = this.props;
        if (view) {
            this.ensureEditor();
            this.editor.setModel(view.file.buffer);
            this.editor.restoreViewState(view.state);
            this.editor.updateOptions({ readOnly: view.file.isBufferReadOnly });
        }
    }
    componentWillUnmount() {
        document.removeEventListener("layout", this.onLayout);
        // We're about to close the editor, save the view state.
        this.props.view.state = this.editor.saveViewState();
    }
    registerActions() {
        const self = this;
        this.editor.addAction({
            id: "save",
            label: "Save",
            keybindings: [
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S
            ],
            precondition: null,
            keybindingContext: null,
            run: function () {
                const view = self.props.view;
                if (view && !view.file.isBufferReadOnly) {
                    view.file.save(self.status);
                }
                return null;
            }
        });
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_B, function () {
            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["build"])();
        }, null);
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, function () {
            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["run"])();
        }, null);
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.Enter, function () {
            Object(_actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["build"])().then(_actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["run"]);
        }, null);
    }
    ensureEditor() {
        if (this.editor) {
            return;
        }
        const options = Object.assign({
            value: "",
            theme: "fiddle-theme",
            minimap: {
                enabled: false
            },
            fontWeight: "bold",
            renderLineHighlight: "none",
        }, this.props.options);
        if (this.container.lastChild) {
            this.container.removeChild(this.container.lastChild);
        }
        this.editor = monaco.editor.create(this.container, options);
        this.editor.onContextMenu(e => {
            this.resolveMenuPosition(e);
            this.disableEditorScroll(); // This makes it possible to scroll inside the menu
        });
        this.editor.onDidFocusEditorWidget(() => this.enableEditorScroll());
        this.editor.onDidFocusEditorText(() => this.enableEditorScroll());
        this.registerActions();
        console.info("Created a new Monaco editor.");
    }
    resolveMenuPosition(e) {
        const anchorOffset = { x: -10, y: -3 };
        const menu = this.container.querySelector(".monaco-editor > .monaco-menu-container");
        const top = (parseInt(menu.style.top, 10) + e.event.editorPos.y + anchorOffset.y);
        const left = (parseInt(menu.style.left, 10) + e.event.editorPos.x + anchorOffset.x);
        const windowPadding = 10;
        menu.style.top = top + "px";
        menu.style.left = left + "px";
        menu.style.maxHeight = Math.min(window.innerHeight - top - windowPadding, 380) + "px";
    }
    disableEditorScroll() {
        this.editor.updateOptions({
            scrollbar: {
                handleMouseWheel: false
            }
        });
    }
    enableEditorScroll() {
        this.editor.updateOptions({
            scrollbar: {
                handleMouseWheel: true
            }
        });
    }
    setContainer(container) {
        if (container == null) {
            return;
        }
        this.container = container;
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fill", ref: (ref) => this.setContainer(ref) });
    }
}
class EditorView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    setMonaco(monaco) {
        this.monaco = monaco;
    }
    revealLastLine() {
        this.monaco.revealLastLine();
    }
    render() {
        const file = this.props.view.file;
        if (file.description) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fill" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "editor-status-bar" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "status-bar-item" }, file.description)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "editor-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Monaco, { ref: (ref) => this.setMonaco(ref), view: this.props.view, options: this.props.options })),
                ";");
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "fill" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Monaco, { ref: (ref) => this.setMonaco(ref), view: this.props.view, options: this.props.options }));
        }
    }
}


/***/ }),

/***/ "./src/components/editor/Tabs.tsx":
/*!****************************************!*\
  !*** ./src/components/editor/Tabs.tsx ***!
  \****************************************/
/*! exports provided: Tabs, Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



class Tabs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            scrollLeft: 0,
        };
        this.onWheel = (e) => {
            const delta = Object(_util__WEBPACK_IMPORTED_MODULE_1__["clamp"])(e.deltaY, -16, 16);
            let { scrollLeft } = this.state;
            scrollLeft += delta;
            // TODO: Work out the details of scrolling.
            scrollLeft = Object(_util__WEBPACK_IMPORTED_MODULE_1__["clamp"])(scrollLeft, 0, this.container.clientWidth);
            this.setState({ scrollLeft });
            e.preventDefault();
        };
        this.onDoubleClick = (e) => { this.props.onDoubleClick(); };
        this.setContainerRef = (ref) => { this.container = ref; };
    }
    componentDidUpdate() {
        this.container.scrollLeft = this.state.scrollLeft;
    }
    render() {
        const { onDoubleClick, children, commands } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "tabs-container" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: this.setContainerRef, className: "tabs-tab-container", onWheel: this.onWheel, onDoubleClick: this.onDoubleClick }, children),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "tabs-command-container" }, commands)));
    }
}
Tabs.defaultProps = {
    // tslint:disable-next-line
    onDoubleClick: () => { },
};
class Tab extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.onMouseHandle = (e, handler) => {
            e.stopPropagation();
            handler(this.props.value);
        };
        this.onClick = (e) => {
            this.onMouseHandle(e, this.props.onClick);
        };
        this.onDoubleClick = (e) => {
            this.onMouseHandle(e, this.props.onDoubleClick);
        };
        this.onClose = (e) => {
            this.onMouseHandle(e, this.props.onClose);
        };
    }
    render() {
        const { label, icon, isActive, isMarked, isItalic, } = this.props;
        let className = "tab";
        if (isActive) {
            className += " active";
        }
        if (isMarked) {
            className += " marked";
        }
        if (isItalic) {
            className += " italic";
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className, onClick: this.onClick, onDoubleClick: this.onDoubleClick },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "monaco-icon-label file-icon " + icon }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "label" }, label),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "close", onClick: this.onClose })));
    }
}
Tab.defaultProps = {
    // tslint:disable-next-line
    onClick: () => { },
    // tslint:disable-next-line
    onDoubleClick: () => { },
    // tslint:disable-next-line
    onClose: () => { },
};


/***/ }),

/***/ "./src/components/editor/View.tsx":
/*!****************************************!*\
  !*** ./src/components/editor/View.tsx ***!
  \****************************************/
/*! exports provided: ViewType, defaultViewTypeForFileType, isViewFileDirty, View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return ViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultViewTypeForFileType", function() { return defaultViewTypeForFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewFileDirty", function() { return isViewFileDirty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "./src/models/index.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var ViewType;
(function (ViewType) {
    ViewType[ViewType["Editor"] = 0] = "Editor";
    ViewType[ViewType["Markdown"] = 1] = "Markdown";
    ViewType[ViewType["Binary"] = 2] = "Binary";
    ViewType[ViewType["Viz"] = 3] = "Viz";
})(ViewType || (ViewType = {}));
function defaultViewTypeForFileType(type) {
    switch (type) {
        case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Markdown:
            return ViewType.Markdown;
        case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].DOT:
            return ViewType.Viz;
        default:
            return ViewType.Editor;
    }
}
function isViewFileDirty(view) {
    if (!view || !view.file) {
        return false;
    }
    return view.file.isDirty;
}
class View {
    constructor(file, type = ViewType.Editor) {
        this.file = file;
        this.type = type;
    }
    clone() {
        return new View(this.file, this.type);
    }
}


/***/ }),

/***/ "./src/components/editor/ViewTabs.tsx":
/*!********************************************!*\
  !*** ./src/components/editor/ViewTabs.tsx ***!
  \********************************************/
/*! exports provided: ViewTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTabs", function() { return ViewTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs */ "./src/components/editor/Tabs.tsx");
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editor */ "./src/components/editor/Editor.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/models/index.ts");
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././Markdown */ "./src/components/Markdown.tsx");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Button */ "./src/components/shared/Button.tsx");
/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Icons */ "./src/components/shared/Icons.tsx");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./View */ "./src/components/editor/View.tsx");
/* harmony import */ var _Binary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Binary */ "./src/components/Binary.tsx");
/* harmony import */ var _Viz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Viz */ "./src/components/Viz.tsx");
/* harmony import */ var _actions_AppActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/AppActions */ "./src/actions/AppActions.ts");
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../stores/AppStore */ "./src/stores/AppStore.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */












class ViewTabs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onFileDidChangeDirty = () => {
            this.setState({
                isActiveViewFileDirty: Object(_View__WEBPACK_IMPORTED_MODULE_7__["isViewFileDirty"])(this.props.view)
            });
        };
        this.status = {
            push: _actions_AppActions__WEBPACK_IMPORTED_MODULE_10__["pushStatus"],
            pop: _actions_AppActions__WEBPACK_IMPORTED_MODULE_10__["popStatus"],
            logLn: _actions_AppActions__WEBPACK_IMPORTED_MODULE_10__["logLn"]
        };
        this.state = {
            isActiveViewFileDirty: Object(_View__WEBPACK_IMPORTED_MODULE_7__["isViewFileDirty"])(props.view)
        };
    }
    componentDidMount() {
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_11__["default"].onDidChangeDirty.register(this.onFileDidChangeDirty);
    }
    componentWillUnmount() {
        _stores_AppStore__WEBPACK_IMPORTED_MODULE_11__["default"].onDidChangeDirty.unregister(this.onFileDidChangeDirty);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.view !== nextProps.view) {
            this.setState({
                isActiveViewFileDirty: Object(_View__WEBPACK_IMPORTED_MODULE_7__["isViewFileDirty"])(nextProps.view)
            });
        }
    }
    renderViewCommands() {
        const { view } = this.props;
        const commands = [
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], { key: "split", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_6__["GoBook"], null), title: "Split Editor", onClick: () => {
                    return this.props.onSplitViews();
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], { key: "save", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_6__["GoClippy"], null), label: "Save", title: "Save: CtrlCmd + S", isDisabled: !this.state.isActiveViewFileDirty, onClick: () => {
                    this.props.view.file.save(this.status);
                } })
        ];
        if (view.file.type === _models__WEBPACK_IMPORTED_MODULE_3__["FileType"].Markdown) {
            const markdown = view.type === _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Markdown;
            commands.unshift(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], { key: "toggle", icon: markdown ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_6__["GoCode"], null) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_6__["GoEye"], null), title: markdown ? "Edit Markdown" : "Preview Markdown", onClick: () => this.props.onChangeViewType(view, markdown ? _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Editor : _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Markdown) }));
        }
        else if (view.file.type === _models__WEBPACK_IMPORTED_MODULE_3__["FileType"].DOT) {
            const viz = view.type === _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Viz;
            commands.unshift(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], { key: "toggle", icon: viz ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_6__["GoCode"], null) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_Icons__WEBPACK_IMPORTED_MODULE_6__["GoEye"], null), title: viz ? "Edit GraphViz DOT File" : "Preview GraphViz DOT File", onClick: () => this.props.onChangeViewType(view, viz ? _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Editor : _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Viz) }));
        }
        return commands;
    }
    render() {
        const { onClickView, onDoubleClickView, onClose, view, views, preview, hasFocus } = this.props;
        if (!view) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null);
        }
        const { file } = view;
        let viewer;
        if (file && file.type === _models__WEBPACK_IMPORTED_MODULE_3__["FileType"].Markdown && view.type === _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Markdown) {
            viewer = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownView"], { view: view });
        }
        else if (file && file.type === _models__WEBPACK_IMPORTED_MODULE_3__["FileType"].DOT && view.type === _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Viz) {
            viewer = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Viz__WEBPACK_IMPORTED_MODULE_9__["VizView"], { view: view });
        }
        else if (view.type === _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Binary) {
            viewer = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Binary__WEBPACK_IMPORTED_MODULE_8__["BinaryView"], { view: view });
        }
        else if (file) {
            viewer = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Editor__WEBPACK_IMPORTED_MODULE_2__["EditorView"], { view: view, options: { readOnly: file.isBufferReadOnly } });
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "editor-pane-container empty" });
        }
        let className = "editor-pane-container";
        if (!hasFocus) {
            className += " blurred";
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className, onClick: this.props.onFocus },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], { onDoubleClick: () => {
                    return this.props.onNewFile();
                }, commands: this.renderViewCommands() }, views.map(v => {
                const { file: x } = v;
                let name = x.name;
                if (v.type === _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Binary) {
                    name = "Binary " + name;
                }
                else if (v.type === _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Markdown || v.type === _View__WEBPACK_IMPORTED_MODULE_7__["ViewType"].Viz) {
                    name = "Preview " + name;
                }
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], { key: x.key, label: name, value: v, icon: Object(_models__WEBPACK_IMPORTED_MODULE_3__["getIconForFileType"])(x.type), isMarked: x.isDirty, isActive: v === view, isItalic: v === preview, onClick: onClickView, onDoubleClick: onDoubleClickView, onClose: onClose });
            })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: "calc(100% - 40px)" } }, viewer));
    }
}
ViewTabs.defaultProps = {
    view: null,
    views: [],
    // tslint:disable-next-line
    onChangeViewType: (view, type) => { },
    // tslint:disable-next-line
    onNewFile: () => { },
    // tslint:disable-next-line
    onSplitViews: () => { }
};


/***/ }),

/***/ "./src/components/editor/index.ts":
/*!****************************************!*\
  !*** ./src/components/editor/index.ts ***!
  \****************************************/
/*! exports provided: EditorView, ViewTabs, View, Tab, Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./src/components/editor/Editor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorView", function() { return _Editor__WEBPACK_IMPORTED_MODULE_0__["EditorView"]; });

/* harmony import */ var _ViewTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewTabs */ "./src/components/editor/ViewTabs.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewTabs", function() { return _ViewTabs__WEBPACK_IMPORTED_MODULE_1__["ViewTabs"]; });

/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ "./src/components/editor/View.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_2__["View"]; });

/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tabs */ "./src/components/editor/Tabs.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"]; });

/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */






/***/ }),

/***/ "./src/components/shared/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/shared/Button.tsx ***!
  \******************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Button extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        let className = "button ";
        if (this.props.customClassName) {
            className += this.props.customClassName;
        }
        if (this.props.isDisabled) {
            className += " disabled";
        }
        if (this.props.href && !this.props.isDisabled) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: this.props.href, target: this.props.target || "", rel: this.props.rel || "", className: className, title: this.props.title },
                this.props.icon,
                " ",
                this.props.label));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className, onClick: () => {
                if (this.props.onClick && !this.props.isDisabled) {
                    this.props.onClick();
                }
            }, title: this.props.title },
            this.props.icon,
            " ",
            this.props.label);
    }
}


/***/ }),

/***/ "./src/components/shared/Icons.tsx":
/*!*****************************************!*\
  !*** ./src/components/shared/Icons.tsx ***!
  \*****************************************/
/*! exports provided: Icon, GoRepoForked, GoBeaker, GoGear, GoBeakerGear, GoBook, GoRocket, GoPencil, GoDelete, GoVerified, GoFile, GoFileBinary, GoFileCode, GoFileDirectory, GoQuote, GoDesktopDownload, GoX, GoKebabHorizontal, GoThreeBars, GoGist, GoCheck, GoOpenIssue, GoQuestion, GoClippy, GoEye, GoCode, GoCloudUpload, GoSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoRepoForked", function() { return GoRepoForked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoBeaker", function() { return GoBeaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoGear", function() { return GoGear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoBeakerGear", function() { return GoBeakerGear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoBook", function() { return GoBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoRocket", function() { return GoRocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoPencil", function() { return GoPencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoDelete", function() { return GoDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoVerified", function() { return GoVerified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoFile", function() { return GoFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoFileBinary", function() { return GoFileBinary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoFileCode", function() { return GoFileCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoFileDirectory", function() { return GoFileDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoQuote", function() { return GoQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoDesktopDownload", function() { return GoDesktopDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoX", function() { return GoX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoKebabHorizontal", function() { return GoKebabHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoThreeBars", function() { return GoThreeBars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoGist", function() { return GoGist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoCheck", function() { return GoCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoOpenIssue", function() { return GoOpenIssue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoQuestion", function() { return GoQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoClippy", function() { return GoClippy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoEye", function() { return GoEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoCode", function() { return GoCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoCloudUpload", function() { return GoCloudUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoSync", function() { return GoSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Icon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                width: 16, height: 16,
                backgroundImage: `url("${this.props.src}")`
            } });
    }
}
class GoRepoForked extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-repo-forked", viewBox: "0 0 10 16", version: "1.1", width: "10", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" }));
    }
}
class GoBeaker extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-beaker", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M14.38 14.59L11 7V3h1V2H3v1h1v4L.63 14.59A1 1 0 0 0 1.54 16h11.94c.72 0 1.2-.75.91-1.41h-.01zM3.75 10L5 7V3h5v4l1.25 3h-7.5zM8 8h1v1H8V8zM7 7H6V6h1v1zm0-3h1v1H7V4zm0-3H6V0h1v1z" }));
    }
}
class GoGear extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-gear", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }));
    }
}
class GoBeakerGear extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-gear", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", { id: "cut-off-beaker" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { x: "0", y: "0", width: "7", height: "16" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", { id: "cut-off-gear" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { x: "7", y: "0", width: "7", height: "16" }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", clipPath: "url(#cut-off-beaker)", d: "M14.38 14.59L11 7V3h1V2H3v1h1v4L.63 14.59A1 1 0 0 0 1.54 16h11.94c.72 0 1.2-.75.91-1.41h-.01zM3.75 10L5 7V3h5v4l1.25 3h-7.5zM8 8h1v1H8V8zM7 7H6V6h1v1zm0-3h1v1H7V4zm0-3H6V0h1v1z" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", clipPath: "url(#cut-off-gear)", d: "M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" })));
    }
}
class GoBook extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-book", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z" }));
    }
}
class GoRocket extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-rocket", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M12.17 3.83c-.27-.27-.47-.55-.63-.88-.16-.31-.27-.66-.34-1.02-.58.33-1.16.7-1.73 1.13-.58.44-1.14.94-1.69 1.48-.7.7-1.33 1.81-1.78 2.45H3L0 10h3l2-2c-.34.77-1.02 2.98-1 3l1 1c.02.02 2.23-.64 3-1l-2 2v3l3-3v-3c.64-.45 1.75-1.09 2.45-1.78.55-.55 1.05-1.13 1.47-1.7.44-.58.81-1.16 1.14-1.72-.36-.08-.7-.19-1.03-.34a3.39 3.39 0 0 1-.86-.63M16 0s-.09.38-.3 1.06c-.2.7-.55 1.58-1.06 2.66-.7-.08-1.27-.33-1.66-.72-.39-.39-.63-.94-.7-1.64C13.36.84 14.23.48 14.92.28 15.62.08 16 0 16 0" }));
    }
}
class GoPencil extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-pencil", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z" }));
    }
}
class GoDelete extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-x", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" }));
    }
}
class GoVerified extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-verified", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M15.67 7.06l-1.08-1.34c-.17-.22-.28-.48-.31-.77l-.19-1.7a1.51 1.51 0 0 0-1.33-1.33l-1.7-.19c-.3-.03-.56-.16-.78-.33L8.94.32c-.55-.44-1.33-.44-1.88 0L5.72 1.4c-.22.17-.48.28-.77.31l-1.7.19c-.7.08-1.25.63-1.33 1.33l-.19 1.7c-.03.3-.16.56-.33.78L.32 7.05c-.44.55-.44 1.33 0 1.88l1.08 1.34c.17.22.28.48.31.77l.19 1.7c.08.7.63 1.25 1.33 1.33l1.7.19c.3.03.56.16.78.33l1.34 1.08c.55.44 1.33.44 1.88 0l1.34-1.08c.22-.17.48-.28.77-.31l1.7-.19c.7-.08 1.25-.63 1.33-1.33l.19-1.7c.03-.3.16-.56.33-.78l1.08-1.34c.44-.55.44-1.33 0-1.88zM6.5 12L3 8.5 4.5 7l2 2 5-5L13 5.55 6.5 12z" }));
    }
}
class GoFile extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-file", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z" }));
    }
}
class GoFileBinary extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-file-binary", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M4 12h1v1H2v-1h1v-2H2V9h2v3zm8-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5zM8 4H6v1h1v2H6v1h3V7H8V4zM2 4h3v4H2V4zm1 3h1V5H3v2zm3 2h3v4H6V9zm1 3h1v-2H7v2z" }));
    }
}
class GoFileCode extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-file-code", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z" }));
    }
}
class GoFileDirectory extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-file-directory", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z" }));
    }
}
class GoQuote extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-quote", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" }));
    }
}
class GoDesktopDownload extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-desktop-download", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M4 6h3V0h2v6h3l-4 4-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z" }));
    }
}
class GoX extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-x", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" }));
    }
}
class GoKebabHorizontal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-kebab-horizontal", viewBox: "0 0 13 16", version: "1.1", width: "13", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }));
    }
}
class GoThreeBars extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-three-bars", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" }));
    }
}
class GoGist extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-gist", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z" }));
    }
}
class GoCheck extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-check", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" }));
    }
}
class GoOpenIssue extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-issue-opened", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" }));
    }
}
class GoQuestion extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-question", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z" }));
    }
}
class GoClippy extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-clippy", viewBox: "0 0 12 14", version: "1.1", width: "12", height: "14", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z" }));
    }
}
class GoEye extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-eye", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z" }));
    }
}
class GoCode extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-code", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z" }));
    }
}
class GoCloudUpload extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-cloud-upload", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M7 9H5l3-3 3 3H9v5H7V9zm5-4c0-.44-.91-3-4.5-3C5.08 2 3 3.92 3 6 1.02 6 0 7.52 0 9c0 1.53 1 3 3 3h3v-1.3H3c-1.62 0-1.7-1.42-1.7-1.7 0-.17.05-1.7 1.7-1.7h1.3V6c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V12h2c2.08 0 4-1.16 4-3.5C16 6.06 14.08 5 12 5z" }));
    }
}
class GoSync extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "octicon octicon-sync", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fillRule: "evenodd", d: "M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6 4.346 4.346 0 0 1-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z" }));
    }
}


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getConfig; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const configUrl = "./config.json";
let config;
async function getConfig() {
    if (!config) {
        config = await fetch(configUrl).then(resp => resp.json());
    }
    return config;
}


/***/ }),

/***/ "./src/dispatcher.ts":
/*!***************************!*\
  !*** ./src/dispatcher.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flux */ "./node_modules/flux/index.js");
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flux__WEBPACK_IMPORTED_MODULE_0__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* harmony default export */ __webpack_exports__["default"] = (new flux__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]());


/***/ }),

/***/ "./src/errors.ts":
/*!***********************!*\
  !*** ./src/errors.ts ***!
  \***********************/
/*! exports provided: Errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const Errors = {
    BuildFileMissing: "Build File (build.ts / build.js) is missing."
};


/***/ }),

/***/ "./src/gulpy.ts":
/*!**********************!*\
  !*** ./src/gulpy.ts ***!
  \**********************/
/*! exports provided: Gulpy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gulpy", function() { return Gulpy; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class Task {
    constructor(dependencies, promiseMaker) {
        this.dependencies = dependencies;
        this.promiseMaker = promiseMaker;
    }
}
class TaskInstance {
    constructor(task) {
        this.task = task;
        this.promise = null;
    }
    makePromise() {
        if (this.promise) {
            return this.promise;
        }
        return this.promise = this.task.promiseMaker();
    }
}
class GulpySession {
    constructor(gulpy) {
        this.tasks = new Map();
        this.gulpy = gulpy;
    }
    ensureInstance(task) {
        let instance = this.tasks.get(task);
        if (instance) {
            return instance;
        }
        instance = new TaskInstance(task);
        this.tasks.set(task, instance);
        return instance;
    }
    async runInstance(instance) {
        const dependencies = instance.task.dependencies.map(x => this.ensureInstance(x));
        await Promise.all(dependencies.map(x => this.runInstance(x)));
        return instance.makePromise();
    }
    async run(task) {
        return this.runInstance(this.ensureInstance(task));
    }
}
class Gulpy {
    constructor() {
        this.tasks = {};
    }
    task(name, a, b) {
        let dependencies = [];
        let fn = null;
        if (arguments.length === 3) {
            dependencies = a;
            fn = b;
        }
        else if (arguments.length === 2) {
            if (Array.isArray(a)) {
                dependencies = a;
                fn = b || (() => { });
            }
            else {
                fn = a;
            }
        }
        this.tasks[name] = new Task(dependencies.map(x => this.tasks[x]), fn);
    }
    series(tasks) {
        return null;
    }
    parallel(tasks) {
        return null;
    }
    hasTask(name) {
        return name in this.tasks;
    }
    async run(name) {
        const session = new GulpySession(this);
        await session.run(this.tasks[name]);
    }
}


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: forEachUrlParameter, getUrlParameters, appWindowContext, unloadPageHandler, getEmbeddingParams, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachUrlParameter", function() { return forEachUrlParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParameters", function() { return getUrlParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appWindowContext", function() { return appWindowContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unloadPageHandler", function() { return unloadPageHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmbeddingParams", function() { return getEmbeddingParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _monaco_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monaco-utils */ "./src/monaco-utils.ts");
/* harmony import */ var _components_BrowserNotSupported__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BrowserNotSupported */ "./src/components/BrowserNotSupported.tsx");
/* harmony import */ var _utils_registerLanguages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/registerLanguages */ "./src/utils/registerLanguages.ts");
/* harmony import */ var _utils_registerTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/registerTheme */ "./src/utils/registerTheme.ts");
/* harmony import */ var _utils_Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/Logger */ "./src/utils/Logger.ts");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ErrorBoundary */ "./src/components/ErrorBoundary.tsx");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */










function forEachUrlParameter(callback) {
    let url = window.location.search.substring(1);
    url = url.replace(/\/$/, ""); // Replace / at the end that gets inserted by browsers.
    url.split("&").forEach(function (s) {
        const t = s.split("=");
        if (t.length === 2) {
            callback(t[0], decodeURIComponent(t[1]));
        }
        else {
            callback(t[0], true);
        }
    });
}
function getUrlParameters() {
    const params = {};
    forEachUrlParameter((key, value) => {
        params[key] = value;
    });
    return params;
}
const appWindowContext = {
    promptWhenClosing: false,
};
function unloadPageHandler(e) {
    if (!appWindowContext.promptWhenClosing) {
        window.removeEventListener("beforeunload", unloadPageHandler, false);
        return;
    }
    e.returnValue = "Project data is not saved.";
}
function getEmbeddingParams(parameters) {
    const embedding = parameters["embedding"];
    let type;
    switch (embedding) {
        case "default":
            type = _components_App__WEBPACK_IMPORTED_MODULE_2__["EmbeddingType"].Default;
            break;
        case "arc_website":
            type = _components_App__WEBPACK_IMPORTED_MODULE_2__["EmbeddingType"].Arc;
            break;
        default:
            const embed = parameters["embed"] === true ? true : !!parseInt(parameters["embed"], 10);
            type = embed ? _components_App__WEBPACK_IMPORTED_MODULE_2__["EmbeddingType"].Default : _components_App__WEBPACK_IMPORTED_MODULE_2__["EmbeddingType"].None;
            break;
    }
    const templatesName = parameters["embedding"] === "arc_website" ? "arc" : "default";
    return {
        type,
        templatesName,
    };
}
async function init(environment = "production") {
    _utils_Logger__WEBPACK_IMPORTED_MODULE_8__["Logger"].init();
    window.addEventListener("resize", _util__WEBPACK_IMPORTED_MODULE_3__["layout"], false);
    window.addEventListener("beforeunload", unloadPageHandler, false);
    const parameters = getUrlParameters();
    const update = parameters["update"] === true ? true : !!parseInt(parameters["update"], 10);
    const fiddle = parameters["fiddle"] || parameters["f"];
    const embeddingParams = getEmbeddingParams(parameters);
    try {
        await _monaco_utils__WEBPACK_IMPORTED_MODULE_4__["MonacoUtils"].initialize();
        await Object(_utils_registerTheme__WEBPACK_IMPORTED_MODULE_7__["default"])();
        if (typeof WebAssembly !== "object") {
            react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_BrowserNotSupported__WEBPACK_IMPORTED_MODULE_5__["BrowserNotSupported"], null), document.getElementById("app"));
        }
        else {
            react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_9__["ErrorBoundary"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_App__WEBPACK_IMPORTED_MODULE_2__["App"], { update: update, fiddle: fiddle, embeddingParams: embeddingParams, windowContext: appWindowContext })), document.getElementById("app"));
        }
        if (environment !== "test") {
            await Promise.all(/*! import() | monaco-languages */[__webpack_require__.e("monaco-editor"), __webpack_require__.e("monaco-languages")]).then(__webpack_require__.t.bind(null, /*! monaco-editor */ "./include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.main.js", 7));
        }
        await Object(_utils_registerLanguages__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }
    catch (e) {
        _utils_Logger__WEBPACK_IMPORTED_MODULE_8__["Logger"].captureException(e);
    }
}
init();


/***/ }),

/***/ "./src/languages/cton.ts":
/*!*******************************!*\
  !*** ./src/languages/cton.ts ***!
  \*******************************/
/*! exports provided: Cton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cton", function() { return Cton; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
let completionItems = null;
function getCompletionItems() {
    const keyword = monaco.languages.CompletionItemKind.Keyword;
    if (completionItems) {
        return completionItems;
    }
    return completionItems = [];
}
const LanguageConfiguration = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "<", close: ">" },
    ]
};
const MonarchDefinitions = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // TODO defaultToken: 'invalid',
    keywords: [
        "function", "jump"
    ],
    typeKeywords: [
        "i32", "i64", "f32", "f64"
    ],
    operators: [],
    // we include these common regular expressions
    symbols: /[=><~&|+\-*\/%@#]+/,
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-z_$][\w$\.]*/, {
                    cases: {
                        "@keywords": "keyword",
                        "@typeKeywords": "type",
                        "@default": "type.identifier"
                    }
                }],
            // numbers
            [/\d+/, "number"],
            // strings
            [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
            [/[{}()\[\]]/, "@brackets"]
        ],
        string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/;.*$/, "comment"]
        ],
    },
};
const Cton = {
    MonarchDefinitions,
    LanguageConfiguration,
    CompletionItemProvider: {
        provideCompletionItems: function (model, position) {
            return getCompletionItems();
        }
    },
    HoverProvider: {
        provideHover: function (model, position) {
            return {
                range: new monaco.Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
                contents: [
                    "**DETAILS**",
                    { language: "html", value: "TODO" }
                ]
            };
        }
    }
};


/***/ }),

/***/ "./src/languages/log.ts":
/*!******************************!*\
  !*** ./src/languages/log.ts ***!
  \******************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const Log = {
    MonarchTokensProvider: {
        tokenizer: {
            root: [
                [/\[error.*/, "custom-error"],
                [/\[warn.*/, "custom-warn"],
                [/\[notice.*/, "custom-notice"],
                [/\[info.*/, "custom-info"]
            ]
        }
    }
};


/***/ }),

/***/ "./src/languages/rust.ts":
/*!*******************************!*\
  !*** ./src/languages/rust.ts ***!
  \*******************************/
/*! exports provided: Rust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rust", function() { return Rust; });
// Copyright (c) 2012-2018, Matt Godbolt
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
let completionItems = null;
function getCompletionItems() {
    const keyword = monaco.languages.CompletionItemKind.Keyword;
    if (completionItems) {
        return completionItems;
    }
    return completionItems = [];
}
const LanguageConfiguration = {
    comments: {
        lineComment: "//",
        blockComment: ["/*", "*/"],
    },
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "<", close: ">" },
    ]
};
const MonarchDefinitions = {
    defaultToken: "invalid",
    keywords: [
        "abstract",
        "alignof",
        "as",
        "become",
        "box",
        "break",
        "const",
        "continue",
        "crate",
        "do",
        "else",
        "enum",
        "extern",
        "false",
        "final",
        "fn",
        "for",
        "if",
        "impl",
        "in",
        "let",
        "loop",
        "macro",
        "match",
        "mod",
        "move",
        "mut",
        "offsetof",
        "override",
        "priv",
        "proc",
        "pub",
        "pure",
        "ref",
        "return",
        "Self",
        "self",
        "sizeof",
        "static",
        "struct",
        "super",
        "trait",
        "true",
        "type",
        "typeof",
        "unsafe",
        "unsized",
        "use",
        "virtual",
        "where",
        "while",
        "yield",
        // keywords for macros
        "macro_rules",
        "block",
        "expr",
        "ident",
        "item",
        "pat",
        "path",
        "stmt",
        "meta",
        "tt",
        "ty"
    ],
    typeKeywords: [
        "array", "bool", "char", "f32", "f64", "i16", "i32", "i64", "i8",
        "isize", "pointer", "slice", "str", "tuple", "u16", "u32", "u64", "u8",
        "usize", "Vec", "String"
    ],
    operators: [
        "=", ">", "<", "!", "~", "?", ":",
        "==", "<=", ">=", "!=", "&&", "||", "++", "--",
        "+", "-", "*", "/", "&", "|", "^", "%", "<<",
        ">>", ">>>", "+=", "-=", "*=", "/=", "&=", "|=",
        "^=", "%=", "<<=", ">>=", ">>>="
    ],
    symbols: /[=><!~?:&|+\-*\/^%]+/,
    escapes: /\\(?:[abfnrtv\\""]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-z_$][\w$]*/, {
                    cases: {
                        "@keywords": "keyword",
                        "@typeKeywords": "keyword.type",
                        "@default": "identifier"
                    }
                }],
            [/[A-Z][\w$]*/, "type.identifier"],
            // whitespace
            { include: "@whitespace" },
            // delimiters and operators
            [/[{}()\[\]]/, "@brackets"],
            [/[<>](?!@symbols)/, "@brackets"],
            [/@symbols/, {
                    cases: {
                        "@operators": "operator",
                        "@default": ""
                    }
                }],
            [/#!?\[[^]*\]/, "annotation"],
            [/#!?.*$/, "annotation.invalid"],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?[fFdD]?/, "number.float"],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F][Ll]?/, "number.hex"],
            [/0[0-7_]*[0-7][Ll]?/, "number.octal"],
            [/0[bB][0-1_]*[0-1][Ll]?/, "number.binary"],
            [/\d+[lL]?/, "number"],
            // delimiter: after number because of .\d floats
            [/[;,.]/, "delimiter"],
            // strings
            [/"([^"\\]|\\.)*$/, "string.invalid"],
            [/"/, "string", "@string"],
            // characters
            [/"[^\\"]"/, "string"],
            [/(")(@escapes)(")/, ["string", "string.escape", "string"]],
            [/"/, "string.invalid"]
        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"]
        ],
        comment: [
            [/[^\/*]+/, "comment"],
            [/\/\*/, "comment", "@push"],
            [/\/\*/, "comment.invalid"],
            ["\\*/", "comment", "@pop"],
            [/[\/*]/, "comment"]
        ],
        string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, "string", "@pop"]
        ]
    }
};
const Rust = {
    MonarchDefinitions,
    LanguageConfiguration,
    CompletionItemProvider: {
        provideCompletionItems: (model, position) => {
            return getCompletionItems();
        }
    },
    HoverProvider: {
        provideHover: (model, position) => {
            return {
                range: new monaco.Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
                contents: [
                    "**DETAILS**",
                    { language: "html", value: "TODO" }
                ]
            };
        }
    }
};


/***/ }),

/***/ "./src/languages/wat.ts":
/*!******************************!*\
  !*** ./src/languages/wat.ts ***!
  \******************************/
/*! exports provided: getWatCompletionItems, watWordAt, Wat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWatCompletionItems", function() { return getWatCompletionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watWordAt", function() { return watWordAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wat", function() { return Wat; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
let completionItems = null;
function getWatCompletionItems() {
    const keyword = monaco.languages.CompletionItemKind.Keyword;
    if (completionItems) {
        return completionItems;
    }
    return completionItems = [
        { label: "module", documentation: "", kind: keyword, insertText: "module" },
        { label: "func", documentation: "function declaration", kind: keyword, insertText: "func" },
        { label: "param", documentation: "parameter", kind: keyword, insertText: { value: "param ${1:identifier} ${2:type}" } },
        { label: "i32", documentation: "32-bit integer", kind: keyword, insertText: "i32" },
        { label: "i64", documentation: "64-bit integer", kind: keyword, insertText: "i64" },
        { label: "f32", documentation: "32-bit floating point", kind: keyword, insertText: "f32" },
        { label: "f64", documentation: "64-bit floating point", kind: keyword, insertText: "f64" },
        { label: "anyfunc", documentation: "function reference", kind: keyword, insertText: "anyfunc" },
        { label: "i32.load8_s", documentation: "load 1 byte and sign-extend i8 to i32", kind: keyword, insertText: "i32.load8_s" },
        { label: "i32.load8_u", documentation: "load 1 byte and zero-extend i8 to i32", kind: keyword, insertText: "i32.load8_u" },
        { label: "i32.load16_s", documentation: "load 2 bytes and sign-extend i16 to i32", kind: keyword, insertText: "i32.load16_s" },
        { label: "i32.load16_u", documentation: "load 2 bytes and zero-extend i16 to i32", kind: keyword, insertText: "i32.load16_u" },
        { label: "i32.load", documentation: "load 4 bytes as i32", kind: keyword, insertText: "i32.load" },
        { label: "i64.load8_s", documentation: "load 1 byte and sign-extend i8 to i64", kind: keyword, insertText: "i64.load8_s" },
        { label: "i64.load8_u", documentation: "load 1 byte and zero-extend i8 to i64", kind: keyword, insertText: "i64.load8_u" },
        { label: "i64.load16_s", documentation: "load 2 bytes and sign-extend i16 to i64", kind: keyword, insertText: "i64.load16_s" },
        { label: "i64.load16_u", documentation: "load 2 bytes and zero-extend i16 to i64", kind: keyword, insertText: "i64.load16_u" },
        { label: "i64.load32_s", documentation: "load 4 bytes and sign-extend i32 to i64", kind: keyword, insertText: "i64.load32_s" },
        { label: "i64.load32_u", documentation: "load 4 bytes and zero-extend i32 to i64", kind: keyword, insertText: "i64.load32_u" },
        { label: "i64.load", documentation: "load 8 bytes as i64", kind: keyword, insertText: "i64.load" },
        { label: "f32.load", documentation: "load 4 bytes as f32", kind: keyword, insertText: "f32.load" },
        { label: "f64.load", documentation: "load 8 bytes as f64", kind: keyword, insertText: "f64.load" },
        { label: "i32.store8", documentation: "wrap i32 to i8 and store 1 byte", kind: keyword, insertText: "i32.store8" },
        { label: "i32.store16", documentation: "wrap i32 to i16 and store 2 bytes", kind: keyword, insertText: "i32.store16" },
        { label: "i32.store", documentation: "(no conversion) store 4 bytes", kind: keyword, insertText: "i32.store" },
        { label: "i64.store8", documentation: "wrap i64 to i8 and store 1 byte", kind: keyword, insertText: "i64.store8" },
        { label: "i64.store16", documentation: "wrap i64 to i16 and store 2 bytes", kind: keyword, insertText: "i64.store16" },
        { label: "i64.store32", documentation: "wrap i64 to i32 and store 4 bytes", kind: keyword, insertText: "i64.store32" },
        { label: "i64.store", documentation: "(no conversion) store 8 bytes", kind: keyword, insertText: "i64.store" },
        { label: "f32.store", documentation: "(no conversion) store 4 bytes", kind: keyword, insertText: "f32.store" },
        { label: "f64.store", documentation: "(no conversion) store 8 bytes", kind: keyword, insertText: "f64.store" },
        { label: "get_local", documentation: "read the current value of a local variable", kind: keyword, insertText: "get_local" },
        { label: "set_local", documentation: "set the current value of a local variable", kind: keyword, insertText: "set_local" },
        { label: "tee_local", documentation: "like `set_local`, but also returns the set value", kind: keyword, insertText: "tee_local" },
        { label: "get_global", documentation: "get the current value of a global variable", kind: keyword, insertText: "get_global" },
        { label: "set_global", documentation: "set the current value of a global variable", kind: keyword, insertText: "set_global" },
        { label: "nop", documentation: "no operation, no effect", kind: keyword, insertText: "nop" },
        { label: "block", documentation: "the beginning of a block construct, a sequence of instructions with a label at the end", kind: keyword, insertText: "block" },
        { label: "loop", documentation: "a block with a label at the beginning which may be used to form loops", kind: keyword, insertText: "loop" },
        { label: "if", documentation: "the beginning of an if construct with an implicit *then* block", kind: keyword, insertText: "if" },
        { label: "else", documentation: "marks the else block of an if", kind: keyword, insertText: "else" },
        { label: "br", documentation: "branch to a given label in an enclosing construct", kind: keyword, insertText: "br" },
        { label: "br_if", documentation: "conditionally branch to a given label in an enclosing construct", kind: keyword, insertText: "br_if" },
        { label: "br_table", documentation: "a jump table which jumps to a label in an enclosing construct", kind: keyword, insertText: "br_table" },
        { label: "return", documentation: "return zero or more values from this function", kind: keyword, insertText: "return" },
        { label: "end", documentation: "an instruction that marks the end of a block, loop, if, or function", kind: keyword, insertText: "end" },
        { label: "call", documentation: "call function directly", kind: keyword, insertText: "call" },
        { label: "call_indirect", documentation: "call function indirectly", kind: keyword, insertText: "call_indirect" },
        { label: "i64.const", documentation: "produce the value of an i64 immediate", kind: keyword, insertText: { value: "i64.const ${1:constant}" } },
        { label: "i32.const", documentation: "produce the value of an i32 immediate", kind: keyword, insertText: { value: "i32.const ${1:constant}" } },
        { label: "f32.const", documentation: "produce the value of an f32 immediate", kind: keyword, insertText: { value: "f32.const ${1:constant}" } },
        { label: "f64.const", documentation: "produce the value of an f64 immediate", kind: keyword, insertText: { value: "f64.const ${1:constant}" } },
        { label: "i32.add", documentation: "sign-agnostic addition", kind: keyword, insertText: "i32.add" },
        { label: "i32.sub", documentation: "sign-agnostic subtraction", kind: keyword, insertText: "i32.sub" },
        { label: "i32.mul", documentation: "sign-agnostic multiplication (lower 32-bits)", kind: keyword, insertText: "i32.mul" },
        { label: "i32.div_s", documentation: "signed division (result is truncated toward zero)", kind: keyword, insertText: "i32.div_s" },
        { label: "i32.div_u", documentation: "unsigned division (result is [floored](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions))", kind: keyword, insertText: "i32.div_u" },
        { label: "i32.rem_s", documentation: "signed remainder (result has the sign of the dividend)", kind: keyword, insertText: "i32.rem_s" },
        { label: "i32.rem_u", documentation: "unsigned remainder", kind: keyword, insertText: "i32.rem_u" },
        { label: "i32.and", documentation: "sign-agnostic bitwise and", kind: keyword, insertText: "i32.and" },
        { label: "i32.or", documentation: "sign-agnostic bitwise inclusive or", kind: keyword, insertText: "i32.or" },
        { label: "i32.xor", documentation: "sign-agnostic bitwise exclusive or", kind: keyword, insertText: "i32.xor" },
        { label: "i32.shl", documentation: "sign-agnostic shift left", kind: keyword, insertText: "i32.shl" },
        { label: "i32.shr_u", documentation: "zero-replicating (logical) shift right", kind: keyword, insertText: "i32.shr_u" },
        { label: "i32.shr_s", documentation: "sign-replicating (arithmetic) shift right", kind: keyword, insertText: "i32.shr_s" },
        { label: "i32.rotl", documentation: "sign-agnostic rotate left", kind: keyword, insertText: "i32.rotl" },
        { label: "i32.rotr", documentation: "sign-agnostic rotate right", kind: keyword, insertText: "i32.rotr" },
        { label: "i32.eq", documentation: "sign-agnostic compare equal", kind: keyword, insertText: "i32.eq" },
        { label: "i32.ne", documentation: "sign-agnostic compare unequal", kind: keyword, insertText: "i32.ne" },
        { label: "i32.lt_s", documentation: "signed less than", kind: keyword, insertText: "i32.lt_s" },
        { label: "i32.le_s", documentation: "signed less than or equal", kind: keyword, insertText: "i32.le_s" },
        { label: "i32.lt_u", documentation: "unsigned less than", kind: keyword, insertText: "i32.lt_u" },
        { label: "i32.le_u", documentation: "unsigned less than or equal", kind: keyword, insertText: "i32.le_u" },
        { label: "i32.gt_s", documentation: "signed greater than", kind: keyword, insertText: "i32.gt_s" },
        { label: "i32.ge_s", documentation: "signed greater than or equal", kind: keyword, insertText: "i32.ge_s" },
        { label: "i32.gt_u", documentation: "unsigned greater than", kind: keyword, insertText: "i32.gt_u" },
        { label: "i32.ge_u", documentation: "unsigned greater than or equal", kind: keyword, insertText: "i32.ge_u" },
        { label: "i32.clz", documentation: "sign-agnostic count leading zero bits (All zero bits are considered leading if the value is zero)", kind: keyword, insertText: "i32.clz" },
        { label: "i32.ctz", documentation: "sign-agnostic count trailing zero bits (All zero bits are considered trailing if the value is zero)", kind: keyword, insertText: "i32.ctz" },
        { label: "i32.popcnt", documentation: "sign-agnostic count number of one bits", kind: keyword, insertText: "i32.popcnt" },
        { label: "i32.eqz", documentation: "compare equal to zero (return 1 if operand is zero, 0 otherwise)", kind: keyword, insertText: "i32.eqz" },
        { label: "f32.add", documentation: "addition", kind: keyword, insertText: "f32.add" },
        { label: "f32.sub", documentation: "subtraction", kind: keyword, insertText: "f32.sub" },
        { label: "f32.mul", documentation: "multiplication", kind: keyword, insertText: "f32.mul" },
        { label: "f32.div", documentation: "division", kind: keyword, insertText: "f32.div" },
        { label: "f32.abs", documentation: "absolute value", kind: keyword, insertText: "f32.abs" },
        { label: "f32.neg", documentation: "negation", kind: keyword, insertText: "f32.neg" },
        { label: "f32.copysign", documentation: "copysign", kind: keyword, insertText: "f32.copysign" },
        { label: "f32.ceil", documentation: "ceiling operator", kind: keyword, insertText: "f32.ceil" },
        { label: "f32.floor", documentation: "floor operator", kind: keyword, insertText: "f32.floor" },
        { label: "f32.trunc", documentation: "round to nearest integer towards zero", kind: keyword, insertText: "f32.trunc" },
        { label: "f32.nearest", documentation: "round to nearest integer, ties to even", kind: keyword, insertText: "f32.nearest" },
        { label: "f32.eq", documentation: "compare ordered and equal", kind: keyword, insertText: "f32.eq" },
        { label: "f32.ne", documentation: "compare unordered or unequal", kind: keyword, insertText: "f32.ne" },
        { label: "f32.lt", documentation: "compare ordered and less than", kind: keyword, insertText: "f32.lt" },
        { label: "f32.le", documentation: "compare ordered and less than or equal", kind: keyword, insertText: "f32.le" },
        { label: "f32.gt", documentation: "compare ordered and greater than", kind: keyword, insertText: "f32.gt" },
        { label: "f32.ge", documentation: "compare ordered and greater than or equal", kind: keyword, insertText: "f32.ge" },
        { label: "f32.sqrt", documentation: "square root", kind: keyword, insertText: "f32.sqrt" },
        { label: "f32.min", documentation: "minimum (binary operator); if either operand is NaN, returns NaN", kind: keyword, insertText: "f32.min" },
        { label: "f32.max", documentation: "maximum (binary operator); if either operand is NaN, returns NaN", kind: keyword, insertText: "f32.max" },
        { label: "f64.add", documentation: "addition", kind: keyword, insertText: "f64.add" },
        { label: "f64.sub", documentation: "subtraction", kind: keyword, insertText: "f64.sub" },
        { label: "f64.mul", documentation: "multiplication", kind: keyword, insertText: "f64.mul" },
        { label: "f64.div", documentation: "division", kind: keyword, insertText: "f64.div" },
        { label: "f64.abs", documentation: "absolute value", kind: keyword, insertText: "f64.abs" },
        { label: "f64.neg", documentation: "negation", kind: keyword, insertText: "f64.neg" },
        { label: "f64.copysign", documentation: "copysign", kind: keyword, insertText: "f64.copysign" },
        { label: "f64.ceil", documentation: "ceiling operator", kind: keyword, insertText: "f64.ceil" },
        { label: "f64.floor", documentation: "floor operator", kind: keyword, insertText: "f64.floor" },
        { label: "f64.trunc", documentation: "round to nearest integer towards zero", kind: keyword, insertText: "f64.trunc" },
        { label: "f64.nearest", documentation: "round to nearest integer, ties to even", kind: keyword, insertText: "f64.nearest" },
        { label: "f64.eq", documentation: "compare ordered and equal", kind: keyword, insertText: "f64.eq" },
        { label: "f64.ne", documentation: "compare unordered or unequal", kind: keyword, insertText: "f64.ne" },
        { label: "f64.lt", documentation: "compare ordered and less than", kind: keyword, insertText: "f64.lt" },
        { label: "f64.le", documentation: "compare ordered and less than or equal", kind: keyword, insertText: "f64.le" },
        { label: "f64.gt", documentation: "compare ordered and greater than", kind: keyword, insertText: "f64.gt" },
        { label: "f64.ge", documentation: "compare ordered and greater than or equal", kind: keyword, insertText: "f64.ge" },
        { label: "f64.sqrt", documentation: "square root", kind: keyword, insertText: "f64.sqrt" },
        { label: "f64.min", documentation: "minimum (binary operator); if either operand is NaN, returns NaN", kind: keyword, insertText: "f64.min" },
        { label: "f64.max", documentation: "maximum (binary operator); if either operand is NaN, returns NaN", kind: keyword, insertText: "f64.max" },
        { label: "i32.wrap/i64", documentation: "wrap a 64-bit integer to a 32-bit integer", kind: keyword, insertText: "i32.wrap/i64" },
        { label: "i32.trunc_s/f32", documentation: "truncate a 32-bit float to a signed 32-bit integer", kind: keyword, insertText: "i32.trunc_s/f32" },
        { label: "i32.trunc_s/f64", documentation: "truncate a 64-bit float to a signed 32-bit integer", kind: keyword, insertText: "i32.trunc_s/f64" },
        { label: "i32.trunc_u/f32", documentation: "truncate a 32-bit float to an unsigned 32-bit integer", kind: keyword, insertText: "i32.trunc_u/f32" },
        { label: "i32.trunc_u/f64", documentation: "truncate a 64-bit float to an unsigned 32-bit integer", kind: keyword, insertText: "i32.trunc_u/f64" },
        { label: "i32.reinterpret/f32", documentation: "reinterpret the bits of a 32-bit float as a 32-bit integer", kind: keyword, insertText: "i32.reinterpret/f32" },
        { label: "i64.extend_s/i32", documentation: "extend a signed 32-bit integer to a 64-bit integer", kind: keyword, insertText: "i64.extend_s/i32" },
        { label: "i64.extend_u/i32", documentation: "extend an unsigned 32-bit integer to a 64-bit integer", kind: keyword, insertText: "i64.extend_u/i32" },
        { label: "i64.trunc_s/f32", documentation: "truncate a 32-bit float to a signed 64-bit integer", kind: keyword, insertText: "i64.trunc_s/f32" },
        { label: "i64.trunc_s/f64", documentation: "truncate a 64-bit float to a signed 64-bit integer", kind: keyword, insertText: "i64.trunc_s/f64" },
        { label: "i64.trunc_u/f32", documentation: "truncate a 32-bit float to an unsigned 64-bit integer", kind: keyword, insertText: "i64.trunc_u/f32" },
        { label: "i64.trunc_u/f64", documentation: "truncate a 64-bit float to an unsigned 64-bit integer", kind: keyword, insertText: "i64.trunc_u/f64" },
        { label: "i64.reinterpret/f64", documentation: "reinterpret the bits of a 64-bit float as a 64-bit integer", kind: keyword, insertText: "i64.reinterpret/f64" },
        { label: "f32.demote/f64", documentation: "demote a 64-bit float to a 32-bit float", kind: keyword, insertText: "f32.demote/f64" },
        { label: "f32.convert_s/i32", documentation: "convert a signed 32-bit integer to a 32-bit float", kind: keyword, insertText: "f32.convert_s/i32" },
        { label: "f32.convert_s/i64", documentation: "convert a signed 64-bit integer to a 32-bit float", kind: keyword, insertText: "f32.convert_s/i64" },
        { label: "f32.convert_u/i32", documentation: "convert an unsigned 32-bit integer to a 32-bit float", kind: keyword, insertText: "f32.convert_u/i32" },
        { label: "f32.convert_u/i64", documentation: "convert an unsigned 64-bit integer to a 32-bit float", kind: keyword, insertText: "f32.convert_u/i64" },
        { label: "f32.reinterpret/i32", documentation: "reinterpret the bits of a 32-bit integer as a 32-bit float", kind: keyword, insertText: "f32.reinterpret/i32" },
        { label: "f64.promote/f32", documentation: "promote a 32-bit float to a 64-bit float", kind: keyword, insertText: "f64.promote/f32" },
        { label: "f64.convert_s/i32", documentation: "convert a signed 32-bit integer to a 64-bit float", kind: keyword, insertText: "f64.convert_s/i32" },
        { label: "f64.convert_s/i64", documentation: "convert a signed 64-bit integer to a 64-bit float", kind: keyword, insertText: "f64.convert_s/i64" },
        { label: "f64.convert_u/i32", documentation: "convert an unsigned 32-bit integer to a 64-bit float", kind: keyword, insertText: "f64.convert_u/i32" },
        { label: "f64.convert_u/i64", documentation: "convert an unsigned 64-bit integer to a 64-bit float", kind: keyword, insertText: "f64.convert_u/i64" },
        { label: "f64.reinterpret/i64", documentation: "reinterpret the bits of a 64-bit integer as a 64-bit float", kind: keyword, insertText: "f64.reinterpret/i64" },
        { label: "current_memory", documentation: "current memory size in 64k pages", kind: keyword, insertText: "current_memory" },
        { label: "grow_memory", documentation: "grow memory size by the specified amount of 64k pages", kind: keyword, insertText: "grow_memory" }
    ];
}
const LanguageConfiguration = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: "//",
        blockComment: ["/*", "*/"],
    },
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "<", close: ">" },
    ]
};
const MonarchDefinitions = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // defaultToken: 'invalid',
    keywords: [
        "module",
        "table",
        "memory",
        "export",
        "import",
        "func",
        "result",
        "offset",
        "anyfunc",
        "type",
        "data",
        "start",
        "element",
        "global",
        "local",
        "mut",
        "param",
        "result",
        "i32.load8_s",
        "i32.load8_u",
        "i32.load16_s",
        "i32.load16_u",
        "i32.load",
        "i64.load8_s",
        "i64.load8_u",
        "i64.load16_s",
        "i64.load16_u",
        "i64.load32_s",
        "i64.load32_u",
        "i64.load",
        "f32.load",
        "f64.load",
        "i32.store8",
        "i32.store16",
        "i32.store",
        "i64.store8",
        "i64.store16",
        "i64.store32",
        "i64.store",
        "f32.store",
        "f64.store",
        "i32.const",
        "i64.const",
        "f32.const",
        "f64.const",
        "i32.add",
        "i32.sub",
        "i32.mul",
        "i32.div_s",
        "i32.div_u",
        "i32.rem_s",
        "i32.rem_u",
        "i32.and",
        "i32.or",
        "i32.xor",
        "i32.shl",
        "i32.shr_u",
        "i32.shr_s",
        "i32.rotl",
        "i32.rotr",
        "i32.eq",
        "i32.ne",
        "i32.lt_s",
        "i32.le_s",
        "i32.lt_u",
        "i32.le_u",
        "i32.gt_s",
        "i32.ge_s",
        "i32.gt_u",
        "i32.ge_u",
        "i32.clz",
        "i32.ctz",
        "i32.popcnt",
        "i32.eqz",
        "f32.add",
        "f32.sub",
        "f32.mul",
        "f32.div",
        "f32.abs",
        "f32.neg",
        "f32.copysign",
        "f32.ceil",
        "f32.floor",
        "f32.trunc",
        "f32.nearest",
        "f32.eq",
        "f32.ne",
        "f32.lt",
        "f32.le",
        "f32.gt",
        "f32.ge",
        "f32.sqrt",
        "f32.min",
        "f32.max",
        "f64.add",
        "f64.sub",
        "f64.mul",
        "f64.div",
        "f64.abs",
        "f64.neg",
        "f64.copysign",
        "f64.ceil",
        "f64.floor",
        "f64.trunc",
        "f64.nearest",
        "f64.eq",
        "f64.ne",
        "f64.lt",
        "f64.le",
        "f64.gt",
        "f64.ge",
        "f64.sqrt",
        "f64.min",
        "f64.max",
        "i32.wrap/i64",
        "i32.trunc_s/f32",
        "i32.trunc_s/f64",
        "i32.trunc_u/f32",
        "i32.trunc_u/f64",
        "i32.reinterpret/f32",
        "i64.extend_s/i32",
        "i64.extend_u/i32",
        "i64.trunc_s/f32",
        "i64.trunc_s/f64",
        "i64.trunc_u/f32",
        "i64.trunc_u/f64",
        "i64.reinterpret/f64",
        "f32.demote/f64",
        "f32.convert_s/i32",
        "f32.convert_s/i64",
        "f32.convert_u/i32",
        "f32.convert_u/i64",
        "f32.reinterpret/i32",
        "f64.promote/f32",
        "f64.convert_s/i32",
        "f64.convert_s/i64",
        "f64.convert_u/i32",
        "f64.convert_u/i64",
        "f64.reinterpret/i64",
        "get_local",
        "set_local",
        "tee_local",
        "get_global",
        "set_global",
        "drop",
        "select",
        "memory.size",
        "memory.grow",
        "current_memory",
        "grow_memory"
    ],
    typeKeywords: [
        "i32",
        "i64",
        "f32",
        "f64",
        "anyfunc"
    ],
    operators: [],
    brackets: [
        ["(", ")", "bracket.parenthesis"],
        ["{", "}", "bracket.curly"],
        ["[", "]", "bracket.square"]
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-z_$][\w$\.]*/, {
                    cases: {
                        "@keywords": "keyword",
                        "@typeKeywords": "type",
                        "@default": "type.identifier"
                    }
                }],
            // numbers
            [/\d+/, "number"],
            // strings
            [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
            [/[{}()\[\]]/, "@brackets"]
        ],
        comment: [
            [/[^\/*]+/, "comment"],
            [/\/\*/, "comment", "@push"],
            ["\\*/", "comment", "@pop"],
            [/[\/*]/, "comment"]
        ],
        string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"],
        ],
    },
};
function watWordAt(s, i) {
    const l = s.slice(0, i + 1).search(/[A-Za-z0-9_\.\/]+$/);
    const r = s.slice(i).search(/[^A-Za-z0-9_\.\/]/);
    if (r < 0) {
        return { index: l, word: s.slice(l) };
    }
    return { index: l, word: s.slice(l, r + i) };
}
const Wat = {
    MonarchDefinitions,
    LanguageConfiguration,
    CompletionItemProvider: {
        provideCompletionItems: function (model, position) {
            return getWatCompletionItems();
        }
    },
    HoverProvider: {
        provideHover: function (model, position) {
            const lineContent = model.getLineContent(position.lineNumber);
            const { index, word } = watWordAt(lineContent, position.column - 1);
            if (!word) {
                return;
            }
            const item = getWatCompletionItems().find(x => x.label === word);
            if (!item) {
                return;
            }
            return {
                range: new monaco.Range(position.lineNumber, index + 1, position.lineNumber, index + 1 + word.length),
                contents: [
                    "**DETAILS**",
                    { language: "html", value: item.documentation }
                ]
            };
        }
    }
};


/***/ }),

/***/ "./src/languages/x86.ts":
/*!******************************!*\
  !*** ./src/languages/x86.ts ***!
  \******************************/
/*! exports provided: X86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X86", function() { return X86; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
let completionItems = null;
function getCompletionItems() {
    const keyword = monaco.languages.CompletionItemKind.Keyword;
    if (completionItems) {
        return completionItems;
    }
    return completionItems = [];
}
const LanguageConfiguration = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "<", close: ">" },
    ]
};
const MonarchDefinitions = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: "invalid",
    ignoreCase: true,
    keywords: [
        "qword", "ptr"
    ],
    typeKeywords: [
        "i32", "i64", "f32", "f64"
    ],
    ops: [
        "add",
        "sub",
        "mov",
        "jmp",
        "ret",
        "int3",
        "nop",
        "cmp"
    ],
    registers: [
        "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15",
        "CS", "DS", "ES", "FS", "GS", "SS", "RAX", "EAX", "RBX", "EBX", "RCX", "ECX", "RDX", "EDX",
        "RCX", "RIP", "EIP", "IP", "RSP", "ESP", "SP", "RSI", "ESI", "SI", "RDI", "EDI", "DI", "RFLAGS", "EFLAGS", "FLAGS"
    ],
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-z_$][\w$\.]*/, {
                    cases: {
                        "@ops": "keyword",
                        "@registers": "type",
                        "@keywords": "keyword",
                        "@typeKeywords": "keyword.type",
                        "@default": "identifier"
                    }
                }],
            // whitespace
            { include: "@whitespace" },
            // numbers
            [/0[xX][0-9a-fA-F]+/, "number.hex"],
            [/\d+/, "number"],
            // delimiter: after number because of .\d floats
            [/[;,.]/, "delimiter"],
            // strings
            [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
            [/[{}()\[\]]/, "@brackets"]
        ],
        comment: [
            [/;.*/, "comment"]
        ],
        string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/;.*$/, "comment"]
        ],
    },
};
const X86 = {
    MonarchDefinitions,
    LanguageConfiguration,
    CompletionItemProvider: {
        provideCompletionItems: function (model, position) {
            return getCompletionItems();
        }
    },
    HoverProvider: {
        provideHover: function (model, position) {
            return {
                range: new monaco.Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
                contents: [
                    "**DETAILS**",
                    { language: "html", value: "TODO" }
                ]
            };
        }
    }
};


/***/ }),

/***/ "./src/message.ts":
/*!************************!*\
  !*** ./src/message.ts ***!
  \************************/
/*! exports provided: WorkerCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerCommand", function() { return WorkerCommand; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var WorkerCommand;
(function (WorkerCommand) {
    WorkerCommand[WorkerCommand["OptimizeWasmWithBinaryen"] = 0] = "OptimizeWasmWithBinaryen";
    WorkerCommand[WorkerCommand["ValidateWasmWithBinaryen"] = 1] = "ValidateWasmWithBinaryen";
    WorkerCommand[WorkerCommand["CreateWasmCallGraphWithBinaryen"] = 2] = "CreateWasmCallGraphWithBinaryen";
    WorkerCommand[WorkerCommand["ConvertWasmToAsmWithBinaryen"] = 3] = "ConvertWasmToAsmWithBinaryen";
    WorkerCommand[WorkerCommand["DisassembleWasmWithBinaryen"] = 4] = "DisassembleWasmWithBinaryen";
    WorkerCommand[WorkerCommand["AssembleWatWithBinaryen"] = 5] = "AssembleWatWithBinaryen";
    WorkerCommand[WorkerCommand["DisassembleWasmWithWabt"] = 6] = "DisassembleWasmWithWabt";
    WorkerCommand[WorkerCommand["AssembleWatWithWabt"] = 7] = "AssembleWatWithWabt";
    WorkerCommand[WorkerCommand["TwiggyWasm"] = 8] = "TwiggyWasm";
})(WorkerCommand || (WorkerCommand = {}));


/***/ }),

/***/ "./src/models/Directory.ts":
/*!*********************************!*\
  !*** ./src/models/Directory.ts ***!
  \*********************************/
/*! exports provided: Directory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minimatch */ "./node_modules/minimatch/minimatch.js");
/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minimatch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./File */ "./src/models/File.ts");
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventDispatcher */ "./src/models/EventDispatcher.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/models/types.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





class Directory extends _File__WEBPACK_IMPORTED_MODULE_2__["File"] {
    constructor(name) {
        super(name, _types__WEBPACK_IMPORTED_MODULE_4__["FileType"].Directory);
        this.children = [];
        this.isOpen = true;
        this.onDidChangeChildren = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["EventDispatcher"]("Directory Changed ");
    }
    notifyDidChangeChildren(file) {
        let directory = this;
        while (directory) {
            directory.onDidChangeChildren.dispatch();
            directory = directory.parent;
        }
    }
    forEachFile(fn, excludeTransientFiles = false, recurse = false) {
        if (recurse) {
            this.children.forEach((file) => {
                if (excludeTransientFiles && file.isTransient) {
                    return false;
                }
                if (file instanceof Directory) {
                    file.forEachFile(fn, excludeTransientFiles, recurse);
                }
                else {
                    fn(file);
                }
            });
        }
        else {
            this.children.forEach(fn);
        }
    }
    mapEachFile(fn, excludeTransientFiles = false) {
        return this.children.filter((file) => {
            if (excludeTransientFiles && file.isTransient) {
                return false;
            }
            return true;
        }).map(fn);
    }
    handleNameCollision(name, isDirectory) {
        for (let i = 1; i <= this.children.length; i++) {
            const nameParts = name.split(".");
            const extension = nameParts.pop();
            let newName;
            if (isDirectory) {
                newName = `${name}${i + 1}`;
            }
            else {
                newName = `${nameParts.join(".")}.${i + 1}.${extension}`;
            }
            if (!this.getImmediateChild(newName)) {
                return newName;
            }
        }
        throw new Error("Name collision not handled");
    }
    addFile(file) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["assert"])(file.parent === null);
        if (this.getImmediateChild(file.name)) {
            file.name = this.handleNameCollision(file.name, file instanceof Directory);
        }
        this.children.push(file);
        file.parent = this;
        this.notifyDidChangeChildren(file);
    }
    removeFile(file) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["assert"])(file.parent === this);
        const i = this.children.indexOf(file);
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["assert"])(i >= 0);
        this.children.splice(i, 1);
        file.parent = null;
        this.notifyDidChangeChildren(file);
    }
    newDirectory(path) {
        if (typeof path === "string") {
            path = path.split("/");
        }
        let directory = this;
        while (path.length) {
            const name = path.shift();
            let file = directory.getImmediateChild(name);
            if (file) {
                directory = file;
            }
            else {
                file = new Directory(name);
                directory.addFile(file);
                directory = file;
            }
        }
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["assert"])(directory instanceof Directory);
        return directory;
    }
    newFile(path, type, isTransient = false, handleNameCollision = false) {
        if (typeof path === "string") {
            path = path.split("/");
        }
        let directory = this;
        if (path.length > 1) {
            directory = this.newDirectory(path.slice(0, path.length - 1));
        }
        const name = path[path.length - 1];
        let file = directory.getFile(name);
        if (file && !handleNameCollision) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["assert"])(file.type === type);
        }
        else {
            file = new _File__WEBPACK_IMPORTED_MODULE_2__["File"](path[path.length - 1], type);
            directory.addFile(file);
        }
        file.isTransient = isTransient;
        return file;
    }
    getImmediateChild(name) {
        return this.children.find((file) => {
            return file.name === name;
        });
    }
    getFile(path) {
        if (typeof path === "string") {
            path = path.split("/");
        }
        const file = this.getImmediateChild(path[0]);
        if (path.length > 1) {
            if (file && file.type === _types__WEBPACK_IMPORTED_MODULE_4__["FileType"].Directory) {
                return file.getFile(path.slice(1));
            }
            else {
                return null;
            }
        }
        return file;
    }
    list() {
        const list = [];
        function recurse(prefix, x) {
            if (prefix) {
                prefix += "/";
            }
            x.forEachFile(file => {
                const path = prefix + file.name;
                if (file instanceof Directory) {
                    recurse(path, file);
                }
                else {
                    list.push(path);
                }
            });
        }
        recurse("", this);
        return list;
    }
    glob(pattern) {
        const mm = new minimatch__WEBPACK_IMPORTED_MODULE_1__["Minimatch"](pattern);
        return this.list().filter(path => mm.match(path));
    }
    globFiles(pattern) {
        return this.glob(pattern).map(path => this.getFile(path));
    }
    hasChildren() {
        return this.children.length > 0;
    }
}


/***/ }),

/***/ "./src/models/EventDispatcher.ts":
/*!***************************************!*\
  !*** ./src/models/EventDispatcher.ts ***!
  \***************************************/
/*! exports provided: EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class EventDispatcher {
    constructor(name) {
        this.callbacks = [];
        this.name = name;
    }
    register(callback) {
        if (this.callbacks.indexOf(callback) >= 0) {
            return;
        }
        this.callbacks.push(callback);
    }
    unregister(callback) {
        const i = this.callbacks.indexOf(callback);
        if (i < 0) {
            throw new Error("Unknown callback.");
        }
        this.callbacks.splice(i, 1);
    }
    dispatch(target) {
        // console.log("Dispatching " + this.name);
        this.callbacks.forEach(callback => {
            callback(target);
        });
    }
}


/***/ }),

/***/ "./src/models/File.ts":
/*!****************************!*\
  !*** ./src/models/File.ts ***!
  \****************************/
/*! exports provided: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/service.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/models/types.ts");
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventDispatcher */ "./src/models/EventDispatcher.ts");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project */ "./src/models/Project.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





class File {
    constructor(name, type) {
        /**
         * True if the buffer is out of sync with the data.
         */
        this.isDirty = false;
        this.isBufferReadOnly = false;
        /**
         * True if the file is temporary. Transient files are usually not serialized to a
         * backing store.
         */
        this.isTransient = false;
        this.onDidChangeData = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["EventDispatcher"]("File Data Change");
        this.onDidChangeBuffer = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["EventDispatcher"]("File Buffer Change");
        this.onDidChangeProblems = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["EventDispatcher"]("File Problems Change");
        this.onDidChangeDirty = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["EventDispatcher"]("File Dirty Flag Change");
        this.key = String(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getNextKey"])());
        this.problems = [];
        this.name = name;
        this.type = type;
        this.data = null;
        if (Object(_types__WEBPACK_IMPORTED_MODULE_2__["isBinaryFileType"])(type)) {
            this.bufferType = _types__WEBPACK_IMPORTED_MODULE_2__["FileType"].Unknown;
            this.buffer = monaco.editor.createModel("");
        }
        else {
            this.bufferType = type;
            this.buffer = monaco.editor.createModel(this.data, Object(_types__WEBPACK_IMPORTED_MODULE_2__["languageForFileType"])(type));
        }
        this.buffer.updateOptions({ tabSize: 2, insertSpaces: true });
        this.buffer.onDidChangeContent((e) => {
            // isFlush is only true for buffer.setValue() calls and the isDirty logic is handled at those
            // call sites, here we only care for user edits.
            if (e.isFlush) {
                return;
            }
            if (!this.isDirty) {
                this.isDirty = true;
                this.notifyDidChangeDirty();
            }
            this.notifyDidChangeBuffer();
            monaco.editor.setModelMarkers(this.buffer, "compiler", []);
        });
        this.parent = null;
    }
    setNameAndDescription(name, description) {
        this.name = name;
        this.description = description;
        if (this.parent) {
            this.parent.notifyDidChangeChildren(this);
        }
    }
    notifyDidChangeBuffer() {
        let file = this;
        while (file) {
            file.onDidChangeBuffer.dispatch();
            file = file.parent;
        }
    }
    notifyDidChangeData() {
        let file = this;
        while (file) {
            file.onDidChangeData.dispatch();
            file = file.parent;
        }
    }
    notifyDidChangeDirty() {
        let file = this;
        while (file) {
            file.onDidChangeDirty.dispatch();
            file = file.parent;
        }
    }
    resetDirty() {
        if (this.isDirty) {
            this.isDirty = false;
            this.notifyDidChangeDirty();
        }
    }
    async updateBuffer(status) {
        if (this.type === _types__WEBPACK_IMPORTED_MODULE_2__["FileType"].Wasm) {
            const result = await _service__WEBPACK_IMPORTED_MODULE_1__["Service"].disassembleWasm(this.data, status);
            this.buffer.setValue(result);
            this.resetDirty();
            this.bufferType = _types__WEBPACK_IMPORTED_MODULE_2__["FileType"].Wat;
            this.notifyDidChangeBuffer();
            monaco.editor.setModelLanguage(this.buffer, Object(_types__WEBPACK_IMPORTED_MODULE_2__["languageForFileType"])(_types__WEBPACK_IMPORTED_MODULE_2__["FileType"].Wat));
            this.description = "This .wasm file is editable as a .wat file, and is automatically reassembled to .wasm when saved.";
            return;
        }
        else {
            this.buffer.setValue(this.data);
            this.resetDirty();
            this.notifyDidChangeBuffer();
        }
    }
    setProblems(problems) {
        this.problems = problems;
        let file = this;
        while (file) {
            file.onDidChangeProblems.dispatch();
            file = file.parent;
        }
    }
    async getEmitOutput() {
        const model = this.buffer;
        if (this.type !== _types__WEBPACK_IMPORTED_MODULE_2__["FileType"].TypeScript) {
            return Promise.resolve("");
        }
        const worker = await monaco.languages.typescript.getTypeScriptWorker();
        const client = await worker(model.uri);
        return client.getEmitOutput(model.uri.toString());
    }
    setData(data, status) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["assert"])(data != null);
        this.data = data;
        this.notifyDidChangeData();
        this.updateBuffer(status);
    }
    getData() {
        if (this.isDirty && !this.isBufferReadOnly) {
            const project = this.getProject();
            if (project) {
                project.onDirtyFileUsed.dispatch(this);
            }
        }
        return this.data;
    }
    getProject() {
        let parent = this.parent;
        if (parent) {
            while (parent.parent) {
                parent = parent.parent;
            }
            if (parent instanceof _Project__WEBPACK_IMPORTED_MODULE_4__["Project"]) {
                return parent;
            }
        }
        return null;
    }
    getDepth() {
        let depth = 0;
        let parent = this.parent;
        while (parent) {
            parent = parent.parent;
            depth++;
        }
        return depth;
    }
    /**
     * Gets the path up to the base, if specified.
     */
    getPath(base = null) {
        const path = [];
        let parent = this.parent;
        while (parent && parent !== base) {
            path.unshift(parent.name);
            parent = parent.parent;
        }
        path.push(this.name);
        return path.join("/");
    }
    async save(status) {
        if (!this.isDirty) {
            return;
        }
        if (this.bufferType !== this.type) {
            if (this.bufferType === _types__WEBPACK_IMPORTED_MODULE_2__["FileType"].Wat && this.type === _types__WEBPACK_IMPORTED_MODULE_2__["FileType"].Wasm) {
                try {
                    const data = await _service__WEBPACK_IMPORTED_MODULE_1__["Service"].assembleWat(this.buffer.getValue(), status);
                    this.resetDirty();
                    this.data = data;
                }
                catch (e) {
                    status.logLn(e.message, "error");
                }
            }
        }
        else {
            this.data = this.buffer.getValue();
            this.resetDirty();
        }
        this.notifyDidChangeData();
    }
    toString() {
        return "File [" + this.name + "]";
    }
    isDescendantOf(element) {
        let parent = this.parent;
        while (parent) {
            if (parent === element) {
                return true;
            }
            parent = parent.parent;
        }
        return false;
    }
}


/***/ }),

/***/ "./src/models/ModelRef.ts":
/*!********************************!*\
  !*** ./src/models/ModelRef.ts ***!
  \********************************/
/*! exports provided: ModelRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelRef", function() { return ModelRef; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const modelRefMap = new WeakMap();
class ModelRef {
    constructor(obj) {
        this.obj = obj;
    }
    getModel() {
        return this.obj;
    }
    static getRef(obj) {
        if (modelRefMap.has(obj)) {
            return modelRefMap.get(obj);
        }
        const ref = new ModelRef(obj);
        modelRefMap.set(obj, ref);
        return ref;
    }
}


/***/ }),

/***/ "./src/models/Problem.ts":
/*!*******************************!*\
  !*** ./src/models/Problem.ts ***!
  \*******************************/
/*! exports provided: monacoSeverityToString, Problem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monacoSeverityToString", function() { return monacoSeverityToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Problem", function() { return Problem; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

function monacoSeverityToString(severity) {
    switch (severity) {
        case monaco.MarkerSeverity.Info: return "info";
        case monaco.MarkerSeverity.Warning: return "warning";
        case monaco.MarkerSeverity.Error: return "error";
    }
}
class Problem {
    constructor(file, description, severity, marker) {
        this.file = file;
        this.description = description;
        this.severity = severity;
        this.marker = marker;
        this.key = String(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getNextKey"])());
    }
    static fromMarker(file, marker) {
        return new Problem(file, `${marker.message} (${marker.startLineNumber}, ${marker.startColumn})`, monacoSeverityToString(marker.severity), marker);
    }
}


/***/ }),

/***/ "./src/models/Project.ts":
/*!*******************************!*\
  !*** ./src/models/Project.ts ***!
  \*******************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDispatcher */ "./src/models/EventDispatcher.ts");
/* harmony import */ var _Directory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Directory */ "./src/models/Directory.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



class Project extends _Directory__WEBPACK_IMPORTED_MODULE_2__["Directory"] {
    constructor() {
        super("Project");
        this.onDidChangeStatus = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]("Status Change");
        this.onChange = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]("Project Change");
        this.onDirtyFileUsed = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]("Dirty File Used");
        this.status = ["Idle"];
    }
    hasStatus() {
        return this.status.length > 1;
    }
    getStatus() {
        if (this.hasStatus()) {
            return this.status[this.status.length - 1];
        }
        return "";
    }
    pushStatus(status) {
        this.status.push(status);
        this.onDidChangeStatus.dispatch();
    }
    popStatus() {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["assert"])(this.status.length);
        this.status.pop();
        this.onDidChangeStatus.dispatch();
    }
}


/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: FileType, isBinaryFileType, languageForFileType, nameForFileType, extensionForFileType, fileTypeFromFileName, fileTypeForExtension, mimeTypeForFileType, fileTypeForMimeType, getIconForFileType, Problem, Project, EventDispatcher, ModelRef, Directory, File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/models/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["FileType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBinaryFileType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["isBinaryFileType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "languageForFileType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["languageForFileType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nameForFileType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["nameForFileType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extensionForFileType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["extensionForFileType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fileTypeFromFileName", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["fileTypeFromFileName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fileTypeForExtension", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["fileTypeForExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimeTypeForFileType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["mimeTypeForFileType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fileTypeForMimeType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["fileTypeForMimeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconForFileType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["getIconForFileType"]; });

/* harmony import */ var _Problem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Problem */ "./src/models/Problem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Problem", function() { return _Problem__WEBPACK_IMPORTED_MODULE_1__["Problem"]; });

/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/models/Project.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _Project__WEBPACK_IMPORTED_MODULE_2__["Project"]; });

/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventDispatcher */ "./src/models/EventDispatcher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["EventDispatcher"]; });

/* harmony import */ var _ModelRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModelRef */ "./src/models/ModelRef.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelRef", function() { return _ModelRef__WEBPACK_IMPORTED_MODULE_4__["ModelRef"]; });

/* harmony import */ var _Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Directory */ "./src/models/Directory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return _Directory__WEBPACK_IMPORTED_MODULE_5__["Directory"]; });

/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./File */ "./src/models/File.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _File__WEBPACK_IMPORTED_MODULE_6__["File"]; });

/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */









/***/ }),

/***/ "./src/models/types.ts":
/*!*****************************!*\
  !*** ./src/models/types.ts ***!
  \*****************************/
/*! exports provided: FileType, isBinaryFileType, languageForFileType, nameForFileType, extensionForFileType, fileTypeFromFileName, fileTypeForExtension, mimeTypeForFileType, fileTypeForMimeType, getIconForFileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return FileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBinaryFileType", function() { return isBinaryFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageForFileType", function() { return languageForFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameForFileType", function() { return nameForFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionForFileType", function() { return extensionForFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileTypeFromFileName", function() { return fileTypeFromFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileTypeForExtension", function() { return fileTypeForExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeTypeForFileType", function() { return mimeTypeForFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileTypeForMimeType", function() { return fileTypeForMimeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconForFileType", function() { return getIconForFileType; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var FileType;
(function (FileType) {
    FileType["JavaScript"] = "javascript";
    FileType["TypeScript"] = "typescript";
    FileType["HTML"] = "html";
    FileType["CSS"] = "css";
    FileType["C"] = "c";
    FileType["Cpp"] = "cpp";
    FileType["Rust"] = "rust";
    FileType["Wat"] = "wat";
    FileType["Wasm"] = "wasm";
    FileType["Directory"] = "directory";
    FileType["Log"] = "log";
    FileType["x86"] = "x86";
    FileType["Markdown"] = "markdown";
    FileType["Cretonne"] = "cretonne";
    FileType["JSON"] = "json";
    FileType["DOT"] = "dot";
    FileType["TOML"] = "toml";
    FileType["Unknown"] = "unknown";
})(FileType || (FileType = {}));
function isBinaryFileType(type) {
    switch (type) {
        case FileType.Wasm:
            return true;
        default:
            return false;
    }
}
function languageForFileType(type) {
    if (type === FileType.HTML) {
        return "html";
    }
    else if (type === FileType.CSS) {
        return "css";
    }
    else if (type === FileType.JavaScript) {
        return "javascript";
    }
    else if (type === FileType.TypeScript) {
        return "typescript";
    }
    else if (type === FileType.C || type === FileType.Cpp) {
        return "cpp";
    }
    else if (type === FileType.Rust) {
        return "rust";
    }
    else if (type === FileType.Wat || type === FileType.Wasm) {
        return "wat";
    }
    else if (type === FileType.Log) {
        return "log";
    }
    else if (type === FileType.x86) {
        return "x86";
    }
    else if (type === FileType.Markdown) {
        return "markdown";
    }
    else if (type === FileType.Cretonne) {
        return "cton";
    }
    else if (type === FileType.JSON) {
        return "json";
    }
    else if (type === FileType.DOT) {
        return "dot";
    }
    else if (type === FileType.TOML) {
        return "toml";
    }
    return "";
}
function nameForFileType(type) {
    if (type === FileType.HTML) {
        return "HTML";
    }
    else if (type === FileType.CSS) {
        return "CSS";
    }
    else if (type === FileType.JavaScript) {
        return "JavaScript";
    }
    else if (type === FileType.TypeScript) {
        return "TypeScript";
    }
    else if (type === FileType.C) {
        return "C";
    }
    else if (type === FileType.Cpp) {
        return "C++";
    }
    else if (type === FileType.Wat) {
        return "WebAssembly Text";
    }
    else if (type === FileType.Wasm) {
        return "WebAssembly";
    }
    else if (type === FileType.Markdown) {
        return "Markdown";
    }
    else if (type === FileType.Rust) {
        return "Rust";
    }
    else if (type === FileType.Cretonne) {
        return "Cretonne";
    }
    else if (type === FileType.JSON) {
        return "JSON";
    }
    else if (type === FileType.DOT) {
        return "DOT";
    }
    else if (type === FileType.TOML) {
        return "TOML";
    }
    return "";
}
function extensionForFileType(type) {
    if (type === FileType.HTML) {
        return "html";
    }
    else if (type === FileType.CSS) {
        return "css";
    }
    else if (type === FileType.JavaScript) {
        return "js";
    }
    else if (type === FileType.TypeScript) {
        return "ts";
    }
    else if (type === FileType.C) {
        return "c";
    }
    else if (type === FileType.Cpp) {
        return "cpp";
    }
    else if (type === FileType.Wat) {
        return "wat";
    }
    else if (type === FileType.Wasm) {
        return "wasm";
    }
    else if (type === FileType.Markdown) {
        return "md";
    }
    else if (type === FileType.Rust) {
        return "rs";
    }
    else if (type === FileType.Cretonne) {
        return "cton";
    }
    else if (type === FileType.JSON) {
        return "json";
    }
    else if (type === FileType.DOT) {
        return "dot";
    }
    else if (type === FileType.TOML) {
        return "toml";
    }
    return "";
}
function fileTypeFromFileName(name) {
    return fileTypeForExtension(name.split(".").pop());
}
function fileTypeForExtension(extension) {
    if (extension === "html") {
        return FileType.HTML;
    }
    else if (extension === "css") {
        return FileType.CSS;
    }
    else if (extension === "js") {
        return FileType.JavaScript;
    }
    else if (extension === "ts") {
        return FileType.TypeScript;
    }
    else if (extension === "c") {
        return FileType.C;
    }
    else if (extension === "cpp") {
        return FileType.Cpp;
    }
    else if (extension === "wat") {
        return FileType.Wat;
    }
    else if (extension === "wasm") {
        return FileType.Wasm;
    }
    else if (extension === "md") {
        return FileType.Markdown;
    }
    else if (extension === "rs") {
        return FileType.Rust;
    }
    else if (extension === "cton") {
        return FileType.Cretonne;
    }
    else if (extension === "json" || extension === "map") {
        return FileType.JSON;
    }
    else if (extension === "dot") {
        return FileType.DOT;
    }
    else if (extension === "toml") {
        return FileType.TOML;
    }
    return null;
}
function mimeTypeForFileType(type) {
    if (type === FileType.HTML) {
        return "text/html";
    }
    else if (type === FileType.JavaScript) {
        return "application/javascript";
    }
    else if (type === FileType.Wasm) {
        return "application/wasm";
    }
    else if (type === FileType.JSON) {
        return "application/json";
    }
    else if (type === FileType.DOT) {
        return "text/plain";
    }
    else if (type === FileType.Markdown) {
        return "text/markdown";
    }
    return "";
}
function fileTypeForMimeType(type) {
    if (type === "text/html") {
        return FileType.HTML;
    }
    else if (type === "application/javascript") {
        return FileType.JavaScript;
    }
    else if (type === "application/wasm") {
        return FileType.Wasm;
    }
    else if (type === "text/markdown") {
        return FileType.Markdown;
    }
    else if (type === "application/json") {
        return FileType.JSON;
    }
    return FileType.Unknown;
}
function getIconForFileType(fileType) {
    if (fileType === FileType.JavaScript) {
        return "javascript-lang-file-icon";
    }
    else if (fileType === FileType.TypeScript) {
        return "typescript-lang-file-icon";
    }
    else if (fileType === FileType.C) {
        return "c-lang-file-icon";
    }
    else if (fileType === FileType.Cpp) {
        return "cpp-lang-file-icon";
    }
    else if (fileType === FileType.Rust) {
        return "rust-lang-file-icon";
    }
    else if (fileType === FileType.Markdown) {
        return "markdown-lang-file-icon";
    }
    else if (fileType === FileType.HTML) {
        return "html-lang-file-icon";
    }
    else if (fileType === FileType.CSS) {
        return "css-lang-file-icon";
    }
    else if (fileType === FileType.Directory) {
        return "folder-icon";
    }
    else if (fileType === FileType.JSON) {
        return "json-lang-file-icon";
    }
    else if (fileType === FileType.Wasm) {
        return "wasm-lang-file-icon";
    }
    else if (fileType === FileType.Wat) {
        return "wat-lang-file-icon";
    }
    return "txt-ext-file-icon";
}


/***/ }),

/***/ "./src/monaco-controller.ts":
/*!**********************************!*\
  !*** ./src/monaco-controller.ts ***!
  \**********************************/
/*! exports provided: getController, createController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getController", function() { return getController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createController", function() { return createController; });
/* harmony import */ var _monaco_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monaco-utils */ "./src/monaco-utils.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

function getController(target, getActionsFn, resolveMenuHeight) {
    return class Controller extends _monaco_utils__WEBPACK_IMPORTED_MODULE_0__["MonacoUtils"].TreeDefaults.DefaultController {
        onContextMenu(tree, file, event) {
            tree.setFocus(file);
            const anchorOffset = { x: -10, y: -3 };
            const anchor = { x: event._posx + anchorOffset.x, y: event._posy + anchorOffset.y };
            const actions = getActionsFn && getActionsFn(file, event);
            if (!actions || !actions.length) {
                return false;
            }
            target.contextMenuService.showContextMenu({
                getAnchor: () => anchor,
                getActions: () => monaco.Promise.as(actions || []),
                getActionItem: (action) => null,
                onHide: (wasCancelled) => {
                    if (wasCancelled) {
                        tree.domFocus();
                    }
                }
            });
            super.onContextMenu(tree, file, event);
            if (resolveMenuHeight) {
                this.resolveMenuHeight(event);
            }
            return true;
        }
        resolveMenuHeight(event) {
            // Set the context menus max height to avoid overflow outside window
            const menu = document.querySelector(".context-view.monaco-menu-container");
            const windowPadding = 10;
            menu.style.maxHeight = Math.min(window.innerHeight - event._posy - windowPadding, 380) + "px";
        }
    };
}
function createController(target, getActionsFn, resolveMenuHeight) {
    const Controller = getController(target, getActionsFn, resolveMenuHeight);
    return new Controller();
}


/***/ }),

/***/ "./src/monaco-dnd.ts":
/*!***************************!*\
  !*** ./src/monaco-dnd.ts ***!
  \***************************/
/*! exports provided: DragAndDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDrop", function() { return DragAndDrop; });
/* harmony import */ var _monaco_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monaco-extra */ "./src/monaco-extra.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



class DragAndDrop {
    constructor(target) {
        this.target = target;
    }
    /**
     * Returns a uri if the given element should be allowed to drag.
     * Returns null, otherwise.
     */
    getDragURI(tree, element) {
        return element.key;
    }
    /**
     * Returns a label to display when dragging the element.
     */
    getDragLabel(tree, elements) {
        return elements[0].name;
    }
    /**
     * Sent when the drag operation is starting.
     */
    onDragStart(tree, data, originalEvent) {
        return;
    }
    /**
     * Returns a DragOverReaction indicating whether sources can be
     * dropped into target or some parent of the target.
     */
    onDragOver(tree, data, targetElement, originalEvent) {
        // File being dragged into the browser
        if (!data.elements) {
            const items = Array.from(originalEvent.browserEvent.dataTransfer.items);
            // In Firefox, tree elements get data transfer items with the "text/uri-list" type. This is a
            // workaround to ignore that behavior.
            const hasItemsUriListType = items.some(item => item.type === "text/uri-list");
            if (items.length && !hasItemsUriListType) {
                return {
                    accept: items.every(item => Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUploadAllowedForMimeType"])(item.type)),
                    bubble: _monaco_extra__WEBPACK_IMPORTED_MODULE_0__["DragOverBubble"].BUBBLE_DOWN,
                    autoExpand: true
                };
            }
        }
        // Regular drag
        const file = data.elements[0];
        return {
            accept: targetElement instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Directory"] &&
                targetElement !== file &&
                !targetElement.isDescendantOf(file),
            bubble: _monaco_extra__WEBPACK_IMPORTED_MODULE_0__["DragOverBubble"].BUBBLE_DOWN,
            autoExpand: true
        };
    }
    /**
     * Handles the action of dropping sources into target.
     */
    async drop(tree, data, targetElement, originalEvent) {
        const items = originalEvent.browserEvent.dataTransfer.items;
        if (!data.elements && items.length) {
            await Object(_util__WEBPACK_IMPORTED_MODULE_2__["uploadFilesToDirectory"])(items, targetElement);
            return;
        }
        const file = data.elements[0];
        return this.target.props.onMoveFile && this.target.props.onMoveFile(file, targetElement);
    }
}


/***/ }),

/***/ "./src/monaco-extra.ts":
/*!*****************************!*\
  !*** ./src/monaco-extra.ts ***!
  \*****************************/
/*! exports provided: ContextMenuEvent, MouseContextMenuEvent, KeyboardContextMenuEvent, DragOverEffect, DragOverBubble, DRAG_OVER_REJECT, DRAG_OVER_ACCEPT, DRAG_OVER_ACCEPT_BUBBLE_UP, DRAG_OVER_ACCEPT_BUBBLE_DOWN, DRAG_OVER_ACCEPT_BUBBLE_UP_COPY, DRAG_OVER_ACCEPT_BUBBLE_DOWN_COPY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuEvent", function() { return ContextMenuEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseContextMenuEvent", function() { return MouseContextMenuEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardContextMenuEvent", function() { return KeyboardContextMenuEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragOverEffect", function() { return DragOverEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragOverBubble", function() { return DragOverBubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_OVER_REJECT", function() { return DRAG_OVER_REJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_OVER_ACCEPT", function() { return DRAG_OVER_ACCEPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_OVER_ACCEPT_BUBBLE_UP", function() { return DRAG_OVER_ACCEPT_BUBBLE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_OVER_ACCEPT_BUBBLE_DOWN", function() { return DRAG_OVER_ACCEPT_BUBBLE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_OVER_ACCEPT_BUBBLE_UP_COPY", function() { return DRAG_OVER_ACCEPT_BUBBLE_UP_COPY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_OVER_ACCEPT_BUBBLE_DOWN_COPY", function() { return DRAG_OVER_ACCEPT_BUBBLE_DOWN_COPY; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class ContextMenuEvent {
    constructor(posx, posy, target) {
        this._posx = posx;
        this._posy = posy;
        this._target = target;
    }
    preventDefault() {
        // no-op
    }
    stopPropagation() {
        // no-op
    }
    get target() {
        return this._target;
    }
}
class MouseContextMenuEvent extends ContextMenuEvent {
    constructor(originalEvent) {
        super(originalEvent.posx, originalEvent.posy, originalEvent.target);
        this.originalEvent = originalEvent;
    }
    preventDefault() {
        this.originalEvent.preventDefault();
    }
    stopPropagation() {
        this.originalEvent.stopPropagation();
    }
}
class KeyboardContextMenuEvent extends ContextMenuEvent {
    constructor(posx, posy, originalEvent) {
        super(posx, posy, originalEvent.target);
        this.originalEvent = originalEvent;
    }
    preventDefault() {
        this.originalEvent.preventDefault();
    }
    stopPropagation() {
        this.originalEvent.stopPropagation();
    }
}
var DragOverEffect;
(function (DragOverEffect) {
    DragOverEffect[DragOverEffect["COPY"] = 0] = "COPY";
    DragOverEffect[DragOverEffect["MOVE"] = 1] = "MOVE";
})(DragOverEffect || (DragOverEffect = {}));
var DragOverBubble;
(function (DragOverBubble) {
    DragOverBubble[DragOverBubble["BUBBLE_DOWN"] = 0] = "BUBBLE_DOWN";
    DragOverBubble[DragOverBubble["BUBBLE_UP"] = 1] = "BUBBLE_UP";
})(DragOverBubble || (DragOverBubble = {}));
const DRAG_OVER_REJECT = { accept: false };
const DRAG_OVER_ACCEPT = { accept: true };
const DRAG_OVER_ACCEPT_BUBBLE_UP = { accept: true, bubble: DragOverBubble.BUBBLE_UP };
const DRAG_OVER_ACCEPT_BUBBLE_DOWN = (autoExpand = false) => ({ accept: true, bubble: DragOverBubble.BUBBLE_DOWN, autoExpand });
const DRAG_OVER_ACCEPT_BUBBLE_UP_COPY = { accept: true, bubble: DragOverBubble.BUBBLE_UP, effect: DragOverEffect.COPY };
const DRAG_OVER_ACCEPT_BUBBLE_DOWN_COPY = (autoExpand = false) => ({ accept: true, bubble: DragOverBubble.BUBBLE_DOWN, effect: DragOverEffect.COPY, autoExpand });


/***/ }),

/***/ "./src/monaco-utils.ts":
/*!*****************************!*\
  !*** ./src/monaco-utils.ts ***!
  \*****************************/
/*! exports provided: MonacoUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonacoUtils", function() { return MonacoUtils; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// Utils provided by monaco editor, but exposed only via AMD require().
// See index.tsx for initialization.
class MonacoUtils {
    static async initialize() {
        // Dynamic import of monaco-editor (will be globally accessible)
        await __webpack_require__.e(/*! import() | monaco-editor */ "monaco-editor").then(__webpack_require__.t.bind(null, /*! monaco-editor */ "./include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.main.js", 7));
        // @ts-ignore
        const { Action } = await __webpack_require__.e(/*! import() | monaco-editor */ "monaco-editor").then(__webpack_require__.bind(null, /*! monaco-editor/esm/vs/base/common/actions */ "./node_modules/monaco-editor/esm/vs/base/common/actions.js"));
        // @ts-ignore
        const { ContextSubMenu } = await __webpack_require__.e(/*! import() | monaco-editor */ "monaco-editor").then(__webpack_require__.bind(null, /*! monaco-editor/esm/vs/base/browser/contextmenu */ "./node_modules/monaco-editor/esm/vs/base/browser/contextmenu.js"));
        // @ts-ignore
        const { ContextMenuService } = await __webpack_require__.e(/*! import() | monaco-editor */ "monaco-editor").then(__webpack_require__.bind(null, /*! monaco-editor/esm/vs/platform/contextview/browser/contextMenuService */ "./node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuService.js"));
        // @ts-ignore
        const { ContextViewService } = await __webpack_require__.e(/*! import() | monaco-editor */ "monaco-editor").then(__webpack_require__.bind(null, /*! monaco-editor/esm/vs/platform/contextview/browser/contextViewService */ "./node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextViewService.js"));
        // @ts-ignore
        const { Tree } = await __webpack_require__.e(/*! import() | monaco-editor */ "monaco-editor").then(__webpack_require__.bind(null, /*! monaco-editor/esm/vs/base/parts/tree/browser/treeImpl */ "./node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeImpl.js"));
        // @ts-ignore
        const TreeDefaults = await __webpack_require__.e(/*! import() | monaco-editor */ "monaco-editor").then(__webpack_require__.bind(null, /*! monaco-editor/esm/vs/base/parts/tree/browser/treeDefaults */ "./node_modules/monaco-editor/esm/vs/base/parts/tree/browser/treeDefaults.js"));
        MonacoUtils.Action = Action;
        MonacoUtils.ContextSubMenu = ContextSubMenu;
        MonacoUtils.ContextMenuService = ContextMenuService;
        MonacoUtils.ContextViewService = ContextViewService;
        MonacoUtils.Tree = Tree;
        MonacoUtils.TreeDefaults = TreeDefaults;
    }
    static expandTree(tree) {
        const model = tree.model;
        const elements = [];
        let item;
        const nav = model.getNavigator();
        while (item = nav.next()) {
            elements.push(item);
        }
        for (let i = 0, len = elements.length; i < len; i++) {
            model.expand(elements[i]);
        }
    }
}


/***/ }),

/***/ "./src/service.ts":
/*!************************!*\
  !*** ./src/service.ts ***!
  \************************/
/*! exports provided: Language, ServiceWorker, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorker", function() { return ServiceWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _utils_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/ga */ "./src/utils/ga.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./src/message.ts");
/* harmony import */ var _utils_rewriteSources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/rewriteSources */ "./src/utils/rewriteSources.ts");
/* harmony import */ var _utils_taskRunner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/taskRunner */ "./src/utils/taskRunner.ts");
/* harmony import */ var _compilerServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compilerServices */ "./src/compilerServices/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return _compilerServices__WEBPACK_IMPORTED_MODULE_6__["Language"]; });

/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */









function getProjectFilePath(file) {
    const project = file.getProject();
    return file.getPath(project);
}
class ServiceWorker {
    constructor() {
        this.workerCallbacks = [];
        this.nextId = 0;
        this.worker = new Worker("dist/worker.bundle.js");
        this.worker.addEventListener("message", (e) => {
            if (!e.data.id) {
                return;
            }
            const cb = this.workerCallbacks[e.data.id];
            if (e.data.success) {
                cb.fn(e.data.payload);
            }
            else {
                const error = Object.assign(Object.create(Error.prototype), e.data.payload);
                cb.ex(error);
            }
            this.workerCallbacks[e.data.id] = null;
        });
    }
    getNextId() {
        return String(this.nextId++);
    }
    setWorkerCallback(id, fn, ex) {
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["assert"])(!this.workerCallbacks[id]);
        this.workerCallbacks[id] = { fn, ex };
    }
    async postMessage(command, payload) {
        return new Promise((resolve, reject) => {
            const id = this.getNextId();
            this.setWorkerCallback(id, (data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
            this.worker.postMessage({
                id, command, payload
            }, undefined);
        });
    }
    async optimizeWasmWithBinaryen(data) {
        return await this.postMessage(_message__WEBPACK_IMPORTED_MODULE_3__["WorkerCommand"].OptimizeWasmWithBinaryen, data);
    }
    async validateWasmWithBinaryen(data) {
        return await this.postMessage(_message__WEBPACK_IMPORTED_MODULE_3__["WorkerCommand"].ValidateWasmWithBinaryen, data);
    }
    async createWasmCallGraphWithBinaryen(data) {
        return await this.postMessage(_message__WEBPACK_IMPORTED_MODULE_3__["WorkerCommand"].CreateWasmCallGraphWithBinaryen, data);
    }
    async convertWasmToAsmWithBinaryen(data) {
        return await this.postMessage(_message__WEBPACK_IMPORTED_MODULE_3__["WorkerCommand"].ConvertWasmToAsmWithBinaryen, data);
    }
    async disassembleWasmWithBinaryen(data) {
        return await this.postMessage(_message__WEBPACK_IMPORTED_MODULE_3__["WorkerCommand"].DisassembleWasmWithBinaryen, data);
    }
    async assembleWatWithBinaryen(data) {
        return await this.postMessage(_message__WEBPACK_IMPORTED_MODULE_3__["WorkerCommand"].AssembleWatWithBinaryen, data);
    }
    async disassembleWasmWithWabt(data) {
        return await this.postMessage(_message__WEBPACK_IMPORTED_MODULE_3__["WorkerCommand"].DisassembleWasmWithWabt, data);
    }
    async assembleWatWithWabt(data) {
        return await this.postMessage(_message__WEBPACK_IMPORTED_MODULE_3__["WorkerCommand"].AssembleWatWithWabt, data);
    }
    async twiggyWasm(data) {
        return await this.postMessage(_message__WEBPACK_IMPORTED_MODULE_3__["WorkerCommand"].TwiggyWasm, data);
    }
}
class Service {
    static getMarkers(response) {
        // Parse and annotate errors if compilation fails.
        const annotations = [];
        if (response.indexOf("(module") !== 0) {
            const re1 = /^.*?:(\d+?):(\d+?):\s(.*)$/gm;
            let m;
            // Single position.
            while ((m = re1.exec(response)) !== null) {
                if (m.index === re1.lastIndex) {
                    re1.lastIndex++;
                }
                const startLineNumber = parseInt(m[1], 10);
                const startColumn = parseInt(m[2], 10);
                const message = m[3];
                let severity = monaco.MarkerSeverity.Info;
                if (message.indexOf("error") >= 0) {
                    severity = monaco.MarkerSeverity.Error;
                }
                else if (message.indexOf("warning") >= 0) {
                    severity = monaco.MarkerSeverity.Warning;
                }
                annotations.push({
                    severity, message,
                    startLineNumber: startLineNumber,
                    startColumn: startColumn,
                    endLineNumber: startLineNumber, endColumn: startColumn
                });
            }
            // Range. This is generated via the -diagnostics-print-source-range-info
            // clang flag.
            const re2 = /^.*?:\d+?:\d+?:\{(\d+?):(\d+?)-(\d+?):(\d+?)\}:\s(.*)$/gm;
            while ((m = re2.exec(response)) !== null) {
                if (m.index === re2.lastIndex) {
                    re2.lastIndex++;
                }
                const message = m[5];
                let severity = monaco.MarkerSeverity.Info;
                if (message.indexOf("error") >= 0) {
                    severity = monaco.MarkerSeverity.Error;
                }
                else if (message.indexOf("warning") >= 0) {
                    severity = monaco.MarkerSeverity.Warning;
                }
                annotations.push({
                    severity, message,
                    startLineNumber: parseInt(m[1], 10), startColumn: parseInt(m[2], 10),
                    endLineNumber: parseInt(m[3], 10), endColumn: parseInt(m[4], 10)
                });
            }
        }
        return annotations;
    }
    static async compileFiles(files, from, to, options = "") {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("compile", "Service", `${from}->${to}`);
        const service = await Object(_compilerServices__WEBPACK_IMPORTED_MODULE_6__["createCompilerService"])(from, to);
        const fileNameMap = files.reduce((acc, f) => {
            acc[getProjectFilePath(f)] = f;
            return acc;
        }, {});
        const input = {
            files: files.reduce((acc, f) => {
                acc[getProjectFilePath(f)] = {
                    content: f.getData(),
                };
                return acc;
            }, {}),
            options,
        };
        const result = await service.compile(input);
        for (const file of files) {
            file.setProblems([]);
        }
        for (const [name, item] of Object.entries(result.items)) {
            const { fileRef, console } = item;
            if (!fileRef || !console) {
                continue;
            }
            const file = fileNameMap[fileRef];
            if (!file) {
                continue;
            }
            const markers = Service.getMarkers(console);
            if (markers.length > 0) {
                monaco.editor.setModelMarkers(file.buffer, "compiler", markers);
                file.setProblems(markers.map(marker => {
                    return _models__WEBPACK_IMPORTED_MODULE_0__["Problem"].fromMarker(file, marker);
                }));
            }
        }
        if (!result.success) {
            throw new Error(result.console);
        }
        const outputFiles = {};
        for (const [name, item] of Object.entries(result.items)) {
            const { content } = item;
            if (content) {
                outputFiles[name] = content;
            }
        }
        return outputFiles;
    }
    static async compileFile(file, from, to, options = "") {
        const result = await Service.compileFileWithBindings(file, from, to, options);
        return result.wasm;
    }
    static async compileFileWithBindings(file, from, to, options = "") {
        if (to !== _compilerServices__WEBPACK_IMPORTED_MODULE_6__["Language"].Wasm) {
            throw new Error(`Only wasm target is supported, but "${to}" was found`);
        }
        const result = await Service.compileFiles([file], from, to, options);
        const expectedOutputFilename = "a.wasm";
        let output = {
            wasm: result[expectedOutputFilename],
        };
        const expectedWasmBindgenJsFilename = "wasm_bindgen.js";
        if (result[expectedWasmBindgenJsFilename]) {
            output = {
                ...output,
                wasmBindgenJs: result[expectedWasmBindgenJsFilename],
            };
        }
        return output;
    }
    static async disassembleWasm(buffer, status) {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("disassemble", "Service", "wabt");
        status && status.push("Disassembling with Wabt");
        const result = await this.worker.disassembleWasmWithWabt(buffer);
        status && status.pop();
        return result;
    }
    static async disassembleWasmWithWabt(file, status) {
        const result = await Service.disassembleWasm(file.getData(), status);
        const output = file.parent.newFile(file.name + ".wat", _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Wat);
        output.description = "Disassembled from " + file.name + " using Wabt.";
        output.setData(result);
    }
    static async assembleWat(wat, status) {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("assemble", "Service", "wabt");
        status && status.push("Assembling Wat with Wabt");
        let result = null;
        try {
            result = await this.worker.assembleWatWithWabt(wat);
        }
        catch (e) {
            throw e;
        }
        finally {
            status && status.pop();
        }
        return result;
    }
    static async assembleWatWithWabt(file, status) {
        const result = await Service.assembleWat(file.getData(), status);
        const output = file.parent.newFile(file.name + ".wasm", _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Wasm);
        output.description = "Assembled from " + file.name + " using Wabt.";
        output.setData(result);
    }
    static async createGist(json) {
        const url = "https://api.github.com/gists";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(json),
            headers: new Headers({ "Content-type": "application/json; charset=utf-8" })
        });
        return JSON.parse(await response.text()).html_url;
    }
    static async loadJSON(uri) {
        const url = "https://webassembly-studio-fiddles.herokuapp.com/fiddle/" + uri;
        const response = await fetch(url, {
            headers: new Headers({ "Content-type": "application/json; charset=utf-8" })
        });
        return await response.json();
    }
    static async saveJSON(json, uri) {
        const update = !!uri;
        if (update) {
            throw new Error("NYI");
        }
        else {
            const response = await fetch("https://webassembly-studio-fiddles.herokuapp.com/set-fiddle", {
                method: "POST",
                headers: new Headers({ "Content-type": "application/json; charset=utf-8" }),
                body: JSON.stringify(json)
            });
            let jsonURI = (await response.json()).id;
            jsonURI = jsonURI.substring(jsonURI.lastIndexOf("/") + 1);
            return jsonURI;
        }
    }
    static parseFiddleURI() {
        let uri = window.location.search.substring(1);
        if (uri) {
            const i = uri.indexOf("/");
            if (i > 0) {
                uri = uri.substring(0, i);
            }
        }
        return uri;
    }
    static async exportToGist(content, uri) {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("export", "Service", "gist");
        const files = {};
        function serialize(file) {
            if (file instanceof _models__WEBPACK_IMPORTED_MODULE_0__["Directory"]) {
                file.mapEachFile((file) => serialize(file), true);
            }
            else {
                files[file.name] = { content: file.data };
            }
        }
        serialize(content);
        const json = { description: "source: https://webassembly.studio", public: true, files };
        if (uri !== undefined) {
            json["description"] = json["description"] + `/?f=${uri}`;
        }
        return await this.createGist(json);
    }
    static async saveProject(project, openedFiles, uri) {
        const files = [];
        project.forEachFile((f) => {
            let data;
            let type;
            if (Object(_models__WEBPACK_IMPORTED_MODULE_0__["isBinaryFileType"])(f.type)) {
                data = Object(_util__WEBPACK_IMPORTED_MODULE_1__["base64EncodeBytes"])(new Uint8Array(f.data));
                type = "binary";
            }
            else {
                data = f.data;
                type = "text";
            }
            const file = {
                name: f.getPath(project),
                data,
                type
            };
            files.push(file);
        }, true, true);
        return await this.saveJSON({
            files
        }, uri);
    }
    static async loadFilesIntoProject(files, project, base = null) {
        for (const f of files) {
            const type = Object(_models__WEBPACK_IMPORTED_MODULE_0__["fileTypeFromFileName"])(f.name);
            const file = project.newFile(f.name, type, false);
            let data;
            if (f.data) {
                if (f.type === "binary") {
                    data = Object(_util__WEBPACK_IMPORTED_MODULE_1__["decodeRestrictedBase64ToBytes"])(f.data).buffer;
                }
                else {
                    data = f.data;
                }
            }
            else {
                const request = await fetch(new URL(f.name, base).toString());
                if (f.type === "binary") {
                    data = await request.arrayBuffer();
                }
                else {
                    data = await request.text();
                }
            }
            file.setData(data);
        }
    }
    static lazyLoad(uri, status) {
        return new Promise((resolve, reject) => {
            status && status.push("Loading " + uri);
            const self = this;
            const d = window.document;
            const b = d.body;
            const e = d.createElement("script");
            e.async = true;
            e.src = uri;
            b.appendChild(e);
            e.onload = function () {
                status && status.pop();
                resolve(this);
            };
            // TODO: What about fail?
        });
    }
    static async optimizeWasmWithBinaryen(file, status) {
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["assert"])(this.worker);
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("optimize", "Service", "binaryen");
        let data = file.getData();
        status && status.push("Optimizing with Binaryen");
        data = await this.worker.optimizeWasmWithBinaryen(data);
        status && status.pop();
        file.setData(data);
        file.buffer.setValue(await Service.disassembleWasm(data, status));
    }
    static async validateWasmWithBinaryen(file, status) {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("validate", "Service", "binaryen");
        const data = file.getData();
        status && status.push("Validating with Binaryen");
        const result = await this.worker.validateWasmWithBinaryen(data);
        status && status.pop();
        return !!result;
    }
    static async getWasmCallGraphWithBinaryen(file, status) {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("call-graph", "Service", "binaryen");
        const data = file.getData();
        status && status.push("Creating Call Graph with Binaryen");
        const result = await this.worker.createWasmCallGraphWithBinaryen(data);
        status && status.pop();
        const output = file.parent.newFile(file.name + ".dot", _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].DOT);
        output.description = "Call graph created from " + file.name + " using Binaryen's print-call-graph pass.";
        output.setData(result);
    }
    static async disassembleWasmWithBinaryen(file, status) {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("disassemble", "Service", "binaryen");
        const data = file.getData();
        status && status.push("Disassembling with Binaryen");
        const result = await this.worker.disassembleWasmWithBinaryen(data);
        status && status.pop();
        const output = file.parent.newFile(file.name + ".wat", _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Wat);
        output.description = "Disassembled from " + file.name + " using Binaryen.";
        output.setData(result);
    }
    static async convertWasmToAsmWithBinaryen(file, status) {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("asm.js", "Service", "binaryen");
        const data = file.getData();
        status && status.push("Converting to asm.js with Binaryen");
        const result = await this.worker.convertWasmToAsmWithBinaryen(data);
        status && status.pop();
        const output = file.parent.newFile(file.name + ".asm.js", _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].JavaScript);
        output.description = "Converted from " + file.name + " using Binaryen.";
        output.setData(result);
    }
    static async assembleWatWithBinaryen(file, status) {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("assemble", "Service", "binaryen");
        const data = file.getData();
        status && status.push("Assembling with Binaryen");
        const result = await this.worker.assembleWatWithBinaryen(data);
        status && status.pop();
        const output = file.parent.newFile(file.name + ".wasm", _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Wasm);
        output.description = "Converted from " + file.name + " using Binaryen.";
        output.setData(result);
    }
    static download(file) {
        if (!Service.downloadLink) {
            Service.downloadLink = document.createElement("a");
            Service.downloadLink.style.display = "none";
            document.body.appendChild(Service.downloadLink);
        }
        const url = URL.createObjectURL(new Blob([file.getData()], { type: "application/octet-stream" }));
        Service.downloadLink.href = url;
        Service.downloadLink.download = file.name;
        if (Service.downloadLink.href !== document.location) {
            Service.downloadLink.click();
        }
    }
    // Kudos to https://github.com/tbfleming/cib
    static async clangFormat(file, status) {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("format", "Service", "clang-format");
        function format() {
            const result = Service.clangFormatModule.ccall("formatCode", "string", ["string"], [file.buffer.getValue()]);
            file.buffer.setValue(result);
        }
        if (Service.clangFormatModule) {
            format();
        }
        else {
            await Service.lazyLoad("lib/clang-format.js", status);
            const response = await fetch("lib/clang-format.wasm");
            const wasmBinary = await response.arrayBuffer();
            const module = {
                postRun() {
                    format();
                },
                wasmBinary
            };
            Service.clangFormatModule = Module(module);
        }
    }
    static async disassembleX86(file, status, options = "") {
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("disassemble", "Service", "capstone.x86");
        if (typeof capstone === "undefined") {
            await Service.lazyLoad("lib/capstone.x86.min.js", status);
        }
        const output = file.parent.newFile(file.name + ".x86", _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].x86);
        function toBytes(a) {
            return a.map(function (x) { return Object(_util__WEBPACK_IMPORTED_MODULE_1__["padLeft"])(Number(x).toString(16), 2, "0"); }).join(" ");
        }
        const service = await Object(_compilerServices__WEBPACK_IMPORTED_MODULE_6__["createCompilerService"])(_compilerServices__WEBPACK_IMPORTED_MODULE_6__["Language"].Wasm, _compilerServices__WEBPACK_IMPORTED_MODULE_6__["Language"].x86);
        const input = {
            files: {
                "in.wasm": {
                    content: file.getData(),
                },
            },
            options,
        };
        const result = await service.compile(input);
        const json = result.items["a.json"].content;
        let s = "";
        const cs = new capstone.Cs(capstone.ARCH_X86, capstone.MODE_64);
        const annotations = [];
        const assemblyInstructionsByAddress = Object.create(null);
        for (let i = 0; i < json.regions.length; i++) {
            const region = json.regions[i];
            s += region.name + ":\n";
            const csBuffer = Object(_util__WEBPACK_IMPORTED_MODULE_1__["decodeRestrictedBase64ToBytes"])(region.bytes);
            const instructions = cs.disasm(csBuffer, region.entry);
            const basicBlocks = {};
            instructions.forEach(function (instr, i) {
                assemblyInstructionsByAddress[instr.address] = instr;
                if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBranch"])(instr)) {
                    const targetAddress = parseInt(instr.op_str, 10);
                    if (!basicBlocks[targetAddress]) {
                        basicBlocks[targetAddress] = [];
                    }
                    basicBlocks[targetAddress].push(instr.address);
                    if (i + 1 < instructions.length) {
                        basicBlocks[instructions[i + 1].address] = [];
                    }
                }
            });
            instructions.forEach(function (instr) {
                if (basicBlocks[instr.address]) {
                    s += " " + Object(_util__WEBPACK_IMPORTED_MODULE_1__["padRight"])(Object(_util__WEBPACK_IMPORTED_MODULE_1__["toAddress"])(instr.address) + ":", 39, " ");
                    if (basicBlocks[instr.address].length > 0) {
                        s += "; " + Object(_util__WEBPACK_IMPORTED_MODULE_1__["toAddress"])(instr.address) + " from: [" + basicBlocks[instr.address].map(_util__WEBPACK_IMPORTED_MODULE_1__["toAddress"]).join(", ") + "]";
                    }
                    s += "\n";
                }
                s += "  " + Object(_util__WEBPACK_IMPORTED_MODULE_1__["padRight"])(instr.mnemonic + " " + instr.op_str, 38, " ");
                s += "; " + Object(_util__WEBPACK_IMPORTED_MODULE_1__["toAddress"])(instr.address) + " " + toBytes(instr.bytes) + "\n";
            });
            s += "\n";
        }
        output.setData(s);
    }
    static openBinaryExplorer(file) {
        window.open("//wasdk.github.io/wasmcodeexplorer/?api=postmessage", "", "toolbar=no,ocation=no,directories=no,status=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=1024,height=568");
        if (Service.binaryExplorerMessageListener) {
            window.removeEventListener("message", Service.binaryExplorerMessageListener, false);
        }
        Service.binaryExplorerMessageListener = (e) => {
            if (e.data.type === "wasmexplorer-ready") {
                window.removeEventListener("message", Service.binaryExplorerMessageListener, false);
                Service.binaryExplorerMessageListener = null;
                const dataToSend = new Uint8Array(file.data.slice(0));
                e.source.postMessage({
                    type: "wasmexplorer-load",
                    data: dataToSend
                }, "*", [dataToSend.buffer]);
            }
        };
        window.addEventListener("message", Service.binaryExplorerMessageListener, false);
    }
    static async import(path) {
        const { project, global } = Object(_utils_taskRunner__WEBPACK_IMPORTED_MODULE_5__["getCurrentRunnerInfo"])();
        const context = new _utils_rewriteSources__WEBPACK_IMPORTED_MODULE_4__["RewriteSourcesContext"](project);
        context.logLn = console.log;
        context.createFile = (src, type) => {
            const blob = new global.Blob([src], { type, });
            return global.URL.createObjectURL(blob);
        };
        const url = Object(_utils_rewriteSources__WEBPACK_IMPORTED_MODULE_4__["processJSFile"])(context, path);
        // Create script tag to load ES module.
        const script = global.document.createElement("script");
        script.setAttribute("type", "module");
        script.setAttribute("async", "async");
        const id = `__import__${Math.random().toString(36).substr(2)}`;
        const scriptReady = new Promise((resolve, reject) => {
            global[id] = resolve;
        });
        script.textContent = `import * as i from '${url}'; ${id}(i);`;
        global.document.head.appendChild(script);
        const module = await scriptReady;
        // Module loaded -- cleaning up
        script.remove();
        delete global[id];
        return module;
    }
    static async compileMarkdownToHtml(src) {
        if (typeof showdown === "undefined") {
            await Service.lazyLoad("lib/showdown.min.js");
        }
        const converter = new showdown.Converter({ tables: true, ghCodeBlocks: true });
        showdown.setFlavor("github");
        return converter.makeHtml(src);
    }
    static async twiggyWasm(file, status) {
        const buffer = file.getData();
        Object(_utils_ga__WEBPACK_IMPORTED_MODULE_2__["gaEvent"])("disassemble", "Service", "twiggy");
        status && status.push("Analyze with Twiggy");
        const result = await this.worker.twiggyWasm(buffer);
        const output = file.parent.newFile(file.name + ".md", _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Markdown);
        output.description = "Analyzed " + file.name + " using Twiggy.";
        output.setData(result);
        status && status.pop();
        return result;
    }
}
Service.worker = new ServiceWorker();
Service.downloadLink = null;
Service.clangFormatModule = null;


/***/ }),

/***/ "./src/stores/AppStore.ts":
/*!********************************!*\
  !*** ./src/stores/AppStore.ts ***!
  \********************************/
/*! exports provided: AppStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStore", function() { return AppStore; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/AppActions */ "./src/actions/AppActions.ts");
/* harmony import */ var _utils_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/group */ "./src/utils/group.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _components_editor_View__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/editor/View */ "./src/components/editor/View.tsx");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */






class AppStore {
    constructor() {
        this.onLoadProject = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onLoadProject");
        this.onDidChangeStatus = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onDidChangeStatus");
        this.onDidChangeProblems = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onDidChangeProblems");
        this.onChange = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onChange");
        this.onDirtyFileUsed = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onDirtyFileUsed");
        this.onDidChangeBuffer = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onDidChangeBuffer");
        this.onDidChangeData = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onDidChangeData");
        this.onDidChangeDirty = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onDidChangeDirty");
        this.onDidChangeChildren = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onDidChangeChildren");
        this.onOutputChanged = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onOutputChanged");
        this.onTabsChange = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onTabsChange");
        this.onSandboxRun = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onSandboxRun");
        this.onDidChangeIsContentModified = new _models__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]("AppStore onDidChangeIsContentModified");
        this.project = null;
        this.output = null;
        this.isContentModified = false;
    }
    initStore() {
        this.project = new _models__WEBPACK_IMPORTED_MODULE_0__["Project"]();
        this.activeTabGroup = new _utils_group__WEBPACK_IMPORTED_MODULE_3__["default"](null, []);
        this.tabGroups = [this.activeTabGroup];
        this.bindProject();
        this.isContentModified = false;
        this.output = new _models__WEBPACK_IMPORTED_MODULE_0__["File"]("output", _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Log);
    }
    loadProject(project) {
        this.project = project;
        this.bindProject();
        this.isContentModified = false;
        this.onLoadProject.dispatch();
    }
    bindProject() {
        this.project.onDidChangeStatus.register(() => this.onDidChangeStatus.dispatch());
        this.project.onDidChangeProblems.register(() => this.onDidChangeProblems.dispatch());
        this.project.onChange.register(() => this.onChange.dispatch());
        this.project.onDirtyFileUsed.register((file) => this.onDirtyFileUsed.dispatch(file));
        this.project.onDidChangeBuffer.register(() => this.onDidChangeBuffer.dispatch());
        this.project.onDidChangeData.register(() => {
            this.setContentModified(true);
            this.onDidChangeData.dispatch();
        });
        this.project.onDidChangeDirty.register((file) => this.onDidChangeDirty.dispatch(file));
        this.project.onDidChangeChildren.register(() => {
            this.setContentModified(true);
            this.onDidChangeChildren.dispatch();
        });
    }
    setContentModified(modified) {
        if (this.isContentModified === modified) {
            return;
        }
        this.isContentModified = modified;
        this.onDidChangeIsContentModified.dispatch();
    }
    addFileTo(file, parent) {
        if (file.parent) {
            this.deleteFile(file);
        }
        parent.addFile(file);
    }
    deleteFile(file) {
        file.parent.removeFile(file);
    }
    updateFileNameAndDescription(file, name, description) {
        file.setNameAndDescription(name, description);
    }
    getActiveTabGroup() {
        return this.activeTabGroup;
    }
    getTabGroups() {
        return this.tabGroups;
    }
    getProject() {
        return _models__WEBPACK_IMPORTED_MODULE_0__["ModelRef"].getRef(this.project);
    }
    getIsContentModified() {
        return this.isContentModified;
    }
    getOutput() {
        return _models__WEBPACK_IMPORTED_MODULE_0__["ModelRef"].getRef(this.output);
    }
    getFileByName(name) {
        const file = this.project.getFile(name);
        return file ? _models__WEBPACK_IMPORTED_MODULE_0__["ModelRef"].getRef(file) : null;
    }
    getFileSource(file) {
        return file.getModel().getData();
    }
    getFileBuffer(file) {
        return file.getModel().buffer;
    }
    getParent(file) {
        const { parent } = file.getModel();
        return parent ? _models__WEBPACK_IMPORTED_MODULE_0__["ModelRef"].getRef(parent) : null;
    }
    getImmediateChild(directory, name) {
        const child = directory.getModel().getImmediateChild(name);
        return child ? _models__WEBPACK_IMPORTED_MODULE_0__["ModelRef"].getRef(child) : null;
    }
    getPath(file) {
        return file.getModel().getPath();
    }
    getStatus() {
        return this.project.getStatus();
    }
    hasStatus() {
        return this.project.hasStatus();
    }
    logLn(message, kind = "") {
        message = message + "\n";
        if (kind) {
            message = "[" + kind + "]: " + message;
        }
        const model = this.output.buffer;
        const lineCount = model.getLineCount();
        const lastLineLength = model.getLineMaxColumn(lineCount);
        const range = new monaco.Range(lineCount, lastLineLength, lineCount, lastLineLength);
        model.applyEdits([
            { forceMoveMarkers: true, range, text: message }
        ]);
        this.onOutputChanged.dispatch();
    }
    splitGroup() {
        const { tabGroups, activeTabGroup } = this;
        if (activeTabGroup.views.length === 0) {
            return;
        }
        const activeGroupIndex = tabGroups.findIndex(group => group === activeTabGroup);
        // Create a new group from the last file of currently active group
        const view = activeTabGroup.currentView.clone();
        const group = new _utils_group__WEBPACK_IMPORTED_MODULE_3__["default"](view, [view]);
        this.tabGroups.splice(activeGroupIndex + 1, 0, group);
        this.activeTabGroup = group;
        this.onTabsChange.dispatch();
    }
    openFile(file, type, preview) {
        this.activeTabGroup.openFile(file, type, preview);
        this.onTabsChange.dispatch();
    }
    openView(view, preview) {
        this.activeTabGroup.open(view, preview);
        this.onTabsChange.dispatch();
    }
    closeView(view) {
        const { activeTabGroup } = this;
        activeTabGroup.close(view);
        if (activeTabGroup.views.length === 0) {
            this.closeGroup(activeTabGroup);
        }
        this.onTabsChange.dispatch();
    }
    closeTabs(file) {
        const { tabGroups } = this;
        const groupsToClose = [];
        tabGroups.forEach(group => {
            const viewFileDeleted = group.views.find(view => view.file === file);
            group.close(viewFileDeleted);
            if (group.views.length === 0) {
                groupsToClose.push(group);
            }
        });
        groupsToClose.forEach(group => {
            this.closeGroup(group);
        });
        this.onTabsChange.dispatch();
    }
    closeGroup(group) {
        const { activeTabGroup, tabGroups } = this;
        const i = this.tabGroups.indexOf(group);
        if (group.views.length > 0 || tabGroups.length === 1) {
            return;
        }
        tabGroups.splice(i, 1);
        if (activeTabGroup === group) {
            const numGroups = tabGroups.length;
            const g = numGroups ? tabGroups[Math.min(numGroups - 1, i)] : null;
            this.activeTabGroup = g;
        }
    }
    openFiles(files) {
        const groups = files.map((paths) => {
            const views = paths.map(file => {
                const newFile = this.getFileByName(file).getModel();
                return new _components_editor_View__WEBPACK_IMPORTED_MODULE_5__["View"](newFile, Object(_components_editor_View__WEBPACK_IMPORTED_MODULE_5__["defaultViewTypeForFileType"])(newFile.type));
            });
            Object(_util__WEBPACK_IMPORTED_MODULE_4__["assert"])(views.length > 0);
            return new _utils_group__WEBPACK_IMPORTED_MODULE_3__["default"](views[0], views);
        });
        this.activeTabGroup = groups[0];
        this.tabGroups = groups;
        this.onTabsChange.dispatch();
    }
    setViewType(view, type) {
        // const { file } = view;
        // const newView = new View(file, type);
        // const previewGroup = new Group(newView, [newView]);
        // this.tabGroups.push(previewGroup);
        // this.activeTabGroup = previewGroup;
        view.type = type;
        this.onTabsChange.dispatch();
    }
    sendSandboxRun(src) {
        this.onSandboxRun.dispatch({
            project: this.project,
            src,
        });
    }
    handleActions(action) {
        switch (action.type) {
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].OPEN_VIEW: {
                const { view, preview } = action;
                this.openView(view, preview);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].CLOSE_VIEW: {
                const { view } = action;
                this.closeView(view);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].CLOSE_TABS: {
                const { file } = action;
                this.closeTabs(file);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].FOCUS_TAB_GROUP: {
                const { group } = action;
                this.activeTabGroup = group;
                this.onTabsChange.dispatch();
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].OPEN_FILE: {
                const { file, viewType, preview } = action;
                this.openFile(file, viewType, preview);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].OPEN_FILES: {
                const { files } = action;
                this.openFiles(files);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].SPLIT_GROUP: {
                this.splitGroup();
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].ADD_FILE_TO: {
                const { file, parent } = action;
                this.addFileTo(file, parent);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].DELETE_FILE: {
                const { file } = action;
                this.deleteFile(file);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].UPDATE_FILE_NAME_AND_DESCRIPTION: {
                const { file, name, description } = action;
                this.updateFileNameAndDescription(file, name, description);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].LOAD_PROJECT: {
                const { project } = action;
                this.loadProject(project);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].CLEAR_PROJECT_MODIFIED: {
                this.setContentModified(false);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].INIT_STORE: {
                this.initStore();
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].SET_VIEW_TYPE: {
                const { view, viewType } = action;
                this.setViewType(view, viewType);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].LOG_LN: {
                const { message, kind } = action;
                this.logLn(message, kind);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].PUSH_STATUS: {
                const { status } = action;
                this.project.pushStatus(status);
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].POP_STATUS: {
                this.project.popStatus();
                break;
            }
            case _actions_AppActions__WEBPACK_IMPORTED_MODULE_2__["AppActionType"].SANDBOX_RUN: {
                const { src } = action;
                this.sendSandboxRun(src);
                break;
            }
        }
    }
}
const appStore = new AppStore();
_dispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].register((action) => appStore.handleActions(action));
/* harmony default export */ __webpack_exports__["default"] = (appStore);


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: toAddress, padRight, padLeft, isBranch, concat3, concat4, base64EncodeBytes, decodeRestrictedBase64ToBytes, layout, resetDOMSelection, assert, clamp, readUploadedFile, readUploadedDirectory, uploadFilesToDirectory, isUploadAllowedForMimeType, getNextKey, validateFileName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toAddress", function() { return toAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padRight", function() { return padRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padLeft", function() { return padLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBranch", function() { return isBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat3", function() { return concat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat4", function() { return concat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64EncodeBytes", function() { return base64EncodeBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeRestrictedBase64ToBytes", function() { return decodeRestrictedBase64ToBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetDOMSelection", function() { return resetDOMSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readUploadedFile", function() { return readUploadedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readUploadedDirectory", function() { return readUploadedDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFilesToDirectory", function() { return uploadFilesToDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUploadAllowedForMimeType", function() { return isUploadAllowedForMimeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextKey", function() { return getNextKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFileName", function() { return validateFileName; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

function toAddress(n) {
    let s = n.toString(16);
    while (s.length < 6) {
        s = "0" + s;
    }
    return "0x" + s;
}
function padRight(s, n, c) {
    s = String(s);
    while (s.length < n) {
        s = s + c;
    }
    return s;
}
function padLeft(s, n, c) {
    s = String(s);
    while (s.length < n) {
        s = c + s;
    }
    return s;
}
const x86JumpInstructions = [
    "jmp", "ja", "jae", "jb", "jbe", "jc", "je", "jg", "jge", "jl", "jle", "jna", "jnae",
    "jnb", "jnbe", "jnc", "jne", "jng", "jnge", "jnl", "jnle", "jno", "jnp", "jns", "jnz",
    "jo", "jp", "jpe", "jpo", "js", "jz"
];
function isBranch(instr) {
    return x86JumpInstructions.indexOf(instr.mnemonic) >= 0;
}
const base64DecodeMap = [
    62, 0, 0, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
    0, 0, 0, 0, 0, 0, 0,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 0, 0,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
    44, 45, 46, 47, 48, 49, 50, 51
];
const base64DecodeMapOffset = 0x2B;
const base64EOF = 0x3D;
const _concat3array = new Array(3);
const _concat4array = new Array(4);
const _concat9array = new Array(9);
/**
 * The concatN() functions concatenate multiple strings in a way that
 * avoids creating intermediate strings, unlike String.prototype.concat().
 *
 * Note that these functions don't have identical behaviour to using '+',
 * because they will ignore any arguments that are |undefined| or |null|.
 * This usually doesn't matter.
 */
function concat3(s0, s1, s2) {
    _concat3array[0] = s0;
    _concat3array[1] = s1;
    _concat3array[2] = s2;
    return _concat3array.join("");
}
function concat4(s0, s1, s2, s3) {
    _concat4array[0] = s0;
    _concat4array[1] = s1;
    _concat4array[2] = s2;
    _concat4array[3] = s3;
    return _concat4array.join("");
}
// https://gist.github.com/958841
function base64EncodeBytes(bytes) {
    let base64 = "";
    const encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;
    let a;
    let b;
    let c;
    let d;
    let chunk;
    // Main loop deals with bytes in chunks of 3
    for (let i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12; // 258048 = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6; // 4032 = (2^6 - 1) << 6
        d = chunk & 63; // 63 = 2^6 - 1
        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += concat4(encodings[a], encodings[b], encodings[c], encodings[d]);
    }
    // Deal with the remaining bytes and padding
    if (byteRemainder === 1) {
        chunk = bytes[mainLength];
        a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4; // 3 = 2^2 - 1
        base64 += concat3(encodings[a], encodings[b], "===");
    }
    else if (byteRemainder === 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
        a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4; // 1008 = (2^6 - 1) << 4
        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2; // 15 = 2^4 - 1
        base64 += concat4(encodings[a], encodings[b], encodings[c], "=");
    }
    return base64;
}
function decodeRestrictedBase64ToBytes(encoded) {
    let ch;
    let code;
    let code2;
    const len = encoded.length;
    const padding = encoded.charAt(len - 2) === "=" ? 2 : encoded.charAt(len - 1) === "=" ? 1 : 0;
    const decoded = new Uint8Array((encoded.length >> 2) * 3 - padding);
    for (let i = 0, j = 0; i < encoded.length;) {
        ch = encoded.charCodeAt(i++);
        code = base64DecodeMap[ch - base64DecodeMapOffset];
        ch = encoded.charCodeAt(i++);
        code2 = base64DecodeMap[ch - base64DecodeMapOffset];
        decoded[j++] = (code << 2) | ((code2 & 0x30) >> 4);
        ch = encoded.charCodeAt(i++);
        if (ch === base64EOF) {
            return decoded;
        }
        code = base64DecodeMap[ch - base64DecodeMapOffset];
        decoded[j++] = ((code2 & 0x0f) << 4) | ((code & 0x3c) >> 2);
        ch = encoded.charCodeAt(i++);
        if (ch === base64EOF) {
            return decoded;
        }
        code2 = base64DecodeMap[ch - base64DecodeMapOffset];
        decoded[j++] = ((code & 0x03) << 6) | code2;
    }
    return decoded;
}
const layoutThrottleDuration = 10;
let layoutTimeout = 0;
function layout() {
    if (layoutTimeout) {
        window.clearTimeout(layoutTimeout);
    }
    window.setTimeout(() => {
        layoutTimeout = 0;
        document.dispatchEvent(new Event("layout"));
    }, layoutThrottleDuration);
}
function resetDOMSelection() {
    window.getSelection().removeAllRanges();
}
function assert(c, message) {
    if (!c) {
        throw new Error(message);
    }
}
function clamp(x, min, max) {
    return Math.min(Math.max(min, x), max);
}
async function readUploadedFile(inputFile, readAs) {
    const temporaryFileReader = new FileReader();
    return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
            temporaryFileReader.abort();
            reject(new DOMException("Problem parsing input file."));
        };
        temporaryFileReader.onload = () => {
            resolve(temporaryFileReader.result);
        };
        if (readAs === "text") {
            temporaryFileReader.readAsText(inputFile);
        }
        else if (readAs === "arrayBuffer") {
            temporaryFileReader.readAsArrayBuffer(inputFile);
        }
        else {
            assert(false, "NYI");
        }
    });
}
async function readUploadedDirectory(inputEntry, root, customRoot) {
    const reader = inputEntry.createReader();
    reader.readEntries(((entries) => {
        entries.forEach(async (entry) => {
            if (entry.isDirectory) {
                return readUploadedDirectory(entry, root, customRoot);
            }
            entry.file(async (file) => {
                try {
                    const name = file.name;
                    let path = entry.fullPath.replace(/^\/+/g, "");
                    if (customRoot) {
                        const pathArray = path.split("/");
                        pathArray[0] = customRoot;
                        path = pathArray.join("/");
                    }
                    const fileType = Object(_models__WEBPACK_IMPORTED_MODULE_0__["fileTypeForExtension"])(name.split(".").pop());
                    const data = await readUploadedFile(file, Object(_models__WEBPACK_IMPORTED_MODULE_0__["isBinaryFileType"])(fileType) ? "arrayBuffer" : "text");
                    const newFile = root.newFile(path, fileType, false, true);
                    newFile.setData(data);
                }
                catch (e) {
                    console.log("Unable to read the file!");
                }
            });
        });
    }));
}
async function uploadFilesToDirectory(items, root) {
    Array.from(items).forEach(async (item) => {
        if (typeof item.webkitGetAsEntry === "function") {
            const entry = item.webkitGetAsEntry();
            if (entry.isDirectory) {
                if (root.getImmediateChild(entry.name)) {
                    const customRoot = root.handleNameCollision(entry.name);
                    return readUploadedDirectory(entry, root, customRoot);
                }
                return readUploadedDirectory(entry, root);
            }
        }
        let file;
        if (item instanceof DataTransferItem) {
            file = item.getAsFile();
        }
        else {
            file = item;
        }
        const name = file.name;
        const path = file.webkitRelativePath || name; // This works in FF also.
        const fileType = Object(_models__WEBPACK_IMPORTED_MODULE_0__["fileTypeForExtension"])(name.split(".").pop());
        let data;
        try {
            data = await readUploadedFile(file, Object(_models__WEBPACK_IMPORTED_MODULE_0__["isBinaryFileType"])(fileType) ? "arrayBuffer" : "text");
            const newFile = root.newFile(path, fileType, false, true);
            newFile.setData(data);
        }
        catch (e) {
            console.log("Unable to read the file!");
        }
    });
}
function isUploadAllowedForMimeType(type) {
    if (type === "") { // Firefox doesn't show the "application/wasm" mime type.
        return true;
    }
    return Object(_models__WEBPACK_IMPORTED_MODULE_0__["fileTypeForMimeType"])(type) !== _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Unknown;
}
let nextKey = 0;
function getNextKey() {
    return nextKey++;
}
function validateFileName(name, sourceType) {
    if (!name) {
        return "File name can't be empty";
    }
    if (!/^[a-z0-9\.\-\_]+$/i.test(name)) {
        return "Illegal characters in file name";
    }
    const sourceTypeExtension = "." + Object(_models__WEBPACK_IMPORTED_MODULE_0__["extensionForFileType"])(sourceType);
    if (sourceTypeExtension === name) {
        return "File name can't be empty";
    }
    if (!name.endsWith(sourceTypeExtension)) {
        return `${Object(_models__WEBPACK_IMPORTED_MODULE_0__["nameForFileType"])(sourceType)} file extension is missing or incorrect`;
    }
    return "";
}


/***/ }),

/***/ "./src/utils/Logger.ts":
/*!*****************************!*\
  !*** ./src/utils/Logger.ts ***!
  \*****************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raven-js */ "./node_modules/raven-js/src/singleton.js");
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raven_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.json */ "./config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./config.json", 1);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


class Logger {
    static init() {
        if (Logger.isRunningInProduction()) {
            raven_js__WEBPACK_IMPORTED_MODULE_0__["config"](_config_json__WEBPACK_IMPORTED_MODULE_1__.sentryDNS).install();
        }
    }
    static captureException(e, additionalData) {
        if (Logger.isRunningInProduction()) {
            raven_js__WEBPACK_IMPORTED_MODULE_0__["captureException"](e, additionalData);
        }
    }
    static captureMessage(message, additionalData) {
        if (Logger.isRunningInProduction()) {
            raven_js__WEBPACK_IMPORTED_MODULE_0__["captureMessage"](message, additionalData);
        }
    }
    static getLastEventId() {
        return raven_js__WEBPACK_IMPORTED_MODULE_0__["lastEventId"]();
    }
    static isRunningInProduction() {
        return window.location.hostname === "webassembly.studio";
    }
}


/***/ }),

/***/ "./src/utils/Template.ts":
/*!*******************************!*\
  !*** ./src/utils/Template.ts ***!
  \*******************************/
/*! exports provided: Template, ProblemTemplate, FileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemTemplate", function() { return ProblemTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTemplate", function() { return FileTemplate; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Template {
    constructor(container) {
        this.monacoIconLabel = document.createElement("div");
        this.monacoIconLabel.className = "monaco-icon-label";
        this.monacoIconLabel.style.display = "flex";
        container.appendChild(this.monacoIconLabel);
        const labelDescriptionContainer = document.createElement("div");
        labelDescriptionContainer.className = "monaco-icon-label-description-container";
        this.monacoIconLabel.appendChild(labelDescriptionContainer);
        this.label = document.createElement("a");
        this.label.className = "label-name";
        labelDescriptionContainer.appendChild(this.label);
        this.description = document.createElement("span");
        this.description.className = "label-description";
        labelDescriptionContainer.appendChild(this.description);
    }
}
class ProblemTemplate extends Template {
    constructor(container) {
        super(container);
    }
    dispose() {
        // TODO
    }
    set(problem) {
        this.label.classList.toggle(problem.severity + "-dark", true);
        const marker = problem.marker;
        const position = `(${marker.startLineNumber}, ${marker.startColumn})`;
        this.label.innerHTML = marker.message;
        this.description.innerHTML = position;
    }
}
class FileTemplate extends Template {
    constructor(container) {
        super(container);
    }
    dispose() {
        // TODO dispose resources?
    }
    set(file) {
        let icon = "";
        switch (file.type) {
            case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].C:
                icon = "c-lang-file-icon";
                break;
            case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Cpp:
                icon = "cpp-lang-file-icon";
                break;
            case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].JavaScript:
                icon = "javascript-lang-file-icon";
                break;
            case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].HTML:
                icon = "html-lang-file-icon";
                break;
            case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].TypeScript:
                icon = "typescript-lang-file-icon";
                break;
            case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Markdown:
                icon = "markdown-lang-file-icon";
                break;
            case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].JSON:
                icon = "json-lang-file-icon";
                break;
            case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Wasm:
                icon = "wasm-lang-file-icon";
                break;
            case _models__WEBPACK_IMPORTED_MODULE_0__["FileType"].Wat:
                icon = "wat-lang-file-icon";
                break;
        }
        if (file instanceof _models__WEBPACK_IMPORTED_MODULE_0__["Directory"]) {
            this.monacoIconLabel.classList.remove("file-icon");
            this.monacoIconLabel.classList.add("folder-icon");
        }
        else {
            this.monacoIconLabel.classList.add("file-icon");
        }
        if (icon) {
            this.monacoIconLabel.classList.add(icon);
        }
        this.label.innerHTML = file.name;
        this.monacoIconLabel.classList.toggle("dirty", file.isDirty);
        this.monacoIconLabel.classList.toggle("transient", file.isTransient);
        let title = "";
        if (file.isDirty && file.isTransient) {
            title = "File has been modified and is transient.";
        }
        else if (file.isDirty && !file.isTransient) {
            title = "File has been modified.";
        }
        else if (!file.isDirty && file.isTransient) {
            title = "File is transient.";
        }
        this.monacoIconLabel.title = title;
    }
}


/***/ }),

/***/ "./src/utils/fetchTemplates.ts":
/*!*************************************!*\
  !*** ./src/utils/fetchTemplates.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchTemplates; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
async function fetchTemplates(src) {
    const response = await fetch(src);
    return JSON.parse(await response.text());
}


/***/ }),

/***/ "./src/utils/ga.ts":
/*!*************************!*\
  !*** ./src/utils/ga.ts ***!
  \*************************/
/*! exports provided: gaEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaEvent", function() { return gaEvent; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function gaEvent(action, category, label, value) {
    if (typeof gtag !== "function") {
        return;
    }
    gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
}


/***/ }),

/***/ "./src/utils/group.ts":
/*!****************************!*\
  !*** ./src/utils/group.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _components_editor_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/editor/View */ "./src/components/editor/View.tsx");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


class Group {
    constructor(view, views = []) {
        this.currentView = view;
        this.views = views;
    }
    open(view, shouldPreview = true) {
        const views = this.views;
        const index = views.indexOf(view);
        if (index >= 0) {
            // Switch to the view if it's already open.
            this.currentView = view;
            if (!shouldPreview && this.preview === view) {
                this.preview = null;
            }
            return;
        }
        if (shouldPreview) {
            if (this.preview) {
                // Replace preview file if there is one.
                const previewIndex = views.indexOf(this.preview);
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["assert"])(previewIndex >= 0);
                this.currentView = this.preview = views[previewIndex] = view;
            }
            else {
                views.push(view);
                this.currentView = this.preview = view;
            }
        }
        else {
            views.push(view);
            this.currentView = view;
            this.preview = null;
        }
    }
    openFile(file, type = _components_editor_View__WEBPACK_IMPORTED_MODULE_1__["ViewType"].Editor, preview = true) {
        const index = this.views.findIndex(view => view.file === file && view.type === type);
        const view = (index >= 0) ? this.views[index] : new _components_editor_View__WEBPACK_IMPORTED_MODULE_1__["View"](file, type);
        this.open(view, preview);
    }
    close(view) {
        const i = this.views.indexOf(view);
        if (i < 0) {
            return;
        }
        this.views.splice(i, 1);
        // if (this.currentView.onClose) {
        //   this.currentView.onClose();
        // }
        const numViews = this.views.length;
        this.currentView = numViews ? this.views[Math.min(numViews - 1, i)] : null;
        if (view === this.preview) {
            this.preview = null;
        }
    }
}


/***/ }),

/***/ "./src/utils/registerLanguages.ts":
/*!****************************************!*\
  !*** ./src/utils/registerLanguages.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return registerLanguages; });
/* harmony import */ var _languages_wat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../languages/wat */ "./src/languages/wat.ts");
/* harmony import */ var _languages_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../languages/log */ "./src/languages/log.ts");
/* harmony import */ var _languages_rust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../languages/rust */ "./src/languages/rust.ts");
/* harmony import */ var _languages_cton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../languages/cton */ "./src/languages/cton.ts");
/* harmony import */ var _languages_x86__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../languages/x86 */ "./src/languages/x86.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





async function registerLanguages() {
    // Wat
    monaco.languages.onLanguage("wat", () => {
        monaco.languages.setMonarchTokensProvider("wat", _languages_wat__WEBPACK_IMPORTED_MODULE_0__["Wat"].MonarchDefinitions);
        monaco.languages.setLanguageConfiguration("wat", _languages_wat__WEBPACK_IMPORTED_MODULE_0__["Wat"].LanguageConfiguration);
        monaco.languages.registerCompletionItemProvider("wat", _languages_wat__WEBPACK_IMPORTED_MODULE_0__["Wat"].CompletionItemProvider);
        monaco.languages.registerHoverProvider("wat", _languages_wat__WEBPACK_IMPORTED_MODULE_0__["Wat"].HoverProvider);
    });
    monaco.languages.register({
        id: "wat"
    });
    // Log
    monaco.languages.onLanguage("log", () => {
        monaco.languages.setMonarchTokensProvider("log", _languages_log__WEBPACK_IMPORTED_MODULE_1__["Log"].MonarchTokensProvider);
    });
    monaco.languages.register({
        id: "log"
    });
    // Cretonne
    monaco.languages.onLanguage("cton", () => {
        monaco.languages.setMonarchTokensProvider("cton", _languages_cton__WEBPACK_IMPORTED_MODULE_3__["Cton"].MonarchDefinitions);
    });
    monaco.languages.register({
        id: "cton"
    });
    // X86
    monaco.languages.onLanguage("x86", () => {
        monaco.languages.setMonarchTokensProvider("x86", _languages_x86__WEBPACK_IMPORTED_MODULE_4__["X86"].MonarchDefinitions);
    });
    monaco.languages.register({
        id: "x86"
    });
    // Rust
    monaco.languages.onLanguage("rust", () => {
        monaco.languages.setMonarchTokensProvider("rust", _languages_rust__WEBPACK_IMPORTED_MODULE_2__["Rust"].MonarchDefinitions);
    });
    monaco.languages.register({
        id: "rust"
    });
    let response = await fetch("lib/lib.es6.d.ts");
    monaco.languages.typescript.typescriptDefaults.addExtraLib(await response.text());
    response = await fetch("lib/fiddle.d.ts");
    monaco.languages.typescript.typescriptDefaults.addExtraLib(await response.text());
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({ noLib: true, allowNonTsExtensions: true });
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({ noLib: true, allowNonTsExtensions: true });
}


/***/ }),

/***/ "./src/utils/registerTheme.ts":
/*!************************************!*\
  !*** ./src/utils/registerTheme.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return registerTheme; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
async function registerTheme() {
    monaco.editor.defineTheme("fiddle-theme", {
        base: "vs-dark",
        inherit: true,
        rules: [
            { token: "custom-info", foreground: "d4d4d4" },
            { token: "custom-warn", foreground: "ff9900" },
            { token: "custom-error", background: "00ff00", foreground: "ff0000", fontStyle: "bold" }
        ]
    });
}


/***/ }),

/***/ "./src/utils/rewriteSources.ts":
/*!*************************************!*\
  !*** ./src/utils/rewriteSources.ts ***!
  \*************************************/
/*! exports provided: RewriteSourcesContext, rewriteJS, processJSFile, rewriteHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewriteSourcesContext", function() { return RewriteSourcesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewriteJS", function() { return rewriteJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processJSFile", function() { return processJSFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewriteHTML", function() { return rewriteHTML; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class RewriteSourcesContext {
    constructor(project) {
        this.project = project;
        this.processedFiles = Object.create(null);
    }
}
function expandURL(path, base) {
    return new URL(path, "https://example.org/" + base).pathname.substr(1);
}
function rewriteJS(context, jsFileName) {
    const file = context.project.getFile(jsFileName);
    if (!file) {
        return null;
    }
    const src = file.getData();
    return src.replace(/\bfrom\s+['"](.+?)['"](\s*[;\n])/g, (all, path, sep) => {
        const fullPath = expandURL(path, jsFileName);
        const blobUrl = processJSFile(context, fullPath);
        if (!blobUrl) {
            (void 0, context.logLn)(`Cannot find file '${path}' mentioned in ${jsFileName}`);
            return all;
        }
        return `from "${blobUrl}"${sep}`;
    });
}
function processJSFile(context, fullPath) {
    if (context.processedFiles[fullPath]) {
        return context.processedFiles[fullPath];
    }
    const src = rewriteJS(context, fullPath);
    const resultUrl = context.createFile(src, "application/javascript");
    context.processedFiles[fullPath] = resultUrl;
    return resultUrl;
}
function rewriteHTML(context, htmlFileName) {
    const file = context.project.getFile(htmlFileName);
    if (!file) {
        return null;
    }
    const src = file.getData();
    return src.replace(/\bsrc\s*=\s*['"](.+?)['"]/g, (all, path) => {
        const fullPath = expandURL(path, htmlFileName);
        const blobUrl = processJSFile(context, fullPath);
        if (!blobUrl) {
            (void 0, context.logLn)(`Cannot find file '${path}' mentioned in ${htmlFileName}`);
            return all;
        }
        return `src="${blobUrl}"`;
    });
}


/***/ }),

/***/ "./src/utils/splitUtils.ts":
/*!*********************************!*\
  !*** ./src/utils/splitUtils.ts ***!
  \*********************************/
/*! exports provided: toCSSPx, assignObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCSSPx", function() { return toCSSPx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignObject", function() { return assignObject; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function toCSSPx(x) {
    return (x | 0) + "px";
}
function assignObject(to, from) {
    for (const x in from) {
        if (!(x in to)) {
            to[x] = from[x];
        }
    }
    return to;
}


/***/ }),

/***/ "./src/utils/taskRunner.ts":
/*!*********************************!*\
  !*** ./src/utils/taskRunner.ts ***!
  \*********************************/
/*! exports provided: RunTaskExternals, getCurrentRunnerInfo, runTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunTaskExternals", function() { return RunTaskExternals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentRunnerInfo", function() { return getCurrentRunnerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runTask", function() { return runTask; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _gulpy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gulpy */ "./src/gulpy.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/service.ts");
/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../arc */ "./src/arc.ts");
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */




var RunTaskExternals;
(function (RunTaskExternals) {
    RunTaskExternals[RunTaskExternals["Default"] = 0] = "Default";
    RunTaskExternals[RunTaskExternals["Arc"] = 1] = "Arc";
    RunTaskExternals[RunTaskExternals["Setup"] = 2] = "Setup";
})(RunTaskExternals || (RunTaskExternals = {}));
function unsafeEval(code, params) {
    const paramKeys = Object.keys(params);
    const paramValues = Object.values(params);
    const fn = Function.apply(null, [...paramKeys, code]);
    return fn.apply(window, paramValues);
}
function contextify(src, sandboxGlobal = window, thisArg = window, context = {}, modules = {}) {
    // Build a require wrapper that looks for provided modules first and falls
    // back to calling the environment's require otherwise, which supports both
    // synchronous (CommonJS-style) and asynchronous (AMD-style) arguments.
    function require(name, factory) {
        if (typeof name === "string") {
            if (modules.hasOwnProperty(name)) {
                return modules[name];
            }
            return window.require(name);
        }
        return window.require(name, factory);
    }
    Object.defineProperty(require, "config", {
        value: window.require.config
    });
    // Use provided contextual keys as parameters and wrap the source in an IIFE
    // so redefining variables using parameter names is allowed...
    const contextParameters = Object.keys(context)
        .concat("require", "exports", "return ()=>{" + src + "}");
    // ...and use provided contextual values as arguments.
    const contextArguments = Object.values(context)
        .concat(require, {});
    const global = sandboxGlobal || window;
    // Call the function constructor with our variable parameters and arguments.
    return global.Function.apply(null, contextParameters)
        .apply(thisArg, contextArguments);
}
async function createSandboxIFrame() {
    const src = `<!DOCTYPE html>
<html><body>
<script>window.parent.postMessage({type: "taskRunner-sandbox-ready"}, "*");</script>
</body></html>`;
    const iframe = document.createElement("iframe");
    // Chrome needs width and height attributes set for iframe.
    iframe.setAttribute("width", "1");
    iframe.setAttribute("height", "1");
    iframe.setAttribute("src", URL.createObjectURL(new Blob([src], { type: "text/html" })));
    const container = document.getElementById("task-runner-content");
    container.textContent = "";
    container.appendChild(iframe);
    return new Promise((resolve) => {
        iframeReady.set(iframe, resolve);
    });
}
const iframeReady = new WeakMap();
window.addEventListener("message", (e) => {
    if (typeof e.data !== "object" || !e.data || e.data.type !== "taskRunner-sandbox-ready") {
        return;
    }
    const contentWindow = e.source;
    const iframe = contentWindow.frameElement;
    iframeReady.get(iframe)(contentWindow);
    const originalFetch = window.fetch;
    contentWindow.fetch = (input, init) => {
        let file = null;
        if (currentRunnerInfo && currentRunnerInfo.global === contentWindow) {
            const url = new URL(input, "https://example.org/src/main.html");
            file = currentRunnerInfo.project.getFile(url.pathname.substr(1));
        }
        if (file) {
            return Promise.resolve(new Response(file.getData(), {
                status: 200,
                statusText: "OK",
                headers: {
                    "Content-Type": Object(_models__WEBPACK_IMPORTED_MODULE_0__["mimeTypeForFileType"])(file.type)
                }
            }));
        }
        return originalFetch(input, init);
    };
});
let currentRunnerInfo = null;
function clearCurrentRunnerInfoAndIframe() {
    currentRunnerInfo = null;
    const container = document.getElementById("task-runner-content");
    container.textContent = "";
}
function getCurrentRunnerInfo() {
    return currentRunnerInfo;
}
async function runTask(src, name, optional, project, logLn, externals) {
    const currentRunnerGlobal = await createSandboxIFrame();
    currentRunnerInfo = {
        global: currentRunnerGlobal,
        project,
    };
    // Runs the provided source in our fantasy gulp context
    const gulp = new _gulpy__WEBPACK_IMPORTED_MODULE_1__["Gulpy"]();
    contextify(src, currentRunnerGlobal, 
    // thisArg
    gulp, {
        // context for backwards compatibility
        gulp,
        Service: _service__WEBPACK_IMPORTED_MODULE_2__["Service"],
        project,
        logLn,
        fileTypeForExtension: _models__WEBPACK_IMPORTED_MODULE_0__["fileTypeForExtension"],
        monaco: externals === RunTaskExternals.Setup ? monaco : undefined,
    }, {
        // modules
        "gulp": gulp,
        "@wasm/studio-utils": {
            Service: _service__WEBPACK_IMPORTED_MODULE_2__["Service"],
            project,
            logLn,
            fileTypeForExtension: _models__WEBPACK_IMPORTED_MODULE_0__["fileTypeForExtension"],
            Arc: externals === RunTaskExternals.Arc ? _arc__WEBPACK_IMPORTED_MODULE_3__["Arc"] : undefined,
            eval: externals === RunTaskExternals.Setup ? unsafeEval : undefined,
        }
    })();
    if (gulp.hasTask(name)) {
        try {
            logLn(`Task ${name} is running...`, "info");
            await gulp.run(name);
            logLn(`Task ${name} is completed`, "info");
        }
        catch (e) {
            logLn(`Task ${name} failed: ${e.message}`, "error");
        }
    }
    else if (!optional) {
        logLn(`Task ${name} is not optional.`, "error");
    }
    clearCurrentRunnerInfoAndIframe();
}


/***/ }),

/***/ "./src/utils/zlib.ts":
/*!***************************!*\
  !*** ./src/utils/zlib.ts ***!
  \***************************/
/*! exports provided: isZlibData, decompressZlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isZlibData", function() { return isZlibData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decompressZlib", function() { return decompressZlib; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function isZlibData(data) {
    const [firstByte, secondByte] = data;
    return firstByte === 0x78 && (secondByte === 0x01 || secondByte === 0x9C || secondByte === 0xDA);
}
async function decompressZlib(data) {
    const { inflate } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! pako */ "./node_modules/pako/index.js", 7));
    return inflate(data);
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map