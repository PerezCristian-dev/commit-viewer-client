"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "./globals.css";
import { SessionProviderComponent } from "@/components/auth/SessionProviderComponent";
import Layout from "@/components/Layout";

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
      <body className="h-screen w-screen">
        <SessionProviderComponent>
          <Provider store={store}>
            <Layout>{children}</Layout>
          </Provider>
        </SessionProviderComponent>
      </body>
    </html>
  );
}
