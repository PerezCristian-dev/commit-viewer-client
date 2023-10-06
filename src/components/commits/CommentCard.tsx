import React from "react";
import { getTimeStatus } from "@/utils/getTimeStatus.utils";

interface CommitCardProps {
  comment: any;
}
export const CommentCard = ({ comment }: CommitCardProps) => {
  return comment === null ? (
    <div className="rounded-xl shadow-xl border my-3 border-slate-700 bg-gray-950 overflow-x-hidden text-center p-4">
      <p>No comments found</p>
    </div>
  ) : (
    <div className="rounded-xl shadow-xl border my-3 border-slate-700 bg-gray-950 overflow-x-hidden">
      <div className="card-body p-4 md:p-6">
        <div className="flex items-center px-3 justify-between">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-2"
              src={comment.commiter_avatar}
            />
            <div className="items-center">
              <span className="card-title text-[1.1rem] md:text-md">
                {comment.user}
              </span>
              <span className="text-info text-sm">
                {getTimeStatus(new Date(comment.date))}
              </span>
            </div>
          </div>
        </div>
        <div className="card-actions bg-gray-900 rounded-md p-4 justify-end">
          <p>{comment.body}</p>
        </div>
      </div>
    </div>
  );
};
