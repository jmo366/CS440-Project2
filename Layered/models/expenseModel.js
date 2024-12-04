const db = require('../config/databaseConnect');

const Expense = {
    getAllExpenses: (callback) => {
        const sql = 'SELECT * FROM expenses';
        db.query(sql, callback);
    },
    addExpense: (expense, callback) => {
        const sql = 'INSERT INTO expenses (category, amount, date, description) VALUES (?, ?, ?, ?)';
        db.query(sql, [expense.category, expense.amount, expense.date, expense.description], callback);
    },
};

module.exports = Expense;
