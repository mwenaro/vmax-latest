// login.js
document.addEventListener("DOMContentLoaded", () => {

  // Function to handle the login process

  document.querySelector("#login-form").addEventListener("submit", login);

  function login(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    // Get the username and password from the input fields
    const username = formData.get("username");
    const password = formData.get("password");

    // Fetch user data from user.php
    fetch("/user.php", { headers: { "content-type": "application/json" } })
      .then((response) => response.json())
      .then((user) => {
        // Check if the provided username and password match the fetched user data
        console.log({user, login:{username, password}})
        if (
        
          user.username == username.trim() &&
          user.password == password.trim()
        ) {
          localStorage.setItem(
            "user",
            JSON.stringify({ user, date: Date.now() })
          );
          // Redirect the user to the home page
          window.location.href = "/";
        } else {
          // Display an error message (you can customize this part)
          alert("Invalid username or password. Please try again.");
        }
      })
      .catch((error) => {
        alert("Soemting went wrong. Try again");
        console.error("Error fetching user data:", error);
      });
  }
});
