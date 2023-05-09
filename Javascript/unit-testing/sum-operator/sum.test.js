const sum = require("./sum");

test("mengecek hasil penjumlahan dari fungsi sum", () => {
  expect(sum(5, 6)).toBe(11);
});

test("mengecek hasil penjumlahan dari fungsi sum", () => {
  expect(sum(3, 7)).toBe(10);
});

test("mengecek hasil penjumlahan dari fungsi sum", () => {
  expect(sum(2, 3)).toBe(5);
});

test("mengecek hasil penjumlahan dari fungsi sum", () => {
  expect(sum(4, 4)).toBe(8);
});
