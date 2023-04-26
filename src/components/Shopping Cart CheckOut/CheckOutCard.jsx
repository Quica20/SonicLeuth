import React, { Fragment } from 'react'
import './CheckOutCard.css'

function CheckOutCard() {
  return (
    <Fragment>
    <div className="row-container">
      <img src="./87411c90985391.5e260730577dc.png" className="row-image" alt="Imagen de la fila" />
      <h2 className="row-title">Circles</h2>
      <p className="row-price">$200</p>
      <p className="row-date">Creation Date: 25/09/2001</p>
      <p className="row-songs">Tracks: 10</p>
      <button className="row-delete-btn">🗑️</button>
    </div>
    </Fragment>
  );
}

export default CheckOutCard
