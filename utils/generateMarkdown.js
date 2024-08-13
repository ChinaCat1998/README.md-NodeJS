import {makeBadge,ValidationError} from 'badge-maker';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License 2.0") {
    return makeBadge({
      label: "MIT",
      message: "MIT",
      color: "blue",
    });
  } else if (license === "Apache License 2.0") {
    return makeBadge({
      label: "Apache",
      message: "Apache",
      color: "red",
    });
  } else if (license === "GNU General Public License v3.0") {
    return makeBadge({
      label: "GNU",
      message: "GNU",
      color: "green",
    });
  } else if (license === "None") {
    return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License 2.0") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GNU General Public License v3.0") {
    return "https://opensource.org/licenses/GPL-3.0";
  } else if (license === "None") {
    return "";
  }


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
