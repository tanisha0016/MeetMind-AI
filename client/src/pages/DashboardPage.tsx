import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMeetings } from "../services/meeting.service";
import type { Meeting } from "../types";
import MeetingCard from "../components/meeting/MeetingCard";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await getMeetings();
        setMeetings(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeetings();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Meetings
            </h1>

            <p className="mt-2 text-slate-500">
              View and manage your AI-generated meeting notes.
            </p>
          </div>

          <button
            onClick={() => navigate("/upload")}
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Upload Meeting
          </button>

        </div>

        <div className="space-y-5">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting._id}
              meeting={meeting}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;