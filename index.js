import inquirer from 'inquirer';
import fs from 'fs';

const questions = [{
    type: "input",
    name: "text",
    message: "Enter three characters:",
},
{
    type: "input",
    name: "textColor",
    message: "Enter a color keyword or hexadecimal number for text:",
},
{
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
},
{
    type: "input",
    name: "shapeColor",
    message: "Enter a color keyword or hexadecimal number for shape color:",
},];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`File ${fileName} created successfully.`);
    }
    });}

    function init() { inquirer
        .prompt(questions)
        .then((answers))}