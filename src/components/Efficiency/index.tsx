import React from "react";
import styles from "./efficiency.module.css";
import grid1 from "../../../public/assets/images/grid1.png";
import grid3 from "../../../public/assets/images/grid2.png";
import grid6 from "../../../public/assets/images/grid6.png";
import grid8 from "../../../public/assets/images/grid8.png";
import Image from "next/image";

const Efficiency = () => {
  return (
    <div className="px-4 lg:px-[80px] py-[60px] lg:py-[96px] h-max w-full">
      <div
        className={`${styles.efficiency} h-max w-full rounded-[16px] px-4 lg:px-6 py-8 lg:py-12 text-[#fff]`}
      >
        <h2 className="mb-[14px] text-2xl lg:text-3xl font-medium">
          Ready to Elevate Your School's Efficiency?
        </h2>
        <p className="text-[14px] w-full lg:w-[60%] mb-8">
          Join the numerous institutions already benefiting from the streamlined
          operations and improved educational outcomes provided by Mystreal.
          It's time to bring your school into the future, one click at a time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 bg-gray-200 h-[250px] lg:h-[300px] rounded-[16px]">
            <Image
              src={grid1}
              alt=""
              className="h-full w-full object-cover rounded-[16px]"
            />
          </div>
          <div className="md:col-span-1 text-[#27404A] flex flex-col items-start justify-between bg-[#fff] p-4 h-[250px] lg:h-[300px] rounded-[16px]">
            <h3 className="text-2xl font-medium">Seamless School Operations</h3>
            <h1 className="text-5xl font-semibold">83%</h1>
          </div>
          <div className="md:col-span-1 bg-gray-400 h-[250px] lg:h-[300px] rounded-[16px]">
            <Image
              src={grid3}
              alt=""
              className="h-full w-full object-cover rounded-[16px]"
            />
          </div>
          <div className="md:col-span-1 bg-[#438B91] text-[#fff] flex flex-col items-start justify-between p-4 h-[250px] lg:h-[300px] rounded-[16px]">
            <h3 className="text-[26px] font-medium">
              Inventory Management Made Easy
            </h3>
            <h1 className="text-5xl font-semibold">92%</h1>
          </div>
          <div className="md:col-span-1 bg-[#438B91] text-[#fff] flex flex-col items-start justify-between p-4 h-[250px] lg:h-[300px] rounded-[16px]">
            <h3 className="text-[26px] font-medium">Engage Your Community</h3>
            <h1 className="text-5xl font-semibold">25%</h1>
          </div>
          <div className="md:col-span-1 bg-gray-700 h-[250px] lg:h-[300px] rounded-[16px]">
            <Image
              src={grid6}
              alt=""
              className="h-full w-full object-cover rounded-[16px]"
            />
          </div>
          <div className="md:col-span-1 text-[#27404A] flex flex-col items-start justify-between bg-[#fff] p-4 h-[250px] lg:h-[300px] rounded-[16px]">
            <h3 className="text-2xl font-medium w-[70%]">
              Data-Driven Decisions
            </h3>
            <h1 className="text-5xl font-semibold">65%</h1>
          </div>
          <div className="md:col-span-1 bg-gray-900 h-[250px] lg:h-[300px] rounded-[16px]">
            <Image
              src={grid8}
              alt=""
              className="h-full w-full object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Efficiency;
