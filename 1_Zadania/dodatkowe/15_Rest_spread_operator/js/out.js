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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//Zadanie #0\r\nconsole.log(\"Zadanie 00:\");\r\nlet namesA = [\"Marta\", \"Damian\", \"Zdzisław\"];\r\nlet namesB = [\"Nina\", \"Brian\", \"Jan\", \"Karol\"];\r\n\r\nnamesB.splice(2, 0, ...namesA);\r\nconsole.log(namesA);\r\nconsole.log(namesB);\r\n\r\nfunction getAverage(...arr) {\r\n    return arr.reduce((previous, current) => {\r\n        return previous + current;\r\n    })/arr.length;\r\n}\r\n\r\nconsole.log(getAverage(2,4,5,6,7,79));\r\n\r\n//Zadanie #01\r\nconsole.log(\"Zadanie 01\");\r\nconst name = \"tomek\";\r\nlet arrName = [];\r\narrName.push(...name);\r\nconsole.log(arrName);\r\n\r\n//Zadanie #02\r\nconsole.log(\"Zadanie 02:\");\r\nconst fruits = [\"banana\", \"apple\", \"orange\"];\r\nconst vegetables = [\"onion\", \"tomato\", \"salad\"];\r\nlet mix = [];\r\nmix.push(...fruits, ...vegetables);\r\nconsole.log(mix);\r\n\r\n__webpack_require__(/*! ./zadanie03 */ \"./js/zadanie03.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1phZGFuaWUgIzBcclxuY29uc29sZS5sb2coXCJaYWRhbmllIDAwOlwiKTtcclxubGV0IG5hbWVzQSA9IFtcIk1hcnRhXCIsIFwiRGFtaWFuXCIsIFwiWmR6aXPFgmF3XCJdO1xyXG5sZXQgbmFtZXNCID0gW1wiTmluYVwiLCBcIkJyaWFuXCIsIFwiSmFuXCIsIFwiS2Fyb2xcIl07XHJcblxyXG5uYW1lc0Iuc3BsaWNlKDIsIDAsIC4uLm5hbWVzQSk7XHJcbmNvbnNvbGUubG9nKG5hbWVzQSk7XHJcbmNvbnNvbGUubG9nKG5hbWVzQik7XHJcblxyXG5mdW5jdGlvbiBnZXRBdmVyYWdlKC4uLmFycikge1xyXG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZpb3VzICsgY3VycmVudDtcclxuICAgIH0pL2Fyci5sZW5ndGg7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGdldEF2ZXJhZ2UoMiw0LDUsNiw3LDc5KSk7XHJcblxyXG4vL1phZGFuaWUgIzAxXHJcbmNvbnNvbGUubG9nKFwiWmFkYW5pZSAwMVwiKTtcclxuY29uc3QgbmFtZSA9IFwidG9tZWtcIjtcclxubGV0IGFyck5hbWUgPSBbXTtcclxuYXJyTmFtZS5wdXNoKC4uLm5hbWUpO1xyXG5jb25zb2xlLmxvZyhhcnJOYW1lKTtcclxuXHJcbi8vWmFkYW5pZSAjMDJcclxuY29uc29sZS5sb2coXCJaYWRhbmllIDAyOlwiKTtcclxuY29uc3QgZnJ1aXRzID0gW1wiYmFuYW5hXCIsIFwiYXBwbGVcIiwgXCJvcmFuZ2VcIl07XHJcbmNvbnN0IHZlZ2V0YWJsZXMgPSBbXCJvbmlvblwiLCBcInRvbWF0b1wiLCBcInNhbGFkXCJdO1xyXG5sZXQgbWl4ID0gW107XHJcbm1peC5wdXNoKC4uLmZydWl0cywgLi4udmVnZXRhYmxlcyk7XHJcbmNvbnNvbGUubG9nKG1peCk7XHJcblxyXG5yZXF1aXJlKFwiLi96YWRhbmllMDNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ }),

/***/ "./js/zadanie03.js":
/*!*************************!*\
  !*** ./js/zadanie03.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let people = [\r\n    {\r\n        person: \"Kim Yoo Suk\",\r\n        profession: \"tyczkarz\"\r\n    },\r\n    {\r\n        person: \"Sue Yoo\",\r\n        profession: \"prawnik\"\r\n    },\r\n    {\r\n        person: \"Dr. Alden Cockburn\",\r\n        profession: \"urolog\"\r\n    },\r\n    {\r\n        person: \"Rusty Kuntz\",\r\n        profession: \"trener\"\r\n    }\r\n];\r\nconsole.log(\"Zadanie 03:\");\r\n\r\nfunction setFunnyName(...param) {\r\n    people.push(...people, ...param)\r\n}\r\n\r\nsetFunnyName({person: \"Antoni\", profession: \"drwal\"}, {person: \"Janusz\", profession: \"kierowca\"});\r\nconsole.log(people);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy96YWRhbmllMDMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy96YWRhbmllMDMuanM/MTc4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcGVvcGxlID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBlcnNvbjogXCJLaW0gWW9vIFN1a1wiLFxyXG4gICAgICAgIHByb2Zlc3Npb246IFwidHljemthcnpcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwZXJzb246IFwiU3VlIFlvb1wiLFxyXG4gICAgICAgIHByb2Zlc3Npb246IFwicHJhd25pa1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBlcnNvbjogXCJEci4gQWxkZW4gQ29ja2J1cm5cIixcclxuICAgICAgICBwcm9mZXNzaW9uOiBcInVyb2xvZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBlcnNvbjogXCJSdXN0eSBLdW50elwiLFxyXG4gICAgICAgIHByb2Zlc3Npb246IFwidHJlbmVyXCJcclxuICAgIH1cclxuXTtcclxuY29uc29sZS5sb2coXCJaYWRhbmllIDAzOlwiKTtcclxuXHJcbmZ1bmN0aW9uIHNldEZ1bm55TmFtZSguLi5wYXJhbSkge1xyXG4gICAgcGVvcGxlLnB1c2goLi4ucGVvcGxlLCAuLi5wYXJhbSlcclxufVxyXG5cclxuc2V0RnVubnlOYW1lKHtwZXJzb246IFwiQW50b25pXCIsIHByb2Zlc3Npb246IFwiZHJ3YWxcIn0sIHtwZXJzb246IFwiSmFudXN6XCIsIHByb2Zlc3Npb246IFwia2llcm93Y2FcIn0pO1xyXG5jb25zb2xlLmxvZyhwZW9wbGUpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/zadanie03.js\n");

/***/ })

/******/ });