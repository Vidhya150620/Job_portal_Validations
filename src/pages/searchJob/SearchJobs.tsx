import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import swiggy from "../../assets/images/swiggy.png";
import workIcon from "../../assets/images/fresher.png";
import wipro from "../../assets/images/wipro.png";
import downArrow from "../../assets/images/down-arrow-5-svgrepo-com 1.png";
import JobFilter from "../Jobs/JobFilter";
export default function SearchJob() {
  return (
    <div>
      <section>
        <Navbar />

        {/* body */}
        <div className="bg-secondary w-1/8">
          <div className="w-[90%] max-w-screen-xl flex gap-[30px] justify-center mx-auto p-[14px] pb-[50px] max-lg:w-[90%] max-sm:w-[99%]">
            {/* left */}
            <JobFilter />

            <div className="bg-white w-[67%]  rounded-md p-6 mt-[10px] max-xl:w-[90%] max-lg:w-[100%]">
              <div className="">
                <p className="text-start text- font-medium text-lg max-lg:hidden">
                  Search Jobs
                </p>
                <div className="drawer drawer-end">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content flex justify-between">
                    <p className="text-start font-medium text-lg min-lg: hidden max-lg:block">
                      Search Jobs
                    </p>

                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button bg-primary text-white p-[10px] rounded-full text-center  hidden max-lg:block w-[88px]"
                    >
                      Filter
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content bg-white">
                      <article>
                        <div>
                          {/* salary */}
                          <div>
                            <div className="flex mt-[12px] justify-between">
                              <p className="font-medium">Salary</p>
                              <button type="button">
                                <img src={downArrow}></img>
                              </button>
                            </div>
                            <div className="flex flex-col mt-[12px] gap-2">
                              <label htmlFor="checkbox1" className="">
                                <input type="checkbox" id="checkbox1" />
                                <span className="px-[12px]">
                                  0 - 3 LPA{" "}
                                  <span className="text-jobCount">(20)</span>
                                </span>
                              </label>
                              <label htmlFor="checkbox2" className="">
                                <input type="checkbox" id="checkbox2" />
                                <span className="px-[12px]">
                                  0 - 3 LPA{" "}
                                  <span className="text-jobCount">(20)</span>
                                </span>
                              </label>
                              <label htmlFor="checkbox3" className="">
                                <input type="checkbox" id="checkbox3" />
                                <span className="px-[12px]">
                                  0 - 3 LPA{" "}
                                  <span className="text-jobCount">(20)</span>
                                </span>
                              </label>
                              <p className=" text-primary font-medium text-sm">
                                View more
                              </p>
                              <hr></hr>
                            </div>
                          </div>
                          {/* Education  */}
                          <div>
                            <div className="flex mt-[12px] justify-between">
                              <p className="font-medium">Education</p>
                              <button type="button">
                                <img src={downArrow}></img>
                              </button>
                            </div>
                            <div className="flex flex-col mt-[12px] gap-2">
                              <label htmlFor="checkbox1" className="">
                                <input type="checkbox" id="checkbox1" />
                                <span className="px-[12px]">
                                  Any Postgraduate{" "}
                                  <span className="text-jobCount">(20)</span>
                                </span>
                              </label>
                              <label htmlFor="checkbox2" className="">
                                <input type="checkbox" id="checkbox2" />
                                <span className="px-[12px]">
                                  B.Tech/B.E{" "}
                                  <span className="text-jobCount">(20)</span>
                                </span>
                              </label>
                              <label htmlFor="checkbox3" className="">
                                <input type="checkbox" id="checkbox3" />
                                <span className="px-[12px]">
                                  Diploma{" "}
                                  <span className="text-jobCount">(20)</span>
                                </span>
                              </label>
                              <p className=" text-primary font-medium text-sm">
                                View more
                              </p>
                              <hr></hr>
                            </div>
                          </div>
                          {/* Experience */}

                          <div>
                            <div className="flex mt-[12px] justify-between">
                              <p className="font-medium">Education</p>
                              <button type="button">
                                <img src={downArrow}></img>
                              </button>
                            </div>
                            <div className="flex flex-col mt-[12px] gap-2">
                              <input
                                type="range"
                                min={0}
                                max="100"
                                value="25"
                                className="range h-[15px]"
                                step="25"
                              />
                              <div className="w-full flex justify-between text-xs px-2">
                                <span>0</span>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                              </div>
                              <hr></hr>
                            </div>
                          </div>

                          {/* Work mode */}
                          <div>
                            <div className="flex mt-[12px] justify-between">
                              <p className="font-medium">Work mode</p>
                              <button type="button">
                                <img src={downArrow}></img>
                              </button>
                            </div>
                            <div className="flex flex-col mt-[12px] gap-2">
                              <label htmlFor="checkbox1" className="">
                                <input type="checkbox" id="checkbox1" />
                                <span className="px-[12px]">
                                  Remote{" "}
                                  <span className="text-jobCount">(20)</span>
                                </span>
                              </label>
                              <label htmlFor="checkbox2" className="">
                                <input type="checkbox" id="checkbox2" />
                                <span className="px-[12px]">
                                  Full Time{" "}
                                  <span className="text-jobCount">(20)</span>
                                </span>
                              </label>
                              <label htmlFor="checkbox3" className="">
                                <input type="checkbox" id="checkbox3" />
                                <span className="px-[12px]">
                                  Hybrid{" "}
                                  <span className="text-jobCount">(20)</span>
                                </span>
                              </label>
                              <p className=" text-primary font-medium text-sm">
                                View more
                              </p>
                              <hr></hr>
                            </div>
                          </div>
                          {/* location */}
                          <div>
                            <div className="flex mt-[12px] justify-between">
                              <p className="font-medium">Location</p>
                              <button type="button">
                                <img src={downArrow}></img>
                              </button>
                            </div>
                            <div className="flex flex-col mt-[12px] gap-2">
                              <label htmlFor="checkbox1" className="">
                                <input type="checkbox" id="checkbox1" />
                                <span className="px-[12px]">
                                  Puducherry{" "}
                                  <span className="text-jobCount">(20)</span>{" "}
                                  (40)
                                </span>
                              </label>
                              <label htmlFor="checkbox2" className="">
                                <input type="checkbox" id="checkbox2" />
                                <span className="px-[12px]">
                                  Chennai{" "}
                                  <span className="text-jobCount">(20)</span>{" "}
                                  (2)
                                </span>
                              </label>
                              <label htmlFor="checkbox3" className="">
                                <input type="checkbox" id="checkbox3" />
                                <span className="px-[12px]">
                                  Bangalore{" "}
                                  <span className="text-jobCount">(20)</span>{" "}
                                  (1)
                                </span>
                              </label>
                              <p className=" text-primary font-medium text-sm">
                                View more
                              </p>
                              <hr></hr>
                            </div>
                          </div>
                          {/* posted date */}
                          <div>
                            <div className="flex mt-[12px] justify-between items-center">
                              <p className="font-medium">Posted Date</p>
                              <select className="select select-ghost w-[143px] max-w-xs">
                                <option disabled selected>
                                  Select Date
                                </option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                              </select>
                              {/* <button type="button"><img src={downArrow}></img></button> */}
                            </div>
                          </div>
                        </div>
                      </article>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-[15px] max-[500px]: flex-wrap">
                <input
                  type="text"
                  placeholder="Search jobs...."
                  className="w-[470px] h-[50px] p-[10px] border border-[#c3c3c3]-500 rounded-full"
                ></input>
                <button
                  type="button"
                  className="w-[150px] h-[50px] bg-primary text-white rounded-full"
                >
                  Search
                </button>
              </div>
              {/* result */}
              <div>
                <p className="text-black-400 mt-[18px] text-start">
                  Results: <span>1 - 20 of 189 posts</span>
                </p>
                <article>
                  <section className="border border-[#D5D5D5]-600 w-[95%] rounded-3xl mt-[20px] p-[20px] max-[400px]:w-[99%]">
                    <div className="flex gap-2">
                      <img src={swiggy} className="object-contain"></img>
                      <div className="flex flex-col items-start">
                        <p className="text-black font-semibold text-lg max-md:text-[14px]">
                          MERN Stack Developer
                        </p>
                        <p className="text-black text-[12px] max-md:text-[11px]">
                          XYZ Company
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between mt-[15px] gap-2 max-[500px]:flex-wrap gap-2">
                      <div className="flex gap-2">
                        <img src={workIcon}></img>
                        <p className="text-sm">Fresher</p>
                      </div>
                      <p className="text-sm">
                        {" "}
                        ₹ <span>2 - 6 LPA</span>
                      </p>
                      <div className="flex gap-2">
                        <i
                          className="fa fa-map-marker"
                          style={{ fontSize: "24px" }}
                        ></i>
                        <p className="text-sm">Saram, Puducherry.</p>
                      </div>
                    </div>
                    <p className=" mt-[15px] text-sm max-md:text-[13px]">
                      You are expected to continuously learn and keep up to date
                      with best practices and better technologies...
                    </p>
                    <div className="mt-[15px]">
                      <ul className="flex gap-10 text-sm list-disc ml-[16px] max-xl:flex-wrap gap-y-px  max-md:text-[13px]">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Nodejs</li>
                        <li>Java</li>
                        <li>Python</li>
                      </ul>
                    </div>
                    <div className="flex justify-between mt-[15px]">
                      <p className="text-sm max-md:text-[13px]">15 Hrs ago</p>
                      <div className="flex gap-2">
                        <i style={{ fontSize: "24px" }} className="fa">
                          &#xf097;
                        </i>
                        <p className="text-black text-sm">Save</p>
                      </div>
                    </div>
                  </section>

                  {/* card 2 */}
                  <section className="border border-[#D5D5D5]-600 w-[95%] rounded-3xl mt-[20px] p-[20px] max-sm:w-[97%]  max-[400px]:w-[99%]">
                    <div className="flex gap-2">
                      <img src={wipro} className="object-contain"></img>
                      <div className="flex flex-col items-start">
                        <p className="text-black font-semibold text-lg max-md:text-[14px]">
                          Python Developer
                        </p>
                        <p className="text-black text-[12px] max-md:text-[11px] ">
                          XYZ Company
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between mt-[15px] gap-2  max-[500px]:flex-wrap gap-2">
                      <div className="flex gap-2">
                        <img src={workIcon}></img>
                        <p className="text-sm">Fresher</p>
                      </div>
                      <p className="text-sm">
                        {" "}
                        ₹ <span>2 - 6 LPA</span>
                      </p>
                      <div className="flex gap-2">
                        <i
                          className="fa fa-map-marker"
                          style={{ fontSize: "24px" }}
                        ></i>
                        <p className="text-sm">Saram, Puducherry.</p>
                      </div>
                    </div>
                    <p className=" mt-[15px] text-sm  max-md:text-[13px]">
                      You are expected to continuously learn and keep up to date
                      with best practices and better technologies...
                    </p>
                    <div className="mt-[15px]">
                      <ul className="flex gap-10 text-sm list-disc ml-[16px] max-xl:flex-wrap gap-y-px  max-md:text-[13px]">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Nodejs</li>
                        <li>Java</li>
                        <li>Python</li>
                      </ul>
                    </div>
                    <div className="flex justify-between mt-[15px]">
                      <p className="text-sm max-md:text-[13px]">15 Hrs ago</p>
                      <div className="flex gap-2">
                        <i style={{ fontSize: "24px" }} className="fa">
                          &#xf097;
                        </i>
                        <p className="text-black text-sm">Save</p>
                      </div>
                    </div>
                  </section>
                  {/* card 3 */}
                  <section className="border border-[#D5D5D5]-600 w-[95%] rounded-3xl mt-[20px] p-[20px]  max-[400px]:w-[99%]">
                    <div className="flex gap-2">
                      <img src={swiggy} className="object-contain"></img>
                      <div className="flex flex-col items-start">
                        <p className="text-black font-semibold text-lg max-md:text-[14px]">
                          Java Developer
                        </p>
                        <p className="text-black text-[12px] max-md:text-[11px]">
                          XYZ Company
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between mt-[15px] gap-2 max-[500px]:flex-wrap gap-2">
                      <div className="flex gap-2">
                        <img src={workIcon}></img>
                        <p className="text-sm">Fresher</p>
                      </div>
                      <p className="text-sm">
                        {" "}
                        ₹ <span>2 - 6 LPA</span>
                      </p>
                      <div className="flex gap-2">
                        <i
                          className="fa fa-map-marker"
                          style={{ fontSize: "24px" }}
                        ></i>
                        <p className="text-sm">Saram, Puducherry.</p>
                      </div>
                    </div>
                    <p className=" mt-[15px] text-sm  max-md:text-[13px]">
                      You are expected to continuously learn and keep up to date
                      with best practices and better technologies...
                    </p>
                    <div className="mt-[15px]">
                      <ul className="flex gap-10 text-sm list-disc ml-[16px] max-xl:flex-wrap gap-y-px  max-md:text-[13px]">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Nodejs</li>
                        <li>Java</li>
                        <li>Python</li>
                      </ul>
                    </div>
                    <div className="flex justify-between mt-[15px]">
                      <p className="text-sm max-md:text-[13px]">15 Hrs ago</p>
                      <div className="flex gap-2">
                        <i style={{ fontSize: "24px" }} className="fa">
                          &#xf097;
                        </i>
                        <p className="text-black text-sm">Save</p>
                      </div>
                    </div>
                  </section>
                </article>
                {/* pagination */}
                <div className="join mt-[18px] flex justify-center">
                  <button className="join-item btn">«</button>
                  <button className="join-item btn">Page 1</button>
                  <button className="join-item btn">»</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}
