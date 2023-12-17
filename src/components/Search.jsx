import React from 'react'
import SearchForm from './PropertySearch'

export default function Search() {
  return (
    <div className=" bg-[url('./assets/apartmentb.jpg')]  bg-cover  ">
        
        <div className=" md:mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center " >
            
      
         <h1 className='text-3xl font-bold text-emerald-500 '>Property for sale in &apos;given location&apos;</h1>
        <div className='py-6  mx-auto justify-center bg-slate-300 rounded-2xl p-4'>
        <SearchForm />
        </div>
      
        
        
        </div>
    </div>
  )
}
