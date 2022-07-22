// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer")

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

    getName() {
        inquirer.prompt([
 
        {
            type: 'Input',
            message: 'Member Name?',
            name: 'name',
        }

    ]).then((answers) => {
    // Use user feedback for... whatever!!
    })
};
};

getId();
getEmail();
getRole();