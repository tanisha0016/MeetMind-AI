import api from "./api";

export const getMeetings = async () => {
  const response = await api.get("/meetings");
  return response.data;
};

export const getMeetingById = async (id: string) => {
  const response = await api.get(`/meetings/${id}`);
  return response.data;
};

export const uploadMeeting = async (formData: FormData) => {
  const response = await api.post(
    "/meetings/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};

export const deleteMeeting = async (
  id: string,
) => {
  const response = await api.delete(
    `/meetings/${id}`,
  );

  return response.data;
};