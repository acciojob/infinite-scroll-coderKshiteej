const list = document.getElementById("infi-list");
let count = 1;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count}`;
    list.appendChild(li);
    count++;
  }
}

// Add 10 items at start
addItems(10);

// Infinite scroll logic
window.addEventListener("scroll", () => {
  const bottomReached =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;

  if (bottomReached) {
    addItems(2); // add 2 more items
  }
});
