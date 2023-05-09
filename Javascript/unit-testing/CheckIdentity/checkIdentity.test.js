const checkIdentity = require("./checkIdentity");

test("mengembalikan objek yang berisi properti yang diharapkan", () => {
  expect(checkIdentity("John Doe", 25, "US")).toEqual({
    name: "John Doe",
    age: 25,
    nationality: "US",
  });
});

test("mengembalikan objek yang berisi properti yang diharapkan", () => {
  expect(checkIdentity("Tony Stark", 50, "EN")).toEqual({
    name: "Tony Stark",
    age: 50,
    nationality: "EN",
  });
});

test("mengembalikan objek yang berisi properti yang diharapkan", () => {
  expect(checkIdentity("Spider Man", 17, "US")).toEqual({
    name: "Spider Man",
    age: 17,
    nationality: "US",
  });
});
