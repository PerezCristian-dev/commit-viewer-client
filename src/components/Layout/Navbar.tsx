import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex items-center px-4 py-2 max-h-[80px] h-[80px] justify-center md:justify-start">
      <img
        className="mr-4 w-[30px] h-[30px]"
        src="./github-mark-white.svg"
        alt="GitHubLogo"
      />
      <span>GitHub Commit Viewer</span>
    </nav>
  );
};
