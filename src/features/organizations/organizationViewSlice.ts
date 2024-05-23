import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../services/API/apiConfig";
import Cookies from "universal-cookie";

interface JobPost {
  id: string;
  title: string;
}

interface OrganizationData {
  about: string;
  createdAt: string;
  foundedYear: number;
  gallery: string[] | null;
  jobPostLimit: number;
  jobPosts: JobPost[];
  location: string;
  normalizedOrganizationName: string;
  organizationLogo: string;
  organizationName: string;
  recruiterLimit: number;
  teamSize: string;
  updatedAt: string;
  websiteLink: string;
  type: string;
  description: string;
  _id: string;
}

// Define a separate interface for the payload of fetchOrganizationViewAPI.fulfilled action
interface OrganizationPayload {
  data: OrganizationData;
  message: string;
  status: string;
}

// Define the state interface for the organization slice
interface OrganizationViewState {
  data: OrganizationData | null;
  isLoading: boolean;
  error: string;
  status: string;
  message: string;
}

// Define the initial state for the organization slice
const initialState: OrganizationViewState = {
  data: null,
  isLoading: false,
  error: "",
  status: "",
  message: "",
};

// Define an async thunk for fetching organization data
export const fetchOrganizationViewAPI = createAsyncThunk(
  "recruiter/organizations/fetchOrganizationViewAPI",
  async (organizationId: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `recruiter/organizations/${organizationId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${new Cookies().get("token")}`,
          },
        }
      );

      return response.data; // Return the fetched data
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || "Unknown error";
      return thunkAPI.rejectWithValue(errorMessage); // Handle and return the error
    }
  }
);

// Create the organization slice using createSlice from Redux Toolkit
const organizationViewSlice = createSlice({
  name: "recruiter/organizations",
  initialState, // Initial state defined above
  reducers: {}, // No additional reducers defined for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizationViewAPI.pending, (state) => {
        state.isLoading = true; // Set loading state when the async operation starts
      })
      .addCase(
        fetchOrganizationViewAPI.fulfilled,
        (state, action: PayloadAction<OrganizationPayload>) => {
          // Handle the fulfilled action by updating state with payload data
          const { message, status, data } = action.payload;
          state.isLoading = false; // Set loading state to false
          state.data = data; // Update data in state
          state.message = message; // Update message in state
          state.status = status; // Update status in state
        }
      )
      .addCase(fetchOrganizationViewAPI.rejected, (state, action) => {
        state.isLoading = false; // Set loading state to false if operation is rejected
        state.message = action.payload as string; // Update message in state
        state.status = "error"; // Update status in state
        console.error("Error fetching organization data:", action.payload);
      });
  },
});

export default organizationViewSlice.reducer; // Export the reducer function for use in store configuration
