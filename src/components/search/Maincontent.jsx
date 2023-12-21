import React,{useEffect, useState} from 'react'
import Searchbar from './Searchbar'
import Apartment from '../../assets/apartment.jpg'
import SearchResultsList from './SearchResultsList';

import PropertyList from '../properties/PropertyList';
export default function Maincontent() {
  const [results,setResults] = useState([])
  const [childValue, setChildValue] = useState("");
  const [properties, setProperties] = useState([]);
  const  [property,setProperty] = useState([])
  const [favouriteProperties, setFavouriteProperties] = useState([]);
  

   
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
  const handlePressChange = (propertyId) => {
    // Toggle the pressed state for the property with the given ID
    setFavouriteProperties((prevProperties) =>
      prevProperties.map((prop) =>
        prop.id === propertyId ? { ...prop, pressed: !prop.pressed } : prop
      )
    );
    console.log(propertyId)
  };

 
  

  return (
    <div className="text-white bg-[url('./assets/apartmentb.jpg')]  bg-cover ">
        
        <div className="  w-full h-screen   flex flex-col justify-center " >
            
           <Searchbar setResults={setResults} results={results} fetchDat={fetchDat}  handleChildValue={handleChildValue}
           properties={properties} setProperties={setResults}
           />
          
        </div>

        {properties
          .filter((property) => {
            return (
              !childValue ||
              (property &&
                property.location &&
                property.location.toLowerCase().includes(childValue.toLowerCase()))
            );
          })
          .map((filteredProperty) => (
            <PropertyList
              key={filteredProperty.id}
              properties={[filteredProperty]}
              childValue={childValue}
              handlePressChange={handlePressChange} 
            />
          ))}
      
        
        
    </div>
  )
}
