
let totalAmount = 0;

function updateTotal() {
  document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

function addExpense() {
  const expenseName = document.getElementById('expense-name').value;
  const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

  if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
    alert('Please enter valid expense details');
    return;
  }

  totalAmount += expenseAmount;

  const expenseItem = document.createElement('li');
  expenseItem.innerHTML = `${expenseName}: Rs.${expenseAmount.toFixed(2)} <button onclick="removeExpense(this, ${expenseAmount})">Remove</button>`;

  document.getElementById('expense-list').appendChild(expenseItem);

  document.getElementById('expense-name').value = '';
  document.getElementById('expense-amount').value = '';

  updateTotal();
}

function removeExpense(button, amount) {
  button.parentElement.remove();
  totalAmount -= amount;
  updateTotal();
}
