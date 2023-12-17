import React from "react";
import SearchForm from "./PropertySearch";
import { Link } from "react-router-dom";
import Property from "./properties/Property";

export default function Search() {
  return (
    <div className=" bg-[url('./assets/apartmentb.jpg')]  bg-cover  ">
      <div className=" md:mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <h1 className="text-3xl font-bold text-emerald-500 ">
          Property for sale in &apos;given location&apos;
        </h1>
        <div className="py-6  mx-auto justify-center bg-slate-300 rounded-2xl p-4">
          <SearchForm />
        </div>

        <Link to="/search/1" className="text-3xl font-bold text-emerald-500 ">
          Property
        </Link>
        {/* here replace this 1 with the location id you want to search for */}
      </div>
    </div>
  );
}
