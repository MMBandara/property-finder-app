import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PropertySearch({ properties, onSearch }) {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value === '' ? '' : name === 'price' ? parseInt(value) : value,
    }));
  };

  console.log(filters);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const getUniqueValues = (key) => {
    return Array.from(new Set(properties.map((property) => property[key])));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-4 p-4 border rounded shadow"
      style={{ backgroundColor: '#e9f5f8' }}
    >
      <div className="row g-3">
        <div className="col-md-3">
          <label
            htmlFor="type"
            className="form-label"
            style={{ fontWeight: 'bold', color: '#34495e' }}
          >
            Type
          </label>
          <select
            id="type"
            name="type"
            className="form-select"
            onChange={handleFilterChange}
            style={{
              backgroundColor: '#d1f2eb',
              borderColor: '#16a085',
              color: '#2c3e50',
            }}
          >
            <option value="">Select Type</option>
            {getUniqueValues('type').map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <label
            htmlFor="bedrooms"
            className="form-label"
            style={{ fontWeight: 'bold', color: '#34495e' }}
          >
            Bedrooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            className="form-select"
            onChange={handleFilterChange}
            style={{
              backgroundColor: '#d1f2eb',
              borderColor: '#16a085',
              color: '#2c3e50',
            }}
          >
            <option value="">Select Bedrooms</option>
            {getUniqueValues('bedrooms').map((bedrooms) => (
              <option key={bedrooms} value={bedrooms}>
                {bedrooms}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <label
            htmlFor="price"
            className="form-label"
            style={{ fontWeight: 'bold', color: '#34495e' }}
          >
            Max Price
          </label>
          <select
            id="price"
            name="price"
            className="form-select"
            onChange={handleFilterChange}
            style={{
              backgroundColor: '#d1f2eb',
              borderColor: '#16a085',
              color: '#2c3e50',
            }}
          >
            <option value="">Select Max Price</option>
            <option value="100000">$100000</option>
            <option value="200000">$200000</option>
            <option value="300000">$300000</option>
            <option value="400000">$400000</option>
            <option value="500000">$500000</option>
            <option value="600000">$600000+</option>
            <option value="700000">$700000+</option>
            <option value="800000">$800000+</option>
            <option value="900000">$900000+</option>
            <option value="1000000">$1000000+</option>
          </select>
        </div>

        <div className="col-md-3">
          <label
            htmlFor="tenure"
            className="form-label"
            style={{ fontWeight: 'bold', color: '#34495e' }}
          >
            Tenure
          </label>
          <select
            id="tenure"
            name="tenure"
            className="form-select"
            onChange={handleFilterChange}
            style={{
              backgroundColor: '#d1f2eb',
              borderColor: '#16a085',
              color: '#2c3e50',
            }}
          >
            <option value="">Select Tenure</option>
            {getUniqueValues('tenure').map((tenure) => (
              <option key={tenure} value={tenure}>
                {tenure}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: '#1abc9c',
            color: '#ffffff',
            fontWeight: 'bold',
            borderColor: '#16a085',
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default PropertySearch;
