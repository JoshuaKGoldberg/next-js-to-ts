import Head from "next/head";

import { Footer } from "./footer";
import styles from "./Layout.module.css";

export function Layout({ children, description, title }) {
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
