import React from "react";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { ContactDetails } from "../LandingPage/Contact";
import Testimonials from "../LandingPage/Testimonials";

const AboutUs = () => {
  return (
    <>
      <div className="py-4 flex flex-col items-center border shadow-xl ">
        <h1 className="flex flex-col w-fit text-2xl font-bold items-center mb-4 font-secondary">
          About Us
          <span className="h-[3px] bg-primary w-full rounded-xl"></span>
        </h1>
        <div className="flex flex-col">
          <p className="text-xl p-4 text-center font-primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            aliquam fuga. Maiores illum eligendi quisquam consequuntur ad
            facilis, molestiae magnam eveniet, dignissimos ullam reiciendis
            adipisci modi, sequi iste enim in.
          </p>
        </div>
      </div>
      <span className="h-[1px] block my-4 bg-primary w-full rounded-xl"></span>
      <div className="mb-4 flex flex-col items-center border shadow-xl">
        <h1 className="flex flex-col mt-4 w-fit text-2xl font-bold items-center mb-4 font-secondary">
          Our Work Location
          <span className="h-[3px] bg-primary w-full rounded-xl"></span>
        </h1>
        <div className="sm:py-8 sm:w-full m-auto font-primary font-semibold">
          <div className="sm:mx-4  text-base sm:text-lg flex justify-evenly items-center mb-4">
            {/* <Image className="w-1/6 mr-4 " src={Images.phone} alt="" /> */}
            <div className="w-1/3 h-12">
              <FiPhoneCall className="text-primary w-full h-full" />
            </div>
            <div className="flex flex-col w-4/6">
              <span className="mb-2">Call Us:</span>
              <h5>(+84) 0876535553</h5>
            </div>
          </div>
          <div className="my-4 sm:mx-4 text-base sm:text-lg flex items-center justify-evenly mb-8">
            {/* <Image className="w-1/6 mr-4" src={Images.email} alt="" /> */}
            <div className="w-1/3 h-12">
              <AiOutlineMail className="text-primary w-full h-full" />
            </div>
            <div className="flex flex-col w-4/6">
              <span className="mb-2">Email Us:</span>
              <h5>support@Freashmeal.com</h5>
            </div>
          </div>
          <div className="my-4 sm:mx-4 text-base sm:text-lg flex items-center justify-evenly mb-8">
            {/* <Image className="w-1/6 mr-4" src={Images.clock} alt="" /> */}
            <div className="w-1/3 h-12">
              <AiOutlineClockCircle className="text-primary w-full h-full" />
            </div>
            <div className="flex flex-col w-4/6">
              <span className="mb-2">Working Hours:</span>
              <h5>Mon - Sat(8:00am - 6:00pm)</h5>
            </div>
          </div>
          <div className="my-4 sm:mx-4 text-base sm:text-lg flex items-center justify-evenly mb-8">
            {/* <Image className="w-1/6 mr-4" src={Images.clock} alt="" /> */}
            <div className="w-1/3 h-12">
              <MdOutlineLocationOn className="text-primary w-full h-full" />
            </div>
            <div className="flex flex-col w-4/6">
              <span className="mb-2">Street New </span>
              <h5>New Delhi</h5>
            </div>
          </div>
        </div>
      </div>

      <span className="h-[1px] block my-4 bg-primary w-full rounded-xl"></span>

      <div className="w-full border shadow-xl bg-neutral">
        <Testimonials tailorDetails={true} />
      </div>
    </>
  );
};

export default AboutUs;
