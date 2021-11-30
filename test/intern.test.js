const Intern = require("../intern");

test("render intern school", () => {
    const testSchool = "Georgia Tech";
    const intern = new Intern("testName", testSchool);
    expect(intern.school).toEqual(testSchool);
});

test("role method will return 'intern'", () => {
    const testRole = "Intern";
    const intern = new Intern("testName", "Georgia Tech");
    expect(intern.getRole()).toEqual(testRole);
});

test("school method will return intern's school", () => {
    const testSchool = "Georgia Tech";
    const intern = new Intern("testName", 1, "test@test.com", testSchool);
    expect(intern.getSchool()).toEqual(testSchool);
});