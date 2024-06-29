import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../public/hospi.png";
import { Button } from "./ui/button";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* logo  */}

        <h1 className="flex items-center justify-center">
          <img src={logo} className="w-12 h-12 md:w-16 md:h-16 rounded-full" alt="" />
          <p className="font-bold text-2xl md:text-3xl">MedFlow</p>
        </h1>

        {/* navList */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.path}
                className="font-medium text-lg relative group"
              >
                {link.name}
                <span
                  className={`h-[2px] inline-block bg-primaryTeal absolute left-0 -bottom-1 group-hover:w-full transition-all ease-in duration-300 ${
                    pathname === link.path ? "w-full" : "w-0"
                  }`}
                ></span>
              </NavLink>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link className="">
            <Button className="bg-primaryTeal hover:bg-primaryDark focus:outline focus:outline-teal-400 transition-all ease-in">
              Make Appointment
            </Button>
          </Link>
        </div>


        <p className="md:hidden">Menu</p>

      </div>
    </div>
  );
};

export default Navbar;
