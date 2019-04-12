export default class Validator {
  constructor() {}
  // Utility functions
  checkIfEmpty(field) {
    if (this.isEmpty(field.value.trim())) {
      // set field invalid
      this.setInvalid(field, `${field.name} must not be empty`); //todo: define strings in one place
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
    field.className = "invalid";
    field.nextElementSibling.innerHTML = message;
  }
  setValid(field) {
    field.className = "valid";
    field.nextElementSibling.innerHTML = "";
    //field.nextElementSibling.style.color = green;
  }
}
