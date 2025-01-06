import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertySearch from './components/PropertySearch';
import PropertyCard from './components/PropertyCard';
import propertiesData from './data/properties.json';
import Footer from './components/Footer.jsx';
import DetailsPage from './components/Detailspage';
import FavoritesPage from './components/FavoritesPage';
import { FavoritesProvider } from './components/FavoritesContext';
import Favspan from './components/AppNavbar';
import 'animate.css';


function App() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    setProperties(propertiesData.properties);
    setFilteredProperties(propertiesData.properties);
  }, []);

  const handleSearch = (filters) => {
    const filtered = properties.filter((property) => {
      return Object.entries(filters).every(([key, value]) => {
        if (value === '' || value === undefined) return true;
        if (key === 'price') {
          return property[key] <= value;
        }
        return property[key] === value;
      });
    });
    setFilteredProperties(filtered);
  };

  return (
<FavoritesProvider>
  <Router>
    <div className="container my-4" style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)' }}>
      <div className="position-relative">
        <span> </span>
        <h1 className="text-center mb-4 fw-bold animate__animated animate__fadeIn">Find Your <span style={{color:"#20c997"}} >Home</span></h1>
        <div className="position-absolute top-0 end-0 p-2">
          <Favspan />
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="mb-5">
                <PropertySearch properties={properties} onSearch={handleSearch} />
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-100">
                {filteredProperties.map((property) => (
                  <div className="col" key={property.id}>
                    <div className="card h-100 shadow-lg border-0 rounded-3 bg-light animate__animated animate__fadeInUp">
                      <PropertyCard property={property} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
        />
        <Route path="/property/:id" element={<DetailsPage properties={properties} />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

      <Footer />
    </div>
  </Router>
</FavoritesProvider>
  );
}

export default App;