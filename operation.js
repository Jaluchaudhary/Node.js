

exports.add = function (db, table, obj, cb) {
  let sql = `INSERT INTO StudTrack.${table}`;
  let values =[];

  if (table === "Student") {
    sql += '(S_code, S_name, S_year) VALUES (?, ?, ?)';
    values = [obj.S_code, obj.S_name, obj.S_year];
  } else if (table === "Course") {
    sql += '(C_code, C_name, C_book, C_year) VALUES (?, ?, ?, ?)';
    values = [obj.C_code, obj.C_name, obj.C_book, obj.C_year];
  } else if (table === "student_course") {
    sql += '(S_code, C_code, grade) VALUES (?, ?, ?)';
    values = [obj.S_code, obj.C_code, obj.grade];
  } else {
    // Handle other tables if needed
  }

  db.query(sql, values, (err, results) => {
    if (err) throw err;
    cb(results);
  });
};

// DELETE operation
exports.delete = function (db, table, obj, cb) {
  let sql = `DELETE FROM StudTrack.${table} WHERE `;
  let values = [];

  if (table === "Student" || table === "Course") {
    const primaryKey = table === "Student" ? "S_code" : "C_code";
    sql += `${primaryKey} = ?`;
    values = [obj[primaryKey]];
  } else if (table === "student_course") {
    sql += 'S_code = ? AND C_code = ?';
    values = [obj.S_code, obj.C_code];
  } else {
    // Handle other tables if needed
  }

  db.query(sql, values, (err, results) => {
    if (err) throw err;
    cb(results);
  });
};

// DISPLAY operation
exports.display = function (db, table, cb) {
  let sql = `SELECT * FROM StudTrack.${table}`;

  db.query(sql, (err, results) => {
    if (err) throw err;
    cb(results);
  });
};


exports.update = function (db, table, obj, cb) {
  let sql;

  // Check for the table
  switch (table) {
    case "Student":
      // Check if the row exists
      sql = "SELECT * FROM StudTrack.Student WHERE S_code = ?";
      db.query(sql, obj.S_code, (err, results) => {
        if (err) {
          cb(err.message);
        } else if (results && results.length) {
          // Student found, update the record
          const keys = Object.keys(obj);
          const name = keys.includes("S_name") ? obj.S_name : results[0].S_name;
          const year = keys.includes("S_Year") ? obj.S_Year : results[0].S_Year;

          sql = "UPDATE StudTrack.Student SET S_name = ?, S_Year = ? WHERE S_code = ?";
          db.query(sql, [name, year, obj.S_code], (err, results) => {
            if (err) {
              throw err;
            }
            console.log("Student update");
            cb(results);
          });
        } else {
          cb("Student not found");
        }
      });
      break;

    case "Course":
      // Implementation for the "Course" table (complete as needed)
      sql = "Your SQL query for the Course table";
      db.query(sql, (err, results) => {
        if (err) {
          cb(err.message);
        } else {
          // Handle the results or update logic for the Course table
          // Example:
          console.log("Course update");
          cb(results);
        }
      });
      break;

    case "student_course":
      // Implementation for the "student_course" table (complete as needed)
      sql = "Your SQL query for the student_course table";
      db.query(sql, (err, results) => {
        if (err) {
          cb(err.message);
        } else {
          // Handle the results or update logic for the student_course table
          // Example:
          console.log("student_course update");
          cb(results);
        }
      });
      break;

    default:
      cb("Table not found");
  }
};
