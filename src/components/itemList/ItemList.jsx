import CardAlbum from '../cardAlbum/CardAlbum'
import React, { Fragment } from 'react'

//Importamos Componentes:

function ItemList({data}) {
  return (
<Fragment>
<div className="row gutter-4">
        {data.map((item) => {
          return(
            <div className="col-sm-3">
              <CardAlbum key={item.id} name={item.name} imgs={item.images[0].url}/>
            </div>
          )
        })}
      </div>
</Fragment>
  )
}

export default ItemList