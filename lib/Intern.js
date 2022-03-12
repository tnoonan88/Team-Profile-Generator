// add school param

const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
        this.role = 'Intern';
    };

    getSchool() {
        return this.school;
    };
};

module.exports = Intern;