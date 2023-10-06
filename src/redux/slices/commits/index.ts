import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GitHubCommit } from "../../../interfaces/commit.interface";

const commitsSlice = createSlice({
  name: "commits",
  initialState: {} as GitHubCommit,
  reducers: {
    setCommits(state, action: PayloadAction<GitHubCommit>) {
      state = action.payload;
    },
  },
});
export const { setCommits } = commitsSlice.actions;
export default commitsSlice.reducer;
