import React from 'react'

export default function Searchbar() {
  return (
    <div className='py-6 bg-cyan-900 max-w-[800px] mx-auto px-[10%]'>
    <h1 className='text-3xl font-bold text-emerald-500 '>Believe in finding it</h1>
     
    <p className='text-xl py-4'> Search properties for sale and to rent in the UK
    </p>
    <div className='lg:flex justify-center sm:flex-row'>
        <div className='sm:w-[80%] sm:mx-auto sm:py-4 lg:py-0 lg:w-[100%] lg:mx-0'>
        <input type="text" placeholder='e.g. "York","NW3 5TY" or "Waterloo  Station"' className='bg-gray-200 px-4 py-2 rounded-md w-full'/>
        </div>
        <div className='sm:my-2 lg:my-0'>
        <button className=' px-4 py-2 rounded-md text-black bg-emerald-500 mx-6 '>Search</button>
        
        </div>
       
        </div>
    </div>
  )
}
