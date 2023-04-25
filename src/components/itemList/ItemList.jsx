import CardAlbum from '../cardAlbum/CardAlbum'
import React, { Fragment } from 'react'

//Importamos Componentes:

function ItemList({data}) {
  return (
<Fragment>
        {data.map(({item}) => {
            return(
                <CardAlbum key={item.id} name = {item.name}/>
            )
        })}
</Fragment>
  )
}

export default ItemList