import React from 'react';
import {MovieList} from '../components/MovieList';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    }

    this.searchMovies = this.searchMovies.bind(this);
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`, {})
    .then((response) => response.json())
    .then((data) => {
      this.setState({movies: data.Search, loading: false});
    });
  }

  searchMovies(request, type) {
    this.setState({loading: true});
    console.log(type);
    console.log(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${request}${type ? `&type=${type}` : ''}`);
    fetch(`http://www.omdbapi.com/?apikey=91c48fb&s=${request}${type ? `&type=${type}` : ''}`, {})
    .then((response) => response.json())
    .then((data) => {
      this.setState({movies: data.Search, loading: false});
    });
  }

  render() {
    const {movies, loading} = this.state;
    return <main className ='container content'>
      <Search cb={this.searchMovies}/>
      {loading ? (
          <Preloader />
      ) : (
          <MovieList movies={movies} />
      )}
      
    </main>
  }
}

export {Main}