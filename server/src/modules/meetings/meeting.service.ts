import { processMeetingAudio } from "../../services/ai.service";
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

export const getMeetings = async (owner:string)=>{
 return Meeting.find({owner})
 .select(
   "title description summary status createdAt"
 )
 .sort({createdAt:-1});
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

export const uploadMeetingAudio = async (
  owner: string,
  title: string,
  description: string,
  audioUrl: string,
) => {
  // Create meeting first
  const meeting = await Meeting.create({
    owner,
    title,
    description,
    audioUrl,
    status: "processing",
  });

  try {
    // Run AI pipeline
    const aiResult = await processMeetingAudio(audioUrl);

    // Update meeting with AI results
    meeting.transcript = aiResult.transcript;
    meeting.summary = aiResult.summary;
    meeting.keyDecisions = aiResult.keyDecisions;
    meeting.actionItems = aiResult.actionItems;
    meeting.status = "completed";

    await meeting.save();
  } catch (error) {
    console.error("AI processing failed:", error);

    meeting.status = "failed";
    await meeting.save();
  }

  return meeting;
};