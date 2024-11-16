import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Container from "../Container/Container";

const Layout = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login")||location.pathname.includes("registration");
  return (
    <>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
      
    </>
  );
};

export default Layout;
