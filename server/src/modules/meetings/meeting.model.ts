import mongoose, { Schema, Document } from "mongoose";
import { MEETING_STATUS } from "./meeting.constants";

export interface IMeeting extends Document {
  title: string;
  description?: string;
  owner: mongoose.Types.ObjectId;
  audioUrl?: string;
  transcript?: string;
  summary?: string;
  actionItems: string[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const meetingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    audioUrl: String,

    transcript: String,

    summary: String,

    actionItems: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: Object.values(MEETING_STATUS),
      default: MEETING_STATUS.UPLOADED,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMeeting>("Meeting", meetingSchema);