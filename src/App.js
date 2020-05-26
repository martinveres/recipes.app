import React from 'react';
 import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import HomePage from './pages/home';
import RecipesPage from './pages/recipes';
import SingleRecipe from './pages/singleRecipe';
import DefaultPage from './pages/default';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <main>
        <Navbar/>
        <Switch >
            <Route path= "/" exact component={HomePage}></Route>
            <Route path= "/recipes" exact component={RecipesPage}></Route>
            <Route path= "/recipes/:id" component={SingleRecipe}></Route>
            <Route component={DefaultPage}></Route>
        </Switch>
      </main>
    </Router>
    
  );
} 
 
export default App;
