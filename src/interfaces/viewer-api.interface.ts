export interface CommitViewerAPI {
  id: string;
  message: string;
  commiter: string;
  commiter_avatar: string;
  commiter_details: string;
  details_url: string;
  date: string;
  repo_author: string;
  repo_author_avatar: string;
  repo_author_details: string;
  comments: Array<Comment | null>;
}

export interface Comment {
  id: number;
  body: string;
  user: string;
  user_avatar: string;
  user_details: string;
  date: string;
  html_url: string;
}

export interface CommitResponse {
  id: string;
  message: string;
  commiter: string;
  commiter_avatar: string;
  commiter_details: string;
  details_url: string;
  date: string;
  comments: Array<Comment | null>;
}

export interface CommentReponse {
  id: number;
  body: string;
  user: string;
  user_avatar: string;
  user_details: string;
  date: string;
  html_url: string;
}

export interface RepoAuthor {
  userName: string;
  avatar: string;
  details: string;
}

export interface CommitResponseI {
  author: RepoAuthor;
  commits: Array<CommitResponse>;
  commits_count: number;
}
