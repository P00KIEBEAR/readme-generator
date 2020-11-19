
const fs = require('fs');
// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers)
  const { title, about, languages, link, acknowlledements, color, license } = answers
  console.log(title)
  fs.appendFile('./README.md',
    //BADGE!!!!
    ` # ${title}

    [![License: ${license}](https://img.shields.io/badge/license-${license}-${color}.svg)](http://${license}.org/)
    [badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
      ${link}
    ## Table of contents
      * About the Project
      * built with
      * Getting Start
      * Acknowledements

    ## About the Project 
    ${about}

    "## Build With" 
    ${languages}

    ## Gettting Started
    
            ** Screenshot **

    ## Acknowlledements 
    ${acknowlledements}`,

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