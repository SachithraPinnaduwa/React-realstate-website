import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Maincontent from "./components/search/Maincontent";
import { AppProvider } from "./context/AppContext";
import Favouritespage from "./components/Favouritespage";

import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Propertypage from "./components/properties/Propertypage";

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Maincontent />} />
            <Route path="/search" element={<Search />} />

            <Route path="/search/:id" element={<Propertypage />} />

            <Route path="/favourites" element={<Favouritespage />} />
          </Routes>

          <Footer />
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
