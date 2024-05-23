import CarouselControlsInside from "../../components/Carousel";
import JobCard from "./JobCard";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllJobPostsAPI } from "../../features/allJobPostsSlice";
import CardSkeletonCarousel from "../../components/CardSkeletonCarousel";
import JobsNotFound from "./JobsNotFound";

function JobCardView() {
  const dispatch = useDispatch<AppDispatch>();
  const { jobPostsType, allJobPosts, appliedJobPosts, roleMatchJobPosts } =
    useSelector((state: RootState) => state);
  const isAnyLoading =
    allJobPosts.isLoading ||
    appliedJobPosts.isLoading ||
    roleMatchJobPosts.isLoading;
  useEffect(() => {
    dispatch(fetchAllJobPostsAPI());
  }, [dispatch]);
  // console.log(roleMatchJobPosts, "role match job");
  if (isAnyLoading) {
    return <CardSkeletonCarousel />;
  }

  switch (jobPostsType) {
    case "allJobPosts":
      if (allJobPosts?.data != null) {
        return (
          <CarouselControlsInside carousel="jobs">
            {allJobPosts?.data?.map((job, index) => {
              return <JobCard key={index} data={job} />;
            })}
          </CarouselControlsInside>
        );
      } else {
        return <JobsNotFound message="no jobs found" btnName="apply" />;
      }
    case "roleMatchJobPosts":
      if (
        roleMatchJobPosts?.data != null &&
        roleMatchJobPosts?.data.length != 0
      ) {
        return (
          <CarouselControlsInside carousel="jobs">
            {roleMatchJobPosts?.data?.map((job, index) => {
              return <JobCard key={index} data={job} />;
            })}
          </CarouselControlsInside>
        );
      } else {
        return (
          <JobsNotFound
            message="You have any role matched applied job"
            btnName="please add your role"
          />
        );
      }
    case "appliedJobPosts":
      if (appliedJobPosts?.data != null) {
        return (
          <CarouselControlsInside carousel="jobs">
            {appliedJobPosts?.data?.map((job, index) => {
              console.log(job);
              return <JobCard key={index} data={job} />;
            })}
          </CarouselControlsInside>
        );
      } else {
        console.log("no applied jobs find");
        return (
          <JobsNotFound
            message="You have not any applied job"
            btnName="apply"
          />
        );
      }
  }
}

export default JobCardView;
