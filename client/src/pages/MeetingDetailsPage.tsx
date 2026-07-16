import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getMeetingById,
  deleteMeeting,
} from "../services/meeting.service";
import type { Meeting } from "../types";
import Navbar from "../components/layout/Navbar";

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

  const handleDelete = async () => {
    if (!id) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this meeting?",
    );

    if (!confirmed) return;

    try {
      await deleteMeeting(id);

      alert("Meeting deleted successfully");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert("Failed to delete meeting");
    }
  };


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

    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10">
        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-6 flex justify-between">

            <button
              onClick={() => navigate("/dashboard")}
              className="rounded-lg bg-white px-4 py-2 shadow hover:bg-slate-100"
            >
              ← Back to Dashboard
            </button>

            <button
              onClick={handleDelete}
              className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
            >
              Delete Meeting
            </button>

          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h1 className="text-4xl font-bold">
                  {meeting.title}
                </h1>

                <p className="mt-2 text-slate-600">
                  {meeting.description}
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  Uploaded on{" "}
                  {new Date(meeting.createdAt).toLocaleDateString()}
                </p>
              </div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold
            ${meeting.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : meeting.status === "processing"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
              >
                {meeting.status}
              </span>
            </div>

          </div>

          {/* Summary */}

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">
              Summary
            </h2>

            <p className="leading-7 text-slate-700">
              {meeting.summary || "Summary is not available yet."}
            </p>
          </div>

          {/* Transcript */}

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">
              Transcript
            </h2>

            <p className="whitespace-pre-wrap leading-7 text-slate-700">
              {meeting.transcript || "Transcript is not available yet."}
            </p>
          </div>

          {/* Key Decisions */}

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">
              Key Decisions
            </h2>

            <div className="space-y-3">
              {meeting.keyDecisions?.length ? (
                meeting.keyDecisions.map((decision, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-slate-50 p-4"
                  >
                    <p className="font-medium">{decision.task}</p>

                    <p className="mt-1 text-sm text-slate-500">
                      Owner: {decision.owner || "Not specified"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500">
                  No key decisions extracted.
                </p>
              )}
            </div>
          </div>

          {/* Action Items */}

          <div className="mt-6 mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">
              Action Items
            </h2>

            <div className="space-y-4">
              {meeting.actionItems?.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <h3 className="font-semibold">
                    {item.task}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Owner: {item.owner || "Not specified"}
                  </p>

                  <p className="text-sm text-slate-600">
                    Deadline: {item.deadline || "Not specified"}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </>
  );
};


export default MeetingDetailsPage;