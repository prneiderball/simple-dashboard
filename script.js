const messages = [
  "Keep pushing forward!",
  "You're doing great.",
  "Today is a new opportunity.",
  "Never stop learning.",
  "Small steps lead to big progress."
];

document.getElementById("btn-random-message").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const outputCard = document.getElementById("card-output");
  outputCard.querySelector("p").textContent = messages[randomIndex];
});
