// Import the mysql package
const mysql = require('mysql');
var util = require('util');


// Connect to the employment_DB database using a localhost connection
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your MySQL username
  user: 'root',

  // Your MySQL password (leave blank for class demonstration purposes; fill in later)
  password: 'rootingABC1',

  // Name of database
  database: 'employment_DB',
});
connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;