import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
      <h1 className="font-medium text-2xl">Green Pulse</h1>
        <div className="hidden md:flex space-x-6">
        <a href="#home" className="relative font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</a>
          <a href="#about" className="relative font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ">About</a>
          <a href="#impact" className="relative font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ">Impact</a>
          <a href="#solutions" className="relative font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ">Solutions</a>
          <a href="#contact" className="relative font-medium after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ">Contact</a>
        </div>
        <button className="md:hidden transition" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
      </div>
      
      <div
        className={`md:hidden flex flex-col space-y-4 mt-15 p-4 shadow-xl rounded-sm bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-2/3`}
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
      </div>
    </nav>
  );
};

export default Navbar;
