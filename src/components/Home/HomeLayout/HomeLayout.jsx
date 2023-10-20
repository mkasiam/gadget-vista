import Banner from "../Banner/Banner";
import Companies from "../Companies/Companies";
import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";
import Review from "../Review/Review";

const HomeLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <Companies></Companies>
      <FeaturedCategory></FeaturedCategory>
      <Review></Review>
    </div>
  );
};

export default HomeLayout;
