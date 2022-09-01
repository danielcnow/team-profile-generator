const Employee = require('../lib/Employee.js');

test('constructor argument for name', () => {
  const name ="Daniel";
  const e = new Employee(name); 
  expect(e.name).toBe(name);
});

test('set id using constructor', () => {
    const testValue=001;
    const e = new Employee(testValue);
    expect(e.id).toBe(id);
  });


  test("getName", () => {
    const testValue = "Daniel";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("getId", () => {
    const testValue = 001;
    const e = new Employee("Chow", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("getEmail", () => {
    const testValue = "danielcnow@gmail.com";
    const e = new Employee("Chow", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole", () => {
    const testValue = "Employee";
    const e = new Employee("Daniel", 1, "danielcnow@gmail.com");
    expect(e.getRole()).toBe(testValue);
  });