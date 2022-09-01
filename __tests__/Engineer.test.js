const Engineer = require('../lib/Engineer.js');

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Daniel", 1, "danielcnow@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole", () => {
  const testValue = "Engineer";
  const e = new Engineer("Daniel", 1, "danielcnow@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("getGithub", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Daniel", 1, "danielcnow@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});