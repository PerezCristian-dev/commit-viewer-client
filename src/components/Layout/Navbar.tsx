import React from "react";
import { HeaderAvatar } from "../auth/HeaderAvatar";

export const Navbar = () => {
  return (
    <nav className="relative w-full flex items-center px-6 md:px-16 py-2 max-h-[80px] h-[80px] justify-between">
      <div className="flex items-center">
        <img
          className="mr-4 w-[30px] h-[30px]"
          src="./github-mark-white.svg"
          alt="GitHubLogo"
        />
        <span>GitHub Commit Viewer</span>
      </div>
      <HeaderAvatar />
    </nav>
  );
};
