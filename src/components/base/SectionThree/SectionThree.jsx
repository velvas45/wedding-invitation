import React from "react";
import Logo from "../../../assets/img/logo_wedding.png";
import CardDescription from "../../CardDescription/CardDescription";

import styles from "./SectionThree.module.css";

function SectionThree() {
  return (
    <section className={styles.section_three}>
      <img
        src={Logo}
        className="logo_wedding"
        alt="Logo"
        width={150}
        height={150}
        loading="lazy"
      />
      <div className={styles.section_three__content}>
        <p className={styles.section_three__content_title}>The Groom</p>
        <CardDescription
          titleName="Helmi Agustiawan Dwi Putra Adi, S.Kom"
          contentValue="Putra Tunggal dari :"
          fatherName="Eddy Joewono"
          motherName="Rohmiati"
          urlInstagram="https://www.instagram.com/helmi_agustiawan/"
        />
      </div>
    </section>
  );
}

export default SectionThree;
