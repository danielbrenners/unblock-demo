import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Unblock Demo</title>
        <meta name="description" content="Unblock Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.heading}>Bonus Content</h1>
      <h2 className={styles.mainContent}>Item #0032</h2>
      <div className={styles.img}>
        <Image src="" width={327} height={253} />
      </div>
      <div className={styles.button}>Claim</div>
    </div>
  );
}
