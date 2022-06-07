const fs = require("fs")
const inquirer = require('inquirer');
const colors = require('colors');
const createMD = require("./createMD")


const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}

wait(1)
  .then(() => {
    console.log("Welcome to README.md Generator v1.0.5!".bgWhite.black)
    return wait(1)
  })
  .then(() => {
    console.log(`You will be asked a series of questions \n about the what you need a README for, \n then  let the program take care of the rest!`.bgWhite.black)
    return wait(1)
  })
  .then(() => {
    console.log("The README Generator comes loaded with default responses,\n hit enter to apply any of these. \n Happy genorating!".bgWhite.black);
    return runInquirer()
  })


function runInquirer() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the title of your project'.brightCyan,
        name: 'title',
        default: "Super Awesome APP 2.8 🤖"
      },
      {
        type: 'input',
        message: 'Write a descriotion for your app'.green,
        name: 'description',
        default: "I will write this later"
      },
      {
        type: 'input',
        message: 'What packages do you need?'.brightCyan,
        name: 'packages',
        default: 'No packages required'
      },
      {
        type: 'input',
        message: 'How do you use your app?'.green,
        name: 'useage',
        default: "Instructions to come..."
      },
      {
        type: 'list',
        message: 'What license would you like?'.brightCyan,
        name: 'license',
        choices: ["MIT", "OPEN", "NONE", "GPLv3", "Apache License 2.0", "BSD"],
        default: "NONE"
      },
      {
        type: 'input',
        message: 'What is your Github username?'.green,
        name: 'gitHub',
        default: "myUsername"
      },
      {
        type: 'input',
        message: 'What is your email address?'.brightCyan,
        name: 'email',
        default: "test@test.com"
      },
      {
        type: 'input',
        message: 'Who else contributed to this project?'.green,
        name: 'authors',
        default: "N/A"
      },
      {
        type: 'input',
        message: 'How to contribute?'.green,
        name: 'contribute',
        default: "N/A"
      },
      {
        type: 'input',
        message: 'What are the guidelines?'.brightCyan,
        name: 'guidelines',
        default: "No Guidelines"
      },
      {
        type: 'input',
        message: 'Do you have any tests?'.green,
        name: 'tests',
        default: "NO"
      },

    ])
    .then((response) => {
      createMD(response)
    })
    .catch(err => console.error(err));
}