import React from "react";
import TextInput from "../Common/Inputs/TextInput";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import Footer from "../Footer/Footer";

const LandingPageFooter = () => {
  const services = [
    { title: "Solution 1" },
    { title: "Solution 2" },
    { title: "Solution 3" },
    { title: "Solution 4" },
  ];

  const company = [
    { title: "About" },
    { title: "Blog" },
    { title: "Jobs" },
    { title: "Partners" },
  ];
  const legal = [
    { title: "Claims" },
    { title: "Privacy" },
    { title: "Terms" },
    { title: "Policies" },
    { title: "Conditions" },
  ];
  const social = [
    { title: <FaFacebook /> },
    { title: <FaInstagram /> },
    { title: <FaTwitter /> },
    { title: <FaTwitch /> },
    { title: <FaGithub /> },
  ];
  return (
    <div className="flex flex-col bg-secondary text-white w-full h-fit font-secondary">
      <div className="flex w-full h-fit gap-4 justify-between p-8 flex-col sm:flex-row sm:justify-evenly">
        <div className="flex justify-between sm:w-1/2 ">
          <div className="font-secondary flex flex-col h-full justify-around items-center sm:justify-start w-1/2">
            <h1 className="text-center w-1/2 sm:mb-4 cursor-pointer md:text-2xl">
              Tailor
            </h1>
            <div className="flex flex-wrap w-1/2 justify-around">
              {social.map((icon, index) => (
                <div
                  key={index}
                  className="m-1 cursor-pointer hover:text-primary hover:scale-[1.3] md:text-2xl"
                >
                  {icon.title}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-1/2 items-center sm:items-center">
            <h1 className="text-xl font-secondary">
              Solutions<div className="h-[2px] bg-primary"></div>
            </h1>
            <ul className="text-center">
              {services.map((item, index) => (
                <li
                  key={index}
                  className="py-1 font-secondary cursor-pointer hover:text-primary hover:scale-110"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between sm:w-1/2">
          <div className="flex flex-col w-1/2 items-center">
            <h1 className="text-xl">
              Company<div className="h-[2px] bg-primary"></div>
            </h1>
            <ul className="text-center">
              {company.map((item, index) => (
                <li
                  key={index}
                  className="py-1 cursor-pointer hover:scale-110 hover:text-primary"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center sm:justify-center sm:items-center w-1/2">
            <h1 className="text-xl">
              Legal<div className="h-[2px] bg-primary"></div>
            </h1>
            <ul className="text-center">
              {legal.map((item, index) => (
                <li
                  key={index}
                  className="py-1 cursor-pointer hover:scale-110 hover:text-primary"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>{<Footer />}</div>
    </div>
  );
};

export default LandingPageFooter;
