"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { DropDownMenu } from "../common/DropDownMenu";
import Icon from "../common/Icon";
import { useSession } from "next-auth/react";

export const HeaderAvatar = () => {
  const { data, status } = useSession();
  const handleLogout = () => {
    signOut();
  };

  return (
    status === "authenticated" && (
      <div className="flex items-center relative right-0 z-50">
        <span className="mr-2">{data?.user?.name}</span>
        <DropDownMenu icon={data?.user?.image || ""} isImage>
          <li>
            <a onClick={handleLogout}>
              <Icon icon="logout" />
              Sign out
            </a>
          </li>
        </DropDownMenu>
      </div>
    )
  );
};
