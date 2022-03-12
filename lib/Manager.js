// import Employee class
// add officeNumber param
// getRole() overrides to Manager

const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, role, officeNum) {
        super (name, email, id, role);
        this.officeNum = officeNum;
    };

    getOfficeNum() {
        return this.officeNum;
    };
};

module.exports = Manager;