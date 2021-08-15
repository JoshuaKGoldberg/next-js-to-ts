import styles from "./Title.module.css";

export function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}
