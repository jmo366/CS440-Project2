// Fetch expenses and update the UI
document.addEventListener('DOMContentLoaded', () => {
    fetchExpenses();
});

document.getElementById('fetch-expenses').addEventListener('click', fetchExpenses);

function fetchExpenses() {
    fetch('/api/expenses')
        .then((response) => response.json())
        .then((expenses) => {
            const transportationList = document.getElementById('transportation-list');
            const foodList = document.getElementById('food-list');
            const housingList = document.getElementById('housing-list');
            const otherList = document.getElementById('other-list');

            // Clear current lists
            transportationList.innerHTML = '';
            foodList.innerHTML = '';
            housingList.innerHTML = '';
            otherList.innerHTML = '';

            expenses.forEach((expense) => {
                const listItem = document.createElement('p');
                listItem.textContent = `${expense.description}: $${expense.amount}`;

                // Append expense to the appropriate category list
                if (expense.category === 'transportation') {
                    transportationList.appendChild(listItem);
                } else if (expense.category === 'food') {
                    foodList.appendChild(listItem);
                } else if (expense.category === 'housing') {
                    housingList.appendChild(listItem);
                } else {
                    otherList.appendChild(listItem);
                }
            });
        });
}

// Submit a new expense
document.getElementById('expense-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;

    fetch('/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, amount, date, description })
    })
    .then((response) => {
        if (response.ok) {
            alert('Expense added!');
            document.getElementById('expense-form').reset();
            fetchExpenses(); // Refresh the expenses list
        } else {
            alert('Failed to add expense');
        }
    });
});
