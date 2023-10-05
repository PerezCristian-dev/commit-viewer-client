import { useGetCommitsQuery } from "@/redux/rtk/commits";
import React from "react";
import { CommitCard } from "./CommitCard";
import { CommitAuthor, GitHubCommit } from "@/interfaces/commit.interface";
import Icon from "../common/Icon";
import { CommitsSkeleton } from "../common/CommitsSkeleton";

export const CommitsContainer = () => {
  const { currentData, isLoading } = useGetCommitsQuery("commit-viewer-client");

  const { author }: GitHubCommit = currentData?.[0] || "";

  return (
    <>
      {isLoading ? (
        <CommitsSkeleton />
      ) : (
        <section className="flex flex-col max-h-[calc(100%-46px)] h-[80%] max-w-7xl items-center md:border rounded-md overflow-hidden">
          <div
            className={
              "w-full flex p-4 justify-between items-center md:border "
            }
          >
            <div className="flex items-center md:text-xl w-[65%] mr-2">
              <img
                className="mr-4 w-[50px] h-[50px] rounded-full"
                src={author.avatar_url}
                alt="avatar"
              />
              <span className="truncate">{`${
                author.login
              } / ${"commit-viewer-client"} `}</span>
            </div>
            <div className="flex items-center w-[150px] justify-center">
              <Icon icon="restore" className="mr-2" />
              <span>
                {currentData.length > 1
                  ? `${currentData.length} commits`
                  : `${currentData.length} commit`}
              </span>
            </div>
          </div>
          <div className="overflow-y-auto w-full px-4">
            {currentData.map((commit: GitHubCommit, index: number) => (
              <CommitCard data={commit} key={index} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
