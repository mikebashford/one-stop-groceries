import React from "react";

export default function ShopOptionsList({ sidebarOpen, handleSidebar }) {
  return (
    <div
      className={`${
        sidebarOpen
          ? "hidden"
          : "block md:block md:relative rounded-br-3xl rounded-bl-3xl inset-y-0 left-64 w-48 bg-green-700 text-white p-4"
      }`}
      onMouseLeave={handleSidebar}
    >
      <p className="text-2xl font-bold mb-4">Categories</p>
      <ul>
        <li className="mb-2">
          <button>Fruits</button>
        </li>
        <li className="mb-2">
          <button>Vegetables</button>
        </li>
        <li className="mb-2">
          <button>Dairy</button>
        </li>
        <li className="mb-2">
          <button>Bread</button>
        </li>
        <li className="mb-2">
          <button>Meat</button>
        </li>
        <li className="mb-2">
          <button>Snacks</button>
        </li>
        <li className="mb-2">
          <button>Beverages</button>
        </li>
      </ul>
    </div>
  );
}
