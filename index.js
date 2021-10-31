// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');

// Create an array of questions for each position function
 const start = () => {
  inquirer
    .prompt({
    type: 'list',
    message: 'What position would you like to add?',
    name: 'title',
    choices: ['Manager', 'Engineer', 'Intern', 'Done'] 
    })
    .then((choices) => {
      if (choices === 'Manager') {
      // Use user feedback for... whatever!!
      managerQs();
      }
    })
};

function managerQs() { 
const managerQuestions = [{
    type: 'input',
    message: 'Hello Manager! What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your employee ID number?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
  type: 'input',
    message: 'Please enter your office number:',
    name: 'officeNumber',
}];
}

function engineerQs() { 
const engineerQuestions = [{
    type: 'input',
    message: 'Hello Engineer! What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your employee ID number?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
  type: 'input',
    message: 'Please enter your github username:',
    name: 'github',
}];
}

function internQs() { 
const internQuestions = [{
    type: 'input',
    message: 'Hello Intern! What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your employee ID number?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
  type: 'input',
    message: 'Please enter your school',
    name: 'school',
}];
}


//don't know how to use swtich cases
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//console.log()


// // TODO: Create a function to write README file

// function writeToFile(fileName, data) {
//   return fs.writeFileSync (path.join(process.cwd(),fileName),data);
// }

// // TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(question).then((responses)=> {
//     writeToFile('readme.md', markdown({...responses}))
//   })
// }

// // Function call to initialize app
// init();
