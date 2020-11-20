

const { clear } = require('console');
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./generateMarkdown')

// array of questions for user
let questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the name of your project?'
},
{
  type: 'input',
  name: 'color',
  message: 'Enter the color of bagde you would like?'
},
{
  type: 'list',
  name: 'license',
  message: 'What license for this project with? (Check one)',
  choices: ['MIT', 'ISC', 'BSD', 'Unlicense', 'ODbL'],
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
  type: 'input',
  name: 'info',
  message: 'Provide a description on how to use it.',
  default: 'I will come back to fill this out!'


  //if I have time add more acknowllede!

}]
const Acknowlledements = [];
// Each call to `getName()` will:
// - ask a name and store it in the `names` array
// - ask if they want to include another
// - if they answer yes, then it recursively calls `getName()` again
const getAcknowlledements = () =>
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'acknowlledement',
        message: 'Is there person or links that you would like to acknowllede?',
      },
    ])
    .then(({ acknowlledement }) => Acknowlledements.push(acknowlledement))
    .then(() =>
      inquirer
        .prompt([
          {
            name: 'more',
            message: 'Is there another person or links that you would like to acknowllede?',
            type: 'confirm',
          },
        ])
        .then(({ more }) => {
          if (more) return getAcknowlledements();
          else {
            askQuestion()

          }
        })
    );
// Here we kick off the recursion

// When all of the recursion is finished we step into this function
// and the `names` array has been populated

// function to write README file
const askQuestion = () => {

  //make varibles!!
  inquirer.
    prompt(questions)

    .then(answers => fs.writeFile('./README.md', generateMarkdown(answers, Acknowlledements)))

    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

getAcknowlledements()