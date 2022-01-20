import Square from "../Square";

import styles from "../../styles/Line.module.css";

const Line = ({ initDark }) => (
  <div className={styles.line}>
    <Square dark={initDark} />
    <Square dark={!initDark} />
    <Square dark={initDark} />
    <Square dark={!initDark} />
    <Square dark={initDark} />
    <Square dark={!initDark} />
    <Square dark={initDark} />
    <Square dark={!initDark} />
  </div>
);

export default Line;
