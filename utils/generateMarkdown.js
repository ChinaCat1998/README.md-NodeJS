import {makeBadge,ValidationError} from 'badge-maker';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

const MITLicense = {
  label: "MIT",
  message: "MIT License",
  color: "red",
};
const ApacheLicense = {
  label: "Apache",
  message: "Apache License 2.0",
  color: "fuchsia",
};
const GeneralPublicLicense = {
  label: "GNU",
  message: "GNU General Public License v3.0",
  color: "blue",
};
function makeBadge({ label, message, color }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="20">
    <rect width="100" height="20" fill="${color}" />
    <text x="10" y="15" fill="white">${label}: ${message}</text>
  </svg>`;
};
function getLicenseDetails(license) {
  if (license === "MIT License 2.0") {
    return (MITLicense);
  }else if (license === "Apache License 2.0") {
    return (ApacheLicense);
  }else if (license === "General Public License v3.0") {
    return (GNUGeneralPublicLicense);
  }else if (license === "None") {
    return "";
}
};

const svgMIT = makeBadge(getLicenseDetails("MIT License 2.0"));
const svgApache = makeBadge(getLicenseDetails("Apache License 2.0"));
const svgGNU = makeBadge(getLicenseDetails("GNU General Public License v3.0"));

console.log(svgMIT);
console.log(svgApache);
console.log(svgGNU);

  const licenseDetails = getLicenseDetails(license);
  if (licenseDetails) {
    return makeBadge(licenseDetails);
  } else {
    return "";
  }
}
try {
  const licenseDetails = getLicenseDetails("MIT License 2.0");
  const badge = makeBadge(licenseDetails);
  console.log(badge);
} catch (error) {
  console.error("An error occurred:", error);
}
try {
  const licenseDetails = getLicenseDetails("Apache License 2.0");
  const badge = makeBadge(licenseDetails);
  console.log(badge);
} catch (error) {
  console.error("An error occurred:", error);
}
try {
  const licenseDetails = getLicenseDetails("GNU General Public License v3.0");
  const badge = makeBadge(licenseDetails);
  console.log(badge);
} catch (error) {
  console.error("An error occurred:", error);
}


renderLicenseBadge("MITLicense");
renderLicenseBadge("ApacheLicense");
renderLicenseBadge("GNUGeneralPublicLicense");

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === "MIT License 2.0") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GNU General Public License v3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else {
    return "";
  }
}
console.log(renderLicenseLink("MIT License 2.0"));
console.log(renderLicenseLink("Apache License 2.0"));
console.log(renderLicenseLink("GNU General Public License v3.0"));


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License
    This project is licensed under the ${license} license.`;
  }
};

console.log(renderLicenseSection("MIT License 2.0"));
console.log(renderLicenseSection("Apache License 2.0"));
console.log(renderLicenseSection("GNU General Public License v3.0"));
console.log(renderLicenseSection("None"));

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
export default generateMarkdown;
