export default class Results {
  // Do the calculations
  calcResults({
    interestRate,
    loanAmount,
    yearsOfMortgage,
    annualInsurance,
    annualTax
  }) {
    const principleAndInterest = this.calcPrincipleAndInterest({
      interestRate,
      loanAmount,
      yearsOfMortgage
    });
    const monthlyTax = this.calcMonthlyTax(annualTax);
    const monthlyInsurance = this.calcMonthlyInsurance(annualInsurance);
    const monthlyPayment = principleAndInterest + monthlyTax + monthlyInsurance;

    // // get element refs
    const elPni = document.getElementById("res-p-i");

    const elTax = document.getElementById("res-tax");

    const elIns = document.getElementById("res-insurance");

    const elTot = document.getElementById("res-total");

    elPni.innerHTML = `$ ${principleAndInterest.toFixed(2)}`;
    elPni.style.opacity = "initial";

    elTax.innerHTML = `$ ${monthlyTax.toFixed(2)}`;
    elTax.style.opacity = "initial";
    elIns.innerHTML = `$ ${monthlyInsurance.toFixed(2)}`;
    elIns.style.opacity = "initial";
    elTot.innerHTML = `$ ${monthlyPayment.toFixed(2)}`;
    elTot.style.opacity = "initial";
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

  calcPrincipleAndInterest({ interestRate, loanAmount, yearsOfMortgage }) {
    let principleAndInterest =
      ((interestRate / 100 / 12) * loanAmount) /
      (1 - Math.pow(1 + interestRate / 100 / 12, -yearsOfMortgage * 12));
    //console.log(principleAndInterest);
    return principleAndInterest;
  }

  calcMonthlyTax(annTax) {
    return annTax / 12;
  }

  calcMonthlyInsurance(annInsurance) {
    return annInsurance / 12;
  }
}
