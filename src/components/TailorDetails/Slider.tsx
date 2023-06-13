 import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Images from "@/assets/Images";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const TailorDetailsSlider = () => {
    var settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      nextArrow: <MdArrowForwardIos />,
      prevArrow: <MdArrowBackIosNew />,
      appendDots: (dots: any) => <ul>{dots}</ul>,
    };
    const specialCategories = [
      {
        categoryName: "Kurtas",
        Image: Images.service1,
        desc: "bhbhjgjbhbvhkjhjkhkjhjkjkbkjbkjbkjbkjbjkbjkbjbjbjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
      },
      {
        categoryName: "Pants",
        Image: Images.service2,
        desc: "",
      },
      {
        categoryName: "Shirts",
        Image: Images.service3,
        desc: "",
      },
      {
        categoryName: "Blazers",
        Image: Images.service4,
        desc: "",
      },
      {
        categoryName: "Suits",
        Image: Images.service5,
        desc: "",
      },
    ];
  return (

    <div className="h-[35rem] w-screen relative md:w-full mx-auto rounded mb-4">
      <Slider
        {...settings}
        className="relative w-full m-auto flex jsutify-center items-center "
      >
        {specialCategories.map((category, index) => (
          <div key={index} className="w-full h-[30rem] hover:scale-[0.99] ease-in">
            <div className="w-full h-full rounded-xl relative ">
              <Image
                className="w-full rounded h-full opacity-90"
                src={category.Image}
                alt={category.categoryName}
              />
            </div>
          </div>
        ))}
      </Slider>
            <div className="absolute bottom-1/4 left-[45%] text-neutral text-2xl text-center flex flex-col justify-center items-center font-bold mb-8 font-secondary">
              <h1>TAilor Details</h1>
              {/* <p>{category.desc}</p> */}
            </div>
    </div>
  );
}

export default TailorDetailsSlider