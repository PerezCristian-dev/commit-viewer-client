import React from "react";
import Icon from "./Icon";
import { CommitCardSkeleton } from "./CommitCardSkeleton";

export const CommitsSkeleton = () => {
  return (
    <section className="flex flex-col md:max-h-[calc(100%-130px)] h-[100%] w-[100%] max-w-7xl items-center md:border rounded-md overflow-hidden bg-gray-950">
      <div className="w-full flex p-4 justify-between items-center md:border md:border-slate-800 bg-black">
        <div className="flex items-center md:text-xl w-[65%] mr-2">
          <div className="animate-pulse mr-4 w-[50px] h-[50px] rounded-full bg-gray-300"></div>
          <div className="animate-pulse w-32 h-5 bg-gray-300 rounded-xl"></div>
        </div>
        <div className="flex items-center w-[150px] justify-center">
          <div className="animate-pulse w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
          <div className="animate-pulse w-16 h-5 bg-gray-300 rounded-xl"></div>
        </div>
      </div>
      <div className="overflow-y-auto w-full px-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <CommitCardSkeleton key={index + Math.random()} />
        ))}
      </div>
    </section>
  );
};
