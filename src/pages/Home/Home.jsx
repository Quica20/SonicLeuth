import { Fragment} from 'react';
import './Home.css'

//Import Components:
import IntemListContainer from '../../components/itemListContainer/IntemListContainer';



function Home() {
  return (
    <Fragment>
      <IntemListContainer />
  </Fragment>
  )
}

export default Home