import './CheckOutCard.css'

import { useContext } from 'react'

//Importamos contexto:
import { ItemsContext } from '../../context/itemsContext'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CheckOutCard(props) {
  const {addItemsCheckOut, itemsCheckout, numberOfItems, removeItem} = useContext(ItemsContext)

  function deleteItem(){
    removeItem(props.identificador)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <p>{props.nombre}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Price: $100</p>
          <p>Creation Date: {props.fechaLanzamiento}</p>
          <p>Tracks: {props.totalCanciones}</p>
        </Typography>
        <button className="row-delete-btn"
      onClick={
        deleteItem
      }
      >🗑️</button>
      </CardContent>
    </Card>
  );
}