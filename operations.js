exports.update = function(db, table, obj, cb) {
    let sql = `UPDATE ${table} SET `;
    let updates = [];
    let values = [];

    // Remove the primary key from the object and store it separately
    let primaryKey;
    if (table === "Students") {
        primaryKey = obj.S_code;
        delete obj.S_code;
    } else if (table === "Course") {
        primaryKey = obj.C_code;
        delete obj.C_code;
    } else if (table === "StudentCourse") {
        primaryKey = obj.S_code; // Assuming you want to update based on S_code and C_code
        delete obj.S_code;
        let secondaryKey = obj.C_code;
        delete obj.C_code;
        updates.push(`C_code = ?`);
        values.push(secondaryKey);
    } else {
        return cb(new Error('Invalid table name'));
    }

    // Construct the SET clause dynamically
    for (let key in obj) {
        updates.push(`${key} = ?`);
        values.push(obj[key]);
    }
    sql += updates.join(', ');

    if (table === "StudentCourse") {
        sql += ` WHERE S_code = ? AND C_code = ?`;
        values.push(primaryKey);
    } else {
        sql += ` WHERE ${table === "Students" ? "S_code" : "C_code"} = ?`;
        values.push(primaryKey);
    }

    db.query(sql, values, (err, results) => {
        if (err) return cb(err);
        cb(null, results);
    });
};
