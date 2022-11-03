import React from "react";
import Logo from "../../../assets/img/logo_wedding.png";
import CardDescription from "../../CardDescription/CardDescription";
import { motion } from "framer-motion";

import styles from "./SectionThree.module.css";
import { cardDescriptionVariants } from "../../../variants";

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
      <motion.div
        variants={cardDescriptionVariants}
        initial="hidden"
        whileInView="visible"
        className={styles.section_three__content}
      >
        <p className={styles.section_three__content_title}>The Groom</p>
        <CardDescription
          titleName="Helmi Agustiawan Dwi Putra Adi, S.Kom"
          contentValue="Putra Tunggal dari :"
          fatherName="Eddy Joewono"
          motherName="Rohmiati"
          urlInstagram="https://www.instagram.com/helmi_agustiawan/"
        />
      </motion.div>
    </section>
  );
}

export default SectionThree;
