import badges from 'badge-maker';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
  if (license === 'Apache License 2.0') {
    return badges('Apache License 2.0');
  }else if (license === 'GNU General Public License v3.0') {
    return badges('GNU General Public License v3.0');
  }else if (license === 'MIT License 2.0') {
    return badges('MIT License 2.0');
  }else if (license === 'BSD 2 - Clause "Simplified" License') {
    return badges('BSD 2 - Clause "Simplified" License');
  }else if (license === 'BSD 3 Clause "New" or "Revised" License') {
    return badges('BSD 3 Clause "New" or "Revised" License');
  }else if (license === 'Boost Software License') {
    return badges('Boost Software License');
  }else if (license === 'Creative Commons Zero v1.0 Universal') {
    return badges('Creative Commons Zero v1.0 Universal');
  }else if (license === 'Eclipse Public License 2.0') {
    return badges('Eclipse Public License 2.0');
  }else if (license === 'GNU General Public License') {
    return badges('GNU General Public License');
  }else if (license === 'GNU Affero General Public License v3.0') {
    return badges('GNU Affero General Public License v3.0');
  }else if (license === 'GNU Lesser General Public License v2.1') {
    return badges('GNU Lesser General Public License v2.1');
  }else if (license === 'Mozilla Public License 2.0') {
    return badges('Mozilla Public License 2.0');
  }else if (license === 'The Unlicense') {
    return badges('The Unlicense');
  }else if (license === 'None') {
    return '';

  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
