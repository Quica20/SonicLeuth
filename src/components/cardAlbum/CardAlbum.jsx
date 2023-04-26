import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';

//Importamos contexto:
import { ItemsContext } from '../../context/itemsContext';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';

function CardAlbum(props) {
  const {addItemsCheckOut, itemsCheckout, numberOfItems, removeItem} = useContext(ItemsContext)

  function clickAddItem(){
    addItemsCheckOut(props.id, props.name, props.imgs, 
      props.releaseDate, props.totalTracks)
      console.log(itemsCheckout)
  }
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.imgs} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Price: $100
        </Card.Text>
        <Button
        onClick={
          clickAddItem()
        }
        variant="primary"
        >Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardAlbum;