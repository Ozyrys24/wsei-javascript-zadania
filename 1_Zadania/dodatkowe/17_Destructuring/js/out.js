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
/***/ (function(module, exports) {

eval("//Zadanie #0a\r\nconsole.log(\"Zadanie 0a:\");\r\n\r\nvar [a, , z] = [\"snow\", \"rain\", \"sun\"];\r\nconsole.log(a);\r\nconsole.log(z);\r\n\r\n//Zadanie #0b\r\nconsole.log(\"Zadanie 0b:\");\r\n\r\nconst slider = {\r\n    type: \"infinite\",\r\n    numberOfItems: 10,\r\n    center: true,\r\n    autoStart: true\r\n}\r\n\r\nvar {type, autoStart} = slider;\r\nconsole.log(type);\r\nconsole.log(autoStart);\r\n\r\n//Zadanie #1\r\nconsole.log(\"Zadanie 1:\");\r\nconst names = [\"Zdzisław\", \"Bogusław\", \"Kazimierz\"];\r\nvar [name1, name2, name3] = names;\r\nconsole.log(name1);\r\nconsole.log(name2);\r\nconsole.log(name3);\r\n\r\n\r\n//Zadanie #2\r\nconsole.log(\"Zadanie 2:\");\r\n\r\nfunction generateRandomNumbers() {\r\n    let numbers = [];\r\n    for(let i=0; i<6; i++)\r\n        numbers.push(Math.round(Math.random() * 10));\r\n    return numbers;\r\n}\r\n/*\r\nconst test = generateRandomNumbers();\r\nconsole.log(test);\r\nvar [num1, , num3] = test;\r\n*/\r\nvar [num1, , num3] = generateRandomNumbers();\r\nconsole.log(num1);\r\nconsole.log(num3);\r\n\r\n//Zadanie #4\r\nconsole.log(\"Zadanie 4:\");\r\n\r\nfunction getAnimal() {\r\n    return {\r\n        name: \"Mruczek\",\r\n        age: 10,\r\n        getVoice: () => \"miau miau\"\r\n    }\r\n}\r\n\r\nvar {name, getVoice} = getAnimal();\r\nconst catName = name;\r\nconst catVoice = getVoice();\r\nconsole.log(catName);\r\nconsole.log(catVoice);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1phZGFuaWUgIzBhXHJcbmNvbnNvbGUubG9nKFwiWmFkYW5pZSAwYTpcIik7XHJcblxyXG52YXIgW2EsICwgel0gPSBbXCJzbm93XCIsIFwicmFpblwiLCBcInN1blwiXTtcclxuY29uc29sZS5sb2coYSk7XHJcbmNvbnNvbGUubG9nKHopO1xyXG5cclxuLy9aYWRhbmllICMwYlxyXG5jb25zb2xlLmxvZyhcIlphZGFuaWUgMGI6XCIpO1xyXG5cclxuY29uc3Qgc2xpZGVyID0ge1xyXG4gICAgdHlwZTogXCJpbmZpbml0ZVwiLFxyXG4gICAgbnVtYmVyT2ZJdGVtczogMTAsXHJcbiAgICBjZW50ZXI6IHRydWUsXHJcbiAgICBhdXRvU3RhcnQ6IHRydWVcclxufVxyXG5cclxudmFyIHt0eXBlLCBhdXRvU3RhcnR9ID0gc2xpZGVyO1xyXG5jb25zb2xlLmxvZyh0eXBlKTtcclxuY29uc29sZS5sb2coYXV0b1N0YXJ0KTtcclxuXHJcbi8vWmFkYW5pZSAjMVxyXG5jb25zb2xlLmxvZyhcIlphZGFuaWUgMTpcIik7XHJcbmNvbnN0IG5hbWVzID0gW1wiWmR6aXPFgmF3XCIsIFwiQm9ndXPFgmF3XCIsIFwiS2F6aW1pZXJ6XCJdO1xyXG52YXIgW25hbWUxLCBuYW1lMiwgbmFtZTNdID0gbmFtZXM7XHJcbmNvbnNvbGUubG9nKG5hbWUxKTtcclxuY29uc29sZS5sb2cobmFtZTIpO1xyXG5jb25zb2xlLmxvZyhuYW1lMyk7XHJcblxyXG5cclxuLy9aYWRhbmllICMyXHJcbmNvbnNvbGUubG9nKFwiWmFkYW5pZSAyOlwiKTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVycygpIHtcclxuICAgIGxldCBudW1iZXJzID0gW107XHJcbiAgICBmb3IobGV0IGk9MDsgaTw2OyBpKyspXHJcbiAgICAgICAgbnVtYmVycy5wdXNoKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSk7XHJcbiAgICByZXR1cm4gbnVtYmVycztcclxufVxyXG4vKlxyXG5jb25zdCB0ZXN0ID0gZ2VuZXJhdGVSYW5kb21OdW1iZXJzKCk7XHJcbmNvbnNvbGUubG9nKHRlc3QpO1xyXG52YXIgW251bTEsICwgbnVtM10gPSB0ZXN0O1xyXG4qL1xyXG52YXIgW251bTEsICwgbnVtM10gPSBnZW5lcmF0ZVJhbmRvbU51bWJlcnMoKTtcclxuY29uc29sZS5sb2cobnVtMSk7XHJcbmNvbnNvbGUubG9nKG51bTMpO1xyXG5cclxuLy9aYWRhbmllICM0XHJcbmNvbnNvbGUubG9nKFwiWmFkYW5pZSA0OlwiKTtcclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hbCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJNcnVjemVrXCIsXHJcbiAgICAgICAgYWdlOiAxMCxcclxuICAgICAgICBnZXRWb2ljZTogKCkgPT4gXCJtaWF1IG1pYXVcIlxyXG4gICAgfVxyXG59XHJcblxyXG52YXIge25hbWUsIGdldFZvaWNlfSA9IGdldEFuaW1hbCgpO1xyXG5jb25zdCBjYXROYW1lID0gbmFtZTtcclxuY29uc3QgY2F0Vm9pY2UgPSBnZXRWb2ljZSgpO1xyXG5jb25zb2xlLmxvZyhjYXROYW1lKTtcclxuY29uc29sZS5sb2coY2F0Vm9pY2UpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ })

/******/ });