const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (!username || !password) {
      alert("Please enter your username and password");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long");
    }
  
    if (username && password) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to sign up!");
      }
    }
  };
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);