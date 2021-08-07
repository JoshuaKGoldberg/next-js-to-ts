import { Select } from "../components/Select";
import { useLocalStorageItem } from "./useLocalStorageItem";

const filters = {
  All: () => true,
  "Favorites Only": (favorites, movie) => favorites[movie.id],
  "No Favorites": (favorites, movie) => !favorites[movie.id],
};

const filterNames = Object.keys(filters);

export function useFavoritesFilter(favorites) {
  const [filterName, setFilterName] = useLocalStorageItem(
    "movies-favorites-filter",
    filterNames[0]
  );

  const filter = (movie) => filters[filterName](favorites, movie);

  const favoritesSelect = (
    <Select
      options={filterNames}
      onChange={setFilterName}
      selected={filterName}
    />
  );

  return [favoritesSelect, filter];
}
