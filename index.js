const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const generateHtml = require("./util/generateHtml");
const fs = require('fs');

const team = [];

const genManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "Manager's name?",
            name: 'name'
        },
        {
            type: 'number',
            message: "Manager's ID?",
            name: 'id'
        },        
        {
            type: 'input',
            message: "Manager's Email?",
            name: 'email'
        },        
        {
            type: 'number',
            message: "Manager's Office Number'?",
            name: 'office'
        },
    ]).then(ans=> {
        let manager = new Manager(ans.name, ans.id, ans.email, ans.office)
        team.push(manager)
        genTeam()
    })
}

const genTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Add team members or finish file?',
            choices: ["Engineer", "Intern", "Finish File"],
            name: 'role',
        }
    ]).then(ans => {
        if(ans.role === 'Engineer') {
           console.log("Loading Engineer Program");
           genEngineer();
       } else if(ans.role === 'Intern') {
           console.log("Loading Intern Program");
           genIntern();
       }else {
           console.log("All employees have been added!")
           genFile();
       }
   })
}

const genEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "Engineer Name?",
            name: 'name'
        },
        {
            type: 'number',
            message: "Engineer's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "Engineer's Email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "Engineer's GitHub?",
            name: 'github'
        }
    ]).then(ans) (ans=> {
        let engineer = new Engineer (ans.name, ans.id, ans.email, ans.github)
        team.push(engineer)
        genTeam()
    })
}

const genIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "Intern's Name?",
            name: 'name'
        },
        {
            type: 'number',
            message: "Interns's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "Interns's Email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "Interns's School?",
            name: 'school'
        }
    ]).then(ans) (ans=> {
        let engineer = new Engineer (ans.name, ans.id, ans.email, ans.school)
        team.push(Intern)
        genTeam()
    })
}

const genFile = () => {
    fs.writeFile('./dist/index.html', generateHtml(team), (err) => {
        if (err) {
            throw err
        }
    })
}
genManager