const form = document.getElementById("transaction-form");
const list = document.getElementById("transaction-list");
const balance = document.getElementById("total-balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

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
