import React from "react";
import { GitHubCommit } from "../../interfaces/commit.interface";
import { getTimeStatus } from "@/utils/getTimeStatus.utils";

interface CommitCardProps {
  data: GitHubCommit;
}

export const CommitCard = (props: CommitCardProps) => {
  const { data } = props;
  const timeStatus: string = getTimeStatus(
    new Date(data.commit.committer.date)
  );

  return (
    <div className="card shadow-xl border">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-2"
              src={data.author.avatar_url}
            />
            <span className="card-title">{data.commit.committer.name}</span>
          </div>
          <span className="text-info text-sm">{timeStatus}</span>
        </div>
        <div className="card-actions bg-gray-900 rounded-md p-4">
          <p>{data.commit.message}</p>
          <button className="px-4 bg-info rounded-md">More</button>
        </div>
      </div>
    </div>
  );
};
