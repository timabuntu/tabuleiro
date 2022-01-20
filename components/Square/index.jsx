import styles from "../../styles/Square.module.css";

const Square = ({ dark }) => {
  return (
    <div
      style={{
        backgroundColor: dark ? "#111" : "#f2f2f2",
      }}
      className={styles.square}
    ></div>
  );
};

export default Square;
