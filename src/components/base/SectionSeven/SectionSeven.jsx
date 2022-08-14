import React from "react";
import Logo from "../../../assets/img/logo_wedding.png";
import styles from "./SectionSeven.module.css";

function SectionSeven() {
  return (
    <section className={styles.Section_Seven}>
      <img
        src={Logo}
        className="logo_wedding"
        alt="Logo"
        width={150}
        height={150}
        loading="lazy"
      />
      <div className={styles.Section_Seven__content}>
        <h3>Terima Kasih</h3>
        <p>
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada
          Kami.
        </p>
        <span className={styles.Couple}>Anggie & Helmi</span>
      </div>
      <div className={styles.Section_Seven__copyright}>
        <h2>CREATED BY</h2>
        <p>&copy; 2022 ANGGIE & HELMI</p>
      </div>
    </section>
  );
}

export default SectionSeven;
