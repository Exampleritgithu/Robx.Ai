import React from "react";

export default function Export() {
  return (
    <div className="max-w-[1240px] mx-auto my-10 p-2 px-20 md:grid grid-cols-3 justify-center ">
      <div className="  hover:scale-50 duration-500 col-span-1 w-[80%]">
        <img src="Robx.png" alt="" />
      </div>
      <div className="  col-span-2">
        <h1 className="font-bold p-2 text-[#7924ab]  text-3xl my-3">
          What you’ll learn in this demo.
        </h1>
        <p className=" my-5 text-justify">
          If you’re looking for a way to gain new subscribers, communicate more
          effectively, or grow your business, you’re in the right place.
          SimpleTexting provides a number of tools that you can use to build
          your subscriber lists, and the most popular is
        </p>
        <button className=" bg-black hover:first-line: border  border-black p-2 text-white rounded font-bold ">
          Get Started
        </button>
      </div>
    </div>
  );
}
