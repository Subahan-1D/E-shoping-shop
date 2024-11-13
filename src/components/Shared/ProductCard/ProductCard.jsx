import React from "react";

const ProductCard = ({ item }) => {
  const { name, _id, image, size, category, price } = item;
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[70px] rounded-full" src={image} alt="" />
      <div>
        <h2 className="uppercase">{name}-----</h2>
        <h4>{category}</h4>
      </div>
      <h3>{size}</h3>
      <p className="text-red-600">{price}</p>
    </div>
  );
};

export default ProductCard;
