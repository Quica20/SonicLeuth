/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardAlbum(props) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.imgs} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Price: $100
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardAlbum;