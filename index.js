var connection = require("./db/employmentDBConnection");
var inquirer = require("inquirer");


function start() {
    inquirer.prompt([
    {   
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View all Employee Data", "View departments" , "View roles", "View employees", "View employees by Department", "View employees by Manager","Add an Employee", "Remove an Employee", "Update Employee", "Update Employee manager"],
},
]).then(function(answer){
    console.log(answer);
    if (answer.choice === "View all Employee Data"){
        connection.query("SELECT * FROM employment_DB.all_employee_data").then(function(results){
            console.log(results);
        });
    }
    if(answer.choice === "View departments"){
        connection.query("SELECT * FROM employment_DB.department").then(function(results){
            console.log(results);
        });
    }
    if(answer.choice === "View roles"){
        connection.query("SELECT * FROM employment_DB.roles").then(function(results){
            console.log(results);
        });
    }
    if(answer.choice === "View employees"){
        connection.query("SELECT * FROM employment_DB.employees").then(function(results){
            console.log(results);
        });
    }
    if(answer.choice === "View employees by Department"){
        connection.query("SELECT * FROM employment_DB.employee_departments").then(function(results){
            console.log(results);
        });
    }
    if(answer.choice === "View employees by Manager"){
        connection.query("SELECT * FROM employment_DB.employee_managers").then(function(results){
            console.log(results);
        });
    }
    if(answer.choice === "Add an Employee"){
        connection.query("SELECT * FROM employment_DB.add_new_employees").then(function(results){
            console.log(results);
        })
        inquirer.prompt([
            {   
            type: "list",
            name: "choice",
            message: "Would you like to add a new Employee?",
            choices: ["Yes", "No"]   
        }
        
    ]);
    connection.query("INSERT INTO employees").then(function(results){
        console.log(results);
    })

    }
    if(answer.choice === "Remove an Employee"){
        connection.query("SELECT * FROM employment_DB.employees").then(function(results){
            console.log(results);
        })
        inquirer.prompt([
            {   
            type: "list",
            name: "choice",
            message: "Would you like to remove an Employee?",
            choices: ["Yes", "No"]   
        }
        
    ]);
    connection.query("DELETE FROM employees").then(function(results){
        console.log(results);
    })

    }
    if(answer.choice === "Update Employee"){
        connection.query("SELECT * FROM employment_DB.employees").then(function(results){
            console.log(results);
        })
        inquirer.prompt([
            {   
            type: "list",
            name: "choice",
            message: "Would you like to update an Employee file?",
            choices: ["Yes", "No"]   
        }
        
    ]);
    connection.query("UPDATE employees").then(function(results){
        console.log(results);
    });
    }
    if(answer.choice === "Update Employee manager"){
        connection.query("SELECT * FROM employment_DB.employee_managers").then(function(results){
            console.log(results);
        })
        inquirer.prompt([
            {   
            type: "list",
            name: "choice",
            message: "Would you like to update an Employee's manager?",
            choices: ["Yes", "No"]   
        }
        
    ]);
    connection.query("UPDATE employees_managers").then(function(results){
        console.log(results);
    });
    }
})
}
start();
