// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name:"title",
        message: "What is the title of your project?",
    },
    {
        type:"input",
        name:"description",
        message: "Please give a brief description of your project.",
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
        type: "input",
        name: "contributors",
        message: "Who are the contributors to your project?",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["None","Apache License 2.0","GNU General Public License v3.0","MIT License 2.0","BSD 2 - Clause 'Simplified' License","BSD 3 Clause 'New' or 'Revised' License","Boost Software License","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0","GNU General Public License ","GNU Affero General Public License v3.0","GNU Lesser General Public License v2.1","Mozilla Public License 2.0","The Unlicense"],
    }
]
const data = ('');
// TODO: Create a function to write README file
const writeFile = (questions) => {
  fs.writeFile('README.md', data, (err) => {
    err ? console.error(err) : console.log('Success! Your README.md file has been generated');
  });

fs.appendFile('README.md',`${questions}\n`, (err) => {
    err ? console.error(err) : console.log('');
});
};
JSON.stringify(questions);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeFile(answers);
    });

}

// Function call to initialize app
init();
