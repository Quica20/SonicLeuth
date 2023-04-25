/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useState, useEffect, Fragment, Row, Props} from 'react';

//Importamos el contexto:
import { albumsContext } from '../../context/contextAPI';

/* Componente */
//import Album from '../../components/album/album'

/* Keys */
const CLIENT_ID = "7466febb4a334418b788a14e25a6a973";
const CLIENT_SECRET = "d4e1d23bc7304925a6513bdf85fc9d1e";


export const NavBar = ({children}) => {
    
  const[searchInput, setSearchInput] = useState("");
  const[accessToken, setAccessToken] = useState("");
  const[albums, setAlbums] = useState([]);


  useEffect(()=> {
    // API ACCESS TOKEN
    var authParameters ={
      method:'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
  },[])

    // SEARCH
    async function search(){
      console.log('search for' + searchInput); //Taylor Swift

      // Get request using search to get the Artist ID
      var searchParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }

      var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => { return data.artists.items[0].id })

      console.log('id Artist: ' + artistID)
      // Get requets with Artist ID grab all the Albums from Artist
      var returndAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
        .then(response => response.json())
        .then(data => {
          setAlbums(data.items);
        });

      // Display those albums to the User
    }

  return (
    <albumsContext.Provider
      value ={{albums}}
    >
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
              onChange={
                event => setSearchInput(event.target.value)
              }
            />
            <Button  
              variant="outline-success"
              onClick={search}>
              Search
              </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
    {children}
    </albumsContext.Provider>
  );
}

export default NavBar;
