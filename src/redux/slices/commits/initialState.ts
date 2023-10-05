import { GitHubCommit } from "@/interfaces/commit.interface";

export const initialState: GitHubCommit = {
  sha: "",
  node_id: "",
  commit: {
    author: {
      name: "",
      email: "",
      date: "",
    },
    committer: {
      name: "",
      email: "",
      date: "",
    },
    message: "",
    tree: {
      sha: "",
      url: "",
    },
    url: "",
    comment_count: 0,
    verification: {
      verified: false,
      reason: "",
      signature: null,
      payload: null,
    },
  },
  url: "",
  html_url: "",
  comments_url: "",
  author: {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
  },
  committer: {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
  },
  parents: [],
};
