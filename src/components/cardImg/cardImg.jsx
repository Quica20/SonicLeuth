import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import { useContext,useState, useEffect, Fragment} from 'react'
import { ToastContainer, toast } from 'react-toastify';
//Importamos contexto:
import { ItemsContext } from '../../context/itemsContext';


function NavScrollExample() {
  const [confirmAlert, setConfirmAlert] = useState(false)
  const {itemInVisible} = useContext(ItemsContext)

  useEffect(() => {
    if (confirmAlert) {
      const timer = setTimeout(() => {
        setConfirmAlert(false);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [confirmAlert]);

    function eje(){
      setConfirmAlert(true)
      itemInVisible()
      /*       toast('Purchase confirmed', { autoClose: 3000 });
       */
    }

  return (
      <Fragment>

      {confirmAlert && (
              <Alert variant="success">
                ¡Your album has been added successfully, you can see all your products in "Shopping Cart"!
              </Alert>
            )}

    <Navbar bg="ligth" expand="lg" variant="ligth">
      <Container fluid>
        <Navbar.Brand href="#">PURCHASE CONFIRMATION | Personal Information</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Name and Surname"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="City"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Street and Height"
              className="me-2"
              aria-label="Search"
            />
            <Button 
            variant="outline-success"
            onClick={
                eje
            }
            >
                CONFIRM</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  );
}

export default NavScrollExample;