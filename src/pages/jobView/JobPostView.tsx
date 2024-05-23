import { useParams } from "react-router-dom";
import adobe from "../../assets/images/Adobe.png";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchJobPostAPI } from "../../features/jobPostSlice";

export default function JobPostView() {
  const dispatch = useDispatch<AppDispatch>();

  const { jobId } = useParams();
  const { jobPost } = useSelector((state: RootState) => state);
  const jobData = jobPost?.data;
  console.log(jobData);
  console.log(jobId);

  useEffect(() => {
    dispatch(fetchJobPostAPI(`${jobId}`));
  }, []);

  useEffect(() => {
    if (jobId) {
      dispatch(fetchJobPostAPI(jobId));
    }
  }, [dispatch, jobId]);

  return (
    <>
      <Navbar />
      <Wrapper>
        <article className="pb-[35px] w-[60%] max-w-screen-xl mx-auto pt-[35px] max-[1300px]:w-[75%] max-[900px]:w-[82%] max-[700px]:w-[90%] max-[430px]:pt-[25px]">
          <div className="bg-white p-[30px]">
            <div>
              <div className="flex gap-[30px] max-[430px]:items-center max-[430px]:flex-col">
                <img
                  src={adobe}
                  width={70}
                  height={70}
                  className="object-contain"
                  alt="img-picture"
                ></img>
                <div>
                  <p className="text-left font-semibold text-[17px]">
                    {jobData?.jobRole}
                  </p>
                  <p className="text-left text-[13px]">
                    {jobData?.organizationName}
                  </p>

                  <div className="flex mt-[6px] gap-[25px] max-[730px]:flex-wrap gap-[17px] max-[550px]:gap-[13px]">
                    <div className="flex gap-2">
                      <i
                        className="fa fa-archive"
                        style={{ fontSize: "15px" }}
                      ></i>
                      {/* <img src={workIcon} alt="img-picture"></img> */}
                      <p className="text-[12px]">
                        {jobData?.jobExperinceLevel}
                      </p>
                    </div>
                    <p className="text-[12px]">
                      ₹ <span>{jobData?.jobSalary}</span>
                    </p>
                    <div className="flex gap-2">
                      <i
                        className="fa fa-map-marker"
                        style={{ fontSize: "21px", color: "#6b6b6b" }}
                      ></i>
                      <p className="text-[12px]">{jobData?.jobLocation}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-[20px] text-gray-300 h-[3px]"></hr>
              <div className="flex mt-[15px] justify-between items-center  max-[700px]:flex-wrap  gap-y-[14px]">
                <div className="flex gap-[32px] max-[470px]:gap-[15px] flex-wrap ">
                  <p className="text-[13px] font-medium">Posted: 4 days ago</p>
                  <p className="text-[13px] font-medium">
                    Openings: {jobData?.jobAvailablePositions}
                  </p>
                  <p className="text-[13px] font-medium">
                    Applicants: {jobData?.jobApplicantsUpto}
                  </p>
                </div>

                <div className="flex gap-[10px]">
                  <button
                    type="button"
                    className="border-2 border-sky-600 p-[8px] rounded-2xl w-[78px]"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-primary text-white p-[8px] rounded-2xl w-[78px]"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="bg-white  p-[30px] mt-[23px]">
            <p className="text-left font-semibold text-[17px]">
              Job match score
            </p>
            <div className="flex gap-[40px] mt-[11px] max-[650px]:gap-[20px] flex-wrap ">
              <p className="flex gap-[4px]">
                <span>
                  <i
                    className="fa fa-close"
                    style={{ fontSize: "24px", color: "red" }}
                  ></i>
                </span>
                Early Applicant
              </p>
              <p className="flex gap-[4px]">
                <span>
                  <i
                    className="fa fa-check"
                    style={{ fontSize: "24px", color: "green" }}
                  ></i>
                </span>
                Skills
              </p>
              <p className="flex gap-[4px]">
                <span>
                  <i
                    className="fa fa-check"
                    style={{ fontSize: "24px", color: "green" }}
                  ></i>
                </span>
                Location
              </p>
              <p className="flex gap-[4px]">
                <span>
                  <i
                    className="fa fa-check"
                    style={{ fontSize: "24px", color: "green" }}
                  ></i>
                </span>
                Fresher
              </p>
            </div>
          </div>

          {/* 3 rd */}

          <div className="bg-white  p-[30px] mt-[23px]">
            <p className="text-left font-semibold text-[17px]">
              Job description
            </p>
            <p className="text-left mt-[10px] text-[14px]">
              {jobData?.jobDescription}
              <span className="text-primary">read more</span>
            </p>
          </div>

          {/* 4 th */}
          <div className="bg-white  p-[30px] mt-[23px]">
            <p className="text-left font-semibold text-[17px]">
              Responsibilities:
            </p>
            <div className="mt-[10px] ml-[26px]">
              <ul className="list-disc">
                {jobData?.jobResponsibility?.map((lines: string, i: number) => {
                  return (
                    <li className="text-left text-[14px]" key={i}>
                      {lines}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* 5 th */}
          <div className="bg-white  p-[30px] mt-[23px]">
            <p className="text-left font-semibold text-[17px]">Requirements:</p>
            <div className="mt-[10px] ml-[26px]">
              <ul className="list-disc">
                {jobData?.jobRequirement?.map((lines: string, i: number) => {
                  return (
                    <li className="text-left text-[14px]" key={i}>
                      {lines}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* 5 th */}
          <div className="bg-white  p-[30px] mt-[23px]">
            <p className="text-left font-semibold text-[17px]">Education:</p>
            <div className="mt-[10px] ml-[15px]">
              <p className="text-left text-[14px]">
                {jobData?.jobEducations?.map((course: string, i: number) => {
                  return (
                    <p key={i}>
                      {/* course : {course?.course} / courseType :
                      {course?.courseType} */}
                      {`${course?.course} /  ${course?.courseType} / ${course?.qualification} / ${course?.specialization}`}
                    </p>
                  );
                })}
              </p>
              {/* <p className="text-left text-[14px]">
                PG: MS/M.Sc(Science) in Any Specialization, MCA in Computers
              </p> */}
            </div>
          </div>

          {/* 6 th */}
          <div className="bg-white  p-[30px] mt-[23px]">
            <p className="text-left font-semibold text-[17px]">Skills:</p>
            <div className="mt-[10px] flex gap-[10px] flex-wrap">
              {jobData?.jobWantedSkills?.map((skill: string, i: number) => {
                return (
                  <button
                    type="button"
                    className="border  p-[12px] rounded-3xl text-[14px]"
                    key={i}
                  >
                    {skill?.skillName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 7 th */}

          <div className="bg-white  p-[30px] mt-[23px]">
            <p className="text-left font-semibold text-[17px]">About Company</p>
            <p className="text-left mt-[10px]  text-[14px]">
              XYZ Company is an IT (Information Technology) company known for
              its expertise in developing innovative software solutions and
              providing IT services. With a focus on cutting-edge technologies,
              XYZ Company aims to address the evolving needs of businesses by
              delivering high-quality software products, consulting services,
              and IT support. Known for its commitment to technological
              excellence, the company strives to stay at the forefront of the
              ever-changing IT landscape, offering tailored solutions to clients
              across various industries. Driven by a customer-centric approach,
              XYZ Company is dedicated to fostering digital transformation and
              enhancing operational efficiency through its state-...
              <span className="text-primary">read more</span>
            </p>
          </div>
        </article>
      </Wrapper>
      <Footer />
    </>
  );
}
