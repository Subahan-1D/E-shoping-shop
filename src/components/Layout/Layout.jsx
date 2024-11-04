import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <>
      
        <Navbar></Navbar>
        <div className="">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>

    </>
  );
};

export default Layout;
