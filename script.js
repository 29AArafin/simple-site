const btn = document.getElementById("btn");
const count = document.getElementById("count");
let clicks = 0;

btn.addEventListener("click", () => {
  clicks++;
  count.textContent = clicks;
});
