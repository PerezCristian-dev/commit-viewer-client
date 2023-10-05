"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className="h-[100vh]">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
