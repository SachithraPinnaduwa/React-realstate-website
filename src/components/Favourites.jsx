import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Card from './Card'
export default function Favourites() {
  return (
    <div className='w-full  px-4  '>
     
      <div className='flex justify-center items-center'>
      <div className=' w-20 h-20'></div>
      </div>
        <h1 className='text-6xl font-bold text-center py-8'>Your Favourites</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
       <Card source={Single} heading={"Single User"}/>
       <Card source={Double} heading={"Double User"}/>
       <Card source={Double} heading={"Industrial scale"}/>
       <Card source={Single} heading={"Single User"}/>
       <Card source={Double} heading={"Double User"}/>
       <Card source={Double} heading={"Industrial scale"}/>
        </div>
       
    </div>
  )
}
