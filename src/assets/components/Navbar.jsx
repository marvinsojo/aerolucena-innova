import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoAeroLucena from "../../../public/img/LogoAeroLucena.png";
import LogoAeroLucenaWhite from "../../../public/img/LogoAeroLucenaWhite.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolly = window.scrollY;
      setIsScrolled(scrolly > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`${
        isScrolled ? "bg-electricblue opacity-90" : ""
      } transition duration-700 ease-in-out py-4 text-white text-xl fixed w-full flex md:justify-between items-center px-6 md:px-16 z-20`}
    >
      <div className="flex-grow md:flex-grow-0 flex justify-center md:justify-start">
        <Link to="/" className="w-20 transition-transform duration-200 hover:scale-105 active:scale-98 cursor-pointer">
          {isScrolled ? (
            <img src={LogoAeroLucenaWhite} alt="Logo" />
          ) : (
            <img src={LogoAeroLucena} alt="Logo" />
          )}
        </Link>
      </div>

      
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none absolute right-6 text-white text-2xl"
        aria-label="Menú"
        aria-expanded={isOpen}
      >
        <i className="fas fa-bars"></i>
      </button>

      <ul
        className={`${
          isOpen
            ? "flex flex-col absolute top-full left-0 w-full bg-electricblue opacity-90 py-4 items-center space-y-4 z-10"
            : "hidden md:flex flex-row gap-4"
        }`}
      >
        <li>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`border-b-4 transition-all duration-500 ease-in-out origin-left font-lato ${
              isActive("/") ? "border-carmine scale-x-100" : "border-transparent scale-x-0"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`border-b-4 transition-all duration-500 ease-in-out origin-left font-lato ${
              isActive("/about") ? "border-carmine scale-x-100" : "border-transparent scale-x-0"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`border-b-4 transition-all duration-500 ease-in-out origin-left font-lato ${
              isActive("/contact") ? "border-carmine scale-x-100" : "border-transparent scale-x-0"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;