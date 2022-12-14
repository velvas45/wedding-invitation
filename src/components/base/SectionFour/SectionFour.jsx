import React from "react";
import Logo from "../../../assets/img/logo_wedding.png";
import styles from "./SectionFour.module.css";
import Button from "../../Button/Button";
import { motion } from "framer-motion";

import { sectionFourVariants } from "../../../variants";
import { handleClickSaveCalendar } from "../../../lib/calendar_api";

function SectionFour() {
  return (
    <section className={styles.Section_Four}>
      <img
        src={Logo}
        className="logo_wedding"
        alt="Logo"
        width={150}
        height={150}
        loading="lazy"
      />
      <motion.div
        variants={sectionFourVariants}
        initial="hidden"
        whileInView="visible"
        className={styles.Section_Four__Card}
      >
        <div className={styles.Section_Four__InnerCard}>
          <div className={styles.Section_Four__CardTitle}>
            <h3>Wedding</h3>
            <h4>Event</h4>
          </div>
          <div className={styles.Section_Four__CardContent}>
            <div className={styles.Section_Four__CardContentAkad}>
              <p>AKAD NIKAH</p>
              <p>SABTU, 12 NOVEMBER 2022 08.00 - Selesai</p>
              <p>Hotel Swiss-Bel Bogor - Kota Bogor</p>
            </div>
            <div className={styles.Section_Four__CardContentResepsi}>
              <p>Resepsi</p>
              <p>SABTU, 12 NOVEMBER 2022 11.00 - 13.00</p>
              <p>Hotel Swiss-Bel Bogor - Kota Bogor</p>
            </div>

            <div className={styles.Section_Four__CardBtn}>
              <a
                href="https://g.page/swissbelhotelbogor?share"
                target="_blank"
                rel="noreferrer"
              >
                <Button isAnimated title="GOOGLE MAPS" />
              </a>
              <Button
                isAnimated
                title="SAVE"
                type="primary"
                onClick={handleClickSaveCalendar}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionFour;
