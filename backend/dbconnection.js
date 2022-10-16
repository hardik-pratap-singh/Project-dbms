const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hardik',
    database: 'hardik'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
