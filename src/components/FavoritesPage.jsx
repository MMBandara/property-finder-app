import React from 'react';
import { useFavorites } from '../components/FavoritesContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function FavoritesPage() {
  const { favorites, removeFavorite, clearFavorites } = useFavorites();

  return (
    <div className="container my-4">
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {favorites.map((property) => (
              <div className="col" key={property.id}>
                <Card>
                  <Card.Img variant="top" src={property.pictures[0]} />
                  <Card.Body>
                    <Card.Title>{property.type}</Card.Title>
                    <Card.Text>
                      <strong>Location:</strong> {property.location} <br />
                      <strong>Price:</strong> £{property.price.toLocaleString()}
                    </Card.Text>
                    <Button variant="danger" onClick={() => removeFavorite(property.id)}>
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <Button className="mt-4" variant="secondary" onClick={clearFavorites}>
            Clear Favorites
          </Button>
        </>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
