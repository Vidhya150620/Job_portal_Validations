import { GiSkills } from "react-icons/gi";
import { HiOutlineDocumentSearch, HiOutlineMailOpen } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { AppDispatch, RootState } from "../app/store";
// import { fetchAllJobPostsAPI } from "../features/allJobPostsSlice";
import { setType } from "../features/jobPostTypeSlice";
import { useEffect } from "react";
import { fetchAllJobPostsAPI } from "../features/allJobPostsSlice";
import { fetchappliedJobPostsAPI } from "../features/appliedJobPostsSlice";
import { fetchRoleMatchJobPostsAPI } from "../features/roleMatchedJobPostsSlice";

// interface TabDataItem {
//   label: string;
//   value: string;
//   icon: JSX.Element;
// }

// const TAB_DATA: TabDataItem[] = [
//   {
//     label: "All Jobs",
//     value: "allJobPosts",
//     icon: <HiOutlineDocumentSearch className="text-xl" />,
//   },
//   {
//     label: "Role Matched Job",
//     value: "roleMatchJobPosts",
//     icon: <GiSkills className="text-xl" />,
//   },
//   {
//     label: "Applied Jobs",
//     value: "appliedJobPosts",
//     icon: <HiOutlineClipboardDocumentList className="text-xl" />,
//   },
//   // {
//   //   label: "Jobs Invites",
//   //   value: "jobInvites",
//   //   icon: <HiOutlineMailOpen className="text-xl" />,
//   // },
// ];

function Tab() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    jobPostsType,
    currentUser,
    allJobPosts,
    appliedJobPosts,
    roleMatchJobPosts,
  } = useSelector((state: RootState) => state);

  const allJObPostCount = allJobPosts.data?.length;
  const appliedJobPostsCount = appliedJobPosts.data?.length;
  const roleMatchJobPostsCount = roleMatchJobPosts.data?.length;
  // console.log(allJObPostCount);
  // console.log(appliedJobPostsCount);
  // console.log(roleMatchJobPostsCount);
  // console.log(appliedJobPosts);

  useEffect(() => {
    // if (jobPostsType === "allJobPosts") {
    //   dispatch(fetchAllJobPostsAPI());
    // } else if (jobPostsType === "roleMatchJobPosts") {
    //   console.log("clicked role match job post");
    //   dispatch(fetchRoleMatchJobPostsAPI(currentUser?.data?.roles || []));
    // } else if (jobPostsType === "appliedJobPosts") {
    //   console.log("applied job posts");
    //   dispatch(fetchappliedJobPostsAPI());
    // }
    dispatch(fetchAllJobPostsAPI());
    dispatch(
      fetchRoleMatchJobPostsAPI({
        roles: ["65fbea944f2ee3b7efa45d12", "65fbeb094f2ee3b7efa45d2d"],
      })
    );
    dispatch(fetchappliedJobPostsAPI());
  }, [dispatch, jobPostsType]);

  return (
    <>
      <nav
        className={`flex whitespace-nowrap overflow-x-auto no-scrollbar gap-6 md:gap-10 mt-[14px]`}
      >
        <article
          className={`flex gap-2 font-medium hover:cursor-pointer max-[740px]:text-[15px] border-solid ${
            jobPostsType == "allJobPosts"
              ? "text-[#0A73BE] border-[#0A73BE] border-b-2"
              : "text-[#6B6B6B]"
          }`}
          onClick={() => {
            dispatch(setType("allJobPosts"));
          }}
        >
          <span>
            <HiOutlineDocumentSearch className="text-xl" />
          </span>
          <span>All Jobs</span>
          <span>({allJObPostCount || 0})</span>
        </article>
        {/* --------------------------------------------------------------------------------------------- */}
        <article
          className={`flex gap-2 font-medium hover:cursor-pointer max-[740px]:text-[15px] border-solid ${
            jobPostsType == "roleMatchJobPosts"
              ? "text-[#0A73BE] border-[#0A73BE] border-b-2"
              : "text-[#6B6B6B]"
          }`}
          onClick={() => {
            dispatch(setType("roleMatchJobPosts"));
          }}
        >
          <span>
            <GiSkills className="text-xl" />
          </span>
          <span>Role Matched Job</span>
          <span>({roleMatchJobPostsCount || 0})</span>
        </article>
        {/* --------------------------------------------------------------------------------------------- */}

        <article
          className={`flex gap-2 font-medium hover:cursor-pointer max-[740px]:text-[15px] border-solid ${
            jobPostsType == "appliedJobPosts"
              ? "text-[#0A73BE] border-[#0A73BE] border-b-2"
              : "text-[#6B6B6B]"
          }`}
          onClick={() => {
            dispatch(setType("appliedJobPosts"));
          }}
        >
          <span>
            <HiOutlineClipboardDocumentList className="text-xl" />
          </span>
          <span>Job Invites</span>
          <span>({appliedJobPostsCount || 0})</span>
        </article>
      </nav>
      <hr />
    </>
  );
}

export default Tab;
