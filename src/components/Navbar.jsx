import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    
    <nav className="fixed top-0 w-full z-40 border-y-indigo-100 backdrop-blur-lg border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-white"> 
            David <span className=" text-red-500">Jordan</span> 
          </a>

          <div className="w-7 h-5 relativ cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex item-center space-x-8 font-semibold text-white text-md">
            <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-red-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  
  );
};