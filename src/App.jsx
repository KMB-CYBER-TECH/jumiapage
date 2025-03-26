import React from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer";



function App() {
  return (
    <div className="bg-blue-600">
      <Hero />
      <Navbar />
      <HomePage />
      <ProductList />
      
      <Footer />
    </div>
  );
}

export default App;
