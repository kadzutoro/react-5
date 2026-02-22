import css from './MovieList.module.css';
import { Link ,useLocation } from 'react-router-dom';
import MovieListItem from "../MoviesListItem/MovieListItem";

export default function MoviesList ({ movies}) {
    const location = useLocation();
    return(
        <div>
            <ul>{movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        <MovieListItem movie={movie} />
                    </Link>
                </li>
            ))}</ul>
        </div>
    )
}