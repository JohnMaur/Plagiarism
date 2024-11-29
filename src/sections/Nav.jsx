import { useState } from "react";
import { navLinks } from "../constant";
import { hamburgerIcon } from "../assets/icons";
import { Link } from "react-router-dom"; // import Link

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-white py-8 fixed z-10 w-full lg:padding-x shadow-sm">
      <nav className="flex justify-between">
        {/* Logo */}
        <div className="max-lg:px-10">LOGO</div>

        {/* Nav Links (visible on large screens) */}
        <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href} // use Link component instead of <a>
                className="leading-normal text-lg text-slate-gray font-semibold hover:text-blue-600 active:opacity-45"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (visible on small screens) */}
        <div
          className="hidden max-lg:block hover:bg-slate-400 cursor-pointer max-lg:mx-10"
          onClick={toggleDropdown}
        >
          <img
            src={hamburgerIcon}
            width={25}
            height={25}
            alt="Hamburger logo"
          />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-20 bg-white shadow-lg rounded-lg p-4 flex-1 hidden max-lg:block w-full border-[1px] border-solid border-gray-300">
            <ul className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <div className="hover:bg-slate-300 active:opacity-45 cursor-pointer p-3 rounded-lg">
                    <Link
                      to={item.href} // use Link here as well
                      className="leading-normal text-lg text-slate-gray font-semibold"
                    >
                      {item.label}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
