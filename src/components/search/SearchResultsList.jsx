import React, { useState } from 'react'
import SearchResult from  './SearchResult'
export default function SearchResultsList({results, selected,setSelected ,handleSelect,handle}) {
 
  return (
    <div className='w-[100%] bg-gray-200 text-black flex flex-col mt-2 max-h-[200px] overflow-y-scroll rounded-md'>
       {
        results.map((result)=>{
            return <SearchResult result={result} key={result.id} selected={selected} setSelected={setSelected}  handleSelect={handleSelect} handle={handle}/>
        })
       }
    </div>
  )
}
