import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";

const lockDelay = 1500;

export default function Home() {
  const [unlock, setUnlock] = useState(true);
  const animatedText = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
    delay: lockDelay,
  });
  const animatedLock = useSpring({
    from: { transform: "translateX(142px) translateY(-35px)" },
    to: "translateX(142px) translateY(-55px)",
    config: config.wobbly,

    delay: lockDelay,
  });

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
        <animated.div style={animatedLock} className={styles.lockTop}>
          <Image src="/lock-top.svg" width={66} height={60} />
        </animated.div>
        <div className={styles.lockBottom}>
          <Image src="/lock-bottom.svg" width={105} height={70} />
        </div>
      </div>
    </div>
  );
}
