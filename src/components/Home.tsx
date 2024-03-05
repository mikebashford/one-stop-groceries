import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FeaturedItems from "./FeaturedItems";
export default function Home({ existingUser, updateCallback }) {
  return (
    <div className="absolute inset-x-0 top-0 z-50 flex flex-col h-dvh">
      <Navbar />
      <div className="flex justify-center">
        <p className="mt-12 font-bold text-3xl">Featured</p>
      </div>
      <div className="flex justify-center">
        <FeaturedItems />
      </div>
      <Footer />
    </div>
  );
}
