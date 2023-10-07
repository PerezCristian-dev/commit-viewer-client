import config from "@/config";
import paramsSerializerUtils from "@/utils/paramsSerializer.utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const getAccessToken = () => {
  return localStorage.getItem("GH_ACCESS_TOKEN");
};

export const commitsRTKProvider = createApi({
  reducerPath: "commitsRTKProvider",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api.url}`,
    credentials: "same-origin",
    paramsSerializer(params) {
      return paramsSerializerUtils(params);
    },
    prepareHeaders: (headers) => {
      const token = getAccessToken();

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        console.log({ token });
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCommits: builder.query({
      query: (repo) => `/commits/PerezCristian-dev/${repo}`,
    }),
  }),
});

export const { useGetCommitsQuery } = commitsRTKProvider;
