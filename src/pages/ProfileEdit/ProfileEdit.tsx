import Navbar from "../../components/Navbar";
import girlImage from "../../assets/images/picture-profile-girl.png";
import { RecuiterFooter } from "../../components/RecuiterFooter";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { colourOptions, languages } from "./skills";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState } from "react";
import { personalDetailsSchema } from "../Validations/validation";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const animatedComponents = makeAnimated();
import { ProfileSummaryschema } from "../Validations/validation";
import { ProjectDetailsSchema } from "../Validations/validation";
import { workStatusSchema } from "../Validations/validation";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";

interface ProfileSummaryFormValues {
  profileSummary: string;
}
interface ProjectDetailsFormValues {
  projectName: string;
  projectDescription: string;
  projectStatus: string;
  startYear: string;
  startMonth: string;
  endYear?: string;
  endMonth?: string;
}
interface PersonalDetailsFormValues {
  city: string;
  area: string;
  street: string;
  pincode: string;
  language: string[];
  maritalStatus: string;
  gender: string;
  dob: string;
}
interface workStatusFormValues {
  linkedInUrl: string;
  workStatus: string;
  noticePeriod: string;
  currentSalary: number;
  salaryExpectation: number;
  experience?: number;
}
export default function CandidateEdit() {
  // validations

  // Profile summary form
  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: errorsProfile },
  } = useForm<ProfileSummaryFormValues>({
    resolver: yupResolver(ProfileSummaryschema),
  });

  const onSubmitProfile: SubmitHandler<ProfileSummaryFormValues> = (data) => {
    console.log("Profile Summary:", data.profileSummary);
  };

  // project details form

  const {
    register: registerProject,
    handleSubmit: handleSubmitProject,
    formState: { errors: errorsProject },
  } = useForm<ProjectDetailsFormValues>({
    resolver: yupResolver(ProjectDetailsSchema),
  });

  const onSubmitProject: SubmitHandler<ProjectDetailsFormValues> = (data) => {
    console.log("working");
    console.log("project values", data);
  };

  // personal details

  const {
    register: registerPersonal,
    handleSubmit: handleSubmitPersonal,
    formState: { errors: errorsPersonal },
    control,
  } = useForm<PersonalDetailsFormValues>({
    resolver: yupResolver(personalDetailsSchema),
  });

  const onSubmitPersonal: SubmitHandler<PersonalDetailsFormValues> = (data) => {
    console.log(data);
  };

  // work Status

  const {
    register: registerWorkStatus,
    handleSubmit: handleSubmitWorkStatus,
    formState: { errors: errorsWorkStatus },
    watch,
  } = useForm<workStatusFormValues>({
    resolver: yupResolver(workStatusSchema),
  });

  const onSubmitWorkStatus: SubmitHandler<workStatusFormValues> = (data) => {
    console.log(data);
  };

  const workStatus = watch("workStatus");

  const [education, setEducation] = useState("graduation");
  const [projectStatus, setProjectStatus] = useState("finished");
  const [workExperience, setWorkExperience] = useState("fresher");
  const openProjectModal = () => {
    const projectModal = document.getElementById("projectsData");
    if (projectModal) {
      projectModal.showModal();
    }
  };
  const openSummaryModal = () => {
    const summaryModal = document.getElementById("summary");
    if (summaryModal) {
      summaryModal.showModal();
    }
  };
  const openSkillsModal = () => {
    const skillsModal = document.getElementById("skills");
    if (skillsModal) {
      skillsModal.showModal();
    }
  };
  const openWorkSamplesModal = () => {
    const workSampleModal = document.getElementById("workSamplesData");
    if (workSampleModal) {
      workSampleModal.showModal();
    }
  };
  const openEducationModal = () => {
    const educationModal = document.getElementById("educationData");
    if (educationModal) {
      educationModal.showModal();
    }
  };
  const openPersonalDetailsModal = () => {
    const personalDetailsModal = document.getElementById("profileInfo");
    if (personalDetailsModal) {
      personalDetailsModal.showModal();
    }
  };
  const openWorkStatusModal = () => {
    const workStatusModal = document.getElementById("workStatusData");
    if (workStatusModal) {
      workStatusModal.showModal();
    }
  };
  const choosingEducation = (educationType: string) => {
    setEducation(educationType);
  };
  const projectStatusData = (status: string) => {
    setProjectStatus(status);
  };
  const workExperienceData = (value: string) => {
    console.log(value, "value");
    setWorkExperience(value);
  };
  return (
    <>
      <Navbar />
      <main className="bg-secondary">
        {/* main div */}
        <div className="pt-[30px]">
          <section className="bg-white w-[75%]  mx-auto p-[30px] rounded-xl pb-[35px] max-lg:w-[90%] max-sm:w-[99%]">
            <div className="flex items-center gap-8 max-[500px]:flex-col">
              <img
                className="w-[150px] h-[150px] rounded-full ring-2 ring-gray-300 dark:ring-gray-500 p-1"
                src={girlImage}
                alt=""
              ></img>
              <div className="font-medium dark:text-white w-[85%]">
                <div className="text-[25px] flex items-center gap-[20px]">
                  Jese Leos
                  <span>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
                <hr className="w-[95%] mt-[27px]"></hr>
                <article className="flex gap-14 max-[650px]:flex-col max-[650px]:gap-[7px]">
                  <div className="mt-[10px] flex flex-col gap-[7px]">
                    <div className="flex items-center gap-4">
                      <i
                        className="fa fa-map-marker"
                        style={{ fontSize: "24px", color: "gray" }}
                      ></i>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Puducherry, INDIA
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <i
                        className="fa fa-map-marker"
                        style={{ fontSize: "24px", color: "gray" }}
                      ></i>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Fresher
                      </p>
                    </div>
                  </div>
                  <div className="mt-[10px] flex flex-col gap-[7px]">
                    <div className="flex items-center gap-4">
                      <i
                        className="fa fa-phone"
                        style={{ fontSize: "24px", color: "gray" }}
                      ></i>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Puducherry, INDIA
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <i
                        className="fa fa-envelope"
                        style={{ fontSize: "20px", color: "gray" }}
                      ></i>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Puducherry, INDIA
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>

        {/* anchor tag */}
        <div className="pt-[30px]">
          <section className=" w-[75%]  mx-auto rounded-xl flex gap-10 max-lg:w-[90%] max-sm:w-[99%]">
            {/* left side */}
            <article className="bg-white w-[35%] p-[20px] h-[514px]  max-[850px]:hidden">
              <h4 className="text-[18px] font-semibold">Quick links</h4>
              <div className="mt-[14px] flex flex-col gap-[10px]">
                <AnchorLink href="#resume">
                  <a
                    id="resume"
                    className="font-medium pointer ml-[10px] p-[7px] rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 hover:ml-[10px] hover:font-medium"
                  >
                    <span className="hover:ml-[10px]">Resume</span>
                  </a>
                </AnchorLink>

                <AnchorLink href="#profileSummary">
                  <a
                    id="profileSummary"
                    className="font-medium pointer ml-[10px] p-[7px] rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 hover:ml-[10px] hover:font-medium"
                  >
                    <span className="hover:ml-[10px]">Profile summary</span>
                  </a>
                </AnchorLink>

                <AnchorLink href="#keySkills">
                  <a
                    id="keySkills"
                    className="font-medium pointer ml-[10px] p-[7px] rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 hover:ml-[10px] hover:font-medium"
                  >
                    <span className="hover:ml-[10px]">Key skills</span>
                  </a>
                </AnchorLink>

                <AnchorLink href="#projects">
                  <a
                    id="projects"
                    className="font-medium pointer ml-[10px] p-[7px] rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 hover:ml-[10px] hover:font-medium"
                  >
                    <span className="hover:ml-[10px]">Projects</span>
                  </a>
                </AnchorLink>

                <AnchorLink href="#workSamples">
                  <a
                    id="workSamples"
                    className="font-medium pointer ml-[10px] p-[7px] rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 hover:ml-[10px] hover:font-medium"
                  >
                    <span className="hover:ml-[10px]">Work samples</span>
                  </a>
                </AnchorLink>

                <AnchorLink href="#education">
                  <a
                    id="education"
                    className="font-medium pointer ml-[10px] p-[7px] rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 hover:ml-[10px] hover:font-medium"
                  >
                    <span className="hover:ml-[10px]">Education</span>
                  </a>
                </AnchorLink>
                <AnchorLink href="#personalDetails">
                  <a
                    id="personalDetails"
                    className="font-medium pointer ml-[10px] p-[7px] rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 hover:ml-[10px] hover:font-medium"
                  >
                    <span className="hover:ml-[10px]">Personal details</span>
                  </a>
                </AnchorLink>
              </div>
            </article>

            {/* right side */}
            <article className=" w-[100%] flex flex-col">
              <div className="bg-white p-[20px] rounded-xl" id="resume">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-[150px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-6 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-blue-500 dark:text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <div
                className="bg-white p-[20px] rounded-xl mt-[20px]"
                id="profileSummary"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-10 mt-[10px] ">
                    <h4 className="font-semibold text-[17px]">
                      Profile Summary
                    </h4>
                    <span>
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mb-2 font-semibold text-sm text-blue-500 dark:text-gray-500 cursor-pointer"
                    onClick={openSummaryModal}
                  >
                    Add summary
                  </button>
                </div>

                <p className="mt-[10px] text-[14px]">
                  To obtain a challenging and responsible position in a dynamic
                  company, utilizing my professional qualifications for the
                  progress and success of the organization and to update myself
                  with the latest technologies, thus progressing in my career.
                </p>
              </div>
              <div className="bg-white mt-[20px] p-[20px] rounded-xl ">
                <div className="flex items-center justify-between">
                  <div className="flex gap-10 mt-[10px] ">
                    <h4 className="font-semibold text-[17px]">Key Skills</h4>
                    <span>
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mb-2 font-semibold text-sm text-blue-500 dark:text-gray-500 cursor-pointer"
                    onClick={openSkillsModal}
                  >
                    Add skills
                  </button>
                </div>

                <div className="flex gap-[12px] mt-[15px] max-[500px]:flex-wrap">
                  <button
                    type="button"
                    className="text-gray-400 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Python
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-4 py-2  me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Javascript
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-4 py-2  me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Express js
                  </button>
                </div>
              </div>
              {/* Project */}
              <div className="bg-white mt-[20px] p-[20px] rounded-xl ">
                <div className="flex items-center justify-between">
                  <div className="flex gap-10 mt-[10px] ">
                    <h4 className="font-semibold text-[17px]">Projects</h4>
                    <span>
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mb-2 font-semibold text-sm text-blue-500 dark:text-gray-500 cursor-pointer"
                    onClick={openProjectModal}
                  >
                    Add Project
                  </button>
                </div>

                <div className="mt-[15px]">
                  <div>
                    <h6 className="font-semibold text-[14px]">Project Name</h6>
                    <p className="ml-[20px] text-[14px] mt-[9px]">
                      Student Management system(SMS)
                    </p>
                  </div>
                  <div className="mt-[12px]">
                    <h6 className="font-semibold text-[14px]">
                      Project Timeline
                    </h6>
                    <p className="ml-[20px] text-[14px] mt-[9px]">
                      Nov 2023 - Feb 2024
                    </p>
                  </div>
                  <div className="mt-[12px]">
                    <h6 className="font-semibold text-[14px]">
                      Project Description
                    </h6>
                    <p className="ml-[20px] text-[14px] mt-[9px]">
                      EC Finder is a web application designed to simplify the
                      process of locating and connecting with electronics
                      components suppliers. It streamlines the search for
                      specific electronic parts, fosters efficient communication
                      between buyers and sellers, and enhances the overall
                      procurement experience. With an intuitive interface and
                      robust search capabilities, EC Finder is an invaluable
                      tool for professionals in the electronics industry.
                      <span className="mb-2 font-semibold text-sm text-blue-500 dark:text-gray-500 cursor-pointer">
                        view more projects....
                      </span>
                    </p>
                  </div>
                  <hr className="w-[95%] mt-[27px]"></hr>
                </div>
              </div>
              {/* work status */}
              <div className="bg-white mt-[20px] p-[20px] rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex gap-10 mt-[10px] ">
                    <h4 className="font-semibold text-[17px]">Work Status</h4>
                  </div>

                  <button
                    type="button"
                    className="mb-2 font-semibold text-sm text-blue-500 dark:text-gray-500 cursor-pointer"
                    onClick={openWorkStatusModal}
                  >
                    Add work status
                  </button>
                </div>
                <p className="mt-[10px] text-[14px]">
                  Your employment details will help recruiters understand your
                  experience.
                </p>
              </div>
              {/* work sample */}
              <div className="bg-white mt-[20px] p-[20px] rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex gap-10 mt-[10px] ">
                    <h4 className="font-semibold text-[17px]">Work samples</h4>
                    <span>
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mb-2 font-semibold text-sm text-blue-500 dark:text-gray-500 cursor-pointer"
                    onClick={openWorkSamplesModal}
                  >
                    Work samples
                  </button>
                </div>
                <p className="mt-[10px] text-[14px]">
                  Link relevant work samples (e.g. Github, Behance)
                </p>
              </div>
              {/* education */}
              <div className="bg-white mt-[20px] p-[20px] rounded-xl ">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[17px]">Education</h4>
                  <button
                    type="button"
                    className="mb-2 font-semibold text-sm text-blue-500 dark:text-gray-500 cursor-pointer"
                    onClick={openEducationModal}
                  >
                    Add education
                  </button>
                </div>
                {/* college */}
                <article className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[5px] mt-[15px]">
                    <p className="text-[15px] font-semibold">
                      B.Tech/B.E.Information Technology
                    </p>
                    <p className="text-[15px] font-semibold max-[500px]:text-[13px]">
                      Perunthalaivar Kamarajar Institute Of engineering and
                      Technology, Karaikal
                    </p>
                    <p className="text-[14px] text-gray-700">2017 - 2021</p>
                    <p className="text-[14px] text-gray-700">81%</p>
                  </div>
                  {/* 12th */}
                  <div className="flex flex-col gap-[5px] mt-[15px]">
                    <p className="text-[15px] font-semibold">Class XII</p>
                    <p className="text-[15px] font-semibold max-[500px]:text-[13px]">
                      Achariya Bala Siksha Mandir, Pondicherry
                    </p>
                    <p className="text-[14px] text-gray-700">2015 - 2017</p>
                    <p className="text-[14px] text-gray-700">88%</p>
                  </div>
                  {/* 10th */}
                  <div className="flex flex-col gap-[5px] mt-[15px]">
                    <p className="text-[15px] font-semibold">Class X</p>
                    <p className="text-[15px] font-semibold max-[500px]:text-[13px]">
                      Achariya Bala Siksha Mandir, Pondicherry
                    </p>
                    <p className="text-[14px] text-gray-700">2014 - 2015</p>
                    <p className="text-[14px] text-gray-700">95%</p>
                  </div>
                </article>
              </div>
              {/* personal details */}
              <div
                className="bg-white mt-[20px] p-[20px] rounded-xl mb-[40px]"
                id="personalDetails"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[17px]">
                    Personal details
                  </h4>
                  <button
                    type="button"
                    className="mb-2 font-semibold text-sm text-blue-500 dark:text-gray-500 cursor-pointer"
                    onClick={openPersonalDetailsModal}
                  >
                    Add details
                  </button>
                </div>
                <article className="flex flex-col gap-[15px] mt-[15px]">
                  <div>
                    <p className="text-[15px] font-semibold">Personal</p>
                    <p className="text-[14px] text-gray-700">
                      Female / unmarried
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold">Date of birth</p>
                    <p className="text-[14px] text-gray-700">15-Jun-2000</p>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold">Address</p>
                    <p className="text-[14px] text-gray-700">
                      No:8, Indhira nagar, ariyankuppam, puducherry 605007
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold">Languages known</p>
                    <ul className="max-w-md space-y-1 text-gray-700  text-[14px] list-disc list-inside dark:text-gray-400 flex items-center gap-[20px]">
                      <li>Tamil</li>
                      <li>English</li>
                      <li>French</li>
                    </ul>
                  </div>
                </article>
              </div>
            </article>
          </section>
        </div>

        {/* model */}

        {/* summary */}
        <dialog id="summary" className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <h3 className="font-bold text-lg">Profile summary</h3>
            <p className="py-4">
              It is the first thing recruiters notice in your profile. Write a
              concise headline introducing yourself to employers. (Minimum 5
              words)
            </p>
            <form onSubmit={handleSubmitProfile(onSubmitProfile)}>
              <textarea
                placeholder="Profile summary"
                className="textarea textarea-bordered textarea-lg w-full max-w-3xl"
                {...registerProfile("profileSummary")}
              ></textarea>
              {errorsProfile.profileSummary && (
                <p className="text-left text-xs text-error">
                  {errorsProfile.profileSummary.message}
                </p>
              )}
              <div className="modal-action">
                <button type="button" className="btn" formMethod="dialog">
                  Close
                </button>
                <button type="submit" className="btn text-white bg-blue-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
        {/* skills */}
        <dialog id="skills" className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <h3 className="font-bold text-lg">Key skills</h3>
            <p className="py-4">
              Add skills that best define your expertise, for e.g, Direct
              Marketing, Oracle, Java, etc. (Minimum 1)
            </p>

            <h3 className="font-semibold text-lg">skills</h3>
            <div className="flex gap-[10px] flex-wrap mt-[14px]">
              <span
                id="badge-dismiss-dark"
                className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300"
              >
                Nodejs
                <button
                  type="button"
                  className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                  data-dismiss-target="#badge-dismiss-dark"
                  aria-label="Remove"
                >
                  <svg
                    className="w-2 h-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Remove badge</span>
                </button>
              </span>
              <span
                id="badge-dismiss-dark"
                className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300"
              >
                Javascript
                <button
                  type="button"
                  className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                  data-dismiss-target="#badge-dismiss-dark"
                  aria-label="Remove"
                >
                  <svg
                    className="w-2 h-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Remove badge</span>
                </button>
              </span>
            </div>

            <div className="mb-6 mt-[20px]">
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[colourOptions[4], colourOptions[5]]}
                isMulti
                options={colourOptions}
              />
            </div>

            <h3 className="font-semibold text-medium">
              Or you can select from the suggested set of skills
            </h3>
            <div className="flex gap-[10px] flex-wrap mt-[14px] ml-[10px]">
              <span
                id="badge-dismiss-dark"
                className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300 flex items-center cursor-pointer"
              >
                Express js
                <button
                  type="button"
                  className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300 "
                  data-dismiss-target="#badge-dismiss-dark"
                  aria-label="Remove"
                >
                  <svg
                    className="w-3 h-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                </button>
              </span>
              <span
                id="badge-dismiss-dark"
                className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300 flex items-center cursor-pointer"
              >
                Express js
                <button
                  type="button"
                  className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                  data-dismiss-target="#badge-dismiss-dark"
                  aria-label="Remove"
                >
                  <svg
                    className="w-3 h-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                </button>
              </span>

              <span
                id="badge-dismiss-dark"
                className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300 flex items-center cursor-pointer"
              >
                Express js
                <button
                  type="button"
                  className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                  data-dismiss-target="#badge-dismiss-dark"
                  aria-label="Remove"
                >
                  <svg
                    className="w-3 h-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                </button>
              </span>

              <span
                id="badge-dismiss-dark"
                className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300 flex items-center cursor-pointer"
              >
                Express js
                <button
                  type="button"
                  className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                  data-dismiss-target="#badge-dismiss-dark"
                  aria-label="Remove"
                >
                  <svg
                    className="w-3 h-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                </button>
              </span>

              <span
                id="badge-dismiss-dark"
                className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300 flex items-center cursor-pointer"
              >
                Express js
                <button
                  type="button"
                  className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                  data-dismiss-target="#badge-dismiss-dark"
                  aria-label="Remove"
                >
                  <svg
                    className="w-3 h-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div className="modal-action">
              <form method="dialog" className="flex gap-[20px]">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
                <button className="btn text-white bg-blue-500">Save</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* project */}
        <dialog id="projectsData" className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <h3 className="font-bold text-lg">Project</h3>
            <p className="py-4">
              Stand out for employers by adding details about projects you have
              done in college, internships, or at work.
            </p>
            <form onSubmit={handleSubmitProject(onSubmitProject)}>
              <div>
                <h4 className="font-semibold text-lg">
                  Project name <span className="text-red-500">*</span>
                </h4>
                <div className="mb-6 mt-[15px]">
                  <input
                    type="text"
                    id="projectName"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Project name"
                    {...registerProject("projectName")}
                  />
                  {errorsProject.projectName && (
                    <p className="text-left text-xs text-error">
                      {errorsProject.projectName.message}
                    </p>
                  )}
                </div>
                <div className="mt-[15px]">
                  <h4 className="font-semibold text-lg">
                    Project description <span className="text-red-500">*</span>
                  </h4>
                  <div className="mt-[10px]">
                    <textarea
                      placeholder="Project details"
                      className="textarea textarea-bordered textarea-lg w-full max-w-3xl"
                      {...registerProject("projectDescription")}
                    ></textarea>
                    {errorsProject.projectDescription && (
                      <p className="text-left text-xs text-error">
                        {errorsProject.projectDescription.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-[15px]">
                  <h4 className="font-semibold text-lg">
                    Project status <span className="text-red-500">*</span>
                  </h4>
                  <div className="flex mt-[10px]">
                    <div className="flex items-center me-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value="finished"
                        {...registerProject("projectStatus")}
                        onChange={(e) => setProjectStatus(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label className="ms-2 text-sm font-medium text-gray-900">
                        Finished
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value="not completed"
                        {...registerProject("projectStatus")}
                        onChange={(e) => setProjectStatus(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label className="ms-2 text-sm font-medium text-gray-900">
                        Not completed
                      </label>
                    </div>
                  </div>
                  {errorsProject.projectStatus && (
                    <p className="text-left text-xs text-error">
                      {errorsProject.projectStatus.message}
                    </p>
                  )}
                </div>

                <div className="mt-[15px]">
                  <h4 className="font-semibold text-lg">
                    Worked from <span className="text-red-500">*</span>
                  </h4>
                  <div className="grid gap-6 mb-6 mt-[15px] md:grid-cols-2">
                    <select
                      id="startYear"
                      {...registerProject("startYear")}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected disabled>
                        Select year
                      </option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                    </select>
                    {errorsProject.startYear && (
                      <p className="text-left text-xs text-error">
                        {errorsProject.startYear.message}
                      </p>
                    )}
                    <select
                      id="startMonth"
                      {...registerProject("startMonth")}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected disabled>
                        Select month
                      </option>
                      <option value="January">Jan</option>
                      <option value="February">Feb</option>
                      <option value="March">Mar</option>
                      <option value="April">Apr</option>
                      <option value="May">May</option>
                      <option value="June">Jun</option>
                      <option value="July">Jul</option>
                      <option value="August">Aug</option>
                      <option value="September">Sep</option>
                      <option value="October">Oct</option>
                      <option value="November">Nov</option>
                      <option value="December">Dec</option>
                    </select>
                    {errorsProject.startMonth && (
                      <p className="text-left text-xs text-error">
                        {errorsProject.startMonth.message}
                      </p>
                    )}
                  </div>
                </div>

                {projectStatus === "finished" && (
                  <>
                    <section className="mt-[15px]">
                      <h4 className="font-semibold text-lg">
                        Worked till <span className="text-red-500">*</span>
                      </h4>
                      <div className="grid gap-6 mb-6 mt-[15px] md:grid-cols-2">
                        <select
                          id="endYear"
                          {...registerProject("endYear")}
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                          <option selected disabled>
                            Select year
                          </option>
                          <option value="2024">2024</option>
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>
                          <option value="2016">2016</option>
                          <option value="2015">2015</option>
                        </select>
                        {errorsProject.endYear && (
                          <p className="text-left text-xs text-error">
                            {errorsProject.endYear.message}
                          </p>
                        )}
                        <select
                          id="endMonth"
                          {...registerProject("endMonth")}
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                          <option selected disabled>
                            Select month
                          </option>
                          <option value="January">Jan</option>
                          <option value="February">Feb</option>
                          <option value="March">Mar</option>
                          <option value="April">Apr</option>
                          <option value="May">May</option>
                          <option value="June">Jun</option>
                          <option value="July">Jul</option>
                          <option value="August">Aug</option>
                          <option value="September">Sep</option>
                          <option value="October">Oct</option>
                          <option value="November">Nov</option>
                          <option value="December">Dec</option>
                        </select>
                        {errorsProject.endMonth && (
                          <p className="text-left text-xs text-error">
                            {errorsProject.endMonth.message}
                          </p>
                        )}
                      </div>
                    </section>
                  </>
                )}
              </div>
              <div className="modal-action">
                {/* if there is a button, it will close the modal */}
                <button type="button" className="btn">
                  Close
                </button>
                <button type="submit" className="btn text-white bg-blue-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
        {/* work samples */}
        <dialog id="workSamplesData" className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <h3 className="font-bold text-lg">Work samples</h3>
            <p className="py-4">
              Link relevant work samples (e.g. Github, Behance)
            </p>
            <div className="mt-[15px]">
              <h4 className="font-semibold text-lg">Work title</h4>
              <div className="mt-[10px]">
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="work title"
                ></input>
              </div>
            </div>
            <div className="mt-[15px]">
              <h4 className="font-semibold text-lg">URL</h4>
              <div className="mt-[10px]">
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="eg: https://github.com/demo.git"
                ></input>
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog" className="flex gap-[20px]">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
                <button className="btn text-white bg-blue-500">Save</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* personal infomation */}

        <dialog id="profileInfo" className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <h3 className="font-bold text-lg">Personal details</h3>
            <p className="py-4">
              This information is important for employers to know you better
            </p>
            <form onSubmit={handleSubmitPersonal(onSubmitPersonal)}>
              <div>
                <h4 className="font-semibold text-lg">
                  Gender <span className="text-red-500">*</span>
                </h4>
                <div className="flex mt-[10px]">
                  <div className="flex items-center me-4">
                    <input
                      id="gender"
                      type="radio"
                      value="Male"
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {...registerPersonal("gender")}
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      id="gender"
                      type="radio"
                      value="Female"
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {...registerPersonal("gender")}
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Female
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      id="gender"
                      type="radio"
                      value="Others"
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {...registerPersonal("gender")}
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Others
                    </label>
                  </div>
                  {errorsPersonal.gender && (
                    <p className="text-left text-xs text-error">
                      {errorsPersonal.gender.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-[15px]">
                <h4 className="font-semibold text-lg">
                  Date of birth <span className="text-red-500">*</span>
                </h4>
                <div className="mt-[10px]">
                  <input
                    id="dob"
                    type="date"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    {...registerPersonal("dob")}
                  />
                  {errorsPersonal.dob && (
                    <p className="text-left text-xs text-error">
                      {errorsPersonal.dob.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-[15px]">
                <h4 className="font-semibold text-lg">
                  Marital status <span className="text-red-500">*</span>
                </h4>
                <div className="flex mt-[10px]">
                  <div className="flex items-center me-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value="Married"
                      name="maritalStatus"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {...registerPersonal("maritalStatus")}
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Married
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value="Unmarried"
                      name="maritalStatus"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {...registerPersonal("maritalStatus")}
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Unmarried
                    </label>
                  </div>
                  {errorsPersonal.maritalStatus && (
                    <p className="text-left text-xs text-error">
                      {errorsPersonal.maritalStatus.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-[15px]">
                <h4 className="font-semibold text-lg">
                  City <span className="text-red-500">*</span>
                </h4>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter city"
                    {...registerPersonal("city")}
                  />
                  {errorsPersonal.city && (
                    <p className="text-left text-xs text-error">
                      {errorsPersonal.city.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-[15px]">
                <h4 className="font-semibold text-lg">
                  Area<span className="text-red-500">*</span>
                </h4>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    id="area"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter area"
                    {...registerPersonal("area")}
                  />
                  {errorsPersonal.area && (
                    <p className="text-left text-xs text-error">
                      {errorsPersonal.area.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-[15px]">
                <h4 className="font-semibold text-lg">
                  Street <span className="text-red-500">*</span>
                </h4>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    id="street"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter street"
                    {...registerPersonal("street")}
                  />
                  {errorsPersonal.street && (
                    <p className="text-left text-xs text-error">
                      {errorsPersonal.street.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-[15px]">
                <h4 className="font-semibold text-lg">
                  Pincode <span className="text-red-500">*</span>
                </h4>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    id="pincode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter pincode"
                    {...registerPersonal("pincode")}
                  />
                  {errorsPersonal.pincode && (
                    <p className="text-left text-xs text-error">
                      {errorsPersonal.pincode.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-[15px]">
                <h4 className="font-semibold text-lg">
                  Languages known<span className="text-red-500">*</span>
                </h4>
                <div className="">
                  <div className="mb-6 mt-[15px]">
                    <Controller
                      control={control}
                      name="language"
                      defaultValue={[]}
                      render={({ field }) => (
                        <Select
                          {...field}
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          options={languages}
                        />
                      )}
                    />
                  </div>
                  {errorsPersonal.language && (
                    <p className="text-left text-xs text-error">
                      {errorsPersonal.language.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    document.getElementById("profileInfo")?.close()
                  }
                >
                  Close
                </button>
                <button type="submit" className="btn text-white bg-blue-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
        {/* education */}
        <dialog id="educationData" className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <h3 className="font-bold text-lg">Education</h3>
            <p className="py-4">
              Details like course, university, and more, help recruiters
              identify your educational background
            </p>
            <div className="mt-[15px]">
              <h4 className="font-semibold text-lg">
                Education <span className="text-red-500">*</span>
              </h4>
              <div className="mt-[10px]">
                <form className="max-w-3xl mx-auto">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => choosingEducation(e.target.value)}
                  >
                    <option selected disabled>
                      Choose an education
                    </option>
                    <option value="graduation"> Doctorate/PhD</option>
                    <option value="graduation">Masters/Post-Graduation</option>
                    <option value="graduation">Graduation/Diploma</option>
                    <option value="schooling">12th</option>
                    <option value="schooling">10th</option>
                  </select>
                </form>
              </div>
              {education == "graduation" && (
                <section>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      University/Institute{" "}
                      <span className="text-red-500">*</span>
                    </h4>
                    <div className="mt-[10px]">
                      <input
                        type="text"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="University/Institute
"
                      ></input>
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Course <span className="text-red-500">*</span>
                    </h4>
                    <div className="mt-[10px]">
                      <input
                        type="text"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter course"
                      ></input>
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Specialization <span className="text-red-500">*</span>
                    </h4>
                    <div className="mt-[10px]">
                      <input
                        type="text"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Specialization"
                      ></input>
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Course type <span className="text-red-500">*</span>
                    </h4>
                    <div className="flex mt-[10px]">
                      <div className="flex items-center me-4">
                        <input
                          id="inline-radio"
                          type="radio"
                          value=""
                          name="inline-radio-group"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Full time
                        </label>
                      </div>
                      <div className="flex items-center me-4">
                        <input
                          id="inline-2-radio"
                          type="radio"
                          value=""
                          name="inline-radio-group"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Part time
                        </label>
                      </div>
                      <div className="flex items-center me-4">
                        <input
                          id="inline-2-radio"
                          type="radio"
                          value=""
                          name="inline-radio-group"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Correspondence/Distance learning
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Course duration <span className="text-red-500">*</span>
                    </h4>
                    <div className="mt-[10px] flex gap-[50px]">
                      <input
                        type="month"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Specialization"
                      ></input>
                      <input
                        type="month"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Specialization"
                      ></input>
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Marks{" "}
                      <span className="text-gray-400 font-light text-[14px]">
                        (in percetage)
                      </span>
                    </h4>
                    <div className="mt-[10px]">
                      <input
                        type="text"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Marks"
                      ></input>
                    </div>
                  </div>
                </section>
              )}
              {education === "schooling" && (
                <section>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Board <span className="text-red-500">*</span>
                    </h4>
                    <form className="max-w-3xl mx-auto">
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected disabled>
                          Select a board
                        </option>
                        <option value="CBSE">
                          Central Board of Secondary Education (CBSE)
                        </option>
                        <option value="CISCE">
                          Council for the Indian School Certificate Examinations
                          (CISCE)
                        </option>
                        <option value="TNBSE">
                          Tamil Nadu Board of Secondary Education (TNBSE)
                        </option>
                        <option value="Maharashtra">
                          Maharashtra State Board of Secondary and Higher
                          Secondary Education
                        </option>
                        <option value="Rajasthan">
                          Rajasthan Board of Secondary Education (RBSE)
                        </option>
                        <option value="Uttar Pradesh">
                          Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP)
                        </option>
                        <option value="Karnataka">
                          Karnataka Secondary Education Examination Board
                          (KSEEB)
                        </option>
                        <option value="Gujarat">
                          Gujarat Secondary and Higher Secondary Education Board
                          (GSEB)
                        </option>
                        <option value="West Bengal">
                          West Bengal Board of Secondary Education (WBBSE)
                        </option>
                        <option value="Bihar">
                          Bihar School Examination Board (BSEB)
                        </option>
                        <option value="Madhya Pradesh">
                          Madhya Pradesh Board of Secondary Education (MPBSE)
                        </option>
                        <option value="Punjab">
                          Punjab School Education Board (PSEB)
                        </option>
                        <option value="Haryana">
                          Haryana Board of School Education (HBSE)
                        </option>
                        <option value="Assam">
                          Assam Higher Secondary Education Council (AHSEC)
                        </option>
                        <option value="Telangana">
                          Telangana State Board of Intermediate Education
                          (TSBIE)
                        </option>
                        <option value="Kerala">
                          Kerala State Education Board (KSEB)
                        </option>
                        <option value="Odisha">
                          Board of Secondary Education, Odisha (BSEO)
                        </option>
                        <option value="Jharkhand">
                          Jharkhand Academic Council (JAC)
                        </option>
                        <option value="Chhattisgarh">
                          Chhattisgarh Board of Secondary Education (CGBSE)
                        </option>
                        <option value="Uttarakhand">
                          Uttarakhand Board of School Education (UBSE)
                        </option>
                      </select>
                    </form>
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Passed-out year <span className="text-red-500">*</span>
                    </h4>
                    <div className="mt-[10px]">
                      <input
                        type="month"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Specialization"
                      ></input>
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      School medium <span className="text-red-500">*</span>
                    </h4>
                    <form className="max-w-3xl mx-auto">
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected disabled>
                          Select a medium
                        </option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Tamil">Tamil</option>
                      </select>
                    </form>
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Marks{" "}
                      <span className="text-gray-400 font-light text-[14px]">
                        (in percetage)
                      </span>
                    </h4>
                    <div className="mt-[10px]">
                      <input
                        type="text"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Marks"
                      ></input>
                    </div>
                  </div>
                </section>
              )}
            </div>

            <div className="modal-action">
              <form method="dialog" className="flex gap-[20px]">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
                <button className="btn text-white bg-blue-500">Save</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* work Status */}
        <dialog id="workStatusData" className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <form onSubmit={handleSubmitWorkStatus(onSubmitWorkStatus)}>
              <div className="mt-[15px]">
                <div className="mt-[10px]">
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      LinkedIn profile URL{" "}
                      <span className="text-red-500">*</span>
                    </h4>
                    <div className="mt-[10px]">
                      <input
                        type="text"
                        id="default-input"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="https://www.linkedin.com/in/"
                        {...registerWorkStatus("linkedInUrl")}
                      />
                    </div>
                    {errorsWorkStatus.linkedInUrl && (
                      <p className="text-left text-xs text-error">
                        {errorsWorkStatus.linkedInUrl.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Work status <span className="text-red-500">*</span>
                    </h4>
                    <div className="flex mt-[10px]">
                      <div className="flex items-center me-4">
                        <input
                          id="inline-radio"
                          type="radio"
                          value="fresher"
                          name="inline-radio-group"
                          onChange={(e) => workExperienceData(e.target.value)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          {...registerWorkStatus("workStatus")}
                        />
                        <label className="ms-2 text-sm font-medium text-gray-900">
                          Fresher
                        </label>
                      </div>
                      <div className="flex items-center me-4">
                        <input
                          id="inline-2-radio"
                          type="radio"
                          value="experience"
                          name="inline-radio-group"
                          onChange={(e) => workExperienceData(e.target.value)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          {...registerWorkStatus("workStatus")}
                        />
                        <label className="ms-2 text-sm font-medium text-gray-900">
                          Experience
                        </label>
                      </div>
                    </div>
                    {errorsWorkStatus.workStatus && (
                      <p className="text-left text-xs text-error">
                        {errorsWorkStatus.workStatus.message}
                      </p>
                    )}
                  </div>

                  {workExperience === "experience" && (
                    <>
                      <section className="mt-[15px]">
                        <h4 className="font-semibold text-lg">
                          Experience <span className="text-red-500">*</span>
                        </h4>
                        <div className="mt-[15px]">
                          <select
                            id="countries"
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            {...registerWorkStatus("experience")}
                          >
                            <option value="" disabled selected>
                              Select experience
                            </option>
                            <option value={0}>0-6 months</option>
                            <option value={1}>1 year</option>
                            <option value={2}>2 years</option>
                            <option value={3}>3 years</option>
                            <option value={4}>4 years</option>
                            <option value={5}>5 years</option>
                            <option value={6}>6 years</option>
                            <option value={7}>7 years</option>
                            <option value={8}>8 years</option>
                            <option value={9}>9 years</option>
                            <option value={10}>10 years</option>
                          </select>
                        </div>
                        {errorsWorkStatus.experience && (
                          <p className="text-left text-xs text-error">
                            {errorsWorkStatus.experience.message}
                          </p>
                        )}
                      </section>
                    </>
                  )}
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Notice period <span className="text-red-500">*</span>
                    </h4>
                    <div className="mt-[10px]">
                      <div className="mt-[15px]">
                        <select
                          id="noticePeriod"
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          {...registerWorkStatus("noticePeriod")}
                        >
                          <option value="" disabled selected>
                            Select notice period
                          </option>
                          <option value="15 days">15 days</option>
                          <option value="30 days">30 days</option>
                          <option value="60 days">60 days</option>
                          <option value="90 days">90 days</option>
                        </select>
                      </div>
                      {errorsWorkStatus.noticePeriod && (
                        <p className="text-left text-xs text-error">
                          {errorsWorkStatus.noticePeriod.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Current salary <span className="text-red-500">*</span>
                    </h4>
                    <div className="mt-[10px]">
                      <input
                        type="text"
                        id="currentSalary"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Current salary in LPA"
                        {...registerWorkStatus("currentSalary")}
                      />
                    </div>
                    {errorsWorkStatus.currentSalary && (
                      <p className="text-left text-xs text-error">
                        {errorsWorkStatus.currentSalary.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-[15px]">
                    <h4 className="font-semibold text-lg">
                      Salary expectation <span className="text-red-500">*</span>
                    </h4>
                    <div className="mt-[10px]">
                      <input
                        type="text"
                        id="salaryExpectation"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Salary expectation in LPA"
                        {...registerWorkStatus("salaryExpectation")}
                      />
                    </div>
                    {errorsWorkStatus.salaryExpectation && (
                      <p className="text-left text-xs text-error">
                        {errorsWorkStatus.salaryExpectation.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    document.getElementById("workStatusData")?.close()
                  }
                >
                  Close
                </button>
                <button type="submit" className="btn text-white bg-blue-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </main>
      <RecuiterFooter />
    </>
  );
}
