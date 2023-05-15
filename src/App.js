import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Context
import { ItemsProvider } from './context/itemsContext.js';

//Components: 
import Home from './pages/Home/Home.jsx'
import CheckOut from './pages/Shopping Cart Checkout/CheckOut.jsx';
import TopTen from './pages/topTen/topTen.jsx';
import NavBar from './components/NavBar/navBar'

function App() {
  /* const {onStart, onHome} = useContext(ItemsContext) */
  return (
    <Fragment>
          <Router>
            <React.StrictMode>
                <NavBar />
                <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/ShoppingCart' element={<CheckOut />}/>
                  <Route path='/TopBestSellingAlbums' element={<TopTen />}/>
                </Routes>
            </React.StrictMode>
          </Router> 
    </Fragment>
  );
}

export default App;
