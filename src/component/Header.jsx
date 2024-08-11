import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#894df9ea] p-4  ">
      <div className="max-w-[1240px] py-[12px] pl-[50px] pr-[70px] items-center  flex justify-between mx-auto ">
        <div className="text-3xl font-bold text-white">Robx</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="  hidden md:flex text-white gap-9">
          <li>Home</li>
          <li>About</li>
          <li>Contect</li>
          <li>company</li>
        </ul>
        {/*Responsive menu*/}
        <ul
          className={` duration-300 md:hidden  w-full h-screen text-white fixed bg-black top-[93px]
             ${toggle ? "left-[0]" : "left-[-100%]"}
             `}
        >
          <li className="p-3 ">Home</li>
          <li className="p-3">About</li>
          <li className="p-3">Contect</li>
          <li className="p-3">company</li>
        </ul>
      </div>
    </div>
  );
}
