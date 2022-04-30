function MovieCard(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type, 
    Poster: poster
  } = props;
  
  return <div className="card movie-list__item">
      <div className="card-image">
        <img src={poster} alt={id}/>
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{year} <span className="right">{type}</span></p>
      </div>
    </div>
  ;
}

export {MovieCard};