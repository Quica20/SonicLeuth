import React, {useState, useEffect, Fragment} from 'react'
import ItemList from '../itemList/ItemList';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Keys Api Spotify:
const CLIENT_ID = "7466febb4a334418b788a14e25a6a973";
const CLIENT_SECRET = "d4e1d23bc7304925a6513bdf85fc9d1e";

//Import Component:


const IntemListContainer = () => {

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
        }

        const handleInputChange = (event) => {
            setSearchInput(event.target.value);
        }

    console.log(albums)
    return (
    <Fragment>
    <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Place an Artist"
                className="me-2"
                aria-label="Place an Artist"
                value={searchInput} 
                onChange={handleInputChange}
              />
              <Button variant="outline-success"
              onClick={search}
              >Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
{/*     <input type="text" value={searchInput} onChange={handleInputChange} />
    <button
    onClick={search}
    >proba</button> */}

    <ItemList data = {albums}/>
    
    </Fragment>
    )
}

export default IntemListContainer