import styles from "./Select.module.css";

interface SelectProps<Value extends string> {
  onChange: (value: Value) => void;
  options: Value[];
  selected: Value;
}

export function Select<Value extends string>({ onChange, options, selected }: SelectProps<Value>) {
  return (
    <select
      className={styles.select}
      onChange={(event) => onChange(event.target.value as Value)}
      value={selected}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
