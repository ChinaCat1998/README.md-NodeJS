import { makeBadge } from 'badge-maker';

// License objects
const MITLicense = {
  label: 'MIT',
  message: 'MIT License',
  color: 'red',
};

const ApacheLicense = {
  label: 'Apache',
  message: 'Apache License 2.0',
  color: 'fuchsia',
};

const GeneralPublicLicense = {
  label: 'GNU',
  message: 'GNU General Public License v3.0',
  color: 'blue',
};

// Function to get license details
function getLicenseDetails(license) {
  switch (license) {
    case 'MIT License 2.0':
      return MITLicense;
    case 'Apache License 2.0':
      return ApacheLicense;
    case 'GNU General Public License v3.0':
      return GeneralPublicLicense;
    case 'None':
      return null;
    default:
      return null;
  }
}

// Function to render license badge
function renderLicenseBadge(license) {
  if (license === "MIT License 2.0") {
    return "https://img.shields.io/badge/License-MIT-red.svg";
  } else if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/License-Apache%202.0-fuchsia.svg";
  } else if (license === "GNU General Public License v3.0") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else {
    return "";
  }
}

// Function to render license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License 2.0':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU General Public License v3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    default:
      return '';
  }
}

// Function to render license section
function renderLicenseSection(license) {
  if (license === "MIT License 2.0") {
    return `${renderLicenseBadge(MITLicense)}\n${renderLicenseLink(
      "MIT License 2.0"
    )}\nThis project is licensed under the ${license} license.`;
  } else if (license === "Apache License 2.0") {
    return `${renderLicenseBadge(ApacheLicense)}\n${renderLicenseLink(
      "Apache License 2.0"
    )}\nThis project is licensed under the ${license} license.`;
  } else if (license === "GNU General Public License v3.0") {
    return `${renderLicenseBadge(GeneralPublicLicense)}\n${renderLicenseLink(
      "GNU General Public License v3.0"
    )}\nThis project is licensed under the ${license} license.`;
  } else if (license === "None") {
    return "";
  }
}
// Function to generate markdown
function generateMarkdown(answers) {
  return `# ${answers.title} 

  ![License Badge](${renderLicenseBadge(answers.license)})
  
## Description
  ${answers.description}

## Table of Contents
${answers.tableOfContents
  .map((item) => `- [${item}](#${item.toLowerCase()})`)
  .join("\n")}

## Installation
  ${answers.installation}  

## Usage
  ${answers.usage}

## License
  \n${renderLicenseSection(answers.license)}

## Contributing
  ${answers.contributing}

## Tests
  ${answers.tests}

## Questions
  If you have any questions about the project, please reach out to:

  -Email: ${answers.email}
  -GitHub: [${answers.github}] (https://github.com/${answers.Github})
`;

}

renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();
export default generateMarkdown;
