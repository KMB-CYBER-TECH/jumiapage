import React, { useState } from "react";
import {
  Tv,
  Shirt,
  Home,
  ShoppingCart,
  Smartphone,
  DrumIcon,
  HeartPulse,
  ComputerIcon,
  
} from "lucide-react";

const categories = [
  {
    name: "Phones & Tablets",
    icon: <Smartphone size={16} />,
    subcategories: {
      "Mobile Phones": [
        "Smartphones",
        "Android Phones",
        "iPhones",
        "Basic Phones",
        "Refurbished Phones",
        "Rugged Phones",
        "Cordless Telephones",
        "Dual Sim Phones",
      ],
      "Tablets": [
        "iPads",
        "Android Tablets",
        "Educational Tablets",
        "Tablet Accessories",
        "Amazon Fire Tablets",
        "Microsoft Tablets",
      ],
      "Mobile Accessories": [
        "Accessory Kits",
        "Adapters",
        "Batteries",
        "Battery Chargers",
        "Bluetooth Headsets",
        "Cables",
        "Car Accessories",
        "Chargers",
       
       
      ],
         },
  },
  {
    name: "Home & Kitchen",
    icon: <Home size={16} />,
    subcategories: {
      "Furniture": ["Sofas", "Beds", "Tables", "Chairs"],
      "Appliances": ["Blender", "Juicers", "Microwave", "Air Fryers"],
      "Cookware": ["Pots & Pans", "Baking Tools"],
      "Décor": ["Curtains", "Lamps", "Wall Art"],
      "Utensils": ["Cutlery", "Plates", "Serving Spoons"],
    },
  },
  {
    name: "Fashion",
    icon: <Shirt size={16} />,
    subcategories: {
      "Men's Wear": ["Shirts", "Trousers", "Shoes", "Watches"],
      "Women's Wear": ["Dresses", "Handbags", "Makeup", "Jewelry"],
      "Accessories": ["Chains", "Bracelets", "Hats", "Sunglasses"],
    },
  },
  {
    name: "Electronics",
    icon: <Tv size={16} />,
    subcategories: {
      "TV & Audio": ["Smart TVs", "Speakers", "Headphones", "Soundbars"],
      "Computers": ["Laptops", "Desktops", "Monitors", "Printers"],
      "Cameras": ["DSLR", "Mirrorless", "Security Cameras", "Drones"],
     
    },
  },
  {
    name: "Supermarket",
    icon: <ShoppingCart size={16} />,
    subcategories: {
      "Beverages": ["Coffee", "Tea", "Juices", "Soft Drinks"],
      "Snacks": ["Chips", "Cookies", "Candy", "Nuts"],
      "Dairy Products": ["Milk", "Cheese", "Yogurt"],
      "Personal Care": ["Soap", "Shampoo", "Toothpaste"],
    },
  },
  {
    name: "Health & Beauty",
    icon: <HeartPulse size={16} />,
    subcategories: {
      "Makeup": ["Lipstick", "Foundation", "Mascara", "Eyeshadow"],
      "Skincare": ["Face Wash", "Moisturizers", "Sunscreen"],
      "Haircare": ["Shampoo", "Conditioner", "Hair Oils"],
      "Wellness": ["Vitamins", "Supplements", "Essential Oils"],
    },
  },
  {
    name: "Computing",
    icon: <ComputerIcon size={16} />,
    subcategories: {
      "Laptops & Accessories": ["Gaming Laptops", "Business Laptops", "Batteries"],
      "Storage": ["Hard Drives", "Flash Drives", "Memory Cards"],
      "Networking": ["Routers", "WiFi Extenders", "Ethernet Cables"],
      "Software": ["Operating Systems", "Antivirus", "Productivity Apps"],
    },
  },
  {
    name: "Musical Instruments",
    icon: <DrumIcon size={16} />,
    subcategories: {
      "Instruments": ["Guitar", "Drums", "Piano", "Violin"],
      "Accessories": ["Strings", "Drumsticks", "Microphones"],
      "Recording": ["Mixers", "Audio Interfaces", "Studio Headphones"],
    },
  },
];

function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <div className="bg-white hover:rounded-r-none p-1 z-10 relative shadow-md h-[370px] rounded-md w-50 text-[14px]">
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex items-center p-3 hover:bg-orange-300 cursor-pointer "
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {category.icon}
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-Width Mega Dropdown */}
      {activeCategory && (
        <div
          className="absolute left-50 w-[720px] h-[370px] z-20 bg-white shadow-lg p-4 border border-gray-200 rounded-md flex flex-col rounded-l-none"
          onMouseEnter={() => setActiveCategory(activeCategory)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <h3 className="font-semibold text-lg mb-1">{activeCategory}</h3>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(
              categories.find((cat) => cat.name === activeCategory)
                ?.subcategories || {}
            ).map(([section, items], i) => (
              <div key={i}>
                <h4 className="font-semibold text-md mb-2">{section}</h4>
                <ul>
                  {items.map((sub, j) => (
                    <li
                      key={j}
                      className="text-sm p-1 hover:bg-gray-200 cursor-pointer rounded-md"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
