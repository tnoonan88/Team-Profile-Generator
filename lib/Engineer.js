// add github param

const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub) {
        super(name, id, email, role);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    };

    getGitHub() {
        return this.gitHub;
    };
};

module.exports = Engineer;