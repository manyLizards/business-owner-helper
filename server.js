// install console.table, inquirer, sql and sql2
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const sql2 = require('mysql2');
const connection = require('mysql2/typings/mysql/lib/Connection');
const { resourceLimits } = require('worker_threads');

//instill a link to the database
const db = mysql.createconnection(
    {
        host: 'localhost',
        port: 1234,
        user: 'root',
        password: '1ring2rule-them-all',
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
//Create an array for the questions to add a role
const addRole = [
    {
        type: 'input',
        name: 'roleName',
        message: "What is the new role?"
    },
    {
        type: 'input',
        name: 'salary',
        message: "How much will a person in this role be making?"
    },
    {
        type: 'list',
        name: 'roleDept',
        message: "Which department will this role be in?",
        choices: function () {
            var arrChoices = [];

            for (var i = 0; i < result.length; i++) {
                arrChoices.push(result[i].roleDept);
            }

            return arrChoices;
        }
    }

]

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
                name: answer.departmentName
            }))
            startQuestions()
        }
        if (answer === "add role") {
            inquirer
            .prompt(addRole)
            .then((answer) => db.query("INSERT INTO roles SET ?", {
                title: answer.roleName,
                salary: parseInt(answer.salary),
                department_id: parseInt(result[0].id)
            }))
            startQuestions()
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