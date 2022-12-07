// install console.table, inquirer, sql and sql2
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const sql2 = require('mysql2');
const db = mysql.createconnection

//create array of questions
const menu = [
    {
        type: 'checkbox',
        name: 'first-option',
        message: "Which action would you like to do?",
        choices: ["view all departments", "view all roles", "view all employees", "add department", "add role", "add employee", "update employee role", "update employee manager", "view employees by manager", "view employees by department", "delete department", "delete role", "delete employee", "view department budget"]
    }
]

function request() {
    inquirer
    .prompt()
}

function startQuestions () {
    inquirer
    .prompt(menu)
    .then((answer) => {
        if (answer === "view all departments") {
            
        }
        if (answer === "view all roles") {

        }
        if (answer === "view all employees") {

        }
        if (answer === "add department") {

        }
        if (answer === "add role") {

        }
        if (answer === "add employee") {

        }
        if (answer === "update employee role") {

        }
        if (answer === "update employee manager") {

        }
        if (answer === "view employees by manager") {

        }
        if (answer === "view employees by department") {

        }
        if (answer === "delete department") {

        }
        if (answer === "delete role") {

        }
        if (answer === "delete employee") {

        }
        else {
            
        }
    })
}