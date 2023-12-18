import React from "react";
import SearchForm from "./PropertySearch";
import { Link } from "react-router-dom";
import Property from "./properties/Property";
import Navbar from "./Navbar";

export default function Search() {
  return (
    <div className=" bg-[url('./assets/apartmentb.jpg')]  bg-cover  ">
      <div className="mx-auto text-center flex flex-col  ">
        <div className="md:max-w-[800px] mx-auto h-screen">
          <div className="">
            <h1 className="text-6xl font-bold text-emerald-500 my-10">
              Property for sale in &apos;given location&apos;
            </h1>
            <div className="m-5  mx-auto  rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]">
              <SearchForm />
            </div>
          </div>
        </div>

        {/* here replace this 1 with the location id you want to search for */}
        <Property />
        <Property />
      </div>
    </div>
  );
}
