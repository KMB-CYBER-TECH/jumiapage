import React from "react";
import {products} from "../data/data.js";
const categories = [
  {
    name: "Awoof",
    image: "aw.png",
  },
  {
    name: "TV & Audio Deals",
    image: "tv.png",
  },
  {
    name: "Phones & Tablets Deals",
    image: "ph.png",
  },
  {
    name: "Up to 80% Off",
    image: "cs.png",
  },
  {
    name: "Appliance deals",
    image: "ad.png",
  },
];



// Group products by category
const productsByCategory = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});

// Top sellers are the first 8 products for this example
const topSellers = products.slice(0, 8);

function JumiaPage() {
  return (
      <div className="p-4 md:p-6 bg-gray-100">
        {/* Categories Section */}
        <div className="bg-white shadow-md p-4 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
          <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
                <div key={index} className="text-center hover:scale-105 transition-transform cursor-pointer">
                  <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-32 object-contain rounded-md mb-2"
                  />
                  <p className="font-semibold text-sm md:text-base">{category.name}</p>
                </div>
            ))}
          </section>
        </div>

        {/* Flash Sale Banner */}
        <section className="bg-red-500 text-white p-4 rounded-md text-center mb-6">
          <div className="flex items-center justify-center space-x-2">
            <img src="fs.png" className="h-8 w-8 rounded-md" />
            <h2 className="text-xl font-bold">Flash Sale</h2>
          </div>
          <p className="text-lg">Time Left: 00h : 00m : 00s</p>
        </section>

        {/* Top Sellers Section */}
        <section className="mb-8 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Top Sellers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
            {topSellers.map((product) => (
                <div key={product.id} className="bg-white p-3 rounded-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-contain rounded-md mb-3"
                  />
                  <h3 className="text-sm font-semibold line-clamp-2">{product.name}</h3>
                  <p className="text-red-600 font-bold mt-1">{product.price}</p>
                  <button className="mt-2 bg-orange-500 text-white px-3 py-1 text-sm rounded-md w-full hover:bg-orange-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
            ))}
          </div>
        </section>

        {/* Products by Category Sections */}
        {Object.entries(productsByCategory).map(([category, products]) => (
            <section key={category} className="mb-8 bg-white p-4 rounded-md shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{category}</h2>
                <button className="text-orange-500 text-sm font-semibold hover:underline">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-3 rounded-md border border-gray-200 hover:shadow-lg transition-shadow">
                      <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-40 object-contain rounded-md mb-3"
                      />
                      <h3 className="text-sm font-semibold line-clamp-2">{product.name}</h3>
                      <p className="text-red-600 font-bold mt-1">{product.price}</p>
                      <button className="mt-2 bg-orange-500 text-white px-3 py-1 text-sm rounded-md w-full hover:bg-orange-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                ))}
              </div>
            </section>
        ))}

        {/* About Section */}
        <div className="bg-white text-black rounded-md p-4 md:p-6 shadow-md mb-6">
          <h3 className="font-semibold text-lg mb-3">
            Jumia Nigeria - Nigeria's No. 1 Shopping Destination
          </h3>
          <h3 className="font-semibold text-lg mb-3">
            Shop for Everything You Need on Jumia Nigeria
          </h3>
          <p className="text-gray-700 mb-4">
            Jumia Nigeria is the largest online shopping website in Nigeria. We
            offer a platform where customers in any part of Nigeria can find and
            shop for all they need in one online store and that platform is the
            Jumia shopping website.
            <br /><br />
            On the Jumia mobile app or website, you can shop from the
            comfort of your home or during work breaks and get everything
            delivered fast without you having to stress or move an inch. Be it
            fashion, electronics, mobile phones, computers, or your everyday
            groceries you can get everything you need on Jumia online store.
          </p>

          {/* FAQ Section */}
          <h3 className="font-semibold text-lg mb-3 mt-6">
            Frequently Asked Questions (FAQs)
          </h3>

          <div className="mb-4">
            <h4 className="font-semibold mb-1">What Payment Options are Available on Jumia?</h4>
            <p className="text-gray-700">
              You can either pay online or pay on delivery when you shop from us. With our payment solution
              called JumiaPay, you can conveniently pay online or on delivery with
              your cards (MasterCard, Visa and Verve), bank transfers and USSD.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-1">Can I Return the Items I Bought From Jumia?</h4>
            <p className="text-gray-700">
              Yes, you can return items you bought for free and get refunded as soon
              as possible! We have a refund policy that grants you 7 days to return
              ALL eligible items bought from the official store and other sellers on
              Jumia Nigeria.
            </p>
          </div>

          {/* More FAQ items... */}
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white p-6 md:p-8 rounded-md">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Logo */}
            <div>
              <h1 className="text-2xl font-bold">
                JUMIA<span className="text-orange-400">★</span>
              </h1>
            </div>

            {/* Newsletter */}
            <div className="flex-1 max-w-md">
              <h2 className="text-sm font-bold mb-1">NEW TO JUMIA?</h2>
              <p className="text-xs mb-3">
                Subscribe to our newsletter to get updates on our latest offers!
              </p>

              <div className="flex gap-2 mb-3">
                <input
                    type="email"
                    placeholder="Enter E-mail Address"
                    className="flex-1 rounded-md bg-gray-700 text-white p-2 text-sm border border-gray-600 placeholder-gray-400"
                />
                <button className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mt-1" />
                <p className="ml-2 text-xs">
                  I agree to Jumia's Privacy and Cookie Policy. You can unsubscribe
                  from newsletters at any time.
                </p>
              </div>
              <p className="text-xs text-orange-400 mt-1">
                I accept the Legal Terms
              </p>
            </div>

            {/* Download App */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-400">★</span>
                <h3 className="text-sm font-bold">DOWNLOAD JUMIA FREE APP</h3>
              </div>
              <p className="text-xs mb-3">
                Get access to exclusive offers!
              </p>
              <div className="flex gap-3">
                <img
                    src="/appstore..png"
                    alt="Download on the App Store"
                    className="h-8"
                />
                <img src="/play..png" alt="Get it on Google Play" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default JumiaPage;