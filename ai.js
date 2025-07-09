async function askAI() {
  const prompt = document.getElementById("userPrompt").value;
  const responseBox = document.getElementById("aiResponse");
  responseBox.textContent = "Thinking...";

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 512
      })
    });
    const data = await res.json();
    responseBox.textContent = data.choices?.[0]?.message?.content || "Error: no response.";
  } catch (e) {
    responseBox.textContent = "Error contacting AI: " + e.message;
  }
}
