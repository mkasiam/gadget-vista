import Banner from "../Banner/Banner";
import Companies from "../Companies/Companies";
import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";

const HomeLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <Companies></Companies>
      <FeaturedCategory></FeaturedCategory>
    </div>
  );
};

export default HomeLayout;
