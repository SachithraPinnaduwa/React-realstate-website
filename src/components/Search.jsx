import React, {useState, useRef, useEffect} from "react";
import SearchForm from "./SearchForm";

import PropertyList from "./properties/PropertyList";

export default function Search({fetchDat,handlePressChangeFavourites,filteredProperties,setProperty,
                                   properties,setProperties,favouriteProperties
                                    ,setFavouriteProperties,ids,setIds,childValue}) {

 const  p = properties.filter((property) => {
    return (
      !childValue ||
      (property &&
        property.location &&
        property.location.toLowerCase().includes(childValue.toLowerCase()))
    );
  });



  return (
    <div className=" bg-[url('./assets/apartmentb.jpg')]  bg-cover  ">
      <div className="mx-auto text-center flex flex-col  ">
        <div className="md:max-w-[800px] mx-auto md:h-screen sm:h-auto">
          <div className="">
            <h1 className="text-6xl font-bold text-emerald-500 my-10">
              Property for sale in &apos;{childValue}&apos;
            </h1>
            <div className="m-5  mx-auto  rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]">
              <SearchForm properties={properties} fetchDat={fetchDat}/>
              
            </div>

          </div>
        </div>

        {/* here replace this 1 with the location id you want to search for */}
   <PropertyList properties={p}
     setProperties={setProperties} handlePressChangeFavourites={handlePressChangeFavourites} />
      </div>
    </div>
  );
}
