import React from 'react';
import MovieList from '../Movies/MovieList';

function TopRated() {
  const category = "top_rated";
  var metascore = [100, 92, 94, 76, 89];
  if (metascore.length > 94) {

  return (
    <MovieList category={category} />
  )
}
}

export default TopRated;