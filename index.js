const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "user",
    },
    {
      type: "input",
      message: "What is your location?",
      name: "location",
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
    <body>
    <div class="info">
    <h2>Hi ${response.user}!</h2>
    <p>You are based in ${response.location}.</p>
    <p>Your LinkedIn URL is: ${response.LinkedIn}.</p>
    <p>Your Github URL is: ${response.GitHub}.</p>
    </div>
    </body>
  `;

    fs.writeFile(`${user}.html`, info, (err) =>
      err ? console.error(err) : console.log("Commit logged!")
    );
  });
