const form = document.getElementById("transaction-form");
const list = document.getElementById("transaction-list");
const balanceEl = document.getElementById("total-balance");
const incomeEl= document.getElementById("income");
const expenseEl = document.getElementById("expense");
const submitBtn = document.getElementById("submit");

let transactions = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const description = form.querySelector("#description").value.trim();
  const amount = parseFloat(form.querySelector("#amount").value);
  const type = form.querySelector("#type").value;

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid transaction");
    return;
  }
  transactions.push({ amount, description, type });

  render();

  form.reset();
});

function render() {
  list.innerHTML = "";

  let income = 0;
  let expense = 0;

  transactions.forEach(tx => {
    const li = document.createElement("li");
    li.textContent = `${tx.description} - $${tx.amount}`;
    list.appendChild(li);

    if (tx.type === "income") {
      income += tx.amount;
    } else {
      expense += tx.amount;
    }
  });

  const balance = income - expense;

  balanceEl.textContent = `Balance: $${balance.toFixed(2)}`;
  incomeEl.textContent = `Income: $${income.toFixed(2)}`;
  expenseEl.textContent = `Expenses: $${expense.toFixed(2)}`;
}

render();