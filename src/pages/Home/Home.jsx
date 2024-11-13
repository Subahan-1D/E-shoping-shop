import React from "react";
import Banner from "./Banner";
import Category from "../Category/Category";
import SlidePage from "../SlidePage/SlidePage";
import PopularProductItem from "../PopularProduct/PopularProductItem";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <SlidePage></SlidePage>
      <PopularProductItem></PopularProductItem>
    </div>
  );
};

export default Home;
