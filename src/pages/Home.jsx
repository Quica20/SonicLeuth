import React, { useContext } from 'react'
import { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Home.css'

//Importamos el contexto:
import {albumsContext} from '../context/contextAPI'

//Components:
import NavBaralone from '../components/navBaralone';
import CardAlbum from '../components/cardAlbum/album.jsx'



function Home() {

const { albums,  setSearchInput, search }  = useContext(albumsContext) 
  console.log(albums)
  return (
    <Fragment>

      <NavBaralone /> 
      
  </Fragment>
  )
}

export default Home