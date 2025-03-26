import React from "react"; 
import Categories from "./Categories";
import HeroBanner from "./HeroBanner";  
import Widgets from "./Widgets";  

function HomePage() {
  return (
    <div className="flex gap-6 p-6  bg-cover bg-center">
      <Categories />
      <HeroBanner /> 
      <Widgets /> 
    </div>
  );
}

export default HomePage;
