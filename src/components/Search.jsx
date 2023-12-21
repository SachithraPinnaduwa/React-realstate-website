import React, { useState,useRef } from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import Property from "./properties/Property";
import Navbar from "./Navbar";
import PropertyList from "./properties/PropertyList";

export default function Search() {

  const [properties, setProperties] = useState([]);
  const [favouriteProperties, setFavouriteProperties] = useState([]);
  const [ids, setIds] = useState({});
  const [pressedOnly, setPressedOnly] = useState(false);
   
  const fetchData = (value) => {
      fetch("../../public/properties.json")
        .then((response) => response.json())
        .then((json) => {
          setProperties(json);
        });
  };

  const handlePressChange = (propertyId) => {
    // Toggle the pressed state for the property with the given ID
    setFavouriteProperties((prevProperties) =>
      prevProperties.map((prop) =>
        prop.id === propertyId ? { ...prop, pressed: !prop.pressed } : prop
      )
    );
    setIds((prevIds) => ({ ...prevIds, [propertyId]: !prevIds[propertyId] }));

  };
 
  console.log(ids);
  const filteredProperties = properties.filter((prop) => {
    if (pressedOnly) {
      return ids[prop.id];
    } else {
      return true;
    }
  });


  return (
    <div className=" bg-[url('./assets/apartmentb.jpg')]  bg-cover  ">
      <div className="mx-auto text-center flex flex-col  ">
        <div className="md:max-w-[800px] mx-auto md:h-screen sm:h-auto">
          <div className="">
            <h1 className="text-6xl font-bold text-emerald-500 my-10">
              Property for sale in &apos;given location&apos;
            </h1>
            <div className="m-5  mx-auto  rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]">
              <SearchForm properties={properties} fetchData={fetchData}/>
              
            </div>
            <button onClick={() => setPressedOnly(!pressedOnly)} className="bg-[#000300] w-[200px] rounded-md font-medium py-3 text-green-600">
              Show Favourites
            </button>
          </div>
        </div>

        {/* here replace this 1 with the location id you want to search for */}
   <PropertyList properties={filteredProperties} setProperties={setProperties} handlePressChange={handlePressChange} />
      </div>
    </div>
  );
}
