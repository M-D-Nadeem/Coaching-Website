import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src="/images/logo.jpeg" alt="Logo" className="w-12 h-12" />
          <h1 
            className="text-3xl font-extrabold text-[#0A1F44] tracking-wide" 
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "1px" }}
          >
            Vikas <span className="font-semibold">Gurukulam</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>
          <Link to="/fee" className="hover:text-blue-600">Fee Structure</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
          <Link to="/signup" className="hover:text-blue-600">Signup</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/courses" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/fee" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Fee Structure</Link>
          <Link to="/login" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Signup</Link>
          <Link to="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
