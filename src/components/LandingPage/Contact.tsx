import Images from "@/assets/Images";
import Image from "next/image";
import React from "react";
import {FiPhoneCall} from 'react-icons/fi'
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";

export const ContactDetails = ()=>{
  return (
    <div className="sm:py-8 sm:w-2/3">
      <div className="flex justify-center text-2xl font-bold">
        <h1 className="text-center font-secondary">
          Contact Us <div className="h-[2px] bg-primary" />
        </h1>
      </div>
      <div className="my-4 sm:mx-4 font-primary  text-base sm:text-lg flex justify-evenly items-center mb-4">
        {/* <Image className="w-1/6 mr-4 " src={Images.phone} alt="" /> */}
        <div className="w-1/3 h-12">
          <FiPhoneCall className="text-primary w-full h-full" />
        </div>
        <div className="flex flex-col w-4/6">
          <span className="mb-2">Call Us:</span>
          <h5>(+84) 0876535553</h5>
        </div>
      </div>
      <div className="my-4 sm:mx-4 font-primary text-base sm:text-lg flex items-center justify-evenly mb-8">
        {/* <Image className="w-1/6 mr-4" src={Images.email} alt="" /> */}
        <div className="w-1/3 h-12">
          <AiOutlineMail className="text-primary  w-full h-full" />
        </div>
        <div className="flex flex-col w-4/6">
          <span className="mb-2">Email Us:</span>
          <h5>support@Freashmeal.com</h5>
        </div>
      </div>
      <div className="my-4 sm:mx-4 font-primary text-base sm:text-lg flex items-center justify-evenly mb-8">
        {/* <Image className="w-1/6 mr-4" src={Images.clock} alt="" /> */}
        <div className="w-1/3 h-12">
          <AiOutlineClockCircle className="text-primary w-full h-full" />
        </div>
        <div className="flex flex-col w-4/6">
          <span className="mb-2">Working Hours:</span>
          <h5>Mon - Sat(8:00am - 6:00pm)</h5>
        </div>
      </div>
    </div>
  );
}


const Contact = () => {
  return (
    <section className="p-4 w-full h-fit bg-neutral">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center">
       <ContactDetails/>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27208.584398518058!2d75.9103488!3d31.522153550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683295036778!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
