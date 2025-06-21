document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // Dummy login - You can replace this with real login logic
  if (username === "admin" && password === "admin123") {
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to home page
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});
