import React from "react";

import Property from "./properties/Property";
export default function Favouritespage() {
  return (
    <div className=" bg-[url('./assets/apartmentb.jpg')]  bg-cover ">
      <h1 className="text-6xl font-bold text-center py-8 text-emerald-500">
        Your Favourites
      </h1>

      <Property />
      <Property />
    </div>
  );
}
