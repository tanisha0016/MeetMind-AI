import { useEffect, useState } from "react";
import { getMeetings } from "../services/meeting.service";
import type { Meeting } from "../types";
import MeetingCard from "../components/meeting/MeetingCard";

const DashboardPage = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await getMeetings();

        console.log("Meetings API response:", response);

        setMeetings(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeetings();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Meeting Dashboard</h1>

      {meetings.map((meeting) => (
        <MeetingCard
          key={meeting._id}
          meeting={meeting}
        />
      ))}
    </div>
  );
};

export default DashboardPage;