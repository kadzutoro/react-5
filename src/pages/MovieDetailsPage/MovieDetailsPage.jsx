import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation, NavLink } from 'react-router-dom';
import { fetchData } from '../../movies-api';
import css from './MovieDetailsPage.module.css';
import toast, {Toaster} from 'react-hot-toast';
import BackLink from '../../components/BackLink/BackLink';
import Loader from '../../components/Loader/Loader';
import clsx from 'clsx';
import { createImgURL } from '../../utils';


const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.activeLink);

export default function MovieDetailsPage () {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
  const getMovieById = async () => {
    try {
      setIsLoading(true);
      const data = await fetchData(`/movie/${movieId}`);
      setMovie(data);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  getMovieById();
}, [movieId]);


    return(
        <div>
            <BackLink to={backLinkRef.current} />
            <div>
                <div>
                    <img src={createImgURL(movie?.poster_path)} alt={`${movie?.title} poster`} />
                </div>
                <div>
                    <p>{movie?.title}</p>
                    <p>{movie?.overview}</p>
                    <div>
                        <span>Genres: {movie?.genres.map(({name}) => name).join(', ')}</span>
                    </div>
                    <div>
                        <p>Release date: {movie?.release_date}</p>
                    </div>
                </div>
            </div>
            <nav>
                <NavLink to="cast" className={buildLinkClass}>Cast</NavLink>
                <NavLink to="reviews" className={buildLinkClass}>Reviews</NavLink>
            </nav>
            <div>
                <Suspense fallback={<Loader/>}><Outlet/></Suspense>
            </div>
            {isLoading && <Loader/>}
            <Toaster/>
        </div>
    )
}