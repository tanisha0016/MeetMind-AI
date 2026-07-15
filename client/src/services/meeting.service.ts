import api from "./api";

export const getMeetings = async () => {
  const response = await api.get("/meetings");
  return response.data;
};

export const getMeetingById = async (id: string) => {
  const response = await api.get(`/meetings/${id}`);
  return response.data;
};