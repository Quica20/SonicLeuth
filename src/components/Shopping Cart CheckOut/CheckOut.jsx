import React from 'react';
import { Card, Button } from 'react-bootstrap';

const InfoCheckout = () => {
  return (
    <Card style={{ display: 'flex', alignItems: 'center' }}>
      <Card.Img variant="left" src="https://via.placeholder.com/30x30" />
      <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
        <Card.Title style={{ marginRight: '1rem' }}>Checkout Title</Card.Title>
        <Card.Subtitle style={{ marginRight: '1rem' }} className="mb-2 text-muted">Checkout Subtitle</Card.Subtitle>
        <Button variant="primary">🗑️</Button>
      </Card.Body>
    </Card>
  );
};

export default InfoCheckout;
