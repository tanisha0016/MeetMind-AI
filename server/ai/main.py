import json
import sys

from services.transcriber import transcribe
from services.meeting_analyzer import analyze_meeting

audio_path = sys.argv[1]

transcript = transcribe(audio_path)

analysis = analyze_meeting(transcript)

result = {
    "transcript": transcript,
    "summary": analysis["summary"],
    "keyDecisions": analysis["key_decisions"],
    "actionItems": analysis["action_items"],
}

print(json.dumps(result))