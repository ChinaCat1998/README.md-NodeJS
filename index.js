// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
//get (generateMarkdown)
// TODO: Create an array of questions for user input
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please give a brief description of your project.",
  },
  {
    type: "checkbox",
    name: "tableOfContents",
    message:
      "Please select which sections you'd like to use in your Table of Contents.",
    choices: [
      "Installation",
      "Usage",
      "License",
      "Contributing",
      "Tests",
      "Questions",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information for your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: [
      "None",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License 2.0",
    ],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests are included in your project?",
  },
  {
    type: "input",
    name: "questions",
    message: "What questions do you have about your project?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?",
  },
  {
    type: "input",
    name: "Github",
    message: "what is your Github username?",
  },
];



const data = ('');
// TODO: Create a function to write README file
const writeFile = (data) => {
  fs.writeFile('README.md', data, (err) => {
    err ? console.error(err) : console.log('Success! Your README.md file has been generated');
  })};

/*fs.appendFile('README.md',`${questions}\n`, (err) => {
    err ? console.error(err) : console.log('');
});
};

JSON.stringify(questions);*/

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
  const markdownContent = generateMarkdown(answers);
  writeFile(markdownContent);
})};

init();