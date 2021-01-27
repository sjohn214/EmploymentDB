var connection = require("./db/employmentDBConnection.js");
var inquirer = require("inquirer");


function start() {
    inquirer.prompt([
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
    }, ]).then(function (answer) {
        console.log(answer);
        if (answer.choice === "View all Employee Data") {
            connection.query("SELECT * FROM employment_DB.all_employee_data").then(function (results) {
                console.log(results);
            })
        }
    });
    inquirer.prompt([{
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
    }])
}
    if (answer.choice === "View departments") {
    connection.query("SELECT * FROM employment_DB.department").then(function (results) {
        console.log(results);
    })
}
    inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
}]);

    if (answer.choice === "View roles") {
    connection.query("SELECT * FROM employment_DB.roles").then(function (results) {
        console.log(results);
    })
}
    inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
}]);

if (answer.choice === "View employees") {
    connection.query("SELECT * FROM employment_DB.employees").then(function (results) {
        console.log(results);
    })
}
inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
}]);

if (answer.choice === "View employees by Department") {
    connection.query("SELECT * FROM employment_DB.employee_departments").then(function (results) {
        console.log(results);
    })
}
inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
}]);

if (answer.choice === "View employees by Manager") {
    connection.query("SELECT * FROM employment_DB.employee_managers").then(function (results) {
        console.log(results);
    })
}
inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
}]);
connection.query("SELECT * FROM employees").then(function (results) {
    console.log(results);
});

if (answer.choice === "Update/Add Employee") {
    connection.query("SELECT * FROM employment_DB.employees").then(function (results) {
        console.log(results);
    })
    inquirer.prompt([{
            type: "input",
            name: "update",
            message: "Would you like to update an Employee file?",
            default: ["Yes", "No"]
        },

        {
            type: "input",
            name: "roleid",
            message: "What is the Employee's role id?",
            default: ["1", "2", "3", "4", "5"]
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
            type: "input",
            name: "employeeid",
            message: "What is the Employee's current id number?",
            default: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        },
        {
            type: "input",
            name: "title",
            message: "What is the Employee's title?",
            default: ["Lead Engineer", "Software Engineer", "Sales Leader", "Salesperson", "Accountant", "Managing Attorney", "Lawyer", "HR Leader"]
        },
        {
            type: "input",
            name: "departmentid",
            message: "What is the Employee's department id number?",
            default: ["Sales 1", "Engineering 2", "Finance 3", "Legal 4", "Human Resources 5"]
        }
    ]);
}
connection.query("UPDATE employees").then(function (results) {
    console.log(results);
});


inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
}])
if (answer.choice === "Remove an Employee") {
    connection.query("SELECT * FROM employment_DB.employees").then(function (results) {
        console.log(results);
    })
    inquirer.prompt([{
            type: "list",
            name: "choice",
            message: "Would you like to remove an Employee?",
            choices: ["Yes", "No"]
        }

    ]);
    connection.query("DELETE FROM employees").then(function (results) {
        console.log(results);
    })
}
inquirer.prompt([{
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
}]);
if (answer.choice === "Update Employee manager") {
    connection.query("SELECT * FROM employment_DB.employee_managers").then(function (results) {
        console.log(results);
    })
    inquirer.prompt([{
            type: "list",
            name: "choice",
            message: "Would you like to update an Employee's manager?",
            choices: ["Yes", "No"]
        }

    ]);
    connection.query("UPDATE employees_managers").then(function (results) {
        console.log(results);
    })

    inquirer.prompt([{
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager", "Remove an Employee", "Update/Add Employee", "Update Employee manager"],
    }]);
}

if (answer.choice === "Update/Add Employee") {
    connection.query("SELECT * FROM employment_DB.employees").then(function (results) {
        console.log(results);
    })
    inquirer.prompt([{
            type: "input",
            name: "addnew",
            message: "Would you like to add a new Employee file?",
            default: ["Yes", "No"]
        },
        {
            type: "input",
            name: "roleid",
            message: "What is the Employee's role id?",
            default: ["1", "2", "3", "4", "5"]
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
            type: "input",
            name: "employeeid",
            message: "What is the Employee's new id number? Select a number higher than 9.",

        },
        {
            type: "input",
            name: "title",
            message: "What is the Employee's title?",
            default: ["Lead Engineer", "Software Engineer", "Sales Leader", "Salesperson", "Accountant", "Managing Attorney", "Lawyer", "HR Leader"]
        },
        {
            type: "input",
            name: "departmentid",
            message: "What is the Employee's department id number?",
            default: ["Sales 1", "Engineering 2", "Finance 3", "Legal 4", "Human Resources 5"]
        }
    ])
}
connection.query("UPDATE employees").then(function (results) {
    console.log(results);
});

if (answer.choice === "EXIT") {
    connection.end();
    return
}
start();