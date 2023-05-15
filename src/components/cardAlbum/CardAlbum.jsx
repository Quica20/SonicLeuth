import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Fragment, useContext,useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
//Importamos contexto:
import { ItemsContext } from '../../context/itemsContext';

/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';

function CardAlbum(props) {
  const {addItemsCheckOut, itemsCheckout} = useContext(ItemsContext)
  const [mostrarAlert, setMostrarAlert] = useState(false)

  useEffect(() => {
    if (mostrarAlert) {
      const timer = setTimeout(() => {
        setMostrarAlert(false);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [mostrarAlert]);

  function clickAddItem(){
    addItemsCheckOut(props.id, props.name, props.imgs, 
      props.releaseDate, props.totalTracks)
      console.log(itemsCheckout)
      setMostrarAlert(true)
  }
  return (
    <Fragment>
      
    <Card style={{ width: '15rem' }}>
      {mostrarAlert && (
        <Alert variant="success">
          ¡Your album has been added successfully, you can see all your products in "Shopping Cart"!
        </Alert>
      )}
      <Card.Img variant="top" src={props.imgs} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Price: $100
        </Card.Text>
        <Button
        onClick={
          clickAddItem
        }
        variant="primary"
        >Add to Cart</Button>
      </Card.Body>
    </Card>
</Fragment>
  );
}

export default CardAlbum;