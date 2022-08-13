import React from "react";
import Logo from "../../../assets/img/logo_wedding.png";
import CardDescription from "../../CardDescription/CardDescription";

import styles from "./SectionTwo.module.css";

function SectionTwo() {
  return (
    <section className={styles.section_two}>
      <img src={Logo} alt="Logo" width={150} height={150} loading="lazy" />
      <div className={styles.section_two__content}>
        <p className={styles.section_two__content_title}>The Bride</p>
        <CardDescription
          titleName="Anggie Febi Yaditha, S.Kom"
          contentValue="Putri Pertama dari :"
          fatherName="Mulyadi"
          motherName="Rita Sulastri"
          urlInstagram="https://www.instagram.com/Anggiefebiyy/"
        />
      </div>
    </section>
  );
}

export default SectionTwo;
