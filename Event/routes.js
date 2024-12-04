const express = require('express');
const eventBus = require('./eventBus');
const router = express.Router();

router.get('/expenses', (req, res) => {
    eventBus.emit('getExpensesRequest'); 

    eventBus.once('expensesRetrieved', (expenses) => {
        res.json(expenses);
    });
});

router.post('/expenses', (req, res) => {
    const expenseData = req.body;
    eventBus.emit('addExpenseRequest', expenseData);

    eventBus.once('expenseAdded', () => {
        res.status(201).send('Expense added');
    });
});

module.exports = router;
