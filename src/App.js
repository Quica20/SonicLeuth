import { Fragment } from 'react';

//Context
import { ContextAPI } from './context/contextAPI';

//Components: 
import Home from './pages/Home.jsx'


function App() {
  return (
    <ContextAPI>
      <Fragment>
        <Home />
      </Fragment>
    </ContextAPI>
  );
}

export default App;
