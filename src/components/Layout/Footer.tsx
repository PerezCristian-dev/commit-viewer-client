import React, { FunctionComponent } from "react";
import Icon from "../common/Icon";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="flex items-center px-4 py-2 max-h-[50px] h-[50px] justify-center">
      <p>
        Made with
        <span className="mx-2" role="img" aria-label="love">
          ❤️
        </span>
        by Cristian Perez &copy; 2023
      </p>
      <p></p>
    </footer>
  );
};
