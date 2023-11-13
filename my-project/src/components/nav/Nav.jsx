// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-custom-green to-custom-light-green border-b-8 border-custom-tan p-4">
      <article className="container mx-auto">
        <section className="flex items-center justify-start">
          <h1 className="text-white text-lg font-bold">My Navbar</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300 ps-8">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 ps-1">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 ps-1">
                About the project
              </a>
            </li>
            
            
          </ul>
        </section>
      </article>
    </nav>
  );
};

export default Navbar;
