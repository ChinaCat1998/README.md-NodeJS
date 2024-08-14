import {makeBadge,ValidationError} from 'badge-maker';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache License 2.0") {
    return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "GNU General Public License v3.0") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "None") {
    return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseBadges = {
  "MIT License 2.0":"[![License: MIT]](https://opensource.org/licenses/MIT)",
  "Apache License 2.0":"[![License](https://opensource.org/licenses/Apache-2.0)",
  "GNU General Public License v3.0":"[![License: GPL v3]](https://opensource.org/licenses/GPL-3.0)",
  "None":""
}

function renderLicenseLink(license) {
  return licenseBadges[license]||"";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License
    This project is licensed under the ${license} license.`;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
export default generateMarkdown;
