import { useParams } from "react-router-dom";
import About from "./About";
import Gallery from "./Gallery";
import Info from "./Info";
import MoreInformation from "./MoreInformation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { fetchOrganizationViewAPI } from "../../features/organizations/organizationViewSlice";

export default function CompanyOverview() {
  const { organizationId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchOrganizationViewAPI(`${organizationId}`));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Info />
      <About />
      <Gallery />
      <MoreInformation />
    </>
  );
}
