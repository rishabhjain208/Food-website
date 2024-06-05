import React, { useState } from 'react';
import { data } from '../data/data';

const Food = () => {
  // console.log(data);
  const [foods, setFoods] = useState(data);

  // Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <section className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-yellow-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className="m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className="m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
            >
              Pizzas
            </button>
            <button
              onClick={() => filterType('salad')}
              className="m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className="m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice('$')}
              className="m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className="m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className="m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className="m-1 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg hover:opacity-[.9]"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-yellow-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Food;
