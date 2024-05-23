import { useEffect } from "react";
import Glide from "@glidejs/glide";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import JobCard from "../pages/Home/JobCard";
// import ofc1 from "../../assets/images/officeImg-1.png";
// import ofc2 from "../../assets/images/officeImg-2.png";
// import ofc3 from "../../assets/images/officeImg-3.png";

interface CarouselControlsInsideProps {
  carousel: string; // Define the type of carousel as string
  children: React.ReactNode;
}

export default function CarouselControlsInside({
  carousel,
  children,
}: CarouselControlsInsideProps) {
  useEffect(() => {
    const slider = new Glide(`.${carousel}`, {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 0,
      animationDuration: 700,
      gap: 25,
      classes: {
        // Change classNames to classes
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with controls inside --> */}
      <main key={carousel} className={`${carousel} relative w-full my-5`}>
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {children}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className=" bg-blue-400 backdrop-filter backdrop-blur-sm bg-opacity-45 p-3 rounded-full text-white text-2xl font-bold"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            className=" bg-blue-400 backdrop-filter backdrop-blur-sm bg-opacity-45 p-3 rounded-full text-white text-2xl font-bold"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </main>
      {/*<!-- End Carousel with controls inside --> */}
    </>
  );
}
