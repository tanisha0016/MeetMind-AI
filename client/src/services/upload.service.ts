import api from "./api";

export const uploadMeeting = async (
  title: string,
  description: string,
  audio: File,
) => {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("audio", audio);

  const response = await api.post(
    "/meetings/upload",
    formData,
  );

  return response.data;
};