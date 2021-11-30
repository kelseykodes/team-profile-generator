const Engineer = require("../engineer");

test("render github account", () => {
  const testAccount = "GitHubUser";
  const res = new Engineer(testAccount);
  expect(res.github).toEqual(testAccount);
});

test("role method to render engineer", () => {
  const role = "Engineer";
  const employee = new Engineer( "testName", 1, "test@email.com", "kelsseykodes");
  expect(employee.getRole()).toEqual(role);
});

test("github method to render username", () => {
  const testGithub = "kelseykodes";
  const employee = new Engineer("Foo", 1, "test@test.com", testGithub);
  expect(employee.getGithub()).toEqual(testGithub);
});