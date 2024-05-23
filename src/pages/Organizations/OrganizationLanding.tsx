import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Drawer from "../../components/Drawer";
import Companies from "./Organization";

export default function CompanyLanding() {
  return (
    <>
      <Drawer />
      <Navbar />
      <Companies />
      <Footer />
    </>
  );
}
