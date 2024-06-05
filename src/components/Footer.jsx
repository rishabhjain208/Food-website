import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="max-w-[1640px] mx-4 mb-8 rounded-xl p-4 py-12 bg-yellow-400 text-black ">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-around">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 border-b-2 border-black">
            Best <span className="font-bold">Eats</span>
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-bold">
            Get Your <span className="text-white">Favorite </span> Food Now
          </h3>
          <div className="flex gap-6">
            <input
              className="bg-white p-2 focus:outline-none w-full rounded-md placeholder:font-bold"
              type="text"
              placeholder="Your Favorite Food"
            />
            <button className="bg-black text-white font-bold hover:bg-white hover:text-black duration-200">
              Order
            </button>
          </div>
        </div>
      </div>
      <p className="text-xl text-center mt-10">
        Copyright &copy; {currYear} All rights reserved. <br /> Made With 💗 by{" "}
        <span className="font-bold">Riya Jain</span>
      </p>
    </footer>
  );
};

export default Footer;
