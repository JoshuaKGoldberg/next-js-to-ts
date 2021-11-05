import { Fragment } from "react";
import { MovieData } from "../data/types";

import { FavoriteStar } from "./FavoriteStar";
import styles from "./Movie.module.css";

export interface MovieProps {
  favorite: boolean;
  movie: MovieData;
  // toggleFavorite: Function; // no can do!
  toggleFavorite: () => void;
}

export function Movie({ favorite, movie, toggleFavorite }: MovieProps) {
  return (
    <button className={styles.movie} onClick={toggleFavorite} type="button">
      <h2 className={styles.name}>{movie.name}</h2>
      <FavoriteStar
        className={styles.star}
        favorite={favorite}
      />
      <p className={styles.description}>{movie.description}</p>
      <p>
        Starring:{" "}
        {movie.starring.map((star, index) => (
          <Fragment key={star}>
            {star}
            {index === movie.starring.length - 1 ? "" : ", "}
          </Fragment>
        ))}
      </p>
      <p className={styles.year}>{movie.year}</p>
    </button>
  );
}
