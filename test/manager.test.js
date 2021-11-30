const Manager = require("../manager");
const Employee = require("../employee");

test("render manager office number", () => {
  const testOfficeNum = "01";
  const manager = new Manager(testOfficeNum);
  expect(manager.testOfficeNum).toEqual(testOfficeNum);
});

test("role method to render 'manager'", () => {
  const role = "manager";
  const manager = new Manager("testName", 1, "test@test.com", 100);
  expect(manager.getRole()).toEqual(role);
});

test("office method to render manager's office number", () => {
  const manager = new Manager("testName", 1, "test@email.com");
  expect(testId.getId()).toEqual(expect.any(Number));
});
