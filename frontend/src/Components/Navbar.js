import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export const Navbar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(localStorage.getItem('name'));
  // console.log('cas', login);

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
        {/* <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
          <Link to="/services">Services</Link>
        </div> */}
        <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
          <Link to="/products">Products</Link>
        </div>
        <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
          <Link to="/contact-us">Contact</Link>
        </div>
        {localStorage.getItem('email') ? (
          <>
            <div className="text-white font-bold flex items-center">
              <FaUserCircle className="mr-3" />
              {localStorage.getItem('name')}
            </div>
            <div
              className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8"
              onClick={() => {
                localStorage.removeItem('email');
                localStorage.removeItem('name');
                navigate('/');
              }}
            >
              Logout
            </div>
          </>
        ) : (
          <>
            <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
              <Link to="/register">Registration</Link>
            </div>
            <div className="cursor-pointer hover:text-white hover:font-bold hover:underline hover:underline-offset-8">
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
