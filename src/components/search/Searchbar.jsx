import React, { useState, useRef ,useEffect} from "react";
import SearchResultsList from "./SearchResultsList";
import { Link } from "react-router-dom";
import PropertyList from "../properties/PropertyList";
import { useAppContext } from "../../context/AppContext";
import { set } from "react-hook-form";

export default function Searchbar() {
  const {results, setResults, childValue, setChildValue, properties, setProperties,fetchDat,handleChildValue} = useAppContext();

  // this component is the search bar that is shown on the home page
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState("");
  const [handle, handleSelect] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchBarRef = useRef(null);


  useEffect(() => {
    // Function to check if the click is outside the search bar
    function handleClickOutside(event) {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
       
        setResults([]); // Set the filtered properties
      }
    }
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBarRef]);

  const fetchData = (value) => {
    fetch("../../public/properties.json")
      .then((response) => response.json())
      .then((json) => {
        const filteredProperties = json.filter((property) => {
          return (
            property &&
            property.location &&
            property.location.toLowerCase().includes(value.toLowerCase())
          );
        });
        setProperties(filteredProperties); // Set the filtered properties
        setResults(filteredProperties); // Set the filtered properties
      });
  };
  

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);

    setSearchTerm(value);
    if (handle) {
      handleSelect(false);
    }
  };
  const handleButtonClick = () => {
    const searchTerm = handle ? selected.location : input;

    handleChildValue(searchTerm);
    if (searchTerm !== "") {
      fetchDat();
    }
  };

  return (
    <div  ref={searchBarRef} className="py-6 bg-cyan-900 lg:min-w-[1000px] sm:min-w-0 mx-auto px-[10%] max-h-[250px] md:min-h-[250px] sm:min-h-0">
      <h1 className="text-3xl font-bold text-emerald-500 text-center">
        Believe in finding it
      </h1>

      <p className="text-xl py-4 text-center">
        {" "}
        Search properties for sale and to rent in the UK
      </p>
      <div className="flex justify-center ">
        <div className="sm:w-[80%] sm:mx-auto sm:py-4 lg:py-0 lg:w-[100%] lg:mx-0">
          <input
            type="search"
            placeholder='e.g. "York","NW3 5TY" or "Waterloo  Station"'
            value={handle ? selected.location : input}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            className="bg-gray-200 px-4 py-2 rounded-md w-full text-black"
          />
          <SearchResultsList
            
            results={results}
            selected={selected}
            setSelected={setSelected}
            handleSelect={handleSelect}
            handle={handle}
          />
        </div>
        <div className="sm:my-2 lg:my-0">
          
          <button
            className=" px-4 py-2 rounded-md text-black bg-emerald-500 mx-6 "
            onClick={handleButtonClick}
          >
            Search
          </button>
          
        </div>
      </div>
    </div>
  );
}
