import React from "react";
import Logo from "../../assets/img/logo_wedding.png";
import InvitationIcon from "../../assets/img/invitation_icon.svg";
import styles from "./Modal.module.css";
import { Animated } from "react-animated-css";

const Modal = ({ btnClick, isVisible, invitationTitle }) => {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="bounceOutRight"
      isVisible={isVisible}
      className={styles.Modal}
    >
      <div className={styles.Modal}>
        <img
          src={Logo}
          className="logo_wedding"
          alt="Logo"
          width={150}
          height={150}
          loading="lazy"
        />
        <div className={styles.Modal__title}>
          <p>Anggie</p>
          <p> & </p>
          <p>Helmi</p>
        </div>
        <span className={styles.Date}>12.11.22</span>

        <div className={styles.Modal__footer}>
          <p data-text={`Dear: ${invitationTitle}`}>Dear: {invitationTitle}</p>

          <button
            type="button"
            onClick={btnClick}
            className={styles.Modal__button}
          >
            <img src={InvitationIcon} alt="invitation" />{" "}
            <span>Buka Undangan</span>
          </button>
        </div>
      </div>
    </Animated>
  );
};

export default Modal;
