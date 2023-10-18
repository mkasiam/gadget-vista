import { Outlet } from "react-router-dom";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
