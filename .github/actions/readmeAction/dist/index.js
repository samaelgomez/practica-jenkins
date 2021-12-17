/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 450:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
// EXTERNAL MODULE: ../../../../../usr/local/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/core
var core = __nccwpck_require__(450);
;// CONCATENATED MODULE: ./index.js


const cypressResult = (0,core.getInput)('cypress-result');

(0,external_fs_namespaceObject.readFile)("./README.md", function read(err, data) {
    if (err) {
        throw err;
    }

    let fileContent = data;
    const regex = "<!---Start place for the badge -->\n(.*)\n<!---End place for the badge -->/g"

    if (cypressResult == "success") {
        const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg\n<!---End place for the badge -->/g");
        (0,external_fs_namespaceObject.writeFile)("./README.md", replaceBadge);
    } else if (cypressResult == "failure") {
        const replaceBadge = fileContent.replace(regex, "<!---Start place for the badge -->\nRESULTADO DE LOS ÚLTIMOS TESTS: https://img.shields.io/badge/test-failure-red\n<!---End place for the badge -->/g");
        (0,external_fs_namespaceObject.writeFile)("./README.md", replaceBadge);
    }
})
})();

module.exports = __webpack_exports__;
/******/ })()
;