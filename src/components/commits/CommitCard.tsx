import React from "react";
import { getTimeStatus } from "@/utils/getTimeStatus.utils";
import { CommitResponse } from "@/interfaces/viewer-api.interface";
import Icon from "../common/Icon";

interface CommitCardProps {
  commit: CommitResponse;
  count?: number;
  handleCommentModal: (commit: any) => void;
}
export const CommitCard = ({ commit, handleCommentModal }: CommitCardProps) => {
  const commitDate = commit.date;
  const timeStatus: string = getTimeStatus(new Date(commitDate));
  const commentCount = commit.comments[0] === null ? 0 : commit.comments.length;
  const comments = commit.comments;

  return (
    <div className="rounded-xl shadow-xl border my-3 border-slate-700 bg-gray-950 overflow-x-hidden">
      <div className="card-body p-4 md:p-6">
        <div className="flex items-center px-3 justify-between">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-2"
              src={commit.commiter_avatar}
            />
            <div className="items-center">
              <span className="card-title text-[1.1rem] md:text-md">
                {commit.commiter}
              </span>
              <span className="text-info text-sm">{timeStatus}</span>
            </div>
          </div>
          <a
            href={commit.details_url}
            target="_blank"
            className="px-4 bg-[var(--github-green)] rounded-md hover:bg-[var(--github-green-light)]"
          >
            Details
          </a>
        </div>
        <div className="card-actions bg-gray-900 rounded-md p-4 justify-end">
          <p>{commit.message}</p>
        </div>
        <button
          className="flex justify-end items-center"
          onClick={() => handleCommentModal(comments)}
        >
          <Icon icon="comment" className="mr-2" />
          <span className="flex items-center justify-center bg-gray-700 rounded-full w-6 h-6">
            {commentCount}
          </span>
        </button>
      </div>
    </div>
  );
};
