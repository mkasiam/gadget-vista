const FeaturedCategory = () => {
  return (
    <div>
      <div className="text-center">
        <div className="text-center space-y-3 py-2" data-aos="flip-down">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Get Your Desired Product from Featured Category!
          </h1>
          <p className="text-lg text-[#333]">Featured Category</p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 text-[#323334]">
            <div className="flex items-center p-4 justify-center text-sm md:text-xl lg:text-2xl xl:text-3xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
              Expertise
            </div>
            <div className="flex items-center p-4 justify-center text-sm md:text-xl lg:text-2xl xl:text-3xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
              Personalization
            </div>
            <div className="flex items-center p-4 justify-center text-sm md:text-xl lg:text-2xl xl:text-3xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
              Time Savings
            </div>
            <div className="flex items-center p-4 justify-center text-sm md:text-xl lg:text-2xl xl:text-3xl rounded-lg font-semibold gap-5 bg-[#FFFFFF]">
              Creativity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
