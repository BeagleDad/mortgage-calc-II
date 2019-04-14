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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppMain; });\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ \"./src/validator.js\");\n/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results */ \"./src/results.js\");\n\n\n\n//const Validator = new Validator();\n\nclass AppMain {\n  constructor() {\n    // Global \"State variables\"\n    this.yearsOfMortgage = 30;\n    this.interestRate = 8.0;\n    this.loanAmount = 0;\n    this.annualTax = 0;\n    this.annualInsurance = 0;\n    this.validator = new _validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.results = new _results__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    //console.log(\"in constructor\");\n    document.addEventListener(\n      \"DOMContentLoaded\",\n      () => {\n        this.setupApp();\n      },\n      false\n    );\n  }\n\n  setupApp() {\n    // todo: move all the elements to class vars and just get once.\n\n    // Get the elements for later use so only have to get them once.\n    this.yearSlide = document.getElementById(\"year-slide\");\n    this.yearText = document.getElementById(\"year-value\");\n    this.rateText = document.getElementById(\"rate-value\");\n    this.setupYearInput();\n    this.setupRateSlider();\n    this.setupLoanInput();\n    this.setupTaxInput();\n    this.setupInsuranceInput();\n    this.setupForm();\n  }\n\n  // Setup year slider\n\n  /**\n   * Sets up the year input\n   *    sets the default value for the slider as well as the value widget\n   *    and adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupYearInput() {\n    this.yearSlide.value = this.yearsOfMortgage;\n    this.yearText.innerText = this.yearsOfMortgage;\n    this.yearSlide.addEventListener(\"input\", this.updateYearSlider.bind(this));\n    // console.log(this.yearSlide);\n  }\n  /**\n   * Event handler for the year input.\n   *\n   * @param {*} e - the event object.\n   * @memberof AppMain\n   */\n  updateYearSlider(e) {\n    this.yearsOfMortgage = e.target.value;\n    this.yearText.innerText = this.yearsOfMortgage;\n    //console.log(this.yearsOfMortgage);\n  }\n\n  // Setup rate slider\n\n  /**\n   *Event handler for the Interest Rate input\n   *\n   * @param {*} e  - the event object.\n   * @memberof AppMain\n   */\n  updateRateSlider(e) {\n    this.interestRate = e.target.value;\n    this.rateText.innerText = this.interestRate;\n  }\n  /**\n   * Sets up the Interest Rate input\n   *    sets the default value for the slider as well as the value widget\n   *    and adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupRateSlider() {\n    const rateSlide = document.getElementById(\"rate-slide\");\n    rateSlide.value = this.interestRate;\n    this.rateText.innerText = this.interestRate;\n    rateSlide.addEventListener(\"input\", this.updateRateSlider.bind(this));\n  }\n\n  // Setup loan input\n\n  /**\n   * Sets up the Loan Amount input\n   *    Adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupLoanInput() {\n    this.loanInput = document.getElementById(\"loan-input\");\n    this.loanInput.addEventListener(\"input\", this.updateLoanAmt.bind(this));\n  }\n\n  /**\n   *Event handler for the Loan Amount input\n   *\n   * @param {*} e  - the event object.\n   * @memberof AppMain\n   */\n  updateLoanAmt(e) {\n    // Remove formatting before storing value in class.\n    //console.log(e.target.value);\n    this.loanAmount = e.target.value.replace(/\\$|\\s|,/, \"\").trim();\n    //console.log(\"stored: \", this.loanAmount);\n    // Add formatting to show in DOM\n    this.loanInput.value = `$ ${this.loanAmount}`;\n  }\n\n  // Setup tax input\n  /**\n   *Event handler for the Tax amount input\n   *\n   * @param {*} e  - the event object.\n   * @memberof AppMain\n   */\n  updateTax(e) {\n    // Remove formatting before storing value in class.\n    this.annualTax = e.target.value.replace(/\\$|\\s|,/, \"\").trim();\n    // Add formatting to show in DOM\n    this.taxInput.value = `$ ${this.annualTax}`;\n  }\n  /**\n   * Sets up the Tax Amount input\n   *    Adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupTaxInput() {\n    this.taxInput = document.getElementById(\"tax-input\");\n    this.taxInput.addEventListener(\"input\", this.updateTax.bind(this));\n  }\n  // todo: may not use this.\n  formatCurrency(rv) {\n    //console.log(\"raw val: \" + rv);\n    const value = rv.replace(/,/g, \"\");\n    var rval = parseFloat(value).toLocaleString(\"en-US\", {\n      style: \"currency\",\n      currency: \"USD\"\n    });\n    return rval;\n  }\n  // Setup Insurance Input\n  /**\n   * Event handler for Insurance Input\n   *\n   * @param {*} e\n   * @memberof AppMain\n   */\n  updateInsurance(e) {\n    // Remove formatting before storing value in class.\n    this.annualInsurance = e.target.value.replace(/\\$|\\s|,/, \"\").trim();\n\n    // Add formatting to show in DOM\n    this.insuranceInput.value = `$ ${this.annualInsurance}`;\n  }\n  /**\n   * Sets up the Insurance amount input,\n   * stores the element reference and\n   * adds the event listener.\n   *\n   * @memberof AppMain\n   */\n  setupInsuranceInput() {\n    this.insuranceInput = document.getElementById(\"insurance-input\");\n    this.insuranceInput.addEventListener(\n      \"input\",\n      this.updateInsurance.bind(this)\n    );\n  }\n\n  // Handle submit\n  handleSubmit(e) {\n    e.preventDefault();\n\n    // validate fields\n    // const loanAmtField = document.getElementById(\"loan-input\");\n    console.log(this.validator.validateCurrencyField(this.loanInput));\n    if (\n      !this.validator.validateCurrencyField(this.loanInput) &&\n      !this.validator.validateCurrencyField(this.taxInput) &&\n      !this.validator.validateCurrencyField(this.insuranceInput)\n    ) {\n      return;\n    }\n\n    this.results.calcResults({\n      interestRate: this.interestRate,\n      loanAmount: this.loanAmount,\n      yearsOfMortgage: this.yearsOfMortgage,\n      annualInsurance: this.annualInsurance,\n      annualTax: this.annualTax\n    });\n    //this.animateResultView();\n  }\n  animateResultView() {\n    const elem = document.getElementById(\"results-section\");\n    //targetElem.scrollIntoView({ behavior: \"smooth\" });\n    elem.style.transition = \"left 1s ease-out 0s\";\n    elem.style.left = \"470px\";\n  }\n  setupForm() {\n    document\n      .getElementById(\"the-form\")\n      .addEventListener(\"submit\", this.handleSubmit.bind(this));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/AppMain.js?");

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

