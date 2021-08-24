import { useLocalStorageItem } from "./useLocalStorageItem";

const blankValue = {};
const initialValue = {
  "a29da595-c7cf-58ea-9111-e0c1dc712b78": true,
};

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorageItem<Record<string, boolean>>(
    "movies-favorite",
    blankValue,
    initialValue
  );

  const toggleFavorite = (name: string) => {
    const updated = {
      ...favorites,
      [name]: !favorites[name],
    };

    setFavorites(updated);
  };

  return [favorites, toggleFavorite] as const;
}
