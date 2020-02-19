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

eval("document.addEventListener('DOMContentLoaded', function () {\r\n\r\n    const x = 5;\r\n    let y = 3;\r\n\r\n    for (var i = 0; i < 10; i++) {\r\n        console.log(i, y);\r\n    }\r\n    console.log(i, y);\r\n\r\n    function myFn(param1) {\r\n        let y = 4;\r\n        let i = 20;\r\n        console.log(param1, y, i);\r\n\r\n\r\n    }\r\n    myFn(i)\r\n\r\n    console.log(x);\r\n    {\r\n        let y = 25;\r\n        console.log(y);\r\n        var z = 50;\r\n\r\n    }\r\n\r\n    console.log(z, y);\r\n\r\n    //Task 0\r\n    const a = 5;\r\n    let b = 5;\r\n\r\n    for(let i=0; i<1; i++) {\r\n        //error a = 3;\r\n        b = 3; //nadpisało\r\n        console.log(\"Zasięg const w pętli\", a);\r\n        console.log(\"Zasięg let w pętli\", b);\r\n    }\r\n    function Test(a, b) {\r\n        a = 2; //nadpisało\r\n        b = 2; //nadpisało\r\n        console.log(\"Zasięg const w funkcji\", a);\r\n        console.log(\"Zasięg let w funkcji\", b);\r\n    }\r\n    Test(a,b);\r\n\r\n    {\r\n        b = 4; //nie zmieniło się\r\n        c = 4; //nadpisało\r\n        console.log(\"Zasięg const w bloku\", a);\r\n        console.log(\"Zasięg let w bloku\", b);\r\n    }\r\n\r\n    __webpack_require__(/*! ./zadanie01 */ \"./js/zadanie01.js\");\r\n    __webpack_require__(/*! ./zadanie02 */ \"./js/zadanie02.js\");\r\n\r\n    //Task 3\r\n    for(var i=0; i<=11; i++)\r\n        console.log(i);\r\n\r\n    console.log(i); //zmienna i została wypisana zwiększona o 1 poza pętlą\r\n\r\n    for(let j=0; j<=11; j++)\r\n        console.log(j);\r\n\r\n    //console.log(j); //komunikat o niezdefiniowanej zmiennej j\r\n\r\n    __webpack_require__(/*! ./zadanie04 */ \"./js/zadanie04.js\");\r\n\r\n    //Task 4\r\n     (function() {\r\n        console.log(\"hello world\");\r\n    } ());\r\n\r\n    //Task 6\r\n    var printName = (function(name) {\r\n        return {\r\n            getName: function() {\r\n                return name;\r\n            }\r\n        }\r\n    })(\"Mateusz\");\r\n\r\n    console.log(printName.getName());\r\n\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IHggPSA1O1xyXG4gICAgbGV0IHkgPSAzO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGksIHkpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coaSwgeSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbXlGbihwYXJhbTEpIHtcclxuICAgICAgICBsZXQgeSA9IDQ7XHJcbiAgICAgICAgbGV0IGkgPSAyMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbTEsIHksIGkpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBteUZuKGkpXHJcblxyXG4gICAgY29uc29sZS5sb2coeCk7XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHkgPSAyNTtcclxuICAgICAgICBjb25zb2xlLmxvZyh5KTtcclxuICAgICAgICB2YXIgeiA9IDUwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh6LCB5KTtcclxuXHJcbiAgICAvL1phZGFuaWUgIzBcclxuICAgIGNvbnNvbGUubG9nKFwiWmFkYW5pZSAwOlwiKTtcclxuICAgIGNvbnN0IGEgPSA1O1xyXG4gICAgbGV0IGIgPSA1O1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPDE7IGkrKykge1xyXG4gICAgICAgIC8vZXJyb3IgYSA9IDM7XHJcbiAgICAgICAgYiA9IDM7IC8vbmFkcGlzYcWCb1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWmFzacSZZyBjb25zdCB3IHDEmXRsaVwiLCBhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlphc2nEmWcgbGV0IHcgcMSZdGxpXCIsIGIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gVGVzdChhLCBiKSB7XHJcbiAgICAgICAgYSA9IDI7IC8vbmFkcGlzYcWCb1xyXG4gICAgICAgIGIgPSAyOyAvL25hZHBpc2HFgm9cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlphc2nEmWcgY29uc3QgdyBmdW5rY2ppXCIsIGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWmFzacSZZyBsZXQgdyBmdW5rY2ppXCIsIGIpO1xyXG4gICAgfVxyXG4gICAgVGVzdChhLGIpO1xyXG5cclxuICAgIHtcclxuICAgICAgICBiID0gNDsgLy9uaWUgem1pZW5pxYJvIHNpxJlcclxuICAgICAgICBjID0gNDsgLy9uYWRwaXNhxYJvXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJaYXNpxJlnIGNvbnN0IHcgYmxva3VcIiwgYSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJaYXNpxJlnIGxldCB3IGJsb2t1XCIsIGIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVpcmUoXCIuL3phZGFuaWUwMVwiKTtcclxuICAgIHJlcXVpcmUoXCIuL3phZGFuaWUwMlwiKTtcclxuXHJcbiAgICAvL1phZGFuaWUgIzAzXHJcbiAgICBjb25zb2xlLmxvZyhcIlphZGFuaWUgMDM6XCIpO1xyXG4gICAgZm9yKHZhciBpPTA7IGk8PTExOyBpKyspXHJcbiAgICAgICAgY29uc29sZS5sb2coaSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coaSk7IC8vem1pZW5uYSBpIHpvc3RhxYJhIHd5cGlzYW5hIHp3acSZa3N6b25hIG8gMSBwb3phIHDEmXRsxIVcclxuXHJcbiAgICBmb3IobGV0IGo9MDsgajw9MTE7IGorKylcclxuICAgICAgICBjb25zb2xlLmxvZyhqKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGopOyAvL2tvbXVuaWthdCBvIG5pZXpkZWZpbmlvd2FuZWogem1pZW5uZWogalxyXG5cclxuICAgIHJlcXVpcmUoXCIuL3phZGFuaWUwNFwiKTtcclxuXHJcbiAgICAvL1phZGFuaWUgIzA1XHJcbiAgICBjb25zb2xlLmxvZyhcIlphZGFuaWUgMDU6XCIpO1xyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XHJcbiAgICB9ICgpKTtcclxuXHJcbiAgICAvL1phZGFuaWUgIzA2XHJcbiAgICBjb25zb2xlLmxvZyhcIlphZGFuaWUgMDY6XCIpO1xyXG4gICAgdmFyIHByaW50TmFtZSA9IChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0TmFtZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pKFwiVG9tZWtcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJpbnROYW1lLmdldE5hbWUoKSk7XHJcblxyXG59KSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ }),

/***/ "./js/zadanie01.js":
/*!*************************!*\
  !*** ./js/zadanie01.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//I. Sprawdź najpierw zasięg let\r\nlet numbers = [2, 3, 4];\r\n{\r\n    //A1 - wypisuję zmienną numbers przed deklaracją\r\n    //Wynik w konsoli to TODO: tablica numbers\r\n    //Dlaczego taki wynik? TODO: zmienna jest globalna\r\n    console.log(numbers);\r\n\r\n    //A2 - wypisuję zmienną numbers po deklaracji\r\n    //Wynik w konsoli to TODO: tablica numbers\r\n    //Dlaczego taki wynik? TODO: zmienna jest globalna\r\n    console.log(numbers);\r\n}\r\n\r\n//A3 - wypisuję zmienną numbers za blokiem\r\n//Wynik w konsoli to TODO: tablica numbers\r\n//Dlaczego taki wynik? TODO: zmienna jest globalna\r\nconsole.log(numbers);\r\n\r\n\r\n\r\n//II. Sprawdź teraz  zasięg const\r\nconst PI = 3.14;\r\n{\r\n    //A1 - wypisuję zmienną PI przed deklaracją\r\n    //Wynik w konsoli to TODO: zmienna PI\r\n    //Dlaczego taki wynik? TODO: zmienna globalna\r\n    console.log(PI);\r\n\r\n    //A2 - wypisuję zmienną PI po deklaracji\r\n    //Wynik w konsoli to TODO: zmienna PI\r\n    //Dlaczego taki wynik? TODO: zmienna globalna\r\n    console.log(PI);\r\n}\r\n\r\n//A3 - wypisuję zmienną PI za blokiem\r\n//Wynik w konsoli to TODO: zmienna PI\r\n//Dlaczego taki wynik? TODO: zmienna globalna\r\nconsole.log(PI);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy96YWRhbmllMDEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy96YWRhbmllMDEuanM/NTA2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0kuIFNwcmF3ZMW6IG5hanBpZXJ3IHphc2nEmWcgbGV0XHJcbmNvbnNvbGUubG9nKFwiWmFkYW5pZSAjMTpcIik7XHJcbmxldCBudW1iZXJzID0gWzIsIDMsIDRdO1xyXG57XHJcbiAgICAvL0ExIC0gd3lwaXN1asSZIHptaWVubsSFIG51bWJlcnMgcHJ6ZWQgZGVrbGFyYWNqxIVcclxuICAgIC8vV3luaWsgdyBrb25zb2xpIHRvIFRPRE86IHRhYmxpY2EgbnVtYmVyc1xyXG4gICAgLy9EbGFjemVnbyB0YWtpIHd5bmlrPyBUT0RPOiB6bWllbm5hIGplc3QgZ2xvYmFsbmFcclxuICAgIGNvbnNvbGUubG9nKG51bWJlcnMpO1xyXG5cclxuICAgIC8vQTIgLSB3eXBpc3VqxJkgem1pZW5uxIUgbnVtYmVycyBwbyBkZWtsYXJhY2ppXHJcbiAgICAvL1d5bmlrIHcga29uc29saSB0byBUT0RPOiB0YWJsaWNhIG51bWJlcnNcclxuICAgIC8vRGxhY3plZ28gdGFraSB3eW5paz8gVE9ETzogem1pZW5uYSBqZXN0IGdsb2JhbG5hXHJcbiAgICBjb25zb2xlLmxvZyhudW1iZXJzKTtcclxufVxyXG5cclxuLy9BMyAtIHd5cGlzdWrEmSB6bWllbm7EhSBudW1iZXJzIHphIGJsb2tpZW1cclxuLy9XeW5payB3IGtvbnNvbGkgdG8gVE9ETzogdGFibGljYSBudW1iZXJzXHJcbi8vRGxhY3plZ28gdGFraSB3eW5paz8gVE9ETzogem1pZW5uYSBqZXN0IGdsb2JhbG5hXHJcbmNvbnNvbGUubG9nKG51bWJlcnMpO1xyXG5cclxuXHJcblxyXG4vL0lJLiBTcHJhd2TFuiB0ZXJheiAgemFzacSZZyBjb25zdFxyXG5jb25zdCBQSSA9IDMuMTQ7XHJcbntcclxuICAgIC8vQTEgLSB3eXBpc3VqxJkgem1pZW5uxIUgUEkgcHJ6ZWQgZGVrbGFyYWNqxIVcclxuICAgIC8vV3luaWsgdyBrb25zb2xpIHRvIFRPRE86IHptaWVubmEgUElcclxuICAgIC8vRGxhY3plZ28gdGFraSB3eW5paz8gVE9ETzogem1pZW5uYSBnbG9iYWxuYVxyXG4gICAgY29uc29sZS5sb2coUEkpO1xyXG5cclxuICAgIC8vQTIgLSB3eXBpc3VqxJkgem1pZW5uxIUgUEkgcG8gZGVrbGFyYWNqaVxyXG4gICAgLy9XeW5payB3IGtvbnNvbGkgdG8gVE9ETzogem1pZW5uYSBQSVxyXG4gICAgLy9EbGFjemVnbyB0YWtpIHd5bmlrPyBUT0RPOiB6bWllbm5hIGdsb2JhbG5hXHJcbiAgICBjb25zb2xlLmxvZyhQSSk7XHJcbn1cclxuXHJcbi8vQTMgLSB3eXBpc3VqxJkgem1pZW5uxIUgUEkgemEgYmxva2llbVxyXG4vL1d5bmlrIHcga29uc29saSB0byBUT0RPOiB6bWllbm5hIFBJXHJcbi8vRGxhY3plZ28gdGFraSB3eW5paz8gVE9ETzogem1pZW5uYSBnbG9iYWxuYVxyXG5jb25zb2xlLmxvZyhQSSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/zadanie01.js\n");

/***/ }),

