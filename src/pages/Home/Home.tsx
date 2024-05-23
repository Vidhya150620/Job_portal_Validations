import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Content from "./Content";


export default function Home() {


  return (
    <>
      <Navbar />
      <main className="bg-secondary py-5">
        <section className="flex gap-5 justify-between mx-auto max-w-screen-xl w-[95%]">
          <Sidebar />
          <Content />
        </section>
      </main>
      <Footer />
    </>
  );
}
