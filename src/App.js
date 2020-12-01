import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Landingpge from './Pages/Landingpage/Landingpage';
import Contact from './Pages/Contact page/Contact'
import About from './Pages/About page/About'
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Landingpge} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </HashRouter>
  );
}

export default App;
