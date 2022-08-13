import React from "react";
import Border from "../../../assets/img/border_img.svg";
import Logo from "../../../assets/img/logo_wedding.png";
import styles from "./SectionOne.module.css";

import CardTime from "../../CardTime/CardTime";

import { useCountdown } from "../../../hooks/useCountdown";

export default function SectionOne() {
  const prepareDate = (date) => {
    const [d, m, y] = date.split("-"); //Split the string
    return [y, m - 1, d]; //Return as an array with y,m,d sequence
  };

  const targetDate = "12-11-2022";

  const [days, hours, minutes, seconds] = useCountdown(
    new Date(...prepareDate(targetDate)).getTime()
  );
  return (
    <section className={styles.section_one}>
      <div className={styles.section_one__shadow}></div>
      <div className={styles.section_one__content}>
        <img
          src={Logo}
          className={styles.logo}
          alt="Logo"
          width={150}
          height={150}
          loading="lazy"
        />
        <div className={styles.section_one__content_title}>
          <h2>Anggie & Helmi</h2>
          <p>12 November 2022</p>
          <img src={Border} alt="border_img" />
        </div>

        <div className={styles.section_one__content_text}>
          <div className={styles.section_one__content_time}>
            <CardTime timeValue={days} name="Days" />
            <CardTime timeValue={hours} name="Hours" />
            <CardTime timeValue={minutes} name="Minutes" />
            <CardTime timeValue={seconds} name="Second" />
          </div>
          <p>
            Maha Suci Allah yang telah menciptakan manusia dengan
            berpasang-pasangan. Dengan memohon Rahmat dan Ridho Allah SWT, kami
            bermaksud mengundang Saudara/i dalam acara resepsi pernikahan kami.
          </p>
        </div>
      </div>
    </section>
  );
}
