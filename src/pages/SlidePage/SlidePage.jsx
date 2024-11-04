import React from "react";
import bgImage from '../../assets/images/banner/slide.jpg'
const SlidePage = () => {
    return (
        <div
          className="hero bg-fixed min-h-screen mb-10"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="hero-overlay  bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-screen-sm p-8 bg-white bg-opacity-60 ">
              <h1 className="mb-5 text-3xl font-bold text-black uppercase font-mono">
                Welcome T.Shoping House
              </h1>
              <p className="mb-5 text-gray-800 font-serif ">
              A modern shopping platform should be a user-friendly and versatile experience that enables customers to browse, search, and purchase products with ease and convenience. This platform provides various product categories, a robust search feature, detailed product descriptions, and secure checkout options, aiming to meet the needs of all types of shoppers, whether they’re looking for clothing, electronics, home goods, or other essentials.
              </p>
            </div>
          </div>
        </div>
      );
};

export default SlidePage;
