import axios from "../../services/API/apiConfig";

export const updatePasswordAPI = async (
  newPassword: string,
  token: string | undefined
) => {
  try {
    const response = await axios.post("candidate/reset-password", {
      newPassword,
      token,
    });

    return response.data; // Return the fetched data
  } catch (error: any) {
    return error.response.data; // Handle and return the error
  }
};
