import React from "react";
import Logo from "../../../assets/img/logo_wedding.png";
import Poster from "../../../assets/img/poster_video.png";
import styles from "./SectionFive.module.css";

import { useStateAudioContext } from "../../../context/soundContext";
import ReactPlayer from "react-player/lazy";
import Gallery from "../../Gallery/Gallery";
import Video from "../../../assets/video/prewedding.mp4";

import { img_gallery_data } from "../../../data/image";

function SectionFive() {
  const { toggleAudio } = useStateAudioContext();

  return (
    <section className={styles.Section_Five}>
      <img
        src={Logo}
        className="logo_wedding"
        alt="Logo"
        width={150}
        height={150}
        loading="lazy"
      />

      <h3 className={styles.Section_Five__title} data-text="Our Gallery">
        Our Gallery
      </h3>
      <div className={styles.Section_Five__mainContent}>
        <div className={styles.Section_Five__video}>
          <ReactPlayer
            className="video-player"
            url={Video}
            onPlay={() => toggleAudio(false)}
            onPause={() => toggleAudio(true)}
            onEnded={() => toggleAudio(true)}
            controls={true}
            light={Poster}
            width="100%"
          />
        </div>

        <Gallery galleryImages={img_gallery_data} />
      </div>
    </section>
  );
}
export default SectionFive;
