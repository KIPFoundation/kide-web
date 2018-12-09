/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/worker.ts");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/worker.ts":
/*!***********************!*\
  !*** ./src/worker.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/message.ts");
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

function assert(c, message) {
    if (!c) {
        throw new Error(message);
    }
}
async function loadBinaryen() {
    if (typeof Binaryen === "undefined") {
        importScripts("../lib/binaryen.js");
    }
}
async function loadWabt() {
    if (typeof wabt === "undefined") {
        self.global = self; // Wabt installs itself on the global object.
        importScripts("../lib/wabt.js");
    }
}
let Twiggy = null;
async function loadTwiggy() {
    if (!Twiggy) {
        importScripts("../lib/twiggy_wasm_api.js");
        await wasm_bindgen("../lib/twiggy_wasm_api_bg.wasm");
        Twiggy = {
            Items: wasm_bindgen.Items,
            Top: wasm_bindgen.Top,
            Paths: wasm_bindgen.Paths,
            Monos: wasm_bindgen.Monos,
            Dominators: wasm_bindgen.Dominators
        };
    }
}
onmessage = (e) => {
    const fn = {
        [_message__WEBPACK_IMPORTED_MODULE_0__["WorkerCommand"].OptimizeWasmWithBinaryen]: optimizeWasmWithBinaryen,
        [_message__WEBPACK_IMPORTED_MODULE_0__["WorkerCommand"].ValidateWasmWithBinaryen]: validateWasmWithBinaryen,
        [_message__WEBPACK_IMPORTED_MODULE_0__["WorkerCommand"].CreateWasmCallGraphWithBinaryen]: createWasmCallGraphWithBinaryen,
        [_message__WEBPACK_IMPORTED_MODULE_0__["WorkerCommand"].ConvertWasmToAsmWithBinaryen]: convertWasmToAsmWithBinaryen,
        [_message__WEBPACK_IMPORTED_MODULE_0__["WorkerCommand"].DisassembleWasmWithBinaryen]: disassembleWasmWithBinaryen,
        [_message__WEBPACK_IMPORTED_MODULE_0__["WorkerCommand"].AssembleWatWithBinaryen]: assembleWatWithBinaryen,
        [_message__WEBPACK_IMPORTED_MODULE_0__["WorkerCommand"].DisassembleWasmWithWabt]: disassembleWasmWithWabt,
        [_message__WEBPACK_IMPORTED_MODULE_0__["WorkerCommand"].AssembleWatWithWabt]: assembleWatWithWabt,
        [_message__WEBPACK_IMPORTED_MODULE_0__["WorkerCommand"].TwiggyWasm]: twiggyWasm
    }[e.data.command];
    assert(fn, `Command ${e.data.command} not found.`);
    processMessage(e.data, fn);
};
async function processMessage(request, fn) {
    const response = {
        id: request.id,
        payload: null,
        success: true
    };
    try {
        response.payload = await fn(request.payload);
    }
    catch (e) {
        response.payload = {
            message: e.message
        };
        response.success = false;
    }
    postMessage(response, undefined);
}
async function optimizeWasmWithBinaryen(data) {
    await loadBinaryen();
    const module = Binaryen.readBinary(new Uint8Array(data));
    module.optimize();
    return Promise.resolve(module.emitBinary());
}
async function validateWasmWithBinaryen(data) {
    await loadBinaryen();
    const module = Binaryen.readBinary(new Uint8Array(data));
    return Promise.resolve(module.validate());
}
async function createWasmCallGraphWithBinaryen(data) {
    await loadBinaryen();
    const module = Binaryen.readBinary(new Uint8Array(data));
    const old = Binaryen.print;
    let ret = "";
    Binaryen.print = (x) => { ret += x + "\n"; };
    module.runPasses(["print-call-graph"]);
    Binaryen.print = old;
    return Promise.resolve(ret);
}
async function convertWasmToAsmWithBinaryen(data) {
    await loadBinaryen();
    const module = Binaryen.readBinary(new Uint8Array(data));
    module.optimize();
    return Promise.resolve(module.emitAsmjs());
}
async function disassembleWasmWithBinaryen(data) {
    await loadBinaryen();
    const module = Binaryen.readBinary(new Uint8Array(data));
    return Promise.resolve(module.emitText());
}
async function assembleWatWithBinaryen(data) {
    await loadBinaryen();
    const module = Binaryen.parseText(data);
    return Promise.resolve(module.emitBinary());
}
async function disassembleWasmWithWabt(data) {
    await loadWabt();
    const module = wabt.readWasm(data, { readDebugNames: true });
    module.generateNames();
    module.applyNames();
    return Promise.resolve(module.toText({ foldExprs: false, inlineExport: true }));
}
async function assembleWatWithWabt(data) {
    await loadWabt();
    const module = wabt.parseWat("test.wat", data);
    module.resolveNames();
    module.validate();
    return Promise.resolve(module.toBinary({ log: true, write_debug_names: true }).buffer);
}
async function twiggyWasm(data) {
    await loadTwiggy();
    let opts;
    const items = Twiggy.Items.parse(new Uint8Array(data));
    let md = "# Twiggy Analysis\n\nTwiggy is a code size profiler, learn more about it [here](https://github.com/rustwasm/twiggy).\n\n";
    // Top
    opts = Twiggy.Top.new();
    const top = JSON.parse(items.top(opts));
    md += "## Top\n\n";
    md += "| Shallow Bytes | Shallow % | Item |\n";
    md += "| ------------: | --------: | :--- |\n";
    let ignoreCount = 0;
    const shallowSizePercentIgnoreThreshold = 0.1;
    top.forEach(entry => {
        if (entry.shallow_size_percent >= shallowSizePercentIgnoreThreshold) {
            md += `| ${entry.shallow_size} | ${entry.shallow_size_percent.toFixed(2)} | \`${entry.name}\` |\n`;
        }
        else {
            ignoreCount++;
        }
    });
    if (ignoreCount) {
        md += `\n### Note:\n${ignoreCount} items had a shallow size percent less than ${shallowSizePercentIgnoreThreshold} and were not listed above.\n`;
    }
    // Paths
    // md += "\n\n# Paths\n\n";
    // opts = Twiggy.Paths.new();
    // const paths = JSON.parse(items.paths(opts));
    // Monos
    // md += "\n\n# Monos\n\n";
    // opts = Twiggy.Monos.new();
    // opts.set_max_generics(10);
    // opts.set_max_monos(10);
    // const monos = JSON.parse(items.monos(opts));
    md += "\n\n## Dominators\n\n";
    md += "| Retained Bytes | Retained % | Dominator Tree |\n";
    md += "| ------------: | --------: | :--- |\n";
    // Dominators
    const retainedSizePercentIgnoreThreshold = 0.1;
    ignoreCount = 0;
    opts = Twiggy.Dominators.new();
    const dominator = JSON.parse(items.dominators(opts));
    function printDominator(dominator, depth) {
        let prefix = "";
        for (let i = 0; i < depth - 1; i++) {
            prefix += "   ";
        }
        if (depth) {
            prefix += "⤷ ";
        }
        md += `| ${dominator.retained_size} | ${dominator.retained_size_percent.toFixed(2)} | \`${prefix + dominator.name}\` |\n`;
        if (dominator.children) {
            dominator.children.forEach(child => {
                if (child.retained_size_percent >= retainedSizePercentIgnoreThreshold) {
                    printDominator(child, depth + 1);
                }
                else {
                    ignoreCount++;
                }
            });
        }
    }
    printDominator(dominator, 0);
    if (ignoreCount) {
        md += `\n### Note:\n${ignoreCount} items had a retained size percent less than ${retainedSizePercentIgnoreThreshold} and were not listed above.\n`;
    }
    return Promise.resolve(md);
}


/***/ })

/******/ });
//# sourceMappingURL=worker.bundle.js.map