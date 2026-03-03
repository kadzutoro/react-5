import { createImgURL } from "../../utils";
import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../movies-api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

export default function MovieCast() {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const cast = await fetchData(`/movie/${movieId}/credits`);
        setCredits(cast.cast);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul className={css.list}>
        {credits.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <div className={css.imageContainer}>
              <img src={createImgURL(profile_path)} alt={name} />
            </div>
            <div className={css.actorDesc}>
              <span className={css.name}>{name}</span>
              <span className={css.character}>{character}</span>
            </div>
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      <Toaster />
    </div>
  );
}
