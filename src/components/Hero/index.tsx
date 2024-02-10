import React from "react";
import styles from "./hero.module.css";
import Navbar from "../Navbar";
import Button from "@/reusable/button";
import heroImg from "../../../public/assets/images/heroImg.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className={`${styles.hero} h-[90vh] lg:min-h-[100vh] lg:h-full w-full`}
    >
      <Navbar />
      <div className="px-5 lg:px-[120px] flex flex-col items-center mt-[64px] pb-0 lg:pb-10">
        <div className="px-0 lg:px-[170px] flex flex-col items-center">
          <h1 className="text-[#2A4137] text-[26px] lg:text-[52px] text-center">
            Revolutionizing School Activities & Inventory Management with{" "}
            <span className="text-[#329CA4]">Mystrel</span>
          </h1>
          <p className="mt-[16px] px-0 lg:px-[100px] text-center mb-[48px] text-md lg:text-xl">
            the ultimate school management solution designed to streamline your
            institution's operations, managing a school's myriad activities.
          </p>
          <div className="flex flex-col lg:flex-row gap-3 mb-[54px]">
            <Button className="text-[#287B81] border-[#287B81] h-[46px] border py-[13px] px-5 rounded-[18px]">
              Learn More
            </Button>
            <Button className="text-[#fff] bg-[#287B81] border-[#287B81] h-[46px] border py-[13px] px-5 rounded-[18px]">
              Get started
            </Button>
          </div>
        </div>
        <Image src={heroImg} alt="mystrel" />
      </div>
    </div>
  );
};

export default Hero;
