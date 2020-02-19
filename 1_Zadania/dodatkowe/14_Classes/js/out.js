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

eval("//Zadanie #00\r\nconsole.log(\"Zadanie 00:\");\r\n//constructor\r\nclass Vehicle {\r\n    constructor(name, deportment, color) {\r\n        this.name = name;\r\n        this.color = color;\r\n        this.deportment = deportment;\r\n    }\r\n    description() { console.log(this.color + \" \" + this.name + \" \" + this.deportment + \"!\") };\r\n}\r\n\r\nlet Boat = new Vehicle(\"boat\", \"swim\", \"red\");\r\nBoat.description();\r\nlet Car = new Vehicle(\"car\", \"drive\", \"green\");\r\nCar.description();\r\nlet Plane = new Vehicle(\"plane\", \"fly\", \"blue\");\r\nPlane.description();\r\n\r\n//Zadanie #01\r\nconsole.log(\"Zadanie 01:\");\r\n\r\nclass Kaczka {\r\n    constructor(type = \"zwykła kaczka\") { this.type = type; }\r\n    kwacz() { console.log(\"kwa kwa\"); }\r\n    plywaj() { console.log(\"płynę...\"); }\r\n    wyswietl() { console.log(\"Wygląda jak zwykła kaczka\"); }\r\n}\r\n\r\nKaczucha = new Kaczka();\r\nconsole.log(Kaczucha.type);\r\nKaczucha.kwacz();\r\nKaczucha.plywaj();\r\nKaczucha.wyswietl();\r\n\r\n//Zadanie #02\r\nconsole.log(\"Zadanie 02:\");\r\n\r\nclass DzikaKaczka extends Kaczka {\r\n    wyswietl() { this.type = \"dzika\" }\r\n}\r\ndzikaKaczucha = new DzikaKaczka();\r\nconsole.log(\"Stary typ: \"+dzikaKaczucha.type);\r\ndzikaKaczucha.kwacz();\r\ndzikaKaczucha.plywaj();\r\ndzikaKaczucha.wyswietl();\r\nconsole.log(\"Nowy typ: \"+dzikaKaczucha.type);\r\n\r\n//Zadanie #03\r\nconsole.log(\"Zadanie 03:\");\r\n\r\nclass KrzyzowkaKaczka extends Kaczka {\r\n    wyswietl() { this.type = \"krzyżówka\"; }\r\n}\r\nkrzyzoKaczka = new KrzyzowkaKaczka();\r\nconsole.log(\"Stary typ: \"+krzyzoKaczka.type);\r\nkrzyzoKaczka.kwacz();\r\nkrzyzoKaczka.plywaj();\r\nkrzyzoKaczka.wyswietl();\r\nconsole.log(\"Nowy typ: \"+krzyzoKaczka.type);\r\n\r\n//Zadanie #04\r\nconsole.log('Zadanie 04:');\r\n\r\nKaczka.prototype.lec = function() { console.log(\"Lecę\") };\r\nKaczucha.lec();\r\ndzikaKaczucha.lec();\r\nkrzyzoKaczka.lec();\r\n\r\n//Zadanie #05\r\nconsole.log(\"Zadanie 05:\");\r\n\r\nclass GumowaKaczka extends Kaczka { wyswietl() { this.type = \"gumowa\" }; }\r\n\r\ngumowaKaczucha = new GumowaKaczka();\r\nconsole.log(\"Stary typ: \"+gumowaKaczucha.type);\r\ngumowaKaczucha.kwacz();\r\ngumowaKaczucha.plywaj();\r\ngumowaKaczucha.wyswietl();\r\ngumowaKaczucha.lec();\r\nconsole.log(\"Nowy typ: \"+gumowaKaczucha.type);\r\n\r\nGumowaKaczka.prototype.lec = function() { console.log(\"gumowe kaczki nie potrafią latać :(\"); }\r\ngumowaKaczucha.lec();\r\n\r\n__webpack_require__(/*! ./zadanie06 */ \"./js/zadanie06.js\");\r\n__webpack_require__(/*! ./zadanie07 */ \"./js/zadanie07.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1phZGFuaWUgIzAwXHJcbmNvbnNvbGUubG9nKFwiWmFkYW5pZSAwMDpcIik7XHJcbi8vY29uc3RydWN0b3JcclxuY2xhc3MgVmVoaWNsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXBvcnRtZW50LCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuZGVwb3J0bWVudCA9IGRlcG9ydG1lbnQ7XHJcbiAgICB9XHJcbiAgICBkZXNjcmlwdGlvbigpIHsgY29uc29sZS5sb2codGhpcy5jb2xvciArIFwiIFwiICsgdGhpcy5uYW1lICsgXCIgXCIgKyB0aGlzLmRlcG9ydG1lbnQgKyBcIiFcIikgfTtcclxufVxyXG5cclxubGV0IEJvYXQgPSBuZXcgVmVoaWNsZShcImJvYXRcIiwgXCJzd2ltXCIsIFwicmVkXCIpO1xyXG5Cb2F0LmRlc2NyaXB0aW9uKCk7XHJcbmxldCBDYXIgPSBuZXcgVmVoaWNsZShcImNhclwiLCBcImRyaXZlXCIsIFwiZ3JlZW5cIik7XHJcbkNhci5kZXNjcmlwdGlvbigpO1xyXG5sZXQgUGxhbmUgPSBuZXcgVmVoaWNsZShcInBsYW5lXCIsIFwiZmx5XCIsIFwiYmx1ZVwiKTtcclxuUGxhbmUuZGVzY3JpcHRpb24oKTtcclxuXHJcbi8vWmFkYW5pZSAjMDFcclxuY29uc29sZS5sb2coXCJaYWRhbmllIDAxOlwiKTtcclxuXHJcbmNsYXNzIEthY3prYSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlID0gXCJ6d3lrxYJhIGthY3prYVwiKSB7IHRoaXMudHlwZSA9IHR5cGU7IH1cclxuICAgIGt3YWN6KCkgeyBjb25zb2xlLmxvZyhcImt3YSBrd2FcIik7IH1cclxuICAgIHBseXdhaigpIHsgY29uc29sZS5sb2coXCJwxYJ5bsSZLi4uXCIpOyB9XHJcbiAgICB3eXN3aWV0bCgpIHsgY29uc29sZS5sb2coXCJXeWdsxIVkYSBqYWsgend5a8WCYSBrYWN6a2FcIik7IH1cclxufVxyXG5cclxuS2FjenVjaGEgPSBuZXcgS2FjemthKCk7XHJcbmNvbnNvbGUubG9nKEthY3p1Y2hhLnR5cGUpO1xyXG5LYWN6dWNoYS5rd2FjeigpO1xyXG5LYWN6dWNoYS5wbHl3YWooKTtcclxuS2FjenVjaGEud3lzd2lldGwoKTtcclxuXHJcbi8vWmFkYW5pZSAjMDJcclxuY29uc29sZS5sb2coXCJaYWRhbmllIDAyOlwiKTtcclxuXHJcbmNsYXNzIER6aWthS2FjemthIGV4dGVuZHMgS2FjemthIHtcclxuICAgIHd5c3dpZXRsKCkgeyB0aGlzLnR5cGUgPSBcImR6aWthXCIgfVxyXG59XHJcbmR6aWthS2FjenVjaGEgPSBuZXcgRHppa2FLYWN6a2EoKTtcclxuY29uc29sZS5sb2coXCJTdGFyeSB0eXA6IFwiK2R6aWthS2FjenVjaGEudHlwZSk7XHJcbmR6aWthS2FjenVjaGEua3dhY3ooKTtcclxuZHppa2FLYWN6dWNoYS5wbHl3YWooKTtcclxuZHppa2FLYWN6dWNoYS53eXN3aWV0bCgpO1xyXG5jb25zb2xlLmxvZyhcIk5vd3kgdHlwOiBcIitkemlrYUthY3p1Y2hhLnR5cGUpO1xyXG5cclxuLy9aYWRhbmllICMwM1xyXG5jb25zb2xlLmxvZyhcIlphZGFuaWUgMDM6XCIpO1xyXG5cclxuY2xhc3MgS3J6eXpvd2thS2FjemthIGV4dGVuZHMgS2FjemthIHtcclxuICAgIHd5c3dpZXRsKCkgeyB0aGlzLnR5cGUgPSBcImtyennFvMOzd2thXCI7IH1cclxufVxyXG5rcnp5em9LYWN6a2EgPSBuZXcgS3J6eXpvd2thS2FjemthKCk7XHJcbmNvbnNvbGUubG9nKFwiU3RhcnkgdHlwOiBcIitrcnp5em9LYWN6a2EudHlwZSk7XHJcbmtyenl6b0thY3prYS5rd2FjeigpO1xyXG5rcnp5em9LYWN6a2EucGx5d2FqKCk7XHJcbmtyenl6b0thY3prYS53eXN3aWV0bCgpO1xyXG5jb25zb2xlLmxvZyhcIk5vd3kgdHlwOiBcIitrcnp5em9LYWN6a2EudHlwZSk7XHJcblxyXG4vL1phZGFuaWUgIzA0XHJcbmNvbnNvbGUubG9nKCdaYWRhbmllIDA0OicpO1xyXG5cclxuS2FjemthLnByb3RvdHlwZS5sZWMgPSBmdW5jdGlvbigpIHsgY29uc29sZS5sb2coXCJMZWPEmVwiKSB9O1xyXG5LYWN6dWNoYS5sZWMoKTtcclxuZHppa2FLYWN6dWNoYS5sZWMoKTtcclxua3J6eXpvS2FjemthLmxlYygpO1xyXG5cclxuLy9aYWRhbmllICMwNVxyXG5jb25zb2xlLmxvZyhcIlphZGFuaWUgMDU6XCIpO1xyXG5cclxuY2xhc3MgR3Vtb3dhS2FjemthIGV4dGVuZHMgS2FjemthIHsgd3lzd2lldGwoKSB7IHRoaXMudHlwZSA9IFwiZ3Vtb3dhXCIgfTsgfVxyXG5cclxuZ3Vtb3dhS2FjenVjaGEgPSBuZXcgR3Vtb3dhS2FjemthKCk7XHJcbmNvbnNvbGUubG9nKFwiU3RhcnkgdHlwOiBcIitndW1vd2FLYWN6dWNoYS50eXBlKTtcclxuZ3Vtb3dhS2FjenVjaGEua3dhY3ooKTtcclxuZ3Vtb3dhS2FjenVjaGEucGx5d2FqKCk7XHJcbmd1bW93YUthY3p1Y2hhLnd5c3dpZXRsKCk7XHJcbmd1bW93YUthY3p1Y2hhLmxlYygpO1xyXG5jb25zb2xlLmxvZyhcIk5vd3kgdHlwOiBcIitndW1vd2FLYWN6dWNoYS50eXBlKTtcclxuXHJcbkd1bW93YUthY3prYS5wcm90b3R5cGUubGVjID0gZnVuY3Rpb24oKSB7IGNvbnNvbGUubG9nKFwiZ3Vtb3dlIGthY3praSBuaWUgcG90cmFmacSFIGxhdGHEhyA6KFwiKTsgfVxyXG5ndW1vd2FLYWN6dWNoYS5sZWMoKTtcclxuXHJcbnJlcXVpcmUoXCIuL3phZGFuaWUwNlwiKTtcclxucmVxdWlyZShcIi4vemFkYW5pZTA3XCIpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ }),

/***/ "./js/zadanie06.js":
/*!*************************!*\
  !*** ./js/zadanie06.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let foods = [];\r\n\r\nclass Food {\r\n  constructor(name, protein, carbs, fat) {\r\n    this.name = name;\r\n    this.protein = protein;\r\n    this.carbs = carbs;\r\n    this.fat = fat;\r\n  }\r\n  print() { console.log(this.constructor.name+\" name: \"+this.name+\", proteins: \"+this.protein+\", carbs: \"+this.carbs+\", fat: \"+this.fat)}\r\n}\r\nconsole.log(\"Zadanie 06:\");\r\n\r\nconst nameInput = document.getElementById(\"name\");\r\nconst proteinInput = document.getElementById(\"proteins\");\r\nconst carbsInput = document.getElementById(\"carbs\");\r\nconst fatInput = document.getElementById(\"fat\");\r\nconst products = document.getElementById(\"products\");\r\n\r\ndocument.getElementById(\"add\").addEventListener(\"click\", () => {\r\n  if(isNaN(proteinInput.value) || isNaN(carbsInput.value) || isNaN(fatInput.value)) {\r\n    alert(\"Enter numbers!\");\r\n    return;\r\n  }\r\n  const sum = proteinInput.value*4 + carbsInput.value*4 + fatInput.value*9;\r\n  //add element to list\r\n  let product = document.createElement(\"ul\");\r\n  \r\n  let productName = document.createElement(\"li\");\r\n  productName.innerHTML = nameInput.value;\r\n  product.appendChild(productName);\r\n  let productProtein = document.createElement(\"li\");\r\n  productProtein.innerHTML = proteinInput.value;\r\n  product.appendChild(productProtein);\r\n  let productCarbs = document.createElement(\"li\");\r\n  productCarbs.innerHTML = carbsInput.value;\r\n  product.appendChild(productCarbs);\r\n  let productFat = document.createElement(\"li\");\r\n  productFat.innerHTML = fatInput.value;\r\n  product.appendChild(productFat);\r\n\r\n  products.appendChild(product);\r\n  //create object\r\n  let Prod;\r\n  if(sum>=250) {\r\n    class FastFood extends Food { };\r\n    Prod = new FastFood(nameInput.value, proteinInput.value, carbsInput.value, fatInput.value);\r\n    foods.push(Prod);\r\n  } else {\r\n    class FatFreeFood extends Food { };\r\n    Prod = new FatFreeFood(nameInput.value, proteinInput.value, carbsInput.value, fatInput.value);\r\n    foods.push(Prod);\r\n  }\r\n  for(let i=0; i<foods.length; i++)\r\n    foods[i].print();\r\n})\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy96YWRhbmllMDYuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy96YWRhbmllMDYuanM/NGEyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZm9vZHMgPSBbXTtcclxuXHJcbmNsYXNzIEZvb2Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnByb3RlaW4gPSBwcm90ZWluO1xyXG4gICAgdGhpcy5jYXJicyA9IGNhcmJzO1xyXG4gICAgdGhpcy5mYXQgPSBmYXQ7XHJcbiAgfVxyXG4gIHByaW50KCkgeyBjb25zb2xlLmxvZyh0aGlzLmNvbnN0cnVjdG9yLm5hbWUrXCIgbmFtZTogXCIrdGhpcy5uYW1lK1wiLCBwcm90ZWluczogXCIrdGhpcy5wcm90ZWluK1wiLCBjYXJiczogXCIrdGhpcy5jYXJicytcIiwgZmF0OiBcIit0aGlzLmZhdCl9XHJcbn1cclxuY29uc29sZS5sb2coXCJaYWRhbmllIDA2OlwiKTtcclxuXHJcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcclxuY29uc3QgcHJvdGVpbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm90ZWluc1wiKTtcclxuY29uc3QgY2FyYnNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyYnNcIik7XHJcbmNvbnN0IGZhdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYXRcIik7XHJcbmNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0c1wiKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYoaXNOYU4ocHJvdGVpbklucHV0LnZhbHVlKSB8fCBpc05hTihjYXJic0lucHV0LnZhbHVlKSB8fCBpc05hTihmYXRJbnB1dC52YWx1ZSkpIHtcclxuICAgIGFsZXJ0KFwiRW50ZXIgbnVtYmVycyFcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IHN1bSA9IHByb3RlaW5JbnB1dC52YWx1ZSo0ICsgY2FyYnNJbnB1dC52YWx1ZSo0ICsgZmF0SW5wdXQudmFsdWUqOTtcclxuICAvL2FkZCBlbGVtZW50IHRvIGxpc3RcclxuICBsZXQgcHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBcclxuICBsZXQgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgcHJvZHVjdE5hbWUuaW5uZXJIVE1MID0gbmFtZUlucHV0LnZhbHVlO1xyXG4gIHByb2R1Y3QuYXBwZW5kQ2hpbGQocHJvZHVjdE5hbWUpO1xyXG4gIGxldCBwcm9kdWN0UHJvdGVpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBwcm9kdWN0UHJvdGVpbi5pbm5lckhUTUwgPSBwcm90ZWluSW5wdXQudmFsdWU7XHJcbiAgcHJvZHVjdC5hcHBlbmRDaGlsZChwcm9kdWN0UHJvdGVpbik7XHJcbiAgbGV0IHByb2R1Y3RDYXJicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBwcm9kdWN0Q2FyYnMuaW5uZXJIVE1MID0gY2FyYnNJbnB1dC52YWx1ZTtcclxuICBwcm9kdWN0LmFwcGVuZENoaWxkKHByb2R1Y3RDYXJicyk7XHJcbiAgbGV0IHByb2R1Y3RGYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgcHJvZHVjdEZhdC5pbm5lckhUTUwgPSBmYXRJbnB1dC52YWx1ZTtcclxuICBwcm9kdWN0LmFwcGVuZENoaWxkKHByb2R1Y3RGYXQpO1xyXG5cclxuICBwcm9kdWN0cy5hcHBlbmRDaGlsZChwcm9kdWN0KTtcclxuICAvL2NyZWF0ZSBvYmplY3RcclxuICBsZXQgUHJvZDtcclxuICBpZihzdW0+PTI1MCkge1xyXG4gICAgY2xhc3MgRmFzdEZvb2QgZXh0ZW5kcyBGb29kIHsgfTtcclxuICAgIFByb2QgPSBuZXcgRmFzdEZvb2QobmFtZUlucHV0LnZhbHVlLCBwcm90ZWluSW5wdXQudmFsdWUsIGNhcmJzSW5wdXQudmFsdWUsIGZhdElucHV0LnZhbHVlKTtcclxuICAgIGZvb2RzLnB1c2goUHJvZCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNsYXNzIEZhdEZyZWVGb29kIGV4dGVuZHMgRm9vZCB7IH07XHJcbiAgICBQcm9kID0gbmV3IEZhdEZyZWVGb29kKG5hbWVJbnB1dC52YWx1ZSwgcHJvdGVpbklucHV0LnZhbHVlLCBjYXJic0lucHV0LnZhbHVlLCBmYXRJbnB1dC52YWx1ZSk7XHJcbiAgICBmb29kcy5wdXNoKFByb2QpO1xyXG4gIH1cclxuICBmb3IobGV0IGk9MDsgaTxmb29kcy5sZW5ndGg7IGkrKylcclxuICAgIGZvb2RzW2ldLnByaW50KCk7XHJcbn0pXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/zadanie06.js\n");

/***/ }),

