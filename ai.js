const API_URL = "http://127.0.0.1:8080/ask";

async function askAI(prompt) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt })
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    } else {
      return "No response from the AI.";
    }
  } catch (error) {
    console.error("Error communicating with AI backend:", error);
    return "Error communicating with AI backend.";
  }
}

document.getElementById("ask-btn").addEventListener("click", async () => {
  const inputBox = document.getElementById("user-input");
  const responseBox = document.getElementById("response");

  const prompt = inputBox.value.trim();
  if (!prompt) return;

  responseBox.innerText = "Thinking...";
  const aiResponse = await askAI(prompt);
  responseBox.innerText = aiResponse;
});
