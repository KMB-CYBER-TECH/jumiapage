import React from "react";

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

const products = [
  { id: 1, name: "Ace Elec 20000 MAh Ultra", price: "₦7,672", image: "power.jpg" },
  { id: 2, name: "Silver Crest 2L Industrial Blender", price: "₦24,300", image: "blend.jpg" },
  { id: 3, name: "Samsung Galaxy A06 6.7", price: "₦138,163", image: "ao6.jpg" },
  { id: 4, name: "Oraimo SpaceBuds Neo", price: "₦13,500", image: "bud.jpg " },
  { id: 5, name: "LG 55-Inch Smart TV", price: "₦250,000", image: "lg.jpg" },
  { id: 6, name: "Hisense 1.5HP Split AC", price: "₦180,000", image: "ac.jpg" },
  { id: 7, name: "Sony PlayStation 5", price: "₦550,000", image: "ps.jpg" },
  { id: 8, name: "Apple MacBook Pro M1", price: "₦1,200,000", image: "mac.jpg" },
  { id: 9, name: "Canon EOS 250D Camera", price: "₦350,000", image: "cam.jpg" },
  { id: 10, name: "JBL Flip 5 Bluetooth Speaker", price: "₦50,000", image: "sp.jpg" },
  { id: 11, name: "Samsung 300L Refrigerator", price: "₦320,000", image: "fr.jpg" },
  { id: 12, name: "Infinix Zero X Pro", price: "₦220,000", image: "in.jpg" },
  { id: 13, name: "HP LaserJet Printer", price: "₦75,000", image: "pri.jpg" },
  { id: 14, name: "Bose QuietComfort 35 II Headphones", price: "₦180,000", image: "he.jpg" },
  { id: 15, name: "Xiaomi Mi Band 6", price: "₦35,000", image: "wa.jpg" },
  { id: 16, name: "Samsung Galaxy Watch 4", price: "₦120,000", image: "sg.jpg" },
  { id: 17, name: "Anker PowerCore 26800mAh Power Bank", price: "₦42,000", image: "pa.jpg" },
  { id: 18, name: "Lenovo Ideapad 3", price: "₦310,000", image: "le.jpg" },
  { id: 19, name: "Sony Bravia 65-Inch OLED TV", price: "₦700,000", image: "so.jpg" },
  { id: 20, name: "Huawei FreeBuds 4i", price: "₦45,000", image: "hu.jpg" }
];

