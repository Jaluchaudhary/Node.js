const mysql = require('mysql2');
const operations = require('./operations'); // Assuming you have an operations module

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    const sqlCreateDB = 'CREATE DATABASE IF NOT EXISTS StudTrack';
    
    db.query(sqlCreateDB, (err, result) => {
        if (err) throw err;
        console.log('Database created or already exists');

        const sqlUseDB = 'USE StudTrack';
        db.query(sqlUseDB, (err, result) => {
            if (err) throw err;

            const sqlCreateStudentTable = `
                CREATE TABLE IF NOT EXISTS students (
                    S_code CHAR(5) PRIMARY KEY,
                    S_name VARCHAR(100),
                    S_dob DATE,
                    S_address VARCHAR(255)
                )
            `;

            db.query(sqlCreateStudentTable, (err, result) => {
                if (err) throw err;
                console.log('Student table created or already exists');

                const sqlCreateCourseTable = `
                    CREATE TABLE IF NOT EXISTS courses (
                        C_code CHAR(5) PRIMARY KEY,
                        C_name VARCHAR(100),
                        C_description TEXT
                    )
                `;

                db.query(sqlCreateCourseTable, (err, result) => {
                    if (err) throw err;
                    console.log('Course table created or already exists');

                    const sqlCreateStudentCourseTable = `
                        CREATE TABLE IF NOT EXISTS student_courses (
                            S_code CHAR(5),
                            C_code CHAR(5),
                            PRIMARY KEY (S_code, C_code),
                            FOREIGN KEY (S_code) REFERENCES students(S_code),
                            FOREIGN KEY (C_code) REFERENCES courses(C_code)
                        )
                    `;

                    db.query(sqlCreateStudentCourseTable, (err, result) => {
                        if (err) throw err;
                        console.log('StudentCourse table created or already exists');

                        // Now execute the operations based on the 'op' variable
                        let op = 'ADD'; // Example operation
                        let table = 'students'; // Example table
                        let obj = { S_code: 'S001', S_name: 'John Doe', S_dob: '2000-01-01', S_address: '123 Main St' }; // Example data

                        switch(op.toUpperCase()){
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
                                    console.log('The results are\n');
                                    console.log(results);
                                    db.end();
                                });
                                break;
                            case 'UPDATE':
                                operations.update(db, table, obj, (results) => {
                                    console.log(results);
                                    db.end();
                                });
                                break;
                            default:
                                console.log('Invalid operation');
                                db.end();
                                break;
                        }
                    });
                });
            });
        });
    });
});
