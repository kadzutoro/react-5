import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';
import MovieListItem from "../MoviesListItem/MovieListItem";

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id} className={css.listItem}>
            <Link 
              to={`/movies/${movie.id}`} 
              state={{ from: location }}
              className={css.link}
            >
              <MovieListItem movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}