function JumiaPage() {
  return (
    <div className="p-6">
      {/* Categories Section in a separate div */}
      <div className="bg-white shadow-md p-4 rounded-md mb-6">
       
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <img src={category.image} alt={category.name} className="w-full h-45 object-cover rounded-md mb-2" />
              <p className="font-semibold">{category.name}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Flash Sale Banner */}
      <section className="bg-red-500 text-white  text-center mb-4  ">
        <h2 className="text-xl font-bold -ml-265 "><img src="fs.png" className="h-8 w-8 rounded-md inline-block " />
        Flash Sale</h2>
        <p className="text-lg ">Time Left: 00h : 00m : 00s</p>
      </section>

      {/* Top Sellers Section */}
      <section className="mb-6">
       
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md p-4 -mt-5">
              <img src={product.image} alt={product.name} className="w-full h-63 object-cover rounded-md" />
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-lg font-bold">{product.price}</p>
              <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md w-full hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-white text-black rounded-md p-2">
        <h3 className="font-semibold text-lg mb-3">
          Jumia Nigeria - Nigeria's No. 1 Shopping Destination
        </h3>
        <h3 className="font-semibold text-lg mb-3">
          Shop for Everything You Need on Jumia Nigeria
        </h3>
        <p className="black mb-2">
          Jumia Nigeria is the largest online shopping website in Nigeria. We
          offer a platform where customers in any part of Nigeria can find and
          shop for all they need in one online store and that platform is the
          Jumia shopping website.
          <br></br> On the Jumia mobile app or website, you can shop from the
          comfort of your home or during work breaks and get everything
          delivered fast without you having to stress or move an inch. Be it
          fashion, electronics, mobile phones, computers, or your everyday
          groceries you can get everything you need on Jumia online store.
          <br></br>
          Have you used the Jumia online store today? Shop now on Jumia to enjoy
          a seamless online shopping experience. With fast delivery, free
          returns, and flexible payment options, you are certain to enjoy the
          convenience of shopping online. Shop for Original and Quality Items at
          The Best Prices Jumia Nigeria prides itself in giving the best prices
          and the best quality of products you can find anywhere in the country.
          Our strong partnership with top brands like Oraimo, Samsung, Infinix,
          Xiaomi, Diageo, Tecno, Adidas, Nike, Trendyol, etc. guarantees our
          customers the cheapest prices on original brand products. Beyond that,
          customers also have exclusive access to the latest product released by
          these top brands.
          <br></br>
        </p>
        <h3 className="font-semibold text-lg mb-3">
          Frequently Asked Questions (FAQs)
        </h3>
        What Payment Options are Available on Jumia? You can either pay online
        or pay on delivery when you shop from us. With out payment solution
        called JumiaPay, you can conveniently pay online or on delivery with
        your cards (MasterCard, Visa and Verve), bank transfers and USSD.
        <br></br>
        <br></br>
        <h3 className="font-semibold text-lg mb-3">
          Can I Return the Items I Bought From Jumia?
        </h3>
        Yes, you can return items you bought for free and get refunded as soon
        as possible! We have a refund policy that grants you 7 days to return
        ALL eligible items bought from the official store and other sellers on
        Jumia Nigeria.
        <br></br>
        <br></br>
        <h3 className="font-semibold text-lg mb-3">
          When is the Next Jumia Black Friday?
        </h3>
        Jumia Black Friday happens in November. Jumia is the pioneer of Black
        Friday in Nigeria, so expect us to do it best! It comes with the biggest
        discount and offers on various categories of products like fashion,
        phones, computers, home appliances, electronics and many more! We also
        have various exciting and engaging activities like the treasure hunt and
        games our customers love to play.
        <br></br>
        Can I get Free Delivery on All my Orders? Customers in Lagos, Abuja,
        Ibadan,Warri,Benin, Abeokuta, Akure and Portharcourt enjoy free delivery
        on items with the free delivery tag. Free delivery does not apply to
        large items like refrigerators, huge TVs, washing machines and others.
        <br></br>
        <br></br>
        <h3 className="font-semibold text-lg mb-3">
          What Is the Jumia Customer Care Line?
        </h3>
        We have a dedicated team that is always available to make sure your
        shopping experience on Jumia is effortless. Simply dial 02018881106 to
        reach out to us for complaints and other inquiries. If you would like to
        place an order, please call us at 0700-600-0000. You can also chat with
        us on the Jumia app if you find that more convenient. Whatever you do,
        we are always available to help.
        <br></br>
        <br></br>
        <h3 className="font-semibold text-lg mb-3">
          How Can I Become a Seller on Jumia?
        </h3>
        You can partner with Jumia as a seller on the website. All you need to
        do is register and follow the necessary steps. With our large customer
        base, we can help you reach a wider audience and sell many of your
        products to our customers
        <br></br>
        <br></br>
        <h3 className="font-semibold text-lg mb-3">
          What Other Events are Celebrated in Jumia?
        </h3>
        Aside the Jumia Black Friday, the Jumia Tech Week is another big event
        we celebrate in Jumia Nigeria. The goal of the Jumia Tech Week is to
        help customers have access to the latest technology at the cheapest
        prices they can get. It happens in the month of March of every year and
        lasts at least two weeks. Aside these major events, we also have Ramadan
        sales, Easter sales, Christmas sales and other seasonal celebrations we
        make sure our customers enjoy on Jumia. Shop now and enjoy unlimited
        offers, discounts and the best online shopping experience!
      </div>

      <div className="bg-gray-800 text-white px-12 py-12 mt-6 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold text-white -mt-40 ">
          JUMIA<span className="text-orange-400">★</span>
        </h1>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-[13px] font-bold -mt-10 -ml-71">NEW TO JUMIA?</h2>
          <p className="text-[11px] mb-4 -ml-20">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>

          <div className="flex space-x-2 mb-3 -ml-21">
            <input
              type="email"
              placeholder="Enter E-mail Address"
              className="flex-1 rounded-md bg-gray-800 text-white p-2 border border-gray-600 placeholder-gray-400"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600">
              Subscribe
            </button>
          </div>

          <div className="flex items-start ml-17">
            <input type="checkbox" className="mt-1 " />
            <p className="ml-2 text-xs ">
              I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe
              from newsletters <br></br> <p className="-ml-93"> at any time.</p>
            </p>
          </div>
          <p className="text-xs text-orange-400 mt-1 -ml-55">
            I accept the Legal Terms
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-2">
            <div>
              <h3 className="text-lg font-bold -mt-20 text-[14px]">
                <span className="text-orange-400">★</span>DOWNLOAD JUMIA FREE
                APP
              </h3>
              <p className="text-[10px] ml-5">
                Get access to exclusive offers!
              </p>
            </div>
          </div>
          <div className="flex space-x-4 -mt-10 text-[11px] ">
            <img
              src="/appstore..png"
              alt="Download on the App Store"
              className="h-5"
            />
            <img src="/play..png" alt="Get it on Google Play" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JumiaPage;