/***/ "./src/results.js":
/*!************************!*\
  !*** ./src/results.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Results; });\nclass Results {\n  // Do the calculations\n  calcResults({\n    interestRate,\n    loanAmount,\n    yearsOfMortgage,\n    annualInsurance,\n    annualTax\n  }) {\n    const principleAndInterest = this.calcPrincipleAndInterest({\n      interestRate,\n      loanAmount,\n      yearsOfMortgage\n    });\n    const monthlyTax = this.calcMonthlyTax(annualTax);\n    const monthlyInsurance = this.calcMonthlyInsurance(annualInsurance);\n    const monthlyPayment = principleAndInterest + monthlyTax + monthlyInsurance;\n\n    // // get element refs\n    const elPni = document.getElementById(\"res-p-i\");\n\n    const elTax = document.getElementById(\"res-tax\");\n\n    const elIns = document.getElementById(\"res-insurance\");\n\n    const elTot = document.getElementById(\"res-total\");\n\n    elPni.innerHTML = `$ ${principleAndInterest.toFixed(2)}`;\n    elPni.style.opacity = \"initial\";\n\n    elTax.innerHTML = `$ ${monthlyTax.toFixed(2)}`;\n    elTax.style.opacity = \"initial\";\n    elIns.innerHTML = `$ ${monthlyInsurance.toFixed(2)}`;\n    elIns.style.opacity = \"initial\";\n    elTot.innerHTML = `$ ${monthlyPayment.toFixed(2)}`;\n    elTot.style.opacity = \"initial\";\n    console.log(\n      \"pni: \" +\n        principleAndInterest.toFixed(2) +\n        \" tax: \" +\n        monthlyTax.toFixed(2) +\n        \" insurance: \" +\n        monthlyInsurance.toFixed(2) +\n        \" monthly payment: \" +\n        monthlyPayment.toFixed(2)\n    );\n  }\n\n  calcPrincipleAndInterest({ interestRate, loanAmount, yearsOfMortgage }) {\n    let principleAndInterest =\n      ((interestRate / 100 / 12) * loanAmount) /\n      (1 - Math.pow(1 + interestRate / 100 / 12, -yearsOfMortgage * 12));\n    //console.log(principleAndInterest);\n    return principleAndInterest;\n  }\n\n  calcMonthlyTax(annTax) {\n    return annTax / 12;\n  }\n\n  calcMonthlyInsurance(annInsurance) {\n    return annInsurance / 12;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/results.js?");

/***/ }),

/***/ "./src/validator.js":
/*!**************************!*\
  !*** ./src/validator.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Validator; });\nclass Validator {\n  constructor() {\n    this.errorMsg = {\n      required: \"is mandatory\",\n      invalidNumber: \"value is invalid\"\n    };\n  }\n\n  // Validators\n  validateCurrencyField(field) {\n    // Check if empty\n    if (this.checkIfEmpty(field)) {\n      return false;\n    }\n    // Check for valid number\n\n    // Decimals and commas optional\n    const regEx = /^\\$?\\s?((\\d{1,3})(?:,[0-9]{3}){0,1}|(\\d{1})(?:,[0-9]{3}){0,2}|(\\d{1,7}))(\\.\\d{1,2})?$/g;\n    return this.matchWithRegEx(\n      regEx,\n      field,\n      `${field.name} ${this.errorMsg.invalidNumber}`\n    );\n  }\n\n  // Utility functions\n  checkIfEmpty(field) {\n    if (this.isEmpty(field.value.trim())) {\n      // set field invalid\n      this.setInvalid(field, `${field.name} ${this.errorMsg.required}`);\n      return true;\n    } else {\n      // set field valid\n      this.setValid(field);\n      return false;\n    }\n  }\n  isEmpty(value) {\n    if (value === \"\") {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  setInvalid(field, message) {\n    field.classList.add(\"has_error\");\n    field.nextElementSibling.innerHTML = message;\n  }\n  setValid(field) {\n    field.classList.remove(\"has_error\");\n    field.nextElementSibling.innerHTML = \"\";\n  }\n\n  matchWithRegEx(regEx, field, message) {\n    console.log(field.value);\n    if (field.value.match(regEx)) {\n      this.setValid(field);\n      return true;\n    } else {\n      this.setInvalid(field, message);\n      return false;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/validator.js?");

/***/ })

/******/ });