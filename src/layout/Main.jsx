import React from 'react';
import {MovieList} from '../components/MovieList';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }

    this.searchMovies = this.searchMovies.bind(this);
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=91c48fb&s=matrix`, {})
    .then((response) => response.json())
    .then((data) => {
      this.setState({movies: data.Search});
    });
  }

  searchMovies(request) {
    fetch(`http://www.omdbapi.com/?apikey=91c48fb&s=${request}`, {})
    .then((response) => response.json())
    .then((data) => {
      this.setState({movies: data.Search});
    });
  }

  render() {
    const {movies} = this.state;
    return <main className ='container content'>
      <Search cb={this.searchMovies}/>
      {
        movies.length ? (
          <MovieList movies={this.state.movies} />
        ) : <Preloader />
      }
      
    </main>
  }
}

export {Main}