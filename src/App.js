import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from './components/Navbar';
import HomeMain from './components/HomeMain';
import './App.css';
import {  Route  } from "react-router-dom";

const App =() => {
  return(
    <>
    <Navbar />
    <Route exact path="/" component={HomeMain} />
    </>
  );
};

export default App;
