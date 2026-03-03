import css from './MovieListItem.module.css';
import { createImgURL } from "../../utils";

export default function MovieListItem({ movie: { title, poster_path } }) {
  return (
    <div className={css.card}>
      <img className={css.cardImg} src={createImgURL(poster_path)} alt={`${title} poster`} />
      <p className={css.cardTitle}>{title}</p>
    </div>
  );
}