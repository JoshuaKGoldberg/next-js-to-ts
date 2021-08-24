import { Select } from "../components/Select";
import { MovieData } from "../data/types";
import { useLocalStorageItem } from "./useLocalStorageItem";

type FavoriteSorter = (a: MovieData, b: MovieData) => number;

type SorterName = "Name (A to Z)" | "Name (Z to A)" | "Year (New to Old)" | "Year (Old to New)";

const sorters: Record<SorterName, FavoriteSorter> = {
  "Name (A to Z)": (a, b) => a.name.localeCompare(b.name),
  "Name (Z to A)": (a, b) => b.name.localeCompare(a.name),
  "Year (New to Old)": (a, b) => b.year - a.year,
  "Year (Old to New)": (a, b) => a.year - b.year,
};

const sorterNames = Object.keys(sorters) as SorterName[];

export function useSorter() {
  const [sorterName, setSorterName] = useLocalStorageItem("movies-sorter", sorterNames[0]);

  const sortersSelect = (
    <Select options={sorterNames} onChange={setSorterName} selected={sorterName} />
  );

  const sorter = sorters[sorterName];

  return [sortersSelect, sorter] as const;
}
