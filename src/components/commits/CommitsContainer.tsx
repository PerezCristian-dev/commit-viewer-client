import { useGetCommitsQuery } from "@/redux/rtk/commits";
import React from "react";
import { CommitCard } from "./CommitCard";
import { GitHubCommit } from "@/interfaces/commit.interface";

export const CommitsContainer = () => {
  const { currentData, isLoading } = useGetCommitsQuery("commit-viewer-client");

  const { author } = currentData?.[0] || "";

  console.log({ currentData });

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="flex flex-col h-[80%] w-full items-center border rounded-xl overflow-hidden">
          <div className={"w-full flex p-4 justify-between border "}>
            <div className="flex items-center">
              <img
                className="mr-4 w-[30px] h-[30px] rounded-full"
                src={author.avatar_url}
                alt="GitHubLogo"
              />
              <span>{author.login}</span>
            </div>

            <span>
              {currentData.length > 1
                ? `${currentData.length} commits`
                : `${currentData.length} commit`}
            </span>
          </div>
          <div className="overflow-y-auto w-full p-4">
            {currentData.map((commit: GitHubCommit) => (
              <CommitCard data={commit} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
