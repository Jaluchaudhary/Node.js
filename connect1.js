const mysql = require('mysql2');

// Create a connection to the MySQL server
const mysqlconnection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: 'Dang1990',

});

// Connect to the MySQL server
mysqlconnection.connect((err) => {
  if (err) throw err;
  console.log('Connect to MySQL server!!');
});

// Close the MySQL connection when done
mysqlconnection.end(function(err){
    if (err) {
        return console.log('ERROR:' + err.message);
    }
    console.log('Connection closed...')
});
