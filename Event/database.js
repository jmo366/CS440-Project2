const mysql = require('mysql2');
const eventBus = require('./eventBus');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'deFaultPass157!!', 
    database: 'expense_db',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

eventBus.on('getExpensesRequest', () => {
    const sql = 'SELECT * FROM expenses';
    db.query(sql, (err, results) => {
        if (err) {
            eventBus.emit('error', err);
        } else {
            eventBus.emit('expensesRetrieved', results);  
        }
    });
});


eventBus.on('addExpenseRequest', (expense) => {
    const sql = 'INSERT INTO expenses (category, amount, date, description) VALUES (?, ?, ?, ?)';
    const values = [expense.category, expense.amount, expense.date, expense.description];
    db.query(sql, values, (err, result) => {
        if (err) {
            eventBus.emit('error', err);
        } else {
            eventBus.emit('expenseAdded');  
        }
    });
});
