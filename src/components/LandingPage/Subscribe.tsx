import Image from "next/image";
import React from "react";
import Images from "@/assets/Images";
import TextInput from "../Common/Inputs/TextInput";

const Subscribe = () => {
  return (
    <section className="bg-secondary text-neutral p-4 py-8 flex justify-center">
      <div className="lg:w-[75%] md:w-[90%] px-4 my-8 flex flex-col sm:flex-row items-center justify-evenly">
        <div className="sm:w-1/2 h-[100%] mb-4 sm:mr-4">
          <Image className="w-full h-full rounded " src={Images.service2} alt="subscribe photo" />
        </div>
        <div className="sm:w-1/2 sm:mx-2">
          <h1 className="text-2xl font-bold sm:text-3xl mb-6 font-secondary">Subscribe to your newsletter</h1>
          <p className="text-xl sm:text-2xl mb-6 font-primary">
            Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy.
          </p>
          <div className="flex p-2">
            <input className="rounded-l font-primary w-full border-none px-4 text-xl focus:outline-none" type="email" placeholder="email@freshmeal.com" />
            <button className="py-4 font-secondary px-8 border-none bg-primary text-white rounded-r text-xl cursor-pointer transition-ease-in-out outline-none">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
