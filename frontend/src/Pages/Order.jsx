import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { LoginUser, PlaceOrder } from '../Api/User';
export const Order = () => {
  const data = [
    {
      img: 'p1.jpeg',
      title: 'Gas Stovetops',
      description:
        'Our list of top ten products is here to help you find the best cookware for gas stoves for your home .',
      size: 'Medium',
      star: '4',
    },
    {
      img: 'p2.jpeg',
      title: 'Potato Peeler Machine',
      description:
        'We are one of the leading Manufacturers and Exporters of Potato Chips Processing Machine .',
      size: 'Large',
      star: '5',
    },
    {
      img: 'p3.jpeg',
      title: 'Noodle Making Machine',
      description:
        'Find here Noodle Machine ,As a automatic instant noodle making machine supplier .',
      size: 'Large',
      star: '4.5',
    },
    {
      img: 'p4.jpeg',
      title: 'Idly Streamer',
      description:
        'The Idli Steamer makes cooking easier and enables less time consumption. and it is very easy to use.',
      size: 'Medium',
      star: '4',
    },
  ];
  const { id } = useParams();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  const handleOrder = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem('email')) {
      navigate('/login');
    } else {
      setLoad(true);
      setError('');
      const data = {
        Email: localStorage.getItem('email'),
        Username: localStorage.getItem('name'),
        Product_id: id,
        Building: e.target.Building.value,
        Street: e.target.Street.value,
        Area: e.target.Area.value,
        City: e.target.City.value,
        State: e.target.State.value,
        Pincode: e.target.Pincode.value,
      };
      console.log(data);
      const response = await PlaceOrder(data);
      console.log(response.data);
      if (response.status == 200) {
        setLoad(false);
        alert('Order Placed Successfully');
        navigate('/products');
      } else {
        setError(response.data.message);
      }
    }
    console.log(error);
    setLoad(false);
  };

  return (
    <>
      <div className="mx-20 my-20 pb-10 rounded bg-prod pl-28 pr-10">
        <form onSubmit={handleOrder}>
          <div className="tracking-wider  pt-10 text-3xl text-white">
            Place Order Now
          </div>
          <div className="mt-5 flex">
            <div className="">
              <img
                src={require(`../Images/${data[id].img}`)}
                className="w-60 h-60"
              />
            </div>
            <div className="">
              <div className="ml-14 pt-5 text-2xl text-white font-medium tracking-wider">
                Product Name : {data[id].title}
              </div>
              <div className="ml-14 pt-5 text-xl text-white tracking-wider">
                Size : {data[id].size}
              </div>
              <div className="ml-14 pt-2 text-xl text-white tracking-wider">
                Quantity : 1
              </div>
              <div className="flex items-center ml-14 pt-2 text-xl text-white tracking-wider">
                Quanlity : {data[id].star}
              </div>
              <div className="ml-14 pt-2 text-xl text-white tracking-wider">
                Description : {data[id].description}
              </div>
            </div>
          </div>
          <div className="mt-10 text-white text-2xl">Shipping Details : </div>
          <div className="mt-5 flex gap-20 w-[85%]">
            <input
              name="Building"
              type="text"
              className=" h-10 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-[50%] rounded placeholder:text-[1.1rem] px-4 py-[0.3rem] outline-none"
              placeholder="Flat/No,Building*"
              required
            />
            <input
              name="Street"
              type="text"
              className=" h-10 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-[50%] rounded placeholder:text-[1.1rem] px-4 py-[0.3rem] outline-none"
              placeholder="Street*"
              required
            />
          </div>
          <div className="mt-5 flex gap-20 w-[85%]">
            <input
              name="Area"
              type="text"
              className=" h-10 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-[50%] rounded placeholder:text-[1.1rem] px-4 py-[0.3rem] outline-none"
              placeholder="Area*"
              required
            />
            <input
              name="City"
              type="text"
              className=" h-10 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-[50%] rounded placeholder:text-[1.1rem] px-4 py-[0.3rem] outline-none"
              placeholder="City*"
              required
            />
          </div>
          <div className="mt-5 flex gap-20 w-[85%]">
            <input
              name="State"
              type="text"
              className=" h-10 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-[50%] rounded placeholder:text-[1.1rem] px-4 py-[0.3rem] outline-none"
              placeholder="State*"
              required
            />
            <input
              name="Pincode"
              type="text"
              className=" h-10 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-[50%] rounded placeholder:text-[1.1rem] px-4 py-[0.3rem] outline-none"
              placeholder="Pincode*"
              required
            />
          </div>
          <button
            type="submit"
            disabled={load}
            className={`${
              load
                ? 'py-3 items-center flex justify-center cursor-not-allowed'
                : ''
            } text-white bg-blue-500 rounded-md hover:underline hover:underline-offset-2 font-medium py-2 px-3 w-max ml-[38%] mt-10`}
          >
            {load && (
              <svg
                class="mr-3 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  // strokeWidth="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {load ? 'Placing Order...' : 'Place Order'}
          </button>
          {/* <div className="cursor-pointer ">
            Place Order
          </div> */}
        </form>
      </div>
    </>
  );
};
