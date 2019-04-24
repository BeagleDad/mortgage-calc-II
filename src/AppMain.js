import Validator from "./validator";
import Results from "./results";
import AutoNumeric from "../node_modules/autonumeric/dist/autoNumeric";

//const Validator = new Validator();

export default class AppMain {
  constructor() {
    // Global "State variables"
    this.yearsOfMortgage = 30;
    this.interestRate = 8.0;
    this.loanAmount = 0;
    this.annualTax = 0;
    this.annualInsurance = 0;
    this.validator = new Validator();
    this.results = new Results();
    //console.log("in constructor");
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        this.setupApp();
      },
      false
    );
  }

  setupApp() {
    // todo: move all the elements to class vars and just get once.

    // Get the elements for later use so only have to get them once.
    this.yearSlide = document.getElementById("year-slide");
    this.yearText = document.getElementById("year-value");
    this.rateText = document.getElementById("rate-value");
    this.setupYearInput();
    this.setupRateSlider();
    this.loanInput = this.setupCurrencyInput(
      document.getElementById("loan-input")
    );
    this.taxInput = this.setupCurrencyInput(
      document.getElementById("tax-input")
    );
    this.insuranceInput = this.setupCurrencyInput(
      document.getElementById("insurance-input")
    );
    this.setupForm();
  }

  // Setup year slider

  /**
   * Sets up the year input
   *    sets the default value for the slider as well as the value widget
   *    and adds the event listener.
   *
   * @memberof AppMain
   */
  setupYearInput() {
    this.yearSlide.value = this.yearsOfMortgage;
    this.yearText.innerText = this.yearsOfMortgage;
    this.yearSlide.addEventListener("input", this.updateYearSlider.bind(this));
    // console.log(this.yearSlide);
  }
  /**
   * Event handler for the year input.
   *
   * @param {*} e - the event object.
   * @memberof AppMain
   */
  updateYearSlider(e) {
    this.yearsOfMortgage = e.target.value;
    this.yearText.innerText = this.yearsOfMortgage;
    //console.log(this.yearsOfMortgage);
  }

  // Setup rate slider

  /**
   *Event handler for the Interest Rate input
   *
   * @param {*} e  - the event object.
   * @memberof AppMain
   */
  updateRateSlider(e) {
    this.interestRate = parseFloat(e.target.value).toFixed(1);
    this.rateText.innerText = this.interestRate;
  }
  /**
   * Sets up the Interest Rate input
   *    sets the default value for the slider as well as the value widget
   *    and adds the event listener.
   *
   * @memberof AppMain
   */
  setupRateSlider() {
    const rateSlide = document.getElementById("rate-slide");
    rateSlide.value = this.interestRate;
    this.rateText.innerText = this.interestRate.toFixed(1);
    rateSlide.addEventListener("input", this.updateRateSlider.bind(this));
  }

  setupCurrencyInput(elem) {
    const currencyOptions = {
      currencySymbol: "$",
      decimalCharacter: ".",
      digitGroupSeparator: ",",
      currencySymbolPlacement: "p",
      caretPositionOnFocus: "start",
      emptyInputBehavior: "always",
      negativePositiveSignPlacement: "r"
    };

    return new AutoNumeric(elem, currencyOptions);

    // TODO: not using this anymore since using autoNumeric
    //this.loanInput.addEventListener("keyup", this.updateLoanAmt.bind(this));
  }

  // todo: may not use this.
  formatCurrency(rv) {
    //console.log("raw val: " + rv);
    const value = rv.replace(/,/g, "");
    var rval = parseFloat(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    return rval;
  }

  /**
   * Handle form submission
   * First validates fields and stops if any are invalid.
   * Once all are valid it performs the calculations needed.
   *
   * @param {*} event
   * @returns
   * @memberof AppMain
   */
  handleSubmit(e) {
    e.preventDefault();

    // validate fields
    // Collect all responses first. This is needed because the validate functions set the elements properties.
    let validResponses = [];
    validResponses.push(
      this.validator.validateCurrencyField(this.loanInput.node())
    );
    validResponses.push(
      this.validator.validateCurrencyField(this.taxInput.node())
    );
    validResponses.push(
      this.validator.validateCurrencyField(this.insuranceInput.node())
    );
    // Once all the responses are collected then check to see if any are invalid and bail if so.
    if (validResponses.includes(false)) {
      return;
    }
    this.results.calcResults({
      interestRate: this.interestRate,
      yearsOfMortgage: this.yearsOfMortgage,
      loanAmount: this.loanInput.get(),
      annualTax: this.taxInput.get(),
      annualInsurance: this.insuranceInput.get()
    });
    document.getElementById("submit-btn").value = "RECALCULATE";
    this.animateResultView();
  }
  /**
   * Animate the results view for small (stacked) layout
   *
   * @memberof AppMain
   */
  animateResultView() {
    const targetElem = document.getElementById("scroll-bottom-target");
    const elem = document.getElementById("results-section");
    targetElem.scrollIntoView({ behavior: "smooth", block: "end" });
    //elem.style.transition = "height 1s ease-out 0s";
    //elem.style.height = "470px";
  }

  setupForm() {
    document
      .getElementById("the-form")
      .addEventListener("submit", this.handleSubmit.bind(this));
  }
}
