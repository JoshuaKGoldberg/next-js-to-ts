import styles from "./Select.module.css";

export interface SelectProps<OptionValue extends string> {
  onChange: (value: OptionValue) => void;
  options: OptionValue[];
  selected: OptionValue;
}

export function Select<OptionValue extends string>({
  onChange,
  options,
  selected,
}: SelectProps<OptionValue>) {
  return (
    <select
      className={styles.select}
      onChange={(event) => onChange(event.target.value as OptionValue)}
      value={selected}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
