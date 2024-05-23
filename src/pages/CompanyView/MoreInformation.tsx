import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const MoreInformation: React.FC = () => {
  const organizationData = useSelector(
    (state: RootState) => state.organizationView
  );

  const teamSize = organizationData.data?.teamSize || "";
  const websiteLink = organizationData.data?.websiteLink;
  const founded = organizationData.data?.foundedYear;
  const location = organizationData.data?.location;
  const type = organizationData.data?.type || "private";

  return (
    <main className="bg-white  p-[30px] mt-[21px]">
      <p className="font-semibold text-left text-[18px] max-[550px]:text-[17px]">
        More Information
      </p>
      <div className="flex mt-[15px] gap-[188px] flex-wrap max-[950px]:gap-[170px] max-[870px]:gap-[80px] max-[700px]:gap-[10px]">
        <div>
          <p className="text-left">
            <span className="font-semibold max-[550px]:text-[14px]">
              Type: <span className="font-normal">{` ${type}`}</span>
            </span>
          </p>
          <p className="text-left  mt-[6px]">
            <span className="font-semibold max-[550px]:text-[14px]">
              Company Size:{" "}
              <span className="font-normal">{` ${teamSize}`}</span>
            </span>
          </p>
          <p className="text-left  mt-[6px]">
            <span className="font-semibold max-[550px]:text-[14px]">
              Website: <span className="font-normal">{` ${websiteLink}`}</span>
            </span>
          </p>
        </div>
        <div className=" flex flex-col items-baseline ml-[-15px]">
          <p className="ml-[23px] max-[700px]:ml-[15px] text-left">
            <span className="font-semibold  max-[550px]:text-[14px]">
              Founded: <span className="font-normal">{` ${founded}`}</span>
            </span>
          </p>
          <p className=" mt-[6px]">
            <span className="font-semibold max-[550px]:text-[14px]">
              Location: <span className="font-normal">{` ${location}`}</span>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default MoreInformation;
