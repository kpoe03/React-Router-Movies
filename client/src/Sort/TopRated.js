import React from 'react';
import MovieList from '../Movies/MovieList';

function TopRated() {
  const category = "top_rated";
  return (
    <MovieList category={category} />
  )
}

export default TopRated;