import Square from "../components/Square";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Square dark />
      <Square />
      <Square dark />
    </div>
  );
}
