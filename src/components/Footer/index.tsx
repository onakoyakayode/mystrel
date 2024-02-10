import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#062318] w-full px-5 lg:px-[100px] pt-[60px] pb-5 text-[#fff]">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-start justify-between ">
        <div className="flex flex-col">
          <h3 className="mb-3 lg:mb-8 text-[20px] font-medium">About Us</h3>
          <ul className="flex flex-col gap-6 text-[13px] font-light">
            <Link href="">Our Company</Link>
            <Link href="">Contact Us</Link>
            <Link href="">Careeer</Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-3 lg:mb-8 text-[20px] font-medium">Mystreal</h3>
          <ul className="flex flex-col gap-6 text-[13px] font-light">
            <Link href="">Warranty</Link>
            <Link href="">Terms & Condition</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Sell on Mystreal</Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-3 lg:mb-8 text-[20px] font-medium">Services</h3>
          <ul className="flex flex-col gap-6 text-[13px] font-light">
            <Link href="">Safety Center</Link>
            <Link href="">Delivery</Link>
            <Link href="">Return Policy</Link>
            <Link href="">Digital Service</Link>
            <Link href="">Bulk Purchase</Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-3 lg:mb-8 text-[20px] font-medium">Help</h3>
          <ul className="flex flex-col gap-6 text-[13px] font-light">
            <Link href="">FAQs</Link>
            <Link href="">Authentic item policy</Link>
          </ul>
        </div>
      </div>
      <div className="mt-[60px] flex flex-col-reverse justify-between items-start lg:items-end">
        <div className="flex justify-start items-center gap-3 text-[12px]">
          <p>&copy;2024 Mystreal</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="mb-[20px] lg:mb-0">
          <p className="mb-4 lg:mb-[35px] text-[14px] font-light">
            Email Support: <Link href="">help@mystreal.com</Link>
          </p>
          <div className="flex items-center justify-normal gap-5">
            <FaLinkedin className="w-[24px] h-[24px] object-cover" />
            <FaTwitter className="w-[24px] h-[24px] object-cover" />
            <FaFacebook className="w-[24px] h-[24px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
