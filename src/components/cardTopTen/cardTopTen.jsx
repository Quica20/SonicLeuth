import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardTopTen({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <p>{data.nombre_del_album}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Artist: {data.nombre_del_artista}</p>
          <p>Gender: {data.genero}</p>
          <p>Songs: {data.cantidad_de_canciones}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}