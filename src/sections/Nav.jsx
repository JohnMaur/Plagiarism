import { useState } from "react";
import { navLinks } from "../constant";
import { hamburgerIcon, profile, logout } from "../assets/icons";
import { Link } from "react-router-dom";
import { useUser } from "../(auth)/UserContext";

const Nav = () => {
  const { user, logout } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("Toggling dropdown:", !isDropdownOpen);
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    logout(); // Call logout function from context
  };

  return (
    <header className="bg-white py-8 fixed z-10 w-full lg:padding-x shadow-sm">
      <nav className="flex justify-between">
        {/* Logo */}
        <div className="max-lg:px-10">LOGO</div>

        {/* Nav Links (visible on large screens) */}
        {user ? (
          <div className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
            <Link
              to="/plagiarism-checker"
              className="leading-normal text-lg text-slate-gray font-semibold hover:text-blue-600 active:opacity-45"
            >
              Plagiarism Checker
            </Link>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={toggleDropdown} // Toggle dropdown when clicked
            >
              <p className="text-base font-semibold">{user.username}</p>
              <div className="p-2 bg-[#f4f4f4] rounded-full">
                <img src={profile} alt="Profile Icon" className="w-4 h-4" />
              </div>
            </div>

            {/* Profile Dropdown */}
            {isDropdownOpen && (
              <div
                className="absolute right-2 top-[3.7rem]
               mt-2 bg-white shadow-lg rounded-lg p-4 w-48 border-[1px] border-solid border-gray-300 max-lg:hidden"
              >
                <ul>
                  <li className="p-2 text-sm text-slate-600 cursor-pointer hover:bg-slate-200 rounded-lg">
                    <Link
                      to="/profile"
                      className="flex items-center gap-2"
                      onClick={closeDropdown} // Close dropdown on navigation
                    >
                      <img src={profile} alt="Profile Icon" className="w-4 h-4" />
                      Profile
                    </Link>
                  </li>
                  <li
                    className="p-2 text-sm text-slate-600 cursor-pointer hover:bg-slate-200 rounded-lg flex items-center gap-2"
                    onClick={() => {
                      handleLogout();
                      closeDropdown();
                    }}
                  >
                    <img src={logout} alt="Logout Icon" className="w-4 h-4" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden z-10">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="leading-normal text-lg text-slate-gray font-semibold hover:text-blue-600 active:opacity-45"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

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
        {user ? (
          isDropdownOpen && (
            <div className="absolute top-20 bg-white shadow-lg rounded-lg p-4 flex-1 hidden max-lg:block w-full border-[1px] border-solid border-gray-300">
              <ul>
                <li className="p-3 text-sm text-slate-600 cursor-pointer hover:bg-slate-200 rounded-lg">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2"
                    onClick={closeDropdown} // Close dropdown on navigation
                  >
                    <img src={profile} alt="Profile Icon" className="w-4 h-4" />
                    Profile
                  </Link>
                </li>
                <li
                  className="p-2 text-sm text-slate-600 cursor-pointer hover:bg-slate-200 rounded-lg flex items-center gap-2"
                  onClick={() => {
                    handleLogout();
                    closeDropdown();
                  }}
                >
                  <img src={logout} alt="Logout Icon" className="w-4 h-4" />
                  Logout
                </li>
              </ul>
            </div>
          )) :
          (isDropdownOpen && (
            <div className="absolute top-20 bg-white shadow-lg rounded-lg p-4 flex-1 hidden max-lg:block w-full border-[1px] border-solid border-gray-300">
              <ul className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    to={item.href}
                    className="leading-normal text-lg text-slate-gray font-semibold rounded-lg w-full hover:bg-slate-300 active:opacity-45 cursor-pointer p-3"
                    onClick={closeDropdown} // Close dropdown on navigation
                  >
                    {item.label}
                  </Link>
                ))}
              </ul>
            </div>
          )
          )}
      </nav>
    </header>
  );
};

export default Nav;
