import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import menuImg from "../../assets/images/banner/slide.jpg";
import PopularProductItem from "../PopularProduct/PopularProductItem";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>T.Shoping || Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Product"}></Cover>
      <PopularProductItem></PopularProductItem>
      <Cover img={menuImg} title={"Our Product"}></Cover>
      <PopularProductItem></PopularProductItem>
      <Cover img={menuImg} title={"Our Product"}></Cover>
      <PopularProductItem></PopularProductItem>
      <Cover img={menuImg} title={"Our Product"}></Cover>
      <PopularProductItem></PopularProductItem>
    </div>
  );
};

export default Menu;
