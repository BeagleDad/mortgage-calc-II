import Validator from "./validator";

const validator = new Validator();
beforeAll(() => {
  // Jest uses jsdom as the default test environment which emulates
  // a browser and provides a document object for the unit tests.
  // Initialize the document body with the HTML needed for the tests
  document.body.innerHTML += `
      <form id="the-form">
        <div id="loan-input-wrapper">
            <input type="text" id="loan-input" name="Loan Amount" className="input loan-input row">
            <div className="error-portal" />
        </div>
        <input type="submit" id="submitbutton">
      </form>
    `;
});
// test("insurance input value to be 1252", () => {
//   expect(document.getElementById("loan-input").value).toMatch("1252");
// });
test("isEmpty return true when field is empty", () => {
  expect(
    validator.isEmpty(document.getElementById("loan-input").value)
  ).toBeTruthy();
});

test("isEmpty return false when field is not empty", () => {
  document.getElementById("loan-input").value = "123";
  expect(
    validator.isEmpty(document.getElementById("loan-input").value)
  ).toBeFalsy();
});
test("target element does not have error class before calling setInvalid()", () => {
  let el = document.getElementById("loan-input");
  expect(el.classList.contains("has-error")).toBeFalsy();
});
test("setInvalid() applies error class to element", () => {
  let el = document.getElementById("loan-input");
  validator.setInvalid(el, "invalid message");
  expect(el.classList.contains("has-error")).toBeTruthy();
});
test("target element does not have error class after calling setValid()", () => {
  let el = document.getElementById("loan-input");
  validator.setValid(el);
  expect(el.classList.contains("has-error")).toBeFalsy();
});

describe("functionality of checkIfEmpty function", () => {
  test("target element does not have error class before calling checkIfEmpty()", () => {
    let el = document.getElementById("loan-input");
    expect(el.classList.contains("has-error")).toBeFalsy();
  });
  test("checkIfEmpty returns true when field is empty", () => {
    let el = document.getElementById("loan-input");
    el.value = "";
    expect(validator.checkIfEmpty(el)).toBeTruthy();
  });
  test("empty target element has error class after calling checkIfEmpty()", () => {
    let el = document.getElementById("loan-input");
    expect(el.classList.contains("has-error")).toBeTruthy();
  });
  test("checkIfEmpty returns false when field is not empty", () => {
    let el = document.getElementById("loan-input");
    el.value = "12345";
    expect(validator.checkIfEmpty(el)).toBeFalsy();
  });
  test("non-empty target element does not have error class after calling checkIfEmpty()", () => {
    let el = document.getElementById("loan-input");
    expect(el.classList.contains("has-error")).toBeFalsy();
  });
});
describe("matchWithRegEx() functionality", () => {
  // regex: dollar sign, decimals, and commas optional, but limited to eight sig figs
  const regEx = /^\$?\s?((\d{1,3})(?:,[0-9]{3}){0,1}|(\d{1})(?:,[0-9]{3}){0,2}|(\d{1,7}))(\.\d{1,2})?$/g;
  test("invalid value results in error", () => {
    let el = document.getElementById("loan-input");
    el.value = "123k45.67";
    expect(validator.matchWithRegEx(regEx, el, "value is ok")).toBeFalsy();
  });
  test("target element with invalid value has error class after calling matchWithRegEx()", () => {
    let el = document.getElementById("loan-input");
    expect(el.classList.contains("has-error")).toBeTruthy();
  });
  test("valid value results in no error", () => {
    let el = document.getElementById("loan-input");
    el.value = "12345.67";
    expect(validator.matchWithRegEx(regEx, el, "value is ok")).toBeTruthy();
  });
  test("target element with valid value does not have error class after calling checkIfEmpty()", () => {
    let el = document.getElementById("loan-input");
    expect(el.classList.contains("has-error")).toBeFalsy();
  });
  test("valid value with leading $ results in no error", () => {
    let el = document.getElementById("loan-input");
    el.value = "$12345.67";
    expect(validator.matchWithRegEx(regEx, el, "value is ok")).toBeTruthy();
  });
  test("valid value with leading $ and space results in no error", () => {
    let el = document.getElementById("loan-input");
    el.value = "$ 12345.67";
    expect(validator.matchWithRegEx(regEx, el, "value is ok")).toBeTruthy();
  });
  test("valid value with no decimal results in no error", () => {
    let el = document.getElementById("loan-input");
    el.value = "12345";
    expect(validator.matchWithRegEx(regEx, el, "value is ok")).toBeTruthy();
  });
  test("valid value with more than 2 decimal places results in error", () => {
    let el = document.getElementById("loan-input");
    el.value = "12345.123";
    expect(validator.matchWithRegEx(regEx, el, "value is ok")).toBeFalsy();
  });
  test("valid value with comma, in correct place, results in no error", () => {
    let el = document.getElementById("loan-input");
    el.value = "1,245,678.23";
    expect(validator.matchWithRegEx(regEx, el, "value is ok")).toBeTruthy();
  });
});
