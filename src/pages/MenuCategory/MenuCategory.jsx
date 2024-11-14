import React from "react";
import ProductCard from "../../components/Shared/ProductCard/ProductCard";
import Cover from "../../components/Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
         {title && <Cover img={img} title={title}></Cover>}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10">
        {items.map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
     <div className="text-center mb-5">
     <button className="btn btn-outline border-0 border-b-4 mt-4">View All Product</button>
     </div>
    </div>
  );
};

export default MenuCategory;
