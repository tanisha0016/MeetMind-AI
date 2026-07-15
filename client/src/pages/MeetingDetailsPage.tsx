import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMeetingById } from "../services/meeting.service";
import type { Meeting } from "../types";

const MeetingDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [meeting, setMeeting] = useState<Meeting | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        if (!id) return;

        const response = await getMeetingById(id);

        setMeeting(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeeting();
  }, [id]);


  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        Loading meeting...
      </div>
    );
  }


  if (!meeting) {
    return (
      <div style={{ padding: "40px" }}>
        Meeting not found
      </div>
    );
  }


  return (
    <div style={{ padding: "40px" }}>

      <button
        onClick={() => navigate("/dashboard")}
      >
        ← Back
      </button>


      <h1>{meeting.title}</h1>


      <p>
        <strong>Status:</strong> {meeting.status}
      </p>


      <p>
        {meeting.description}
      </p>


      <hr />


      <h2>Summary</h2>

      <p>
        {meeting.summary}
      </p>


      <hr />


      <h2>Transcript</h2>

      <p>
        {meeting.transcript}
      </p>


      <hr />


      <h2>Key Decisions</h2>

      {meeting.keyDecisions?.map((decision, index) => (
        <div key={index}>
          ✅ {decision.task}
          {decision.owner && (
            <> - {decision.owner}</>
          )}
        </div>
      ))}


      <hr />


      <h2>Action Items</h2>

      {meeting.actionItems?.map((item, index) => (
        <div key={index}>
          <p>
            ☐ {item.task}
          </p>

          <p>
            Owner: {item.owner || "Not specified"}
          </p>

          <p>
            Deadline: {item.deadline || "Not specified"}
          </p>
        </div>
      ))}

    </div>
  );
};


export default MeetingDetailsPage;