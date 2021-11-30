// Team Profile Constructors

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Node modules
const inquirer = require('inquirer');
const fs = require('fs');

const teamArr = [];

const managerPrompts = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Team Manager Name?'
    },
    {
        type: 'input',
        name: 'empID',
        message: 'Team Manager Employee ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Team Manager email address?'
    },
    {
        type: 'input',
        name: 'officePhone',
        message: 'Team Manager office phone number?'
    }
    ])
    
};

// const promptEmployee = employeeData => {
//     if (!employeeData.employees) {
//       employeeData.employees = [];
//     }
//     console.log(`
//     =================
//     Add an Employee
//     =================
//     `);
    // return inquirer.prompt([
// }
managerPrompts();