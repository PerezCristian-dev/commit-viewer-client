"use client";
import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center bg-slate-900 w-full h-[calc(100%-110px)]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
