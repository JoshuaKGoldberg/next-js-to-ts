import { Select } from "../components/Select";
import { MovieData } from "../data/types";
import { useLocalStorageItem } from "./useLocalStorageItem";

type FilterName = keyof typeof filters;

const filters = {
  All: () => true,
  "Favorites Only": (favorites: Record<string, boolean>, movie: MovieData) => favorites[movie.id],
  "No Favorites": (favorites: Record<string, boolean>, movie: MovieData) => !favorites[movie.id],
};

const filterNames = Object.keys(filters) as FilterName[];

export function useFavoritesFilter(favorites: Record<string, boolean>) {
  const [filterName, setFilterName] = useLocalStorageItem<FilterName>(
    "movies-favorites-filter",
    filterNames[0]
  );

  const filter = (movie: MovieData) => filters[filterName](favorites, movie);

  const favoritesSelect = (
    <Select options={filterNames} onChange={setFilterName} selected={filterName} />
  );

  return [favoritesSelect, filter] as const;
}
