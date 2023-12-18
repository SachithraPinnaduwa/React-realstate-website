import React from "react";
import SearchForm from "./PropertySearch";
import { Link } from "react-router-dom";
import Property from "./properties/Property";
import Navbar from "./Navbar";

export default function Search() {
  return (
    <div className=" bg-[url('./assets/apartmentb.jpg')]  bg-cover  ">
         
      <div className="  w-full  mx-auto text-center flex flex-col  ">
      
        <div className="h-20">

        </div>
        <h1 className="text-6xl font-bold text-emerald-500 my-10">
          Property for sale in &apos;given location&apos;
        </h1>
        <div className="py-6  mx-auto justify-center bg-slate-300 rounded-2xl p-4">
          <SearchForm />
        </div>

        
        {/* here replace this 1 with the location id you want to search for */}
        <Property />
        <Property />
      </div>
    </div>
  );
}
