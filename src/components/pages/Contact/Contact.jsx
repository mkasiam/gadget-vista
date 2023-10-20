import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your message has been sent successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="my-6">
      <Helmet>
        <title>Gadget Vista | Contact Us</title>
      </Helmet>
      {/* Contact Us Section Title and subtitle */}
      <div
        className="text-center mt-6 md:py-16 lg:py-20 space-y-5 px-0 md:px-4 lg:px-5"
        data-aos="fade-down"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Contact
        </h1>
        <p className="text-lg">
          Gadget Vista, your gateway to the future of technology, proudly
          presents an extensive lineup of electronics from industry giants such
          as Apple, Samsung, Xiaomi, Sony, Google, and Intel. We go beyond
          traditional retail by embracing a role as your technology solutions
          partner. Our commitment to quality, innovation, and customer
          satisfaction guides our every step. With precision and care, we curate
          our product selection to offer you the finest tech solutions. At
          Gadget Vista, we strive to simplify your tech journey, providing not
          just the latest gadgets but a supportive and seamless experience that
          empowers you to embrace the future.
        </p>
      </div>
      {/* Contact Us Container  */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-7">
        {/* Contact Us Left Side (Information) */}
        <div
          className=" text-lg space-y-4"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p className="text-[#3ABFF8] font-bold text-lg">Contact Us</p>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Get In Touch With Us
          </h1>
          <p className="text-lg my-4">
            We are so glad that you reached out to us. We would love to hear
            from you. Please, take a few moments to fill out this form, and our
            team will get back to you shortly
          </p>
          <div className="flex items-center gap-3">
            <FaLocationArrow></FaLocationArrow>
            Flat 6B, House 100, Road 4, Vatara, Gulshan-1, Dhaka 1215,
            Bangladesh
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt></FaPhoneAlt>+8801306219109
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineMail></AiOutlineMail>gadgetvista@gmail.com,
            contact@gadgetvista.com
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            Follow Us on: <AiOutlineFacebook></AiOutlineFacebook>
            <AiOutlineInstagram></AiOutlineInstagram>{" "}
            <AiOutlineTwitter></AiOutlineTwitter>
          </div>
          <div>
            <h1 className="font-bold text-xl">Career:</h1>
            <p>
              If you are a passionate and want to work with people who are as
              passionate as you are, then we would like to be your mate.
            </p>
            <p className="flex items-center gap-3">
              <AiOutlineMail></AiOutlineMail>career@gadgetvista.com
            </p>
          </div>
        </div>
        {/* Form to contact  */}

        <div
          className="border bg-[#F2F3F5] rounded-md p-8 max-w-2xl mx-auto mt-7"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="w-full  space-y-4">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-2 text-md font-semibold ">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 text-md font-semibold ">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 text-md font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="number"
                    className="input input-bordered w-full rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-2 text-md font-semibold">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#3ABFF8] hover:bg-[#7cbfdc] text-white w-full rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
