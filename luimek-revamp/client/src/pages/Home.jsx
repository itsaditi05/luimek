// client/src/pages/Home.jsx
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ShopByCategories from '../components/ShopByCategories';
import PopularProducts from '../components/PopularProducts';
import ShopTheLook from '../components/ShopTheLook';
import MoodLighting from '../components/MoodLighting';
import VideoHighlight from '../components/VideoHighlight';
import ServiceHighlights from '../components/ServiceHighlights';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <ShopByCategories />
      <PopularProducts />
      <ShopTheLook />
      <MoodLighting />
      
      {/* Aapne kaha tha VideoHighlight niche chahiye */}
      <VideoHighlight />
      
      <ServiceHighlights />
    </>
  );
};

export default Home;