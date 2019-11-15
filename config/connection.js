// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "cqh8spq1gwh55li7",
  password: "psrfwaadpyd8zbo1",
  database: "k78f1di5tgx5hlko"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;