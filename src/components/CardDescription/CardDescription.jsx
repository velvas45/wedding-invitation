import React from "react";
import Button from "../Button/Button";
import styles from "./CardDescription.module.css";

function CardDescription({
  titleName,
  contentValue,
  fatherName,
  motherName,
  urlInstagram,
}) {
  return (
    <div className={styles.card_description}>
      <h3 className={styles.card_description__title}>{titleName}</h3>
      <div className={styles.card_description__context}>
        <h6>{contentValue}</h6>
        <p>
          Bapak {fatherName} <br /> & Ibu {motherName}
        </p>
      </div>

      <a href={urlInstagram} target="_blank" rel="noreferrer">
        <Button title="INSTAGRAM" />
      </a>
    </div>
  );
}

export default CardDescription;
