import React from "react";
import { useParams } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
//this is the property component that is shown on all pages that have a property list
export default function Property({
  id,
  type,
  bedrooms,
  price,
  tenure,
  description,
  location,
  picture,
  url,
  added,
  
 
  ids,
  setIds,
   
}) {
const {handlePressChangeFavourites,pressed,setPressed,setFavouriteProperties} = useAppContext();
 

const handlePress = () => {
  setIds((prevIds) => {
    const newIds = { ...prevIds };
    if (newIds[id]) {
      // If the ID exists, remove it from the object
      delete newIds[id];
      // Also remove the property from the favourites
      setFavouriteProperties((prevFavourites) =>
        prevFavourites.filter((property) => property.id !== id)
      );
    } else {
      // If the ID doesn't exist, add it to the object
      newIds[id] = true;
      // Also add the property to the favourites
      setFavouriteProperties((prevFavourites) => [
        ...prevFavourites,
        { id, type, bedrooms, price, tenure, description, location, picture, url, added },
      ]);
    }
    return newIds;
  });
};


  return (
    <div className="grid md:grid-flow-col border-8 border-teal-500 sm:grid-flow-row bg-slate-100 m-5 rounded-xl">
      <div className="mx-auto my-auto ">
        <img src={picture[0]} className="w-full h-full " alt="house" />
      </div>
      <div className="mx-10">
        <div className="flex flex-row ml-10 justify-center mt-4">
          <h1 className="ml-5">{type ? type : "No type"}</h1>
          <h1 className="ml-5">{location ? location : "No location"}</h1>
        </div>

        <div className="">
          <p className=" mt-5">
            {description ? description : "No description"}
          </p>
        </div>

        <h1 className="ml-10 mt-5 mb-6">{price}</h1>
        <div>
          <div className="flex flex-row float-right mb-10">
            {/* this is the  button for visiting a property */}
            <Link
              to={`/search/${id}`}
              className="text-3xl font-bold text-emerald-500 "
            >
              <button
                type="submit"
                className="flex-none rounded-md bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 mx-10"
              >
                Visit
              </button>
            </Link>


{/* this is the favourites button */}
            <button onClick={handlePress}>
              {ids && !Object.keys(ids).includes(id.toString())   ? (
                <CiHeart
                  size={30}
                  className="text-teal-500 font-extrabold mr-20 ml-10 hover:cursor-pointer hover:text-teal-600 "
                  style={{ strokeWidth: 1.5 }}
                />
              ) : (
                <FaHeart
                  size={30}
                  className="text-teal-500 font-extrabold mr-20 ml-10 hover:cursor-pointer hover:text-teal-600 "
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
