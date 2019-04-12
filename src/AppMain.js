import Validator from "./validator";
import Results from "./results";

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
    this.setupLoanInput();
    this.setupTaxInput();
    this.setupInsuranceInput();
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
    this.interestRate = e.target.value;
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
    this.rateText.innerText = this.interestRate;
    rateSlide.addEventListener("input", this.updateRateSlider.bind(this));
  }

  // Setup loan input

  /**
   * Sets up the Loan Amount input
   *    Adds the event listener.
   *
   * @memberof AppMain
   */
  setupLoanInput() {
    this.loanInput = document.getElementById("loan-input");
    this.loanInput.addEventListener("input", this.updateLoanAmt.bind(this));
  }

  /**
   *Event handler for the Loan Amount input
   *
   * @param {*} e  - the event object.
   * @memberof AppMain
   */
  updateLoanAmt(e) {
    // Remove formatting before storing value in class.
    //console.log(e.target.value);
    this.loanAmount = e.target.value.replace(/\$|\s|,/, "").trim();
    //console.log("stored: ", this.loanAmount);
    // Add formatting to show in DOM
    this.loanInput.value = `$ ${this.loanAmount}`;
  }

  // Setup tax input
  /**
   *Event handler for the Tax amount input
   *
   * @param {*} e  - the event object.
   * @memberof AppMain
   */
  updateTax(e) {
    // Remove formatting before storing value in class.
    this.annualTax = e.target.value.replace(/\$|\s|,/, "").trim();
    // Add formatting to show in DOM
    this.taxInput.value = `$ ${this.annualTax}`;
  }
  /**
   * Sets up the Tax Amount input
   *    Adds the event listener.
   *
   * @memberof AppMain
   */
  setupTaxInput() {
    this.taxInput = document.getElementById("tax-input");
    this.taxInput.addEventListener("input", this.updateTax.bind(this));
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
  // Setup Insurance Input
  /**
   * Event handler for Insurance Input
   *
   * @param {*} e
   * @memberof AppMain
   */
  updateInsurance(e) {
    // Remove formatting before storing value in class.
    this.annualInsurance = e.target.value.replace(/\$|\s|,/, "").trim();

    // Add formatting to show in DOM
    this.insuranceInput.value = `$ ${this.annualInsurance}`;
  }
  /**
   * Sets up the Insurance amount input,
   * stores the element reference and
   * adds the event listener.
   *
   * @memberof AppMain
   */
  setupInsuranceInput() {
    this.insuranceInput = document.getElementById("insurance-input");
    this.insuranceInput.addEventListener(
      "input",
      this.updateInsurance.bind(this)
    );
  }

  // Handle submit
  handleSubmit(e) {
    e.preventDefault();

    // validate fields
    // const loanAmtField = document.getElementById("loan-input");
    if (this.validator.checkIfEmpty(this.loanInput)) return;

    this.results.calcResults({
      interestRate: this.interestRate,
      loanAmount: this.loanAmount,
      yearsOfMortgage: this.yearsOfMortgage,
      annualInsurance: this.annualInsurance,
      annualTax: this.annualTax
    });
  }
  setupForm() {
    document
      .getElementById("the-form")
      .addEventListener("submit", this.handleSubmit.bind(this));
  }
}
