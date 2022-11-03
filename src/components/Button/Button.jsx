import React from "react";
import styles from "./Button.module.css";
import { motion } from "framer-motion";

import { buttonVariants } from "../../variants";

function Button({ type, title, isAnimated, ...props }) {
  return isAnimated ? (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      className={`${styles.ButtonCustom} ${{ ...props.className }}`}
      type="button"
      data-button={type || ""}
      {...props}
    >
      {title}
    </motion.button>
  ) : (
    <button
      className={`${styles.ButtonCustom} ${{ ...props.className }}`}
      type="button"
      data-button={type || ""}
      {...props}
    >
      {title}
    </button>
  );
}

export default Button;
