import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCard from './components/HeadlineCard';
import Food from './components/Food';
import Category from './components/Category';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="lg:mx-[40px] lg:mt-[20px] md:mt-[20px] overflow-hidden">
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
      <Footer />
    </div>
  );
};

export default App;
