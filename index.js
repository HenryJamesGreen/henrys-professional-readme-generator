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
      message: "What is your linkedIn URL?",
      name: "LinkedIn",
    },
    {
      type: "input",
      message: "What is your GitHub URL?",
      name: "GitHub",
    },
  ])
  .then((response) => {
    //takes argument of specific properties belonging to the response, thus destructuring.

    const info = `
    # ${response.title}
    ## ${response.description}
    
  `;

    const folder = "generated-readmes";
    const filePath = `${folder}/${response.title}.md`;

    fs.writeFile(filePath, info, (err) =>
      err ? console.error(err) : console.log("Commit logged!")
    );
  });
