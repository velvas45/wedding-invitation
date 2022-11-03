import React from "react";
import Logo from "../../../assets/img/logo_wedding.png";
import CardDescription from "../../CardDescription/CardDescription";
import { motion } from "framer-motion";

import { cardDescriptionVariants } from "../../../variants";
import styles from "./SectionTwo.module.css";

function SectionTwo() {
  return (
    <section className={styles.section_two}>
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
        className={styles.section_two__content}
      >
        <p className={styles.section_two__content_title}>The Bride</p>
        <CardDescription
          titleName="Anggie Febi Yaditha, S.Kom"
          contentValue="Putri Pertama dari :"
          fatherName="Mulyadi"
          motherName="Rita Sulastri"
          urlInstagram="https://www.instagram.com/Anggiefebiyy/"
        />
      </motion.div>
    </section>
  );
}

export default SectionTwo;
