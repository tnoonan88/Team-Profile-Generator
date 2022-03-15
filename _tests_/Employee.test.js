const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('tom', 1, 'tom@email.com');

    expect(typeof(employee)).toBe('object');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('does getName() return this.name', () => {
    const testName = 'tom';
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test('does getId() return this.id', () => {
    const testId = 12345;
    const employee = new Employee('tom', testId);
    expect(employee.getId()).toBe(testId);
});

test('does getEmail() return this.email', () => {
    const testEmail = 'tom@email.com';
    const employee = new Employee('tom', 12345, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test('does getRole() return Employee as a string', () => {
    const testRole = 'Employee';
    const employee = new Employee('tom', 12345, 'tom@email.com');
    expect(employee.getRole()).toBe(testRole);
});