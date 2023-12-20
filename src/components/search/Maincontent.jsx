import React,{useEffect, useState} from 'react'
import Searchbar from './Searchbar'
import Apartment from '../../assets/apartment.jpg'
import SearchResultsList from './SearchResultsList';

import PropertyList from '../properties/PropertyList';
export default function Maincontent() {
  const [results,setResults] = useState([])
  const [childValue, setChildValue] = useState("");
  const [properties, setProperties] = useState([]);
  
   
  const fetchDat = (value) => {
      fetch("../../public/properties.json")
        .then((response) => response.json())
        .then((json) => {
          setProperties(json);
        });
  };

  const handleChildValue = (value) => {
    setChildValue(value);
  };
  

  return (
    <div className="text-white bg-[url('./assets/apartmentb.jpg')]  bg-cover ">
        
        <div className="  w-full h-screen   flex flex-col justify-center " >
            
           <Searchbar setResults={setResults} results={results} fetchDat={fetchDat}  handleChildValue={handleChildValue}
           properties={properties} setProperties={setResults}
           />
          
        </div>
        
        <PropertyList    properties={properties} childValue={childValue}/>
    </div>
  )
}
