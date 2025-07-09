async function askAI() {
  const prompt = document.getElementById("userPrompt").value;
  const responseBox = document.getElementById("aiResponse");
  responseBox.textContent = "Thinking...";

  try {
    const res = await fetch("https://tinkly-ai-api.replit.app/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    if (data?.choices?.[0]?.message?.content) {
      responseBox.textContent = data.choices[0].message.content.trim();
    } else {
      responseBox.textContent = "No valid response received.";
    }
  } catch (err) {
    responseBox.textContent = "Error talking to AI: " + err.message;
  }
}
