import React from "react";
import Logo from "../../assets/img/logo_wedding.png";
import InvitationIcon from "../../assets/img/invitation_icon.svg";
import styles from "./Modal.module.css";
import { Animated } from "react-animated-css";

const Modal = ({
  btnClick,
  isVisible,
  invitationTitle,
  buttonDisabled,
  loadingFetch,
}) => {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
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
          {loadingFetch ? (
            <p>Loading ...</p>
          ) : (
            <>
              {invitationTitle ? (
                <p data-text={`${invitationTitle}`}>{invitationTitle}</p>
              ) : (
                <p style={{ color: "#dc3545", fontWeight: "bold" }}>
                  Mohon Maaf Kapasitas Sudah Maksimal
                </p>
              )}
              <button
                type="button"
                onClick={btnClick}
                className={styles.Modal__button}
                disabled={buttonDisabled}
              >
                <img src={InvitationIcon} alt="invitation" />{" "}
                <span>Open Invitation</span>
              </button>
            </>
          )}
        </div>
      </div>
    </Animated>
  );
};

export default Modal;
