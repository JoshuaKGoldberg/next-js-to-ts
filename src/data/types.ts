export interface FavoritesData {
  [i: string]: boolean;
}

export interface MovieData {
  description: string;
  id: string;
  name: string;
  starring: string[];
  year: number;
}
  