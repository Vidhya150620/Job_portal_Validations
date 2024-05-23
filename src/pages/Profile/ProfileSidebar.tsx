import RoutesView from "../Home/RoutesView";
import { MdEditDocument } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BiSolidLeftArrow } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";

const navLinksData = [
  { link: "/", label: "PREVIEW", icon: <VscPreview className="text-xl" /> },
  {
    link: "/jobs",
    label: "EDIT",
    icon: <MdEditDocument className="text-xl" />,
  },
  // Add more NavLink data objects as needed
];

function ProfileSidebar() {
  return (
    <main className="sticky top-24 bg-[#FFFFFF] rounded-xl p-4 max-xl:hidden self-start min-w-[20%]">
      <NavLink to="" className="flex gap-2 items-center">
        <BiSolidLeftArrow className="text-xl" />
        Go Back
      </NavLink>
      <p className="my-5 text-md">Profile</p>
      <hr />
      <RoutesView>
        {navLinksData.map((navLink, index) => (
          <NavLink
            key={index}
            to={navLink.link}
            className="my-1 cursor-pointer flex items-center gap-2 pl-[15px] rounded-full p-[11px] text-[15px] font-medium text-[#6B6B6B] aria-[current=page]:bg-blue-100 aria-[current=page]:text-primary aria-[current=page]:"
          >
            {navLink.icon}
            {navLink.label}
          </NavLink>
        ))}
      </RoutesView>
    </main>
  );
}

export default ProfileSidebar;
