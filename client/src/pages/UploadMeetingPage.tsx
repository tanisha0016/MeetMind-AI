import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadMeeting } from "../services/upload.service";
import Navbar from "../components/layout/Navbar";

const UploadMeetingPage = () => {
    const navigate = useNavigate();

const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [audio, setAudio] = useState<File | null>(null);

  

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (!audio) {
      alert("Please select an audio file");
      return;
    }

    try {
  setLoading(true);

  await uploadMeeting(
    title,
    description,
    audio,
  );

  alert("Meeting uploaded successfully");

  navigate("/dashboard");

} catch (error) {
  console.error(error);
  alert("Upload failed");

} finally {
  setLoading(false);
}
  };

  return (
  <>
    <Navbar />

    <main className="min-h-screen bg-slate-50 py-10">
      
      <div className="mx-auto mt-12 max-w-xl rounded-xl bg-white p-8 shadow">
      <h1 className="mb-6 text-3xl font-bold">
        Upload Meeting
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          className="w-full rounded-lg border p-3"
          placeholder="Meeting title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />

        <textarea
          className="w-full rounded-lg border p-3"
          rows={4}
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          type="file"
          accept="audio/*"
          onChange={(e) =>
            setAudio(
              e.target.files
                ? e.target.files[0]
                : null,
            )
          }
          required
        />

        <button
  className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
  type="submit"
>
  {loading ? "Uploading..." : "Upload Meeting"}
</button>
      </form>
    </div>
    </main>
  </>
);
};

export default UploadMeetingPage;