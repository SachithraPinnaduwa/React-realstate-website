import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

import PropertyList from "../properties/PropertyList";
export default function Maincontent({
  results,
  setResults,
  fetchDat,
  handleChildValue,
  properties,
  setProperties,
  handlePressChangeFavourites,
  childValue,
  favouriteProperties,
  setFavouriteProperties,
  pressed,
  setPressed,
  ids,
  setIds,
}) {
  // this is the state that is used to filter the properties based on the location
  const p = properties.filter((property) => {
    return (
      !childValue ||
      (property &&
        property.location &&
        property.location.toLowerCase().includes(childValue.toLowerCase()))
    );
  });

  return (
    <div className="text-white bg-[url('./assets/apartmentb.jpg')]  bg-cover ">
      <div className="  w-full h-screen   flex flex-col justify-center ">
        <Searchbar
          setResults={setResults}
          results={results}
          fetchDat={fetchDat}
          handleChildValue={handleChildValue}
          properties={properties}
          setProperties={setResults}
          childValue={childValue}
        />
      </div>

      {p.map((filteredProperty) => (
        <PropertyList
          key={filteredProperty.id}
          properties={[filteredProperty]}
          childValue={childValue}
          handlePressChangeFavourites={handlePressChangeFavourites}
          pressed={pressed}
          setPressed={setPressed}
          ids={ids}
          setIds={setIds}
        />
      ))}
    </div>
  );
}
