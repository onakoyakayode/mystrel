import React from "react";
import styles from "./whatWeDo.module.css";
import contents from "../../../public/json/whatwedo.json";
import Button from "@/reusable/button";
import { BsArrowRight } from "react-icons/bs";
import teacherForm from "../../../public/assets/images/teacher.png";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div
      className={`${styles.whatWeDo} h-max lg:h-screen w-full px-5 lg:px-[120px] py-[60px] lg:py-[100px] overflow-hidden`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start w-full">
        <div className="w-full lg:w-[45%]">
          <h3 className="text-[#1B583E] text-[17px] mb-3">What we do</h3>
          <h2 className="text-[#4A4A4A] text-3xl font-medium">
            What do we offer you
          </h2>
          <ul className="mt-[64px] flex flex-col items-start gap-[30px] mb-[50px]">
            {contents.map((content) => (
              <li
                key={content.id}
                className="bg-[#E0F5F5] p-3 lg:p-6 text-[#4d91aa] text-[13px] lg:text-[14px]"
              >
                {content.content}
              </li>
            ))}
          </ul>
          <Button className="flex justify-center items-center gap-2 rounded-[16px] bg-[#287B81] text-[#fff] px-5 py-4">
            Learn More
            <BsArrowRight />
          </Button>
        </div>
        <div className="w-full lg:w-[45%] mt-[20px] lg:mt-0 overflow-hidden">
          <div className="overflow-hidden">
            <Image
              src={teacherForm}
              alt="mystrel"
              className="w-full h-full overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
