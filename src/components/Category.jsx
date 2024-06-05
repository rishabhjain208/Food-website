import React from 'react';
import { categories } from '../data/data';

const Category = () => {
  // console.log(categories);
  return (
    <section className="max-w-[1640px] px-4 py-12">
      <h1 className="text-yellow-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center border border-transparent hover:bg-transparent hover:border hover:border-gray-300 duration-200"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
