import Validator from "./validator";

//const Validator = new Validator();

export default class AppMain {
  constructor() {
    // Global "State variables"
    this.yearsOfMortgage = 30;
    this.interestRate = 8.0;
    this.loanAmount = 0;
    this.annualTax = 0;
    this.annualInsurance = 0;

    console.log("in constructor");
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
    this.setupYearInput();
    this.setupRateSlider();
    this.setupLoanInput();
    this.setupTaxInput();
    this.setupInsuranceInput();
    this.setupForm();
    console.log("finished setup", this.yearText);
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
    this.yearSlide.addEventListener("input", this.updateSlider.bind(this));
    console.log(this.yearSlide);
  }
  /**
   * Event handler for the year input.
   *
   * @param {*} e - the event object.
   * @memberof AppMain
   */
  updateSlider(e) {
    this.yearsOfMortgage = e.target.value;
    this.yearText.innerText = this.yearsOfMortgage;
    console.log(this.yearsOfMortgage);
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
    document.getElementById("rate-value").innerText = this.interestRate;
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
    document.getElementById("rate-value").innerText = this.interestRate;
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
    const loanInput = document.getElementById("loan-input");
    loanInput.addEventListener("input", this.updateLoanAmt.bind(this));
  }
  /**
   *Event handler for the Loan Amount input
   *
   * @param {*} e  - the event object.
   * @memberof AppMain
   */
  updateLoanAmt(e) {
    this.loanAmount = e.target.value;
    document.getElementById("loan-input").innerText = this.loanAmount;
  }

  // Setup tax input
  /**
   *Event handler for the Tax amount input
   *
   * @param {*} e  - the event object.
   * @memberof AppMain
   */
  updateTax(e) {
    this.annualTax = e.target.value;
    document.getElementById("tax-input").innerText = this.annualTax;
    console.log(this.annualTax);
  }
  /**
   * Sets up the Tax Amount input
   *    Adds the event listener.
   *
   * @memberof AppMain
   */
  setupTaxInput() {
    const taxInput = document.getElementById("tax-input");
    taxInput.addEventListener("input", this.updateTax.bind(this));
  }

  // Setup Insurance Input
  /**
   * Event handler for Insurance Input
   *
   * @param {*} e
   * @memberof AppMain
   */
  updateInsurance(e) {
    this.annualInsurance = e.target.value;
    document.getElementById("insurance-input").innerText = this.annualInsurance;
    console.log("insurance:", e);
  }
  /**
   * Sets up the Insurance amount input,
   * adds the event listener.
   *
   * @memberof AppMain
   */
  setupInsuranceInput() {
    const insuranceInput = document.getElementById("insurance-input");
    insuranceInput.addEventListener("input", this.updateInsurance.bind(this));
  }

  calcPrincipleAndInterest() {
    let principleAndInterest =
      ((this.interestRate / 100 / 12) * this.loanAmount) /
      (1 -
        Math.pow(1 + this.interestRate / 100 / 12, -this.yearsOfMortgage * 12));
    //console.log(principleAndInterest);
    return principleAndInterest;
  }

  calcMonthlyTax(annTax) {
    return annTax / 12;
  }

  calcMonthlyInsurance(annInsurance) {
    return annInsurance / 12;
  }

  // Handle submit
  handleSubmit(e) {
    e.preventDefault();

    // validate fields
    const loanAmtField = document.getElementById("loan-input");
    //if (Validator.checkIfEmpty(loanAmtField)) return;

    // Do the calculations
    const principleAndInterest = this.calcPrincipleAndInterest();
    const monthlyTax = this.calcMonthlyTax(this.annualTax);
    const monthlyInsurance = this.calcMonthlyInsurance(this.annualInsurance);
    const monthlyPayment = principleAndInterest + monthlyTax + monthlyInsurance;
    console.log(
      "pni: " +
        principleAndInterest.toFixed(2) +
        " tax: " +
        monthlyTax.toFixed(2) +
        " insurance: " +
        monthlyInsurance.toFixed(2) +
        " monthly payment: " +
        monthlyPayment.toFixed(2)
    );
  }
  setupForm() {
    document
      .getElementById("the-form")
      .addEventListener("submit", this.handleSubmit.bind(this));
  }
}
