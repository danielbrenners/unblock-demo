import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.css";
import PulseDot from "../../components/PulseDot";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Unblock Demo</title>
        <meta name="description" content="Unblock Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.heading}>Item History</h1>
      <PulseDot style={{ top: "100px", left: "90px" }} />
      <PulseDot style={{ top: "220px", left: "170px" }} />
      <PulseDot style={{ top: "240px", left: "210px" }} />
      <PulseDot style={{ top: "330px", left: "190px" }} />

      <div className={styles.img}>
        <Image src="/italy-final.jpg" width={327} height={332} />
      </div>
      <div className={styles.article}>
        <div className={styles.heading}>Overview</div>

        <div className={styles.info}>
          <div>Denim</div>
          <div>Rome, Italy</div>
        </div>
        <div className={styles.info}>
          <div>Silk georgette</div>
          <div>Palermo, Italy</div>
        </div>
        <div className={styles.info}>
          <div>Zinc alloy</div>
          <div>Naples, Italy</div>
        </div>
        <div className={styles.info}>
          <div>Assembled</div>
          <div>Milan, Italy</div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.heading}>History</div>
        <div className={styles.infoGrid}>
          <div className={styles.gridHeading}>Event</div>
          <div className={styles.gridHeading}>From</div>
          <div className={styles.gridHeading}>To</div>
          <div className={styles.gridHeading}>Date</div>
          <div className={styles.gridItem}>Transfer</div>
          <div className={styles.gridItem}>2FB40A</div>
          <div className={styles.gridItem}>CheFird</div>
          <div className={styles.gridItem}>3 months ago</div>
          <div className={styles.gridItem}>Transfer</div>
          <div className={styles.gridItem}>AD_dude</div>
          <div className={styles.gridItem}>2FB40A</div>
          <div className={styles.gridItem}>5 months ago</div>
          <div className={styles.gridItem}>Repair</div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}>6 months ago</div>
          <div className={styles.gridItem}>Transfer</div>
          <div className={styles.gridItem}>Red80</div>
          <div className={styles.gridItem}>AD_dude</div>
          <div className={styles.gridItem}>15 months ago</div>
          <div className={styles.gridItem}>Repair</div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}></div>
          <div className={styles.gridItem}>19 months ago</div>
          <div className={styles.gridItem}>Purchase</div>
          <div className={styles.gridItem}>Store</div>
          <div className={styles.gridItem}>Red80</div>
          <div className={styles.gridItem}>19 months ago</div>
        </div>
      </div>
    </div>
  );
}
