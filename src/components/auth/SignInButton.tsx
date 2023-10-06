"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export const SignInButton = () => {
  const handleLogin = () => {
    signIn("github");
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-green-700 hover:bg-green-600 text-white rounded-md px-4 py-2 flex items-center"
    >
      <span>Sign in</span>
    </button>
  );
};
