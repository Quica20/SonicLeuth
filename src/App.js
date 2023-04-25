import { Fragment } from 'react';

//Context
import { Navbar } from 'react-bootstrap';

//Components: 
import Home from './pages/Home.jsx'


function App() {
  return (
    <Navbar>
      <Fragment>
        <Home />
      </Fragment>
    </Navbar>
  );
}

export default App;
