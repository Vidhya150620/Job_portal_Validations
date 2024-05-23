import { useDispatch, useSelector } from "react-redux";
import TextField from "../../components/Textfield";
import { AppDispatch, RootState } from "../../app/store";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../Validations/validation";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginForm() {
  // const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.auth);
  // const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="email"
        className="my-3 border border-gray-300 w-full px-2 py-3 rounded-md text-sm"
        type="text"
        placeholder="Email"
        {...register("email")}
      />
      {errors.email && (
        <p className="text-left text-xs text-error">{errors.email.message}</p>
      )}
      <TextField
        id="password"
        className="my-3 border border-gray-300 w-full px-2 py-3 rounded-md text-sm"
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {errors.password && (
        <p className="text-left text-xs text-error">
          {errors.password.message}
        </p>
      )}

      <Link
        to="/forgot-password"
        className="block text-sm text-end my-2 cursor-pointer hover:text-primary"
      >
        Forget Password?
      </Link>
      <button
        className={`p-2 ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
        } w-[100%] my-5 rounded-md text-white`}
        disabled={isLoading !== false} // Disable the button only if isLoading is true
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
}
