import React, { useState, useEffect, useRef } from "react";
import Icon from "./Icon";

type DropDownPosition = "left" | "right";

interface DropDownProps {
  position?: DropDownPosition;
  children: React.ReactNode;
  icon?: string;
  btnClass?: string;
  title?: string;
  isImage?: boolean;
}

export const DropDownMenu = ({
  children,
  position,
  icon,
  btnClass,
  title,
  isImage,
}: DropDownProps) => {
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        handleDropDown();
      }
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className={
          isImage
            ? "btn btn-circle"
            : `btn  ${btnClass ?? "btn-square btn-primary"} `
        }
        onClick={handleDropDown}
      >
        {icon && isImage ? (
          <img src={icon} className="m-0 rounded-full" />
        ) : icon ? (
          <Icon icon={icon} className="m-0" />
        ) : (
          ""
        )}
        {title && <span className="ml-2">{title}</span>}
      </button>
      {isOpen && (
        <ul
          ref={menuRef}
          className={`menu bg-slate-900 w-56 rounded-box absolute ${
            position === "left" ? "left-0" : "right-0"
          } top-[50px] shadow-lg`}
        >
          {children}
        </ul>
      )}
    </div>
  );
};
