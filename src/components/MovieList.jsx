import {MovieCard} from "./MovieCard";

function MovieList(props) {
    const {movies} = props;
    return (
      <ul className="movies-list">
        {movies.map((movie) => {
          return <MovieCard key={movie.imdbID} {...movie} />
        })}
      </ul>
    )
}

export {MovieList};