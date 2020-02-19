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

eval("document.addEventListener('DOMContentLoaded', function () {\r\n\r\n    const array = [2, 15, 268, 288, [358, 2, 14, 256], 586];\r\n    // var sorted= array.sort((a,b)=>a-b);\r\n    // // console.log(sorted);\r\n    // // var newVar = array.flat();\r\n    // // console.log(newVar);\r\n    // newVar.sort((a,b)=>a-b);\r\n    var flat = array.flat();\r\n    flat.sort((a, b) => a - b);\r\n    console.log(flat);\r\n    var newFlat = flat.map((element) => element * 2);\r\n    console.log(newFlat);\r\n    var newVar = newFlat.reduce((a, b) => a * b);\r\n    console.log(newVar);\r\n\r\n    const blocks = document.getElementsByClassName(\"cite\");\r\n//Zadanie #0\r\n    const person = {\r\n        name: \"Vlad\",\r\n        lastName: \"Drăculea\",\r\n        yearOfBirth: 1431,\r\n        proffesion: \"Lord of Wallachia\"\r\n      };\r\n      \r\n      blocks[0].innerHTML = whoAreYou(person);\r\n\r\n//Zadanie #1\r\nconsole.log(\"Zadanie 1:\");\r\nconst a = 2;\r\nconst b = 4;\r\nconsole.log(`Suma dwóch liczb ${a} i ${b} to: ${a+b}`);\r\n\r\n//Zadanie #2\r\nconsole.log(\"Zadanie 2:\");\r\nlet name = \"Tomasz\";\r\nconsole.log(`Moje imię i nazwisko to: ${name+ \" Orpik\"}`);\r\n\r\n//Zadanie #3\r\nconsole.log(\"Zadanie 3:\");\r\nconsole.log(writeText());\r\n\r\n//Zadanie #4\r\nconsole.log(\"Zadanie 4:\");\r\n\r\nconst button = {\r\n    value: \"Send message\",\r\n    idName: \"sendMsg\",\r\n    width: \"100px\",\r\n    padding: \"20px\",\r\n  }\r\n\r\nconsole.log(`To jest button.\r\nJego szerokość to ${parseInt(button.width)+2*(parseInt(button.padding))}px.\r\nNapis, który na nim widnieje to \"${button.value}\"`);\r\n\r\n})\r\n//funkcja do zadania 0\r\nfunction whoAreYou(object) {\r\n     return `My name is ${object.name} ${object.lastName}. <br />\r\n             I am ${new Date().getFullYear()-object.yearOfBirth} years old. <br />\r\n             My profession is ${object.proffesion}`;\r\n}\r\n//funkcja do zadania 3\r\nfunction writeText() {\r\n    return `\"Myślę, że jest wiele piękna\r\nW posiadaniu problemów.\r\nTo jeden ze sposobów w jaki się uczymy\"\r\nHerbie Hancock`;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IGFycmF5ID0gWzIsIDE1LCAyNjgsIDI4OCwgWzM1OCwgMiwgMTQsIDI1Nl0sIDU4Nl07XHJcbiAgICAvLyB2YXIgc29ydGVkPSBhcnJheS5zb3J0KChhLGIpPT5hLWIpO1xyXG4gICAgLy8gLy8gY29uc29sZS5sb2coc29ydGVkKTtcclxuICAgIC8vIC8vIHZhciBuZXdWYXIgPSBhcnJheS5mbGF0KCk7XHJcbiAgICAvLyAvLyBjb25zb2xlLmxvZyhuZXdWYXIpO1xyXG4gICAgLy8gbmV3VmFyLnNvcnQoKGEsYik9PmEtYik7XHJcbiAgICB2YXIgZmxhdCA9IGFycmF5LmZsYXQoKTtcclxuICAgIGZsYXQuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgY29uc29sZS5sb2coZmxhdCk7XHJcbiAgICB2YXIgbmV3RmxhdCA9IGZsYXQubWFwKChlbGVtZW50KSA9PiBlbGVtZW50ICogMik7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdGbGF0KTtcclxuICAgIHZhciBuZXdWYXIgPSBuZXdGbGF0LnJlZHVjZSgoYSwgYikgPT4gYSAqIGIpO1xyXG4gICAgY29uc29sZS5sb2cobmV3VmFyKTtcclxuXHJcbiAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2l0ZVwiKTtcclxuLy9aYWRhbmllICMwXHJcbiAgICBjb25zdCBwZXJzb24gPSB7XHJcbiAgICAgICAgbmFtZTogXCJWbGFkXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiRHLEg2N1bGVhXCIsXHJcbiAgICAgICAgeWVhck9mQmlydGg6IDE0MzEsXHJcbiAgICAgICAgcHJvZmZlc2lvbjogXCJMb3JkIG9mIFdhbGxhY2hpYVwiXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBibG9ja3NbMF0uaW5uZXJIVE1MID0gd2hvQXJlWW91KHBlcnNvbik7XHJcblxyXG4vL1phZGFuaWUgIzFcclxuY29uc29sZS5sb2coXCJaYWRhbmllIDE6XCIpO1xyXG5jb25zdCBhID0gMjtcclxuY29uc3QgYiA9IDQ7XHJcbmNvbnNvbGUubG9nKGBTdW1hIGR3w7NjaCBsaWN6YiAke2F9IGkgJHtifSB0bzogJHthK2J9YCk7XHJcblxyXG4vL1phZGFuaWUgIzJcclxuY29uc29sZS5sb2coXCJaYWRhbmllIDI6XCIpO1xyXG5sZXQgbmFtZSA9IFwiVG9tYXN6XCI7XHJcbmNvbnNvbGUubG9nKGBNb2plIGltacSZIGkgbmF6d2lza28gdG86ICR7bmFtZSsgXCIgT3JwaWtcIn1gKTtcclxuXHJcbi8vWmFkYW5pZSAjM1xyXG5jb25zb2xlLmxvZyhcIlphZGFuaWUgMzpcIik7XHJcbmNvbnNvbGUubG9nKHdyaXRlVGV4dCgpKTtcclxuXHJcbi8vWmFkYW5pZSAjNFxyXG5jb25zb2xlLmxvZyhcIlphZGFuaWUgNDpcIik7XHJcblxyXG5jb25zdCBidXR0b24gPSB7XHJcbiAgICB2YWx1ZTogXCJTZW5kIG1lc3NhZ2VcIixcclxuICAgIGlkTmFtZTogXCJzZW5kTXNnXCIsXHJcbiAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgfVxyXG5cclxuY29uc29sZS5sb2coYFRvIGplc3QgYnV0dG9uLlxyXG5KZWdvIHN6ZXJva2/Fm8SHIHRvICR7cGFyc2VJbnQoYnV0dG9uLndpZHRoKSsyKihwYXJzZUludChidXR0b24ucGFkZGluZykpfXB4LlxyXG5OYXBpcywga3TDs3J5IG5hIG5pbSB3aWRuaWVqZSB0byBcIiR7YnV0dG9uLnZhbHVlfVwiYCk7XHJcblxyXG59KVxyXG4vL2Z1bmtjamEgZG8gemFkYW5pYSAwXHJcbmZ1bmN0aW9uIHdob0FyZVlvdShvYmplY3QpIHtcclxuICAgICByZXR1cm4gYE15IG5hbWUgaXMgJHtvYmplY3QubmFtZX0gJHtvYmplY3QubGFzdE5hbWV9LiA8YnIgLz5cclxuICAgICAgICAgICAgIEkgYW0gJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCktb2JqZWN0LnllYXJPZkJpcnRofSB5ZWFycyBvbGQuIDxiciAvPlxyXG4gICAgICAgICAgICAgTXkgcHJvZmVzc2lvbiBpcyAke29iamVjdC5wcm9mZmVzaW9ufWA7XHJcbn1cclxuLy9mdW5rY2phIGRvIHphZGFuaWEgM1xyXG5mdW5jdGlvbiB3cml0ZVRleHQoKSB7XHJcbiAgICByZXR1cm4gYFwiTXnFm2zEmSwgxbxlIGplc3Qgd2llbGUgcGnEmWtuYVxyXG5XIHBvc2lhZGFuaXUgcHJvYmxlbcOzdy5cclxuVG8gamVkZW4gemUgc3Bvc29iw7N3IHcgamFraSBzacSZIHVjenlteVwiXHJcbkhlcmJpZSBIYW5jb2NrYDtcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ })

/******/ });