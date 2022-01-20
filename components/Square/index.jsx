import styles from "../../styles/Square.module.css";

const Square = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.dark ? "#111" : "#f2f2f2",
      }}
      className={styles.square}
    ></div>
  );
};

export default Square;
