// Parent class constructor
// parameters: name, id, email and role
// methods: getName(), getId(), getEmail(), getRole()

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return this.name;
    };

    getEmail() {
        return this.email;
    };

    getId() {
        return this.id;
    };

    getRole() {
        return 'Employee';
    };

};

// Exports Employee class
module.exports = Employee;
