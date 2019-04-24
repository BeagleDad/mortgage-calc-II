export default class Validator {
  constructor() {
    this.errorMsg = {
      required: "is mandatory",
      shortRequired: "Manditory Field",
      invalidNumber: "value is invalid",
      shortInvalidNumber: "Invalid Number"
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
    /* TODO: don't need this anymore since unsing AutoNumeric -  input can't be invalid.
    const regEx = /^\$?\s?((\d{1,3})(?:,[0-9]{3}){0,1}|(\d{1})(?:,[0-9]{3}){0,2}|(\d{1,7}))(\.\d{1,2})?$/g;
    return this.matchWithRegEx(
      regEx,
      field,
      `${field.name} ${this.errorMsg.invalidNumber}`,
      this.errorMsg.shortInvalidNumber
    ); */
  }

  // Utility functions
  checkIfEmpty(field) {
    if (this.isEmpty(field.value.trim())) {
      // set field invalid
      this.setInvalid(
        field,
        `${field.name} ${this.errorMsg.required}`,
        this.errorMsg.shortRequired
      );
      return true;
    } else {
      // set field valid
      this.setValid(field);
      return false;
    }
  }
  isEmpty(value) {
    if (value === "$") {
      return true;
    } else {
      return false;
    }
  }
  setInvalid(field, message, shortMessage) {
    field.classList.add("has-error");
    // Set the two different message to the cooresponding elements
    let firstSibling = field.nextElementSibling;
    firstSibling.innerHTML = message;
    firstSibling.nextElementSibling.innerHTML = shortMessage;
  }
  setValid(field) {
    field.classList.remove("has-error");
    field.nextElementSibling.innerHTML = "";
  }

  matchWithRegEx(regEx, field, message, shortMessage) {
    if (field.value.match(regEx)) {
      this.setValid(field);
      return true;
    } else {
      this.setInvalid(field, message, shortMessage);
      return false;
    }
  }
}
