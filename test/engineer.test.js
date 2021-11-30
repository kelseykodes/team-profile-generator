const Engineer = require("../engineer");

test("render github account", () => {
  const testAccount = "kelseykodes";
  const engineer = new Engineer("testName", 3, "test@email.com", testAccount);
  expect(engineer.github).toBe(testAccount);
});
 

test("role method to render 'engineer'", () => {
  const role = "Engineer";
  const employee = new Engineer( "testName", 1, "test@email.com", "kelseykodes");
  expect(employee.getRole()).toEqual(role);
});

test("github method to render username", () => {
  const testGithub = "kelseykodes";
  const employee = new Engineer("testName", 1, "test@email.com", testGithub);
  expect(employee.getGithub()).toEqual(testGithub);
});
