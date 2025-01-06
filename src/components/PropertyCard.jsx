import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useFavorites } from '../components/FavoritesContext';

function PropertyCard({ property }) {
    // Get addFavorite function from context to add property to favorites
    const { addFavorite } = useFavorites();

    return (
        <Card className="shadow-lg rounded" style={{ width: '100%' }}>
            {/* Property image */}
            <Card.Img
                variant="top"
                src={property.picture}
                alt={property.type}
                className="img-fluid"
                style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body className="text-secondary">
                {/* Property type as title */}
                <Card.Title className="fw-bold text-success fs-5">{property.type}</Card.Title>
            </Card.Body>
            <Card.Body className="text-secondary">
                {/* Property details: location, price, bedrooms, etc. */}
                <Card.Text>
                    <strong>Location:</strong> {property.location}
                </Card.Text>
                <Card.Text>
                    <strong>Price:</strong> <span className="text-success">£{property.price.toLocaleString()}</span>
                </Card.Text>
                <Card.Text>
                    <strong>Bedrooms:</strong> {property.bedrooms}
                </Card.Text>
                <Card.Text>
                    <strong>Tenure:</strong> {property.tenure}
                </Card.Text>
                <Card.Text>
                    <strong>Added:</strong> {property.added.month} {property.added.day}, {property.added.year}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                {/* Link to view more property details */}
                <Link to={`/property/${property.id}`} className="btn btn-success me-3 fw-bold">
                    View More
                </Link>
                {/* Button to add the property to favorites */}
                <Button
                    className="btn btn-success fw-bold"
                    onClick={() => addFavorite(property)}
                >
                    Favorite
                </Button>
            </Card.Body>
        </Card>
    );
}

export default PropertyCard;
