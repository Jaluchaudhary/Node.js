
exports.add = function(db, table, obj, cb) {
    let sql = `INSERT INTO ${table} (`;
    let values = [];
    
    if (table === "Students") {
        sql += `S_code, S_name, S_year) VALUES (?, ?, ?)`;
        values = [obj.S_code, obj.S_name, obj.S_year];
    } else if (table === "Course") {
        sql += `C_code, C_name, C_book, C_year) VALUES (?, ?, ?, ?)`;
        values = [obj.C_code, obj.C_name, obj.C_book, obj.C_year];
    } else if (table === "StudentCourse") {
        sql += `S_code, C_code, grade) VALUES (?, ?, ?)`;
        values = [obj.S_code, obj.C_code, obj.grade];
    } else {
        return cb(new Error('Invalid table name'));
    }

    db.query(sql, values, (err, results) => {
        if (err) return cb(err);
        cb(null, results);
    });
};

exports.delete = function(db, table, obj, cb) {
    let sql;
    let values;

    if (table === "Students") {
        sql = 'DELETE FROM Students WHERE S_code = ?';
        values = [obj.S_code];
    } else if (table === "Course") {
        sql = 'DELETE FROM Course WHERE C_code = ?';
        values = [obj.C_code];
    } else if (table === "StudentCourse") {
        sql = 'DELETE FROM StudentCourse WHERE S_code = ? AND C_code = ?';
        values = [obj.S_code, obj.C_code];
    } else {
        return cb(new Error('Invalid table name'));
    }

    db.query(sql, values, (err, results) => {
        if (err) return cb(err);
        cb(null, results);
    });
};

exports.display = function(db, table, cb) {
    let sql;

    if (table === "Students") {
        sql = 'SELECT * FROM Students';
    } else if (table === "Course") {
        sql = 'SELECT * FROM Course';
    } else if (table === "StudentCourse") {
        sql = 'SELECT * FROM StudentCourse';
    } else {
        return cb(new Error('Invalid table name'));
    }

    db.query(sql, (err, results) => {
        if (err) return cb(err);
        cb(null, results);
    });
};

