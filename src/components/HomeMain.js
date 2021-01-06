import React from 'react';
import Home from './Home';
import { Switch, Route, Redirect } from "react-router-dom";

const HomeMain =() => {
    return(
      <>    
      <Switch>
        <Route exact path="/" component={Home} />
         <Redirect to="/" />
      </Switch>
      </>
    );
  }
  
  export default HomeMain;
  