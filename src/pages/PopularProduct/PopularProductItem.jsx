import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductCard from "../../components/Shared/ProductCard/ProductCard";
import useMenu from "../../hooks/useMenu";

const PopularProductItem = () => {
  const [menu, loading] = useMenu();
  const product = menu.filter(item => item.category === "Men")
  return (
    <section>
      <SectionTitle
        heading="Popular Items"
        subHeading="From Our Product Item"
      ></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10">
        {product.map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default PopularProductItem;
