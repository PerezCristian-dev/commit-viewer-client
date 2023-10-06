import React, { FunctionComponent } from "react";
import Icon from "../common/Icon";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="flex items-center justify-center">
      <div>
        <p>
          Made with
          <span className="mx-2" role="img" aria-label="love">
            ❤️
          </span>
          by Cristian Perez &copy; 2023
        </p>
      </div>
    </footer>
  );
};
