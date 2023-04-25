/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useState, useEffect, Fragment, Row, Props} from 'react';



export const NavBaralone = () => {
    

  return (
    <Fragment>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">SONICSLEUTH</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Shopping Cart</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
        /*       onChange={
                event => setSearchInput(event.target.value)
              }
             *// >
            <Button  
              /* variant="outline-success"
              onClick={search} */>
              Search
              </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>

  );
}

export default NavBaralone;
