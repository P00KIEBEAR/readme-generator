
const fs = require('fs');
// function to generate markdown for README
function generateMarkdown(answers, Acknowledgements, Questions) {

  const { title, about, languages, link, info, color, license } = answers

  return ` # ${title}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
![License: MIT](https://img.shields.io/badge/License-${license}-${color}.svg)
## Table of contents
* [About the Project](#about-the-project)
* [Built with](#built-with)
* [Getting Start](#getting-start)
* [License](#license)
* [Github Link](#github-link)
* [Questions](#questions)
* [Acknowledgements](#acknowledgements)
## About the Project 
${about}
## Build With
${languages.length ? '* ' + languages.join('\n* ') : ''}
## Getting Started
${info}
## License
https://choosealicense.com/licenses/${license}/
## Github Link
${'\n' + link}
## Questions
${Questions.length ? '* ' + Questions.join('\n* ') : ''}
## Acknowledgements 
${Acknowledgements.length ? '* ' + Acknowledgements.join('\n* ') : ''}
## Test
First clone repository!
Then state how to test your code.`

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