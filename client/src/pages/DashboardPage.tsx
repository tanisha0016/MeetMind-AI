import { useEffect, useState } from "react";
import { getMeetings } from "../services/meeting.service";
import type { Meeting } from "../types";
import MeetingCard from "../components/meeting/MeetingCard";
import Navbar from "../components/layout/Navbar";

const DashboardPage = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await getMeetings();

        console.log("Meetings API response:", response);

        setMeetings(response.data);
      } catch (error) {
        console.error("Failed to fetch meetings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Meeting Dashboard
              </h1>

              <p className="mt-2 text-slate-600">
                Manage your AI analyzed meetings
              </p>
            </div>
          </div>

          {loading ? (
            <div className="text-center text-slate-500">
              Loading meetings...
            </div>
          ) : meetings.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <h2 className="text-xl font-semibold text-slate-800">
                No meetings yet
              </h2>

              <p className="mt-2 text-slate-500">
                Upload your first meeting audio to get AI summaries.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {meetings.map((meeting) => (
                <MeetingCard
                  key={meeting._id}
                  meeting={meeting}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default DashboardPage;