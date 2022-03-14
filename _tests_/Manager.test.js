const Manager = require('../lib/Manager');

test('does getOfficeNum() work', () => {
    const testOfficeNum = '100';
    const manager = new Manager('tom', 1, 'tom@email.com', testOfficeNum);
    expect(manager.getOfficeNum()).toBe(testOfficeNum);
});

test("does getRole() return Manager as a string", () => {
    const testRole = "Manager";
    const manager = new Manager('tom', 1, 'tom@email.com', 100);
    expect(manager.getRole()).toBe(testRole);
});
