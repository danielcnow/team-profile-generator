const Manager = require('../lib/Manager.js');

test("set office number with constructor", () => {
  const testValue = 100;
  const e = new Manager("Daniel", 1, "danielcnow@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole', () => {
  const testValue = "Manager";
  const e = new Manager("Daniel", 1, "danielcnow@gmail.com", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("getOfficeNumber", () => {
  const testValue = 100;
  const e = new Manager("Daniel", 1, "danielcnow@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});