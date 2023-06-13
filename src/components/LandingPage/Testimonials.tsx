import Image from "next/image";
import React from "react";
import Images from "@/assets/Images";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
import Slider from "react-slick";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { string } from "yup";

interface Props{
  tailorDetails?:boolean
}

function Testimonials({tailorDetails}:Props) {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <MdArrowForwardIos />,
    prevArrow: <MdArrowBackIosNew />,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  };

  const testimonials = [
    {
      userImg: Images.userImg,
      testimonial:
        "Hi, I just wanted to tell you thank you for the die roller on your site. I am a 5th grade math teacher. I developed a lesson on comparing decimals around a game, but I forgot to bring the dice to school. Your website saved my lesson! I was able to project the die roller on my Smartboard and we were able to play as a whole class. Thanks!",
      userName: "Stephanie J. Thomas",
      designation: "Math Teaching",
    },
    {
      userImg: Images.userImg,
      testimonial:
        "I used Random.org to simulate noisy transistors in circuit simulations for a school project (and made sure to credit Random.org for the data in the report!) ",
      userName: "Stanton Royce",
      designation: "Noisy Transistor Simulations",
    },
    {
      userImg: Images.userImg,
      testimonial:
        "As Ethics and Compliance Officer for a University research and health care clinic, I use your random number generator to select records for review or audit. The US Office of Inspector General suggests standards for compliance programs. Compliance programs are to assure companies and institutions are complying with various regulations are",
      userName:
        "Alfred J. Baginski",
      designation: "Financial Auditing",
    },
    {
      userImg: Images.service3,
      testimonial:
        "Greetings, I just wanted to send you a note to say that we are using your web site to do random sampling for Sarbanes–Oxley compliance audits. We include screen prints of your web site to document our selection universe and the random integers generated. Thanks for making it available.",
      userName: "Joe Glade, Resources Global Professionals, USAs",
      designation: "Math Teaching",
    },
  ];


  return (
    <div className="flex justify-center bg-neutral">
      <div className={`h-fit w-full sm:w-[75%] p-4 bg-neutral text-secondary flex flex-col my-12 ${tailorDetails?"lg:w-full":"lg:w-[60%]"} `}>
        <div className="w-full text-center mx-auto flex justify-center mb-12">
          <h1 className="font-secondary w-fit text-3xl md:text-5xl text-center">
            Testimonials <div className="h-[3px] bg-primary" />
          </h1>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shadow-inner bg-secondary text-neutral p-4 h-[22rem] w-96 flex flex-col md:flex-row items-center justify-center rounded lg:w-[50%] lg:mx-auto "
            >
              <div className="w-full md:mr-8 h-32 md:translate-y-0 flex justify-center items-center ">
                <Image
                  className="w-32 h-32 rounded-full shadow-xl "
                  src={testimonial.userImg}
                  alt={"userPic"}
                />
              </div>
              <div className="flex flex-col">
                <div className="w-full text-center text-neutral leading-7 flex flex-col items-center mt-2 relative">
                  <RiDoubleQuotesL className="absolute left-0 sm:left-[-3%] md:left-0 top-[-3%]" />
                  <div className="w-[90%] element font-primary">
                    {testimonial.testimonial}
                  </div>
                  <RiDoubleQuotesR className="absolute right-0 bottom-0 md:bottom-[5%]" />
                </div>
                <div className="flex flex-col items-center text-primary font-bold justify-center mt-4">
                  <h1 className="text-center font-secondary">{testimonial.userName}</h1>
                  <p className="text-sm font-primary">
                    ({testimonial.designation})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <div className="flex flex-wrap gap-16 md:gap-12 mb-8 ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="shadow-inner bg-slate-200 p-4 h-fit w-full flex flex-col md:flex-row items-center rounded lg:w-[80%] lg:mx-auto ">
            <div className="w-full md:w-[30%] md:mr-8 h-32 translate-y-[-40%] md:translate-y-0 flex justify-center items-center ">
              <Image
                className="w-32 h-32 rounded-full shadow-xl "
                src={testimonial.userImg}
                alt={"userPic"}
              />
            </div>
            <div className="flex flex-col md:w-[70%]">
            <div className="w-full text-center text-black leading-7 flex flex-col items-center mt-2 relative">
                <RiDoubleQuotesL className="absolute left-[-3%] md:left-0 top-[-5%]" />
              <p className='w-[90%]'>

                {testimonial.testimonial}

              </p>
                <RiDoubleQuotesR className="absolute right-0 bottom-0 md:bottom-[5%]"/>
            </div>
            <div className="flex flex-col items-center text-darkBrown font-bold justify-center mt-4">
              <h1 className="text-center">{testimonial.userName}</h1>
              <p className="text-sm font-normal">({testimonial.designation})</p>
            </div>
            </div>
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
}

export default Testimonials;
