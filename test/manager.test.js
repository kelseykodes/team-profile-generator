const Manager = require("../manager");

test("render manager office number", () => {
  const testOfficeNum = 911;
  const manager = new Manager("testName", 3, "test@email.com", testOfficeNum);
  expect(manager.officeNumber).toEqual(testOfficeNum);
});

test("role method to render 'manager'", () => {
  const role = "Manager";
  const manager = new Manager("testName", 1, "test@email.com");
  expect(manager.getRole()).toEqual(role);
});

test("office method to render manager's office number", () => {
  const manager = new Manager("testName", 1, "test@email.com");
  expect(manager.getId()).toEqual(expect.any(Number));
});
