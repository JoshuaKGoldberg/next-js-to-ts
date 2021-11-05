import cx from "classnames";

import styles from "./FavoriteStar.module.css";

export interface FavoriteStarProps {
  className: string;
  favorite: boolean;
}

export function FavoriteStar({ className, favorite }: FavoriteStarProps) {
  return (
    <span
      aria-label={favorite ? "Favorite" : "Not a favorite"}
      aria-live="polite"
      className={cx(className, styles.star, !favorite && styles.notFavorite)}
      role="img"
    >
      ⭐
    </span>
  );
}
