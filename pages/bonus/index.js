import Head from "next/head";
import styles from "./styles.module.css";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Hoodie from "../../components/Hoodie";

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
      <div className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 1.7] }}>
          <Suspense fallback={"loading"}>
            <pointLight position={[10, 10, 10]} />
            <Hoodie />
          </Suspense>
        </Canvas>
      </div>
      <div className={styles.button}>Claim</div>
    </div>
  );
}
