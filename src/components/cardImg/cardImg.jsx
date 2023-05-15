import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
//Importamos contexto:
import { ItemsContext } from '../../context/itemsContext'


function NavScrollExample() {

    const {deleteAll} = useContext(ItemsContext)

    function eje(){
      toast('Purchase confirmed', { autoClose: 3000 });
      deleteAll()
    }

  return (

    <ToastContainer>
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
    </ToastContainer>
  );
}

export default NavScrollExample;