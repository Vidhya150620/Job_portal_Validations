import { useState } from "react";
import TextField from "../../components/Textfield";
import { forgotPasswordAPI } from "./forgotPasswordAPI";
import { useForm } from "react-hook-form";

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    const response = await forgotPasswordAPI(data.email);
    console.log(response);
    setIsLoading(false);
  });

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="email"
        className="my-2 border w-full px-2 py-3 rounded-md text-sm"
        type="text"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <div className="text-left text-xs text-error">Email is required</div>
      )}
      <button
        className={`${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
        } p-2 w-[100%] my-5 rounded-md text-white`}
        disabled={isLoading !== false} // Disable the button only if isLoading is true
      >
        Request Reset Link
      </button>
      <p>-or-</p>
    </form>
  );
}
