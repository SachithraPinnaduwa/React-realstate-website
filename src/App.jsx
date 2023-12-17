import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Maincontent from './components/Maincontent'

import Favouritespage from './components/Favouritespage'
import Favourites from './components/Favourites'
import Search from './components/Search'
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom'
import Property from './components/properties/Property'


function App() {


  return (
    <>
   <Router>
    <Navbar/>
    <div className='h-screen'>
     <Routes>
     <Route path="/" element={<Maincontent/>} />
       <Route path="/search" element={<Search/>} />
       <Route path="/search/:id" element={<Property/>} />
        <Route path="/favourites" element={<Favouritespage/>} />
     </Routes>
  
     
     <Footer/>
     </div>
     
     </Router>
    </>
  )
}

export default App
