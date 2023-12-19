import React,{useState} from 'react'
import Searchbar from './Searchbar'
import Apartment from '../../assets/apartment.jpg'
import SearchResultsList from './SearchResultsList';

export default function Maincontent() {
  const [results,setResults] = useState([])
  return (
    <div className="text-white bg-[url('./assets/apartmentb.jpg')]  bg-cover ">
        
        <div className="  w-full h-screen   flex flex-col justify-center " >
            
           <Searchbar setResults={setResults} results={results}/>
          
        </div>
    </div>
  )
}
