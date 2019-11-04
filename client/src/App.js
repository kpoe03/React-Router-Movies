import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import MovieCard from './Movies/MovieCard';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Popular from './Sort/Popular';
import TopRated from'./Sort/TopRated';
import Home from './Sort/Home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>
        <header>
          <h1 className="header-title">
            Movies
          </h1>
          <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="/popular">Popular</Link>
          <Link className="Link" to="/top-rated">Top Rated</Link>

        </header>

        <Switch>
          <Route path="/top-rated" component={TopRated} />
          <Route path="/popular" component={Popular} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>

      <div>
        <SavedList list={SavedList} />
      <Route exact path="/" component={MovieList} /> 
      <Route path="/movies/:id" component={Movie} /> 
        </div>
        </React.Fragment>
    );
  }
}

export default App;