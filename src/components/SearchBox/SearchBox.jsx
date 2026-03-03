import toast, { Toaster} from "react-hot-toast";
import css from "./SearchBox.module.css";
import { useSearchParams } from "react-router-dom";
import { IoSearchOutline } from 'react-icons/io5';

export default function SearchBox () {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const handleChange = (e) => {
        searchParams.set('query', e.target.value);
        setSearchParams(searchParams);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) {
            toast.error("Please enter a search query");
            return;
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label className={css.formLabel}>
                <IoSearchOutline className={css.searchIcon}/>
                <input 
                    onChange={handleChange}
                    value={query}
                    type="text"
                    placeholder="Search movies"
                    className={css.formInput}
                />
            </label>
        </form>
        <Toaster/>
        </>
    )
}