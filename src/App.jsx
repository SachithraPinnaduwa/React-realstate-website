import {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Maincontent from './components/search/Maincontent'

import Favouritespage from './components/Favouritespage'

import Search from './components/Search'
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom'

import Propertypage from './components/properties/Propertypage'

function App() {
  // Maincontent
    const [results,setResults] = useState([])
    const [childValue, setChildValue] = useState("");
    const [properties, setProperties] = useState([]);

    const [favouriteProperties, setFavouriteProperties] = useState([]);

    const [property, setProperty] = useState([]);
    const [ids, setIds] = useState({});

const  [formData, setFormData] = useState(
    {
        propertytype: "any",

        date: new Date(),
        bedrooms:{
            bedroomsmin: 0,
            bedroomsmax: 0,
        } ,
        price: {
            pricemin: 0,
            pricemax: 0,
        }
    }
);


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

    // Favourites




    const handlePressChangeFavourites = (propertyId) => {
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

    // Search data



    return (
    <>
   <Router>
    <Navbar/>
    
     <Routes>
     <Route path="/" element={<Maincontent
     results={results} setResults={setResults}   handleChildValue={handleChildValue}
        properties={properties} setProperties={setResults}
     handlePressChangeFavourites={handlePressChangeFavourites}
     childValue={childValue} favouriteProperties={favouriteProperties}
     setFavouriteProperties={setFavouriteProperties}
        fetchDat={fetchDat}
       
     />} />
       <Route path="/search" element={<Search
       fetchDat={fetchDat} handlePressChangeFavourites={handlePressChangeFavourites}
       filteredProperties={filteredProperties} setProperty={setProperty}
       properties={properties} setProperties={setProperties}
         favouriteProperties={favouriteProperties} setFavouriteProperties={setFavouriteProperties}
       ids={ids} setIds={setIds}
       childValue={childValue}
       formData={formData} setFormData={setFormData}
       />} />

       <Route path="/search/:id" element={<Propertypage/>} />

        <Route path="/favourites" element={<Favouritespage
        property={property} setProperty={setProperty}

        ids={ids} setIds={setIds} filteredProperties={filteredProperties}
        handlePressChangeFavourites={handlePressChangeFavourites}
        favouriteProperties={favouriteProperties} setFavouriteProperties={setFavouriteProperties}

        />} />
     </Routes>
  
     
    
     <Footer/>
     
     </Router>
    </>
  )
}

export default App
