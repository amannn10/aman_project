import React from 'react';
import { Link } from 'react-router-dom';

export const Products = () => {
  return (
    <>
      <div className="mt-20 pb-10 bg-prod">
        <div className="tracking-wider text-center pt-10 text-3xl text-white">
          Latest Products
        </div>
        <div className="mt-10 grid grid-cols-4 gap-10 mx-auto w-[80%]">
          <div className="text-center bg-white rounded shadow px-5 pt-5 pb-3">
            <img
              src={require('../Images/p1.jpeg')}
              className="w-52 h-52 mx-auto"
            />
            <div className="text-nav text-xl font-medium tracking-wider">
              Gas Stovetops
            </div>
            <div className="mt-2 tracking-wider leading-relaxed">
              Our list of top ten products is here to help you find the best
              cookware for gas stoves for your home .
            </div>
            <div className="cursor-pointer text-white bg-blue-600 rounded-md hover:underline hover:underline-offset-2 py-2 px-3 w-max mx-auto mt-3">
              <Link to="/products/0">Order Now</Link>
            </div>
          </div>
          <div className="text-center bg-white rounded shadow px-5 pt-5">
            <img
              src={require('../Images/p2.jpeg')}
              className="w-52 h-52 mx-auto"
            />
            <div className="text-nav text-xl font-medium tracking-wider">
              Potato Peeler Machine
            </div>
            <div className="mt-2 tracking-wider leading-relaxed">
              We are one of the leading Manufacturers and Exporters of Potato
              Chips Processing Machine .
            </div>
            <div className="cursor-pointer text-white bg-blue-600 rounded-md hover:underline hover:underline-offset-2 py-2 px-3 w-max mx-auto mt-3">
              <Link to="/products/1">Order Now</Link>
            </div>
          </div>
          <div className="text-center bg-white rounded shadow px-5 pt-5">
            <img
              src={require('../Images/p3.jpeg')}
              className="w-52 h-52 mx-auto"
            />
            <div className="text-nav text-xl font-medium tracking-wider">
              Noodle Making Machine
            </div>
            <div className="mt-2 tracking-wider leading-relaxed">
              Find here Noodle Machine ,As a automatic instant noodle making
              machine supplier .
            </div>
            <div className="cursor-pointer text-white bg-blue-600 rounded-md hover:underline hover:underline-offset-2 py-2 px-3 w-max mx-auto mt-3">
              <Link to="/products/2">Order Now</Link>
            </div>
          </div>
          <div className="text-center bg-white rounded shadow px-5 pt-5">
            <img
              src={require('../Images/p4.jpeg')}
              className="w-52 h-52 mx-auto"
            />
            <div className="text-nav text-xl font-medium tracking-wider">
              Idly Streamer
            </div>
            <div className="mt-2 tracking-wider leading-relaxed">
              The Idli Steamer makes cooking easier and enables less time
              consumption. and it is very easy to use.
            </div>
            <div className="cursor-pointer text-white bg-blue-600 rounded-md hover:underline hover:underline-offset-2 py-2 px-3 w-max mx-auto mt-3">
              <Link to="/products/3">Order Now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
