import {MovieCard} from "./MovieCard";

function MovieList(props) {
    const {movies = []} = props;
    return (
      <ul className="movies-list">
        {movies.length ? (
          movies.map((movie) => {
            return <MovieCard key={movie.imdbID} {...movie} />
          })
        ) : (
          <h4>Nothing found</h4>
        )}
      </ul>
    )
}

export {MovieList};