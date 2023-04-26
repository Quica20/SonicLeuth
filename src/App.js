import { Fragment } from 'react';

//Context
import { ItemsProvider } from './context/itemsContext.js';

//Components: 
import Home from './pages/Home/Home.jsx'

/* <ItemsProvider> </ItemsProvider> */

function App() {
  return (
        <Fragment>
          <Home />
        </Fragment>
  );
}

export default App;
