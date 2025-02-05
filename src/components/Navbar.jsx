import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white shadow-md">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-2xl font-bold">Balaji forest retreat</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/adventure" className="hover:underline">Adventure</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
