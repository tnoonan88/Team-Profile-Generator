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

    getId() {
        return this.id;
    };
    
    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };

};

// Exports Employee class
module.exports = Employee;
