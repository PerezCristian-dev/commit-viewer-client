import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GitHubCommit } from "../../../interfaces/commit.interface";

const commitsSlice = createSlice({
  name: "commits",
  initialState: {} as GitHubCommit,
  reducers: {
    setCommits(state, action: PayloadAction<GitHubCommit>) {
      console.log({ state, action });
      state = action.payload;
    },
  },
});
export const { setCommits } = commitsSlice.actions;
export default commitsSlice.reducer;
