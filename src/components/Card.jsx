import React from 'react'

export default function Card({source ,heading}) {
  return (
    <div className='  shadow-xl bg-gray-200 w-full px-4 pt-16 my-8  hover:scale-105 duration-300'>
    <img src={source} alt='/' className='w-[300px] mx-auto mt-[-3rem]'/>
    <div className='w-full flex flex-col justify-center items-center '>
        <h1 className='text-2xl font-bold py-2'>{heading}</h1>
        <p className='text-green-600 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam, voluptatum.</p>
        <div className='font-medium'>
        <p className='py-2 border-b'>Extra storage</p>
        <p className='py-2 border-b'>Line 2 something</p>
        <p className='py-2 border-b'>Faster bandwidth</p>
        </div>
       
            <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-green-600 flex justify-center md:mx-0'>Get started</button>
    </div>
</div>
  )
}
