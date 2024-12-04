// services/expenseService.js
const Expense = require('../models/expenseModel');

const ExpenseService = {
    getAllExpenses: (callback) => {
        Expense.getAllExpenses(callback);
    },
    addExpense: (expenseData, callback) => {
        Expense.addExpense(expenseData, callback);
    },
};

module.exports = ExpenseService;
