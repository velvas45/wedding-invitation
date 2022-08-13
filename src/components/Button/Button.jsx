import React from "react";
import styles from "./Button.module.css";

function Button({ type, title, ...props }) {
  return (
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
