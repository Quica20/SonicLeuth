import React, { Fragment } from 'react'
import CheckOutCard from '../../components/Shopping Cart CheckOut/CheckOutCard'
import Barra from '../../components/barra/barra'
import PurchaseConfirmation from '../../components/purchase confirmation/purchaseConfirmation'
import { useContext } from 'react'

//Importamos contexto:
import { ItemsContext } from '../../context/itemsContext'

function CheckOut() {
  const {addItemsCheckOut, itemsCheckout, numberOfItems, removeItem} = useContext(ItemsContext)

  return (
    <Fragment>
      <Barra />
      {itemsCheckout.map((item) => {
        return(
                <div className='col-sm-3'>
                  <CheckOutCard 
                  identificador={item.id} nombre={item.name} 
                  imagen={item.images[0].url} fechaLanzamiento={item.release_date} 
                  totalCanciones={item.total_tracks}
                  />
                </div>
        )
      })}
      <PurchaseConfirmation />
    </Fragment>
  )
}

export default CheckOut