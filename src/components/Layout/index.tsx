"use client";
import React from "react";
import { Navbar } from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="w-full h-[calc(100vh-46px)]  md:px-20 flex justify-center items-center">
        {children}
      </main>
    </>
  );
};

export default Layout;
