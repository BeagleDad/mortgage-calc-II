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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AppMain.js":
/*!************************!*\
  !*** ./src/AppMain.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppMain; });\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ \"./src/validator.js\");\n\n\n//const Validator = new Validator();\n\nclass AppMain {\n  constructor() {\n    // Global \"State variables\"\n    this.yearsOfMortgage = 30;\n    this.interestRate = 8.0;\n    this.loanAmount = 0;\n    this.annualTax = 0;\n    this.annualInsurance = 0;\n\n    console.log(\"in constructor\");\n    document.addEventListener(\n      \"DOMContentLoaded\",\n      () => {\n        this.setupApp();\n      },\n      false\n    );\n  }\n\n  setupApp() {\n    // todo: move all the elements to class vars and just get once.\n\n    // Get the elements for later use so only have to get them once.\n    this.yearSlide = document.getElementById(\"year-slide\");\n    this.yearText = document.getElementById(\"year-value\");\n    this.setupYearInput();\n    this.setupRateSlider();\n    this.setupLoanInput();\n    this.setupTaxInput();\n    this.setupInsuranceInput();\n    this.setupForm();\n    console.log(\"finished setup\", this.yearText);\n  }\n\n  // Setup year slider\n\n  /**\n   * Sets up the year input\n   *    sets the default value for the slider as well as the value widget\n   *    and adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupYearInput() {\n    this.yearSlide.value = this.yearsOfMortgage;\n    this.yearText.innerText = this.yearsOfMortgage;\n    this.yearSlide.addEventListener(\"input\", this.updateSlider.bind(this));\n    console.log(this.yearSlide);\n  }\n  /**\n   * Event handler for the year input.\n   *\n   * @param {*} e - the event object.\n   * @memberof AppMain\n   */\n  updateSlider(e) {\n    this.yearsOfMortgage = e.target.value;\n    this.yearText.innerText = this.yearsOfMortgage;\n    console.log(this.yearsOfMortgage);\n  }\n\n  // Setup rate slider\n\n  /**\n   *Event handler for the Interest Rate input\n   *\n   * @param {*} e  - the event object.\n   * @memberof AppMain\n   */\n  updateRateSlider(e) {\n    this.interestRate = e.target.value;\n    document.getElementById(\"rate-value\").innerText = this.interestRate;\n  }\n  /**\n   * Sets up the Interest Rate input\n   *    sets the default value for the slider as well as the value widget\n   *    and adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupRateSlider() {\n    const rateSlide = document.getElementById(\"rate-slide\");\n    rateSlide.value = this.interestRate;\n    document.getElementById(\"rate-value\").innerText = this.interestRate;\n    rateSlide.addEventListener(\"input\", this.updateRateSlider.bind(this));\n  }\n\n  // Setup loan input\n\n  /**\n   * Sets up the Loan Amount input\n   *    Adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupLoanInput() {\n    const loanInput = document.getElementById(\"loan-input\");\n    loanInput.addEventListener(\"input\", this.updateLoanAmt.bind(this));\n  }\n  /**\n   *Event handler for the Loan Amount input\n   *\n   * @param {*} e  - the event object.\n   * @memberof AppMain\n   */\n  updateLoanAmt(e) {\n    this.loanAmount = e.target.value;\n    document.getElementById(\"loan-input\").innerText = this.loanAmount;\n  }\n\n  // Setup tax input\n  /**\n   *Event handler for the Tax amount input\n   *\n   * @param {*} e  - the event object.\n   * @memberof AppMain\n   */\n  updateTax(e) {\n    this.annualTax = e.target.value;\n    document.getElementById(\"tax-input\").innerText = this.annualTax;\n    console.log(this.annualTax);\n  }\n  /**\n   * Sets up the Tax Amount input\n   *    Adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupTaxInput() {\n    const taxInput = document.getElementById(\"tax-input\");\n    taxInput.addEventListener(\"input\", this.updateTax.bind(this));\n  }\n\n  // Setup Insurance Input\n  /**\n   * Event handler for Insurance Input\n   *\n   * @param {*} e\n   * @memberof AppMain\n   */\n  updateInsurance(e) {\n    this.annualInsurance = e.target.value;\n    document.getElementById(\"insurance-input\").innerText = this.annualInsurance;\n    console.log(\"insurance:\", e);\n  }\n  /**\n   * Sets up the Insurance amount input,\n   * adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupInsuranceInput() {\n    const insuranceInput = document.getElementById(\"insurance-input\");\n    insuranceInput.addEventListener(\"input\", this.updateInsurance.bind(this));\n  }\n\n  calcPrincipleAndInterest() {\n    let principleAndInterest =\n      ((this.interestRate / 100 / 12) * this.loanAmount) /\n      (1 -\n        Math.pow(1 + this.interestRate / 100 / 12, -this.yearsOfMortgage * 12));\n    //console.log(principleAndInterest);\n    return principleAndInterest;\n  }\n\n  calcMonthlyTax(annTax) {\n    return annTax / 12;\n  }\n\n  calcMonthlyInsurance(annInsurance) {\n    return annInsurance / 12;\n  }\n\n  // Handle submit\n  handleSubmit(e) {\n    e.preventDefault();\n\n    // validate fields\n    const loanAmtField = document.getElementById(\"loan-input\");\n    //if (Validator.checkIfEmpty(loanAmtField)) return;\n\n    // Do the calculations\n    const principleAndInterest = this.calcPrincipleAndInterest();\n    const monthlyTax = this.calcMonthlyTax(this.annualTax);\n    const monthlyInsurance = this.calcMonthlyInsurance(this.annualInsurance);\n    const monthlyPayment = principleAndInterest + monthlyTax + monthlyInsurance;\n    console.log(\n      \"pni: \" +\n        principleAndInterest.toFixed(2) +\n        \" tax: \" +\n        monthlyTax.toFixed(2) +\n        \" insurance: \" +\n        monthlyInsurance.toFixed(2) +\n        \" monthly payment: \" +\n        monthlyPayment.toFixed(2)\n    );\n  }\n  setupForm() {\n    document\n      .getElementById(\"the-form\")\n      .addEventListener(\"submit\", this.handleSubmit.bind(this));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/AppMain.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppMain */ \"./src/AppMain.js\");\n\n\nconst app = new _AppMain__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/validator.js":
/*!**************************!*\
  !*** ./src/validator.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Validator; });\nclass Validator {\n  constructor() {}\n  // Utility functions\n  checkIfEmpty(field) {\n    if (this.isEmpty(field.value.trim())) {\n      // set field invalid\n      this.setInvalid(field, `${field.name} must not be empty`); //todo: define strings in one place\n      return true;\n    } else {\n      // set field valid\n      this.setValid(field);\n      return false;\n    }\n  }\n  isEmpty(value) {\n    if (value === \"\") {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  setInvalid(field, message) {\n    field.className = \"invalid\";\n    field.nextElementSibling.innerHTML = message;\n  }\n  setValid(field) {\n    field.className = \"valid\";\n    field.nextElementSibling.innerHTML = \"\";\n    //field.nextElementSibling.style.color = green;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/validator.js?");

/***/ })

/******/ });