const Engineer = require('../lib/Engineer');

test('does getGitHub() work', () => {
    const testGitHub = 'tnoonan88';
    const engineer = new Engineer('tom', 1, 'tom@email.com', testGitHub);
    expect(engineer.getGitHub()).toBe(testGitHub);
});

test('does getRole() return Engineer as a string', () => {
    const testRole = 'Engineer';
    const engineer = new Engineer('tom', 1, 'tom@email.com', 'tnoonan88');
    expect(engineer.getRole()).toBe(testRole);
});