import React from "react";
import Icon from "./Icon";
import { CommitCardSkeleton } from "./CommitCardSkeleton";

export const CommitsSkeleton = () => {
  return (
    <section className="flex flex-col max-h-[calc(100%-46px)] h-[80%] max-w-7xl items-center md:border rounded-md overflow-hidden">
      <div className="w-full flex p-4 justify-between items-center md:border">
        <div className="flex items-center md:text-xl w-[65%] mr-2">
          <div className="animate-pulse mr-4 w-[30px] h-[30px] rounded-full bg-gray-300"></div>
          <div className="animate-pulse w-20 h-5 bg-gray-300 rounded-xl"></div>
        </div>
        <div className="flex items-center w-[150px] justify-center">
          <Icon icon="restore" className="mr-2 animate-pulse" />
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
