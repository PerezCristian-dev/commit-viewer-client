import axios from "axios";

const BasePathForAPIService = process.env.NEXT_PUBLIC_GITHUB_API;

export const APIHeader = {
  Authorization: "",
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-cache",
};

axios.interceptors.request.use((config) => {
  // log a message before any HTTP request is sent
  // We can add interceptors for request here.
  console.log("The request ==== ", config);
  return config;
});

export const githubApi = axios.create({
  baseURL: BasePathForAPIService,
  headers: APIHeader,
});

export default githubApi;
