import "./App.css";
import { useState, useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";

import { useStateAudioContext } from "./context/soundContext";
import { client, list_invitation_query } from "./lib/sanity/client";

function App() {
  const { muted, toggleAudio, toggleMuted } = useStateAudioContext();
  const [visibleModal, setVisibleModal] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [invitationToUser, setInvitationToUser] = useState(null);

  const [loadingFetchInvitation, setLoadingFetchInvitation] = useState(true);

  const closeModal = () => {
    setVisibleModal((prev) => (prev = false));
    toggleAudio(true);
  };

  const getInvitation = async () => {
    setLoadingFetchInvitation(true);
    try {
      const data = await client.fetch(list_invitation_query);

      let search = window.location.search;
      let params = new URLSearchParams(search);

      // CHECKING APAKAH WEBSITE MEMILIKI PARAMS INVITATION TO
      /**
       * JIKA ADA MAKA DI CEK APAKAH PARAMS TERSEBUT SAMA DENGAN USER YANG TERDAFTAR?
       * JIKA TIDAK MAKA USER TSB TIDAK BERHAK MELIHAT ISI KONTENT
       * JIKA TERDAPAT DALAM LIST BOLEH MELIHAT ISINYA.
       */
      if (params.get("invitation_to")) {
        setButtonDisabled(false);
        const existInvitation = data.find(
          (list) =>
            list.slug.toLowerCase().trim() ===
            params.get("invitation_to").toLowerCase().trim()
        );

        if (existInvitation) {
          setInvitationToUser(existInvitation.label);
        } else {
          setInvitationToUser(null);
          setButtonDisabled(true);
        }
      } else {
        setInvitationToUser(null);
        setButtonDisabled(true);
      }

      setLoadingFetchInvitation(false);
    } catch (error) {
      toast("Network error, please refresh again.", {
        type: "error",
        toastId: "update-list-invitation",
        position: "top-right",
        autoClose: 1000,
        closeOnClick: true,
      });

      setLoadingFetchInvitation(false);
    }
  };

  useEffect(() => {
    getInvitation().catch((err) => console.log(err.response));
  }, []);

  return (
    <>
      <Modal
        buttonDisabled={buttonDisabled}
        isVisible={visibleModal}
        btnClick={closeModal}
        loadingFetch={loadingFetchInvitation}
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
