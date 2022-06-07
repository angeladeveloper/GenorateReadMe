const fs = require("fs")
const inquirer = require('inquirer');
const colors = require('colors');
const createMD = require("./createMD")


const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}

wait(2)
  .then(() => {
    console.log("Welcome to my readMe genorator!".green)
    return wait(2)
  })
  .then(() => {
    console.log(`You will be asked a series of quiestion about the what you need a README for, Then  let the program take care of the rest!`.magenta)
    return wait(2)
  })
  .then(() => {
    console.log("The README geneorator comes loaded with default responses, hit enter to apply any of these. \n Happy genorating!".blue);
    return runInquirer()
  })


function runInquirer() {
  inquirer
    .prompt([

      {
        type: 'input',
        message: 'Write a descriotion for your app'.cyan,
        name: 'description',
        default: "I will write this later"
      },
      {
        type: 'input',
        message: 'What packages do you need?'.green,
        name: 'packages',
        default: 'Lookout flogging bilge rat main sheet bilge'
      },
      {
        type: 'input',
        message: 'How do you use your app?'.cyan,
        name: 'useage',
        default: "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen"
      },
      {
        type: 'list',
        message: 'What license would you like?'.green,
        name: 'license',
        choices: ["MIT", "OPEN", "NONE", "GPLv3", "Apache License 2.0", "BSD"],
        default: "MIT"
      },
      {
        type: 'input',
        message: 'What is your Github username?'.cyan,
        name: 'gitHub',
        default: "github"
      },
      {
        type: 'input',
        message: 'What is your email address?'.green,
        name: 'email',
        default: "test@test.com"
      },
      {
        type: 'input',
        message: 'How to contribute?'.cyan,
        name: 'contribute',
        default: "No Contributing"
      },
      {
        type: 'input',
        message: 'What are the guidelines?'.green,
        name: 'guidelines',
        default: "No Guidelines"
      },
      {
        type: 'input',
        message: 'Do you have any tests?'.cyan,
        name: 'tests',
        default: "NO"
      },
    ])
    .then((response) => {
      createMD(response)
    })
    .catch(err => console.error(err));
}