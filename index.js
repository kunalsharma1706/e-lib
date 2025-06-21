// Simple Search Alert - You can expand it later
document.querySelector("button").addEventListener("click", () => {
  const query = document.querySelector("input").value;
  alert(`You searched for: ${query}`);
});
