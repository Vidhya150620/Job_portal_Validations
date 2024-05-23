import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../features/auth/registerSlice";
import authSlice from "../features/auth/authSlice";
import organizationSlice from "../features/organizations/organizationsSlice";
import allJobPostsSlice from "../features/allJobPostsSlice";
import appliedJobPostsSlice from "../features/appliedJobPostsSlice";
import invitationSlice from "../features/invitationSlice";
import jobPostTypeSlice from "../features/jobPostTypeSlice";
import roleMatchedJobPostsSlice from "../features/roleMatchedJobPostsSlice";
import currentUserSlice from "../features/currentUserSlice";
import jobPostSlice from "../features/jobPostSlice";
import organizationAllJobPostsSlice from "../features/organizations/organizationAllJobPostsSlice";
import organizationViewSlice from "../features/organizations/organizationViewSlice";

export const store = configureStore({
  reducer: {
    register: registerSlice,
    auth: authSlice,
    currentUser: currentUserSlice,
    organizations: organizationSlice,
    allJobPosts: allJobPostsSlice,
    appliedJobPosts: appliedJobPostsSlice,
    roleMatchJobPosts: roleMatchedJobPostsSlice,
    jobInvites: invitationSlice,
    jobPostsType: jobPostTypeSlice,
    jobPost: jobPostSlice,
    organizationAllJobPosts: organizationAllJobPostsSlice,
    organizationView: organizationViewSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
