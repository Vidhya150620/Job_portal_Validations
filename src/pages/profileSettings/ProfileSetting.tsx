import { useState } from "react";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
export default function ProfileSetting() {
  const [activeButton, setActiveButton] = useState("HOME");
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <Navbar />
      <section>
        <div className="bg-secondary w-1/8  ">
          <div className="w-[95%]  flex gap-6 justify-center mx-auto p-[14px] pb-[50px] max-lg:w-[90%] max-sm:w-[99%]">
            {/* left */}
            <Sidebar />

            <div className="bg-white w-[67%]  rounded-md p-6 mt-[10px] max-xl:w-[81%] max-lg:w-[100%]">
              <div className="">
                <div className="flex justify-between">
                  <div className="w-[305%]">
                    <p className="text-left text-[#303030] font-semibold text-[18px]">
                      Account Settings
                    </p>
                    <p className="text-left text-[14px]">
                      Change your email, mobile number or password.
                    </p>
                  </div>
                  {/*  */}
                  <div className="drawer drawer-end ">
                    <input
                      id="my-drawer-4"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content">
                      <label
                        htmlFor="my-drawer-4"
                        className="drawer-button bg-[#0A73BE] text-white p-[10px] rounded-full text-center hidden max-lg:block w-[88px]"
                      >
                        Profile
                      </label>
                    </div>
                    <div className="drawer-side">
                      <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      ></label>
                      <ul className="menu p-4 w-80 min-h-full  text-base-content bg-white">
                        <article>
                          <article>
                            <div className="flex flex-col items-center gap-2">
                              <div className="h-[100px] w-[100px] rounded-full border relative">
                                <div className="h-[90px] w-[90px] rounded-full border flex absolute top-[4px] left-[4px]">
                                  {/* <img src={manImage} ></img> */}
                                </div>
                              </div>
                              <p className="text-black-700 font-semibold">
                                Mohamed Ijass
                              </p>
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
                                    color:
                                      activeButton === "HOME"
                                        ? "#0A73BE"
                                        : "#6B6B6B",
                                  }}
                                ></i>
                                <button
                                  type="button"
                                  style={{
                                    color:
                                      activeButton === "HOME"
                                        ? "#0A73BE"
                                        : "#6B6B6B",
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
                                    color:
                                      activeButton === "JOBS"
                                        ? "#0A73BE"
                                        : "#6B6B6B",
                                  }}
                                ></i>
                                <button
                                  type="button"
                                  style={{
                                    color:
                                      activeButton === "JOBS"
                                        ? "#0A73BE"
                                        : "#6B6B6B",
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
                                      activeButton === "COMPANIES"
                                        ? "#0A73BE"
                                        : "#6B6B6B",
                                  }}
                                ></i>
                                <button
                                  type="button"
                                  style={{
                                    color:
                                      activeButton === "COMPANIES"
                                        ? "#0A73BE"
                                        : "#6B6B6B",
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
                                      activeButton === "SETTINGS"
                                        ? "#0A73BE"
                                        : "#6B6B6B",
                                  }}
                                ></i>
                                <button
                                  type="button"
                                  style={{
                                    color:
                                      activeButton === "SETTINGS"
                                        ? "#0A73BE"
                                        : "#6B6B6B",
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

                  {/*  */}
                </div>
                <div className="mt-[27px]">
                  <div>
                    <p className="text-left font-medium text-[17px]">
                      Email Address
                    </p>
                    <p className="text-left text-[14px]">
                      We will send code please enter your code to verify
                    </p>
                  </div>
                  <div className="flex flex-col  max-[500px]:gap-[13px]">
                    <div className="flex gap-[30px] mt-[15px] max-[500px]:gap-[14px] flex-wrap ">
                      <input
                        type="text"
                        placeholder="Eg: xyz@gmail.com"
                        className="w-[400px] h-[50px] p-[10px] border border-[#c3c3c3]-500 rounded-lg max-[720px]:w-[300px] max-[560px]:w-[250px]"
                      ></input>
                      <div className="flex flex-col items-center max-[500px]:flex-row gap-[10px]">
                        <button
                          type="button"
                          className="border-2 border-sky-600 text-sky-600 p-[8px] rounded-2xl w-[125px]"
                        >
                          Send code
                        </button>
                        <p className="mt-[10px] max-[500px]:mt-[0px]">
                          Left: 60 sec
                        </p>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Eg: 6 digit code"
                      className="w-[400px] h-[50px] p-[10px] border border-[#c3c3c3]-500 rounded-lg max-[720px]:w-[300px] max-[560px]:w-[250px]"
                    ></input>
                    <div className="flex gap-[30px] ml-[50px] mt-[21px] max-[720px]:gap-[20px] max-[720px]:ml-[0px]">
                      <button
                        type="button"
                        className="border-2 border-sky-600 p-[8px] rounded-2xl w-[125px]"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="bg-[#0A73BE] text-white p-[8px] rounded-2xl w-[125px]"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {/* mobile number */}
                <hr className="max-w-[555px] mt-[27px]"></hr>
                <div className="mt-[27px]">
                  <div>
                    <p className="text-left font-medium text-[17px]">
                      Mobile Number
                    </p>
                    <p className="text-left text-[14px]">
                      We will send OTP please enter your code to verify
                    </p>
                  </div>
                  <div className="flex flex-col max-[500px]:gap-[13px]">
                    <div className="flex gap-[30px] mt-[15px] max-[500px]:gap-[14px] flex-wrap ">
                      <input
                        type="text"
                        placeholder="Eg: 9952727521"
                        className="w-[400px] h-[50px] p-[10px] border border-[#c3c3c3]-500 rounded-lg max-[720px]:w-[300px] max-[560px]:w-[250px]"
                      ></input>
                      <div className="flex flex-col items-center max-[500px]:flex-row gap-[10px] ">
                        <button
                          type="button"
                          className="border-2 border-sky-600 p-[8px] text-sky-600 rounded-2xl w-[125px]"
                        >
                          Send code
                        </button>
                        <p className="mt-[10px]  max-[500px]:mt-[0px]">
                          Left: 60 sec
                        </p>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Eg: 6 digit code"
                      className="w-[400px] h-[50px] p-[10px] border border-[#c3c3c3]-500 rounded-lg max-[720px]:w-[300px] max-[560px]:w-[250px] "
                    ></input>
                    <div className="flex gap-[30px] ml-[50px] mt-[21px] max-[720px]:gap-[20px] max-[720px]:ml-[0px]">
                      <button
                        type="button"
                        className="border-2 border-sky-600 p-[8px] rounded-2xl w-[125px]"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="bg-[#0A73BE] text-white p-[8px] rounded-2xl w-[125px]"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {/*  password */}
                <hr className="max-w-[555px] mt-[27px]"></hr>
                <div className="mt-[27px]">
                  <div>
                    <p className="text-left font-medium text-[17px]">
                      Password
                    </p>
                    <p className="text-left text-[14px]">
                      Your password should be at least 6 characters long and
                      contain alphanumeric characters (a-z and 0-9)
                    </p>
                  </div>
                  <div className="flex flex-col gap-[18px]">
                    <input
                      type="text"
                      placeholder="Enter old password"
                      className="w-[400px] h-[50px] p-[10px] border border-[#c3c3c3]-500 rounded-lg mt-[14px] max-[720px]:w-[300px] max-[560px]:w-[236px]"
                    ></input>
                    <input
                      type="text"
                      placeholder="Enter new password"
                      className="w-[400px] h-[50px] p-[10px] border border-[#c3c3c3]-500 rounded-lg max-[720px]:w-[300px] max-[560px]:w-[236px]"
                    ></input>
                    <input
                      type="text"
                      placeholder="Enter confirm password"
                      className="w-[400px] h-[50px] p-[10px] border border-[#c3c3c3]-500 rounded-lg max-[720px]:w-[300px] max-[560px]:w-[236px]"
                    ></input>
                    <div className="flex gap-[30px] ml-[50px] mt-[21px] max-[720px]:gap-[20px] max-[720px]:ml-[0px]">
                      <button
                        type="button"
                        className="border-2 border-sky-600 p-[8px] rounded-2xl w-[125px]"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="bg-[#0A73BE] text-white p-[8px] rounded-2xl w-[125px]"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
