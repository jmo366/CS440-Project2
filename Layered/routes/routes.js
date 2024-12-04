const express = require('express');
const ExpenseController = require('../controllers/databaseExpense');
const router = express.Router();

router.get('/expenses', ExpenseController.getExpenses);
router.post('/expenses', ExpenseController.createExpense);

module.exports = router;
