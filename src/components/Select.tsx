import styles from "./Select.module.css";

export interface SelectProps {
  onChange: (value: string) => void;
  options: string[];
  selected: string;
}

export function Select({ onChange, options, selected }: SelectProps) {
  return (
    <select
      className={styles.select}
      onChange={(event) => onChange(event.target.value)}
      value={selected}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
