// src/components/Navbar.js
import React from "react";
import {Link} from "react-router-dom";
import navimage from "../../images/LOGOM.png"
const Navbar = () => {
  
  return (
    <nav className="bg-gradient-to-r from-custom-green to-custom-light-green border-b-8 border-custom-tan p-4">
    <article className="container mx-auto">
      <section className="flex items-center justify-start">
        <img className="max-w-xs" src={navimage} alt="" />
        <ul className="flex space-x-4 mt-14">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 ps-8">
              Home
            </Link>
          </li>
    
          <li>
            <Link to="/projectinfo" className="text-white hover:text-gray-300 ps-1">
              About the project
            </Link>
          </li>
        </ul>
      </section>
    </article>
  </nav>
  );
};

export default Navbar;
