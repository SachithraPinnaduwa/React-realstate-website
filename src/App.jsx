import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Maincontent from './components/Maincontent'

import Favourites from './components/Favouritres'


function App() {


  return (
    <div className="bg-[url('./assets/apartmentb.jpg')]  bg-contain ">
   <Navbar/>
   <Maincontent/>
   <Favourites/>
  <Footer/>
    </div>
  )
}

export default App
