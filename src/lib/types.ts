
export type UserRole = "jobseeker" | "recruiter";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Resume {
  id: string;
  userId: string;
  fileName: string;
  fileUrl: string;
  uploadDate: Date;
  atsScore: number;
  keywordAnalysis: KeywordAnalysis[];
  formattingSuggestions: FormattingSuggestion[];
}

export interface KeywordAnalysis {
  keyword: string;
  matches: number;
  importance: number;
  suggestion?: string;
}

export interface FormattingSuggestion {
  type: "structure" | "bullet" | "readability" | "length";
  message: string;
  suggestion: string;
}

export interface Job {
  id: string;
  recruiterId: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  location: string;
  datePosted: Date;
}

export interface Candidate {
  id: string;
  resumeId: string;
  jobId: string;
  name: string;
  email: string;
  atsScore: number;
  skillMatch: number;
  isShortlisted: boolean;
}
