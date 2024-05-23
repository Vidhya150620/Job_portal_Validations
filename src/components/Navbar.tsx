import logoImage from "../assets/images/logo.svg";
import menuIcon from "../assets/images/menu-alt-1-svgrepo-com 1.png";
import avatorIcon from "../assets/images/avatar-default-svgrepo-com 1.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <main className="bg-white w-[100%] sticky top-0 z-[1]" key="navbar">
      <nav
        key="id"
        className="flex mx-auto max-w-screen-xl py-5 justify-between items-center gap-4 w-[95%] "
      >
        <img
          className="object-fit-cover max-w-40"
          src={logoImage}
          alt="Logo"
        ></img>
        <div className="flex gap-10 items-center">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-sans font-semibold cursor-pointer hidden sm:block"
                : "text-[#6B6B6B] font-sans font-medium cursor-pointer hidden sm:block"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-sans font-semibold cursor-pointer hidden sm:block"
                : "text-[#6B6B6B] font-sans font-medium cursor-pointer hidden sm:block"
            }
          >
            JOBS
          </NavLink>
          <NavLink
            to="/organizations"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-sans font-semibold cursor-pointer hidden sm:block"
                : "text-[#6B6B6B] font-sans font-medium cursor-pointer hidden sm:block"
            }
          >
            ORGANIZATIONS
          </NavLink>
          <label
            className="w-20 h-8 border border-[#DBDBDB]-600 relative rounded-[16px] flex items-center cursor-pointer"
            htmlFor="my-drawer-4"
          >
            <div>
              <img src={menuIcon} alt="menu" className="px-2"></img>
            </div>
            <div className="w-6 h-6 bg-[#DBDBDB] rounded-xl absolute right-2 ">
              <img src={avatorIcon} className="mx-auto mt-1"></img>
            </div>
          </label>
        </div>
      </nav>
    </main>
  );
}
