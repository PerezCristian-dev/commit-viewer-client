"use client";
import useWindowScroll from "@/hooks/useWindowScroll";
import React, { MutableRefObject, useRef } from "react";
import { Navbar } from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // Create a ref to the loading element to check if it's visible
  const loadingRef = useRef<HTMLElement>(null);

  // Get the window scroll position
  const position = useWindowScroll();

  const [offset, setOffset] = React.useState(1);

  // Increase offset on initial mount
  React.useEffect(() => {
    setOffset((prev) => prev + 1);
  }, []);

  // Increase offset when loading element becomes visible
  React.useEffect(() => {
    if (position > 0) {
      setOffset((prev) => prev + 1);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="m-10 md:m-20">
        {children}
        <span ref={loadingRef}></span>
      </div>
    </div>
  );
};

export default Layout;
