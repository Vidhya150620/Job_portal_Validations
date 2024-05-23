import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import wipro from "../../assets/images/wipro.png";
import swiggy from "../../assets/images/swiggy.png";
import jet from "../../assets/images/jet.png";
import { Footer } from "../../components/Footer";

export default function JobVacancy_Company() {
  const [activateMenu, setActivateMenu] = useState("Overview");
  const handleMenuClick = (menuName: string) => {
    setActivateMenu(menuName);
  };
  return (
    <div>
      <Navbar />
      <section className="bg-secondary w-1/8  ">
        <article className="pb-[45px] pt-[40px]">
          <div className="bg-white w-[80%] max-w-screen-xl mx-auto p-[30px] max-[630px]:w-[90%] max-[500px]:p-[17px]">
            <div className="bg-white  p-[30px] pt-[17px]">
              <div className="flex gap-[20px] items-center max-[400px]:flex-col">
                <img
                  src={jet}
                  width={100}
                  className="object-contain"
                  alt="image"
                ></img>
                <div>
                  <p className="text-left font-semibold text-[20px] max-[550px]:text-[18px] max-[400px]:text-[16px]">
                    XYZ Solution Pvt.
                  </p>
                  <p className="text-left max-[550px]:text-[15px] max-[400px]:text-[13px]">
                    Online service provider for car rental, ride-sharing and
                    same-city delivery
                  </p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <ul className="flex gap-[50px] mt-[14px]">
                  <li
                    className={`font-medium text-gray-700 hover:cursor-pointer max-w-[740px] text-[15px] 
                                    ${
                                      activateMenu === "Overview"
                                        ? "border-b-4 border-[#0A73BE] border-solid text-[#0A73BE]"
                                        : ""
                                    }`}
                    style={{
                      color:
                        activateMenu === "Overview" ? "#0A73BE" : "#817f7f",
                    }}
                    onClick={() => handleMenuClick("Overview")}
                  >
                    Overview
                    <span className="text-gray-700 max-[600px]:text-[12px]"></span>
                  </li>
                  <li
                    className={`font-medium text-gray-700 hover:cursor-pointer max-w-[740px] text-[15px] 
                                    ${
                                      activateMenu === "Job"
                                        ? "border-b-4 border-[#0A73BE] border-solid text-[#0A73BE]"
                                        : ""
                                    }`}
                    style={{
                      color: activateMenu === "Job" ? "#0A73BE" : "#817f7f",
                    }}
                    onClick={() => handleMenuClick("Job")}
                  >
                    Job
                    <span
                      className="text-gray-700 max-[600px]:text-[12px]"
                      style={{
                        color: activateMenu === "Job" ? "#0A73BE" : "#817f7f",
                      }}
                    >
                      {" "}
                      (4)
                    </span>
                  </li>
                </ul>
                <hr className="w-[80%]"></hr>
              </div>
            </div>

            {/* card 1 */}

            <section className="ml-[28px]">
              <section className="border border-gray-200 w-[75%] rounded-3xl mt-[10px] p-[20px] max-[950px]:w-[95%] max-[500px]:w-[98%]">
                <div className="flex gap-2  max-[400px]:flex-col items-center">
                  <img src={wipro} className="object-contain" alt="image"></img>
                  <div className="flex flex-col items-start">
                    <p className="text-black font-semibold text-lg max-md:text-[14px]">
                      MERN Stack Developer
                    </p>
                    <p className="text-[14px] max-md:text-[13px]">
                      XYZ Company
                    </p>
                  </div>
                </div>
                <div className="flex mt-[10px] gap-[50px] max-[730px]:gap-x-[17px] gap-y-[10px] flex-wrap ">
                  <div className="flex gap-2 items-center">
                    <i
                      className="fa fa-archive"
                      style={{ fontSize: "15px", color: "#6b6b6b" }}
                    ></i>
                    <p className="text-sm">Fresher</p>
                  </div>
                  <p className="text-sm">
                    {" "}
                    ₹ <span>2 - 6 LPA</span>
                  </p>
                  <div className="flex gap-2">
                    <i
                      className="fa fa-map-marker"
                      style={{ fontSize: "24px", color: "#6b6b6b" }}
                    ></i>
                    <p className="text-sm">Saram, Puducherry.</p>
                  </div>
                </div>
                <p className="text-justify mt-[15px] text-sm max-md:text-[13px]">
                  You are expected to continuously learn and keep up to date
                  with best practices and better technologies...
                </p>
                <div className="mt-[15px]">
                  <ul className="flex gap-10 text-sm list-disc ml-[27px] max-xl:flex-wrap gap-y-px  max-md:text-[13px]">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Nodejs</li>
                    <li>Java</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-[15px]">
                  <p className="text-sm text-gray-500 text-[13px] max-md:text-[13px]">
                    15 Hrs ago
                  </p>
                  <div className="flex gap-2">
                    <i
                      style={{ fontSize: "24px", color: "black" }}
                      className="fa"
                    >
                      &#xf097;
                    </i>
                    <p className="text-black font-semibold">Save</p>
                  </div>
                </div>
              </section>{" "}
              {/* card 2 */}
              <section className="border border-[#D5D5D5]-600 w-[75%] rounded-3xl mt-[20px] p-[20px] max-[950px]:w-[95%] max-[500px]:w-[98%]">
                <div className="flex gap-2 max-[400px]:flex-col items-center">
                  <img
                    src={swiggy}
                    className="object-contain"
                    alt="image"
                  ></img>
                  <div className="flex flex-col items-start">
                    <p className="text-black font-semibold text-lg max-md:text-[14px]">
                      MERN Stack Developer
                    </p>
                    <p className="text-[14px] max-md:text-[13px]">
                      XYZ Company
                    </p>
                  </div>
                </div>
                <div className="flex mt-[10px] gap-[50px] max-[730px]:gap-x-[17px] gap-y-[10px] flex-wrap">
                  <div className="flex gap-2 items-center">
                    <i
                      className="fa fa-archive"
                      style={{ fontSize: "15px", color: "#6b6b6b" }}
                    ></i>
                    <p className="text-sm">Fresher</p>
                  </div>
                  <p className="text-sm">
                    {" "}
                    ₹ <span>2 - 6 LPA</span>
                  </p>
                  <div className="flex gap-2">
                    <i
                      className="fa fa-map-marker"
                      style={{ fontSize: "24px", color: "#6b6b6b" }}
                    ></i>
                    <p className="text-sm">Saram, Puducherry.</p>
                  </div>
                </div>
                <p className="text-justify mt-[15px] text-sm max-md:text-[13px]">
                  You are expected to continuously learn and keep up to date
                  with best practices and better technologies...
                </p>
                <div className="mt-[15px]">
                  <ul className="flex gap-10 text-sm list-disc ml-[27px] max-xl:flex-wrap gap-y-px  max-md:text-[13px]">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Nodejs</li>
                    <li>Java</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-[15px]">
                  <p className="text-sm text-gray-500 text-[13px] max-md:text-[13px]">
                    15 Hrs ago
                  </p>
                  <div className="flex gap-2">
                    <i
                      style={{ fontSize: "24px", color: "black" }}
                      className="fa"
                    >
                      &#xf097;
                    </i>
                    <p className="text-black font-semibold">Save</p>
                  </div>
                </div>
              </section>{" "}
              {/* card 3 */}
              <section className="border border-[#D5D5D5]-600 w-[75%] rounded-3xl mt-[20px] p-[20px] max-[950px]:w-[95%] max-[500px]:w-[98%]">
                <div className="flex gap-2 max-[400px]:flex-col items-center">
                  <img
                    src={wipro}
                    className="object-contain "
                    alt="image"
                  ></img>
                  <div className="flex flex-col items-start ">
                    <p className="text-black font-semibold text-lg max-md:text-[14px]">
                      MERN Stack Developer
                    </p>
                    <p className="text-[14px] max-md:text-[13px]">
                      XYZ Company
                    </p>
                  </div>
                </div>
                <div className="flex mt-[10px] gap-[50px] max-[730px]:gap-x-[17px] gap-y-[10px] flex-wrap ">
                  <div className="flex gap-2 items-center">
                    <i
                      className="fa fa-archive"
                      style={{ fontSize: "15px", color: "#6b6b6b" }}
                    ></i>
                    <p className="text-sm">Fresher</p>
                  </div>
                  <p className="text-sm">
                    {" "}
                    ₹ <span>2 - 6 LPA</span>
                  </p>
                  <div className="flex gap-2">
                    <i
                      className="fa fa-map-marker"
                      style={{ fontSize: "24px", color: "#6b6b6b" }}
                    ></i>
                    <p className="text-sm">Saram, Puducherry.</p>
                  </div>
                </div>
                <p className="text-justify mt-[15px] text-sm max-md:text-[13px]">
                  You are expected to continuously learn and keep up to date
                  with best practices and better technologies...
                </p>
                <div className="mt-[15px]">
                  <ul className="flex gap-10 text-sm list-disc ml-[27px] max-xl:flex-wrap gap-y-px  max-md:text-[13px]">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Nodejs</li>
                    <li>Java</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-[15px]">
                  <p className="text-sm text-gray-500 text-[13px] max-md:text-[13px]">
                    15 Hrs ago
                  </p>
                  <div className="flex gap-2">
                    <i
                      style={{ fontSize: "24px", color: "black" }}
                      className="fa"
                    >
                      &#xf097;
                    </i>
                    <p className="text-black font-semibold">Save</p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}
