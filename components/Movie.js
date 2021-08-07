import { Fragment } from "react";

import { FavoriteStar } from "./FavoriteStar";
import styles from "./Movie.module.css";

export function Movie({ className, favorite, movie, toggleFavorite }) {
  return (
    <button className={styles.movie} onClick={toggleFavorite} type="button">
      <h2 className={styles.name}>{movie.name}</h2>
      <FavoriteStar
        className={styles.star}
        favorite={favorite}
        toggleFavorite={toggleFavorite}
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
