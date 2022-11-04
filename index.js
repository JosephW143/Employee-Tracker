const db = require('./db/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const { exit } = require('process');

const init = () => {
    inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'Please select an option from the list',
        choices: [
            'View all Employees',
            'Add Employee',
            'Remove Employee',
            'View all Roles',
            'Add Role',
            'Remove Role',
            'View all Departments',
            'Add Department',
            'Remove Department',
            'Quit'
        ]
    })
        .then((answer) => {
            switch (answer.choice) {
                case 'View all Employees':
                viewEmployees();
                break;

                case 'Add Employee':
                addEmployee();
                break;

                case 'Remove Employee':
                removeEmployee();
                break;

                case 'View all Roles':
                viewRole();
                break;

                case 'Add Role':
                addRole();
                break;

                case 'Remove Role':
                removeRole();
                break;

                case 'View all Departments':
                viewDepartment();
                break;

                case 'Add Department':
                addDepartment();
                break;

                case 'Remove Department':
                removeDepartment();
                break;

                case 'Quit':
                quit();
                break;
            }
        })
};

const viewEmployees = () => {
    db.query(
        `SELECT`,
        (err, res) => {
            if (err) throw err;
            console.table(res)
        }
    )
};

const addEmployee = () => {
    db.query(`SELECT * FROM role;`, (err, res) => {
        if (err) throw err;
        inquirer.prompt([
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
};

const removeEmployee = () => {

};

const viewRole = () => {

};

const addRole = () => {

};

const removeRole = () => {
    
};

const viewDepartment = () => {
    
};

const addDepartment = () => {
    
};

const removeDepartment = () => {
    
};

const quit = () => {
    db.end();
};