import { useState } from "react";
import Navbar from "../../components/Navbar.tsx";
import wipro from "../../assets/images/wipro.png";
export default function ProfilePerformance() {
  const [activateMenu, setActivateMenu] = useState("Profile View");
  const handleMenuClick = (menuName: string) => {
    setActivateMenu(menuName);
  };
  return (
    <div>
      <Navbar />
      <section className="bg-secondary w-1/8">
        <article className="pb-[35px] w-[60%] max-w-screen-xl mx-auto pt-[35px] max-[1300px]:w-[78%] max-[900px]:w-[82%] max-[700px]:w-[90%] max-[430px]:pt-[25px]">
          <div>
            <div className="bg-white  p-[30px]">
              <div className="flex items-center justify-between   max-[600px]:flex-wrap">
                <div className="w-[430px]">
                  <p className="text-left font-semibold text-[20px]">
                    Profile performance
                  </p>
                  <p className="text-left text-[14px] mt-[7px]">
                    Summary of how your profile performed in skills based
                    searches by the recruiter
                  </p>
                </div>
                <div className="flex items-center justify-between max-[600px]:gap-[16px]">
                  <p className="text-[14px]">Summary of last </p>
                  <select className="select select-ghost max-w-xs w-[125px] text-primary font-medium">
                    <option disabled selected className="text-primary">
                      Pick days
                    </option>
                    <option>15 Days</option>
                    <option>1 Month</option>
                    <option>2 Months</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-[17px] mt-[25px] max-[480px]:flex-wrap">
                <div className="w-[170px] h-[100px] bg-bg_color_action flex justify-center gap-[16px] align-center p-[16px] items-center rounded-xl relative  max-[480px]:w-[250px]">
                  <div className="border-2 border-gray-300 absolute top-[4px] right-[6px] rounded-md">
                    <i
                      className="fa fa-info text-gray-300 pt-[5px] pb-[3px] pl-[7px] pr-[7px]"
                      style={{ fontSize: "12px", color: "text-gray-400" }}
                    ></i>
                  </div>

                  <p className="text-[30px] font-semibold">18</p>
                  <p className="font-semibold text-[14px]">
                    Search Appearances
                  </p>
                </div>
                <div className="w-[170px] h-[100px] bg-bg_color_action flex justify-center gap-[16px] align-center p-[16px] items-center rounded-xl relative max-[480px]:w-[250px]">
                  <div className="border-2 border-gray-300 absolute top-[4px] right-[6px] rounded-md">
                    <i
                      className="fa fa-info text-gray-300 pt-[5px] pb-[3px] pl-[7px] pr-[7px]"
                      style={{ fontSize: "12px", color: "text-gray-400" }}
                    ></i>
                  </div>
                  <p className="text-[30px] font-semibold">7</p>
                  <p className="font-semibold text-[14px]">Recruiter Action</p>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="bg-white  p-[30px]">
              <p className="text-left text-[#303030] font-semibold text-[20px]">
                Recruiter actions on your profile
              </p>
              <p className="text-left  text-[14px] mt-[7px]">
                Summary of how your profile performed in searches by the
                recruiter
              </p>
              <div className="overflow-x-auto">
                <ul className="flex gap-[50px] mt-[14px]">
                  <li
                    className={`font-medium	text-primaryTex hover:cursor-pointer max-[740px]:text-[15px]  ${
                      activateMenu === "Profile View"
                        ? "border-b-4 border-primary border-solid text-primary"
                        : ""
                    }`}
                    style={{
                      color:
                        activateMenu === "Profile View" ? "#0A73BE" : "#6B6B6B",
                    }}
                    onClick={() => handleMenuClick("Profile View")}
                  >
                    Profile View (5)
                  </li>
                  <li
                    className={`font-medium	text-primaryTex hover:cursor-pointer max-[740px]:text-[15px]  ${
                      activateMenu === "Resume Download"
                        ? "border-b-4 border-primary border-solid text-primary"
                        : ""
                    }`}
                    style={{
                      color:
                        activateMenu === "Resume Download"
                          ? "#0A73BE"
                          : "#6B6B6B",
                    }}
                    onClick={() => handleMenuClick("Resume Download")}
                  >
                    Resume Download (2)
                  </li>
                </ul>
                <hr className="w-[80%] mt-[10px]"></hr>
              </div>

              <article className="flex flex-wrap gap-[25px] mt-[17px]">
                {/* card 1 */}
                <div className="w-[295px] border p-[14px] mt-[11px] rounded-3xl shadow-md max-[1100px]:w-[280px] max-[740px]:w-[323px]">
                  <div className="flex items-center justify-between">
                    <img
                      src={wipro}
                      width={50}
                      height={50}
                      className="object-contain"
                      alt="image"
                    ></img>
                    <p className="bg-[#abd9fa] rounded-sm text-primary-btn-txt p-[7px] font-semibold text-[13px] ">
                      2 Jobs
                    </p>
                  </div>
                  <p className="text-left font-semibold mt-[11px] text-[15px]">
                    XYZ Company
                  </p>
                  <p className="text-left text-[12px] font-normal">
                    XYZ Corporation is an independent automotive component maker
                    founded in 1941.{" "}
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="border-2 border-sky-600 p-[7px] w-[90%] rounded-xl mt-[12px] font-medium text-primary"
                    >
                      View jobs
                    </button>
                  </div>
                  <hr className="w-[93%] mt-[16px] mx-auto"></hr>
                  <div className="flex mt-[16px] max-[400px]:flex-col gap-[10px] items-center">
                    <p className="text-left text-[11px] max-[400px]:text-[13px]">
                      Did you get a call from this recruiter?
                    </p>
                    <div className="flex gap-[7px]">
                      <button
                        type="button"
                        className="border-2 border-sky-600 p-[8px] rounded-2xl pl-[15px] pr-[15px] text-primary"
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className="bg-primary text-white p-[8px] rounded-2xl pl-[15px] pr-[15px]"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
                {/* card 1 */}
                <div className="w-[295px] border p-[14px] mt-[11px] rounded-3xl shadow-md max-[1100px]:w-[280px] max-[740px]:w-[323px]">
                  <div className="flex items-center justify-between">
                    <img
                      src={wipro}
                      width={50}
                      height={50}
                      className="object-contain"
                      alt="image"
                    ></img>
                    <p className="bg-[#abd9fa] rounded-sm text-primary-btn-txt p-[7px] font-semibold text-[13px] ">
                      2 Jobs
                    </p>
                  </div>
                  <p className="text-left font-semibold mt-[11px] text-[15px]">
                    XYZ Company
                  </p>
                  <p className="text-left text-[12px] font-normal">
                    XYZ Corporation is an independent automotive component maker
                    founded in 1941.{" "}
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="border-2 border-sky-600 p-[7px] w-[90%] rounded-xl mt-[12px] font-medium text-primary"
                    >
                      View jobs
                    </button>
                  </div>
                  <hr className="w-[93%] mt-[16px]  mx-auto"></hr>
                  <div className="flex mt-[16px] max-[400px]:flex-col gap-[10px] items-center">
                    <p className="text-left text-[11px] max-[400px]:text-[13px]">
                      Did you get a call from this recruiter?
                    </p>
                    <div className="flex gap-[7px]">
                      <button
                        type="button"
                        className="border-2 border-sky-600 p-[8px] rounded-2xl pl-[15px] pr-[15px] text-primary"
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className="bg-primary text-white p-[8px] rounded-2xl pl-[15px] pr-[15px]"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
