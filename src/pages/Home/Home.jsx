import { Fragment} from 'react';

import './Home.css'

//Import Components:
import NavBar from '../../components/NavBar/navBar';
import IntemListContainer from '../../components/itemListContainer/IntemListContainer';

function Home() {

  return (
    <Fragment>
      <NavBar />
      <IntemListContainer />
      <h1>Vas a poder</h1>
  </Fragment>
  )
}

export default Home