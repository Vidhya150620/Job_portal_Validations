import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { organizationAPI } from "../../features/organizations/organizationsSlice";
import CompanyCard from "./OrganizationCard";
import Skeleton from "./Skeleton";

const OrganizationView: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: organizationsData,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.organizations);

  useEffect(() => {
    dispatch(organizationAPI());
  }, [dispatch]);

  if (error) {
    return (
      <p className="text-red-500">
        Failed to load organizations. Please try again later.
      </p>
    );
  }

  return (
    <section className="my-10">
      <p className="text-left my-5 font-medium text-md">Showing 12 companies</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 my-5">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => <Skeleton key={i} />)
          : organizationsData
              ?.slice(0, 12)
              .map((data: {}, index: number) => (
                <CompanyCard key={index} data={data} />
              ))}
      </div>
    </section>
  );
};

export default OrganizationView;
