import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-medium text-2xl">Green Pulse</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="relative pt-3 font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</a>
          <a href="#about" className="relative pt-3 font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ">About</a>
          <a href="#impact" className="relative pt-3 font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ">Impact</a>
          <a href="#solutions" className="relative pt-3 font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ">Solutions</a>
          <a href="#contact" className="relative pt-3 font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ">Contact</a>
          <Toggle />
        </div>
        
        <button className="md:hidden transition" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      <div
        className={`z-100 md:hidden flex flex-col space-y-4 mt-15 p-4 shadow-xl rounded-sm bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-2/3`}
      >
        <a href="#home" className="font-medium hover:border-solid hover:text-transparent ">Home</a>
        <a href="#about" className="font-medium hover:border-solid hover:text-transparent ">About</a>
        <a href="#impact" className="font-medium hover:border-solid hover:text-transparent ">Impact</a>
        <a href="#solutions" className="font-medium hover:border-solid hover:text-transparent ">Solutions</a>
        <a href="#contact" className="font-medium hover:border-solid hover:text-transparent ">Contact</a>
        <br />
        <br />
        <a href="">source code</a>
        <a href="">social media</a>
        <a href="">hack2skill profile</a>
        <Toggle />
      </div>
    </nav>
  );
};

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="theme bg-gray-400 rounded-full w-19 h-9 sm:w-22 sm:h-12 flex items-center p-1 relative cursor-pointer" onClick={toggleTheme}>
      <div
        className={`w-7 h-7 sm:w-10 sm:h-10 bg-amber-300 rounded-full flex justify-center items-center transition-all duration-300 transform ${darkMode ? "translate-x-10 sm:translate-x-[2.5rem]" : "translate-x-0"}`}>
        <FontAwesomeIcon className="text-lg sm:text-2xl" icon={darkMode ? faMoon : faSun} />
      </div>
    </div>
  );
};

export default Navbar;
