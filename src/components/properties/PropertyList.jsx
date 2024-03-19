import React from "react";
import Property from "./Property";
import { useAppContext } from "../../context/AppContext";

export default function PropertyList({
  properties,

  ids,
  setIds,
 
}) {
const {setFavouriteProperties, favouriteProperties} = useAppContext();
  // this is the component that is used to map through the properties and display them
  return (
    <div className="text-black">
      {properties.map((property) => (
        <Property
          key={property.id}
          {...property}
         
          ids={ids}
          setIds={setIds}
            favouriteProperties={favouriteProperties}
            setFavouriteProperties={setFavouriteProperties}
        />
      ))}
    </div>
  );
}
