async function expenseLoad() {
    try {
        const response = await fetch('/api/expenses');
        const expenses = await response.json();

        let total = 0;
        expenses.forEach(expense => {
            total += parseFloat(expense.amount);
        });
        document.getElementById('total-spending').textContent = `$${total.toFixed(2)}`;

        const categories = ['transportation-list', 'food-list', 'housing-list', 'other-list'];
        categories.forEach(categoryId => {
            const categoryList = document.getElementById(categoryId);
        });

        expenses.forEach(expense => {
            const categoryList = document.getElementById(`${expense.category}-list`);
            if (categoryList) {
                const expenseCard = document.createElement('div');
                expenseCard.classList.add('expense-card');

                const amount = document.createElement('p');
                amount.textContent = `$${expense.amount}`;
                expenseCard.appendChild(amount);

                categoryList.appendChild(expenseCard);
            }
        });
    } catch (error) {
    }
}
window.onload = expenseLoad;
