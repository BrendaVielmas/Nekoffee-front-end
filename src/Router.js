import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import {ProtectedRoute} from './ProtectedRoute'
import Enter from './Enter';
import CreateCommand from './CreateCommand'

const Router = () => (


  <BrowserRouter>
    <Switch>
      <ProtectedRoute path= "/create/" component = {CreateCommand}/> 
      <Route exact path = "/" component ={Enter}/>
      <Route path = '*' component = {() => '404 NOT FOUND'}/> 
    </Switch>
  </BrowserRouter>
);

export default Router;