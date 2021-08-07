import { useLocalStorageItem } from "./useLocalStorageItem";

const blankValue = {};
const initialValue = {
  "a29da595-c7cf-58ea-9111-e0c1dc712b78": true,
};

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorageItem(
    "movies-favorite",
    blankValue,
    initialValue
  );

  const toggleFavorite = (name) => {
    const updated = {
      ...favorites,
      [name]: !favorites[name],
    };

    setFavorites(updated);
  };

  return [favorites, toggleFavorite];
}
