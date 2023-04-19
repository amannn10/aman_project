import React from 'react';

import { ContactUs } from '../Pages/ContactUs';
import { Link } from 'react-router-dom';
import { Products } from './Products';
import { Footer } from '../Components/Footer';
const Home = () => {
  return (
    <>
      {/* Welcome */}
      <div className="bg-welcome welcome w-full mt-2 px-10 py-5 relative">
        <div className="text-3xl font-bold text-footer tracking-wider">
          Welcome to RS ENGINEERING WORK'S
        </div>
        <div className="absolute">
          <div className="font-medium mt-2 text-nav tracking-wide">
            Customer's Happiness is our Aim
          </div>
          <div className="flex mt-5">
            <button className="tracking-wider text-white px-[0.65rem] py-[0.26rem] bg-green1 rounded-[0.25rem] hover:underline hover:underline-offset-4 font-medium">
              <Link to="/login">Login</Link>
            </button>
            <button className="ml-8 tracking-wider text-white px-[0.63rem] py-[0.26rem] bg-footer rounded-[0.25rem] hover:underline hover:underline-offset-4 font-medium">
              <Link to="/register">Sign Up</Link>
            </button>
          </div>
        </div>
        <div className="mt-8 ml-40 mb-5 flex items-center gap-28">
          <div className="">
            <img src={require('../Images/a3.png')} className="w-[23rem] h-72" />
          </div>
          <div className="">
            <img src={require('../Images/a2.png')} className="w-[24rem] h-72" />
          </div>
          <div className="ml-10">
            <img src={require('../Images/a1.png')} className="w-[20rem] h-72" />
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mt-10 pt-10 pb-8 w-[75%] mx-auto rounded-md bg-about shadow-md">
        <div className="font-bold tracking-wider uppercase text-2xl underline underline-offset-2 text-center text-rs">
          About RS Engineering
        </div>
        <div className="mt-5 font-medium leading-relaxed tracking-wide text-title px-10">
          <b className="text-nav"> RS Engineering Works </b>in{' '}
          <strong className="text-nav">
            {' '}
            Goregaon West Manage by
            <q> KISHAN BHAI </q>, RS{' '}
          </strong>
          is a top player in the category RS Engineering work's 32
          <strong className="text-nav"> Kitchen Equipment Dealers </strong>in
          the Mumbai. This wellknown establishment acts as a one-stop
          destination servicing customers both local and from other parts of
          Mumbai. Over the course of its journey, this business has established
          a firm foothold in it's industry. The belief that customer
          satisfaction is as important as their products and services, have
          helped this establishment garner a vast base of customers, which
          continues to grow by the day. This business employs individuals that
          are dedicated towards their respective roles and put in a lot of
          effort to achieve the common vision and larger goals of the company.
          In the near future, this business aims to expand its line of products
          and services and cater to a larger client base. In Mumbai, this
          establishment occupies a prominent location in Goregaon West. It is an
          effortless task in commuting to this establishment as there are
          various modes of transport readily available. It is known to provide
          top service in the following categories:
          <strong className="text-nav">Kitchen Equipment Dealers.</strong>
        </div>
      </div>

      {/* Services */}
      <div className="mt-14 pb-5 w-[75%] mx-auto">
        <div className="font-semibold tracking-wider uppercase text-[1.7rem] underline underline-offset-2 text-center text-nav">
          Our Services
        </div>
        <div className="mt-10 w-[80%] mx-auto flex justify-between">
          <div className="">
            <img src={require('../Images/electonics.png')} className=" h-28" />
            <div className="text-center font-semibold text-nav text-xl mt-4 tracking-wider">
              Electronic Appliances
            </div>
          </div>
          <div className="">
            <img src={require('../Images/products.png')} className=" h-28" />
            <div className="text-center font-semibold text-nav text-xl mt-4 tracking-wider">
              Products
            </div>
          </div>
          <div className="">
            <img src={require('../Images/fault.png')} className=" h-28" />
            <div className="text-center font-semibold text-nav text-xl mt-4 tracking-wider">
              Fault Repair
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <Products />

      {/* Contact Us */}
      <ContactUs />

      <Footer />
    </>
  );
};

export default Home;
