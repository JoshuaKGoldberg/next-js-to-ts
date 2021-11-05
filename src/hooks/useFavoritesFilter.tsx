import { Select } from "../components/Select";
import { FavoritesData, MovieData } from "../data/types";
import { useLocalStorageItem } from "./useLocalStorageItem";

interface Filters {
  [i: string]: (favorites: FavoritesData, movie: MovieData) => boolean;
}

const filters: Filters = {
  All: () => true,
  "Favorites Only": (favorites, movie) => favorites[movie.id],
  "No Favorites": (favorites, movie) => !favorites[movie.id],
};

const filterNames = Object.keys(filters);

export function useFavoritesFilter(favorites: FavoritesData) {
  const [filterName, setFilterName] = useLocalStorageItem(
    "movies-favorites-filter",
    filterNames[0]
  );

  const filter = (movie: MovieData) => filters[filterName](favorites, movie);

  const favoritesSelect = (
    <Select
      options={filterNames}
      onChange={setFilterName}
      selected={filterName}
    />
  );

  return [favoritesSelect, filter] as const;
}
