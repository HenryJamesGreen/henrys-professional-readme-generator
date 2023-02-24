const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the project description?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage information for your project?",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines for your project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What are the test instructions for your project?",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email",
      name: "email",
    },
    {
      type: "list",
      message: "Choose a license for your project",
      name: "license",
      choices: ["MIT", "Apache", "BSD 3-Clause", "GNU GPL v3", "None"],
    },
  ])
  .then((response) => {
    //takes argument of specific properties belonging to the response, thus destructuring.

    let licenseBadge;
    switch (response.license) {
      case "MIT":
        licenseBadge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Apache":
        licenseBadge =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "BSD 3-Clause":
        licenseBadge =
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "GNU GPL v3":
        licenseBadge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      default:
        licenseBadge = "none";
    }

    const info = `
${licenseBadge}

# ${response.title}

## ${response.description}

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions

GitHub profile - https://github.com/${response.github}

For more information/to ask questions, feel free to contact via email, at ${response.email}. Thank you.

  `;

    const folder = "generated-readmes";
    const filePath = `${folder}/${response.title}.md`;

    fs.writeFile(filePath, info, (err) =>
      err ? console.error(err) : console.log("Commit logged!")
    );
  });
