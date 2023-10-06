"use client";
import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="w-full h-[calc(100vh-130px)]  md:px-20 flex justify-center items-center bg-slate-900">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
