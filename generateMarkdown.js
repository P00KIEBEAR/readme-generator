
const fs = require('fs');
// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers)
  const { title, about, languages, link, acknowlledements } = answers
  console.log(title)
  fs.appendFile('./README.md',
    //BADGE!!!!
    '#' + title +
    link + '/n/' +
    `* Table of contents
      * About the Project
      * built with
      * Getting Start
      * Acknowledements` +

    "## About the Project" + about + '/n/' +

    "## Build With" + languages + '/n/' +

    /*## Gettting Started
    
            ** Screenshot ***/

    "## Acknowlledements" + acknowlledements,

    err => {

      if (err) {
        console.log(err);
        return console.log('Page created! Check out README.md in this directory to see it!');
      }
    })



}

module.exports = generateMarkdown;

/*
BADGE  don't forget badge!!
'#' + title

* Table of contents
* About the Project
* built with
* Getting Start
* Acknowledements

'## About the Project' + about

'## Build With' + languages

- HTML
- CSS
- javascript

## Gettting Started

**Screenshot**

"## Acknowlledements" + acknowlledements
*/