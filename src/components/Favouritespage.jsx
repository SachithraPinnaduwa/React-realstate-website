import React, { useEffect, useState } from "react";

import PropertyList from "./properties/PropertyList";

export default function Favouritespage({
  property,
  setProperty,
  ids,
  setIds,
  handlePressChangeFavourites,
  pressed,
  setPressed,
  favouriteProperties,
  setFavouriteProperties,
  filteredProperties,
}) {// this the page that shows the favourite properties
  return (
    <div className="bg-[url('./assets/apartmentb.jpg')] bg-cover min-h-screen">
      <h1 className="text-6xl font-bold text-center py-8 text-emerald-500 ">
        Your Favourites {filteredProperties.length === 0 ? "are empty" : ""}
        {/* this chsnges based on whether properties exist or not */}
      </h1>

      <PropertyList
        properties={filteredProperties}
        handlePressChangeFavourites={handlePressChangeFavourites}
        pressed={pressed}
        setPressed={setPressed}
      />
    </div>
  );
}
