import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../services/API/apiConfig";
import Cookies from "universal-cookie";

interface invitationsState {
  data: [] | null;
  isLoading: boolean;
}

const initialState: invitationsState = {
  data: null,
  isLoading: false,
};

interface RequestData {
  roles: string[];
}

export const fetchinvitationsAPI = createAsyncThunk(
  "candidate/job-posts/invitations",
  async (roles: RequestData, thunkAPI) => {
    try {
      const response = await axios.post(
        "candidate/job-posts/invitations",
        roles,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${new Cookies().get("token")}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const invitationsSlice = createSlice({
  name: "candidate/job-posts/invitations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchinvitationsAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchinvitationsAPI.fulfilled,
        (state, action: PayloadAction<[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchinvitationsAPI.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default invitationsSlice.reducer;
