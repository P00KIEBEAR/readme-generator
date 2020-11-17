
const fs = require('fs');
// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers)
  fs.writeFile('./README.md', err => {
    if (err) {
      console.log(err);
      return '#' + title

      /** Table of contents
      * About the Project
      * built with
      * Getting Start
      * Acknowledements*/

      "## About the Project" + about

      "## Build With" + languages

      /*## Gettting Started
      
              ** Screenshot ***/

      "## Acknowlledements" + acknowlledements
    }

    console.log('Page created! Check out README.md in this directory to see it!');
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
1.
*/