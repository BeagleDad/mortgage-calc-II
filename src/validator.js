export default class Validator {
  constructor() {
    this.errorMsg = {
      required: "is mandatory",
      invalidNumber: "value is invalid"
    };
  }

  // Validators
  validateCurrencyField(field) {
    // Check if empty
    if (this.checkIfEmpty(field)) {
      return false;
    }
    // Check for valid number

    // regex: dollar sign, decimals, and commas optional, but limited to eight sig figs
    const regEx = /^\$?\s?((\d{1,3})(?:,[0-9]{3}){0,1}|(\d{1})(?:,[0-9]{3}){0,2}|(\d{1,7}))(\.\d{1,2})?$/g;
    return this.matchWithRegEx(
      regEx,
      field,
      `${field.name} ${this.errorMsg.invalidNumber}`
    );
  }

  // Utility functions
  checkIfEmpty(field) {
    if (this.isEmpty(field.value.trim())) {
      // set field invalid
      this.setInvalid(field, `${field.name} ${this.errorMsg.required}`);
      return true;
    } else {
      // set field valid
      this.setValid(field);
      return false;
    }
  }
  isEmpty(value) {
    if (value === "") {
      return true;
    } else {
      return false;
    }
  }
  setInvalid(field, message) {
    field.classList.add("has-error");
    field.nextElementSibling.innerHTML = message;
  }
  setValid(field) {
    field.classList.remove("has-error");
    field.nextElementSibling.innerHTML = "";
  }

  matchWithRegEx(regEx, field, message) {
    if (field.value.match(regEx)) {
      this.setValid(field);
      return true;
    } else {
      this.setInvalid(field, message);
      return false;
    }
  }
}
