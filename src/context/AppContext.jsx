import React, { createContext, useContext, useState,useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [childValue, setChildValue] = useState("");
  const [properties, setProperties] = useState([]);
  const [favouriteProperties, setFavouriteProperties] = useState([]);
  const [property, setProperty] = useState([]);
  const [ids, setIds] = useState({});
  const [pressed, setPressed] = useState(false);
  const [formData, setFormData] = useState({
    propertytype: "any",
    date: new Date(),
    bedrooms: { bedroomsmin: 0, bedroomsmax: 0 },
    price: { pricemin: 0, pricemax: 0 },
  });



  
  const fetchDat = () => {
    fetch("../../public/properties.json")
      .then((response) => response.json())
      .then((json) => {
        setProperties(json);
      });
  };

  const handleChildValue = (value) => {
    setChildValue(value);
  };

  const handlePressChangeFavourites = (propertyId) => {

    setIds((prevIds) => ({ ...prevIds, [propertyId]: !prevIds[propertyId] }));

  };


  const filteredProperties = property.filter((prop) => {
    return ids[prop.id];
  });


  useEffect(() => {
    // Fetch property data based on the ID
    const fetchData = async () => {
      try {
        const response = await fetch(`../../public/properties.json`);
        const data = await response.json();

        setProperty(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        results,
        setResults,
        childValue,
        setChildValue,
        properties,
        setProperties,
        favouriteProperties,
        setFavouriteProperties,
        property,
        setProperty,
        ids,
        setIds,
        pressed,
        setPressed,
        formData,
        setFormData,
        fetchDat,
        handleChildValue,
        handlePressChangeFavourites,
        filteredProperties,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
