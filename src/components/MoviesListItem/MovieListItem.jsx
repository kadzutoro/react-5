import css from './MovieListItem.module.css';
import { createImgURL } from "../../utils";


export default function MovieListItem ({ movie: { title, poster_path } }) {
    return(
        <div>
            <div>
                <img className={css.img} src={createImgURL(poster_path)} alt={`${title} poster`} />
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}