/***/ "./js/zadanie07.js":
/*!*************************!*\
  !*** ./js/zadanie07.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"Zadanie 07:\");\r\nclass MenuGenerator {\r\n    constructor(type, items) {\r\n        this.type = type;\r\n        this.items = items;\r\n    }\r\n    getType() { console.log(\"Typ: \"+this.type) }\r\n    showItems() {\r\n        let i=0;\r\n        this.items.forEach(item => {\r\n            console.log(\"Element \"+(++i)+\": \"+item);\r\n        });\r\n    }\r\n}\r\nclass HorizontalMenuGenerator extends MenuGenerator { };\r\nlet hMenuGenerator = new HorizontalMenuGenerator(\"horizontal\", ['start', 'about']);\r\nhMenuGenerator.getType();\r\nhMenuGenerator.showItems();\r\n\r\nclass VerticalMenuGenerator extends MenuGenerator {\r\n    animation() { console.log(\"Animacja menu typu vertical\"); }\r\n}\r\nlet vMenuGenerator = new VerticalMenuGenerator(\"vertical\", ['home', 'contact']);\r\nvMenuGenerator.getType();\r\nvMenuGenerator.showItems();\r\nvMenuGenerator.animation();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy96YWRhbmllMDcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy96YWRhbmllMDcuanM/NGM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIlphZGFuaWUgMDc6XCIpO1xyXG5jbGFzcyBNZW51R2VuZXJhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICB9XHJcbiAgICBnZXRUeXBlKCkgeyBjb25zb2xlLmxvZyhcIlR5cDogXCIrdGhpcy50eXBlKSB9XHJcbiAgICBzaG93SXRlbXMoKSB7XHJcbiAgICAgICAgbGV0IGk9MDtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxlbWVudCBcIisoKytpKStcIjogXCIraXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgSG9yaXpvbnRhbE1lbnVHZW5lcmF0b3IgZXh0ZW5kcyBNZW51R2VuZXJhdG9yIHsgfTtcclxubGV0IGhNZW51R2VuZXJhdG9yID0gbmV3IEhvcml6b250YWxNZW51R2VuZXJhdG9yKFwiaG9yaXpvbnRhbFwiLCBbJ3N0YXJ0JywgJ2Fib3V0J10pO1xyXG5oTWVudUdlbmVyYXRvci5nZXRUeXBlKCk7XHJcbmhNZW51R2VuZXJhdG9yLnNob3dJdGVtcygpO1xyXG5cclxuY2xhc3MgVmVydGljYWxNZW51R2VuZXJhdG9yIGV4dGVuZHMgTWVudUdlbmVyYXRvciB7XHJcbiAgICBhbmltYXRpb24oKSB7IGNvbnNvbGUubG9nKFwiQW5pbWFjamEgbWVudSB0eXB1IHZlcnRpY2FsXCIpOyB9XHJcbn1cclxubGV0IHZNZW51R2VuZXJhdG9yID0gbmV3IFZlcnRpY2FsTWVudUdlbmVyYXRvcihcInZlcnRpY2FsXCIsIFsnaG9tZScsICdjb250YWN0J10pO1xyXG52TWVudUdlbmVyYXRvci5nZXRUeXBlKCk7XHJcbnZNZW51R2VuZXJhdG9yLnNob3dJdGVtcygpO1xyXG52TWVudUdlbmVyYXRvci5hbmltYXRpb24oKTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/zadanie07.js\n");

/***/ })

/******/ });