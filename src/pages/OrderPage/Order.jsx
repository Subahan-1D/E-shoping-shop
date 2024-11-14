import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import orderImg from "../../assets/images/banner/slide.jpg"
const Order = () => {
  return (
    <div>
      <Helmet>
        <title>T.Shoping || Order</title>
      </Helmet>
      <Cover img={orderImg} title="50% Discount or Order "></Cover>
    </div>
  );
};

export default Order;
