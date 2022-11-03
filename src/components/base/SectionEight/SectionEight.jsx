import React from "react";
import Logo from "../../../assets/img/logo_wedding.png";
import styles from "./SectionEight.module.css";
import { motion } from "framer-motion";

import { cardDescriptionVariants } from "../../../variants";

function SectionEight() {
  return (
    <section className={styles.Section_Eight}>
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
        className={styles.Section_Eight__content}
      >
        <h3>Thank you</h3>
        <p>
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada
          Kami.
        </p>
        <span className={styles.Couple}>Anggie & Helmi</span>
      </motion.div>
      <motion.div
        variants={cardDescriptionVariants}
        initial="hidden"
        whileInView="visible"
        className={styles.Section_Eight__copyright}
      >
        <h2>CREATED BY</h2>
        <p>&copy; 2022 ANGGIE & HELMI</p>
      </motion.div>
    </section>
  );
}

export default SectionEight;
