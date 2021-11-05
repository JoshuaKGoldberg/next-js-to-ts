import styles from "./Title.module.css";

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h1 className={styles.title}>{children}</h1>;
}
