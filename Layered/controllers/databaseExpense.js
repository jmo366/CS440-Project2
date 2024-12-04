const ExpenseService = require('../services/expense');

const ExpenseController = {
    getExpenses: (req, res) => {
        ExpenseService.getAllExpenses((err, results) => {
            if (err) return res.status(500).send('Error retrieving expenses');
            res.json(results);
        });
    },
    createExpense: (req, res) => {
        const expenseData = req.body;
        ExpenseService.addExpense(expenseData, (err, result) => {
            if (err) return res.status(500).send('Error saving expense');
            res.status(201).send('Expense added');
        });
    },
};

module.exports = ExpenseController;
