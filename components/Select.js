import styles from "./Select.module.css";

export function Select({ onChange, options, selected }) {
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
