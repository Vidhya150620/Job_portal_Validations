import { Link } from "react-router-dom";
import Shapes from "../../components/Shapes";
import RequestEmailForm from "./ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen">
        <Shapes />
        <section className="max-w-96 w-[95%] m-auto items-center text-center">
          <h1 className="text-2xl font-medium mb-1">
            Did you forgot your Password?
          </h1>
          <p className="text-sm mb-5">
            Enter your Email Address below and we will send you a password reset
            link to your email address.
          </p>
          <RequestEmailForm />
          <Link
            to="/"
            className="block p-2 text-primary w-[100%] my-5 rounded-md border-primary border-solid border-[1px]"
          >
            Back to Login In
          </Link>
        </section>
      </main>
    </>
  );
}
