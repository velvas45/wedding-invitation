import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import SectionOne from "./components/base/SectionOne/SectionOne";
import SectionTwo from "./components/base/SectionTwo/SectionTwo";
import SectionThree from "./components/base/SectionThree/SectionThree";
import SectionFour from "./components/base/SectionFour/SectionFour";
import SectionFive from "./components/base/SectionFive/SectionFive";
import SectionSix from "./components/base/SectionSix/SectionSix";
import SectionSeven from "./components/base/SectionSeven/SectionSeven";
import SectionEight from "./components/base/SectionEight/SectionEight";
import Modal from "./components/Modal/Modal";
import { ToastContainer } from "react-toastify";

import { useStateAudioContext } from "./context/soundContext";

function App() {
  const { muted, toggleAudio, toggleMuted } = useStateAudioContext();
  const [visibleModal, setVisibleModal] = useState(true);

  const closeModal = () => {
    setVisibleModal((prev) => (prev = false));
    toggleAudio(true);
  };

  let search = window.location.search;
  let params = new URLSearchParams(search);

  const invitationToUser = params.get("invitation_to")
    ? `${params.get("invitation_to")} & Family`
    : "All Invitation";

  return (
    <>
      {/* {visibleModal && (
        <Modal
          isVisible={visibleModal}
          btnClick={closeModal}
          invitationTitle={invitationToUser}
        />
      )} */}
      <Modal
        isVisible={visibleModal}
        btnClick={closeModal}
        invitationTitle={invitationToUser}
      />
      {!visibleModal && (
        <>
          <div className="container">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
          </div>
          {muted ? (
            <button
              type="button"
              className="float_button"
              onClick={() => toggleMuted(false)}
            >
              <FontAwesomeIcon icon={faVolumeHigh} />
            </button>
          ) : (
            <button
              type="button"
              className="float_button"
              onClick={() => toggleMuted(true)}
            >
              <FontAwesomeIcon icon={faVolumeXmark} />
            </button>
          )}
        </>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
