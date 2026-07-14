import mongoose, { Schema, Document } from "mongoose";
import { MEETING_STATUS } from "./meeting.constants";

export interface IActionItem {
  task: string;
  owner?: string;
  deadline?: string;
}

export interface IKeyDecision {
  task: string;
  owner?: string;
}

export interface IMeeting extends Document {
  title: string;
  description?: string;
  owner: mongoose.Types.ObjectId;

  audioUrl?: string;

  transcript?: string;

  summary?: string;

  keyDecisions: IKeyDecision[];

  actionItems: {
    task: string;
    owner?: string;
    deadline?: string;
  }[];

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

    audioUrl: {
      type: String,
    },

    transcript: {
      type: String,
      default: "",
    },

    summary: {
      type: String,
      default: "",
    },

    keyDecisions: {
      type: [
        {
          task: String,
          owner: String,
        },
      ],
      default: [],
    },

    actionItems: {
      type: [
        {
          task: String,
          owner: String,
          deadline: String,
        },
      ],
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
  },
);

export default mongoose.model<IMeeting>("Meeting", meetingSchema);
