import json
import ollama


def analyze_meeting(transcript: str):
    prompt = f"""
You are an expert AI meeting assistant.

Analyze the meeting transcript.

IMPORTANT RULES:

1. Every assigned task MUST appear in action_items.
2. If someone's name is mentioned with a responsibility, create an action item.
3. Every deployment task is also an action item.
4. If no owner is mentioned, write "Not specified".
5. If no deadline is mentioned, write "Not specified".
6. Return ONLY valid JSON.
7. Do not include markdown.
8. Do not explain anything.

Return this exact schema:

{{
  "summary": "...",

  "key_decisions": [
      "...",
      "..."
  ],

  "action_items": [
      {{
          "task": "...",
          "owner": "...",
          "deadline": "..."
      }}
  ]
}}

Transcript:

{transcript}
"""

    response = ollama.chat(
        model="qwen2.5:3b",
        format="json",
        messages=[{"role": "user", "content": prompt}],
    )

    content = response["message"]["content"]

    return json.loads(content)
