import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react'

//Importamos contexto:
import { ItemsContext } from '../../context/itemsContext'
const NavBar = () => {
  const {addItemsCheckOut, itemsCheckout, numberOfItems, removeItem} = useContext(ItemsContext)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontSize: '20px' }} href="#home">SONICLEUTH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home </Nav.Link>
            <Nav.Link as={Link} to="/ShoppingCart">Shopping Cart</Nav.Link>
            <Nav.Link as={Link} to="/TopBestSellingAlbums">Top 5 Best Selling Albums</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;