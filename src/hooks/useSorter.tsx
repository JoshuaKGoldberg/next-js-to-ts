import { Select } from "../components/Select";
import { MovieData } from "../data/types";
import { useLocalStorageItem } from "./useLocalStorageItem";

const sorters = {
  "Name (A to Z)": (a: MovieData, b: MovieData) => a.name.localeCompare(b.name),
  "Name (Z to A)": (a: MovieData, b: MovieData) => b.name.localeCompare(a.name),
  "Year (New to Old)": (a: MovieData, b: MovieData) => b.year - a.year,
  "Year (Old to New)": (a: MovieData, b: MovieData) => a.year - b.year,
};

const sorterNames = Object.keys(sorters) as (keyof typeof sorters)[];

export function useSorter() {
  const [sorterName, setSorterName] = useLocalStorageItem(
    "movies-sorter",
    sorterNames[0]
  );

  const sortersSelect = (
    <Select<keyof typeof sorters>
      options={sorterNames}
      onChange={setSorterName}
      selected={sorterName}
    />
  );

  const sorter = sorters[sorterName];

  return [sortersSelect, sorter] as const;
}
