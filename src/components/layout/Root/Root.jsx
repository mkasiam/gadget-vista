import { Outlet } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";
import styled from "styled-components";
import Banner from "../../Home/Banner/Banner";

const FullWidthBanner = styled.div`
  width: 100%;
`;

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <FullWidthBanner>
        <Banner></Banner>
      </FullWidthBanner>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
