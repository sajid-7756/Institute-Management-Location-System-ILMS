import { CiBank } from "react-icons/ci";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/departments'}>Departments</NavLink>
      </li>
      <li>
        <NavLink to={'/gallery'}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={'/map'}>Map</NavLink>
      </li>
      <li>
        <NavLink to={'/others'}>Others</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex container mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={'/'} className="text-xl flex items-center gap-2">
            <CiBank size={30} />{" "}
            <span className="font-bold text-primary">ILMS</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
