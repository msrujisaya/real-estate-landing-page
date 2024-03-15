import icon from "./images/icon.png";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function FifthPage() {
  return (
    <div className=" w-[1200px] h-[313px]  flex flex-row mt-[80px] mb-[80px]">
      <div className=" w-[35%] flex flex-col justify-between">
        <div className=" flex flex-row ">
          <img src={icon} className=" mr-[10px]" />
          <div>
            <h1 className=" text-black text-2xl font-semibold">logoipsum</h1>
            <p className="text-black text-xs font-semibold text-right">.com</p>
          </div>
        </div>
        <div className=" text-left text-[#8F90A6] text-[14px] mt-[-30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          molestiae perferendis quidem tempore repudiandae. Labore dicta
          voluptatem veniam eveniet modi quaerat rem est pariatur, ullam
          distinctio vitae iure numquam incidunt.
        </div>
        <div className=" flex flex-row gap-5">
          <BsFacebook className=" text-blue-700 text-2xl" />
          <FaTwitter className=" text-blue-500 text-2xl" />
          <FaInstagram className=" text-pink-500 text-2xl" />
          <FaLinkedin className=" text-blue-700 text-2xl" />
        </div>
        <div className=" text-left text-[#8F90A6]">
          &#9400; 2021, All rights reserved.
        </div>
      </div>
      <div className=" flex flex-col w-[17.5%] h-[313px] pl-16">
        <h1 className=" font-bold text-xl h-[36px] text-left">Take a tour</h1>
        <div className="  flex flex-col h-full justify-between pt-[30px]">
          <p className=" text-left text-black">Features</p>
          <p className=" text-left text-black">Partners</p>
          <p className=" text-left text-black">Pricing</p>
          <p className=" text-left text-black">Product</p>
          <p className=" text-left text-black">Support</p>
        </div>
      </div>
      <div className=" flex flex-col w-[17.5%] h-[313px] pl-16">
        <h1 className=" font-bold text-xl h-[36px] text-left">Our Company</h1>
        <div className="  flex flex-col h-full justify-between pt-[30px]">
          <p className=" text-left text-black">About Us</p>
          <p className=" text-left text-black">Agents</p>
          <p className=" text-left text-black">Blog</p>
          <p className=" text-left text-black">Media</p>
          <p className=" text-left text-black">Contact Us</p>
        </div>
      </div>
      <div className="  w-[30%] pl-16">
        <h1 className=" font-bold text-xl h-[36px] text-left mb-5">
          Subscribe
        </h1>
        <p className=" text-left text-[14px] mb-6">
          Subscribe to get latest property, blog news from us
        </p>
        <form className=" text-left relative">
          <input
            type="text"
            placeholder="Email Address"
            className=" w-[277px] h-[54px] rounded-[15px] border-2 border-[#DODOE3] text-start text-sm pl-4"
          />
          <button className=" bg-[#1DAEFF] rounded-full h-[34px] w-[34px] text-white font-bold absolute top-2.5 right-8">
            {" "}
            &rarr;{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FifthPage;
