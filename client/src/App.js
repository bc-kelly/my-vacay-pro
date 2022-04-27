import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Browse from "./Browse";
import AccountSummary from "./AccountSummary";
import Profiles from "./Profiles";
import MyTrips from "./MyTrips";

import './App.css';

function App() {
  return (
    <div className="App">
     hello from app
     <NavBar />
          <Routes>
                <Route exact path ="/home" element= { <Home /> } /> 
                <Route exact path ="/browse" element= { <Browse /> } /> 
                <Route exact path ="/accountsummary" element= { <AccountSummary /> } />
                <Route exact path ="/profiles" element= { <Profiles /> } />
                <Route exact path ="/mytrips" element= { <MyTrips /> } />
          </Routes>
    </div>
  );
}

export default App;
