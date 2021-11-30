const Employee = require("../employee");

test("employee object", () => {
    const employee = new Employee("testName", 1, "test@email.com");
    expect(typeof (employee)).toEqual("object");
});

test("renders employee name", () => {
    const name = "Test";
    const employee = new Employee(name);
    expect(employee.name).toEqual(name);
});

test("setting employee id", () => {
    const testId = new Employee("test", 1);
    expect(testId.getId()).toEqual(expect.any(Number));

});


test("set employee email ", () => {
    const testEmail = "test@email.com";
    const employee = new Employee("testName", 1, testEmail);
    expect(employee.email).toEqual(testEmail);
});

test("renders employee current role", () => {
    const testRole = "Intern";
    const employee = new Employee("testName", 1,"test@email.com", "Intern");
    expect(employee.getRole()).toEqual(testRole);
});