import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../services/API/apiConfig";
import Cookies from "universal-cookie";

interface appliedJobPostsState {
  data: [] | null;
  isLoading: boolean;
}

const initialState: appliedJobPostsState = {
  data: null,
  isLoading: false,
};

export const fetchappliedJobPostsAPI = createAsyncThunk(
  "candidate/job-posts/applied",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("candidate/job-posts/applied", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${new Cookies().get("token")}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const appliedJobPostsSlice = createSlice({
  name: "candidate/job-posts/applied",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchappliedJobPostsAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchappliedJobPostsAPI.fulfilled,
        (state, action: PayloadAction<[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchappliedJobPostsAPI.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default appliedJobPostsSlice.reducer;
