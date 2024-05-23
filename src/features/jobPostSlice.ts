import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../services/API/apiConfig";
import Cookies from "universal-cookie";

interface JobPostState {
  data: {} | null;
  isLoading: boolean;
  status: string;
  message: string;
  error: string;
}

const initialState: JobPostState = {
  data: null,
  isLoading: false,
  status: "",
  message: "",
  error: "",
};

export const fetchJobPostAPI = createAsyncThunk(
  "candidate/job-posts/:jobId",
  async (jobId: string, thunkAPI) => {
    console.log("from all job posts silce ts");
    console.log(jobId, "trigerred successfully");
    try {
      const response = await axios.get(`candidate/job-posts/${jobId}`, {
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

const allJobPostsSlice = createSlice({
  name: "candidate/job-posts/:jobId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobPostAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchJobPostAPI.fulfilled,
        (
          state,
          action: PayloadAction<{ data: {}; message: string; status: string }>
        ) => {
          const { data, message, status } = action.payload;
          state.isLoading = false;
          state.data = data;
          state.message = message;
          state.status = status;
        }
      )
      .addCase(fetchJobPostAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.message = "Error fetching job posts";
        state.status = "error";
        state.error = "Error fetching while fetching job posts";
        console.error("Error fetching job posts:", action.error.message);
      });
  },
});

export default allJobPostsSlice.reducer;
