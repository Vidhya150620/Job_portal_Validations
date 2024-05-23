import { useForm } from "react-hook-form";
import TextField from "../../components/Textfield";
import { textfieldStyle } from "./Constant";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { updatePasswordAPI } from "./updatePasswordAPI";

export default function UpdatePasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams<{ token: string }>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { password } = data;

    setIsLoading(true);
    const response = await updatePasswordAPI(password, token);
    console.log(response);
    setIsLoading(false);
  });
  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="new-password"
        className={textfieldStyle}
        type="password"
        placeholder="New Password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <div className="text-left text-xs text-error">Password is required</div>
      )}
      <TextField
        id="confirm-password"
        className={textfieldStyle}
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: true,
          validate: (value) => value === watch("password"),
        })}
      />
      <button
        className={`${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
        } p-2 w-[100%] my-5 rounded-md text-white border-gray-300`}
        disabled={isLoading !== false} // Disable the button only if isLoading is true
      >
        Reset Password
      </button>
      <p>-or-</p>
      <button className="p-2 text-primary w-[100%] my-5 rounded-md border-primary border-solid border-[1px]">
        Back to Login In
      </button>
    </form>
  );
}
