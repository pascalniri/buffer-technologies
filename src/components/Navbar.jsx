import React from "react";
import { navlinks } from "../data/data";
import { Circle, Menu, X } from "lucide-react"; // Added Menu icon
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex flex-row justify-between items-center px-[5%] py-5 fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex flex-row items-center gap-2">
        {
          isScrolled ? 
          <img src="/logoWhite.svg" alt="Logo" className="w-[200px]" /> :
          <img src="/logoBlack.svg" alt="Logo" className="w-[200px]" />
        }
      </div>

      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X strokeWidth={2} size={25} color="orange" />
        ) : (
          <Menu strokeWidth={2} size={25} color="orange" />
        )}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:block">
        <li className="flex flex-row gap-8 font-quicksand font-semibold">
          {navlinks.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className="flex flex-row gap-2 items-center hover:text-orange-500 transition duration-300"
            >
              <Circle strokeWidth={2} size={15} color="orange" />
              {link.label}
            </a>
          ))}
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 px-5 bg-white text-black shadow-lg">
          <ul className="flex flex-col items-start py-4">
            {navlinks.map((link) => (
              <a
                key={link.label}
                href={link.link}
                className="flex flex-row gap-2 items-center py-2 hover:text-orange-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Circle strokeWidth={1.5} size={15} color="orange" />
                {link.label}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
