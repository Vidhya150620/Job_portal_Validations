import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../services/API/apiConfig";

interface RegisterState {
  isLoading: boolean | null;
  message: string | null;
  isError: boolean | null;
  status: string | null;
}

const initialState: RegisterState = {
  isLoading: false,
  message: null,
  isError: false,
  status: null,
};

interface UserData {
  fullName: string;
  email: string;
  password: string;
}

export const registerAPI = createAsyncThunk(
  "auth/register",
  async (userData: UserData) => {
    try {
      const response = await axios.post("candidate/create-request", userData);

      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

const registerSlice = createSlice({
  name: "auth/register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAPI.fulfilled, (state, action) => {
        const { status, message } = action.payload;
        console.log(action.payload, "action.payload");

        if (status === "success") {
          state.isError = false;
          state.message = message;
        } else {
          state.isError = true;
          state.message = message;
        }
        state.isLoading = false;
        state.status = status;
      })
      .addCase(registerAPI.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.message = null;
      });
  },
});

export default registerSlice.reducer;
