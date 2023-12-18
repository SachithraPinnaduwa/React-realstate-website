import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaYoutubeSquare,
    FaGithubSquare
} from 'react-icons/fa'
import { PiHouseBold } from "react-icons/pi";
export default function Footer() {
  return (
    <div className=' py-16 grid lg:grid-cols-3  text-gray-300  bg-gray-600 mx-auto'>
        
        <div className='md:pl-20 '>
            <h1 className='w-full text-3xl font-bold text-green-400' ><PiHouseBold/></h1>
            <p className='py-4'> Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Ducimus rem deserunt facere atque autem vel amet, quas porro
                aliquid necessitatibus, illo animi quo officiis ratione recusandae. Quasi provident explicabo placeat.</p>
              <div className='flex'>
                <FaFacebookSquare size={30} className=' mx-2'/>
                <FaInstagramSquare size={30} className=' mx-2'/>    
                <FaDribbbleSquare size={30} className=' mx-2'/>
                <FaTwitterSquare size={30} className=' mx-2'/>  
                <FaYoutubeSquare size={30} className='mx-2'/>  
              </div>
        </div>

              
              <div className='md:col-span-2 flex justify-between lg:pl-60 '>
                <div>
                    <ul>
                        <li className='py-2'>Home</li>
                        <li className='py-2'>Company</li>
                        <li className='py-2'>Resources</li>
                        <li className='py-2'>About</li>
                        <li className='py-2'>Contact</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='py-2'>Pricing</li>
                        <li className='py-2'>Documentation</li>
                        <li className='py-2'>API</li>
                        <li className='py-2'>Guiddes</li>
                        
                    </ul>
                </div>
                <div className='md:pr-20'>
                    <ul>
                        <li className='py-2'>Legal</li>
                        <li className='py-2'>Claim</li>
                        <li className='py-2'>Policy</li>
                       
                    </ul>
                </div>
                </div>
    </div>
  )
}
