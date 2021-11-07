const Employee = require('./employee');
// const Team = require('./index');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super (name, id, email)
       this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    
    }
    
    getRole(){
        return 'manager'
    }
}

module.exports = Manager;






















// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// const inquirer = require("inquirer");
// function appMenu() {
//   function createManager() {
//     console.log("Please build your team 👥");
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "managerName",
//           message: "What is the team manager's name?",
//           validate: (answer) => {
//             if (answer !== "") {
//               return true;
//             }
//             return "Please enter at least one character.";
//           },
//         },
//         {
//           type: "input",

//           name: "managerId",
//           message: "What is the team manager's id?",
//           validate: (answer) => {
//             const pass = answer.match(/^[1-9]\d*$/);
//             if (pass) {
//               return true;
//             }
//             return "Please enter a positive number greater than zero.";
//           },
//         },
//         {
//           type: "input",
//           name: "managerEmail",
//           message: "What is the team manager's email?",
//           validate: (answer) => {
//             const pass = answer.match(/\S+@\S+\.\S+/);
//             if (pass) {
//               return true;
//             }
//             return "Please enter a valid email address.";
//           },
//         },
//         {
//           type: "input",
//           name: "managerOfficeNumber",
//           message: "What is the team manager's office number?",
//           validate: (answer) => {
//             const pass = answer.match(/^[1-9]\d*$/);
//             if (pass) {
//               return true;
//             }
//             return "Please enter a positive number greater than zero.";
//           },
//         },
//       ])
//       .then((answers) => {
//         const manager = new Manager(
//           answers.managerName,
//           answers.managerId,
//           answers.managerEmail,
//           answers.managerOfficeNumber
//         );
//         teamMembers.push(manager);
//         idArray.push(answers.managerId);
//         createTeam();
//       });
//   }
//   createManager();
// }
// appMenu();