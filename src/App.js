import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Landingpge from './Pages/Landingpage/Landingpage';
import Contact from './Pages/Contact page/Contact'
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Landingpge} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
  );
}

export default App;
