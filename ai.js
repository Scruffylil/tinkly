async function askAI() {
  const prompt = document.getElementById("prompt").value;
  const responseDiv = document.getElementById("response");
  responseDiv.textContent = "Thinking...";

  try {
    const res = await fetch("http://127.0.0.1:8080/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    if (data.response) {
      responseDiv.textContent = data.response;
    } else if (data.error) {
      responseDiv.textContent = "Error: " + data.error;
    } else {
      responseDiv.textContent = "No response from the AI.";
    }
  } catch (err) {
    responseDiv.textContent = "Error talking to AI: " + err.message;
  }
}
