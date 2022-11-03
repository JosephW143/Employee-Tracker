const db = require('./db/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');


const viewEmployees = () => {
    db.query(
        `SELECT`,
        (err, res) => {
            if (err) throw err;
            console.table(res)
        }
    )
}

const addEmployee = () => {
    db.query(`SELECT * FROM role;`, (err, res) => {
        if (err) throw err;
        inquirer.createPromptModule([
            {
                name: 'first_name',
                type: 'input',
                message: 'Enter the Emplyees first name:'
            },
            {
                name: 'last_name',
                type: 'input',
                message: 'Enter the Employees last name:'
            },
            {
                name: 'role',
                type: 'input',
                message: 'What is the role ID of this Employee'
            },
            {
                name: 'manager_id',
                type: 'input',
                message: 'Enter the ID of this Employees Manager'
            }
        ])
            .then((answer) => {
                db.query(
                    `INSERT INTO employee SET ?`,
                    [
                        {
                            first_name: answer.first_name,
                            last_name: answer.last_name,
                            role: answer.role,
                            manager_id: answer.manager_id
                        }
                    ],
                    (err, res) => {
                        if (err) throw err;
                        console.log(`${res.affectedRows} employee added!`)
                        viewEmployees();
                    }
                )
            })
    })
}