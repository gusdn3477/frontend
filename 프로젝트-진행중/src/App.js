import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home/Home';
import Features from './components/pages/Features/Features';
import ProductView from './components/elements/widgets/product/ProductView';
import "./assets/css/mystyle.css";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route exact path="/features"><Features></Features></Route>
        <Route exact path="/productdetail/:id"><ProductView/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;