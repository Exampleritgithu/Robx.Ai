import React from "react";
import { ReactTyped, Typed } from "react-typed";

export default function Banner() {
  return (
    <div className="bg-[#894df9ea] w-full py-[100px] font-bold">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center mt-4">
        <div className=" text-xl md:text-3xl md:p-[24px]">Learn with us</div>
        <h2 className="text-white text-3xl md:text-[50px] mt-4">
          Grow with us{" "}
        </h2>
        <div className="text-[30px]md:text-[50px] md:p-[24px] text-white mt-4 text-2xl">
          Learn
          <ReactTyped
            className="pl-3 text-2xl"
            strings={[
              "Web development",
              "Degital Markiting ",
              "Ehical hacking",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
          
        </div>
        <button className=" bg-black hover:first-line: border  border-black p-2 text-white rounded">Get Started</button>
      </div>
    </div>
  );
}
