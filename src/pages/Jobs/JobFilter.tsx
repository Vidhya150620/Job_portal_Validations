import downArrow from "../../assets/images/down-arrow-5-svgrepo-com 1.png";

export default function JobFilter() {
  return (
    <main className="bg-white w-[25%] rounded-lg p-4 max-xl:w-[25%] max-lg:hidden">
      <p className="border-b-2 border-gray-300 text-left text-black-400 font-medium text-lg">
        All Filters
      </p>
      <article>
        <div>
          {/* salary */}
          <div>
            <div className="flex mt-[12px] justify-between">
              <p className="font-medium">Salary</p>
              <button type="button">
                <img src={downArrow} alt="image"></img>
              </button>
            </div>
            <div className="flex flex-col mt-[12px] gap-2">
              <label htmlFor="checkbox1" className="">
                <input type="checkbox" id="checkbox1" />
                <span className="px-[12px]">
                  0 - 3 LPA <span className="text-jobCount">(20)</span>
                </span>
              </label>
              <label htmlFor="checkbox2" className="">
                <input type="checkbox" id="checkbox2" />
                <span className="px-[12px]">
                  0 - 3 LPA <span className="text-jobCount">(20)</span>
                </span>
              </label>
              <label htmlFor="checkbox3" className="">
                <input type="checkbox" id="checkbox3" />
                <span className="px-[12px]">
                  0 - 3 LPA <span className="text-jobCount">(20)</span>
                </span>
              </label>
              <p className=" text-primary font-medium text-sm">View more</p>
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
                  Any Postgraduate <span className="text-jobCount">(20)</span>
                </span>
              </label>
              <label htmlFor="checkbox2" className="">
                <input type="checkbox" id="checkbox2" />
                <span className="px-[12px]">
                  B.Tech/B.E <span className="text-jobCount">(20)</span>
                </span>
              </label>
              <label htmlFor="checkbox3" className="">
                <input type="checkbox" id="checkbox3" />
                <span className="px-[12px]">
                  Diploma <span className="text-jobCount">(20)</span>
                </span>
              </label>
              <p className=" text-primary font-medium text-sm">View more</p>
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
                  Remote <span className="text-jobCount">(20)</span>
                </span>
              </label>
              <label htmlFor="checkbox2" className="">
                <input type="checkbox" id="checkbox2" />
                <span className="px-[12px]">
                  Full Time <span className="text-jobCount">(20)</span>
                </span>
              </label>
              <label htmlFor="checkbox3" className="">
                <input type="checkbox" id="checkbox3" />
                <span className="px-[12px]">
                  Hybrid <span className="text-jobCount">(20)</span>
                </span>
              </label>
              <p className=" text-primary font-medium text-sm">View more</p>
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
                  Puducherry <span className="text-jobCount">(20)</span> (40)
                </span>
              </label>
              <label htmlFor="checkbox2" className="">
                <input type="checkbox" id="checkbox2" />
                <span className="px-[12px]">
                  Chennai <span className="text-jobCount">(20)</span> (2)
                </span>
              </label>
              <label htmlFor="checkbox3" className="">
                <input type="checkbox" id="checkbox3" />
                <span className="px-[12px]">
                  Bangalore <span className="text-jobCount">(20)</span> (1)
                </span>
              </label>
              <p className=" text-primary font-medium text-sm">View more</p>
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
    </main>
  );
}
