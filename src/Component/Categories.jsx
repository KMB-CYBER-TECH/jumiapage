import React from "react";

function Categories() {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Shop by Category</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200">Electronics</div>
        <div className="p-4 bg-gray-200">Fashion</div>
        <div className="p-4 bg-gray-200">Home & Kitchen</div>
      </div>
    </div>
  );
}

export default Categories;
