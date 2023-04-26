import React, { Fragment } from 'react'
import CheckOutCard from '../../components/Shopping Cart CheckOut/CheckOutCard'
import NavBar from '../../components/NavBar/navBar'
import Barra from '../../components/barra/barra'
import PurchaseConfirmation from '../../components/purchase confirmation/purchaseConfirmation'

function CheckOut() {
  return (
    <Fragment>
      <NavBar />
      <Barra />
      <CheckOutCard />
      <CheckOutCard />
      <CheckOutCard />
      <CheckOutCard />
      <PurchaseConfirmation />
    </Fragment>
  )
}

export default CheckOut