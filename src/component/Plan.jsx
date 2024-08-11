import React from "react";

export default function Plan() {
  return (
    <div className="py-[100px] px-[70px] ">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3      max-w-[1240px] mx-auto gap-10">
        <div className=" rounded shadow-xl  h-[400px] hover:scale-105 duration-500">
          <div className="flex items-center justify-center">
            <img className="  w-[50px]" src="icon1.png"></img>
          </div>
          <div className=" text-center py-2 text-black border-l-4 font-bold">
            <h3>Web Development</h3>
          </div>
          <div className="text-center py-2 text-black font-bold text-xl">
            <h3>$145</h3>
          </div>
          <div className="text-center  ">Lorem ipsum dolor, sit amet</div>
          <div className="text-center align-baseline py-2">
            Lorem ipsum dolor, sit amet is an idea
            <br />
            the printing
          </div>
          <div className="text-center py-4  ">Lorem ipsum dolor, sit amet</div>
          <div className="flex items-center justify-center py-10">
            <button className="bg-green-400 rounded-sm py-1 px-6 font-semibold ">
              Start Trial
            </button>
          </div>
        </div>
        <div className="  bg-[#894df9ea] shadow-xl  rounded h-[400px]  hover:scale-105 duration-500">
        <div className="flex items-center justify-center">
            <img className="  w-[50px]" src="icon2.png"></img>
          </div>
          <div className=" text-center py-2 text-black border-l-4 font-bold">
            <h3>App Development</h3>
          </div>
          <div className="text-center py-2 text-black font-bold text-xl">
            <h3>$145</h3>
          </div>
          <div className="text-center  ">Lorem ipsum dolor, sit amet</div>
          <div className="text-center align-baseline py-2">
            Lorem ipsum dolor, sit amet is an idea
            <br />
            the printing
          </div>
          <div className="text-center py-4  ">Lorem ipsum dolor, sit amet</div>
          <div className="flex items-center justify-center py-10">
            <button className="bg-zinc-50 rounded-sm py-1 px-6  font-semibold">
              Start Trial
            </button>
          </div>
        </div>
        <div className="  shadow-xl   h-[400px]  hover:scale-105 rounded duration-500">
        <div className="flex items-center justify-center">
            <img className="  w-[50px]" src="icon3.png"></img>
          </div>
          <div className=" text-center py-2 text-black border-l-4 font-bold">
            <h3>Software Enginer</h3>
          </div>
          <div className="text-center py-2 text-black font-bold text-xl">
            <h3>$145</h3>
          </div>
          <div className="text-center  ">Lorem ipsum dolor, sit amet</div>
          <div className="text-center align-baseline py-2">
            Lorem ipsum dolor, sit amet is an idea
            <br />
            the printing
          </div>
          <div className="text-center py-4  ">Lorem ipsum dolor, sit amet</div>
          <div className="flex items-center justify-center py-10">
            <button className="bg-green-400 rounded-sm py-1 px-6  font-semibold ">
              
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
