import React from "react";
// Components
import HeroSlider from "../components/HeroSlider";
import ShopByCategory from "../components/ShopByCategory"; 
import NewTrends from "../Sections/NewTrends";
import BestSeller from "../Sections/BestSeller";
import ExperienceCenters from "../Sections/ExperienceCenter";
import Video from "../Sections/Video";
import LatestBlogs from "../components/Latestblogs";
import TalkToExpert from "../Sections/TalkToExpert";
import DesignIdeas from "../Sections/DesignIdeas";
import LightDivider from "./LightDivider"; 

export default function Home() {
  return (
    <div className="bg-white">
      
      {/* 1. Hero Slider (Top Banner) */}
      <div className="mt-0"> 
        <HeroSlider />
      </div>

      {/* 2. Categories */}
      <ShopByCategory />

      {/* 3. New Trends */}
      <NewTrends />

      {/* 4. Best Sellers */}
      <BestSeller />

      {/* 5. Experience Centers */}
      <ExperienceCenters />

      {/* 6. Video Section */}
      <Video />

      {/* 7. Blogs */}
      <LatestBlogs />

      {/* 8. Expert Consultation */}
      <TalkToExpert />

      {/* 9. Design Ideas */}
      <DesignIdeas />

      {/* 10. Divider */}
      <LightDivider />

    </div>
  );
}