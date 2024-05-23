import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import UpdatePassword from "../../pages/ForgotPassword/UpdatePassword";
import ProtectedRoute from "../PrivateRoute";
import Home from "../../pages/Home/Home";
import CompanyLanding from "../../pages/Organizations/OrganizationLanding";
// import Companies from "../../pages/Organizations/Organization";
import CompanyView from "../../pages/CompanyView/CompanyView";
import CompanyOverview from "../../pages/CompanyView/CompanyOverview";
import JobPostView from "../../pages/jobView/JobPostView";
import Jobs from "../../pages/Jobs/Jobs";
import { Profile } from "../../pages/Profile/Profile";
import JobVacancy_Company from "../../pages/specificCompanyVacancy/Specific_CompanyJobVacancy";
import Cookies from "universal-cookie";
// import ProfilePerformance from "../../pages/ProfilePerformance/ProfilePerformance";
// import ProfileSetting from "../../pages/ProfileSettings/ProfileSetting";
import AppliedJobs from "../../pages/AppliedJobs/AppliedJobs";
import CandidateEdit from "../../pages/ProfileEdit/ProfileEdit";

// Function to get the access token from cookies
const getAccessToken = () => {
  const cookie = new Cookies();
  return cookie.get("token");
};

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return !!getAccessToken();
};

// Create the router configuration
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "update-password/:token",
    element: <UpdatePassword />,
  },
  {
    path: "/",
    element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/organizations",
        element: <CompanyLanding />,
      },
      {
        path: "/organizations/:organizationId",
        element: <CompanyView />,
        children: [
          {
            path: "overview",
            element: <CompanyOverview />,
          },
          // {
          //   path: "jobs",
          //   element: <Jobs />,
          // },
        ],
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:jobId",
        element: <JobPostView />,
      },

      { path: "/applied-jobs", element: <AppliedJobs /> },
      {
        path: "/profile",
        element: <Profile />,
      },
      // {
      //   path: "/profile-performance",
      //   element: <ProfilePerformance />,
      // },
      // {
      //   path: "/profile-setting",
      //   element: <ProfileSetting />,
      // },
      {
        path: "JobVacancy_Company",
        element: <JobVacancy_Company />,
      },
    ],
  },
  {
    path: "Candidate_Edit",
    element: <CandidateEdit />,
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);
