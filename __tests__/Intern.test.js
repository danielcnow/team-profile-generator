const Intern = require('../lib/Intern.js');

test('set school via constructor', () => {
    const testValue ="VCU";
    const e =  new Intern("Daniel", 1 , "danielcnow@gmail.com", testValue)
});

test('getRole', () => {
    const testValue = "Intern";  
    const e =  new Intern("Daniel", 1 , "danielcnow@gmail.com", "VCU");
    expect(e.getRole()).toBe(testValue);
});
