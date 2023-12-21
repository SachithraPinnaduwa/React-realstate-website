import React, { useEffect, useState } from "react";
import Property from "./properties/Property";
import PropertyList from "./properties/PropertyList";

export default function Favouritespage() {
  const [property, setProperty] = useState([]);
  const [pressedOnly, setPressedOnly] = useState(false);
  const [favouriteProperties, setFavouriteProperties] = useState([]);
  const [ids, setIds] = useState({});

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
  const filteredProperties = property.filter((prop) => {
    if (pressedOnly) {
      return ids[prop.id];
    } else {
      return true;
    }
  });


  return (
    <div className="bg-[url('./assets/apartmentb.jpg')] bg-cover min-h-screen">
      <h1 className="text-6xl font-bold text-center py-8 text-emerald-500 ">
        Your Favourites
      </h1>

      <button onClick={() => setPressedOnly(!pressedOnly)}>
        Toggle Pressed Only
      </button>

      <PropertyList properties={filteredProperties} handlePressChange={handlePressChange} />
    </div>
  );
}
