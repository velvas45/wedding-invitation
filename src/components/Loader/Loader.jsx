import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader__ring}></div>
      <div className={styles.loader__ring}></div>
      <div className={styles.loader__ring}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
