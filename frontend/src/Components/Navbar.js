import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="py-4 px-20 flex justify-between bg-nav items-center font-medium tracking-wider ">
      <div className="flex items-center">
        <div className="text-2xl uppercase font-semibold tracking-widest text-white cursor-pointer">
          <Link to="/">RS Engineering work's</Link>
        </div>
        <div className="text-title ml-5 pt-1 cursor-pointer">
          Goregoan (West)
        </div>
      </div>
      <div className="flex gap-10 text-title font-semibold tracking-wider items-center ml-16">
        <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
          <Link to="/">Home</Link>
        </div>
        <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
          <Link to="/services">Services</Link>
        </div>
        <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
          <Link to="/products">Products</Link>
        </div>
        <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
          <Link to="/register">Registration</Link>
        </div>
        <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
          <Link to="/login">Login</Link>
        </div>
        <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
          <Link to="/contact-us">Contact</Link>
        </div>
      </div>
    </div>
  );
};
