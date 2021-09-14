import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Technologies from './pages/Technologies';
import Register from './pages/Register';
import Tutorial from './pages/Tutorial'

function App() {
  return (
    <>
      
      <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/technologies"><Technologies/></Route>
          <Route exact path="/register"><Register/></Route>
          <Route exac path="/tutorial"><Tutorial/></Route>
        </Switch>
      </Router>    
    </>
  );
}

export default App;
