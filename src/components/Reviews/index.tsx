import React from "react";
import reviewImg from "../../../public/assets/images/review.png";
import Image from "next/image";
import StarRating from "../StarRating";
import Button from "@/reusable/button";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Reviews = () => {
  return (
    <div className="px-5 lg:px-[120px] py-[60px]">
      <h6 className="text-[#438B91] mb-[12px]">Reviews</h6>
      <h2 className="text-[#4A4A4A] text-2xl font-semibold mb-[48px]">
        Reviews from successful users
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between bg-[#F9F9F9] py-8 px-2 lg:px-5">
        <div className="w-full lg:w-[45%] text-[#636363]">
          <StarRating />
          <p className="mb-3 lg:mb-6 text-[14px]">
            Before Mystrel, managing the myriad tasks involved in school
            operations felt like steering a ship through a storm. Attendance
            tracking was time-consuming, scheduling was a logistical nightmare,
            and inventory control was often imprecise and inefficient. However,
            since implementing Mystrel, these challenges have become a thing of
            the past.
          </p>
          <h5 className="text-[15px] font-semibold mb-2">Sheldon Cooper</h5>
          <h6 className=" mb-[45px] lg:mb-[85px]">School owner</h6>
          <div className="flex items-center justify-start gap-4">
            <Button className="w-12 h-12 rounded-full border-[#287B81] border text-[#287B81]">
              <BsArrowLeft />
            </Button>
            <Button className="w-12 h-12 rounded-full bg-[#287B81] text-[#fff]">
              <BsArrowRight />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-[45%] mt-[25px] lg:mt-0">
          <Image src={reviewImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
