// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    gnu: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  return licenseBadge[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    gnu:'[GNU](https://choosealicense.com/licenses/gpl-3.0/)',
    mit: '[MIT](https://choosealicense.com/licenses/mit/)'
  }
  return licenseLink[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `${this.renderLicenseLink(license)}`
  }else {
    return ''
  }
  }


// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
  const generateMarkdown = answers => {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contribute](#contribute)
  *[Test](#test)
  *[Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${this.renderLicenseSection(answers.license)}

  ## Contribute
  ${answers.contribute}

  ## Test
  ${answers.test}

  ## Questions
  If you have any question please contact me at my email ${answers.email} or at GitHub ${answers.github}.





`;
}

module.exports = generateMarkdown;
