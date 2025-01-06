import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useFavorites } from '../components/FavoritesContext';

function DetailsPage({ properties }) {
    const { addFavorite } = useFavorites();
    const { id } = useParams();
    const property = properties.find((prop) => prop.id === id);

    if (!property) {
        return <h1>Property not found</h1>;
    }

    return (
        <>
            <Card
                style={{
                    maxWidth: '50rem',
                    margin: 'auto',
                    marginTop: '20px',
                    padding: '20px',
                    backgroundColor: '#e9f5f8',
                    borderColor: '#16a085',
                }}
                className="shadow-lg rounded"
            >
                <h2 style={{ color: '#34495e' }}>
                    {property.type} - {property.location}
                </h2>

                {/* Tabs for Property Details and Floor Plan */}
                <Tabs
                    defaultActiveKey="details"
                    id="property-tabs"
                    className="mb-3"
                >
                    <Tab eventKey="details" title="Details" className="text-secondary">
                        <Carousel data-bs-theme="dark">
                            {property.pictures.map((picture, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={picture}
                                        alt={`Slide ${index + 1}`}
                                        style={{
                                            maxHeight: '400px',
                                            objectFit: 'cover',
                                            borderBottom: '3px solid #16a085',
                                        }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <Card.Body style={{ color: '#2c3e50' }}>
                            <Card.Title style={{ color: '#1abc9c', fontWeight: 'bold' }}>
                                {property.type}
                            </Card.Title>
                            <Card.Text>
                                <strong>Location:</strong> {property.location} <br />
                                <strong>Price:</strong>{' '}
                                <span style={{ color: '#16a085' }}>
                                    £{property.price.toLocaleString()}
                                </span>{' '}
                                <br />
                                <strong>Bedrooms:</strong> {property.bedrooms} <br />
                                <strong>Tenure:</strong> {property.tenure} <br />
                                <strong>Description:</strong> {property.description} <br />
                                <strong>Added:</strong> {property.added.month} {property.added.day},{' '}
                                {property.added.year}
                            </Card.Text>
                            <Button
                                variant="primary"
                                onClick={() => addFavorite(property)}
                                style={{
                                    backgroundColor: '#1abc9c',
                                    borderColor: '#16a085',
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                }}
                            >
                                Favorite
                            </Button>
                        </Card.Body>
                    </Tab>

                    {/* Tab for Floor Plan */}
                    <Tab eventKey="floorplan" title="Floor Plan" className="text-secondary">
                        <div className="d-flex justify-content-center">
                            {property.floorPlan ? (
                                <img
                                    src={property.floorPlan}
                                    alt="Floor Plan"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '500px',
                                        objectFit: 'contain',
                                    }}
                                />
                            ) : (
                                <p>No floor plan available for this property.</p>
                            )}
                        </div>
                    </Tab>
                </Tabs>
            </Card>
        </>
    );
}

export default DetailsPage;
