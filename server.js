// install console.table, inquirer, sql and sql2
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const sql2 = require('mysql2');
const Connection = require('mysql2/typings/mysql/lib/Connection');

//instill a link to the database
const db = mysql.createconnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'owner_db'
    },
    console.log('Connected to the owner_db database.')
)

//create array for the menu question
const menu = [
    {
        type: 'list',
        name: 'menu',
        message: "Which action would you like to do?",
        choices: ["view all departments", "view all roles", "view all employees", "add department", "add role", "add employee", "update employee role", "update employee manager", "view employees by manager", "view employees by department", "delete department", "delete role", "delete employee", "view department budget"]
    }
]
//Create an array for the question to add the department
const addDept = [
    {
        type: 'input',
        name: 'departmentName',
        message: "What is the name of the new department?",
    }
]

function request() {
    inquirer
    .prompt()
}

//Create a function to start the menu and run the questions
function startQuestions () {
    inquirer
    .prompt(menu)
    .then((answer) => {
        if (answer === "view all departments") {
            console.table('department')
            startQuestions()
        }
        if (answer === "view all roles") {
            console.table('roles')
            startQuestions()
        }
        if (answer === "view all employees") {
            console.table('employees')
            startQuestions()
        }
        if (answer === "add department") {
            inquirer
            .prompt(addDept)
            .then((answer) => db.query("INSERT INTO departments SET ?", {
                name: answer.addDept
            }))
            startQuestions()
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