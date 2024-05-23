import axios from "../../services/API/apiConfig";
import Cookies from "universal-cookie";

export const forgotPasswordAPI = async (email: string) => {
  try {
    const response = await axios.post(
      "candidate/forgot-password",
      { email },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${new Cookies().get("token")}`,
        },
      }
    );

    return response.data; // Return the fetched data
  } catch (error: any) {
    return error.response.data; // Handle and return the error
  }
};
