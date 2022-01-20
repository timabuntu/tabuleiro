import Line from "../components/Line";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Line initDark />
      <Line />
      <Line initDark />
      <Line />
      <Line initDark />
      <Line />
      <Line initDark />
      <Line />
    </div>
  );
}
