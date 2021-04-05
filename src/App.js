import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Default from './pages/Default';
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route path={["/", "/home"]} component={ProductList} exact={true} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>

      <Modal />
    </React.Fragment>
  );
}

export default App;
