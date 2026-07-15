export interface KeyDecision {
  task: string;
  owner?: string;
}

export interface ActionItem {
  task: string;
  owner?: string;
  deadline?: string;
}

export interface Meeting {
  _id: string;
  title: string;
  description?: string;
  summary?: string;
  transcript?: string;
  audioUrl?: string;

  keyDecisions: KeyDecision[];
  actionItems: ActionItem[];

  status: "processing" | "completed" | "failed";

  createdAt: string;
}