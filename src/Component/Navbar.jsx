import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Jumia</h1>
      <input type="text" placeholder="Search..." className="border p-2 rounded-md" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
    </nav>
  );
}

export default Navbar;
