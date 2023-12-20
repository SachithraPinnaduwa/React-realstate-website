import React,{useState,useRef} from 'react'

export default function SearchResult({result,selected,setSelected ,handleSelect ,handle}) {
    const handleClick = () => {
        handleSelect(!handle)
        setSelected(result);
      
      };
     
      
  return (
    <div className='py-2 px-4 hover:bg-gray-300' onClick={handleClick}>{result.location}</div>
  )
}
