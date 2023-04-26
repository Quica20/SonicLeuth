import { Fragment } from 'react';

//Context
import { ItemsProvider } from './context/itemsContext.js';

//Components: 
import Home from './pages/Home/Home.jsx'
import CheckOut from './pages/Shopping Cart Checkout/CheckOut.jsx';
 

function App() {
  return (
    <ItemsProvider>
        <Fragment>
          <Home />   
        </Fragment>
    </ItemsProvider>
  );
}

export default App;
