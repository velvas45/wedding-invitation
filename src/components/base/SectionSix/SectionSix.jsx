import React from "react";
import styles from "./SectionSix.module.css";
import Logo from "../../../assets/img/logo_wedding.png";
import Button from "../../Button/Button";
import { motion } from "framer-motion";

import { cardDescriptionVariants } from "../../../variants";

import { toast } from "react-toastify";

import { copyTextToClipboard } from "../../../lib/utils/copyToClipboard";

export default function SectionSix() {
  const onCopyText = (text) => {
    copyTextToClipboard(text)
      .then(() => {
        // If successful, update the isCopied state value
        toast("Account Number Copied Successfully!", {
          toastId: "copy-norek",
          position: "bottom-center",
          autoClose: 1500,
          closeOnClick: true,
        });
      })
      .catch((err) => {
        toast("Failed to copy account number", {
          toastId: "copy-norek",
          type: "error",
          position: "bottom-center",
          autoClose: 1500,
          closeOnClick: true,
        });
      });
  };

  return (
    <>
      <section className={styles.Section_Six}>
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
          className={styles.Section_Six__content}
        >
          <div className={styles.Section_Six__bank}>
            <p>MANDIRI - Anggie Febi Yaditha</p>
            <p>1330015415227</p>
            <Button
              isAnimated
              type="secondary"
              title="Copy"
              style={{ width: "120px" }}
              onClick={() => onCopyText("1330015415227")}
            />
          </div>
          <div className={styles.Divide}></div>
          <div className={styles.Section_Six__bank}>
            <p>BCA - Anggie Febi Yaditha</p>
            <p>8410649099</p>
            <Button
              isAnimated
              type="secondary"
              title="Copy"
              style={{ width: "120px" }}
              onClick={() => onCopyText("8410649099")}
            />
          </div>

          <span>Or</span>
          <div className={styles.Section_Six__Gift}>
            <p>Send gift to</p>
            <p>
              Villa Bogor Indah blok EE 3 no 9, Ciparigi, Bogor utara, Kota
              Bogor, 16157.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
