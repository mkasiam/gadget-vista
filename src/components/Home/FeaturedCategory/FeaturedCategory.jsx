import { AiFillCamera } from "react-icons/ai";
import {
  FaCameraRetro,
  FaHeadphones,
  FaLaptop,
  FaMobileAlt,
  FaSpeakerDeck,
  FaStopwatch20
} from "react-icons/fa";

const FeaturedCategory = () => {
  return (
    <div className="my-7 md:my-10 lg:my-12">
      <div className="text-center">
        <div className="text-center space-y-3 py-2" data-aos="flip-down">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Get Your Desired Product
          </h1>
          <p className="text-lg font-medium  mb-2">Featured Category</p>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 text-[#323334]">
            {[
              { icon: <AiFillCamera />, text: "Camera" },
              { icon: <FaMobileAlt />, text: "Mobile" },
              { icon: <FaHeadphones />, text: "Headphones" },
              { icon: <FaLaptop />, text: "Laptop" },
              { icon: <FaStopwatch20 />, text: "Watch" },
              { icon: <FaStopwatch20 />, text: "Watch" },
              { icon: <FaSpeakerDeck />, text: "Speaker" },
              { icon: <FaCameraRetro />, text: "Retro Camera" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-2 sm:p-4 justify-center text-base sm:text-lg lg:text-2xl xl:text-3xl rounded-lg font-semibold gap-2 bg-[#FFFFFF]"
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
