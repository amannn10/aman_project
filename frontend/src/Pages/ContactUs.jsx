import React from 'react';

export const ContactUs = () => {
  return (
    <>
      <div className="mt-14 text-center text-4xl text-rs font-bold tracking-wider flex justify-center items-center">
        Contact Us
      </div>
      <div className="mt-10 w-[75%] mx-auto flex pt-4">
        <div className="w-[65%]">
          <input
            name="name"
            type="text"
            className=" h-12 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-full rounded-md placeholder:text-lg px-4 py-2 outline-none"
            placeholder="Name"
            required
          />
          <input
            name="subject"
            type="text"
            className="mt-7 h-12 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-full rounded-md placeholder:text-lg px-4 py-2 outline-none"
            placeholder="Subject"
            required
          />
          <input
            name="email"
            type="text"
            className="mt-7 h-12 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-full rounded-md placeholder:text-lg px-4 py-2 outline-none"
            placeholder="E-mail"
            required
          />
          <textarea
            rows={8}
            name="msg"
            className="mt-7 ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 w-full rounded-md placeholder:text-lg px-4 py-2 outline-none"
            placeholder="How can we help you?"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 font-semibold text-white rounded-md py-2 px-3 tracking-wider mt-3 hover:bg-blue-600"
          >
            Send
          </button>
        </div>
        <div className="text-center w-[35%]">
          <div className="mt-2 text-lg text-nav tracking-wider font-bold">
            Address:
          </div>
          <div className="font-medium text-gray-500 leading-relaxed pt-2">
            Shop No.07,RS ENGINEERING WORK's <br />
            pvt Ltd, Laxmi Nagar,Link Road,
            <br />
            Goregaon(West),Mumbai-400090 <br />
            Landmark:Near Vinay Canteen <br />
            Phone: +91-8652765281 <br />
          </div>
          <div className="mt-10 text-lg text-nav tracking-wider font-bold">
            Google-map
          </div>
          <div className="mt-2 w-max mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7991748531413!2d72.82906921485268!3d19.160266087039656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e060409557%3A0x285fe7ce17cae8f6!2sR.%20S.%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1606559210539!5m2!1sen!2sin"
              width="200"
              height="180"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
