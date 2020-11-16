

const { clear } = require('console');
const inquirer = require('inquirer');


// array of questions for user

// function to write README file
const writeToFile = (readMe, answers) => {
  //make varibles!!
  return inquirer.
    prompt([
      /* Pass your questions in here */
      {
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
      }

    ])
    .then(answers => {
      //don' forget badge!!
      /*
  fs.writeFile('.README.md', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Page created! Check out README.md in this directory to see it!');
  })
  */

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