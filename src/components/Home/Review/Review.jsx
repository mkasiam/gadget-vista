
const Review = () => {
  return (
    <div className="my-8">
      <div className="text-center" data-aos="fade-up" data-aos-duration="3000">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Discover Customers Are Smiling!
        </h1>
        <p className="text-[#333] font-bold text-md md:text-lg lg:text-lg">
          CUSTOMER REVIEW
        </p>
      </div>
      <div className="hero my-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full md:w-1/2 lg:w-1/2" data-aos="flip-left">
            <img
              src="https://i.ibb.co/dfKkDH3/customer.jpg"
              className="w-full rounded-lg shadow-2xl"
              alt="Customer"
            />
          </div>
          <div data-aos="fade-up-right">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Real Happy Customers, Real Stories
            </h1>
            <p className="py-6 text-lg text-[#333]">
            Gadget Vista is the go-to destination for tech enthusiasts in Bangladesh. Their wide selection of products from renowned global brands is impressive. With a stellar reputation, I trust them for quality gadgets. The staff is knowledgeable and the service is top-notch. My one-stop shop for all things tech!
            </p>
            <p className="font-bold text-xl text-[#333]">Alex parker</p>
            <p className="text-lg font-medium"> - CEO, MKB GLOBAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
