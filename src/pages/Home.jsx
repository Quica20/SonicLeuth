import React, { useContext } from 'react'
import { Fragment, useState } from 'react';
import './Home.css'

//Importamos el contexto:
import {albumsContext} from '../context/contextAPI'

//Components:
import NavBar from '../components/NavBar/navBar.jsx'
import CardAlbum from '../components/cardAlbum/album.jsx'


function Home() {

  /* const { albums }  = useContext(albumsContext) */
  return (
    <Fragment>
      <NavBar />

{/*       {albums.map((album) => {
        return(
          <CardAlbum data = {album} key = {album.id}/>
        )
      })}  */}
  </Fragment>
  )
}

export default Home