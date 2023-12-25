import React, { useEffect, useState } from "react";

import PropertyList from "./properties/PropertyList";

export default function Favouritespage({property,setProperty,ids,setIds,handlePressChangeFavourites,
                   pressed,setPressed,favouriteProperties,setFavouriteProperties,filteredProperties}) {



  return (
    <div className="bg-[url('./assets/apartmentb.jpg')] bg-cover min-h-screen">
      <h1 className="text-6xl font-bold text-center py-8 text-emerald-500 ">
        Your Favourites {filteredProperties.length===0 ? "are empty" : ""}
      </h1>



      <PropertyList properties={filteredProperties} handlePressChangeFavourites={handlePressChangeFavourites}
      pressed={pressed} setPressed={setPressed}
      />
    </div>
  );
}
