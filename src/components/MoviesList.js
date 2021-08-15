import { useFavorites } from "../hooks/useFavorites";
import { useFavoritesFilter } from "../hooks/useFavoritesFilter";
import { useSorter } from "../hooks/useSorter";
import { Movie } from "./Movie";
import styles from "./MoviesList.module.css";

export function MoviesList({ movies }) {
  const [favorites, toggleFavorite] = useFavorites();
  const [favoritesSelect, filter] = useFavoritesFilter(favorites);
  const [sortersSelect, sorter] = useSorter();

  return (
    <div>
      <div className={styles.selects}>
        {favoritesSelect}
        {sortersSelect}
      </div>
      <div className={styles.movies}>
        {movies
          .filter(filter)
          .sort(sorter)
          .map((movie) => (
            <Movie
              key={movie.id}
              favorite={favorites[movie.id]}
              movie={movie}
              toggleFavorite={() => toggleFavorite(movie.id)}
            />
          ))}
      </div>
    </div>
  );
}
