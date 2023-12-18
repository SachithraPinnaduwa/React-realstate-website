import React from "react";
import house from "../../assets/property/house.jpeg";
import plan from "../../assets/property/plan.png";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Propertypage() {
  const [pressed, setPressed] = useState(false);
  return (
    <div className="max-w-[1240px] md:grid md:grid-cols-3 mx-auto my-10 sm:justify-center">
      {/* this is the main content */}
      <div className="col-span-2">
        <img src={house} alt="/" className="w-[820px] mx-auto " />

        {/* this sections is the section 1  main picture */}
        <div className="grid grid-flow-col">
          <div className=" ml-10 mt-5">
            <h1>Name of property</h1>
            <p className="mt-10">
              Property price <span className="font-bold">$$$$$$</span>
            </p>
          </div>

          <div className=" mt-5 mr-10  grid grid-flow-row">
            <div>
              <button
                onClick={() => {
                  setPressed(!pressed);
                }}
                className="float-right"
              >
                {!pressed ? (
                  <CiHeart
                    size={30}
                    className="text-teal-500 font-extrabold  hover:cursor-pointer hover:text-teal-600 "
                    style={{ strokeWidth: 1.5 }}
                  />
                ) : (
                  <FaHeart
                    size={30}
                    className="text-teal-500 font-extrabold  hover:cursor-pointer hover:text-teal-600 "
                  />
                )}
              </button>
            </div>
            <div className="mt-10">
              <p className="float-right font-light text-sm">
                Added on: <p className="font-bold text-sm">yyyy-mm-dd</p>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="border-b-4 my-4"></div>
        {/* this sections is the section 1  main picture */}
        <div className="grid grid-flow-col">
          <div>
          <p className="text-base ml-10 mt-5">
            Property type<p className="font-bold text-xl">Type</p>
          </p>
          </div>
          <div className="float-right">
          <p className="text-base mt-5">
            Bedrooms<p className="font-bold text-xl">Number</p>
          </p>
          </div>
        </div>
      </div>

      {/* this is the side bar */}
      <div className="lg:visible mt-10 sm:mt-0 sm:block ">
        <img src={plan} alt="/" className="w-[410px] mx-auto" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in
        vel ad aliquam magni beatae repellendus odit, molestiae at laboriosam
        tempora veritatis ab saepe maiores nulla fugiat facilis. Modi, ipsum.
      </div>
    </div>
  );
}
