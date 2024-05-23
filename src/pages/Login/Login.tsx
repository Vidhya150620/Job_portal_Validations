import { Link } from "react-router-dom";
import Shapes from "../../components/Shapes";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <Shapes />
      <section className="max-w-96 w-[95%] m-auto items-center text-center">
        <h1 className="text-2xl font-medium mb-1">Hello Candidate 👋</h1>
        <p className="text-md mb-5">Welcome back, you've been missed</p>
        <LoginForm />
        <p>-or-</p>
        <Link
          to="/register"
          className="block p-2 text-primary w-[100%] my-5 rounded-md border-primary border-solid border-[1px]"
        >
          Register
        </Link>
      </section>
    </main>
  );
}
