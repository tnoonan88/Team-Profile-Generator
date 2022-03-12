// Parent class constructor
// parameters: name, id, email and role
// methods: getName(), getId(), getEmail(), getRole()

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
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

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };

};

// Exports Employee class
module.exports = Employee;
