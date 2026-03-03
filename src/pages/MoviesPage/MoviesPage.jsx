import { useEffect, useState, useMemo } from 'react';
import { fetchData } from '../../movies-api';
import SearchBox from '../../components/SearchBox/SearchBox';
import MoviesList from '../../components/MoviesList/MovieList';
import css from './MoviesPage.module.css';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';


export default function MoviesPage () {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const { results } = await fetchData(`/search/movie`, { query });
                setMovies(results);
            } catch (error) {
                toast.error("Something went wrong. Please try again later.");
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
     getData();
    }, [query])

    const filteredMovies = useMemo (() => {
        return movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
     }, [movies, query])

    return(
        <div>
            <p className={css.title}>Search film by name</p>
            <SearchBox/>
            {movies.length > 0 && <MoviesList movies={filteredMovies} />}
            {query && isLoading && <Loader/>}
            <Toaster/>
        </div>
    )
}