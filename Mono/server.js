const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
PORT = 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Public')));

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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/api/expenses', (req, res) => {
    const sql = 'SELECT * FROM expenses';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/api/expenses', (req, res) => {
    const { category, amount, date, description } = req.body;
    const sql = 'INSERT INTO expenses (category, amount, date, description) VALUES (?, ?, ?, ?)';
    db.query(sql, [category, amount, date, description], (err, result) => {
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});