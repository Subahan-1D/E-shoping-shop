import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover/Cover";
import menuImg from "../../assets/images/banner/slide.jpg";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();
  const women = menu.filter((item) => item.category === "Women");
  const custom = menu.filter((item) => item.category === "Custom");
  return (
    <div>
      <Helmet>
        <title>T.Shoping || Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Product"></Cover>
      <SectionTitle
        heading="today offers"
        subHeading="Don't Miss"
      ></SectionTitle>
      <MenuCategory items={women}></MenuCategory>
      {/* Custom section */}
      <MenuCategory items={custom} title="Custom" img={menuImg}></MenuCategory>
    </div>
  );
};

export default Menu;
