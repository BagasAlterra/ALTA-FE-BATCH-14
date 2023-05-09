const getFullName = require("./checkName");

test("mengecek hasil gabungan nama dari fungsi getFullName", () => {
  expect(getFullName("John", "Doe")).toEqual("John Doe");
});

test("mengecek hasil gabungan nama dari fungsi getFullName", () => {
  expect(getFullName("Tony", "Stark")).toEqual("Tony Stark");
});

test("mengecek hasil gabungan nama dari fungsi getFullName", () => {
  expect(getFullName("Spider", "Man")).toEqual("Spider Man");
});
