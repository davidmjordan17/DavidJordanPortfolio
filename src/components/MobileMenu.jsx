import { useEffect } from "react";
import { useState } from "react";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
  
  return (
    <div className=
    {`fixed top-0 left-0 w-1/4 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
      ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
    `}>
      
      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-2xl focus:online-none cursor-pointer"
        aria-label="Close Menu"
        >
        &times;
      </button>

      <a href="#home" onClick={() => setMenuOpen(false)} 
      className={`text-3xl my-2 font-semibold text-red-500 transform transition-transform duration-300 hover:text-black
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}>
        Home
      </a>
      
      <a href="#about" onClick={() => setMenuOpen(false)} className={`text-3xl my-2 font-semibold text-red-500 transform transition-transform duration-300  hover:text-black
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}>About
      </a>
      
      <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-3xl my-2 font-semibold text-red-500 transform transition-transform duration-300  hover:text-black
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}>
        Projects
      </a>
      
      <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-3xl my-2 font-semibold text-red-500 transform transition-transform duration-300  hover:text-black
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}>
        Contact
      </a>

    </div>
  );
};