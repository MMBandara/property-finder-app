import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertySearch from './components/PropertySearch';
import Navigation from './components/Navigation';
import PropertyCard from './components/PropertyCard';
import propertiesData from './data/properties.json';
import Footer from './components/Footer.jsx';
import DetailsPage from './components/Detailspage';
import FavoritesPage from './components/FavoritesPage';
import { FavoritesProvider } from './components/FavoritesContext';
import Favspan from './components/FavSpan';
import 'animate.css';

function App() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Load properties data on component mount
  useEffect(() => {
    setProperties(propertiesData.properties);
    setFilteredProperties(propertiesData.properties);
  }, []);

  // Handle search filters and update filtered properties
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
        <nav>
          <Navigation/>
        </nav>

        <div className="container my-4" style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)' }}>
          <div className="position-relative">
            {/* Header Section */}
            <h1 className="text-center mb-4 fw-bold animate__animated animate__fadeIn">
              Find Your <span style={{color:"#20c997"}} >Home</span>
            </h1>
            {/* Favorites Icon */}
            <div className="position-absolute top-0 end-0 p-2">
              <Favspan />
            </div>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Property Search Component */}
                  <div className="mb-5">
                    <PropertySearch properties={properties} onSearch={handleSearch} />
                  </div>
                  {/* Property Cards Display */}
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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

          {/* Footer Section */}
          <Footer />
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
