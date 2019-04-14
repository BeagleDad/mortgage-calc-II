import Results from "./results";

const results = new Results();

test("calculate monthly tax of 1200 to equal 100", () => {
  expect(results.calcMonthlyTax(1200)).toBeCloseTo(100);
});
test("calculate monthly tax of 5687.96 to equal 473.99666666666667", () => {
  expect(results.calcMonthlyTax(5687.96)).toBeCloseTo(473.99666666666667);
});
test("calculate monthly tax of 0 to equal 0", () => {
  expect(results.calcMonthlyInsurance(0)).toBeCloseTo(0);
});
test("calculate monthly insurance of 1200 to equal 100", () => {
  expect(results.calcMonthlyInsurance(1200)).toBeCloseTo(100);
});

test("calculate monthly insurance of 0 to equal 0", () => {
  expect(results.calcMonthlyInsurance(1200)).toBeCloseTo(100);
});

test("calculate monthly P&I", () => {
  expect(results.calcPrincipleAndInterest(6, 100000, 15)).toBeCloseTo(843.86);
});
test("calculate monthly P&I", () => {
  expect(results.calcPrincipleAndInterest(6, 100000, 30)).toBeCloseTo(599.55);
});
test("calculate monthly P&I", () => {
  expect(results.calcPrincipleAndInterest(3.25, 100000, 30)).toBeCloseTo(
    435.21
  );
});
test("calculate monthly P&I", () => {
  expect(results.calcPrincipleAndInterest(6, 2000000, 30)).toBeCloseTo(
    11991.01
  );
});
