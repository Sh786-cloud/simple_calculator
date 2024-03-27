#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First Number.", type: "number", name: "FirstNumber" },
    { message: "Enter your Second Number.", type: "number", name: "SecondNumber" },
    { message: "Select one of the operators to perform operation.",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"] }
]);
// Conditional statements
if (answer.operator === "addition") {
    console.log("Your value is ", answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "subtraction") {
    console.log("Your value is ", answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "multiplication") {
    console.log("Your value is ", answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "division") {
    console.log("Your value is ", answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please select valid operator.");
}
;
