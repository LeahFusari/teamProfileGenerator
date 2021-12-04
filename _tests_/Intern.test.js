const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Leah', 2, "emailadsfdsafsa", 2585485);
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.empID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
  });