import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="p-6 shadow-lg bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Green Pulse</h1>
        
        <div className="hidden md:flex space-x-6 items-center">
          <NavItem to="/" text="Home" />
          <NavItem to="/about" text="About" />
          <NavItem to="/impact" text="Impact" />
          <div className="relative font-semibold mt-2.5">
            <button 
              className="nav-link flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Solutions <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md list-none p-4">
              <DropdownItem to="/tracker" text="Carbon Footprint Tracker" />
              <DropdownItem to="/doomsday" text="Doomsday Clock" />
              <DropdownItem to="/causes" text="Causes Page" />
              <DropdownItem to="/news" text="News & Events" />
              <DropdownItem to="/rankings" text="Country Rankings" />
            </div>
            )}
          </div>
          <NavItem to="/contact" text="Contact" />
          <Toggle />
        </div>
        
        <button className="md:hidden transition" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 p-4 shadow-xl bg-white">
          <NavItem to="/" text="Home" />
          <NavItem to="/about" text="About" />
          <NavItem to="/impact" text="Impact" />
          <NavItem to="/solutions" text="Solutions" />
          <NavItem to="/contact" text="Contact" />
          <Toggle />
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, text }) => (
  <Link to={to} className="relative pt-3 font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
    {text}
  </Link>
);

const DropdownItem = ({ to, text }) => (
  <Link to={to} className="block px-4 py-2 hover:bg-gray-100">{text}</Link>
);

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="theme bg-gray-400 rounded-full w-19 h-9 sm:w-22 sm:h-12 flex items-center p-1 cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
      <div className={`w-7 h-7 sm:w-10 sm:h-10 bg-amber-300 rounded-full flex justify-center items-center transition-all duration-300 transform ${darkMode ? "translate-x-10 sm:translate-x-[2.5rem]" : "translate-x-0"}`}>
        <FontAwesomeIcon className="text-lg sm:text-2xl" icon={darkMode ? faMoon : faSun} />
      </div>
    </div>
  );
};

export default Navbar;