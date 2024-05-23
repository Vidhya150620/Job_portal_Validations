import Navbar from "../../components/Navbar";
import Shapes from "../../components/Shapes";
import UpdatePasswordForm from "./UpdatePasswordForm";

function UpdatePassword() {

  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen">
        <Shapes />
        <Navbar />
        <section className="max-w-96 w-[95%] m-auto items-center text-center">
          <h1 className="text-2xl font-medium mb-1">Hello, Mohamed Ijass👋</h1>
          <p className="text-sm mb-5">
            Please create a new Strong Password and this valid upto only 24
            hours so create as soon as possible
          </p>
          <UpdatePasswordForm />
        </section>
      </main>
    </>
  );
}

export default UpdatePassword;
