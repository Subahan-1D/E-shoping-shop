import React from "react";

const ProductCard = ({ item }) => {
  const { name, _id, image, size, category, price } = item;
  return (
    <div className="card bg-white border border-gray-200 rounded-lg shadow-lg w-80 transform transition-transform hover:scale-105 mb-5 mt-5">
      <figure className="px-6 pt-6">
        <img
          src={image}
          alt={name}
          className="rounded-lg object-cover h-48 w-full"
        />
      </figure>
      <div className="card-body text-center p-4 space-y-3">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {name}
        </h2>
        <div className="flex items-center justify-around">
          <div>
            <p className=" text-red-600 font-medium">${price}</p>
          </div>
          <div>
            <p className="text-sm text-blue-600">{size}</p>
          </div>
          <div>
            <p className="text-sm text-orange-600">{category}</p>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md px-4 py-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
