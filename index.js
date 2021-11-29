const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
    ])
}

questions();