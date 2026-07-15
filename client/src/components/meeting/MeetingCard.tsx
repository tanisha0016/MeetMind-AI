import type { Meeting } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
  meeting: Meeting;
}

const MeetingCard = ({ meeting }: Props) => {
    const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/meetings/${meeting._id}`)}
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      <h2>{meeting.title}</h2>

      <p>{meeting.description}</p>

      <p>
        <strong>Status:</strong> {meeting.status}
      </p>

      <p>{meeting.summary}</p>
    </div>
  );
};

export default MeetingCard;