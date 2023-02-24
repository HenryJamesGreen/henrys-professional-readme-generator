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
  ])
  .then((response) => {
    //takes argument of specific properties belonging to the response, thus destructuring.

    const info = `
# ${response.title}

## ${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License

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
