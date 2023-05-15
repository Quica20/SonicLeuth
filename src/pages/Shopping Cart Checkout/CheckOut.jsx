import React, { Fragment } from 'react'
import CheckOutCard from '../../components/Shopping Cart CheckOut/CheckOutCard'
import Barra from '../../components/barra/barra'
import NavScrollExample from '../../components/cardImg/cardImg'
import { useContext } from 'react'

//Importamos contexto:
import { ItemsContext } from '../../context/itemsContext'

function CheckOut() {
  const {itemsCheckout} = useContext(ItemsContext)

  return (
    <Fragment>
      <NavScrollExample />
      <Barra />
      <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
      {itemsCheckout.map((item) => {
        return(
                <div key={item.id} style={{ margin: '10px', width: '380px' }}>
                  <CheckOutCard 
                   identificador={item.identificador} nombre={item.nombre} 
                   imagen={item.imagen} fechaLanzamiento={item.fechaLanzamiento} 
                   totalCanciones={item.totalCanciones}
                  />
                </div>
        )
      })}
  </div>

    </Fragment>
  )
}

export default CheckOut