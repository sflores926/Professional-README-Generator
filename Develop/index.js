// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            messsage: 'What is your project Title?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a short description explaining the what, why, and how of your project?'
        }
    ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
