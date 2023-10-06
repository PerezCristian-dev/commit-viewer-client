import { useGetCommitsQuery } from "@/redux/rtk/commits";
import { CommitCard } from "./CommitCard";
import Icon from "../common/Icon";
import { CommitsSkeleton } from "../common/CommitsSkeleton";
import { CommitResponse, RepoAuthor } from "@/interfaces/viewer-api.interface";
import { DropDownMenu } from "../common/DropDownMenu";
import { useEffect, useState, useRef } from "react";
import { Pagination } from "../common/Pagination";

export const CommitsContainer = () => {
  const response = useGetCommitsQuery("commit-viewer-client");
  const { isLoading, currentData } = response;
  const author: RepoAuthor = currentData?.author;
  const commits: CommitResponse[] = currentData?.commits;
  const authorAvatar = author?.avatar;
  const authorName = author?.userName;
  const authorDetails = author?.details;

  const [isMobile, setIsMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searcjQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const handleShowSearch = () => {
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 600);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [response]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        handleShowSearch();
      }
    };

    if (showSearch) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <CommitsSkeleton />
      ) : (
        <section className="flex flex-col md:max-h-[calc(100%-130px)] h-[100%] max-w-7xl items-center md:border rounded-md overflow-hidden bg-gray-950">
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
                {commits.length > 1
                  ? `${commits.length} commits`
                  : `${commits.length} commit`}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center px-5 py-2 w-full bg-slate-800">
            <div className="flex items-center">
              <span className="mr-4">Commits</span>
              <DropDownMenu
                position={"left"}
                icon="timeline"
                btnClass="btn-dark"
              >
                <li>
                  <a>Main</a>
                </li>
                <li>
                  <a>Server</a>
                </li>
              </DropDownMenu>
            </div>
            <div className="flex items-center">
              {!isMobile ? (
                <div className="relative">
                  <button
                    className="btn btn-dark mr-2"
                    onClick={handleShowSearch}
                  >
                    <Icon icon="search" />
                  </button>

                  {showSearch && (
                    <div
                      ref={searchRef}
                      className="absolute top-[55px] right-[-68px] w-screen bg-slate-800 flex items-center justify-center p-4"
                    >
                      <input
                        type="search"
                        name="search"
                        onChange={handleSearch}
                        value={searcjQuery}
                        placeholder="Search by keyword"
                        className="px-4 py-3 rounded-lg border-0 focus:border-0 mr-2 w-full"
                      />
                    </div>
                  )}
                </div>
              ) : (
                <input
                  type="search"
                  name="search"
                  onChange={handleSearch}
                  placeholder="Search by keyword"
                  value={searcjQuery}
                  className="px-4 py-3 rounded-lg border-0 focus:border-0 mr-2"
                />
              )}
              <DropDownMenu icon="tune">
                <li>
                  <a>Name</a>
                </li>
                <li>
                  <a>Date</a>
                </li>
                <li>
                  <details open>
                    <summary>Sort by</summary>
                    <ul>
                      <li>
                        <a>Ascending</a>
                      </li>
                      <li>
                        <a>Descending</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </DropDownMenu>
            </div>
          </div>
          <div className="overflow-y-auto w-full px-4">
            {commits.map((commit, index: number) => (
              <CommitCard commit={commit} key={index} />
            ))}
          </div>
          <Pagination amount={commits.length} />
        </section>
      )}
    </>
  );
};