/***/ "./js/zadanie02.js":
/*!*************************!*\
  !*** ./js/zadanie02.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let character = \"księżniczka\";\r\nlet timeOfDay = \"dzień\";\r\nconst lover = 'Shrek';\r\n\r\n{\r\n    let timeOfDay = \"noc\";\r\n    let character = \"ogrzyca\";\r\n    console.log(\"Teraz jest: \" + timeOfDay + \" i Fiona to: \" + character + \", a jej ukochany to: \" + lover);\r\n    // TODO: noc + ogrzyca - ponieważ zmienne zostały nadpisane lokalnie\r\n}\r\n\r\nconsole.log(\"Teraz jest: \" + timeOfDay + \" i Fiona to: \" + character + \", a jej ukochany to: \" + lover);\r\n// TODO: dzień + księżniczka - ponieważ log odwołuje się do zmiennych globalnych\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy96YWRhbmllMDIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy96YWRhbmllMDIuanM/MjgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIlphZGFuaWUgMDI6XCIpO1xyXG5sZXQgY2hhcmFjdGVyID0gXCJrc2nEmcW8bmljemthXCI7XHJcbmxldCB0aW1lT2ZEYXkgPSBcImR6aWXFhFwiO1xyXG5jb25zdCBsb3ZlciA9ICdTaHJlayc7XHJcblxyXG57XHJcbiAgICBsZXQgdGltZU9mRGF5ID0gXCJub2NcIjtcclxuICAgIGxldCBjaGFyYWN0ZXIgPSBcIm9ncnp5Y2FcIjtcclxuICAgIGNvbnNvbGUubG9nKFwiVGVyYXogamVzdDogXCIgKyB0aW1lT2ZEYXkgKyBcIiBpIEZpb25hIHRvOiBcIiArIGNoYXJhY3RlciArIFwiLCBhIGplaiB1a29jaGFueSB0bzogXCIgKyBsb3Zlcik7XHJcbiAgICAvLyBUT0RPOiBub2MgKyBvZ3J6eWNhIC0gcG9uaWV3YcW8IHptaWVubmUgem9zdGHFgnkgbmFkcGlzYW5lIGxva2FsbmllXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwiVGVyYXogamVzdDogXCIgKyB0aW1lT2ZEYXkgKyBcIiBpIEZpb25hIHRvOiBcIiArIGNoYXJhY3RlciArIFwiLCBhIGplaiB1a29jaGFueSB0bzogXCIgKyBsb3Zlcik7XHJcbi8vIFRPRE86IGR6aWXFhCArIGtzacSZxbxuaWN6a2EgLSBwb25pZXdhxbwgbG9nIG9kd2/FgnVqZSBzacSZIGRvIHptaWVubnljaCBnbG9iYWxueWNoXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/zadanie02.js\n");

/***/ }),

