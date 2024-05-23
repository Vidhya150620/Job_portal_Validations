import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import Avatar from "../../assets/images/avatar.svg";
import CoverImage from "../../assets/images/candidate_cover_image.jpg";
import PersonalInformation from "./PersonalInformation";
import CarrerPreference from "./CarrerPreference";
import Project from "./Project";
import About from "./About";
import ProfileSidebar from "./ProfileSidebar";

export function Profile() {
  return (
    <Wrapper>
      <Navbar />
      <main className="flex gap-1 max-w-screen-xl m-auto my-6">
        <ProfileSidebar />
        <section className=" min-h-screen p-5 rounded-xl">
          <img
            className="bg-cover bg-no-repeat bg-gradient-to-r from-blue-400 to-indigo-500"
            src={CoverImage}
            alt="bg-image"
          />

          <main className="flex justify-between items-center">
            <article className="-translate-y-[35%] translate-x-[25%] flex items-center">
              <img
                className="max-w-[120px] rounded-full"
                src={Avatar}
                alt="img"
                width="100%"
              />
              <p className="ml-3 mt-4 text-lg">Mohamed Ijass</p>
            </article>
            <article className="flex">
              <button className="px-3 py-1 border rounded-md cursor-pointer mr-1 border-primary text-primary">
                View Resume
              </button>
            </article>
          </main>

          <main className="flex flex-col md:flex-row md:gap-5">
            <section className="flex-grow-[2]">
              <PersonalInformation />
              <CarrerPreference />
              <Project />
            </section>

            <section className="flex-grow">
              <About />
            </section>
          </main>

          <footer className="bg-primary text-white py-1 text-center">
            @copyright oceanacademy 2024
          </footer>
        </section>
      </main>
    </Wrapper>
  );
}
