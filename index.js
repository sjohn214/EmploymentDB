var connection = require("./db/employmentDBConnection");
var inquirer = require("inquirer");


function start() {
    inquirer.prompt([
    {   
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View departments" , "View roles", "View employees"]
},
]).then(function(answers){
    console.log(answers);
    if(answers.choice === "View departments"){
        connection.query("SELECT * FROM employment_DB.department").then(function(results){
            console.log(results);
        });
    }
    if(answers.choice === "View roles"){
        connection.query("SELECT * FROM employment_DB.roles").then(function(results){
            console.log(results);
        });
    }
    if(answers.choice === "View employees"){
        connection.query("SELECT * FROM employment_DB.employees").then(function(results){
            console.log(results);
        });
    }
    
})
}
start();
