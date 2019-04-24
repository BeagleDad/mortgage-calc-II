export default class Results {
  // Do the calculations
  calcResults({
    interestRate,
    loanAmount,
    yearsOfMortgage,
    annualInsurance,
    annualTax
  }) {
    const principleAndInterest = this.calcPrincipleAndInterest(
      interestRate,
      loanAmount,
      yearsOfMortgage
    );
    const monthlyTax = this.calcMonthlyTax(annualTax);
    const monthlyInsurance = this.calcMonthlyInsurance(annualInsurance);
    const monthlyPayment = principleAndInterest + monthlyTax + monthlyInsurance;

    // // get element refs
    const elPni = document.getElementById("res-p-i");

    const elTax = document.getElementById("res-tax");

    const elIns = document.getElementById("res-insurance");

    const elTot = document.getElementById("res-total");

    elPni.innerHTML = principleAndInterest.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    elPni.style.opacity = "initial";

    elTax.innerHTML = monthlyTax.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    elTax.style.opacity = "initial";
    elIns.innerHTML = monthlyInsurance.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    elIns.style.opacity = "initial";
    elTot.innerHTML = monthlyPayment.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    elTot.style.opacity = "initial";
    // console.log(
    //   "pni: " +
    //     principleAndInterest.toFixed(2) +
    //     " tax: " +
    //     monthlyTax.toFixed(2) +
    //     " insurance: " +
    //     monthlyInsurance.toFixed(2) +
    //     " monthly payment: " +
    //     monthlyPayment.toFixed(2)
    // );
  }
  /**
   * Calculates the monthly P&I given the annual values.
   * Note: does not round value.
   *
   * @param {*} { interestRate, loanAmount, yearsOfMortgage }
   * @returns monthly principle and interest amount
   * @memberof Results
   */
  calcPrincipleAndInterest(interestRate, loanAmount, yearsOfMortgage) {
    let principleAndInterest =
      ((interestRate / 100 / 12) * loanAmount) /
      (1 - Math.pow(1 + interestRate / 100 / 12, -yearsOfMortgage * 12));
    return principleAndInterest;
  }

  /**
   * Calculates the monthly tax amount given the annual value.
   * Note: does not round value.
   * @param {annual tax amount} annTax
   * @returns monthly tax amount
   * @memberof Results
   */
  calcMonthlyTax(annTax) {
    return annTax / 12;
    // return (annTax / 12).toFixed(2);
  }

  /**
   * Calculates the monthly insurance amount given the annual value.
   * Note: does not round value.
   * @param {annual tax amount} annTax
   */
  calcMonthlyInsurance(annInsurance) {
    return annInsurance / 12;
  }
}
