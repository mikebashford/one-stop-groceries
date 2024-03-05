import React from "react";

export default function FeaturedItems() {
  const featuredItems = [
    {
      id: 1,
      name: "Avocado",
      image: "/images/avocado.png",
      price: "$1.50",
      salePrice: "$1",
    },
    {
      id: 2,
      name: "Butter",
      image: "/images/butter.png",
      price: "$2",
      salePrice: "$1",
    },
    {
      id: 3,
      name: "Milk",
      image: "/images/milk.png",
      price: "$3",
      salePrice: "$1",
    },
  ];

  return (
    <div className="flex flex-row max-lg:flex-wrap">
      {featuredItems.map((item) => (
        <div
          className="flex flex-col relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-lg"
          key={item.id}
        >
          <img
            className="h-60 rounded-t-lg object-cover"
            src={item.image}
            alt={item.name}
          />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Sale
          </span>
          <div className="mt-4 px-5 pb-5 z-50">
            <h5 className="text-xl font-semibold tracking-tight text-slate-900">
              {item.name}
            </h5>
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  {item.salePrice}
                </span>
                <span className="text-sm text-slate-900 line-through">
                  {item.price}
                </span>
              </p>
              <div>
                <button
                  href="#"
                  className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </button>
                <button
                  href="#"
                  className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
