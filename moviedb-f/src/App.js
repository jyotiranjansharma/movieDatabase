import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/LandingPage/LandingPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import MovieGrid from './components/Grid/MovieGridView';
import MovieDetail from './components/Details/MovieDetails';
import TvDetail from './components/Details/TvShowDetails';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component ={Landing}/>
          <Route exact path="/home" component ={Landing}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/movies" component={MovieGrid}/>
          <Route exact path="/movie/:id/:name" component={MovieDetail}/>
          <Route exact path="/tv/:id" component={TvDetail}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
