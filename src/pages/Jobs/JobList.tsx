import JobPostCard from "../../components/JobPostCard";
import SearchJobs from "./SearchJobs";
import Tab from "../../components/Tab";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
// import JobCard from "../Home/JobCard";
// import JobsNotFound from "../Home/JobsNotFound";
import { Pagination, Stack } from "@mui/material";
import JobCard from "../Home/JobCard";
import CustomPagination from "../../components/CustomPagination";
import { fetchAllJobPostsAPI } from "../../features/allJobPostsSlice";
import { fetchRoleMatchJobPostsAPI } from "../../features/roleMatchedJobPostsSlice";
// import JobCard from "../Home/JobCard";

interface JobListProps {
  jobPostsType: string;
  allJobPosts: { data: any[] } | null; // Replace `any` with the actual type if known
  start: number;
}

const JobList: React.FC<JobListProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const [overAllPages, setOverAllPages] = useState(1);
  const jobPostsType = useSelector((state: RootState) => state.jobPostsType);
  console.log(jobPostsType, "jobposttype");
  const [sliceCount, setSliceCount] = useState(0);
  const [data, setData] = useState<any[]>([]);
  const perPageInNum = 2;
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    // console.log(event, "event");
    setPage(newPage);
    setSliceCount((newPage - 1) * perPageInNum);
  };
  useEffect(() => {
    const fetchData = async () => {
      let payload: any;
      if (jobPostsType === "allJobPosts") {
        console.log("allJobPosts joblist");
        payload = await dispatch(fetchAllJobPostsAPI()).then(
          (res) => res.payload
        );
        setData(payload?.data);
        setOverAllPages(payload?.data?.length);
      } else if (jobPostsType === "roleMatchJobPosts") {
        console.log("rolematch joblist");
        payload = await dispatch(
          fetchRoleMatchJobPostsAPI({
            roles: ["65fbea944f2ee3b7efa45d12", "65fbeb094f2ee3b7efa45d2d"],
          })
        ).then((res) => res.payload);
        setData(payload);
        setOverAllPages(payload?.length);
        console.log(payload, "from role match");
      }
    };
    setPage(1);
    setSliceCount(0);
    fetchData();
  }, [dispatch, jobPostsType]);

  console.log(data);
  console.log(page);

  return (
    <section className="bg-white w-[95%] max-w-screen-xl mx-auto p-5 max-[630px]:w-[95%] rounded-lg">
      <p className="text-left text-[#303030] font-medium text-lg">
        Recommanded Jobs
      </p>
      <Tab />
      <SearchJobs />
      {data?.slice(sliceCount, sliceCount + perPageInNum).map((post, index) => (
        <JobPostCard post={post} key={index} />
      ))}
      <CustomPagination
        overAllPages={overAllPages}
        page={page}
        onChange={handlePageChange}
        perPageInNum={perPageInNum}
      />
    </section>
  );
};

export default JobList;
