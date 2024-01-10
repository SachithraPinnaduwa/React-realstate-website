import React, { useState, useRef, useEffect } from "react";
import SearchForm from "./SearchForm";

import PropertyList from "./properties/PropertyList";

export default function Search({
  fetchDat,
  handlePressChangeFavourites,
  filteredProperties,
  setProperty,
  properties,
  setProperties,
  favouriteProperties,
  setFavouriteProperties,
  ids,
  setIds,
  childValue,
  formData,
  setFormData,
  pressed,
  setPressed,
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

  // this is the state that is used to filter the properties based on the form data
  const filtered = p.filter((property) => {
    const meetsPropertyType =
      formData.propertytype === "any" ||
      property.type.toLowerCase() === formData.propertytype.toLowerCase();

    const meetsDate =
      !formData.date || new Date(property.date) >= new Date(formData.date);

    const meetsBedrooms =
      (formData.bedrooms.bedroomsmin <= property.bedrooms &&
        formData.bedrooms.bedroomsmax >= property.bedrooms) ||
      (!formData.bedrooms.bedroomsmin && !formData.bedrooms.bedroomsmax);

    const meetsPrice =
      (formData.price.pricemin <= property.price &&
        formData.price.pricemax >= property.price) ||
      (!formData.price.pricemin && !formData.price.pricemax);

    return meetsPropertyType && meetsDate && meetsBedrooms && meetsPrice;
  });

  return (
    <div className=" bg-[url('./assets/apartmentb.jpg')]  bg-cover  ">
      <div className="mx-auto text-center flex flex-col  ">
        <div className="md:max-w-[800px] mx-auto md:h-screen sm:h-auto">
          <div className="">
            <h1 className="text-6xl font-bold text-emerald-500 my-10">
              Property for sale in &apos;
              {childValue ? childValue : "Everywhere"}&apos;
            </h1>
            <div className="m-5  mx-auto  rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]">
              <SearchForm
                properties={properties}
                fetchDat={fetchDat}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>

        <PropertyList
          properties={filtered}
          setProperties={setProperties}
          handlePressChangeFavourites={handlePressChangeFavourites}
          pressed={pressed}
          setPressed={setPressed}
          ids={ids}
          setIds={setIds}
          favouriteProperties={favouriteProperties}
          setFavouriteProperties={setFavouriteProperties}
        />
      </div>
    </div>
  );
}
