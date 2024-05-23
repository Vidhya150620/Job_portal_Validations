import { useDispatch, useSelector } from "react-redux";
import TextField from "../../components/Textfield";
import { AppDispatch, RootState } from "../../app/store";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSchema } from "../Validations/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Dialog from "../../components/Dialog";

export default function LoginForm() {
  const [isAlert, setIsAlert] = useState(true);
  // const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.auth);
  // const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isAlert && (
        <Dialog updateState={setIsAlert} error={true}>
          <h1>Hello</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            repellendus, perferendis aut accusantium voluptas delectus
            voluptatibus vel odio fugiat esse veritatis ipsum est minus
            exercitationem nisi, ab asperiores magnam laboriosam?
          </p>
        </Dialog>
      )}
      <TextField
        id="fullName"
        className="my-2 border w-full px-2 py-3 rounded-md text-sm"
        type="text"
        placeholder="Full name"
        {...register("fullName")}
      />
      {errors.fullName && (
        <p className="text-left text-xs text-error">
          {errors.fullName.message}
        </p>
      )}
      <TextField
        id="email"
        className="my-2 border w-full px-2 py-3 rounded-md text-sm"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      {errors.email && (
        <p className="text-left text-xs text-error">{errors.email.message}</p>
      )}

      <TextField
        id="password"
        className="my-2 border w-full px-2 py-3 rounded-md text-sm"
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {errors.password && (
        <div className="text-left text-xs text-error">
          {errors.password.message}
        </div>
      )}
      <TextField
        id="confirmPassword"
        className="my-2 border w-full px-2 py-3 rounded-md text-sm"
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === getValues("password") || "Passwords must match",
        })}
      />
      {errors.confirmPassword && (
        <div className="text-left text-xs text-error">
          {errors.confirmPassword.message}
        </div>
      )}
      <button
        className={`p-2 ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
        } w-[100%] my-5 rounded-md text-white`}
        disabled={isLoading !== false} // Disable the button only if isLoading is true
      >
        {isLoading ? "Loading..." : "Register"}
      </button>
    </form>
  );
}
