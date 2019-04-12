export default class Validator {
  constructor() {
    this.errorMsg = {
      required: "is required",
      invalidNumber: "value is invalid"
    };
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
    field.classList.add("has_error");
    field.nextElementSibling.innerHTML = message;
  }
  setValid(field) {
    field.classList.remove("has_error");
    field.nextElementSibling.innerHTML = "";
  }
}
