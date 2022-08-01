import Head from "next/head";

import { Footer } from "./Footer";
import styles from "./Layout.module.css";

export interface LayoutProps {
  children: React.ReactNode;
  description: string;
  title: string;
}

export function Layout(props: LayoutProps) {
  // const { children, description, title } = props;
  const children = props.children,
    description = props.description,
    title = props.title;
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
