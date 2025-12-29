import { NavLink } from "react-router";
import logo from "/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "lucide-react";

const Navbar = () => {
  // Active link styling function
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "relative font-semibold text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded-full"
      : "relative font-medium text-base-content/70 hover:text-primary transition-colors duration-300";
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/departments" className={getNavLinkClass}>
          Departments
        </NavLink>
      </li>
      <li>
        <NavLink to="/gallery" className={getNavLinkClass}>
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to="/map" className={getNavLinkClass}>
          Map
        </NavLink>
      </li>
      <li>
        <NavLink to="/others" className={getNavLinkClass}>
          Others
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="flex justify-between w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-xl flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <img src={logo} className="w-10 h-10" alt="logo" />
            <span className="font-bold text-primary">ILMS</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/sajid-7756/Institute-Management-Location-System-ILMS"
            target="_blank"
            className="btn btn-primary hover:scale-105 transition-transform duration-300"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
