// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class intern extends Employee {
    constructor(name,id,email){
        super(name,id,email);
        this.school="school";
    }
}

module.exports = intern