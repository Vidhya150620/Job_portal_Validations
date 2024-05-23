import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../services/API/apiConfig";
import Cookies from "universal-cookie";

// Define a separate interface for the payload of organizationAPI.fulfilled action
interface OrganizationPayload {
  data: {};
  message: string;
  status: string;
  error: string;
}

// Define the state interface for the organization slice
interface OrganizationState {
  data: {} | null; // Data can be an array or null initially
  isLoading: boolean; // Indicates if the data is currently being loaded
  error: string; // Stores any error message
  status: string; // Indicates the status of the operation (e.g., success, failure)
  message: string; // General message related to the operation
}

// Define the initial state for the organization slice
const initialState: OrganizationState = {
  data: null,
  isLoading: false,
  error: "",
  status: "",
  message: "",
};

// Define an async thunk for fetching organization data
export const organizationAPI = createAsyncThunk(
  "recruiter/organizations",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("recruiter/organizations", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${new Cookies().get("token")}`,
        },
      });

      return response.data; // Return the fetched data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data); // Handle and return the error
    }
  }
);

// Create the organization slice using createSlice from Redux Toolkit
const organizationSlice = createSlice({
  name: "recruiter/organizations", // Slice name
  initialState, // Initial state defined above
  reducers: {}, // No additional reducers defined for now
  extraReducers: (builder) => {
    builder
      .addCase(organizationAPI.pending, (state) => {
        state.isLoading = true; // Set loading state when the async operation starts
      })
      .addCase(
        organizationAPI.fulfilled,
        (state, action: PayloadAction<OrganizationPayload>) => {
          // Handle the fulfilled action by updating state with payload data
          const { message, status, data, error } = action.payload;
          state.isLoading = false; // Set loading state to false
          state.data = data; // Update data in state
          state.message = message; // Update message in state
          state.status = status; // Update status in state
          state.error = error; // Update error in state
        }
      )
      .addCase(organizationAPI.rejected, (state, action) => {
        state.isLoading = false; // Set loading state to false if operation is rejected
        state.message = "Error fetching job posts";
        state.status = "error";
        state.error = "Error fetching while fetching job posts";
        console.error("Error fetching job posts:", action.error.message);
      });
  },
});

export default organizationSlice.reducer; // Export the reducer function for use in store configuration
