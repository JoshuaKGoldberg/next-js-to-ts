import { useLocalStorageItem } from "./useLocalStorageItem";

interface Favorites {
  [id: string]: boolean;
}

const blankValue: Favorites = {};
const initialValue: Favorites = {
  "a29da595-c7cf-58ea-9111-e0c1dc712b78": true,
};

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorageItem(
    "movies-favorite",
    blankValue,
    initialValue
  );

  const toggleFavorite = (id: string) => {
    const updated = {
      ...favorites,
      [id]: !favorites[id],
    };

    setFavorites(updated);
  };

  return [favorites, toggleFavorite] as const;
}
