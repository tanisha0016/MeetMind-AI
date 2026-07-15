import type { Meeting } from "../../types";

interface Props {
  meeting: Meeting;
}

const MeetingCard = ({ meeting }: Props) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "8px",
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