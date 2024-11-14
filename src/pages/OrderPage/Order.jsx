import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import orderImg from "../../assets/images/banner/slide.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import OrderTab from "./OrderTab";

const Order = ({ items }) => {
  const categories = ["Men", "Women", "Custom"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const women = menu.filter((item) => item.category === "Women");
  const men = menu.filter((item) => item.category === "Men");
  const custom = menu.filter((item) => item.category === "Custom");

  return (
    <div>
      <Helmet>
        <title>T.Shoping || Order-Product</title>
      </Helmet>
      <Cover img={orderImg} title="50% Discount or Order "></Cover>
      <Tabs
        className="text-center mb-5 mt-5"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex justify-center space-x-5 mb-4 border-b-2">
          <Tab
            className={`px-4 py-2 cursor-pointer ${
              tabIndex === 0
                ? "border-b-2 border-blue-500 font-semibold text-2xl text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            Man
          </Tab>
          <Tab
            className={`px-4 py-2 cursor-pointer ${
              tabIndex === 1
                ? "border-b-2 border-blue-500 font-semibold text-2xl text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            Women
          </Tab>
          <Tab
            className={`px-4 py-2 cursor-pointer ${
              tabIndex === 2
                ? "border-b-2 border-blue-500 font-semibold text-2xl text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            Custom
          </Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={men}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={women}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={custom}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
