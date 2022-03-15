const Intern = require('../lib/Intern');

test('does getSchool() work', () => {
    const testSchool = 'GSU';
    const intern = new Intern('tom', 1, 'tom@email.com', testSchool);
    expect(intern.getSchool()).toBe(testSchool);
});

test('does getRole() return Intern as a string', () => {
    const testRole = 'Intern';
    const intern = new Intern('tom', 1, 'tom@email.com', 'GSU');
    expect(intern.getRole()).toBe(testRole);
});