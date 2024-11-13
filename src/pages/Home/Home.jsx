import React from "react";
import Banner from "./Banner";
import Category from "../Category/Category";
import SlidePage from "../SlidePage/SlidePage";
import PopularProductItem from "../PopularProduct/PopularProductItem";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>T.Shoping || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <SlidePage></SlidePage>
      <PopularProductItem></PopularProductItem>
    </div>
  );
};

export default Home;
