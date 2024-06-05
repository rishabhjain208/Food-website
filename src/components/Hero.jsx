import React from 'react';

const Hero = () => {
  return (
    <main className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text7xl font-bold">
            The <span className="text-yellow-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text7xl font-bold">
            <span className="text-yellow-500">Foods </span>Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] rounded-xl object-cover"
          src="https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="A Big Tasty Burger"
        />
      </div>
    </main>
  );
};

export default Hero;
