const fs = require("fs")
const inquirer = require('inquirer');
const createMD = require("./createMD")


inquirer
  .prompt([

    {
      type: 'input',
      message: 'Write a descriotion for your app',
      name: 'description',
      default: "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor..."
    },
    {
      type: 'input',
      message: 'What packages do you need?',
      name: 'packages',
      default: 'Lookout flogging bilge rat main sheet bilge'
    },
    {
      type: 'input',
      message: 'How do you use your app?',
      name: 'useage',
      default: "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen"
    },
    {
      type: 'list',
      message: 'What license would you like?',
      name: 'license',
      choices: ["MIT", "OPEN", "NONE"],
      default: "MIT"
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'gitHub',
      default: "github"
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      default: "test@test.com"
    },
    {
      type: 'input',
      message: 'How to contribute?',
      name: 'contribute',
      default: "Just say anything, George, say what ever's natural, the first thing that comes to your mind. Take that you mutated son-of-a-bitch. My pine, why you. You space bastard, you killed a pine."
    },
    {
      type: 'input',
      message: 'What are the guidelines?',
      name: 'guidelines',
      default: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      type: 'input',
      message: 'Do you have any tests?',
      name: 'tests',
      default: "NO"
    },
  ])
  .then((response) => {
    // console.log(response)
    createMD(response)
  });