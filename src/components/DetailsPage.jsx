import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFavorites } from '../components/FavoritesContext';

function DetailsPage({ properties }) {
    const { addFavorite } = useFavorites();
    const { id } = useParams();
    const property = properties.find((prop) => prop.id === id);

    if (!property) {
        return <h1 className="text-center mt-5 text-danger">Property not found</h1>;
    }

    return (
        <Card className="mx-auto mt-4 p-3 shadow-lg" style={{ maxWidth: '50rem' }}>
            <Card.Header className="bg-success text-white text-center">
                <h2 className="mb-0">{property.type} - {property.location}</h2>
            </Card.Header>
            <Carousel className="mt-3">
                {property.pictures.map((picture, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 img-fluid"
                            src={picture}
                            alt={`Slide ${index + 1}`}
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Card.Body>
                <Card.Title className="text-success fw-bold">{property.type}</Card.Title>
                <Card.Text className="text-secondary">
                    <strong>Location:</strong> {property.location} <br />
                    <strong>Price:</strong> <span className="text-success">£{property.price.toLocaleString()}</span> <br />
                    <strong>Bedrooms:</strong> {property.bedrooms} <br />
                    <strong>Tenure:</strong> {property.tenure} <br />
                    <strong>Description:</strong> {property.description} <br />
                    <strong>Added:</strong> {property.added.month} {property.added.day}, {property.added.year}
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <Button 
                        className="btn btn-success fw-bold" 
                        onClick={() => addFavorite(property)}
                    >
                        Favorite
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default DetailsPage;
