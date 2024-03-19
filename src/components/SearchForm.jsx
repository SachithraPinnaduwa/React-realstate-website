import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SearchForm = ({ properties, fetchDat, formData, setFormData }) => {
  const form = useForm({
    defaultValues: {
      propertytype: "any",
      date: new Date("2000-09-14T00:00:00.000Z"),
      bedrooms: {
        bedroomsmin: 0,
        bedroomsmax: 0,
      },
      price: {
        pricemin: 0,
        pricemax: 0,
      },
    },
  });
  const { register, handleSubmit, formState } = form;

  const onSubmit = (data) => {
    setFormData(data);
    fetchDat();
  };

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  return (
    <div className="max-w-[1240px] mx-auto lg:min-w-[800px] p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow-md rounded-lg p-6"
      >
        {/* Date added */}
        <div className="flex flex-col">
          <label htmlFor="date" className="mb-2 font-semibold text-gray-700">
            Date added
          </label>
          <input
            type="date"
            id="date"
            className="w-full rounded-md border border-gray-300 p-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            {...register("date", {
              valueAsDate: true,
            })}
          />
        </div>

        {/* Property type */}
        <div className="flex flex-col">
          <label htmlFor="propertytype" className="mb-2 font-semibold text-gray-700">
            Property type
          </label>
          <select
            id="propertytype"
            className="w-full rounded-md border border-gray-300 p-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            {...register("propertytype")}
          >
            <option value="house">House</option>
            <option value="flat">Flat</option>
            <option value="any">Any</option>
          </select>
        </div>

        {/* Price range */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">
            Price range
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              className="w-1/2 rounded-md border border-gray-300 p-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              placeholder="Min price"
              {...register("price.pricemin", { valueAsNumber: true })}
            />
            <input
              type="number"
              className="w-1/2 rounded-md border border-gray-300 p-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              placeholder="Max price"
              {...register("price.pricemax", { valueAsNumber: true })}
            />
          </div>
        </div>

        {/* Number of bedrooms */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">
            Bedrooms
          </label>
          <div className="flex gap-2">
            <input
              className="w-1/2 rounded-md border border-gray-300 p-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              type="number"
              placeholder="Min bedrooms"
              {...register("bedrooms.bedroomsmin", { valueAsNumber: true })}
            />
            <input
              className="w-1/2 rounded-md border border-gray-300 p-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              type="number"
              placeholder="Max bedrooms"
              {...register("bedrooms.bedroomsmax", { valueAsNumber: true })}
            />
          </div>
        </div>

        <div className=" flex justify-center md:col-span-2 col-span-1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
