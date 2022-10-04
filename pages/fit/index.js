import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import { OrbitControls } from "@react-three/drei";
import Girl from "../../components/Girl";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Unblock Demo</title>
        <meta name="description" content="Unblock Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.heading}>Fit Check</h1>
      <div className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 1.5] }}>
          <Suspense fallback={"loading"}>
            <OrbitControls />
            <pointLight position={[10, 10, 10]} />
            <Girl />
          </Suspense>
        </Canvas>
      </div>

      {/*
      <div className={styles.img}>
        <Image src="" width={327} height={253} />
      </div>
  */}
      <div className={styles.subtitle}>Fit simulation</div>
      <div className={styles.goesGreat}>Goes great with...</div>
      <div className={styles.article}>
        <div className={styles.info}>
          <div>
            <div className={styles.itemName}>Item 1</div>
            <div className={styles.itemLocation}>Aisle1. Section 12.</div>
          </div>
          <div className={styles.articleImg}>content</div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.info}>
          <div>
            <div className={styles.itemName}>Item 1</div>
            <div className={styles.itemLocation}>Aisle1. Section 12.</div>
          </div>
          <div className={styles.articleImg}>content</div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.info}>
          <div>
            <div className={styles.itemName}>Item 1</div>
            <div className={styles.itemLocation}>Aisle1. Section 12.</div>
          </div>
          <div className={styles.articleImg}>content</div>
        </div>
      </div>
      <div className={styles.conversation}>Conversation...</div>
      <div className={styles.comment}>
        <div className={styles.star}>
          <Image src="/star.svg" width={16} height={16} />
          <Image src="/star.svg" width={16} height={16} />
          <Image src="/star.svg" width={16} height={16} />
          <Image src="/star.svg" width={16} height={16} />
        </div>
        <div className={styles.userName}>user02220</div>
        <div className={styles.commentContent}>
          This shirt is really comforable! A boxy fit.
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles.star}>
          <Image src="/star.svg" width={16} height={16} />
          <Image src="/star.svg" width={16} height={16} />
          <Image src="/star.svg" width={16} height={16} />
          <Image src="/star.svg" width={16} height={16} />
        </div>
        <div className={styles.userName}>user02220</div>
        <div className={styles.commentContent}>
          This shirt is really comforable! A boxy fit.
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles.star}>
          <Image src="/star.svg" width={16} height={16} />
          <Image src="/star.svg" width={16} height={16} />
          <Image src="/star.svg" width={16} height={16} />
          <Image src="/star.svg" width={16} height={16} />
        </div>
        <div className={styles.userName}>user02220</div>
        <div className={styles.commentContent}>
          This shirt is really comforable! A boxy fit.
        </div>
      </div>
    </div>
  );
}
