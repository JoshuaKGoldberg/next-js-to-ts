import Head from "next/head";

import { Footer } from "./Footer";
import styles from "./Layout.module.css";

export interface LayoutProps {
  children: React.ReactNode;
  description: string;
  title: string;
}

export function Layout({ children, description, title }: LayoutProps) {
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
