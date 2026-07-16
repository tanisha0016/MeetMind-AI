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
      className="cursor-pointer rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          {meeting.title}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            meeting.status === "completed"
              ? "bg-green-100 text-green-700"
              : meeting.status === "processing"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {meeting.status}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-500">
        {meeting.description}
      </p>

      <div className="mt-5">
        <h3 className="text-sm font-semibold text-slate-700">
          AI Summary
        </h3>

        <p className="mt-2 line-clamp-4 text-sm leading-6 text-slate-600">
          {meeting.summary || "Summary not available yet."}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <span className="text-xs text-slate-400">
          {new Date(meeting.createdAt).toLocaleDateString()}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/meetings/${meeting._id}`);
          }}
          className="font-medium text-blue-600 hover:text-blue-700"
        >
          View Details →
        </button>
      </div>
    </div>
  );
};

export default MeetingCard;