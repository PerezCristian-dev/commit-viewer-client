import {
  CommentReponse,
  CommitResponse,
  RepoAuthor,
} from "@/interfaces/viewer-api.interface";
import { useGetCommitsQuery } from "@/redux/rtk/commits";
import { useMemo, useState, useRef } from "react";
import { ActionBar } from "../common/ActionBar";
import { CommitsSkeleton } from "../common/CommitsSkeleton";
import Icon from "../common/Icon";
import { Pagination } from "../common/Pagination";
import { CommitCard } from "./CommitCard";
import { ModalComponent } from "../common/ModalComponent";

export const CommitsContainer = () => {
  const [repo, setRepo] = useState("client");
  console.log({repo})
  const response = useGetCommitsQuery(`commit-viewer-${repo}`);
  const { isLoading, currentData } = response;
  const author: RepoAuthor = currentData?.author;
  const commits: CommitResponse[] = currentData?.commits;
  const authorAvatar = author?.avatar;
  const authorName = author?.userName;
  const authorDetails = author?.details;
  const commitCount: number = currentData?.commit_count;

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const [modalContent, setModalContent] = useState<Array<CommentReponse>>([]);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(commitCount / itemsPerPage);

  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [searchQuery, setSearchQuery] = useState("");

  let filteredAndSortedCommits = useMemo(() => {
    if (!commits) {
      return [];
    }

    const filtered = commits.filter((commit) => {
      return (
        commit.date &&
        commit.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    if (sortBy === "newest") {
      return filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    } else if (sortBy === "oldest") {
      return filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
    }

    return filtered;
  }, [commits, searchQuery, sortBy]);

  if (filteredAndSortedCommits) {
    const indexOfLastItem: number = currentPage * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    filteredAndSortedCommits = filteredAndSortedCommits.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
  }

  const handleCommentModal = (comment: any) => {
    openModal();
    setModalContent(comment);
  };

  return (
    <>
      {isLoading ? (
        <CommitsSkeleton />
      ) : (
        <section className="flex flex-col items-center w-full md:max-h-[calc(100%-130px)] h-[100%] md:border rounded-md overflow-hidden bg-gray-950 relative md:max-w-[1000px] md:min-w-[768px]">
          <ModalComponent
            title="Commit Comments"
            onClose={closeModal}
            modalRef={modalRef}
            modalContent={modalContent}
          />
          <div className="w-full flex p-4 justify-between items-center md:border md:border-slate-800 bg-black">
            <a
              className="flex items-center md:text-xl w-[65%] mr-2"
              href={authorDetails}
              target="_blank"
            >
              <img
                className="mr-4 w-[50px] h-[50px] rounded-full"
                src={authorAvatar}
                alt="avatar"
              />
              <span className="truncate">{`${authorName || "...loading"} / commit-viewer-${repo}`}</span>
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
          <ActionBar
            search={searchQuery}
            setSearch={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            repo={repo}
            setRepo={setRepo}
          />
          <div className="overflow-y-auto w-full px-4 max-h-[calc(100%-200px)]">
            {filteredAndSortedCommits.length === 0 ? (
              <div className="rounded-xl shadow-xl border my-3 border-slate-700 bg-gray-950 overflow-hidden">
                <div className="card-actions bg-gray-900 rounded-md p-4 justify-center w-full">
                  <p> No commits found with search value</p>
                </div>
              </div>
            ) : (
              filteredAndSortedCommits.map((commit, index: number) => (
                <CommitCard
                  commit={commit}
                  key={index}
                  count={commitCount}
                  handleCommentModal={handleCommentModal}
                />
              ))
            )}
          </div>
          <Pagination
            amount={commits?.length}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </section>
      )}
    </>
  );
};
