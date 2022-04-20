import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import React, {useEffect, useState, Fragment} from 'react'
import CardFeed from './components/mainCardFeed'
import NavBar from './components/navBar/navBar'

function App() {

  return (
    <Router>
      <Fragment>
        <div className="navbar-cards">
          <NavBar />
          <div className="card-container">
            <Routes>
              <Route exact path="/cards" element={<CardFeed />} />
            </Routes>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
