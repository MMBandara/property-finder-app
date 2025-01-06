import React from 'react';
import { useFavorites } from '../components/FavoritesContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FavoritesPage() {
  // Get favorites list, removeFavorite and clearFavorites functions from context
  const { favorites, removeFavorite, clearFavorites } = useFavorites();

  return (
    <div className="container my-4">
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <>
          {/* Display a grid of favorite properties */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {favorites.map((property) => (
              <div className="col" key={property.id}>
                {/* Card to display property details */}
                <Card>
                  <Card.Img variant="top" src={property.pictures[0]} />
                  <Card.Body>
                    <Card.Title>{property.type}</Card.Title>
                    <Card.Text>
                      <strong>Location:</strong> {property.location} <br />
                      <strong>Price:</strong> £{property.price.toLocaleString()}
                    </Card.Text>
                    {/* Button to remove property from favorites */}
                    <Button variant="danger" onClick={() => removeFavorite(property.id)}>
                      Remove
                    </Button>
                    {/* Link to view more details of the property */}
                    <Link to={`/property/${property.id}`} className="btn btn-success me-3 fw-bold ms-2">
                      View More
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          {/* Button to clear all favorites */}
          <Button className="mt-4" variant="secondary" onClick={clearFavorites}>
            Clear Favorites
          </Button>
        </>
      ) : (
        // Message when no favorites are added
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
