const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Leah', 2, "emailadsfdsafsa", 2585485);
  
    expect(manager.name).toBe('Leah');
  });

  