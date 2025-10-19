// Simple tab switching
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active from all
    buttons.forEach(b => b.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Activate clicked
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// === Days Active Counter (Fixed Start Date) ===
document.querySelectorAll(".days-active").forEach(span => {
  const startDate = span.dataset.start;
  if (!startDate) return;

  const today = new Date();
  const start = new Date(startDate);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));

  span.textContent = diff.toLocaleString(); // adds commas for readability
});

// === Game Counter ===
const activeSection = document.getElementById("active");
const activeCountSpan = document.getElementById("active-count");

if (activeSection && activeCountSpan) {
  const gameCards = activeSection.querySelectorAll(".game-card");
  activeCountSpan.textContent = gameCards.length;
}
