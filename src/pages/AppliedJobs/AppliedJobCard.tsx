import React from "react";
import wipro from "../../assets/images/wipro.png";

interface JobPost {
  title: string;
  company: string;
  type: string;
  salary: string;
  jobLocation: string;
  jobDescription: string;
  skills: string[];
  createdAt: string;
}

interface AppliedJobCard {
  post: JobPost;
}

const JobPostCard: React.FC<AppliedJobCard> = ({ post }) => {
  return (
    <main className="border border-[#D5D5D5]-600 rounded-3xl p-5 my-5 cursor-pointer hover:border-primary">
      <div className="flex gap-2">
        <img src={wipro} className="object-contain" alt="image" />
        <div className="flex flex-col items-start">
          <p className="text-black font-semibold text-lg max-md:text-[14px]">
            {"post.title"}
          </p>
          <p className="text-[14px] max-md:text-[13px]">{"post.company"}</p>
        </div>
      </div>
      <div className="flex mt-[10px] max-[730px]:flex-wrap gap-[17px] max-[550px]:gap-[20px]">
        <div className="flex gap-2">
          <i className="fa fa-archive" style={{ fontSize: "15px" }}></i>
          <p className="text-sm">{"post.type"}</p>
        </div>
        <p className="text-sm">
          ₹ <span>{"post.salary"}</span>
        </p>
        <div className="flex gap-2">
          <i
            className="fa fa-map-marker"
            style={{ fontSize: "24px", color: "#6b6b6b" }}
          ></i>
          <p className="text-sm">{"post.jobLocation"}</p>
        </div>
      </div>
      <p className="text-justify mt-[15px] text-sm max-md:text-[13px]">
        {"post.jobDescription"}
      </p>
      <div className="mt-[15px]">
        <ul className="flex gap-10 text-sm list-disc ml-[27px] max-xl:flex-wrap gap-y-px  max-md:text-[13px]">
          {/* {post.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))} */}
        </ul>
      </div>
      <div className="flex justify-between mt-[15px]">
        <p className="text-sm text-[#4E4E4E] text-[13px] max-md:text-[13px]">
          {"post.createdAt"}
        </p>
        <div className="flex gap-2">
          <i style={{ fontSize: "24px", color: "black" }} className="fa">
            &#xf097;
          </i>
          <p className="text-black font-semibold">Save</p>
        </div>
      </div>
      <p className="font-semibold">Application Status</p>
      <div>
        <div className="w-full mt-3  relative rounded-xl  max-w-[40%] h-1 bg-slate-200">
          <span className="h-4 w-4 left-0 -bottom-[5px] absolute bg-yellow-600 rounded-full"></span>
          <div className="w-full  rounded-xl max-w-[50%] h-1 bg-green-400"></div>
        </div>
      </div>
    </main>
  );
};

export default JobPostCard;
