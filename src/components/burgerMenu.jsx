import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function BurgerMenu({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".burger-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className={`${className}`}>
      <button 
        className="p-2 md:hidden focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-[#242424] shadow-lg p-4 flex flex-col items-start gap-4 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col gap-4">
          <Link to="/" className="text-lg font-medium">Home</Link>
          <Link to="/resume" className="text-lg font-medium">Resume</Link>
          <Link to="/work" className="text-lg font-medium">Work</Link>
        </nav>
      </div>
    </div>
  );
}

BurgerMenu.propTypes = {
    className: PropTypes.string
};
