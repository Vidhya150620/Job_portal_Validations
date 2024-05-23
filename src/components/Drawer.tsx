import { useState } from "react";

function Drawer() {
  const [activeButton, setActiveButton] = useState("HOME");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-between">
        <p className="text-start text-[#303030] font-medium text-lg min-lg: hidden max-lg:block">
          Search Jobs
        </p>
        {/* <label
              htmlFor="my-drawer-4"
              className="drawer-button bg-[#0A73BE] text-white p-[10px] rounded-full  hidden max-lg:block w-[88px]"
            >
              Profile
            </label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content bg-white">
          <article>
            <article>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[100px] w-[100px] rounded-full border relative">
                  <div className="h-[90px] w-[90px] rounded-full border flex absolute top-[4px] left-[4px]">
                    {/* <img src={manImage} ></img> */}
                  </div>
                </div>
                <p className="text-black-700 font-semibold">Mohamed Ijass</p>
                <p className="text-email-600 text-[12px]">
                  ijass.ocean@gmail.com
                </p>
                <p className="text-email-600 text-[11px] mt-[15px]">
                  Last updated 14d ago
                </p>
                <button
                  type="button"
                  className="bg-[#0A73BE] text-white rounded-full p-[11px] text-[12px]"
                >
                  Complete profile
                </button>
              </div>
              <div className="ml-[37px] mt-[28px]">
                <div
                  className={`flex items-center pl-[28px]  ${
                    activeButton === "HOME"
                      ? "bg-blue-100 rounded-full text-[#0A73BE]"
                      : ""
                  }`}
                >
                  <i
                    className="fa fa-home"
                    style={{
                      fontSize: "52px",
                      color: activeButton === "HOME" ? "#0A73BE" : "#6B6B6B",
                    }}
                  ></i>
                  <button
                    type="button"
                    style={{
                      color: activeButton === "HOME" ? "#0A73BE" : "#6B6B6B",
                    }}
                    className={`text-[#6B6B6B] rounded-full p-[11px] text-[15px] font-medium`}
                    onClick={() => handleButtonClick("HOME")}
                  >
                    {" "}
                    HOME
                  </button>
                </div>
                <div
                  className={`flex items-center pl-[28px]  ${
                    activeButton === "JOBS"
                      ? "bg-blue-100 rounded-full text-[#0A73BE]"
                      : ""
                  }`}
                >
                  <i
                    className="fa fa-home"
                    style={{
                      fontSize: "52px",
                      color: activeButton === "JOBS" ? "#0A73BE" : "#6B6B6B",
                    }}
                  ></i>
                  <button
                    type="button"
                    style={{
                      color: activeButton === "JOBS" ? "#0A73BE" : "#6B6B6B",
                    }}
                    className={`text-[#6B6B6B] rounded-full p-[11px] text-[15px] font-medium `}
                    onClick={() => handleButtonClick("JOBS")}
                  >
                    JOBS
                  </button>
                </div>
                <div
                  className={`flex items-center pl-[28px]  ${
                    activeButton === "COMPANIES"
                      ? "bg-blue-100 rounded-full text-[#0A73BE]"
                      : ""
                  }`}
                >
                  <i
                    className="fa fa-building"
                    style={{
                      fontSize: "52px",
                      color:
                        activeButton === "COMPANIES" ? "#0A73BE" : "#6B6B6B",
                    }}
                  ></i>
                  <button
                    type="button"
                    style={{
                      color:
                        activeButton === "COMPANIES" ? "#0A73BE" : "#6B6B6B",
                    }}
                    className={`text-[#6B6B6B] rounded-full p-[11px] text-[15px] font-medium `}
                    onClick={() => handleButtonClick("COMPANIES")}
                  >
                    COMPANIES
                  </button>
                </div>
                <div
                  className={`flex items-center pl-[28px]  ${
                    activeButton === "SETTINGS"
                      ? "bg-blue-100 rounded-full text-[#0A73BE]"
                      : ""
                  }`}
                >
                  <i
                    className="fa fa-cog"
                    style={{
                      fontSize: "52px",
                      color:
                        activeButton === "SETTINGS" ? "#0A73BE" : "#6B6B6B",
                    }}
                  ></i>
                  <button
                    type="button"
                    style={{
                      color:
                        activeButton === "SETTINGS" ? "#0A73BE" : "#6B6B6B",
                    }}
                    className={`text-[#6B6B6B] rounded-full p-[11px] text-[15px] font-medium `}
                    onClick={() => handleButtonClick("SETTINGS")}
                  >
                    SETTINGS
                  </button>
                </div>
              </div>
            </article>
          </article>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
