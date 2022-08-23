const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const generateHtml = require("./util/generateHtml");
const fs = require('fs');

const team = [];