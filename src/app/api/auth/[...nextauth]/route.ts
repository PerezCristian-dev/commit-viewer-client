import { authConfig } from "@/lib/auth";
import NextAuth from "next-auth";

const handle = NextAuth(authConfig);

export { handle as GET, handle as POST };
