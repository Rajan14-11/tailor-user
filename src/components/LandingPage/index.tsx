import React from "react";
import Header from "@/components/Header/Header";
import HeroPage from "@/components/LandingPage/HeroPage";
import Services from "@/components/LandingPage/Services";
import Footer from "@/components/LandingPage/LandingPageFooter";
import Subscribe from "@/components/LandingPage/Subscribe";
import Contact from "@/components/LandingPage/Contact";
import About from "@/components/LandingPage/About";
import Testimonials from "@/components/LandingPage/Testimonials";
import Image from "next/image";
import Images from "@/assets/Images";

function LandingPage() {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-full h-full -z-10">
          <Image
            src={Images.herobg}
            alt="herobg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="w-full h-full backdrop-brightness-50">
            <Header />
            <HeroPage />
          </div>
        </div>
      </div>
      {/* <About /> */}

      <Services/>
      <Testimonials />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
