import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Info: React.FC = () => {
  const [activateMenu, setActivateMenu] = useState("Overview");
  const handleMenuClick = (menuName: string) => {
    setActivateMenu(menuName);
  };
  // console.log(activateMenu);
  const organizationData = useSelector(
    (state: RootState) => state.organizationView
  );

  const organizationName = organizationData.data?.organizationName || null;
  const organizationLogo = organizationData.data?.organizationLogo;
  const description =
    organizationData.data?.description || "a software institute";

  return (
    <div className="bg-white p-[30px]">
      <div className="flex gap-[20px] items-center">
        <img
          src={organizationLogo}
          width={100}
          className="object-contain"
          alt="image"
        ></img>
        <div>
          <p className="text-left font-semibold text-[20px] max-[550px]:text-[18px] max-[400px]:text-[16px]">
            {organizationName}
          </p>
          <p className="text-left max-[550px]:text-[15px] max-[400px]:text-[13px]">
            {description}
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <ul className="flex gap-[50px] mt-[14px]">
          <li
            className={`font-medium	text-primaryTex hover:cursor-pointer max-[740px]:text-[15px]  ${
              activateMenu === "Overview"
                ? "border-b-4 border-primary border-solid text-primary"
                : ""
            }`}
            style={{
              color: activateMenu === "Overview" ? "#0A73BE" : "#6B6B6B",
            }}
            onClick={() => handleMenuClick("Overview")}
          >
            Overview
          </li>
          <li
            className={`font-medium	text-primaryTex hover:cursor-pointer max-[740px]:text-[15px]  ${
              activateMenu === "Job"
                ? "border-b-4 border-primary border-solid text-primary"
                : ""
            }`}
            style={{
              color: activateMenu === "Job" ? "#0A73BE" : "#6B6B6B",
            }}
            onClick={() => handleMenuClick("Job")}
          >
            Job (2)
          </li>
        </ul>
        <hr className="w-[80%]"></hr>
      </div>
    </div>
  );
};

export default Info;
