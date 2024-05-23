import { Link } from "react-router-dom";
import Tab from "../../components/Tab";
import JobCardView from "./JobCardView";

function Jobs() {
  return (
    <section className="bg-[#FFFFFF] p-5 rounded-xl">
      <div className="flex justify-between">
        <p className="font-semibold text-[#303030]">Jobs for you</p>
        <Link
          to="/jobs"
          className="font-semibold text-[#6B6B6B] hover:text-primary cursor-pointer"
        >
          View all
        </Link>
      </div>
      <Tab />
      <JobCardView />
    </section>
  );
}

export default Jobs;
