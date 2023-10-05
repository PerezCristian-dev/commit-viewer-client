"use client";
import useWindowScroll from "@/hooks/useWindowScroll";
import React, { MutableRefObject, useRef } from "react";
import { Navbar } from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full px-20 py-10">{children}</main>
    </>
  );
};

export default Layout;
