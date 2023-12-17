import React, { useState } from 'react';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your search based on the "searchTerm" state
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className='max-w-[1240px] mx-auto ml:min-w-[800px]'>
      <form
        action="#"
        method="get"
        className="grid grid-cols-1 md:grid-cols-2 rounded-md shadow-md p-4"
      >
        {/* Date added */}
        <div className="my-5 md:flex items-center">
          <label className="block text-sm font-medium text-black md:mr-20">Date added</label>
          <select
            id="date-added"
            name="date added"
            className="w-[50%]  rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2 md:mt-0 md:ml-2"
          >
            {/* ... options ... */}
          </select>
        </div>

        {/* Property type */}
        <div className="my-5 md:flex items-center">
          <label className="block text-sm font-medium text-black">Property type</label>
          <select
            id="property-type"
            name="property-type"
            className="w-[50%] rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2 md:mt-0 md:ml-2"
          >
            {/* ... options ... */}
          </select>
        </div>

        {/* Postcode area */}
        <div className="my-5 md:flex items-center">
          <label className="block text-sm font-medium text-black mr-2">Postcode area</label>
          <input
            type="text"
            id="postcode-area"
            name="postcode-area"
            className="w-[50%] rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2 md:mt-0 md:ml-16"
          />
        </div>

        {/* Price range */}
        <div className="my-5 md:flex items-center md:flex-row">
          <label className="block text-sm font-medium text-black">Price range (E)</label>
          
          
          <div className=" items-center mt-2 md:mt-0 md:ml-2">
            
            <input
              type="number"
              id="price-min"
              name="price-min"
                placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Min'
              className="w-full rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2"
            />
          </div>
          <div className=" items-center mt-2 md:mt-0 md:ml-2">
       
            <input
              type="number"
              id="price-max"
              name="price-max"
              placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Max'
              className="w-full rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2"
            />
          </div>
        
        </div>


        {/* Number of bedrooms */}
        <div className="my-5 md:flex items-center">
          <label className="block text-sm font-medium text-black mr-3">Number of bedrooms</label>
          <select
            name="bedrooms"
            className="w-[50%] rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2 md:mt-0 md:ml-2"
          >
            {/* ... options ... */}
          </select>
        </div>
      </form>

      <div className="text-center mt-6">
        <button className='bg-[#000300] w-[200px] rounded-md font-medium py-3 text-green-600'>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
