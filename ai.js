function askAI() {
  console.log("askAI() called");

  const prompt = document.getElementById("prompt").value;

  fetch("http://127.0.0.1:8080/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Response from backend:", data);
      document.getElementById("response").innerText =
        data.response || data.error || "No reply.";
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      document.getElementById("response").innerText = "Error calling backend.";
    });
}
