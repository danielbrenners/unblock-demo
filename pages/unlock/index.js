import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const [unlock, setUnlock] = useState(true);
  const animatedText = useSpring({ opacity: unlock ? 1 : 0 });
  const animatedLock = useSpring({ top: unlock ? "-54px" : "-34px" });

  return (
    <div className={styles.root}>
      <Head>
        <title>Unblock Demo</title>
        <meta name="description" content="Unblock Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.heading}>Locker Access</h1>
      <animated.h2 style={animatedText} className={styles.mainContent}>
        Unlocked
      </animated.h2>
      <div className={styles.lock}>
        <div style={animatedLock} className={styles.lockTop}>
          <Image src="/lock-top.svg" width={66} height={60} />
        </div>
        <div className={styles.lockBottom}>
          <Image src="/lock-bottom.svg" width={105} height={70} />
        </div>
      </div>
    </div>
  );
}
