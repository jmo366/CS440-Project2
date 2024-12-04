
CREATE DATABASE IF NOT EXISTS expense_db;

USE expense_db;
DROP TABLE IF EXISTS expenses;


CREATE TABLE IF NOT EXISTS expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(100),
  amount DECIMAL(10, 2),
  date DATE,
  description VARCHAR(255)
);

SELECT * FROM expenses;