/***/ "./js/zadanie04.js":
/*!*************************!*\
  !*** ./js/zadanie04.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.\r\nconst name = \"Agata\";\r\n//name = \"Darek\";\r\n//nie da się nadpisać zmiennej const\r\n\r\n\r\n//TODO:\r\n//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.\r\n//b) spróbuj dodać nową wartość do tablicy\r\n//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray\r\nconst simpleArray = [1, 2, 3, 4];\r\n//simpleArray = [2, 3, 4, 5]; //błąd przy próbie nadpisania zmiennej\r\nsimpleArray.push(5);\r\nsimpleArray[0] = 2;\r\nconsole.log(simpleArray);\r\n//a) nie da się nadpisać\r\n//b) da się powiększyć tablicę\r\n//c) da się edytować tablicę\r\n\r\n\r\n//TODO:\r\n//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.\r\n//b) spróbuj zmienić właśność skill obiektu dog\r\n//c) spróbuj dodać nową własność do obiektu dog np. age\r\nconst dog = {\r\n    name: \"Puszek\",\r\n    skill: \"killing\"\r\n}\r\n/*\r\ndog = {\r\n    name: \"Bob\",\r\n    skill: \"eating\"\r\n}\r\n*/\r\ndog.skill = \"sleeping\";\r\ndog.age = 12;\r\nconsole.log(dog);\r\n//a) nie da się nadpisać zmiennej\r\n//b) da się zmienić własność obiektu\r\n//c) da się dodać nową własność do obiektu\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy96YWRhbmllMDQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy96YWRhbmllMDQuanM/NTZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIlphZGFuaWUgMDQ6XCIpO1xyXG4vL1RPRE86IHNwcsOzYnVqIHptaWVuacSHIHptaWVubsSFIG5hbWUgbmFkcGlzdWrEhcSHIGrEhSBuacW8ZWogaW5ueW0gaW1pZW5pZW0uXHJcbmNvbnN0IG5hbWUgPSBcIkFnYXRhXCI7XHJcbi8vbmFtZSA9IFwiRGFyZWtcIjtcclxuLy9uaWUgZGEgc2nEmSBuYWRwaXNhxIcgem1pZW5uZWogY29uc3RcclxuXHJcblxyXG4vL1RPRE86XHJcbi8vYSkgc3Byw7NidWogem1pZW5pxIcgem1pZW5uxIUgc2ltcGxlQXJyYXkgbmFkcGlzdWrEhcSHIGrEhSBuacW8ZWogaW5uxIUgdGFibGljxIUuXHJcbi8vYikgc3Byw7NidWogZG9kYcSHIG5vd8SFIHdhcnRvxZvEhyBkbyB0YWJsaWN5XHJcbi8vYykgc3Byw7NidWogem1pZW5pxIcga3TDs3LEhWtvbHdpZWsgd2FydG/Fm8SHIHogdGFibGljeSBzaW1wbGVBcnJheVxyXG5jb25zdCBzaW1wbGVBcnJheSA9IFsxLCAyLCAzLCA0XTtcclxuLy9zaW1wbGVBcnJheSA9IFsyLCAzLCA0LCA1XTsgLy9ixYLEhWQgcHJ6eSBwcsOzYmllIG5hZHBpc2FuaWEgem1pZW5uZWpcclxuc2ltcGxlQXJyYXkucHVzaCg1KTtcclxuc2ltcGxlQXJyYXlbMF0gPSAyO1xyXG5jb25zb2xlLmxvZyhzaW1wbGVBcnJheSk7XHJcbi8vYSkgbmllIGRhIHNpxJkgbmFkcGlzYcSHXHJcbi8vYikgZGEgc2nEmSBwb3dpxJlrc3p5xIcgdGFibGljxJlcclxuLy9jKSBkYSBzacSZIGVkeXRvd2HEhyB0YWJsaWPEmVxyXG5cclxuXHJcbi8vVE9ETzpcclxuLy9hKSBzcHLDs2J1aiB6bWllbmnEhyB6bWllbm7EhSBkb2cgbmFkcGlzdWrEhcSHIGrEhSBuacW8ZWogaW5ueW0gb2JpZWt0ZW0uXHJcbi8vYikgc3Byw7NidWogem1pZW5pxIcgd8WCYcWbbm/Fm8SHIHNraWxsIG9iaWVrdHUgZG9nXHJcbi8vYykgc3Byw7NidWogZG9kYcSHIG5vd8SFIHfFgmFzbm/Fm8SHIGRvIG9iaWVrdHUgZG9nIG5wLiBhZ2VcclxuY29uc3QgZG9nID0ge1xyXG4gICAgbmFtZTogXCJQdXN6ZWtcIixcclxuICAgIHNraWxsOiBcImtpbGxpbmdcIlxyXG59XHJcbi8qXHJcbmRvZyA9IHtcclxuICAgIG5hbWU6IFwiQm9iXCIsXHJcbiAgICBza2lsbDogXCJlYXRpbmdcIlxyXG59XHJcbiovXHJcbmRvZy5za2lsbCA9IFwic2xlZXBpbmdcIjtcclxuZG9nLmFnZSA9IDEyO1xyXG5jb25zb2xlLmxvZyhkb2cpO1xyXG4vL2EpIG5pZSBkYSBzacSZIG5hZHBpc2HEhyB6bWllbm5lalxyXG4vL2IpIGRhIHNpxJkgem1pZW5pxIcgd8WCYXNub8WbxIcgb2JpZWt0dVxyXG4vL2MpIGRhIHNpxJkgZG9kYcSHIG5vd8SFIHfFgmFzbm/Fm8SHIGRvIG9iaWVrdHVcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/zadanie04.js\n");

/***/ })

/******/ });