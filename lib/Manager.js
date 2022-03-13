// import Employee class
// add officeNumber param
// getRole() overrides to Manager

const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super (name, email, id);
        this.officeNum = officeNum;
    };

    getOfficeNum() {
        return this.officeNum;
    };
};

module.exports = Manager;