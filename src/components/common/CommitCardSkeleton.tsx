import React from "react";

export const CommitCardSkeleton = () => {
  return (
    <div className="rounded-xl shadow-xl border my-3 border-slate-700 bg-gray-950">
      <div className="card-body">
        <div className="flex items-center justify-between px-3">
          <div className="flex items-center">
            <div className="animate-pulse w-12 h-12 rounded-full mr-2 bg-gray-700"></div>
            <div className="animate-pulse w-20 h-5 bg-gray-700 rounded-xl"></div>
          </div>
          <div className="animate-pulse w-16 h-5 bg-gray-700 rounded-xl"></div>
        </div>
        <div className="card-actions bg-gray-900 rounded-md p-4 justify-end">
          <div className="animate-pulse w-full h-8 bg-gray-700 mb-2 rounded-xl"></div>
          <div className="animate-pulse w-full h-8 bg-gray-700 mb-2 rounded-xl"></div>
          <div className="animate-pulse w-16 h-8 bg-gray-700 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};
