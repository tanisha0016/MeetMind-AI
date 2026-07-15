import { useNavigate } from "react-router-dom";
import type { Meeting } from "../../types";

interface Props {
  meeting: Meeting;
}

const MeetingCard = ({ meeting }: Props) => {
  const navigate = useNavigate();

  const statusColor = {
    completed: "bg-green-100 text-green-700",
    processing: "bg-yellow-100 text-yellow-700",
    failed: "bg-red-100 text-red-700",
  };

  return (
    <div
      onClick={() => navigate(`/meetings/${meeting._id}`)}
      className="cursor-pointer rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">

        <div className="flex-1">

          <h2 className="text-xl font-semibold text-slate-900">
            {meeting.title}
          </h2>

          <p className="mt-2 text-slate-500">
            {meeting.description}
          </p>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            statusColor[
              meeting.status as keyof typeof statusColor
            ] || "bg-slate-100 text-slate-700"
          }`}
        >
          {meeting.status}
        </span>

      </div>

      <div className="mt-6">

        <p className="line-clamp-2 text-slate-600">
          {meeting.summary || "No summary available."}
        </p>

      </div>

      <div className="mt-6 border-t pt-4">

        <p className="text-sm text-slate-400">
          {new Date(meeting.createdAt).toLocaleDateString()}
        </p>

      </div>

    </div>
  );
};

export default MeetingCard;