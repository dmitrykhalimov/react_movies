import React from 'react';
import {MovieList} from '../components/MovieList';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=91c48fb&s=matrix', {})
      .then((response) => response.json())
      .then((data) => {
        this.setState({movies: data.Search})
      });
  }

  render() {
    return <main className ='container content'>
      <p>Hello from Movie App</p>
      <MovieList movies={this.state.movies} />
    </main>
  }
}

export {Main}