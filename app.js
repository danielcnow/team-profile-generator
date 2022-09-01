const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const emailValidator = require('email-validator');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "staff.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

let staff = [];
let canAddManager = true;


const questions = {
    Manager: [
        {
            type: "input",
            name: "name",
            message: "What is the name of the Manager?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter their name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter their id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Try again. E-mail Address not valid.' }
            },
        },
        {
            type: "input",
            name: "officenumber",
            message: "What is the manager's office number?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter their office number." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],

    Engineer: [
        {
            type: "input",
            name: "name",
            message: "What is the name of the Engineer?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter their name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter their id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Try again. E-mail Address not valid.' }
            },
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's GitHub." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],

    Intern: [
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter their name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter their id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Try again. E-mail Address not valid.' }
            },
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter their school name." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Would you like to add another employee",
            choices: ["yes", "no"]
        }
    ]
};

const selectEmployeeType = [
    {
        name: "employeeType",
        type: "list",
        message: "Please choose the role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

function addNewMember() {
    inquirer.prompt(selectEmployeeType)
        .then(answer => {

            if (answer.employeeType === "Manager") {
                if (canAddManager) {
                    inquirer.prompt(questions.Manager)
                        .then(answer => {
                            const manager = new Manager
                                (
                                    answer.name,
                                    answer.id,
                                    answer.email,
                                    answer.officenumber
                                );
                            staff.push(manager);
                            canAddManager = false;
                            if (answer.addNew === "yes") {
                                addNewMember();
                            } else {
                                generate();
                            }
                        });
                } else {
                    console.log("There can only be one!")
                    addNewMember();
                }


            } else if (answer.employeeType === "Engineer") {
                inquirer.prompt(questions.Engineer)
                    .then(answer => {
                        const engineer = new Engineer
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.github
                            );

                        staff.push(engineer);
                        if (answer.addNew === "yes") {
                            addNewMember();
                        } else {
                            generate();
                        };
                    });

            } else if (answer.employeeType === "Intern") {
                inquirer.prompt(questions.Intern)
                    .then(answer => {

                        const intern = new Intern
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.school
                            );

                        staff.push(intern);
                        if (answer.addNew === "yes") {
                            addNewMember();
                        } else {
                            generate();
                        };
                    });
            };
        });
};

addNewMember();

function generate() {
    fs.writeFileSync(outputPath, render(staff), "utf-8");
    process.exit(0);
}