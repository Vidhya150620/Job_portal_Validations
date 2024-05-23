import React from "react";
import ofc1 from "../../assets/images/officeImg-1.png";
import ofc2 from "../../assets/images/officeImg-2.png";
import ofc3 from "../../assets/images/officeImg-3.png";
import CarouselControlsInside from "../../components/Carousel";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Gallery: React.FC = () => {
  const organizationData = useSelector(
    (state: RootState) => state.organizationView
  );

  const galleryLink = organizationData.data?.gallery || null;
  const organizationName = organizationData.data?.organizationName;

  return (
    <main className="bg-white  p-[30px] mt-[21px]">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[18px] max-[550px]:text-[17px] max-[400px]:text-[15px]">
          {organizationName}
        </p>
        <button
          type="button"
          className="text-primary font-semibold max-[400px]:text-[15px]"
        >
          View gallery
        </button>
      </div>
      {/* <div className="flex gap-[17px] mt-[20px]">
        <CarouselControlsInside carousel="gallery">
          {galleryLink?.map((link, i) => (
            <img
              src={link}
              width="100%"
              className="object-cover rounded-lg"
              alt="image"
              key={i}
            ></img>
          ))}
        </CarouselControlsInside>
      </div> */}
      <div className="flex gap-[17px] mt-[20px] flex-wrap items-center justify-evenly ">
        {galleryLink?.map((link, i) => (
          <div key={i} className="w-full max-w-[300px] h-56">
            <img
              src={link}
              className="h-full w-full object-cover rounded-lg"
              alt="image"
            ></img>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Gallery;
