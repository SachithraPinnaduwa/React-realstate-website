import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

import PropertyList from "./properties/PropertyList";
import EmptyFavorites from "../EmptyFavourites";

export default function Favouritespage() {// this the page that shows the favourite properties


                
  const { property, setProperty, ids, setIds, filteredProperties, handlePressChangeFavourites,properties,
    favouriteProperties,setFavouriteProperties,setPressed,pressed } = useAppContext();

    
  return (
    <div className="bg-[url('./assets/apartmentb.jpg')] bg-cover min-h-screen">
      <h1 className="text-6xl font-bold text-center py-8 text-emerald-500 ">
        Your Favourites {filteredProperties.length === 0 ? "are empty" : ""}
        {/* this chsnges based on whether properties exist or not */}
      </h1>
{filteredProperties.length === 0 ? (
  <EmptyFavorites />
): (
  favouriteProperties.map((property) => (
    <PropertyList
      key={property.id}
      properties={[property]}
      ids={ids}
      setIds={setIds}
    />
  ))
)}

 {/* {favouriteProperties.map((property) => (
        <PropertyList
          key={property.id}
          properties={[property]}
          ids={ids}
          setIds={setIds}
        />
      ))} */}
      
    </div>
  );
}
