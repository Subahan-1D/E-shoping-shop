import React from "react";
import bgImage from '../../assets/images/banner/slide.jpg';

const SlidePage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat mb-10 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase font-mono drop-shadow-lg mb-6">
          Welcome to T.Shopping House
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-serif leading-relaxed bg-white bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-sm">
          A modern shopping platform should be a user-friendly and versatile experience that enables customers to browse, search, and purchase products with ease and convenience. This platform provides various product categories, a robust search feature, detailed product descriptions, and secure checkout options — aiming to meet the needs of all types of shoppers, whether they’re looking for clothing, electronics, home goods, or other essentials.
        </p>
      </div>
    </div>
  );
};

export default SlidePage;
