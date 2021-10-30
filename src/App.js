import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './store/index';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Details from './components/Details/Details';
import ScrollToTop from 'react-scroll-to-top';
import Dashboard from "./Pages/Dashboard";
import React, { createContext, useState } from "react";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Shipment from './components/Shipment/Shipment';


import './App.css';
import Login from "./components/Login/Login";

export const UserContext = createContext();
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
 
          <Switch>
            <Provider store={store}>

            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/details/:_id" exact component={Details} />
            <PrivateRoute path="/addProduct"><Dashboard/></PrivateRoute>
            <PrivateRoute path="/shipment"><Shipment/></PrivateRoute>

            <Route path="/login"exact component={Login} />

            {/* <ScrollToTop style={{ backgroundColor: '#12d0d9', padding: '5px' }} /> */}
          </Provider>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
