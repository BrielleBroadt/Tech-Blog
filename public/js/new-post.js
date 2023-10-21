const postHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const body = document.querySelector("#post-body").value.trim();
  
    if (!title || !body) {
      alert("Please enter your username and password");
    } else if (body.length < 8) {
      alert("Password must be at least 6 characters long");
    }
  
    if (title && body) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title: title, content: body }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to post!");
      }
    }
  };
  
  document.querySelector(".new-post").addEventListener("submit", postHandler);