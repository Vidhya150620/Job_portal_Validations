import { Outlet } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function CompanyView() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <main className="pb-[35px] w-[60%] max-w-screen-xl mx-auto pt-5 max-[1300px]:w-[78%] max-[900px]:w-[82%] max-[700px]:w-[90%] max-[430px]:pt-[25px]">
          <Outlet />
        </main>
      </Wrapper>
      <Footer />
    </>
  );
}
