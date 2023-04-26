import React, { Fragment } from 'react'
import './CheckOutCard.css'

import { useContext } from 'react'

//Importamos contexto:
import { ItemsContext } from '../../context/itemsContext'

function CheckOutCard(props) {
  const {addItemsCheckOut, itemsCheckout, numberOfItems, removeItem} = useContext(ItemsContext)

  function deleteItem(elimi){
    removeItem(props.identificador)
  }

  return (
    <Fragment>
    <div className="row-container">
      <img src= {props.imagen} className="row-image" alt="Imagen de la fila" />
      <h2 className="row-title">{props.nombre}</h2>
      <p className="row-price">$100</p>
      <p className="row-date">Creation Date: {props.fechaLanzamiento}</p>
      <p className="row-songs">Tracks: {props.totalCanciones}</p>
      <button className="row-delete-btn"
      onClick={
        deleteItem
      }
      >🗑️</button>
    </div>
    </Fragment>
  );
}

export default CheckOutCard
