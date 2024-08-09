const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const operations = require('./lib/operations');

const args = process.argv.slice(2);
const [operation, table, params] = args;

if (!operation || !table || !params) {
  console.error('Usage: node connect.js [Operation] [Table] [Params]');
  process.exit(1);
}

let obj = {};
if (operation.toUpperCase() !== 'DISPLAY') {
  try {
    obj = JSON.parse(fs.readFileSync(path.resolve(__dirname, params)));
  } catch (err) {
    console.error('Error reading JSON file:', err);
    process.exit(1);
  }
}

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dang1990',
  database: 'StudTruck'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');

  switch (operation.toUpperCase()) {
    case 'ADD':
      operations.add(db, table, obj, (results) => {
        console.log(results);
        db.end();
      });
      break;
    case 'DELETE':
      operations.delete(db, table, obj, (results) => {
        console.log(results);
        db.end();
      });
      break;
    case 'DISPLAY':
      operations.display(db, table, (results) => {
        console.log(results);
        db.end();
      });
      break;
    default:
      console.error('Unknown operation');
      db.end();
  }
});
