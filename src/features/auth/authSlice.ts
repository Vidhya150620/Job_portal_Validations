import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../services/API/apiConfig";
import Cookies from "universal-cookie";

interface AuthState {
  token: string | null;
  // currentUser: object | null;
  isLoading: boolean | null;
  message: string | null;
  isError: boolean | null;
  status: string | null;
}

const initialState: AuthState = {
  token: null,
  // currentUser: null,
  isLoading: false,
  message: null,
  isError: false,
  status: null,
};

interface UserData {
  email: string;
  password: string;
}

export const AuthAPI = createAsyncThunk(
  "auth/login",
  async (userData: UserData) => {
    try {
      const response = await axios.post("candidate/login", userData);

      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    logout: () => {
      console.log("logout");

      const cookie = new Cookies();
      cookie.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AuthAPI.fulfilled, (state, action) => {
        const { token, status, message } = action.payload;
        if (status === "success") {
          state.token = token;
          // state.currentUser = rest;
          state.isError = false;
          state.message = null;
        } else {
          state.isError = true;
          state.message = message;
        }
        state.isLoading = false;
        state.status = status;
      })
      .addCase(AuthAPI.rejected, (state) => {
        state.isError = true;
        // state.error = action.payload.message;
        // console.log(action, "action");
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
