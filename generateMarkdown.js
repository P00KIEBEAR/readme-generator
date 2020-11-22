
const fs = require('fs');
// function to generate markdown for README
function generateMarkdown(answers, Acknowlledements, Questions) {

  const { title, about, languages, link, info, color, license } = answers

  return ` # ${title}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
![License: MIT](https://img.shields.io/badge/License-${license}-${color}.svg)
## Table of contents
* [About the Project](#about-the-project)
* [Built with](#built-with)
* [Getting Start](#getting-start)
* [License](#license)
* [Githun Link](#github-link)
* [Questions](#questions)
* [Acknowledements](#acknowledements)
## About the Project 
${about}
## Build With
${languages.length ? '* ' + languages.join('\n* ') : ''}
## Gettting Started
${info}
## License
https://choosealicense.com/licenses/${license}/
## Github Link
${'\n' + link}
## Questions
${Questions.length ? '* ' + Questions.join('\n* ') : ''}
## Acknowlledements 
${Acknowlledements.length ? '* ' + Acknowlledements.join('\n* ') : ''}`

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