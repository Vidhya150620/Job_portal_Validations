import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../services/API/apiConfig";
import Cookies from "universal-cookie";

interface roleMatchJobPostsState {
  data: [] | null;
  isLoading: boolean;
}

const initialState: roleMatchJobPostsState = {
  data: null,
  isLoading: false,
};

interface RequestData {
  roles: string[];
}

export const fetchRoleMatchJobPostsAPI = createAsyncThunk(
  "candidate/job-posts/role-match",
  async (roles: RequestData, thunkAPI) => {
    try {
      const response = await axios.post(
        "candidate/job-posts/role-match",
        roles,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${new Cookies().get("token")}`,
          },
        }
      );

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const roleMatchJobPostsSlice = createSlice({
  name: "candidate/job-posts/role-match",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoleMatchJobPostsAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchRoleMatchJobPostsAPI.fulfilled,
        (state, action: PayloadAction<[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchRoleMatchJobPostsAPI.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default roleMatchJobPostsSlice.reducer;
