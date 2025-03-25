import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: "₦15,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smartphone",
    price: "₦120,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Laptop",
    price: "₦350,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "₦18,500",
    image: "https://via.placeholder.com/150",
  },
];

function ProductList() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Top Deals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md w-full">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
