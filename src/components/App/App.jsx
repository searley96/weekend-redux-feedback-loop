import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/">
          <Feelings />
        </Route>
        <Route path="/understanding">
         <Understanding />
        </Route>
        <Route path="/supported">
          <Supported />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
      </Router>

    </div>
  );
}

export default App;
