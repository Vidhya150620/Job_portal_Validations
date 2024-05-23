import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
import RoutesView from "../pages/Home/RoutesView";
import { MdWorkOutline } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../features/auth/authSlice";
import { SiTicktick } from "react-icons/si";

interface NavLinkData {
  link: string;
  label: string;
  icon: JSX.Element;
  onClick?: Function;
}

const navLinksData: NavLinkData[] = [
  {
    link: "/home",
    label: "HOME",
    icon: <GoHome className="text-xl" />,
  },
  {
    link: "/jobs",
    label: "JOBS",
    icon: <MdWorkOutline className="text-xl" />,
  },
  {
    link: "/organizations",
    label: "ORGANIZATIONS",
    icon: <GoHome className="text-xl" />,
  },
  {
    link: "/applied-jobs",
    label: "APPLIED JOBS",
    icon: <SiTicktick className="text-xl" />,
  },
  {
    link: "/",
    label: "LOGOUT",
    icon: <BiLogOut className="text-xl" />,
    onClick: () => {
      logout();
    },
  },
];

export default function Sidebar() {
  return (
    <main className="sticky top-24 bg-[#FFFFFF] w-[25%] rounded-xl p-4 max-lg:hidden self-start">
      <section className="flex flex-col items-center gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApB5io9duZWZCayRPugYdGtvMguDZe2bBNW1pbmfS0A&s"
          alt="avatar"
          className="h-[100px] w-[100px] rounded-full border flex"
        />
        <p className="text-lg text-black-700 font-semibold my-0">
          Mohamed Ijass
        </p>
        <p className="text-email-600 text-sm my-0">ijass.ocean@gmail.com</p>
        <p className="text-email-600 text-xs mt-[15px]">Last updated 14d ago</p>
        <button
          type="button"
          className="bg-[#0A73BE] text-white rounded-full p-[11px] text-[12px]"
        >
          Complete profile
        </button>
      </section>

      <RoutesView>
        {navLinksData.map((navLink, index) => (
          <NavLink
            // className=""
            className={({ isActive }) =>
              isActive
                ? "text-primary bg-blue-100 my-[10px] cursor-pointer flex items-center gap-2 pl-[15px] rounded-full p-[11px] text-[15px] font-medium"
                : "my-[10px] cursor-pointer flex items-center gap-2 pl-[15px] rounded-full p-[11px] text-[15px] font-medium text-[#6B6B6B]"
            }
            key={index}
            to={navLink.link}
            onClick={() => navLink.onClick && navLink.onClick()} // Check if onClick exists before calling
          >
            {navLink.icon}
            {navLink.label}
          </NavLink>
        ))}
      </RoutesView>
    </main>
  );
}
