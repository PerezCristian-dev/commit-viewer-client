import config from "@/config";
import paramsSerializerUtils from "@/utils/paramsSerializer.utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const commitsRTKProvider = createApi({
  reducerPath: "commitsRTKProvider",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api.url}`,
    credentials: "same-origin",
    paramsSerializer(params) {
      return paramsSerializerUtils(params);
    },
  }),
  endpoints: (builder) => ({
    getCommits: builder.query({
      query: (repo) => `repos/PerezCristian-dev/${repo}/commits`,
    }),
  }),
});

export const { useGetCommitsQuery } = commitsRTKProvider;
