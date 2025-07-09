from groq import Groq

client = Groq(api_key="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")

response = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[
        {"role": "user", "content": "What is a relay module and how do I use it with Arduino?"}
    ],
    temperature=0.7,
    max_tokens=300
)

print(response.choices[0].message.content)
