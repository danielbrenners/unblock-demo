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
      <h1 className={styles.heading}>Item History</h1>
      <div className={styles.img}>
        <Image src="" width={327} height={253} />
      </div>
      <div className={styles.article}>
        <div className={styles.heading}>Materials</div>
        <div className={styles.info}>
          <div>Item #033322</div>
          <div>$403.04</div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.heading}>Ownership</div>
        <div className={styles.info}>October 30th, 2022</div>
      </div>
      <div className={styles.article}>
        <div className={styles.heading}>Repairs</div>
        <div className={styles.info}>October 30th, 2022</div>
      </div>
    </div>
  );
}
