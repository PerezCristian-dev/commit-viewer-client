import React from "react";

export const Navbar = () => {
  return (
    <div className="flex items-center px-4 py-2">
      <img
        className="mr-4 w-[30px] h-[30px]"
        src="./github-mark-white.svg"
        alt="GitHubLogo"
      />
      <span>GitHub Commit Viewer</span>
    </div>
  );
};
