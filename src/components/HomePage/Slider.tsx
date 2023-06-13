import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Images from "@/assets/Images";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="h-[19rem] my-auto w-screen md:w-[90%] flex items-center lg:w-[80%] mx-auto mt-4 rounded">
      <Slider
        {...settings}
        className="w-full m-auto flex justify-center items-center "
      >
        {specialCategories.map((category, index) => (
          <div key={index} className="w-96 h-60 px-4 hover:scale-[1.01] ease-in relative">
            <div className="w-full h-full rounded-xl ">
              <Image
                className="w-full rounded h-full opacity-80 border-2"
                src={category.Image}
                alt={category.categoryName}
              />
            </div>
            <div className="absolute bottom-0 left-[45%] text-neutral text-2xl text-center flex flex-col justify-center items-center font-bold mb-8">
              <h1 className="font-secondary">{category.categoryName}</h1>
              {/* <p>{category.desc}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSlider;
