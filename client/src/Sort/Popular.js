import React from 'react';
import MovieList from '../Movies/MovieList';

function Popular() {
  const category = "popular";
  return (
    <MovieList category={category} />
  )
}

export default Popular;