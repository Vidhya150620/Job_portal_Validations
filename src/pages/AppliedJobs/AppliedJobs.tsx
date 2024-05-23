import Drawer from "../../components/Drawer";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import AppliedJobCardView from "./AppliedJobCardView";

const AppliedJobs = () => {
  return (
    <main>
      <Drawer />
      <Navbar />
      <main className="bg-secondary py-5">
        <section className="flex gap-5 justify-between mx-auto max-w-screen-xl w-[95%]">
          <Sidebar />
          <AppliedJobCardView />
        </section>
      </main>
      <Footer />
    </main>
  );
};

export default AppliedJobs;
