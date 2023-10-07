import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authConfig: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // @ts-ignore
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
