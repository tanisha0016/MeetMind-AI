import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMeetings } from "../services/meeting.service";
import type { Meeting } from "../types";
import MeetingCard from "../components/meeting/MeetingCard";
import Navbar from "../components/layout/Navbar";

const DashboardPage = () => {
    const navigate = useNavigate();

    const [meetings, setMeetings] = useState<Meeting[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

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

    const filteredMeetings = meetings.filter((meeting) => {
        const search = searchTerm.toLowerCase();

        const matchesSearch =
            meeting.title.toLowerCase().includes(search) ||
            meeting.description.toLowerCase().includes(search) ||
            (meeting.summary ?? "").toLowerCase().includes(search);

        const matchesStatus =
            statusFilter === "all" ||
            meeting.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const totalMeetings = meetings.length;

    const completedMeetings = meetings.filter(
        (meeting) => meeting.status === "completed",
    ).length;

    const processingMeetings = meetings.filter(
        (meeting) => meeting.status === "processing",
    ).length;

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-slate-100">
                <div className="mx-auto max-w-6xl px-6 py-10">

                    <div className="mb-8">

                        <div className="flex items-start justify-between">

                            <div className="flex-1">

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

                        <div className="mt-6">
                            <input
                                type="text"
                                placeholder="Search by title, description or summary..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
                            />
                        </div>

                        <div className="mt-4 flex gap-3">
                            {["all", "completed", "processing"].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setStatusFilter(status)}
                                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${statusFilter === status
                                        ? "bg-blue-600 text-white"
                                        : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                                        }`}
                                >
                                    {status.charAt(0).toUpperCase() + status.slice(1)}
                                </button>
                            ))}
                        </div>



                    </div>

                    <div className="mb-8 grid gap-6 md:grid-cols-3">

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Total Meetings
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalMeetings}
                            </h2>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Completed
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-green-600">
                                {completedMeetings}
                            </h2>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Processing
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-yellow-600">
                                {processingMeetings}
                            </h2>
                        </div>

                    </div>

                    {filteredMeetings.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">
                            <h2 className="text-xl font-semibold text-slate-700">
                                {meetings.length === 0
                                    ? "No meetings yet"
                                    : "No matching meetings"}
                            </h2>

                            <p className="mt-3 text-slate-500">
                                {meetings.length === 0
                                    ? "Upload your first meeting to generate transcripts, summaries and action items."
                                    : "Try changing your search or status filter."}
                            </p>

                            <button
                                onClick={() => navigate("/upload")}
                                className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                            >
                                Upload First Meeting
                            </button>
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {filteredMeetings.map((meeting) => (
                                <MeetingCard
                                    key={meeting._id}
                                    meeting={meeting}
                                />
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </>
    );

};

export default DashboardPage;