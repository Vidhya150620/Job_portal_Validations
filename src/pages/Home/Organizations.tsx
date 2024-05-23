import { useEffect } from "react";
import { Link } from "react-router-dom";
import OrganizationCard from "../Organizations/OrganizationCard";
import CarouselControlsInside from "../../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { organizationAPI } from "../../features/organizations/organizationsSlice";
import CardSkeletonCarousel from "../../components/CardSkeletonCarousel";

function Organizations() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: organizationsData,
    isLoading,
    error,
    message,
  } = useSelector((state: RootState) => state.organizations);

  useEffect(() => {
    dispatch(organizationAPI());
  }, [dispatch]);

  if (error) {
    return <p className="text-red-500">{message}</p>;
  }

  return (
    <section className="my-[30px] bg-[#FFFFFF] p-5 rounded-xl">
      <div className="flex justify-between mb-5">
        <p className="font-semibold text-[#303030]">Companies</p>
        <Link
          to="/organizations"
          className="font-semibold text-[#6B6B6B] hover:text-primary cursor-pointer"
        >
          View all
        </Link>
      </div>
      {isLoading ? (
        <CardSkeletonCarousel />
      ) : (
        <CarouselControlsInside key={"organizations"} carousel="organizations">
          {organizationsData?.slice(0, 12).map((data, i) => (
            <OrganizationCard key={i} data={data} />
          ))}
        </CarouselControlsInside>
      )}
    </section>
  );
}

export default Organizations;
