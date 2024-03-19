import React from "react";
import { Link } from "react-router-dom";
import { MdContacts } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";
export default function Footer() {
  return (
    <div className=" py-16 grid lg:grid-cols-3  text-gray-300  bg-gray-600 mx-auto ">
      <div className=" md:mx-auto">
        <h1 className="w-full text-3xl font-bold text-green-400 flex justify-center">
          <PiHouseBold />
        </h1>
        <p className="py-4 md:mx-6">
            
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
          <li className='p-4 hover:cursor-pointer hover:underline'><Link to="/">Home</Link></li>
          <li className='p-4 hover:cursor-pointer hover:underline'><Link to="/search">Search</Link></li>
          <li className='p-4 hover:cursor-pointer hover:underline'><Link to="/favourites">Favourites</Link></li>
           
          </ul>
        </div>
        <div>
          <ul>
          <li className="p-4 hover:cursor-pointer hover:underline">Legal</li>
            <li className="p-4 hover:cursor-pointer hover:underline">About</li>
            <li className="p-4 hover:cursor-pointer hover:underline">Policy</li>
          </ul>
        </div>
        <div className="md:pr-20">
          <ul>
            <li className="p-4 hover:cursor-pointer hover:underline"> <MdContacts size={30} className=" mx-2 hover:cursor-pointer" /></li>
            <li className="p-4 hover:cursor-pointer hover:underline"><MdEmail size={30} className=" mx-2 hover:cursor-pointer" /></li>
            <li className="p-4 hover:cursor-pointer hover:underline"><IoShareSocial size={30} className=" mx-2 hover:cursor-pointer" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

