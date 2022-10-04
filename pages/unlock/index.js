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
      <h1 className={styles.heading}>Locker Access</h1>
      <h2 className={styles.mainContent}>Unlocked</h2>
      <div className={styles.lock}>
        <div className={styles.lockTop}>
          <Image src="/lock-top.svg" width={66} height={60} />
        </div>
        <div className={styles.lockBottom}>
          <Image src="/lock-bottom.svg" width={105} height={70} />
        </div>
      </div>
    </div>
  );
}
