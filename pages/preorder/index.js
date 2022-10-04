import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import { useSpring, animated, config } from "react-spring";

export default function Home() {
  const [isOrdered, setIsOrdered] = useState(false);
  const titleProps = useSpring({
    backgroundColor: isOrdered ? "white" : "black",
    color: isOrdered ? "black" : "white",
    config: config.slow,
  });

  const orderSummary1Props = useSpring({
    opacity: isOrdered ? 1 : 0,
    delay: 500,
    config: config.slow,
  });
  const orderSummary2Props = useSpring({
    opacity: isOrdered ? 1 : 0,
    delay: 1000,
    config: config.slow,
  });

  return (
    <div className={styles.root}>
      <Head>
        <title>Unblock Demo</title>
        <meta name="description" content="Unblock Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.heading}>Your Order</h1>

      <div>
        <animated.div
          style={titleProps}
          className={styles.preOrder}
          onClick={() => setIsOrdered(true)}
        >
          <h2 className={styles.mainContent}>
            {isOrdered ? "Pre-Ordered!" : "Pre-Order →"}
          </h2>
        </animated.div>
        <div className={styles.img}>
          <Image src="/boot.png" width={351} height={253} />
        </div>
        <div>
          <animated.div
            style={orderSummary1Props}
            className={styles.orderSummary}
          >
            <div className={styles.subHeading}>Order Summary</div>
            <div className={styles.info}>
              <div>Item #033322</div>
              <div>$403.04</div>
            </div>
          </animated.div>
          <animated.div style={orderSummary2Props} className={styles.delivery}>
            <div className={styles.subHeading}>Expected Delivery</div>
            <div className={styles.info}>October 30th, 2022</div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}
