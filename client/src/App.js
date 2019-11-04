import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    const foundMovie = savedList.find(el => el.title === movie.title)
    if(!foundMovie){
      setSavedList( [...savedList, movie]);
    }else{
      alert('movie already exists');
    }
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' 
        render = {(props) => <Movie {...props }  addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
//   return (
//     <React.Fragment>
//       <Router>
//         <header>
//           <h1 className="header-title">
//             Movies
//           </h1>
//           <Link className="Link" to="/">Home</Link>
//           <Link className="Link" to="/popular">Popular</Link>
//           <Link className="Link" to="/top-rated">Top Rated</Link>

//         </header>

//         <Switch>
//           <Route path="/top-rated" component={TopRated} />
//           <Route path="/popular" component={Popular} />
//           <Route path="/" component={Home} />
//         </Switch>
//       </Router>

//     <div>
//       <SavedList list={savedList} clearSavedList={clearSavedList}/>
//       <Route exact path='/' component={MovieList} />
//       <Route 
//         path='/movies/:id' 
//         render={(props) => <Movie {...props} addToSavedList={addToSavedList}/>}
//       />
//     </div>
//     </React.Fragment>

//   );
// };

// export default App;