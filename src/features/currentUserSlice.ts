import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../services/API/apiConfig";
import Cookies from "universal-cookie";

interface CurrentUserState {
  data: string | null;
  isLoading: boolean | null;
  message: string | null;
  isError: boolean | null;
  status: string | null;
}

const initialState: CurrentUserState = {
  data: null,
  isLoading: false,
  message: null,
  isError: false,
  status: null,
};

export const fetchCurrentUserAPI = createAsyncThunk(
  "candidate/current-user",
  async () => {
    try {
      const response = await axios.get("candidate/current-user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${new Cookies().get("token")}`,
        },
      });

      console.log(response.data);

      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

const currentUserSlice = createSlice({
  name: "candidate/current-user",
  initialState,
  reducers: {
    logout: () => {
      const cookie = new Cookies();
      cookie.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUserAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUserAPI.fulfilled, (state, action) => {
        const { status, message, data } = action.payload;

        state.data = data;
        state.message = message;
        state.status = status;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUserAPI.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { logout } = currentUserSlice.actions;

export default currentUserSlice.reducer;
