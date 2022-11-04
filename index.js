const db = require('./db/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const { exit } = require('process');
const { type } = require('os');

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
        `SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, role.title AS title, department. department_name AS department, roles.salary AS salary`,
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
                message: 'What is the role ID of this Employee:'
            },
            {
                name: 'manager_id',
                type: 'input',
                message: 'Enter the ID of this Employees Manager:'
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
    db.query(`SELECT * FROM employee;`, (err, res) => {
        if(err) throw err;
        inquirer.prompt([
            {
                name: 'employee',
                type: 'input',
                message: 'What is the ID of the Employee you wish to remove:'
            }
        ])
            .then((answer) => {
                db.query(`DELETE FROM employee WHERE ?`),
                {
                    id: (answer.employee)
                },
                (err, res) => {
                    if(err) throw err
                    console.log(`${affectedRows} Deleted!`)
                }
            })
    })
};

const viewRole = () => {
    db.query(
        `SELECT role.id "id", role.title "title" FROM role;`,
        (err, res) => {
            if (err) throw err;
            console.table(res)
            init();
        }
    )
};

const addRole = () => {
    db.query(`SELECT * FROM departments`, (err, res) => {
        if (err) throw err;
        inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the new Roles Name:'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is Salary of this Role:'
            },
            {
                name: 'Department',
                type: 'input',
                message: 'what is the Department ID for this Role:'
            }
        ])
            .then((answer) => {
                db.query(
                    `INSERT INTO role SET ?`,
                    [
                        {
                            title: answer.title,
                            salary: answer.salary,
                            department_id: answer.department
                        }
                    ],
                    (err, res) => {
                        if (err) throw err;
                        console.log(`${res.affectedRows} Role Added!`)
                        viewRole();
                    }
                )
            })
    })
};

const removeRole = () => {
    db.query(`SELECT * FROM roles;`, (err, res) => {
        if (err) throw err;
        inquirer.prompt([
            {
                name: 'role',
                type: 'input',
                message: 'What Role would you like to Remove:'
            }
        ])
            .then((answer) => {
                db.query(
                    `DELETE FROM role WHERE ?`,
                    {
                        title: (answer.role)
                    },
                    (err, res) => {
                        if (err) throw err;
                        console.log(`${res.affectedRows} Deleted!`)
                        viewRole();
                    }
                )
            })
    })
};

const viewDepartment = () => {
    db.query(
        `SELECT * FROM department:`,
        (err, res) => {
            if (err) throw err;
            console.table(res)
            init();
        }
    )
};

const addDepartment = () => {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'What Department would you like add:'
        }
    ])
        .then((answer) => {
            db.query(
                `INSERT INTO department SET ?`,
                [
                    {
                        department_name: answer.name
                    }
                ],
                (err, res) => {
                    if (err) throw err;
                    console.log(`${res.affectedRows} new Department added!`)
                    viewDepartment();
                }
            )
        })
};

const removeDepartment = () => {
    
};

const quit = () => {
    db.end();
};