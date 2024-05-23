import Sidebar from "../../components/Sidebar";
import Wrapper from "../../components/Wrapper";
import Content from "./Content";

export default function Companies() {
  return (
    <>
      <Wrapper>
        <section className="flex gap-5 justify-between mx-auto max-w-screen-xl w-[95%] py-5">
          <Sidebar />
          <Content />
        </section>
      </Wrapper>
    </>
  );
}
