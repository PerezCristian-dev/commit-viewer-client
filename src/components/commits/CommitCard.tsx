import React from "react";
import { GitHubCommit } from "../../interfaces/commit.interface";
import { getTimeStatus } from "@/utils/getTimeStatus.utils";

interface CommitCardProps {
  data: GitHubCommit;
}

export const CommitCard = (props: CommitCardProps) => {
  const { data } = props;
  const commitDate = data.commit.committer.date;
  const timeStatus: string = getTimeStatus(new Date(commitDate));

  return (
    <div className="rounded-xl shadow-xl border my-3 border-slate-700 bg-gray-950">
      <div className="card-body">
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-2"
              src={data.author.avatar_url}
            />
            <span className="card-title">{data.commit.committer.name}</span>
          </div>
          <span className="text-info text-sm">{timeStatus}</span>
        </div>
        <div className="card-actions bg-gray-900 rounded-md p-4 justify-end">
          <p>{data.commit.message}</p>
          <a
            href={data.html_url}
            target="_blank"
            className="px-4 bg-[var(--github-green)] rounded-md hover:bg-[var(--github-green-light)]"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};
