import React, { useState } from 'react';
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { RiTruckFill } from 'react-icons/ri';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} className="hover:text-gray-400" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Seach Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search Food"
        />
      </div>
      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full hover:opacity-[.8] transition-all">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setNav(!nav)}
        ></div>
      ) : (
        ''
      )}

      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute top-4 right-4 cursor-pointer hover:text-gray-400"
        />
        <h2 className="text-2xl p-4 ">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="hover:bg-gray-200 duration-200">
              <a href="#" className="text-xl py-4 pl-2 flex">
                <RiTruckFill size={25} className="mr-4" /> Orders
              </a>
            </li>
            <li className="hover:bg-gray-200 duration-200">
              <a href="#" className="text-xl py-4 pl-2 flex">
                <MdFavorite size={25} className="mr-4" /> Favorites
              </a>
            </li>
            <li className="hover:bg-gray-200 duration-200">
              <a href="#" className="text-xl py-4 pl-2 flex">
                <FaWallet size={25} className="mr-4" /> Wallet
              </a>
            </li>
            <li className="hover:bg-gray-200 duration-200">
              <a href="#" className="text-xl py-4 pl-2 flex">
                <MdHelp size={25} className="mr-4" /> Help
              </a>
            </li>
            <li className="hover:bg-gray-200 duration-200">
              <a href="#" className="text-xl py-4 pl-2 flex">
                <AiFillTag size={25} className="mr-4" /> Promotions
              </a>
            </li>
            <li className="hover:bg-gray-200 duration-200">
              <a href="#" className="text-xl py-4 pl-2 flex">
                <BsFillSaveFill size={25} className="mr-4" /> BestOnes
              </a>
            </li>
            <li className="hover:bg-gray-200 duration-200">
              <a href="#" className="text-xl py-4 pl-2 flex">
                <FaUserFriends size={25} className="mr-4" /> Invite Friends
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
