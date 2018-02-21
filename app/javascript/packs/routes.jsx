import React from 'react';  
import { Route } from 'react-router';  
import App from './components/App';  
import HomePage from './components/home/HomePage';  
import CatsPage from './components/cats/CatsPage';  
import CatPage from './components/cats/CatPage';

export default (  
  <Route path="/" component={App}>
	<Route exact path="/" component={HomePage}/>
    <Route path="/cats" component={CatsPage} />
  </Route>
);