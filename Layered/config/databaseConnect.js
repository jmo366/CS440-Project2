const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'deFaultPass157!!', 
    database: 'expense_db',
});


db.connect((err) => {
    if (err) {
        process.exit(1);
    }
});


module.exports = db; 
