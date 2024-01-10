import React from "react";
import Property from "./Property";

export default function PropertyList({
  properties,
  handlePressChangeFavourites,
  pressed,
  setPressed,
  ids,
  setIds,
 favouriteProperties,
 setFavouriteProperties,
}) {

  // this is the component that is used to map through the properties and display them
  return (
    <div className="text-black">
      {properties.map((property) => (
        <Property
          key={property.id}
          {...property}
          handlePressChangeFavourites={handlePressChangeFavourites}
          pressed={pressed}
          setPressed={setPressed}
          ids={ids}
          setIds={setIds}
            favouriteProperties={favouriteProperties}
            setFavouriteProperties={setFavouriteProperties}
        />
      ))}
    </div>
  );
}
