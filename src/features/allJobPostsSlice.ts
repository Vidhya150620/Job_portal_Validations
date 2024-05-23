import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../services/API/apiConfig";
import Cookies from "universal-cookie";

interface AllJobPostsState {
  data: [] | null;
  isLoading: boolean;
  status: string;
  message: string;
  error: string;
  len: 0;
}

const initialState: AllJobPostsState = {
  data: null,
  isLoading: false,
  status: "",
  message: "",
  error: "",
  len: 0,
};

export const fetchAllJobPostsAPI = createAsyncThunk(
  "candidate/all-job-posts",
  async (_, thunkAPI) => {
    console.log("from all job posts silce ts");
    try {
      const response = await axios.get("candidate/all-job-posts", {
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
  name: "candidate/all-job-posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJobPostsAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchAllJobPostsAPI.fulfilled,
        (
          state,
          action: PayloadAction<{
            data: [];
            message: string;
            status: string;
            len: number;
          }>
        ) => {
          const { data, message, status } = action.payload;
          state.isLoading = false;
          state.data = data;
          state.message = message;
          state.status = status;
          state.len = data.length;
        }
      )
      .addCase(fetchAllJobPostsAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.message = "Error fetching job posts";
        state.status = "error";
        state.error = "Error fetching while fetching job posts";
        console.error("Error fetching job posts:", action.error.message);
      });
  },
});

export default allJobPostsSlice.reducer;
