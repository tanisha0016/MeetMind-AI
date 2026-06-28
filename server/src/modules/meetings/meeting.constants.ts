export const MEETING_STATUS = {
  UPLOADED: "uploaded",
  PROCESSING: "processing",
  COMPLETED: "completed",
  FAILED: "failed",
} as const;

export const MEETING_MESSAGES = {
  CREATED: "Meeting created successfully",
  FETCHED: "Meetings fetched successfully",
  UPDATED: "Meeting updated successfully",
  DELETED: "Meeting deleted successfully",
  NOT_FOUND: "Meeting not found",
};