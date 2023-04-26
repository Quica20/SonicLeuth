import { Fragment} from 'react';

import './Home.css'

//Import Components:
import NavBar from '../../components/NavBar/navBar';
import IntemListContainer from '../../components/itemListContainer/IntemListContainer';
import InfoCheckout from '../../components/Shopping Cart CheckOut/CheckOut';
function Home() {

  return (
    <Fragment>
      <NavBar />
      <IntemListContainer />
      <h1>Vas a poder</h1>
      <InfoCheckout />
  </Fragment>
  )
}

export default Home