import { Link, useNavigate } from "react-router-dom";

interface CardProps {
  data: Organization;
}
interface Organization {
  about: string;
  foundedYear: Number;
  gallery: [];
  imageSrc: string;
  jobPostLimit: Number;
  location: string;
  normalizedOrganizationName: string;
  organizationLogo: string;
  organizationName: string;
  recruiterLimit: Number;
  teamSize: string;
  updatedAt: string;
  websiteLink: string;
  _id: string;
}
const OrganizationCard: React.FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleRoute = (organizationId: string) => {
    navigate(`${organizationId}/overview`);
  };
  return (
    <main key={data._id} className="border p-5 rounded-3xl">
      <section className="flex items-center justify-between">
        <img
          src={data?.organizationLogo}
          width={50}
          className="object-contain"
          alt={data.organizationName}
        />
        <p className="bg-blue-100 rounded-md text-[#0A73BE] p-[7px] font-semibold text-[13px]">
          {data.teamSize} Jobs
        </p>
      </section>
      <p className="text-left font-semibold mt-[11px] text-[17px]">
        {data.organizationName}
      </p>
      <p className="text-left text-[14px] font-medium line-clamp-2">
        {data.about}
      </p>

      <section>
        <button
          type="button"
          className="border border-sky-600 p-2 rounded-md mt-3 text-sm font-medium text-sky-600"
          onClick={() => {
            handleRoute(data?._id);
          }}
        >
          View Overview
        </button>
      </section>
    </main>
  );
};

export default OrganizationCard;
