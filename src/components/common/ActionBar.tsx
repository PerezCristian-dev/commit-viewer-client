import { DropDownMenu } from "./DropDownMenu";
import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";

interface ActionBarProps {
  search: string;
  sortBy: string;
  repo: string;
  setSearch: (search: string) => void;
  setSortBy: (sortBy: string) => void;
  setRepo: (repo: string) => void;
}
export const ActionBar = ({
  search,
  sortBy,
  repo,
  setRepo,
  setSearch,
  setSortBy,
}: ActionBarProps) => {
  const [isMobile, setIsMobile] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleShowSearch = () => {
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    setSearch(e.target.value);
  };
  return (
    <div className="flex justify-between items-center px-5 py-2 w-full bg-slate-800">
      <div className="flex items-center">
        <span className="mr-4">Commits</span>
        <DropDownMenu
          position={"left"}
          icon="timeline"
          btnClass="btn-primary"
          title={repo}
        >
          <li onClick={() => setRepo("client")}>
            <a>
              {repo === "client" && <Icon icon="check" className="mr-2" />}
              Client
            </a>
          </li>
          <li onClick={() => setRepo("server")}>
            <a>
              {repo === "server" && <Icon icon="check" className="mr-2" />}
              Server
            </a>
          </li>
        </DropDownMenu>
      </div>
      <div className="flex items-center">
        {!isMobile ? (
          <div className="relative">
            <button className="btn btn-dark mr-2" onClick={handleShowSearch}>
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
                  value={search}
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
            value={search}
            className="px-4 py-3 rounded-lg border-0 focus:border-0 mr-2"
          />
        )}
        <DropDownMenu icon="filter_list">
          <li onClick={() => setSortBy("newest")}>
            <a>{sortBy === "newest" && <Icon icon="check" />}Sort by Newest</a>
          </li>
          <li onClick={() => setSortBy("oldest")}>
            <a>
              {sortBy === "oldest" && <Icon icon="check" className="mr-2" />}
              Sort by Oldest
            </a>
          </li>
        </DropDownMenu>
      </div>
    </div>
  );
};
