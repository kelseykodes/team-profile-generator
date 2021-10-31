const Employee = require('./employee');

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

// officeNumber

// getRole()—overridden to return 'Manager'



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




