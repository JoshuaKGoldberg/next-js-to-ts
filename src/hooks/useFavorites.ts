import { FavoritesData } from "../data/types";
import { useLocalStorageItem } from "./useLocalStorageItem";

// todo: unify? move to shared location?

const blankValue = {};
const initialValue = {
  "a29da595-c7cf-58ea-9111-e0c1dc712b78": true,
};

export function useFavorites() {
  const pair = useLocalStorageItem<FavoritesData>(
    "movies-favorite",
    blankValue,
    initialValue
  );

  // pair[0] = {};

  const [favorites, setFavorites] = pair;

  const toggleFavorite = (name: string) => {
    const updated = {
      ...favorites,
      [name]: !favorites[name],
    };

    setFavorites(updated);
  };

  return [favorites, toggleFavorite] as const;
}
