import React from "react";
import styles from "./CardTime.module.css";

function CardTime({ timeValue, name }) {
  return (
    <div className={styles.card__time}>
      <span className={styles.card__time_time}>{timeValue}</span>
      <span className={styles.card__time_timeName}>{name}</span>
    </div>
  );
}

export default CardTime;
