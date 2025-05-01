import React from "react";
import { navlinks } from "../data/data";
import { Circle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <a href="#home" className="flex flex-row items-center gap-2">
        {isScrolled ? (
          <img src="/logoWhite.svg" alt="Logo" className="w-[100px]" />
        ) : (
          <img src="/logoBlack.svg" alt="Logo" className="w-[100px]" />
        )}
      </a >

      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
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
        <div className="md:hidden fixed top-[90px] left-0 w-full bg-white text-black shadow-lg z-40">
          <ul className="flex flex-col items-start px-5 py-4">
            {navlinks.map((link) => (
              <a
                key={link.label}
                href={link.link}
                className="flex flex-row gap-2 items-center py-2 hover:text-orange-500 transition duration-300 w-full"
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