"use client";
import React, { useEffect } from "react";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleLogin = () => {
    setIsLoading(true);
    signIn("github");
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <button
      onClick={handleLogin}
      className="bg-green-700 hover:bg-green-600 text-white rounded-md px-4 py-2 flex items-center"
    >
      {isLoading && (
        <span className="loading loading-spinner loading-sm mr-2"></span>
      )}
      <span>Sign in</span>
    </button>
  );
};
