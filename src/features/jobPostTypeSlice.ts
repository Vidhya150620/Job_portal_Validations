import { createSlice } from "@reduxjs/toolkit";

// interface jobPostsTypeState {
//   jobPostsType: string | null;
//   isLoading: boolean;
// }

export type UserState = string | null;

const initialState: UserState = "allJobPosts";

const jobPostsTypeSlice = createSlice({
  name: "candidate/job-posts/type",
  initialState,
  reducers: {
    setType: (_, action) => {
      return action.payload;
    },
  },
});

export const { setType } = jobPostsTypeSlice.actions;

export default jobPostsTypeSlice.reducer;
