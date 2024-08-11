import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full bg-[#7924ab] p-4">
      <div className="mx-w-[1240px] flex mx-auto md:flex justify-between py-[50px] ">
        <div className="m-2">
          <h1 className=" text-[20px] md:text-[30px]  font-bold text-white ">What to learn latest I.T Skills?

          </h1>
          <span className="text-white ">
            sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div className="m-2">
          <input type="text" className=' rounded mb-2 p-2 mr-2  text-slate-500' placeholder=" Enter Email"/>
          <button className=" bg-black hover:first-line: border  border-black p-2 text-white rounded">Get Started</button>
          <br/>
          <p className="text-white ">
            We care about the protection of your data .Read our <br/> <a href=''className="text-white">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
