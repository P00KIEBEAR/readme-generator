

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
  message: 'Enter the color of badge you would like?'
},
{
  type: 'list',
  name: 'license',
  message: 'What license for this project with? (Check one)',
  choices: ['mit', 'isc', 'bsd', 'unlicense', 'odbL', 'wtfpl'],
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
const Acknowledgements = [];
const Questions = [];
// Each call to `getName()` will:
// - ask a name and store it in the `names` array
// - ask if they want to include another
// - if they answer yes, then it recursively calls `getName()` again
const getAcknowledgements = () =>
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'acknowledgement',
        message: 'Is there person or links that you would like to acknowledge?',
      },
    ])
    .then(({ acknowledgement }) => Acknowledgements.push(acknowledgement))
    .then(() =>
      inquirer
        .prompt([
          {
            name: 'more',
            message: 'Is there another person or links that you would like to acknowledge?',
            type: 'confirm',
          },
        ])
        .then(({ more }) => {
          if (more) return getAcknowledgements();
          else {
            getQuestions()

          }
        })
    );
const getQuestions = () =>
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'Question',
        message: 'Is there any questions you have?',
      },
    ])
    .then(({ Question }) => Questions.push(Question))
    .then(() =>
      inquirer
        .prompt([
          {
            name: 'more',
            message: 'Is there another any questions you have?',
            type: 'confirm',
          },
        ])
        .then(({ more }) => {
          if (more) return getQuestions();
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

    .then(answers => fs.writeFile('./README.md', generateMarkdown(answers, Acknowledgements, Questions)))

    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

getAcknowledgements()