import { CommitResponse, RepoAuthor } from "@/interfaces/viewer-api.interface";
import { useGetCommitsQuery } from "@/redux/rtk/commits";
import { useMemo, useState } from "react";
import { ActionBar } from "../common/ActionBar";
import { CommitsSkeleton } from "../common/CommitsSkeleton";
import Icon from "../common/Icon";
import { Pagination } from "../common/Pagination";
import { CommitCard } from "./CommitCard";

export const CommitsContainer = () => {
  const response = useGetCommitsQuery("commit-viewer-client");
  const { isLoading, currentData } = response;
  const author: RepoAuthor = currentData?.author;
  const commits: CommitResponse[] = currentData?.commits;
  const authorAvatar = author?.avatar;
  const authorName = author?.userName;
  const authorDetails = author?.details;
  const commitCount: number = currentData?.commit_count;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(commitCount / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [searcQuery, setSearchQuery] = useState("");

  let filterCommits = useMemo(
    () =>
      commits?.filter((commit) => {
        return commit.message.toLowerCase().includes(searcQuery.toLowerCase());
      }),
    [commits, searcQuery]
  );

  if (filterCommits) {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    filterCommits = filterCommits.slice(indexOfFirstItem, indexOfLastItem);
  }

  return (
    <>
      {isLoading ? (
        <CommitsSkeleton />
      ) : (
        <section className="flex flex-col md:max-h-[calc(100%-130px)] h-[100%] max-w-7xl items-center md:border rounded-md overflow-hidden bg-gray-950 relative">
          <div className="w-full flex p-4 justify-between items-center md:border md:border-slate-800 bg-black">
            <a
              className="flex items-center md:text-xl w-[65%] mr-2"
              href={authorDetails}
            >
              <img
                className="mr-4 w-[50px] h-[50px] rounded-full"
                src={authorAvatar}
                alt="avatar"
              />
              <span className="truncate">{`${authorName} / ${"commit-viewer-client"} `}</span>
            </a>
            <div className="flex items-center w-[150px] justify-center">
              <Icon icon="restore" className="mr-2" />
              <span>
                {commitCount > 1
                  ? `${commitCount} commits`
                  : `${commitCount} commit`}
              </span>
            </div>
          </div>
          <ActionBar search={searcQuery} setSearch={setSearchQuery} />
          <div className="overflow-y-auto w-full px-4 max-h-[calc(100%-200px)]">
            {filterCommits.length === 0 ? (
              <div className="rounded-xl shadow-xl border my-3 border-slate-700 bg-gray-950 lg:min-w-[800px] overflow-hidden">
                <div className="card-actions bg-gray-900 rounded-md p-4 justify-center">
                  <p> No commits found with search value</p>
                </div>
              </div>
            ) : (
              filterCommits.map((commit, index: number) => (
                <CommitCard commit={commit} key={index} count={commitCount} />
              ))
            )}
          </div>
          <Pagination
            amount={commits.length}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </section>
      )}
    </>
  );
};
