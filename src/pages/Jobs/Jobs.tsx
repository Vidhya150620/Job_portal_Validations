import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import JobFilter from "./JobFilter";
import Wrapper from "../../components/Wrapper";
import JobList from "./JobList";


export default function Jobs() {

   
  return (
    <Wrapper>
      <Navbar />
      <main className="max-w-screen-xl flex gap-5 mx-auto py-5">
        <JobFilter />
        <JobList  />
      </main>
      <Footer />
    </Wrapper>
  );
}
