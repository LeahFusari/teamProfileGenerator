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
    .then(managerData => {
        const  { name, empID, email, officePhone } = managerData; 
        const manager = new Manager (name, empID, email, officePhone);

        teamArr.push(manager);

    })
};

const employeePrompts = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'title',
            message: 'Employee title:',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Employee name:', 
            validate: empName => {
                if (empName) {
                    return true;
                } else {
                    console.log ('Please enter employee name!');
                    return false; 
                }
            }
        }
        ,
        {
            type: 'input',
            name: 'empID',
            message: 'Employee ID:',
            validate: empID => {
                if  (isNaN(empID)) {
                    console.log ('Please enter employee ID!')
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email:',
            validate: email => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    return true;
                } else {
                    console.log ('Please enter a valid email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Employee github username:',
            when: (input) => input.title === 'Engineer',
            validate: githubName => {
                if (githubName ) {
                    return true;
                } else {
                    console.log ('Please enter an employee github username!')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Intern school:',
            when: (input) => input.title === 'Intern',
            validate: schoolName => {
                if (schoolName) {
                    return true;
                } else {
                    console.log ('Please enter the intern school!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmp',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, empID, email, title, github, school, confirmAddEmp } = employeeData; 

        if (title === "Engineer") {
            employee = new Engineer (name, empID, email, github);

        } else if (title === "Intern") {
            employee = new Intern (name, empID, email, school);
        }

        teamArr.push(employee); 
        console.log(teamArr);

        if (confirmAddEmp) {
            return employeePrompts(teamArr); 
        } else {
            return teamArr;
        }
        
    })
    
};

managerPrompts()
.then(employeePrompts)


