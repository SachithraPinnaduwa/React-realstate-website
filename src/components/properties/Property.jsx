import React from "react";
import { useParams } from "react-router-dom";
import house from "../../assets/property/house.jpeg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Property({id,type,bedrooms,price,tenure,description,location,picture,url,added,handlePressChangeFavourites}) {
  
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    setPressed(!pressed);
    // Call the handlePressChange function from the parent component
    handlePressChangeFavourites(id);
  };
  
  return (
    <div className="grid md:grid-flow-col border-8 border-teal-500 sm:grid-flow-row bg-slate-100 m-5 rounded-xl">
      <div className="mx-auto my-auto ">
        <img src={picture.small} className="w-[600px]" alt="house" />
      </div>
      <div className="mx-10">
        <div className="flex flex-row ml-10 justify-center mt-4">
          <h1 className="ml-5">{type ?  type: "No type"}</h1>
          <h1 className="ml-5">{location ? location: "No location" }</h1>
        </div>

        <div className="min-h-[120px]">
          <p className=" mt-5">
          {description ? description: "No description" }
          </p>
        </div>

        <h1 className="ml-10 mt-5 mb-6">{price}</h1>
        <div>
          <div className="flex flex-row float-right mb-10">
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

            <button
              onClick={handlePress}
            >
              {!pressed ? (
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
