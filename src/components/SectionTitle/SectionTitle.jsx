import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-12 mt-12 px-4">
      <p className="text-sm md:text-base text-gray-500 tracking-wide uppercase mb-2">
        --- {subHeading} ---
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 relative inline-block">
        {heading}
        <span className="block w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
