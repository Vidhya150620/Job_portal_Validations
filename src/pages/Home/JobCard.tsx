import { GrLocation } from "react-icons/gr";
import companyLogo from "../../assets/images/companyLogo.png";
import React from "react";

interface JobPostProps {
  data: JobPostData;
}

interface JobPostData {
  organizationIcon: string;
  jobRoleId: string;
  jobLocation: string;
  organizationName: string;
}
const JobCard: React.FC<JobPostProps> = ({ data }) => {
  return (
    <main className="border rounded-[25px] p-[22px]">
      <section className="flex items-center justify-between">
        <img src={data?.organizationIcon || companyLogo}></img>
        <p className="text-[#4E4E4E] text-[13px]">15 Hrs ago</p>
      </section>
      <section className="flex flex-col items-baseline gap-2 mt-[14px]">
        <p className="text-black font-semibold text-md  max-md:text-[14px]">
          {data?.jobRoleId || "Fullstack developer"}
        </p>
        <p className=" text-[14px] max-md:text-[12px]">
          {data?.organizationName || "....."}
        </p>
      </section>
      <section className="flex gap-2 mt-[11px] items-center">
        <GrLocation className="text-2xl text-[#909090]" />
        <p className="text-left text-[14px] line-clamp-2">
          {data?.jobLocation ||
            " No. 10, 2nd Floor, 45 Feet Road, Vengateswara Nagar, Near HDFC Bank,Saram, Puducherry-605013."}
        </p>
      </section>
    </main>
  );
};
export default JobCard;
