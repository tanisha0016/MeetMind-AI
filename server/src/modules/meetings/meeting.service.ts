import Meeting from "./meeting.model";
import { CreateMeetingInput } from "./meeting.types";

export const createMeeting = async (
  data: CreateMeetingInput,
  owner: string,
) => {
  const meeting = await Meeting.create({
    ...data,
    owner,
  });

  return meeting;
};

export const getMeetings = async (owner: string) => {
  return Meeting.find({ owner }).sort({ createdAt: -1 });
};

export const getMeetingById = async (
  id: string,
  owner: string,
) => {
  return Meeting.findOne({
    _id: id,
    owner,
  });
};

export const deleteMeeting = async (
  id: string,
  owner: string,
) => {
  return Meeting.findOneAndDelete({
    _id: id,
    owner,
  });
};

export const updateMeeting = async (
  id: string,
  owner: string,
  data: Partial<CreateMeetingInput>,
) => {
  return Meeting.findOneAndUpdate(
    {
      _id: id,
      owner,
    },
    data,
    {
      new: true,
    },
  );
};