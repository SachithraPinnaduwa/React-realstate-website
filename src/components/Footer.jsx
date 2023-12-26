import React from "react";
import { Link } from "react-router-dom";
import { MdContacts } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";
export default function Footer() {
  return (
    <div className=" py-16 grid lg:grid-cols-3  text-gray-300  bg-gray-600 mx-auto">
      <div className="md:pl-20 ">
        <h1 className="w-full text-3xl font-bold text-green-400">
          <PiHouseBold />
        </h1>
        <p className="py-4">
            {" "}
            We hope you&apos;ve enjoyed exploring the possibilities of your dream
            property through our comprehensive listings and intuitive search
            functions. Remember, finding the perfect real estate isn&apos;t just about
            the bricks and mortar – it&apos;s about discovering a place that fuels your
            passions and ignites your life&apos;s next chapter. 
        </p>
        
      </div>

      <div className="md:col-span-2 flex justify-between lg:pl-60 ">
        <div>
          <ul>
          <li className='p-4'><Link to="/">Home</Link></li>
          <li className='p-4'><Link to="/search">Search</Link></li>
          <li className='p-4'><Link to="/favourites">Favourites</Link></li>
           
          </ul>
        </div>
        <div>
          <ul>
          <li className="py-2">Legal</li>
            <li className="py-2">About</li>
            <li className="py-2">Policy</li>
          </ul>
        </div>
        <div className="md:pr-20">
          <ul>
            <li className="py-2"> <MdContacts size={30} className=" mx-2 hover:cursor-pointer" /></li>
            <li className="py-2"><MdEmail size={30} className=" mx-2 hover:cursor-pointer" /></li>
            <li className="py-2"><IoShareSocial size={30} className=" mx-2 hover:cursor-pointer" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
