import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../../movies-api';
import MoviesList from '../../components/MoviesList/MovieList';
import Loader from '../../components/Loader/Loader';
import toast, {Toaster} from 'react-hot-toast';


export default function HomePage () {

        const [movies, setMovies] = useState([]);
        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            const getData = async () => {
                try {
                    setIsLoading(true);
                    const { results } = await fetchData('/trending/movie/day');
                    setMovies(results);
                } catch (error) {
                    toast.error("Something went wrong. Please try again later.");
                    console.log(error);
                } finally {
                    setIsLoading(false);
                }
            }
getData();
        },[])

    return(
        <div>
            <h2 className={css.tittle}>Check out the newest movie releases toady!</h2>
            {isLoading && <Loader/>}
            <MoviesList movies={movies} />
            <Toaster/>
        </div>
    )
}