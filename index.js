var connection = require("./db/employmentDBConnection.js");
var inquirer = require("inquirer");
var mysql = require("mysql");


function start() {
    inquirer.prompt([
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View all Employee Data", "View departments", "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update Employee", "Update Employee manager", "Add Employee"],
    }, ]).then(function (answer) {
        console.log(answer);
        if (answer.choice === "View all Employee Data") {
            connection.query("SELECT * FROM employment_DB.all_employee_data").then(function (results) {
                console.log(results);
                start();
            })
        } else if (answer.choice === "View departments") {
            connection.query("SELECT * FROM employment_DB.department").then(function (results) {
                console.log(results);
                start();
            })

        } else if (answer.choice === "View roles") {
            connection.query("SELECT * FROM employment_DB.roles").then(function (results) {
                console.log(results);
                start();
            })
        } else if (answer.choice === "View employees") {
            connection.query("SELECT * FROM employment_DB.employees").then(function (results) {
                console.log(results);
                start();
            })
        } else if (answer.choice === "View employees by Department") {
            connection.query("SELECT * FROM employment_DB.employee_departments").then(function (results) {
                console.log(results);
                start();
            })
        } else if (answer.choice === "View employees by Manager") {
            connection.query("SELECT * FROM employment_DB.employee_managers").then(function (results) {
                console.log(results);
                start();
            })
        } else if (answer.choice === "Update Employee") {
            connection.query("SELECT * FROM employment_DB.employees").then(function (results) {
                console.log(results);
                updateEmployee();
                connection.query("UPDATE employees SET manager_id = ? WHERE last_name = ? AND first_name = ?").then(function (results) {
                    console.log(results)
                start();
                });
            })
        // }else if (answer.choice === "Remove an Employee") {
        //     connection.query("SELECT * FROM employment_DB.employees").then(function (results) {
        //         console.log(results);
        //         removeEmployee();
        //         connection.query("DELETE FROM employees WHERE last_name = ? AND first_name = ? AND").then(function (results) {
        //             console.log(results);
        //         start();
        //         })
        //     }) STILL WORKING ON THIS
        // }else if (answer.choice === "Update Employee manager") {
        //     connection.query("SELECT * FROM employment_DB.employee_managers").then(function (results) {
        //         console.log(results);
        //         updateEmManager();
        //         connection.query("UPDATE employee_managers SET manager_id = ? WHERE last_name = ? AND first_name = ?").then(function (results) {
        //             console.log(results);
        //         start();
        //         })
        //     }) STILL WORKING ON THIS
            
        // }else if (answer.choice === "Add Employee"){
            connection.query("SELECT * FROM employment_DB.add_employees").then(function (results) {
                console.log(results);
                addEmployee();
                // connection.query(function (results) {
                //     console.log(results);
                //     var sql = "INSERT INTO add_employees(role_id, last_name, first_name, title, department_id) VALUES ?";
                //     var values = [
                //         ['Heartwell','Chistoff', 2, 'Software Engineer',2],
                //         ['Jordan', 'Michaela', 2, 'Salesperson', 3],
                //         ['Barthwell','Lordes', 1, 'Salesperson',3]
                //     ];
                // connection.query(sql,[values],function (results) {
                //     console.log(results);
                // })
                start();
                // }) STILL WORKING ON THIS/////////////////////////////
            })
        
        }else if (answer.choice === "EXIT") {
            connection.end();
            return
        }
    });
}start();


// Prompts and function for update Employees//
function updateEmployee() {

    inquirer.prompt([
        {
            type: "list",
            name: "roleid",
            message: "What is the Employee's role id?",
            choices: ["1", "2", "3", "4", "5"]
        },
        {
            type: "input",
            name: "firstname",
            message: "What is the Employee's first name?",

        },
        {
            type: "input",
            name: "lastname",
            message: "What is the Employee's last name?",

        },
        {
            type: "list",
            name: "employeeid",
            message: "What is the Employee's current id number?",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        },
        {
            type: "list",
            name: "title",
            message: "What is the Employee's title?",
            choices: ["Lead Engineer", "Software Engineer", "Sales Leader", "Salesperson", "Accountant", "Managing Attorney", "Lawyer", "HR Leader"]
        },
        {
            type: "list",
            name: "departmentid",
            message: "What is the Employee's department id number?",
            choices: ["Sales 1", "Engineering 2", "Finance 3", "Legal 4", "Human Resources 5"]
        }
    ]);
};


// Prompts and function for Remove Employee//
function removeEmployee() {
    inquirer.prompt([
    {
        type: "input",
        name: "lastname",
        message: "What is the Employee's last name?",

    },
    {
        type: "input",
        name: "firstname",
        message: "What is the Employee's first name?",

    }
]);
};

// Prompts and function for Update Employee Manager//
function updateEmManager() {
    inquirer.prompt([
    {
        type: "list",
        name: "managerID",
        message: "What is the Employee's manager ID?",
        choices: ["Lead Engineer 1", "Sales Lead 3", "Managing Attorney 6"]
    },
    {
        type: "input",
        name: "lastname",
        message: "What is the Employee's last name?",

    },
    {
        type: "input",
        name: "firstname",
        message: "What is the Employee's first name?",

    }
]);
};


// Prompts and function for Add Employee//
function addEmployee() {
    
    inquirer.prompt([
        {
            type: "list",
            name: "roleid",
            message: "What is the Employee's role id?",
            choices: ["Heartwell, Chistoff 2 Software Engineer 2", "Jordan, Michaela 1 Salesperson 3", "Barthwell, Lordes 1 Salesperson 3"]
        }
    ]);
};
