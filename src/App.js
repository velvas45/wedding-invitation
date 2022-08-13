import "./App.css";
import { useState, useCallback } from "react";

import SectionOne from "./components/base/SectionOne/SectionOne";
import SectionTwo from "./components/base/SectionTwo/SectionTwo";
import SectionThree from "./components/base/SectionThree/SectionThree";
import SectionFour from "./components/base/SectionFour/SectionFour";
import SectionFive from "./components/base/SectionFive/SectionFive";
import SectionSix from "./components/base/SectionSix/SectionSix";
import SectionSeven from "./components/base/SectionSeven/SectionSeven";
import Modal from "./components/Modal/Modal";
import { useSearchParams } from "react-router-dom";

function App() {
  const [visibleModal, setVisibleModal] = useState(true);

  const closeModal = useCallback(() => {
    setVisibleModal((prev) => (prev = false));
  }, []);

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
        <div className="container">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
        </div>
      )}
      {/* <div className="container">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </div> */}
    </>
  );
}

export default App;
