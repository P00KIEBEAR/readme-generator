

const { clear } = require('console');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// array of questions for user
let questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the name of your project?'
},
{
  type: 'input',
  name: 'about',
  message: 'Provide a description of the project.',
  default: 'I will come back to fill this out!'
},
{
  type: 'checkbox',
  name: 'languages',
  message: 'What did you build this project with? (Check all that apply)',
  choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
},
{
  type: 'input',
  name: 'link',
  message: 'Enter the GitHub link to your project. (Required)'
},
{
  type: 'confirm',
  name: 'feature',
  message: 'Would you like to feature this project?',
  default: false
},
{
  type: 'input',
  name: 'acknowlledements',
  message: 'Is there anyone or links that you would like to acknowllede?'
  //if I have time add more acknowllede!
}

]
// function to write README file
const writeToFile = () => {

  //make varibles!!
  inquirer.
    prompt(questions)

    .then(answers => {
      const { tilte, about, languages, link, feature, acknowlledements } = answers
      generateMarkdown(answers)
      // console.log(answers)
      // Use user feedback for... whatever!!
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}


// function to initialize program
function init() {

}

// function call to initialize program
//init();
writeToFile()