import Image from "next/image";
import React from "react";
import Images from "@/assets/Images";

function Services() {
  const services = [
    {
      title: "Private Bug Bounty Program",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      src: Images.service1,
    },
    {
      title: "Continuous Coverage",
      description:
        "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
      src: Images.service2,
    },
    {
      title: "Fully-Managed Triage with Remediation Advice",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      src: Images.service3,
    },
    // {
    //   title: "Bug Bash",
    //   description:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //   src: Images.service4,
    // },
    // {
    //   title: "Attack Surface Management",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.",
    //   src: Images.service5,
    // },
  ];
  return (
    <div className=" py-12 h-fit w-full bg-login-gradient text-neutral flex justify-center items-center">
      <div className="flex h-full flex-col ">
        <div className="w-full flex justify-center">
        <h1 className="text-center font-secondary text-3xl md:text-5xl mb-8 ">
          Services we offer <div className="h-[3px] bg-primary" />
        </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg- w-80 md:w-96 h-fit flex flex-col gap-4 rounded-xl hover:shadow-md hover:shadow-primary"
            >
              <div className="w-68 h-48 md:h-60 rounded-full">
                <Image
                  src={service.src}
                  alt={service.title}
                  className="rounded-t-xl h-[13rem] md:h-60"
                />
              </div>
              <div>
                <div className="px-4 h-48 text-center">
                  <h3 className="my-4 font-secondary text-xl lg:text-2xl font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-base font-primary text-seconda md:text-lg ">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
