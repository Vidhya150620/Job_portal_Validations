import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const About: React.FC = () => {
  const organizationData = useSelector(
    (state: RootState) => state.organizationView
  );
  const about = organizationData.data?.about || null;
  const organizationName = organizationData.data?.organizationName;
  return (
    <main className="bg-white  p-[30px] mt-[21px]">
      <p className="text-left font-semibold text-[18px] max-[550px]:text-[17px] max-[400px]:text-[16px]">
        {organizationName}
      </p>
      <p className="text-justify mt-[11px] text-[15px] max-[550px]:text-[15px] max-[400px]:text-[14px] leading-7">
        {about}
        <span className="text-primary cursor-pointer">read more</span>
      </p>
    </main>
  );
};

export default About;
